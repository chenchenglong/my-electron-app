const func = async () => {
  const response = await window.versions.ping();
  console.log(response); // 打印 'pong'
};

const information = document.getElementById("info");
information.innerText = `This app is using Chrome (v${window.versions.chrome()}), Node.js (v${window.versions.node()}), and Electron (v${window.versions.electron()})`;
information.style.color = "#f00";

const button = document.getElementById("button");
button.style.border = "1px solid #000";
button.addEventListener("click", () => {
  console.log("按钮被点击了");
  information.innerText = Math.random();
  func();
});

const buttonQuitWin = document.getElementById("button-quit-win");
buttonQuitWin.addEventListener("click", () => {
  window.versions.quitWebWindow();
});

const buttonQuitApp = document.getElementById("button-quit-app");
buttonQuitApp.addEventListener("click", () => {
  window.versions.quitApp();
});

console.log(window.myAPI);
// => { desktop: true }

/**
 * 渲染器进程到主进程（单向）
 */
// const setButton = document.getElementById("btn");
// const titleInput = document.getElementById("title");
// setButton.addEventListener("click", () => {
//   const title = titleInput.value;
//   window.electronAPI.setTitle(title);
// });

/**
 * 渲染器进程到主进程（双向）
 */
const btnOpenFile = document.getElementById("btn");
const filePathElement = document.getElementById("filePath");

btnOpenFile.addEventListener("click", async () => {
  console.log("####btnOpenFile");
  const filePath = await window.electronAPI.openFile();
  console.log("####filePath", filePath);
  filePathElement.innerText = filePath;
});
