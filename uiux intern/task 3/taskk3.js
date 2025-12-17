const screens = document.querySelectorAll(".screen");
const reelBtn = document.getElementById("reelBtn");
const backBtn = document.getElementById("backBtn");
const video = document.getElementById("cameraView");
const flipCam = document.getElementById("flipCam");

let stream;
let facing = "user";

function showScreen(id) {
  screens.forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

async function startCamera() {
  stream = await navigator.mediaDevices.getUserMedia({
    video: { facingMode: facing },
    audio: false
  });
  video.srcObject = stream;
}

function stopCamera() {
  stream?.getTracks().forEach(track => track.stop());
}

reelBtn.addEventListener("click", async () => {
  showScreen("camera");
  await startCamera();
});

backBtn.addEventListener("click", () => {
  stopCamera();
  showScreen("home");
});

flipCam.addEventListener("click", async () => {
  stopCamera();
  facing = facing === "user" ? "environment" : "user";
  await startCamera();
});
