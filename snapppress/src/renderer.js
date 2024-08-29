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
      video.onloadedmetadata = () => {
        video.play();
        const canvas = document.createElement("canvas");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        canvas.getContext("2d").drawImage(video, 0, 0);
        stream.getTracks().forEach((track) => track.stop());
        video.remove();

        const dataURL = canvas.toDataURL("image/png");
        window.electronAPI.saveScreenshot(dataURL).then((result) => {
          if (result.success) {
            const preview = document.getElementById("screenshot-preview");
            preview.innerHTML = ""; // Clear previous content

            const img = document.createElement("img");
            img.src = dataURL;
            img.alt = "Screenshot";
            img.className = "screenshot-image";
            preview.appendChild(img);

            const p = document.createElement("p");
            p.textContent = `Screenshot saved to: ${result.filePath}`;
            preview.appendChild(p);
          } else {
            console.error("Failed to save screenshot:", result.error);
          }
        });
      };
    } catch (error) {
      console.error("Error capturing screenshot:", error);
    }
  });
