const { app, BrowserWindow, ipcMain, dialog } = require("electron/main");
// import { app, BrowserWindow } from "electron";
const path = require("node:path");
// require("update-electron-app")();

function handleSetTitle(event, title) {
  const webContents = event.sender;
  const win = BrowserWindow.fromWebContents(webContents);
  win.setTitle(title);
}

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  console.log("####loadFile html");
  win.loadFile("index.html");
  // win.loadURL("https://juejin.cn/post/6903352556656230408");
};

const createWebWindow = () => {
  const win = new BrowserWindow({
    width: 400,
    height: 300,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  console.log("####loadFile html");
  win.loadURL("https://juejin.cn/post/6903352556656230408");
};

const quitWebWindow = () => {
  const wins = BrowserWindow.getAllWindows();
  const win = BrowserWindow.getAllWindows()[0];
  console.log("####wins", wins);
  win.close();
};

async function handleFileOpen() {
  console.log("####handleFileOpen");
  const { canceled, filePaths } = await dialog.showOpenDialog({});
  if (!canceled) {
    console.log("####filePaths", filePaths);
    return filePaths[0];
  }
}

const quitApp = () => {
  app.quit();
};

app.whenReady().then(() => {
  ipcMain.on("set-title", handleSetTitle);

  ipcMain.handle("ping", () => {
    console.log("####pong");
    createWebWindow();
  });

  ipcMain.handle("quitWebWindow", () => {
    console.log("####quitWebWindow");
    quitWebWindow();
  });

  ipcMain.handle("quitApp", () => {
    console.log("####quitApp");
    quitApp();
  });

  ipcMain.handle("dialog:openFile", handleFileOpen);

  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  console.log("####window-all-closed");
  app.quit();
  //   if (process.platform !== "darwin") {
  //     app.quit();
  //   }
});
