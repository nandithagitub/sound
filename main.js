//107

function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    })
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/WszFFstlX/model.json", modelReady); 
}

function modelReady(){
    classifier.classify(gotResults);
}

//108

function gotResults(error, results) {
    if(error){
      console.log(error);
    }
    else {
      console.log("got Results");
      console.log(results);
  
      random_number_r = Math.floor(Math.random() * 255) + 1;
      random_number_g = Math.floor(Math.random() * 255) + 1;
      random_number_b = Math.floor(Math.random() * 255) + 1;
  
      document.getElementById("result_label").innerHTML = "I can hear - " + results[0].label;
      document.getElementById("result_confidence").innerHTML = results[0].confidence.toFixed(2) * 100 + "%";
      document.getElementById("result_label").style.color = "rgb("+ random_number_r + "," + random_number_g + "," + random_number_b + ")";
      document.getElementById("result_confidence").style.color = "rgb("+ random_number_r + "," + random_number_g + "," + random_number_b + ")";
  
      img1 = document.getElementById("alien1");
      img2 = document.getElementById("alien2");
      img3 = document.getElementById("alien3");
      img4 = document.getElementById("alien4");

      if(results[0].label === "Clap") {
       img1.src = "aliens-01.gif"
       img2.src = "aliens-02.png"
       img3.src = "aliens-03.png"
       img4.src = "aliens-04.png"
      }
      else if(results[0].label === "Guitar") {
        img1.src = "aliens-01.png"
        img2.src = "aliens-02.gif"
        img3.src = "aliens-03.png"
        img4.src = "aliens-04.png" 
      }
      else if(results[0].label === "Spoon") {
        img1.src = "aliens-01.png"
        img2.src = "aliens-02.png"
        img3.src = "aliens-03.gif"
        img4.src = "aliens-04.png"
      }
      else {
        img1.src = "aliens-01.png"
        img2.src = "aliens-02.png"
        img3.src = "aliens-03.png"
        img4.src = "aliens-04.gif"
      }
    }
  }