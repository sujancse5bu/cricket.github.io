const btnsContainer = document.getElementById('btns')
const contentContainer = document.getElementById('content')
btnsContainer.addEventListener('click', (event) => {
  if (event.target.tagName.toLowerCase() === 'button') {
    contentContainer.innerHTML = `<iframe src="https://noob4cast.com/fuckhdstream.php?player=desktop&live=${event.target.id}" width="100%" height="500px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media"></iframe>`
  }
})