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
