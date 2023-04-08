//https://teachablemachine.withgoogle.com/models/FMGpNJIsj/model.json
Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});
Webcam.attach("#camera");

function capture() {
    Webcam.snap(function (pic) {
        document.getElementById("result").innerHTML = '<img id="capture_img" src="' + pic + '">';
    });
}
emoji_model=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/IO6SG3L0p/model.json",model_ready);
function model_ready(){
    console.log("model loaded succesfully");
}
prediction1="";
prediction2="";
function speak(){
    speak_data1="prediction 1 is "+prediction1;
    speak_data2="and prediction 2 is"+prediction2;
    Speak_audio=new SpeechSynthesisUtterance(speak_data1+speak_data2);
    window.speechSynthesis.speak(Speak_audio);
}