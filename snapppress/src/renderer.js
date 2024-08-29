document
  .getElementById("take-screenshot")
  .addEventListener("click", async () => {
    // Create a transparent window for selection
    const selectionWindow = window.open('', '', `width=${window.screen.width},height=${window.screen.height},frame=false,transparent=true`);
    selectionWindow.document.body.style.cursor = 'crosshair';
    selectionWindow.document.body.style.userSelect = 'none';
    
    let selectionElement = selectionWindow.document.createElement('div');
    selectionElement.style.position = 'fixed';
    selectionElement.style.border = '2px solid red';
    selectionElement.style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
    selectionWindow.document.body.appendChild(selectionElement);

    selectionWindow.addEventListener('mousedown', startSelection);
    selectionWindow.addEventListener('mousemove', updateSelection);
    selectionWindow.addEventListener('mouseup', endSelection);

    let startX, startY;

    function startSelection(e) {
      startX = e.clientX;
      startY = e.clientY;
    }

    function updateSelection(e) {
      if (!startX || !startY) return;
      
      const width = Math.abs(e.clientX - startX);
      const height = Math.abs(e.clientY - startY);
      const left = Math.min(e.clientX, startX);
      const top = Math.min(e.clientY, startY);
      
      selectionElement.style.left = `${left}px`;
      selectionElement.style.top = `${top}px`;
      selectionElement.style.width = `${width}px`;
      selectionElement.style.height = `${height}px`;
    }

    async function endSelection(e) {
      const bounds = {
        x: parseInt(selectionElement.style.left),
        y: parseInt(selectionElement.style.top),
        width: parseInt(selectionElement.style.width),
        height: parseInt(selectionElement.style.height)
      };

      selectionWindow.close();

      try {
        const { sourceId } = await window.electronAPI.captureScreenArea(bounds);

        const stream = await navigator.mediaDevices.getUserMedia({
          audio: false,
          video: {
            mandatory: {
              chromeMediaSource: "desktop",
              chromeMediaSourceId: sourceId,
              minWidth: 1,
              maxWidth: 4000,
              minHeight: 1,
              maxHeight: 4000
            }
          }
        });

        const video = document.createElement("video");
        video.srcObject = stream;
        
        await new Promise(resolve => video.onloadedmetadata = resolve);
        video.play();

        const canvas = document.createElement("canvas");
        canvas.width = bounds.width;
        canvas.height = bounds.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(video, bounds.x, bounds.y, bounds.width, bounds.height, 0, 0, bounds.width, bounds.height);

        stream.getTracks().forEach(track => track.stop());

        const dataURL = canvas.toDataURL("image/png");
        const saveResult = await window.electronAPI.saveScreenshot(dataURL);

        if (saveResult.success) {
          const preview = document.getElementById("screenshot-preview");
          preview.innerHTML = ""; // Clear previous content

          const img = document.createElement("img");
          img.src = dataURL;
          img.alt = "Screenshot";
          img.className = "screenshot-image";
          preview.appendChild(img);

          const p = document.createElement("p");
          p.textContent = `Screenshot saved to: ${saveResult.filePath}`;
          preview.appendChild(p);

          // Upload to WordPress
          const uploadResult = await window.electronAPI.uploadToWordPress(
            saveResult.filePath
          );
          if (uploadResult.success) {
            const wpLink = document.createElement("a");
            wpLink.href = uploadResult.mediaUrl;
            wpLink.textContent = "View on WordPress";
            wpLink.target = "_blank";
            preview.appendChild(wpLink);

            // Copy the URL to clipboard
            await window.electronAPI.copyToClipboard(uploadResult.mediaUrl);

            const clipboardMsg = document.createElement("p");
            clipboardMsg.textContent = "Image URL copied to clipboard!";
            clipboardMsg.style.color = "green";
            preview.appendChild(clipboardMsg);
          } else {
            console.error("Failed to upload to WordPress:", uploadResult.error);
            const errorP = document.createElement("p");
            errorP.textContent = `Failed to upload to WordPress: ${uploadResult.error}`;
            if (
              uploadResult.error === "WordPress settings are not configured"
            ) {
              errorP.textContent +=
                " Please configure your WordPress settings.";
            }
            errorP.style.color = "red";
            preview.appendChild(errorP);
          }
        } else {
          console.error("Failed to save screenshot:", saveResult.error);
        }
      } catch (error) {
        console.error("Error capturing screenshot:", error);
      }
    }
  });

document.getElementById("settings-icon").addEventListener("click", () => {
  window.electronAPI.openSettings();
});
