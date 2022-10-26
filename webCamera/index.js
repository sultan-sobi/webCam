console.clear();

var camera = document.getElementById("camera");
var webcam = navigator.mediaDevices.getUserMedia();
if (webcam) {
  navigator.mediaDevices
    .getUserMedia({
      video: true,
      audio: false,
    })
    .then(function (live) {
      camera.srcObject = live;
    })
    .catch(function (err) {
      console.log("error ,please try again");
    });
}
var canvas = document.getElementById("canvas");
var takePhoto = document.getElementById("btn");
var context = canvas.getContext("2d");
takePhoto.addEventListener("click", function () {
  context.drawImage(camera, 0, 0, 300, 300);
});
