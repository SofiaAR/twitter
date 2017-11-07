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
//funcion para contar caracteres desde hasta // 

function charactLimit(){

	var tweet= document.getElementById("tweet");

	if(tweet.value.length > 140){
		tweet.value = tweet.value.substring(0,140); 
	}
else{
	document.getElementById("inp").value = 140 -tweet.value.length;

	}
}


//funcion para validar el boton y se desactive//

/*var camposValidos = false;
var btn: document.getElementById('btn');

	if (camposValidos==false){
			btn.disabled=true;
	}
	else{
		btn.disabled=false;
			
	}*/
