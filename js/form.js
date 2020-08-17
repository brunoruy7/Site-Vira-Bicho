function salvando(){
 /*
 nome = document.getElementById("nome")
 comentario = document.getElementById("comentario")
 area= document.getElementById("area")
 if (nome.value == "Admin")
 {alert ("Esse nome está reservado para o administrador possa responder perguntas sem confusão"); retur = false;}
 else {document.getElementById("area").innerHTML  += "\n " + nome.value + ":" + comentario.value + "\n"; 
}
 */
 event.preventDefault();

 let nome = document.querySelector("input[name='nome']").value;
 let comentario = document.querySelector("textarea[name='comentario']").value;
 
 if(nome != "Admin"){
 	alert ("Esse nome está reservado para o administrador para que possa responder perguntas sem confusão");
 }else{
 	adicionandoComentario(comentario);
 }
}

function adicionandoComentario(comentario){
	let novoComentario = document.createElement("li");

	novoComentario.innerText = `${comentario}`;

	let botaoRemover = document.createElement("button");
	botaoRemover.type ='button';
	botaoRemover.innerText = 'Remover';
	botaoRemover.setAttribute("onclick", '(this)');

	novoComentario.appendChild(botaoRemover);

	let listaComentarios = document.getElementById("lista-comentarios")
	listaComentarios.appendChild(novoComentario)
}

function removerComentario(botao){
	let linha = botaa.parentNote;
	document.getElementById("lista-comentarios").removeChild(linha) 
}