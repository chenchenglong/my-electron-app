const { contextBridge, ipcRenderer } = require("electron/renderer");

contextBridge.exposeInMainWorld("versions", {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  ping: () => ipcRenderer.invoke("ping"),
  quitWebWindow: () => ipcRenderer.invoke("quitWebWindow"),
  quitApp: () => ipcRenderer.invoke("quitApp"),
  // 除函数之外，我们也可以暴露变量
});

contextBridge.exposeInMainWorld("myAPI", {
  desktop: true,
});

contextBridge.exposeInMainWorld("electronAPI", {
  setTitle: (title) => ipcRenderer.send("set-title", title),
  openFile: () => ipcRenderer.invoke("dialog:openFile"),
});
