
const essaparada=document.querySelectorAll('.tecla')



function tocaSom(selctor_audio) {
   const elemento = document.querySelector(selctor_audio);

   if( elemento=== null){
      alert('fudeu de vez patrao')
   }
   if (elemento!= null && elemento.localName === 'audio'){
      elemento.play();
   }
}
for( let contador= 0; contador < essaparada.length; contador++){
   
   const tecla = essaparada[contador];

   const instrumento = tecla.classList[1];

   const idaudio = `#som_${instrumento}`;

   tecla.onclick = function () { 
      tocaSom(idaudio);
   }  
   
   tecla.onkeydown = function (evento) {
      if( evento.code =='Space'||evento.code === 'Enter'){
         tecla.classList.add('ativa');
      }  
      else{tecla.classList.remove('ativa');}
   }
    tecla.onkeyup = function () {  
      tecla.classList.remove('ativa');
   }
}   
