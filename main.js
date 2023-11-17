function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    })
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Hvf0t40lQ/model.json", modelready)
}
function modelready(){
    classifier.classify(gotresults)
}
function gotresults(error, results){
    if (error) {
        console.log(error)
    } else {
        console.log(results)
        document.getElementById("result_label").innerHTML="i can hear :)"+results[0].label
        document.getElementById("result_confidence").innerHTML="i can hear :)"+results[0].confidence
   random_number_r=Math.floor(Math.random()*255)+1
   random_number_g=Math.floor(Math.random()*255)+1
   random_number_b=Math.floor(Math.random()*255)+1
   document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")"
           console.log(results)
           img1=document.getElementById("alien1")
           img2=document.getElementById("alien2")
           img3=document.getElementById("alien3")
           img4=document.getElementById("alien4")
           if (results[0].label=="Dog") {
               img1.src="doggif.gif"
               img2.src="cat.jpeg"
               img3.src="chicken.jpeg"
               img4.src="ear.jpg"
           }else if(results[0].label=="Cat")
            {img1.src="dog.jpeg"
            img2.src="cat.gif"
            img3.src="chicken.jpeg"
            img4.src="ear.jpg"
           }
           else if(results[0].label=="Chicken")
            {img1.src="dog.jpeg"
            img2.src="cat.jpeg"
            img3.src="chicken.gif"
            img4.src="ear.jpg"
           }
           else
            {img1.src="dog.jpeg"
            img2.src="cat.jpeg"
            img3.src="chicken.jpeg"
            img4.src="ear.jpg" 
           }
       }
    }
