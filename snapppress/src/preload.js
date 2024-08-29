const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  captureScreen: () => ipcRenderer.invoke("capture-screen"),
  saveScreenshot: (dataURL) => ipcRenderer.invoke("save-screenshot", dataURL),
  uploadToWordPress: (filePath) => ipcRenderer.invoke("upload-to-wordpress", filePath),
});
