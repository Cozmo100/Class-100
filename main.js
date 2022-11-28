

var SpeechRecognition = window.webkitSpeechRecognition
var r = new SpeechRecognition()

function Begin(){
    r.start();
}

r.onresult = function run(event){
    data = event.results[0][0].transcript
    document.getElementById('textbox').innerHTML = data

    if(data == "take my picture"){
        console.log("Taking picture---")
        speak();
    }

    
}

function speak()
{
    var synth = window.speechSynthesis;
    var text = "Taking Selfie In 5 Seconds"
    var ut = new SpeechSynthesisUtterance(text);
    synth.speak(ut);
    Webcam.attach("#camera");
}

Webcam.set ({
    width: 300 , height: 300 , image_format: "png" , png_quality: 90 
})

camera = document.getElementById('camera').value;

function TakePic() {
    Webcam.snap(function(data_uri){
        document.getElementById('result').innerHTML = "<img id='new_img' src="+data_uri+">"
    })
}

setTimeout(function(){
    TakePic();
    SavePic();
},5000)

function SavePic(){
    i = document.getElementById('new_img').src;
    l = document.getElementById('link');
    l.href = i;
    l.click()
}