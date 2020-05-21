alert("ברוך הבא לאתר המצחיק שלי");


document.getElementById("N").addEventListener("click", function(){
    var audio = new Audio('n.mp3');
    audio.play();
  });

  document.getElementById("E").addEventListener("click", function(){
    var audio = new Audio('E.wav');
    audio.play();
      alert('בת :)');
  });

  document.getElementById("Y").addEventListener("click", function(){
    var audio = new Audio('y.mp3');
    audio.play();
  });

  document.getElementById("S").addEventListener("click", function(){
    var audio = new Audio('s.mp3');
    audio.play();
  });
