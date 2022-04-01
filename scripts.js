console.log('Hello Node Js')
const tempIframe = document.querySelector('#frame iframe')
const iframeDocument = tempIframe.contentDocument || tempIframe.contentWindow.document;
if (!iframeDocument) {
  throw "iframe couldn't be found in DOM.";
}

var iframeContent = iframeDocument.querySelector('body');
console.log('body : ', iframeContent)
iframeContent.addEventListener('click', (e) => {
  console.log('event: ', e.target)
  e.preventDefault()
})