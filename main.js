sketch='sketch';
timer_counter=[1];
timer_check='';
drawn_sketch='';
answer_holder='set';
score='';
function updateCanvas(){
quick_draw_data_set=["aircraft carrier","airplane","alarm clock","ambulance","angel","animal migration","ant","anvil","apple","arm","asparagus","axe","backpack","banana","bandage","barn","baseball","baseball bat","basket","basketball","bat","bathtub","beach","bear","beard","bed","bee","belt","bench","bicycle","binoculars","bird","birthday cake","blackberry","blueberry","book","boomerang","bottlecap","bowtie","bracelet","brain","bread","bridge","broccoli","broom","bucket","bulldozer","bus","bush","butterfly","cactus","cake","calculator","calendar","camel","camera","camouflage","campfire","candle","cannon","canoe","car","carrot","castle","cat","ceiling fan","cello","cell phone","chair","chandelier","church","circle","clarinet","clock","zigzag"]
random_no = Math.floor((Math.random()*quick_draw_data_set.length)+1)
Element_of_array = quick_draw_data_set[random_no]
}
function setup(){
    canvas=createCanvas(280,280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
  synth=window.speechSynthesis;
  }
  function draw(){
    strokeWeight(13);
    stroke(0);
    if(mouseIsPressed){
      line(pmouseX,pmouseY,mouseX,mouseY);
    }
  } 
  function clearCanvas(){
    background("white");
  }
function preload(){
  classifier=ml5.imageClassifier('DoodleNet');
}

function checksketch(){
  
}
function clearCanvas(){
  background("white");
}
function classifyCanvas(){
  classifier.classify(canvas,gotResult);
}
function gotResult(error,results)


     {
  if(error){
    console.error(error);
  }
  
  console.log(results);
  document.getElementById('label').innerHTML='Label:  '+results[0].label;
  document.getElementById('confidence').innerHTML='Confidence:  '+Math.round(results[0].confidence*100)+'%';
  utterThis=new SpeechSynthesisUtterance(results[0].label);

  synth.speak(utterThis);
}
function yourscore(){
  document.getElementById('score').innerHTML='score:-  '+results[0]+'[1]';
}
