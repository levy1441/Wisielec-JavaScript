var haslo = "Pan nie da rady wygrać";

haslo = haslo.toUpperCase();

var dlugosc = haslo.length;
var ile_skuch = 0;

var haslo1 = "";

for (i=0; i<dlugosc; i++)
{
	if (haslo.charAt(i)==" ") haslo1 = haslo1 + " ";
	else haslo1 = haslo1 + "-";
}

function wypisywanie()
{
	document.getElementById("plansza").innerHTML = haslo1;
}

window.onload = start;


var litery = [
  "A",
  "Ą",
  "B",
  "C",
  "Ć",
  "D",
  "E",
  "Ę",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "Ł",
  "M",
  "N",
  "Ń",
  "O",
  "Ó",
  "P",
  "Q",
  "R",
  "S",
  "Ś",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "Ż",
  "Ź"]

function start()
{
	
	var tresc_diva ="";
	
	for (i=0; i<=34; i++)
	{
		var element = "lit" + i;
		tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz('+i+')" id="'+element+'">'+litery[i]+'</div>';
		if ((i+1) % 7 ==0) tresc_diva = tresc_diva + '<div style="clear:both;"></div>';
	}
	
	document.getElementById("alfabet").innerHTML = tresc_diva;
	
	
	wypisywanie();
}

String.prototype.ustawZnak = function(miejsce, znak)
{
	if (miejsce > this.length - 1) return this.toString();
	else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
}


function sprawdz(nr)
{
	
	var trafiona = false;
	
	for(i=0; i<dlugosc; i++)
	{
		if (haslo.charAt(i) == litery[nr]) 
		{
			haslo1 = haslo1.ustawZnak(i,litery[nr]);
			trafiona = true;
		}
	}
	
	if(trafiona == true)
	{
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#008800";
		document.getElementById(element).style.color = "#00CC40";
		document.getElementById(element).style.border = "3px solid #20CC40";
		document.getElementById(element).style.cursor = "default";
		
		wypisywanie();
	}
	else
	{
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#550022";
		document.getElementById(element).style.color = "#AA0055";
		document.getElementById(element).style.border = "3px solid #AA0055";
		document.getElementById(element).style.cursor = "default";	
		document.getElementById(element).setAttribute("onclick",";");		
		
		//skucha
		ile_skuch++;
		var obraz = "img/s"+ ile_skuch + ".png";
		document.getElementById("szubienica").innerHTML = '<img src="'+obraz+'" alt="" />';
	}
	
	//wygrana
	if (haslo == haslo1)
	document.getElementById("alfabet").innerHTML  = "Udało ci się! Podałeś poprawne hasło: "+haslo+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
	
	//przegrana
	if (ile_skuch>=9)
	document.getElementById("alfabet").innerHTML  = "HAHAHAHA! Coś ci nie poszło? Prawidłowe hasło to: "+haslo+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
}
