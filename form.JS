function envio(){
 nome = document.getElementById("nome")
 comentario = document.getElementById("comentario")
 area= document.getElementById("area")
 if (nome.value == "Admin")
 {alert ("Esse nome está reservado para o administrador possa responder perguntas sem confusão"); retur = false;}
 else {document.getElementById("area").innerHTML  += "\n " + nome.value + ":" + comentario.value + "\n"; 
}}
