setTimeout(function(){
    document.getElementsByTagName('body')[0].classList.add('loaded');
}, 3000);

function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  // var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  // imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}

// download links with <button> instead of styling <a>
const downloadLinks = document.querySelectorAll("[data-download]");
downloadLinks.forEach(button => {
  const imgpath = button.dataset.download;
  const a = document.createElement("a");
  a.href = imgpath;
  a.download = ""
  a.style.display = "none";

  button.addEventListener("click", () => {
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
})
