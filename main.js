function preload(){
}
function setup(){
canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.hide();
clasifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Imm7Y81Jy/model.json', modelLoaded)
}
function modelLoaded(){
console.log('Model Loaded!');
}
function draw(){
image(video,0, 0, 300, 300);
classifier.classify(video, gotResult);
}
function gotResult(error, results){
if (error){
    console.error(error);
} else{
    console.log(result);
    document.getElementById("result_object_name").innerHTML = results[0].label;
    document.getElementById("result_accuracy_name").innerHTML = results[0].condience.toFixed(3);
}
}