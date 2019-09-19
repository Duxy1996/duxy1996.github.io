
var beewo_text_str_es = "La primera startUp europea en fabricar drones modulares. En kits de aprendizaje , los proyectos de Beewo pretenden acercar la programacion a los jóvenes. Beewo no es solo un proyecto educativo es una nueva forma de aprender y compartir"
var beewo_text_str_en = "Beewo is the first European startup which made modular Drones. Beewo tries to teach programming and maths to the children with our -Builder Kits-. Beewo is not only a educative project is a new way to learn and share"

var infusion_text_str_es = "Formo parte de un equipo multidisciplinar que intenta acercar la tecnología a todo el mundo. Hemos desarrollado una web en Ruby on Rails donde cualquier persona puede subir su MeetUp. Cada dos semanas estos se imparten según los resultados de las votaciones"
var infusion_text_str_en = "I am a member of a multidisciplinar team which tries to draw near technology to everybody. We have develop a web page using Ruby on Rails where any person can upload its Meetup. Each two weeks there are a Meetup baseed on the votations results"

var spain = false;

function translateLabels()
{
  spain = !spain;

  if (spain)
  {
    document.getElementById("beewo_text").innerHTML = beewo_text_str_es;
    document.getElementById("infusion_text").innerHTML = infusion_text_str_es;
    document.getElementById("flag").classList.add('english');
    document.getElementById("flag").classList.remove('spain');
  }
  else
  {
    document.getElementById("beewo_text").innerHTML = beewo_text_str_en;
    document.getElementById("infusion_text").innerHTML = infusion_text_str_en;
    document.getElementById("flag").classList.add('spain');
    document.getElementById("flag").classList.remove('english');
  }
}