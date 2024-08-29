document
  .getElementById("take-screenshot")
  .addEventListener("click", async () => {
    try {
      const sources = await window.electronAPI.captureScreen();
      const source = sources[0]; // Assuming we want to capture the primary screen

      const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          mandatory: {
            chromeMediaSource: "desktop",
            chromeMediaSourceId: source.id,
          },
        },
      });

      const video = document.createElement("video");
      video.srcObject = stream;
      video.onloadedmetadata = async () => {  // Make this callback async
        video.play();
        const canvas = document.createElement("canvas");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        canvas.getContext("2d").drawImage(video, 0, 0);
        stream.getTracks().forEach((track) => track.stop());
        video.remove();

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
          const uploadResult = await window.electronAPI.uploadToWordPress(saveResult.filePath);
          if (uploadResult.success) {
            const wpLink = document.createElement("a");
            wpLink.href = uploadResult.mediaUrl;
            wpLink.textContent = "View on WordPress";
            wpLink.target = "_blank";
            preview.appendChild(wpLink);
          } else {
            console.error("Failed to upload to WordPress:", uploadResult.error);
            const errorP = document.createElement("p");
            errorP.textContent = `Failed to upload to WordPress: ${uploadResult.error}`;
            errorP.style.color = "red";
            preview.appendChild(errorP);
          }
        } else {
          console.error("Failed to save screenshot:", saveResult.error);
        }
      };
    } catch (error) {
      console.error("Error capturing screenshot:", error);
    }
  });
