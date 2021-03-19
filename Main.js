Webcam.set({
    height: 250,
    width: 400,
    image_format: 'png',
    png_quality: 700
});
camera = document.getElementById("camera")
Webcam.attach("camera");

console.log("ml5 version: " + ml5.version);
var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/hLJh_ClDj/model.json", Model_Loaded);
function Model_Loaded(){
    console.log("Model Loaded!")
    Album();
}
function Album(){
    synth = window.speechSynthesis;
    speakData = "Model Loaded!";
    Data = new SpeechSynthesisUtterance(speakData);
    synth.speak(Data);
}