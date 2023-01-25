var brojPoena = 0;
var virus1 = "https://iili.io/H0usAU7.png";
var virus2 = "https://iili.io/H0uQxF2.png";
var virus3 = "https://iili.io/H0uQaMx.png";
var virus4 =
  "https://png.pngtree.com/png-clipart/20190517/original/pngtree-cartoon-virus-shape-body-png-image_3502987.jpg";
var virusi = [virus1, virus2, virus3];
$(document).bind("mousemove", function (e) {
  $("#tail").css({
    left: e.pageX,
    top: e.pageY,
  });
});

var pistolj = document.getElementById("audio1");
var pobeda = document.getElementById("audio2");
var pokreniIgru = document.getElementById("start");
var virus = document.getElementById("audio3");
pobeda.volume = 1.0;
$(document).mousemove(function () {
  virus.volume = 0.1;
  virus.play();
});
var playSound = function () {
  pistolj.volume = 0.1;
  pistolj.play();
};

///$().click(startGame());

$("#start").on("click", function () {
  console.log("pocela igra");
  $(".pocetna").hide();

  for (i = 1; i < 101; i++) {
    (function (i) {
      //  let randomAppearTime = Math.floor(Math.random() * (2000 - 1000 + 1) + 1000);
      //  setTimeout(function() {  $('.virusi').append("<div class='box' id='box"+i+"'></div>"); }, i * 1500);
      setTimeout(function () {
        dodajVirus(i);
      }, i * 500);
    })(i);
  }
});

/*  pokreniIgru.addEventListener('click', function(){ 
  console.log('pocela igra');
 $(".pocetna").hide();
  for( i=1; i<101; i++){
  
      (function(i) {
        //  let randomAppearTime = Math.floor(Math.random() * (2000 - 1000 + 1) + 1000); 
        //  setTimeout(function() {  $('.virusi').append("<div class='box' id='box"+i+"'></div>"); }, i * 1500);
        setTimeout(function() {dodajVirus(i) }, i * 500);
      })(i);
  };
  }; */

function startGame() {
  console.log("pocela igra");
  $(".pocetna").hide();
  for (i = 1; i < 101; i++) {
    (function (i) {
      //  let randomAppearTime = Math.floor(Math.random() * (2000 - 1000 + 1) + 1000);
      //  setTimeout(function() {  $('.virusi').append("<div class='box' id='box"+i+"'></div>"); }, i * 1500);
      setTimeout(function () {
        dodajVirus(i);
      }, i * 500);
    })(i);
  }
}

$(document).click(function (e) {
  // e.preventDefault();

  $("#metak").show().animate(
    {
      left: "+=1000px",
    },
    800
  );
});

$(document).click(function () {
  playSound();
});

$(document).click(function (e) {
  e.preventDefault();
  $("#metak").animate(
    {
      left: "35px",
    },
    1
  );
  $("#metak").css("background-color", "black");
});

function dodajVirus(i) {
  let randomSpeed = Math.floor(Math.random() * (15000 - 6000 + 1) + 6000);
  //console.log(randomSpeed);
  let widthHeight = Math.floor(Math.random() * (150 - 20 + 1) + 20);
  let randomSpeed2 = Math.floor(Math.random() * (5000 - 200 + 1) + 200);
  let rs = `+=${randomSpeed2}px`;
  console.log(rs);
  //  let object = {'right' : rs};
  $(".virusi").append("<div class='box' id='box" + i + "'></div>");
  $("#box" + i).animate({ right: rs }, randomSpeed);
  $("#box" + i).css({
    "background-image":
      "url(" + virusi[Math.floor(Math.random() * virusi.length)] + ")",
  });
  $("#box" + i).css({ width: widthHeight, height: widthHeight });
  $("#box" + i).each(function (index) {
    $(this).css({
      // left : Math.random() * ($('.container').width() - $(this).width()),
      top: Math.random() * ($(".container").height() - $(this).height()),
    });
  });
}

for (i = 1; i < 101; i++) {
  $("#box" + i).each(function (index) {
    $(this).css({
      // left : Math.random() * ($('.container').width() - $(this).width()),
      top: Math.random() * ($(".container").height() - $(this).height()),
    });
  });
}

function collision($div1, $div2) {
  var x1 = $div1.offset().left;
  var y1 = $div1.offset().top;
  var h1 = $div1.outerHeight(true);
  var w1 = $div1.outerWidth(true);
  var b1 = y1 + h1;
  var r1 = x1 + w1;
  var x2 = $div2.offset().left;
  var y2 = $div2.offset().top;
  var h2 = $div2.outerHeight(true);
  var w2 = $div2.outerWidth(true);
  var b2 = y2 + h2;
  var r2 = x2 + w2;

  if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
  return true;
}

window.setInterval(function () {
  for (i = 1; i < 101; i++) {
    if (collision($("#metak"), $("#box" + i))) {
      $("#box" + i).hide();
      brojPoena++;
      document.getElementById("poeni").innerHTML = brojPoena;
      if (brojPoena === 30) {
        virus.pause();
        pobeda.play();
        $(".kraj-igre").show();
      }
    }
  }
}, 1);
