var scrollToTopBtn = document.getElementById("scrollToTopBtn");
var rootElement = document.documentElement;

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);

let scrollToBottom = document.querySelector("#scroll-to-bottom")
let pageBottom = document.querySelector("#scrollToTopBtn")

scrollToBottom.addEventListener("click", function() {
  pageBottom.scrollIntoView()
})


function 실행(){
  const a = document.querySelector("#click-box")
  const b = document.querySelector("#namebox-img")

  if(b.style.display !== 'block'){
      b.style.display = 'block';
  }else{
      b.style.display = 'none';
  }
}

