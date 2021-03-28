function calculare(){
var varsta=document.getElementById("varsta");
varsta=varsta.value.split("#");

var zi=parseInt(varsta[0]);
var luna=parseInt(varsta[1]);
var an=parseInt(varsta[2]);

var data_nastere= new Date(an,luna,zi);

setInterval(function(){
var acum=new Date();

    var an_acum = acum.getFullYear();
    var luna_acum = acum.getMonth();
    var zi_acum = acum.getDate();
	var ora_varsta = acum.getHours();
	var minut_varsta = acum.getMinutes();
	var secunda_varsta = acum.getSeconds();

 an_varsta = an_acum - an;

    if (luna_acum >= luna)
        var luna_varsta = luna_acum - luna;
    else {
        an_varsta--;
        var luna_varsta = 12 + luna_acum -luna;
    }

    if (zi_acum >= zi)
        var zi_varsta = zi_acum - zi;
    else {
        luna_varsta--;
        var zi_varsta = 31 + zi_acum - zi;

        if (luna_varsta < 0) {
            luna_varsta = 11;
            an_varsta--;
        }
    }	
	
	document.getElementById("afiseaza_varsta").innerHTML="Utilizatorul are "+an_varsta+" ani, "+luna_varsta+" luni, "+zi_varsta+" zile, "+ora_varsta+" ore, "+minut_varsta+" minute, "+secunda_varsta+" secunde!";
	
},1000);}

	 // <input id="varsta" type="text" name="ani" placeholder="zi#luna#an">
		 // <button onclick="calculare()"> Afiseaza varsta </button>
			// <p id="afiseaza_varsta"></p>
		 // <script src="js/java-varsta.js"></script>




