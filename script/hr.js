function confirmarPresenca() {
    alert("Obrigado por confirmar sua presença!");
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("confirmBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var modalGift = document.getElementById("giftModal");

var giftBtn = document.getElementById("giftsBtn");

var giftSpan = document.getElementsByClassName("close")[1];

giftBtn.onclick = function() {
  modalGift.style.display = "block";
}

giftSpan.onclick = function() {
  modalGift.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalGift) {
    modalGift.style.display = "none";
  }
}


