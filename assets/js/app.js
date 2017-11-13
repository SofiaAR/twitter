
var btn = document.getElementById('btn');
			btn.disabled=true;


function add(){
	//tomar el valor// //antes crear una variable q contenga a ese valor//
	var tweet = document.getElementById("tweet").value; //variable que contiene al valor *value*(node.value)//
	document.getElementById("tweet").value = ""; //se toma el elemento creado y se iguala a un elemento vacio////limpa el valor//
	var newTweet = document.createElement('cont'); //creando un contenedor para lo q viene luego, en este caso un div//
	var containertxt = document.getElementById('containertxt'); 


//creando elementos en orden//

	var paragraph = document.createElement('p'); //creando parrafo//
	paragraph.classList.add('color'); //agregando color al parrafo//
	var nodoText = document.createTextNode(tweet); // le estas diciendo al comentario que es un nodo de texto//
	paragraph.appendChild(nodoText); // le dijimos q p es padre de este nodo de txto//


	newTweet.appendChild(paragraph);

	//metemos todo nuestro contenido en un solo contenedor q es cont//
	cont.appendChild(newTweet);

}
//funcion para contar caracteres  // 

function charactLimit(){
	btn.disabled= false;

	var tweet = document.getElementById("tweet").value; // aca se almacena valor de cada tweet//
	var parrafo = document.getElementById("inp");// var define el contador//
	var max = 140; // define cantidad max de caracteres.//
	parrafo.innerHTML= max-tweet.length; //Modificar el contador para que a 140 se le reste el largo del tweet
}

f/*unction validar(){
	var valido = true
	if(getElementById("tweet").value.length = ){
		valido = false;
	}
}

//funcion para auto resize textarea

/*var tweet = document.getElementById("tweet"); 
var heightLimit = 200; /* Maximum height: 200px */
/*tweet.oninput = function() {
tweet.style.height = ""; /* Reset the height*
tweet.style.height = Math.min(textarea.scrollHeight, heightLimit) + "px";
};/*

	/*function cambioColor(texto){
		var caracteres = texto.value.length;
		btn.innerText = 140 - caracteres;

		if(caracteres >= 120 && caracteres < 130){
			btn.style.color = "green";
		}
		else if (caracteres >130) {
			btn.style.color = "red";
		}
		else{
			btn.style.color = "black";
		}
	}
};
/*
if(document.getElementById('inp').value.length 11>= && <= 20) {
       element.style.color = 'green';
   }if(document.getElementById('inp').value.length 0 >=10){
       element.style.color = 'red';*/

/*var des();

if(btn.value.length == ""){
		 btn.disabled= true;
}
else {
	btn.disabled = false;
}*/

//funcion para validar el boton y se desactive//

/*var camposValidos = false;
var btn: document.getElementById('btn');

	if (camposValidos==false){
			btn.disabled=true;
	}
	else{
		btn.disabled=false;
			
	}*/
