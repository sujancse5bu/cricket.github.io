const btnsContainer = document.getElementById('btns')
const contentContainer = document.getElementById('content')
btnsContainer.addEventListener('click', (event) => {
  console.log('event.target: ', event.target)
  if (event.target.tagName.toLowerCase() === 'button') {
    console.log('event.target is button: ', contentContainer.innerHTML)
    contentContainer.innerHTML = ``
    contentContainer.innerHTML = `<iframe src="https://noob4cast.com/fuckhdstream.php?player=desktop&live=${event.target.id}" width="100%" height="500px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media"></iframe>`
  }
})