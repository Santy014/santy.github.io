function cambiarKirby(estado) {
  const kirby = document.getElementById("personaje");

  if (estado === "fire") {
    kirby.src = "img/kirby_fire.png";
    document.body.style.backgroundImage = "url('img/bg_fire.jpg')";
  } 
  else if (estado === "ice") {
    kirby.src = "img/kirby_ice.png";
    document.body.style.backgroundImage = "url('img/bg_ice.jpg')";
  } 
  else if (estado === "sword") {
    kirby.src = "img/kirby_sword.png";
    document.body.style.backgroundImage = "url('img/bg_sword.jpg')";
  } 
  else {
    kirby.src = "img/kirby_normal.png";
    document.body.style.backgroundImage = "url('img/bg_normal.jpg')";
  }
}
