function csfaoFco(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/EZIqOATRj/model.json", tsAd);
}
function tsAd(){
    classifier.classify(itYrst);
    
}
function itYrst(error, results){
    if (error){
        console.log(error);
    } else {
        console.log(results);
        rdbR = Math.floor(Math.random()*255)+1;
        rdbG = Math.floor(Math.random()*255)+1;
        rdbB = Math.floor(Math.random()*255)+1;

        document.getElementById("tGnel").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("tsAuc").innerHTML = "Accuracy - " + (results[0].confidence*100).toFixed(2)+"%";
        
        document.getElementById("tGnel").style.color = "rgb("+rdbR+", "+rdbG+", "+rdbB+")";
        document.getElementById("tsAuc").style.color = "rgb("+rdbR+", "+rdbG+", "+rdbB+")";

        thIm = document.getElementById("alienOne");
        thIm2 = document.getElementById("alienTwo");
        thIm3 = document.getElementById("alienThree");
        thIm4 = document.getElementById("alienFour");

        if (results[0].label == "Baby Shark"){
            thIm.src = "aliens-01.gif";
            thIm2.src = "aliens-02.png";
            thIm3.src = "aliens-03.png";
            thIm4.src = "aliens-04.png";
        } else if (results[0].label == "Clapping"){
            thIm.src = "aliens-01.png";
            thIm2.src = "aliens-02.gif";
            thIm3.src = "aliens-03.png";
            thIm4.src = "aliens-04.png";
        } else if (results[0].label == "Scissors"){
            thIm.src = "aliens-01.png";
            thIm2.src = "aliens-02.png";
            thIm3.src = "aliens-03.gif";
            thIm4.src = "aliens-04.png";
        } else {
            thIm.src = "aliens-01.png";
            thIm2.src = "aliens-02.png";
            thIm3.src = "aliens-03.png";
            thIm4.src = "aliens-04.gif";
        }
    }
}
//Inline, Inline-Block, Text-Shadow, Position ~ Finsh Project ~ Do quiz [10/21/21 6:29 PM]