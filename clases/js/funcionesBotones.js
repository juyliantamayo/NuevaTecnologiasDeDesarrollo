var clic=1,click=1,cli=1;
function mostrarInformacionDelCurso(){
  if(clic==1){
   document.getElementById('infoCurso').style.display = 'block';
   clic = clic + 1;
   } else{
    document.getElementById('infoCurso').style.display = 'none';
    clic = 1;
   }
}

function mostrarCompetencias(){
  if(click==1){
   document.getElementById('competencias').style.display = 'block';
   click = click + 1;
   } else{
    document.getElementById('competencias').style.display = 'none';
    click = 1;
   }
}

function mostrarObjetivosGenerales(){
  if(cli==1){
   document.getElementById('objetivoGeneral').style.display = 'block';
   cli = cli + 1;
   } else{
    document.getElementById('objetivoGeneral').style.display = 'none';
    cli = 1;
   }
}
