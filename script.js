function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light") // Isso faz a mesma função do código abaixo

  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

  // pegar a tag img
  const img = document.querySelector("#profile img")
// Substituir a imagem 
  if (html.classList.contains("light")) {
// Se tiver light mode, adicionar a imagem light 
img.setAttribute('src','./assets/avatar-light.png')
  } else {
// Se tiver sem light mode, manter normal 
img.setAttribute("src", "./assets/avatar.png")
  }
}
