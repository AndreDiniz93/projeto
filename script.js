function toggleMode(){
  const html = document.documentElement
  html.classList.toggle("light")

  //PEGAR A IMAGEM
  const img = document.querySelector('#profile img')

//SUBSTITUIR A IMAGEM
  if(html.classList.contains("light")){
    //SE TIVER LIGHT MODE, SELECIONAR A IMAGEM LIGHT
    img.setAttribute("src", "./assets/assets/avatar-light.png")
  }else {
    // SE TIVER SEM LIGHT MODE, MANTER A IMAGEM NORMAL
    img.setAttribute("src", "./assets/assets/avatar.png")
  }

}