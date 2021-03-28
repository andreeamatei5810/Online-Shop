// Task nivel 1 - 7. Ravase

citate=["“Whoever said that money can’t buy happiness simply didn’t know where to go shopping.”",
"“Happiness is not in money, but in shopping.”",
"“I always say shopping is cheaper than a psychiatrist.”",
"“I love shopping. There is a little bit of magic found in buying something new. It is instant gratification, a quick fix.”",
"“I shop, therefore I am.”",
"“Shopping is my cardio.”",
"“You can always find something you want.”"]

function generare()
{
	var pozitie=Math.floor(Math.random()*citate.length);
	document.getElementById("mesaj-shop").innerHTML=citate[pozitie];
}

generare();
