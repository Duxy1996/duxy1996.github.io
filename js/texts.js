
var beewo_text_str_es = "La primera startUp europea en fabricar drones modulares. En kits de aprendizaje , los proyectos de Beewo pretenden acercar la programacion a los jóvenes. Beewo no es solo un proyecto educativo es una nueva forma de aprender y compartir"
var beewo_text_str_en = "Beewo is the first European startup which made modular DeferredPermissionRequest. Beewo tries to teach programming and maths to the children with our -Builder Kits-. Beewo is not only a educative project is a new way to learn and share"

var spain = true;

function translateLabels()
{
  spain = !spain;

  if (spain)
  {
    document.getElementById("beewo_text").innerHTML = beewo_text_str_es;
    document.getElementById("flag").classList.add('english');
    document.getElementById("flag").classList.remove('spain');
  }
  else
  {
    document.getElementById("beewo_text").innerHTML = beewo_text_str_en;
    document.getElementById("flag").classList.add('spain');
    document.getElementById("flag").classList.remove('english');
  }


}