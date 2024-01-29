var x = 0
var y = 1
var made = 0
var up1 = 10
var up2 = 1000
var up3 = 100000
var up4 = 10000000
var up5 = 1000000000
var up6 = 100000000000
var up7 = 10000000000000
var up8 = 1000000000000000
var up9 = 100000000000000000
var up10 = 10000000000000000000
var mup1 = 5000
var mup2 = 5000000
var mup3 = 5000000000
var mup4 = 5000000000000
var mup5 = 5000000000000000
var up1v = 1
var up2v = 150
var up3v = 20000
var up4v = 2500000
var up5v = 300000000
var up6v = 35000000000
var up7v = 4000000000000
var up8v = 450000000000000
var up9v = 50000000000000000
var up10v = 5500000000000000000
var mup1v = 0.01
var mup2v = 0.5
var mup3v = 2.5
var mup4v = 12.5
var mup5v = 62.5
var clk = 0
var Amt1 = 1
var Amt2 = 0
var Amt3 = 0
var Amt4 = 0
var Amt5 = 0
var Amt6 = 0
var Amt7 = 0
var Amt8 = 0
var Amt9 = 0
var Amt10 = 0
var Mamt1 = 0
var Mamt2 = 0
var Mamt3 = 0
var Mamt4 = 0
var Mamt5 = 0
var playing = true
var prestige = 1
var Pprice = 10000000000
var Mult = 1
function Update() {
  z = Math.round((y*Mult*prestige)*100)/100
  disp2 = z
  if (z > 1000000000000000000000000000000000) {
    disp2 = Math.round(z/1000000000000000000000000000000000 * 100) / 100 + "U"
  } else if (z > 1000000000000000000000000000000) {
    disp2 = Math.round(z/1000000000000000000000000000000 * 100) / 100 + "d"
  } else if (z > 1000000000000000000000000000) {
    disp2 = Math.round(z/1000000000000000000000000000 * 100) / 100 + "n"
  } else if (z > 1000000000000000000000000) {
    disp2 = Math.round(z/1000000000000000000000000 * 100) / 100 + "S"
  } else if (z > 1000000000000000000000) {
    disp2 = Math.round(z/1000000000000000000000 * 100) / 100 + "s"
  } else if (z > 1000000000000000000) {
    disp2 = Math.round(z/1000000000000000000 * 100) / 100 + "Q"
  } else if (z > 1000000000000000) {
    disp2 = Math.round(z/1000000000000000 * 100) / 100 + "q"
  } else if (z > 1000000000000) {
    disp2 = Math.round(z/1000000000000 * 100) / 100 + "t"
  } else if (z > 1000000000) {
    disp2 = Math.round(z/1000000000 * 100) / 100 + "b"
  } else if (z > 1000000) {
    disp2 = Math.round(z/1000000 * 100) / 100 + "m"
  } else if (z > 1000) {
    disp2 = Math.round(z/1000 * 100) / 100 + "k"
  }
  document.getElementById("tot").innerHTML = "$" + disp2;

  document.getElementById("up1").innerHTML = "$"+up1;
  document.getElementById("up1v").innerHTML = "Income: +$"+up1v;
  document.getElementById("amt1").innerHTML = "Owned: "+Amt1;
  document.getElementById("up2").innerHTML = "$"+up2;
  document.getElementById("up2v").innerHTML = "Income: +$"+up2v;
  document.getElementById("amt2").innerHTML = "Owned: "+Amt2;
  document.getElementById("up3").innerHTML = "$"+up3;
  document.getElementById("up3v").innerHTML = "Income: +$"+up3v;
  document.getElementById("amt3").innerHTML = "Owned: "+Amt3;
  document.getElementById("up4").innerHTML = "$"+up4;
  document.getElementById("up4v").innerHTML = "Income: +$"+up4v;
  document.getElementById("amt4").innerHTML = "Owned: "+Amt4;
  document.getElementById("up5").innerHTML = "$"+up5;
  document.getElementById("up5v").innerHTML = "Income: +$"+up5v;
  document.getElementById("amt5").innerHTML = "Owned: "+Amt5;


  if (prestige > 1) {
    document.getElementById("up6").innerHTML = "$"+up6;
    document.getElementById("up6v").innerHTML = "Income: +$"+up6v;
    document.getElementById("amt6").innerHTML = "Owned: "+Amt6;
  }
  if (prestige > 2) {
    document.getElementById("up7").innerHTML = "$"+up7;
    document.getElementById("up7v").innerHTML = "Income: +$"+up7v;
    document.getElementById("amt7").innerHTML = "Owned: "+Amt7;
  }
  if (prestige > 3) {
    document.getElementById("up8").innerHTML = "$"+up8;
    document.getElementById("up8v").innerHTML = "Income: +$"+up8v;
    document.getElementById("amt8").innerHTML = "Owned: "+Amt8;
  }
  if (prestige > 4) {
    document.getElementById("up9").innerHTML = "$"+up9;
    document.getElementById("up9v").innerHTML = "Income: +$"+up9v;
    document.getElementById("amt9").innerHTML = "Owned: "+Amt9;
  }
  if (prestige > 5) {
    document.getElementById("up1").innerHTML = "$"+up10;
    document.getElementById("up1v").innerHTML = "Income: +$"+up10v;
    document.getElementById("amt1").innerHTML = "Owned: "+Amt10;
  }



  document.getElementById("mup1").innerHTML = "$"+mup1;
  document.getElementById("mup1v").innerHTML = "Multi: +"+mup1v+"x";
  document.getElementById("mamt1").innerHTML = "Relation: "+Mamt1;
  document.getElementById("mup2").innerHTML = "$"+mup2;
  document.getElementById("mup2v").innerHTML = "Multi: +"+mup2v+"x";
  document.getElementById("mamt2").innerHTML = "Relation: "+Mamt2;

  if (prestige > 1) {
    document.getElementById("mup3").innerHTML = "$"+mup3;
    document.getElementById("mup3v").innerHTML = "Multi: +"+mup3v+"x";
    document.getElementById("mamt3").innerHTML = "Relation: "+Mamt3;
  }
  if (prestige > 3) {
    document.getElementById("mup4").innerHTML = "$"+mup4;
    document.getElementById("mup4v").innerHTML = "Multi: +"+mup4v+"x";
    document.getElementById("mamt4").innerHTML = "Relation: "+Mamt4;
  }
  if (prestige > 5) {
    document.getElementById("mup5").innerHTML = "$"+mup5;
    document.getElementById("mup5v").innerHTML = "Multi: +"+mup5v+"x";
    document.getElementById("mamt5").innerHTML = "Relation: "+Mamt5;
  }
  pdisp = prestige-1
  document.getElementById("pup1").innerHTML = "$"+Pprice;
  document.getElementById("pup1v").innerHTML = "Lose everything for +1 multi and new content!";
  document.getElementById("pamt1").innerHTML = "Prestige: "+pdisp;

}
function myFunction() {
  x += Math.round(y*Mult*prestige)
  made+=Math.round(y*Mult*prestige)
  clk+=1
  document.getElementById("demo2").innerHTML = "Money:";
  disp = x
  if (x > 1000000000000000000000000000000000) {
    disp = Math.round(x/1000000000000000000000000000000000 * 100) / 100 + "U"
  } else if (x > 1000000000000000000000000000000) {
    disp = Math.round(x/1000000000000000000000000000000 * 100) / 100 + "d"
  } else if (x > 1000000000000000000000000000) {
    disp = Math.round(x/1000000000000000000000000000 * 100) / 100 + "n"
  } else if (x > 1000000000000000000000000) {
    disp = Math.round(x/1000000000000000000000000 * 100) / 100 + "S"
  } else if (x > 1000000000000000000000) {
    disp = Math.round(x/1000000000000000000000 * 100) / 100 + "s"
  } else if (x > 1000000000000000000) {
    disp = Math.round(x/1000000000000000000 * 100) / 100 + "Q"
  } else if (x > 1000000000000000) {
    disp = Math.round(x/1000000000000000 * 100) / 100 + "q"
  } else if (x > 1000000000000) {
    disp = Math.round(x/1000000000000 * 100) / 100 + "t"
  } else if (x > 1000000000) {
    disp = Math.round(x/1000000000 * 100) / 100 + "b"
  } else if (x > 1000000) {
    disp = Math.round(x/1000000 * 100) / 100 + "m"
  } else if (x > 1000) {
    disp = Math.round(x/1000 * 100) / 100 + "k"
  }

    
  document.getElementById("demo1").innerHTML = "$" + disp;
  z = Math.round((y*Mult*prestige)*100)/100
  disp = z
  if (z > 1000000000000000000000000000000000) {
    disp = Math.round(z/1000000000000000000000000000000000 * 100) / 100 + "U"
  } else if (z > 1000000000000000000000000000000) {
    disp = Math.round(z/1000000000000000000000000000000 * 100) / 100 + "d"
  } else if (z > 1000000000000000000000000000) {
    disp = Math.round(z/1000000000000000000000000000 * 100) / 100 + "n"
  } else if (z > 1000000000000000000000000) {
    disp = Math.round(z/1000000000000000000000000 * 100) / 100 + "S"
  } else if (z > 1000000000000000000000) {
    disp = Math.round(z/1000000000000000000000 * 100) / 100 + "s"
  } else if (z > 1000000000000000000) {
    disp = Math.round(z/1000000000000000000 * 100) / 100 + "Q"
  } else if (z > 1000000000000000) {
    disp = Math.round(z/1000000000000000 * 100) / 100 + "q"
  } else if (z > 1000000000000) {
    disp = Math.round(z/1000000000000 * 100) / 100 + "t"
  } else if (z > 1000000000) {
    disp = Math.round(z/1000000000 * 100) / 100 + "b"
  } else if (z > 1000000) {
    disp = Math.round(z/1000000 * 100) / 100 + "m"
  } else if (z > 1000) {
    disp = Math.round(z/1000 * 100) / 100 + "k"
  }
  document.getElementById("tot").innerHTML = "$" + disp;
  document.getElementById("tot").innerHTML = "$" + disp;

  document.getElementById("up1").innerHTML = "$"+up1;
  document.getElementById("up1v").innerHTML = "Income: +$"+up1v;
  document.getElementById("amt1").innerHTML = "Owned: "+Amt1;
  document.getElementById("up2").innerHTML = "$"+up2;
  document.getElementById("up2v").innerHTML = "Income: +$"+up2v;
  document.getElementById("amt2").innerHTML = "Owned: "+Amt2;
  document.getElementById("up3").innerHTML = "$"+up3;
  document.getElementById("up3v").innerHTML = "Income: +$"+up3v;
  document.getElementById("amt3").innerHTML = "Owned: "+Amt3;
  document.getElementById("up4").innerHTML = "$"+up4;
  document.getElementById("up4v").innerHTML = "Income: +$"+up4v;
  document.getElementById("amt4").innerHTML = "Owned: "+Amt4;
  document.getElementById("up5").innerHTML = "$"+up5;
  document.getElementById("up5v").innerHTML = "Income: +$"+up5v;
  document.getElementById("amt5").innerHTML = "Owned: "+Amt5;


  if (prestige > 1) {
    document.getElementById("up6").innerHTML = "$"+up6;
    document.getElementById("up6v").innerHTML = "Income: +$"+up6v;
    document.getElementById("amt6").innerHTML = "Owned: "+Amt6;
  }
  if (prestige > 2) {
    document.getElementById("up7").innerHTML = "$"+up7;
    document.getElementById("up7v").innerHTML = "Income: +$"+up7v;
    document.getElementById("amt7").innerHTML = "Owned: "+Amt7;
  }
  if (prestige > 3) {
    document.getElementById("up8").innerHTML = "$"+up8;
    document.getElementById("up8v").innerHTML = "Income: +$"+up8v;
    document.getElementById("amt8").innerHTML = "Owned: "+Amt8;
  }
  if (prestige > 4) {
    document.getElementById("up9").innerHTML = "$"+up9;
    document.getElementById("up9v").innerHTML = "Income: +$"+up9v;
    document.getElementById("amt9").innerHTML = "Owned: "+Amt9;
  }
  if (prestige > 5) {
    document.getElementById("up1").innerHTML = "$"+up10;
    document.getElementById("up1v").innerHTML = "Income: +$"+up10v;
    document.getElementById("amt1").innerHTML = "Owned: "+Amt10;
  }



  document.getElementById("mup1").innerHTML = "$"+mup1;
  document.getElementById("mup1v").innerHTML = "Multi: +"+mup1v+"x";
  document.getElementById("mamt1").innerHTML = "Relation: "+Mamt1;
  document.getElementById("mup2").innerHTML = "$"+mup2;
  document.getElementById("mup2v").innerHTML = "Multi: +"+mup2v+"x";
  document.getElementById("mamt2").innerHTML = "Relation: "+Mamt2;

  if (prestige > 1) {
    document.getElementById("mup3").innerHTML = "$"+mup3;
    document.getElementById("mup3v").innerHTML = "Multi: +"+mup3v+"x";
    document.getElementById("mamt3").innerHTML = "Relation: "+Mamt3;
  }
  if (prestige > 3) {
    document.getElementById("mup4").innerHTML = "$"+mup4;
    document.getElementById("mup4v").innerHTML = "Multi: +"+mup4v+"x";
    document.getElementById("mamt4").innerHTML = "Relation: "+Mamt4;
  }
  if (prestige > 5) {
    document.getElementById("mup5").innerHTML = "$"+mup5;
    document.getElementById("mup5v").innerHTML = "Multi: +"+mup5v+"x";
    document.getElementById("mamt5").innerHTML = "Relation: "+Mamt5;
  }
  pdisp = prestige-1
  document.getElementById("pup1").innerHTML = "$"+Pprice;
  document.getElementById("pup1v").innerHTML = "Lose everything for +1 multi and new content!";
  document.getElementById("pamt1").innerHTML = "Prestige: "+pdisp;

}
function credits() {
  alert("Made by Imeanbusiness\nImages from Google\nInspired by Cookie Clicker\nIdeas from Aumi")
}
let muse = document.getElementById("music");
function pause() {
  if (playing == true) {
    muse.play();
    playing = false

  } else {
    muse.pause();
    playing = true
  }
    
}

function stats() {
  z = Math.round((y*Mult*prestige)*100)/100
  disp = z
  if (z > 1000000000000000000000000000000000) {
    disp = Math.round(z/1000000000000000000000000000000000 * 100) / 100 + "U"
  } else if (z > 1000000000000000000000000000000) {
    disp = Math.round(z/1000000000000000000000000000000 * 100) / 100 + "d"
  } else if (z > 1000000000000000000000000000) {
    disp = Math.round(z/1000000000000000000000000000 * 100) / 100 + "n"
  } else if (z > 1000000000000000000000000) {
    disp = Math.round(z/1000000000000000000000000 * 100) / 100 + "S"
  } else if (z > 1000000000000000000000) {
    disp = Math.round(z/1000000000000000000000 * 100) / 100 + "s"
  } else if (z > 1000000000000000000) {
    disp = Math.round(z/1000000000000000000 * 100) / 100 + "Q"
  } else if (z > 1000000000000000) {
    disp = Math.round(z/1000000000000000 * 100) / 100 + "q"
  } else if (z > 1000000000000) {
    disp = Math.round(z/1000000000000 * 100) / 100 + "t"
  } else if (z > 1000000000) {
    disp = Math.round(z/1000000000 * 100) / 100 + "b"
  } else if (z > 1000000) {
    disp = Math.round(z/1000000 * 100) / 100 + "m"
  } else if (z > 1000) {
    disp = Math.round(z/1000 * 100) / 100 + "k"
  }
  cc = made
  disp2 = cc
  if (cc > 1000000000000000000000000000000000) {
    disp2 = Math.round(cc/1000000000000000000000000000000000 * 100) / 100 + "U"
  } else if (cc > 1000000000000000000000000000000) {
    disp2 = Math.round(cc/1000000000000000000000000000000 * 100) / 100 + "d"
  } else if (cc > 1000000000000000000000000000) {
    disp2 = Math.round(cc/1000000000000000000000000000 * 100) / 100 + "n"
  } else if (cc > 1000000000000000000000000) {
    disp2 = Math.round(cc/1000000000000000000000000 * 100) / 100 + "S"
  } else if (cc > 1000000000000000000000) {
    disp2 = Math.round(cc/1000000000000000000000 * 100) / 100 + "s"
  } else if (cc > 1000000000000000000) {
    disp2 = Math.round(cc/1000000000000000000 * 100) / 100 + "Q"
  } else if (cc > 1000000000000000) {
    disp2 = Math.round(cc/1000000000000000 * 100) / 100 + "q"
  } else if (cc > 1000000000000) {
    disp2 = Math.round(cc/1000000000000 * 100) / 100 + "t"
  } else if (cc > 1000000000) {
    disp2 = Math.round(cc/1000000000 * 100) / 100 + "b"
  } else if (cc > 1000000) {
    disp2 = Math.round(cc/1000000 * 100) / 100 + "m"
  } else if (cc > 1000) {
    disp2 = Math.round(cc/1000 * 100) / 100 + "k"
  }
  alert("Clicks: "+clk+"\n"+"Presitge: "+prestige+"\n"+"Base income: $"+y+"\n"+"Multiplier: "+Mult+"x\n"+"Total income: $"+z+"\n"+"Total money made: $"+disp2)
}
function Upgrade1() {
  if (x>up1-1) {
    y += up1v
    x-=up1
    Amt1+=1

    up1 = Math.round(up1*1.25)
    disp = x
    if (x > 1000000000000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000000000000 * 100) / 100 + "U"
    } else if (x > 1000000000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000000000 * 100) / 100 + "d"
    } else if (x > 1000000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000000 * 100) / 100 + "n"
    } else if (x > 1000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000 * 100) / 100 + "S"
    } else if (x > 1000000000000000000000) {
      disp = Math.round(x/1000000000000000000000 * 100) / 100 + "s"
    } else if (x > 1000000000000000000) {
      disp = Math.round(x/1000000000000000000 * 100) / 100 + "Q"
    } else if (x > 1000000000000000) {
      disp = Math.round(x/1000000000000000 * 100) / 100 + "q"
    } else if (x > 1000000000000) {
      disp = Math.round(x/1000000000000 * 100) / 100 + "t"
    } else if (x > 1000000000) {
      disp = Math.round(x/1000000000 * 100) / 100 + "b"
    } else if (x > 1000000) {
      disp = Math.round(x/1000000 * 100) / 100 + "m"
    } else if (x > 1000) {
      disp = Math.round(x/1000 * 100) / 100 + "k"
    }
    document.getElementById("up1").innerHTML = "$"+up1;
    document.getElementById("up1v").innerHTML = "Income: +$"+up1v;
    document.getElementById("demo2").innerHTML = "Money:";
    document.getElementById("demo1").innerHTML = "$" + disp;

    document.getElementById("amt1").innerHTML = "Owned: "+Amt1;
    Update()
  }
  
}
function Upgrade2() {
  if (x>up2-1) {
    y += up2v
    x-=up2
    Amt2+=1

    up2 = Math.round(up2*1.25)
    disp = x
    if (x > 1000000000000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000000000000 * 100) / 100 + "U"
    } else if (x > 1000000000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000000000 * 100) / 100 + "d"
    } else if (x > 1000000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000000 * 100) / 100 + "n"
    } else if (x > 1000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000 * 100) / 100 + "S"
    } else if (x > 1000000000000000000000) {
      disp = Math.round(x/1000000000000000000000 * 100) / 100 + "s"
    } else if (x > 1000000000000000000) {
      disp = Math.round(x/1000000000000000000 * 100) / 100 + "Q"
    } else if (x > 1000000000000000) {
      disp = Math.round(x/1000000000000000 * 100) / 100 + "q"
    } else if (x > 1000000000000) {
      disp = Math.round(x/1000000000000 * 100) / 100 + "t"
    } else if (x > 1000000000) {
      disp = Math.round(x/1000000000 * 100) / 100 + "b"
    } else if (x > 1000000) {
      disp = Math.round(x/1000000 * 100) / 100 + "m"
    } else if (x > 1000) {
      disp = Math.round(x/1000 * 100) / 100 + "k"
    }
    document.getElementById("up2").innerHTML = "$"+up2;
    document.getElementById("up2v").innerHTML = "Income: +$"+up2v;
    document.getElementById("demo2").innerHTML = "Money:";
    document.getElementById("demo1").innerHTML = "$" + disp;
    
    document.getElementById("amt2").innerHTML = "Owned: "+Amt2;
    Update()
  }

}
function Upgrade3() {
  if (x>up3-1) {
    y += up3v
    x-=up3
    Amt3+=1

    up3 = Math.round(up3*1.25)
    disp = x
    if (x > 1000000000000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000000000000 * 100) / 100 + "U"
    } else if (x > 1000000000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000000000 * 100) / 100 + "d"
    } else if (x > 1000000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000000 * 100) / 100 + "n"
    } else if (x > 1000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000 * 100) / 100 + "S"
    } else if (x > 1000000000000000000000) {
      disp = Math.round(x/1000000000000000000000 * 100) / 100 + "s"
    } else if (x > 1000000000000000000) {
      disp = Math.round(x/1000000000000000000 * 100) / 100 + "Q"
    } else if (x > 1000000000000000) {
      disp = Math.round(x/1000000000000000 * 100) / 100 + "q"
    } else if (x > 1000000000000) {
      disp = Math.round(x/1000000000000 * 100) / 100 + "t"
    } else if (x > 1000000000) {
      disp = Math.round(x/1000000000 * 100) / 100 + "b"
    } else if (x > 1000000) {
      disp = Math.round(x/1000000 * 100) / 100 + "m"
    } else if (x > 1000) {
      disp = Math.round(x/1000 * 100) / 100 + "k"
    }
    document.getElementById("up3").innerHTML = "$"+up3;
    document.getElementById("up3v").innerHTML = "Income: +$"+up3v;
    document.getElementById("demo2").innerHTML = "Money:";
    document.getElementById("demo1").innerHTML = "$" + disp;
    
    document.getElementById("amt3").innerHTML = "Owned: "+Amt3;
    Update()
  }

}
function Upgrade4() {
  if (x>up4-1) {
    y += up4v
    x-=up4
    Amt4+=1

    up4 = Math.round(up4*1.25)
    disp = x
    if (x > 1000000000000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000000000000 * 100) / 100 + "U"
    } else if (x > 1000000000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000000000 * 100) / 100 + "d"
    } else if (x > 1000000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000000 * 100) / 100 + "n"
    } else if (x > 1000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000 * 100) / 100 + "S"
    } else if (x > 1000000000000000000000) {
      disp = Math.round(x/1000000000000000000000 * 100) / 100 + "s"
    } else if (x > 1000000000000000000) {
      disp = Math.round(x/1000000000000000000 * 100) / 100 + "Q"
    } else if (x > 1000000000000000) {
      disp = Math.round(x/1000000000000000 * 100) / 100 + "q"
    } else if (x > 1000000000000) {
      disp = Math.round(x/1000000000000 * 100) / 100 + "t"
    } else if (x > 1000000000) {
      disp = Math.round(x/1000000000 * 100) / 100 + "b"
    } else if (x > 1000000) {
      disp = Math.round(x/1000000 * 100) / 100 + "m"
    } else if (x > 1000) {
      disp = Math.round(x/1000 * 100) / 100 + "k"
    }
    document.getElementById("up4").innerHTML = "$"+up4;
    document.getElementById("up4v").innerHTML = "Income: +$"+up4v;
    document.getElementById("demo2").innerHTML = "Money:";
    document.getElementById("demo1").innerHTML = "$" + disp;

    document.getElementById("amt4").innerHTML = "Owned: "+Amt4;
    Update()
  }

}
function Upgrade5() {
  if (x>up5-1) {
    y += up5v
    x-=up5
    Amt5+=1

    up5 = Math.round(up5*1.25)
    disp = x
    if (x > 1000000000000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000000000000 * 100) / 100 + "U"
    } else if (x > 1000000000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000000000 * 100) / 100 + "d"
    } else if (x > 1000000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000000 * 100) / 100 + "n"
    } else if (x > 1000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000 * 100) / 100 + "S"
    } else if (x > 1000000000000000000000) {
      disp = Math.round(x/1000000000000000000000 * 100) / 100 + "s"
    } else if (x > 1000000000000000000) {
      disp = Math.round(x/1000000000000000000 * 100) / 100 + "Q"
    } else if (x > 1000000000000000) {
      disp = Math.round(x/1000000000000000 * 100) / 100 + "q"
    } else if (x > 1000000000000) {
      disp = Math.round(x/1000000000000 * 100) / 100 + "t"
    } else if (x > 1000000000) {
      disp = Math.round(x/1000000000 * 100) / 100 + "b"
    } else if (x > 1000000) {
      disp = Math.round(x/1000000 * 100) / 100 + "m"
    } else if (x > 1000) {
      disp = Math.round(x/1000 * 100) / 100 + "k"
    }
    document.getElementById("up5").innerHTML = "$"+up5;
    document.getElementById("up5v").innerHTML = "Income: +$"+up5v;
    document.getElementById("demo2").innerHTML = "Money:";
    document.getElementById("demo1").innerHTML = "$" + disp;
    
    document.getElementById("amt5").innerHTML = "Owned: "+Amt5;
    Update()
  }

}
function Upgrade6() {
  if (x>up6-1 && prestige > 1) {
    y += up6v
    x-=up6
    Amt6+=1

    up6 = Math.round(up6*1.25)
    disp = x
    if (x > 1000000000000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000000000000 * 100) / 100 + "U"
    } else if (x > 1000000000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000000000 * 100) / 100 + "d"
    } else if (x > 1000000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000000 * 100) / 100 + "n"
    } else if (x > 1000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000 * 100) / 100 + "S"
    } else if (x > 1000000000000000000000) {
      disp = Math.round(x/1000000000000000000000 * 100) / 100 + "s"
    } else if (x > 1000000000000000000) {
      disp = Math.round(x/1000000000000000000 * 100) / 100 + "Q"
    } else if (x > 1000000000000000) {
      disp = Math.round(x/1000000000000000 * 100) / 100 + "q"
    } else if (x > 1000000000000) {
      disp = Math.round(x/1000000000000 * 100) / 100 + "t"
    } else if (x > 1000000000) {
      disp = Math.round(x/1000000000 * 100) / 100 + "b"
    } else if (x > 1000000) {
      disp = Math.round(x/1000000 * 100) / 100 + "m"
    } else if (x > 1000) {
      disp = Math.round(x/1000 * 100) / 100 + "k"
    }
    document.getElementById("up6").innerHTML = "$"+up6;
    document.getElementById("up6v").innerHTML = "Income: +$"+up6v;
    document.getElementById("demo2").innerHTML = "Money:";
    document.getElementById("demo1").innerHTML = "$" + disp;
    
    document.getElementById("amt6").innerHTML = "Owned: "+Amt6;
    Update()
  }
//help
}
function Upgrade7() {
  if (x>up7-1 && prestige > 2) {
    y += up7v
    x-=up7
    Amt7+=1

    up7 = Math.round(up7*1.25)
    disp = x
    if (x > 1000000000000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000000000000 * 100) / 100 + "U"
    } else if (x > 1000000000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000000000 * 100) / 100 + "d"
    } else if (x > 1000000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000000 * 100) / 100 + "n"
    } else if (x > 1000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000 * 100) / 100 + "S"
    } else if (x > 1000000000000000000000) {
      disp = Math.round(x/1000000000000000000000 * 100) / 100 + "s"
    } else if (x > 1000000000000000000) {
      disp = Math.round(x/1000000000000000000 * 100) / 100 + "Q"
    } else if (x > 1000000000000000) {
      disp = Math.round(x/1000000000000000 * 100) / 100 + "q"
    } else if (x > 1000000000000) {
      disp = Math.round(x/1000000000000 * 100) / 100 + "t"
    } else if (x > 1000000000) {
      disp = Math.round(x/1000000000 * 100) / 100 + "b"
    } else if (x > 1000000) {
      disp = Math.round(x/1000000 * 100) / 100 + "m"
    } else if (x > 1000) {
      disp = Math.round(x/1000 * 100) / 100 + "k"
    }
    document.getElementById("up7").innerHTML = "$"+up7;
    document.getElementById("up7v").innerHTML = "Income: +$"+up7v;
    document.getElementById("demo2").innerHTML = "Money:";
    document.getElementById("demo1").innerHTML = "$" + disp;
    
    document.getElementById("amt7").innerHTML = "Owned: "+Amt7;
    Update()
  }

}
function Upgrade8() {
  if (x>up8-1 && prestige > 3) {
    y += up8v
    x-=up8
    Amt8+=1
    up8 = Math.round(up8*1.25)
    disp = x
    if (x > 1000000000000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000000000000 * 100) / 100 + "U"
    } else if (x > 1000000000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000000000 * 100) / 100 + "d"
    } else if (x > 1000000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000000 * 100) / 100 + "n"
    } else if (x > 1000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000 * 100) / 100 + "S"
    } else if (x > 1000000000000000000000) {
      disp = Math.round(x/1000000000000000000000 * 100) / 100 + "s"
    } else if (x > 1000000000000000000) {
      disp = Math.round(x/1000000000000000000 * 100) / 100 + "Q"
    } else if (x > 1000000000000000) {
      disp = Math.round(x/1000000000000000 * 100) / 100 + "q"
    } else if (x > 1000000000000) {
      disp = Math.round(x/1000000000000 * 100) / 100 + "t"
    } else if (x > 1000000000) {
      disp = Math.round(x/1000000000 * 100) / 100 + "b"
    } else if (x > 1000000) {
      disp = Math.round(x/1000000 * 100) / 100 + "m"
    } else if (x > 1000) {
      disp = Math.round(x/1000 * 100) / 100 + "k"
    }
    document.getElementById("up8").innerHTML = "$"+up8;
    document.getElementById("up8v").innerHTML = "Income: +$"+up8v;
    document.getElementById("demo2").innerHTML = "Money:";
    document.getElementById("demo1").innerHTML = "$" + disp;
    
    document.getElementById("amt8").innerHTML = "Owned: "+Amt8;
    Update()
  }

}
function Upgrade9() {
  if (x>up9-1 && prestige > 4) {
    y += up9v
    x-=up9
    Amt9+=1
    up9 = Math.round(up9*1.25)
    disp = x
    if (x > 1000000000000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000000000000 * 100) / 100 + "U"
    } else if (x > 1000000000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000000000 * 100) / 100 + "d"
    } else if (x > 1000000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000000 * 100) / 100 + "n"
    } else if (x > 1000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000 * 100) / 100 + "S"
    } else if (x > 1000000000000000000000) {
      disp = Math.round(x/1000000000000000000000 * 100) / 100 + "s"
    } else if (x > 1000000000000000000) {
      disp = Math.round(x/1000000000000000000 * 100) / 100 + "Q"
    } else if (x > 1000000000000000) {
      disp = Math.round(x/1000000000000000 * 100) / 100 + "q"
    } else if (x > 1000000000000) {
      disp = Math.round(x/1000000000000 * 100) / 100 + "t"
    } else if (x > 1000000000) {
      disp = Math.round(x/1000000000 * 100) / 100 + "b"
    } else if (x > 1000000) {
      disp = Math.round(x/1000000 * 100) / 100 + "m"
    } else if (x > 1000) {
      disp = Math.round(x/1000 * 100) / 100 + "k"
    }
    document.getElementById("up9").innerHTML = "$"+up9;
    document.getElementById("up9v").innerHTML = "Income: +$"+up9v;
    document.getElementById("demo2").innerHTML = "Money:";
    document.getElementById("demo1").innerHTML = "$" + disp;
    
    document.getElementById("amt9").innerHTML = "Owned: "+Amt9;
    
  }

}
//credits
function Upgrade10() {
  if (x>up10-1 && prestige > 5) {
    y += up10v
    x-=up10
    Amt10+=1
    up10 = Math.round(up10*1.25)
    disp = x
    if (x > 1000000000000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000000000000 * 100) / 100 + "U"
    } else if (x > 1000000000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000000000 * 100) / 100 + "d"
    } else if (x > 1000000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000000 * 100) / 100 + "n"
    } else if (x > 1000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000 * 100) / 100 + "S"
    } else if (x > 1000000000000000000000) {
      disp = Math.round(x/1000000000000000000000 * 100) / 100 + "s"
    } else if (x > 1000000000000000000) {
      disp = Math.round(x/1000000000000000000 * 100) / 100 + "Q"
    } else if (x > 1000000000000000) {
      disp = Math.round(x/1000000000000000 * 100) / 100 + "q"
    } else if (x > 1000000000000) {
      disp = Math.round(x/1000000000000 * 100) / 100 + "t"
    } else if (x > 1000000000) {
      disp = Math.round(x/1000000000 * 100) / 100 + "b"
    } else if (x > 1000000) {
      disp = Math.round(x/1000000 * 100) / 100 + "m"
    } else if (x > 1000) {
      disp = Math.round(x/1000 * 100) / 100 + "k"
    }
    document.getElementById("up10").innerHTML = "$"+up10;
    document.getElementById("up10v").innerHTML = "Income: +$"+up10v;
    document.getElementById("demo2").innerHTML = "Money:";
    document.getElementById("demo1").innerHTML = "$" + disp;
    
    document.getElementById("amt10").innerHTML = "Owned: "+Amt10;
  }

}
function Multi1() {
  if (x>mup1-1) {
    Mult += mup1v
    x-=mup1
    Mamt1+=1

    mup1 = Math.round(mup1*5)
    disp = x
    if (x > 1000000000000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000000000000 * 100) / 100 + "U"
    } else if (x > 1000000000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000000000 * 100) / 100 + "d"
    } else if (x > 1000000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000000 * 100) / 100 + "n"
    } else if (x > 1000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000 * 100) / 100 + "S"
    } else if (x > 1000000000000000000000) {
      disp = Math.round(x/1000000000000000000000 * 100) / 100 + "s"
    } else if (x > 1000000000000000000) {
      disp = Math.round(x/1000000000000000000 * 100) / 100 + "Q"
    } else if (x > 1000000000000000) {
      disp = Math.round(x/1000000000000000 * 100) / 100 + "q"
    } else if (x > 1000000000000) {
      disp = Math.round(x/1000000000000 * 100) / 100 + "t"
    } else if (x > 1000000000) {
      disp = Math.round(x/1000000000 * 100) / 100 + "b"
    } else if (x > 1000000) {
      disp = Math.round(x/1000000 * 100) / 100 + "m"
    } else if (x > 1000) {
      disp = Math.round(x/1000 * 100) / 100 + "k"
    }
    document.getElementById("mup1").innerHTML = "$"+mup1;
    document.getElementById("mup1v").innerHTML = "Multi: +"+mup1v+"x";
    

    document.getElementById("demo2").innerHTML = "Money:";
    document.getElementById("demo1").innerHTML = "$" + disp;
    
    document.getElementById("mamt1").innerHTML = "Relation: "+Mamt1;
  }

}
function Multi2() {
  if (x>mup2-1) {
    Mult += mup2v
    x-=mup2
    Mamt2+=1

    mup2 = Math.round(mup2*5)
    disp = x
    if (x > 1000000000000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000000000000 * 100) / 100 + "U"
    } else if (x > 1000000000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000000000 * 100) / 100 + "d"
    } else if (x > 1000000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000000 * 100) / 100 + "n"
    } else if (x > 1000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000 * 100) / 100 + "S"
    } else if (x > 1000000000000000000000) {
      disp = Math.round(x/1000000000000000000000 * 100) / 100 + "s"
    } else if (x > 1000000000000000000) {
      disp = Math.round(x/1000000000000000000 * 100) / 100 + "Q"
    } else if (x > 1000000000000000) {
      disp = Math.round(x/1000000000000000 * 100) / 100 + "q"
    } else if (x > 1000000000000) {
      disp = Math.round(x/1000000000000 * 100) / 100 + "t"
    } else if (x > 1000000000) {
      disp = Math.round(x/1000000000 * 100) / 100 + "b"
    } else if (x > 1000000) {
      disp = Math.round(x/1000000 * 100) / 100 + "m"
    } else if (x > 1000) {
      disp = Math.round(x/1000 * 100) / 100 + "k"
    }
    document.getElementById("mup2").innerHTML = "$"+mup2;
    document.getElementById("mup2v").innerHTML = "Multi: +"+mup2v+"x";
    

    document.getElementById("demo1").innerHTML = "Money:";
    document.getElementById("demo2").innerHTML = "$" + disp;
    
    document.getElementById("mamt2").innerHTML = "Relation: "+Mamt2;
  }

}
function Multi3() {
  if (x>mup3-1 && prestige > 1) {
    Mult += mup3v
    x-=mup3
    Mamt3+=1

    mup3 = Math.round(mup3*5)
    disp = x
    if (x > 1000000000000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000000000000 * 100) / 100 + "U"
    } else if (x > 1000000000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000000000 * 100) / 100 + "d"
    } else if (x > 1000000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000000 * 100) / 100 + "n"
    } else if (x > 1000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000 * 100) / 100 + "S"
    } else if (x > 1000000000000000000000) {
      disp = Math.round(x/1000000000000000000000 * 100) / 100 + "s"
    } else if (x > 1000000000000000000) {
      disp = Math.round(x/1000000000000000000 * 100) / 100 + "Q"
    } else if (x > 1000000000000000) {
      disp = Math.round(x/1000000000000000 * 100) / 100 + "q"
    } else if (x > 1000000000000) {
      disp = Math.round(x/1000000000000 * 100) / 100 + "t"
    } else if (x > 1000000000) {
      disp = Math.round(x/1000000000 * 100) / 100 + "b"
    } else if (x > 1000000) {
      disp = Math.round(x/1000000 * 100) / 100 + "m"
    } else if (x > 1000) {
      disp = Math.round(x/1000 * 100) / 100 + "k"
    }
    document.getElementById("mup3").innerHTML = "$"+mup3;
    document.getElementById("mup3v").innerHTML = "Multi: +"+mup3v+"x";
    

    document.getElementById("demo1").innerHTML = "Money:";
    document.getElementById("demo2").innerHTML = "$" + disp;
    
    document.getElementById("mamt3").innerHTML = "Relation: "+Mamt3;
  }

}
function Multi4() {
  if (x>mup4-1 && prestige > 3) {
    Mult += mup4v
    x-=mup4
    Mamt4+=1

    mup4 = Math.round(mup4*5)
    disp = x
    if (x > 1000000000000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000000000000 * 100) / 100 + "U"
    } else if (x > 1000000000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000000000 * 100) / 100 + "d"
    } else if (x > 1000000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000000 * 100) / 100 + "n"
    } else if (x > 1000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000 * 100) / 100 + "S"
    } else if (x > 1000000000000000000000) {
      disp = Math.round(x/1000000000000000000000 * 100) / 100 + "s"
    } else if (x > 1000000000000000000) {
      disp = Math.round(x/1000000000000000000 * 100) / 100 + "Q"
    } else if (x > 1000000000000000) {
      disp = Math.round(x/1000000000000000 * 100) / 100 + "q"
    } else if (x > 1000000000000) {
      disp = Math.round(x/1000000000000 * 100) / 100 + "t"
    } else if (x > 1000000000) {
      disp = Math.round(x/1000000000 * 100) / 100 + "b"
    } else if (x > 1000000) {
      disp = Math.round(x/1000000 * 100) / 100 + "m"
    } else if (x > 1000) {
      disp = Math.round(x/1000 * 100) / 100 + "k"
    }
    document.getElementById("mup4").innerHTML = "$"+mup4;
    document.getElementById("mup4v").innerHTML = "Multi: +"+mup4v+"x";
    

    document.getElementById("demo1").innerHTML = "Money:";
    document.getElementById("demo2").innerHTML = "$" + disp;
    
    document.getElementById("mamt4").innerHTML = "Relation: "+Mamt4;
  }

}
function Multi5() {
  if (x>mup5-1 && prestige > 5) {
    Mult += mup5v
    x-=mup5
    Mamt5+=1

    mup5 = Math.round(mup5*5)
    disp = x
    if (x > 1000000000000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000000000000 * 100) / 100 + "U"
    } else if (x > 1000000000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000000000 * 100) / 100 + "d"
    } else if (x > 1000000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000000 * 100) / 100 + "n"
    } else if (x > 1000000000000000000000000) {
      disp = Math.round(x/1000000000000000000000000 * 100) / 100 + "S"
    } else if (x > 1000000000000000000000) {
      disp = Math.round(x/1000000000000000000000 * 100) / 100 + "s"
    } else if (x > 1000000000000000000) {
      disp = Math.round(x/1000000000000000000 * 100) / 100 + "Q"
    } else if (x > 1000000000000000) {
      disp = Math.round(x/1000000000000000 * 100) / 100 + "q"
    } else if (x > 1000000000000) {
      disp = Math.round(x/1000000000000 * 100) / 100 + "t"
    } else if (x > 1000000000) {
      disp = Math.round(x/1000000000 * 100) / 100 + "b"
    } else if (x > 1000000) {
      disp = Math.round(x/1000000 * 100) / 100 + "m"
    } else if (x > 1000) {
      disp = Math.round(x/1000 * 100) / 100 + "k"
    }
    document.getElementById("mup5").innerHTML = "$"+mup5;
    document.getElementById("mup5v").innerHTML = "Multi: +"+mup5v+"x";
    

    document.getElementById("demo1").innerHTML = "Money:";
    document.getElementById("demo2").innerHTML = "$" + disp;
    
    document.getElementById("mamt5").innerHTML = "Relation: "+Mamt5;
  }

}
function Prestige() {
  if (x > Pprice-1) {
    x = 0
    y = 1
    up1 = 10
    up2 = 1000
    up3 = 100000
    up4 = 10000000
    up5 = 1000000000
    up6 = 100000000000
    up7 = 10000000000000
    up8 = 1000000000000000
    up9 = 100000000000000000
    up10 = 10000000000000000000
    mup1 = 5000
    mup2 = 5000000
    mup3 = 5000000000
    mup4 = 5000000000000
    mup5 = 5000000000000000
    up1v = 1
    up2v = 150
    up3v = 20000
    up4v = 2500000
    up5v = 300000000
    up6v = 35000000000
    up7v = 4000000000000
    up8v = 450000000000000
    up9v = 50000000000000000
    up10v = 5500000000000000000
    mup1v = 0.01
    mup2v = 0.5
    mup3v = 2.5
    mup4v = 12.5
    mup5v = 62.5

    Amt1 = 1
    Amt2 = 0
    Amt3 = 0
    Amt4 = 0
    Amt5 = 0
    Amt6 = 0
    Amt7 = 0
    Amt8 = 0
    Amt9 = 0
    Amt10 = 0
    Mamt1 = 0
    Mamt2 = 0
    Mamt3 = 0
    Mamt4 = 0
    Mamt5 = 0

    prestige += 1
    Pprice = 10000000*1000**prestige
    Mult = 1
    disp = x
    document.getElementById("demo2").innerHTML = "Money:";
    document.getElementById("demo1").innerHTML = "$" + disp;
    
    document.getElementById("up1").innerHTML = "$"+up1;
    document.getElementById("up1v").innerHTML = "Income: +$"+up1v;
    document.getElementById("amt1").innerHTML = "Owned: "+Amt1;
    document.getElementById("up2").innerHTML = "$"+up2;
    document.getElementById("up2v").innerHTML = "Income: +$"+up2v;
    document.getElementById("amt2").innerHTML = "Owned: "+Amt2;
    document.getElementById("up3").innerHTML = "$"+up3;
    document.getElementById("up3v").innerHTML = "Income: +$"+up3v;
    document.getElementById("amt3").innerHTML = "Owned: "+Amt3;
    document.getElementById("up4").innerHTML = "$"+up4;
    document.getElementById("up4v").innerHTML = "Income: +$"+up4v;
    document.getElementById("amt4").innerHTML = "Owned: "+Amt4;
    document.getElementById("up5").innerHTML = "$"+up5;
    document.getElementById("up5v").innerHTML = "Income: +$"+up5v;
    document.getElementById("amt5").innerHTML = "Owned: "+Amt5;
    if (prestige > 1) {
      document.getElementById("up6").innerHTML = "$"+up6;
      document.getElementById("up6v").innerHTML = "Income: +$"+up6v;
      document.getElementById("amt6").innerHTML = "Owned: "+Amt6;
    }
    if (prestige > 2) {
      document.getElementById("up7").innerHTML = "$"+up7;
      document.getElementById("up7v").innerHTML = "Income: +$"+up7v;
      document.getElementById("amt7").innerHTML = "Owned: "+Amt7;
    }
    if (prestige > 3) {
      document.getElementById("up8").innerHTML = "$"+up8;
      document.getElementById("up8v").innerHTML = "Income: +$"+up8v;
      document.getElementById("amt8").innerHTML = "Owned: "+Amt8;
    }
    if (prestige > 4) {
      document.getElementById("up9").innerHTML = "$"+up9;
      document.getElementById("up9v").innerHTML = "Income: +$"+up9v;
      document.getElementById("amt9").innerHTML = "Owned: "+Amt9;
    }
    if (prestige > 5) {
      document.getElementById("up1").innerHTML = "$"+up10;
      document.getElementById("up1v").innerHTML = "Income: +$"+up10v;
      document.getElementById("amt1").innerHTML = "Owned: "+Amt10;
    }
  
    
    document.getElementById("mup1").innerHTML = "$"+mup1;
    document.getElementById("mup1v").innerHTML = "Multi: +"+mup1v+"x";
    document.getElementById("mamt1").innerHTML = "Relation: "+Mamt1;
    document.getElementById("mup2").innerHTML = "$"+mup2;
    document.getElementById("mup2v").innerHTML = "Multi: +"+mup2v+"x";
    document.getElementById("mamt2").innerHTML = "Relation: "+Mamt2;
    if (prestige > 1) {
      document.getElementById("mup3").innerHTML = "$"+mup3;
      document.getElementById("mup3v").innerHTML = "Multi: +"+mup3v+"x";
      document.getElementById("mamt3").innerHTML = "Relation: "+Mamt3;
    }
    if (prestige > 3) {
      document.getElementById("mup4").innerHTML = "$"+mup4;
      document.getElementById("mup4v").innerHTML = "Multi: +"+mup4v+"x";
      document.getElementById("mamt4").innerHTML = "Relation: "+Mamt4;
    }
    if (prestige > 5) {
      document.getElementById("mup5").innerHTML = "$"+mup5;
      document.getElementById("mup5v").innerHTML = "Multi: +"+mup5v+"x";
      document.getElementById("mamt5").innerHTML = "Relation: "+Mamt5;
    }
    pdisp = prestige-1
    document.getElementById("pup1").innerHTML = "$"+Pprice;
    document.getElementById("pup1v").innerHTML = "Lose everything for +1 multi and new content!";
    document.getElementById("pamt1").innerHTML = "Prestige: "+pdisp;
    if (prestige == 2) {
      alert("Congrats on prestiging to prestige 1! New content: Book Store, RiseToFame")
    } else if (prestige == 3) {
      alert("Congrats on prestiging to prestige 2! New content: Furniture Store")
    } else if (prestige == 4) {
        alert("Congrats on prestiging to prestige 3! New content: Clothing Store, Googogles")
    } else if (prestige == 5) {
        alert("Congrats on prestiging to prestige 4! New content: Jewelery Store")
    } else if (prestige == 6) {
        alert("Congrats on prestiging to prestige 5! New content: Car Dealership, PBCAX")
    } else {
        alert("Congrats on prestiging past prestige 6! There is no more new content, but check in next time for more!")
    }
  }
}
function help() {
  alert("How to play:\nWelcome to Capitalist Clicker!\nThe goal of this game is to become as rich as you can. This is the guide to the game!\nTo earn money, click the work button! If you feel you are progressing slowly, buy some upgrades.\nIf you have the money, you should prestige!\nDon't forget to save!")
}
function save() {
  localStorage.setItem('money', x)
  localStorage.setItem('income', y)
  localStorage.setItem('vmade', made)
  localStorage.setItem('vup1', up1)
  localStorage.setItem('vup2', up2)
  localStorage.setItem('vup3', up3)
  localStorage.setItem('vup4', up4)
  localStorage.setItem('vup5', up5)
  localStorage.setItem('vup6', up6)
  localStorage.setItem('vup7', up7)
  localStorage.setItem('vup8', up8)
  localStorage.setItem('vup9', up9)
  localStorage.setItem('vup10', up10)
  localStorage.setItem('vmup1', mup1)
  localStorage.setItem('vmup2', mup2)
  localStorage.setItem('vmup3', mup3)
  localStorage.setItem('vmup4', mup4)
  localStorage.setItem('vmup5', mup5)
  localStorage.setItem('vup1v', up1v)
  localStorage.setItem('vup2v', up2v)
  localStorage.setItem('vup3v', up3v)
  localStorage.setItem('vup4v', up4v)
  localStorage.setItem('vup5v', up5v)
  localStorage.setItem('vup6v', up6v)
  localStorage.setItem('vup7v', up7v)
  localStorage.setItem('vup8v', up8v)
  localStorage.setItem('vup9v', up9v)
  localStorage.setItem('vup10v', up10v)
  localStorage.setItem('vmup1v', mup1v)
  localStorage.setItem('vmup2v', mup2v)
  localStorage.setItem('vmup3v', mup3v)
  localStorage.setItem('vmup4v', mup4v)
  localStorage.setItem('vmup5v', mup5v)
  localStorage.setItem('vclk', clk)

  localStorage.setItem('vAmt1', Amt1)
  localStorage.setItem('vAmt2', Amt2)
  localStorage.setItem('vAmt3', Amt3)
  localStorage.setItem('vAmt4', Amt4)
  localStorage.setItem('vAmt5', Amt5)
  localStorage.setItem('vAmt6', Amt6)
  localStorage.setItem('vAmt7', Amt7)
  localStorage.setItem('vAmt8', Amt8)
  localStorage.setItem('vAmt9', Amt9)
  localStorage.setItem('vAmt10', Amt10)
  localStorage.setItem('vMamt1', Mamt1)
  localStorage.setItem('vMamt2', Mamt2)
  localStorage.setItem('vMamt3', Mamt3)
  localStorage.setItem('vMamt4', Mamt4)
  localStorage.setItem('vMamt5', Mamt5)

  localStorage.setItem('vprestige', prestige)
  localStorage.setItem('vPprice', Pprice)
  localStorage.setItem('vMult', Mult)
  alert("Saved successfuly!\nNote: Your previous save was overwritten.")
  // To read

}
function load() {

  var jsonString = localStorage.getItem('money') || '';
  x = JSON.parse(jsonString);
  var jsonString = localStorage.getItem('income') || '';

  y = JSON.parse(jsonString);
  var jsonString = localStorage.getItem('vmade') || '';
  made = JSON.parse(jsonString);

  var jsonString = localStorage.getItem('vup1') || '';
  up1 = JSON.parse(jsonString);
  var jsonString = localStorage.getItem('vup2') || '';
  up2 = JSON.parse(jsonString);

  var jsonString = localStorage.getItem('vup3') || '';
  up3 = JSON.parse(jsonString);
  var jsonString = localStorage.getItem('vup4') || '';
  up4 = JSON.parse(jsonString);
  var jsonString = localStorage.getItem('vup5') || '';
  up5 = JSON.parse(jsonString);
  var jsonString = localStorage.getItem('vup6') || '';
  up6 = JSON.parse(jsonString);
  var jsonString = localStorage.getItem('vup7') || '';
  up7 = JSON.parse(jsonString);
  var jsonString = localStorage.getItem('vup8') || '';
  up8 = JSON.parse(jsonString);
  var jsonString = localStorage.getItem('vup9') || '';
  up9 = JSON.parse(jsonString);
  var jsonString = localStorage.getItem('vup10') || '';
  up10 = JSON.parse(jsonString);
 
  var jsonString = localStorage.getItem('vclk') || '';
  clk = JSON.parse(jsonString);
  var jsonString = localStorage.getItem('vmup1') || '';
  mup1 = JSON.parse(jsonString);
  var jsonString = localStorage.getItem('vmup2') || '';
  mup2 = JSON.parse(jsonString);
  var jsonString = localStorage.getItem('vmup3') || '';
  mup3 = JSON.parse(jsonString);
  var jsonString = localStorage.getItem('vmup4') || '';
  mup4 = JSON.parse(jsonString);
  var jsonString = localStorage.getItem('vmup5') || '';
  mup5 = JSON.parse(jsonString);
  var jsonString = localStorage.getItem('vup1v') || '';
  up1v = JSON.parse(jsonString);
  var jsonString = localStorage.getItem('vup2v') || '';
  up2v = JSON.parse(jsonString);
  var jsonString = localStorage.getItem('vup3v') || '';
  up3v = JSON.parse(jsonString);
  var jsonString = localStorage.getItem('vup4v') || '';
  up4v = JSON.parse(jsonString);
  var jsonString = localStorage.getItem('vup5v') || '';
  up5v = JSON.parse(jsonString);
  var jsonString = localStorage.getItem('vup6v') || '';
  up6v = JSON.parse(jsonString);
  var jsonString = localStorage.getItem('vup7v') || '';
  up7v = JSON.parse(jsonString);
  var jsonString = localStorage.getItem('vup8v') || '';
  up8v = JSON.parse(jsonString);
  var jsonString = localStorage.getItem('vup9v') || '';
  up9v = JSON.parse(jsonString);
  var jsonString = localStorage.getItem('vup10v') || '';
  up10v = JSON.parse(jsonString);
  var jsonString = localStorage.getItem('vmup1v') || '';
  mup1v = JSON.parse(jsonString);
  var jsonString = localStorage.getItem('vmup2v') || '';
  mup2v = JSON.parse(jsonString);
  var jsonString = localStorage.getItem('vmup3v') || '';
  mup3v = JSON.parse(jsonString);
  var jsonString = localStorage.getItem('vmup4v') || '';
  mup4v = JSON.parse(jsonString);
  var jsonString = localStorage.getItem('vmup5v') || '';
  mup5v = JSON.parse(jsonString);

  var jsonString = localStorage.getItem('vAmt1') || '';
  Amt1 = JSON.parse(jsonString);
  var jsonString = localStorage.getItem('vAmt2') || '';
  Amt2 = JSON.parse(jsonString);
  var jsonString = localStorage.getItem('vAmt3') || '';
  Amt3 = JSON.parse(jsonString);
  var jsonString = localStorage.getItem('vAmt4') || '';
  Amt4 = JSON.parse(jsonString);
  var jsonString = localStorage.getItem('vAmt5') || '';
  Amt5 = JSON.parse(jsonString);
  var jsonString = localStorage.getItem('vAmt6') || '';
  Amt6 = JSON.parse(jsonString);
  var jsonString = localStorage.getItem('vAmt7') || '';
  Amt7 = JSON.parse(jsonString);
  var jsonString = localStorage.getItem('vAmt8') || '';
  Amt8 = JSON.parse(jsonString);
  var jsonString = localStorage.getItem('vAmt9') || '';
  Amt9 = JSON.parse(jsonString);
  var jsonString = localStorage.getItem('vAmt10') || '';
  Amt10 = JSON.parse(jsonString);
  var jsonString = localStorage.getItem('vMamt1') || '';
  Mamt1 = JSON.parse(jsonString);
  var jsonString = localStorage.getItem('vMamt2') || '';
  Mamt2 = JSON.parse(jsonString);
  var jsonString = localStorage.getItem('vMamt3') || '';
  Mamt3 = JSON.parse(jsonString);
  var jsonString = localStorage.getItem('vMamt4') || '';
  Mamt4 = JSON.parse(jsonString);
  var jsonString = localStorage.getItem('vMamt5') || '';
  Mamt5 = JSON.parse(jsonString);

  var jsonString = localStorage.getItem('vprestige') || '';
  prestige = JSON.parse(jsonString);
 
  var jsonString = localStorage.getItem('vPprice') || '';
  Pprice = JSON.parse(jsonString);
 
  var jsonString = localStorage.getItem('vMult') || '';
  Mult = JSON.parse(jsonString);


  disp = x
  document.getElementById("demo2").innerHTML = "Money:";
  document.getElementById("demo1").innerHTML = "$" + disp;
  
  z = Math.round((y*Mult*prestige)*100)/100
  disp = z
  if (z > 1000000000000000000000000000000000) {
    disp = Math.round(z/1000000000000000000000000000000000 * 100) / 100 + "U"
  } else if (z > 1000000000000000000000000000000) {
    disp = Math.round(z/1000000000000000000000000000000 * 100) / 100 + "d"
  } else if (z > 1000000000000000000000000000) {
    disp = Math.round(z/1000000000000000000000000000 * 100) / 100 + "n"
  } else if (z > 1000000000000000000000000) {
    disp = Math.round(z/1000000000000000000000000 * 100) / 100 + "S"
  } else if (z > 1000000000000000000000) {
    disp = Math.round(z/1000000000000000000000 * 100) / 100 + "s"
  } else if (z > 1000000000000000000) {
    disp = Math.round(z/1000000000000000000 * 100) / 100 + "Q"
  } else if (z > 1000000000000000) {
    disp = Math.round(z/1000000000000000 * 100) / 100 + "q"
  } else if (z > 1000000000000) {
    disp = Math.round(z/1000000000000 * 100) / 100 + "t"
  } else if (z > 1000000000) {
    disp = Math.round(z/1000000000 * 100) / 100 + "b"
  } else if (z > 1000000) {
    disp = Math.round(z/1000000 * 100) / 100 + "m"
  } else if (z > 1000) {
    disp = Math.round(z/1000 * 100) / 100 + "k"
  }
  document.getElementById("tot").innerHTML = "$" + disp;

  document.getElementById("up1").innerHTML = "$"+up1;
  document.getElementById("up1v").innerHTML = "Income: +$"+up1v;
  document.getElementById("amt1").innerHTML = "Owned: "+Amt1;
  document.getElementById("up2").innerHTML = "$"+up2;
  document.getElementById("up2v").innerHTML = "Income: +$"+up2v;
  document.getElementById("amt2").innerHTML = "Owned: "+Amt2;
  document.getElementById("up3").innerHTML = "$"+up3;
  document.getElementById("up3v").innerHTML = "Income: +$"+up3v;
  document.getElementById("amt3").innerHTML = "Owned: "+Amt3;
  document.getElementById("up4").innerHTML = "$"+up4;
  document.getElementById("up4v").innerHTML = "Income: +$"+up4v;
  document.getElementById("amt4").innerHTML = "Owned: "+Amt4;
  document.getElementById("up5").innerHTML = "$"+up5;
  document.getElementById("up5v").innerHTML = "Income: +$"+up5v;
  document.getElementById("amt5").innerHTML = "Owned: "+Amt5;
  

  if (prestige > 1) {
    document.getElementById("up6").innerHTML = "$"+up6;
    document.getElementById("up6v").innerHTML = "Income: +$"+up6v;
    document.getElementById("amt6").innerHTML = "Owned: "+Amt6;
  }
  if (prestige > 2) {
    document.getElementById("up7").innerHTML = "$"+up7;
    document.getElementById("up7v").innerHTML = "Income: +$"+up7v;
    document.getElementById("amt7").innerHTML = "Owned: "+Amt7;
  }
  if (prestige > 3) {
    document.getElementById("up8").innerHTML = "$"+up8;
    document.getElementById("up8v").innerHTML = "Income: +$"+up8v;
    document.getElementById("amt8").innerHTML = "Owned: "+Amt8;
  }
  if (prestige > 4) {
    document.getElementById("up9").innerHTML = "$"+up9;
    document.getElementById("up9v").innerHTML = "Income: +$"+up9v;
    document.getElementById("amt9").innerHTML = "Owned: "+Amt9;
  }
  if (prestige > 5) {
    document.getElementById("up1").innerHTML = "$"+up10;
    document.getElementById("up1v").innerHTML = "Income: +$"+up10v;
    document.getElementById("amt1").innerHTML = "Owned: "+Amt10;
  }
  


  document.getElementById("mup1").innerHTML = "$"+mup1;
  document.getElementById("mup1v").innerHTML = "Multi: +"+mup1v+"x";
  document.getElementById("mamt1").innerHTML = "Relation: "+Mamt1;
  document.getElementById("mup2").innerHTML = "$"+mup2;
  document.getElementById("mup2v").innerHTML = "Multi: +"+mup2v+"x";
  document.getElementById("mamt2").innerHTML = "Relation: "+Mamt2;

  if (prestige > 1) {
    document.getElementById("mup3").innerHTML = "$"+mup3;
    document.getElementById("mup3v").innerHTML = "Multi: +"+mup3v+"x";
    document.getElementById("mamt3").innerHTML = "Relation: "+Mamt3;
  }
  if (prestige > 3) {
    document.getElementById("mup4").innerHTML = "$"+mup4;
    document.getElementById("mup4v").innerHTML = "Multi: +"+mup4v+"x";
    document.getElementById("mamt4").innerHTML = "Relation: "+Mamt4;
  }
  if (prestige > 5) {
    document.getElementById("mup5").innerHTML = "$"+mup5;
    document.getElementById("mup5v").innerHTML = "Multi: +"+mup5v+"x";
    document.getElementById("mamt5").innerHTML = "Relation: "+Mamt5;
  }
  pdisp = prestige-1
  document.getElementById("pup1").innerHTML = "$"+Pprice;
  document.getElementById("pup1v").innerHTML = "Lose everything for +1 multi and new content!";
  document.getElementById("pamt1").innerHTML = "Prestige: "+pdisp;
  alert("Loaded successfuly!\nNote: Your previous game data was overwritten.")

}
