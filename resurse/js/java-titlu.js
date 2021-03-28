// Task nivel 2 - 3. Aparitie treptata titlu

var titlu='DESPRE AFACEREA NOASTRA';
var inceput=0;
var sfarsit=titlu.length-1;
var start='';
var final='';

function scrie(){

    var element = document.getElementById('treptat');
	
	if(inceput!=sfarsit){
	start=start+titlu.charAt(inceput);
	final=titlu.charAt(sfarsit)+final;
    element.textContent = start+final;
	}
	else{
	start=start+titlu.charAt(inceput);
    element.textContent = start+final;
	}

    inceput++;
	sfarsit--;

    if (inceput>sfarsit)
	{return;}
	
	window.setTimeout(scrie, 200);
};

scrie();