function cambiarKirby(estado) {
  const kirby = document.getElementById("personaje");

  if (estado === "volcano") {
    kirby.src = "https://raw.githubusercontent.com/Santy014/santy.github.io/refs/heads/main/index/Tarea3/Imagenes/kirby_volcano.png";
    document.body.style.backgroundImage = "url('https://raw.githubusercontent.com/Santy014/santy.github.io/refs/heads/main/index/Tarea3/Imagenes/bg_volcano.jpg')";
  } 
  else if (estado === "ice") {
    kirby.src = "https://raw.githubusercontent.com/Santy014/santy.github.io/refs/heads/main/index/Tarea3/Imagenes/kirby_ice.png";
    document.body.style.backgroundImage = "url('https://raw.githubusercontent.com/Santy014/santy.github.io/refs/heads/main/index/Tarea3/Imagenes/bg_ice.jpg')";
  } 
  else if (estado === "sword") {
    kirby.src = "https://raw.githubusercontent.com/Santy014/santy.github.io/refs/heads/main/index/Tarea3/Imagenes/kirby_sword.png";
    document.body.style.backgroundImage = "url('https://raw.githubusercontent.com/Santy014/santy.github.io/refs/heads/main/index/Tarea3/Imagenes/bg_normal.jpg')";
  } 
  else {
    kirby.src = "https://raw.githubusercontent.com/Santy014/santy.github.io/refs/heads/main/index/Tarea3/Imagenes/kirby_normal.png";
    document.body.style.backgroundImage = "url('https://raw.githubusercontent.com/Santy014/santy.github.io/refs/heads/main/index/Tarea3/Imagenes/bg_normal.jpg')";
  }
}

