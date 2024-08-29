const { app, BrowserWindow, ipcMain, desktopCapturer } = require("electron");
const fs = require("fs");
const pathModule = require("path");
const axios = require("axios");
const FormData = require("form-data");

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: pathModule.join(__dirname, '../assets/snappress.icns'),
    webPreferences: {
      preload: pathModule.join(__dirname, "preload.js"),
      contextIsolation: true, // Change this to true
      nodeIntegration: false, // This should be false for security
    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile(pathModule.join(__dirname, "index.html"));

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

ipcMain.handle("capture-screen", async () => {
  const sources = await desktopCapturer.getSources({ types: ["screen"] });
  return sources;
});

ipcMain.handle("save-screenshot", async (event, dataURL) => {
  const base64Data = dataURL.replace(/^data:image\/png;base64,/, "");
  const filePath = pathModule.join(
    app.getPath("pictures"),
    `screenshot-${Date.now()}.png`
  );

  try {
    await fs.promises.writeFile(filePath, base64Data, "base64");
    return { success: true, filePath };
  } catch (error) {
    console.error("Failed to save screenshot:", error);
    return { success: false, error: error.message };
  }
});

ipcMain.handle("upload-to-wordpress", async (event, filePath) => {
  const formData = new FormData();
  formData.append("file", fs.createReadStream(filePath));

  try {
    const response = await axios.post(
      "https://shaunandrews.com/wp-json/wp/v2/media",
      formData,
      {
        headers: {
          ...formData.getHeaders(),
          Authorization: "Basic " + Buffer.from("shaunandrews:SwHZ j2Kk aNW4 E7DQ ieJj FvIu").toString("base64"),
        },
      }
    );

    return { success: true, mediaUrl: response.data.source_url };
  } catch (error) {
    console.error("Failed to upload to WordPress:", error);
    return { success: false, error: error.message };
  }
});
