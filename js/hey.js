// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.querySelectorAll("#myImg");
var modalImg = document.getElementById("img01");
img.forEach(i => {
  i.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  }
})

// Get the <span> element that closes the modal
var img = document.getElementsByClassName("modal-content")[0];

// When the user clicks on <span> (x), close the modal
img.onclick = function() { 
  modal.style.display = "none";
}

var myVar;

function myFunctionzz() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}