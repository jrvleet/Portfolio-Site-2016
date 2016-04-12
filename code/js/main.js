document.addEventListener("DOMContentLoaded", function(event) {
  // Get the modal
  var modal = document.getElementById('myModal');
  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  var el = document.querySelector('.modal');

  var el2 = document.getElementById("name");

  var el3 = document.getElementById("message");


  // When the user clicks on the button, open the modal
  btn.onclick = function(evt) {
    alert("Jessica", "This is working");
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    el.classList.add('fade-out');
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      el.classList.add('fade-out');
      setTimeout(function() {
        modal.style.display = "none";
        el.classList.remove('fade-out');
      }, 5000);
    }
  }

  // fade out
  function fadeOut(el){
    el.style.opacity = 1;

    (function fade() {
      if ((el.style.opacity -= .1) < 0) {
        el.style.display = 'none';
        el.classList.add('is-hidden');
      } else {
        requestAnimationFrame(fade);
      }
    })();
  }
// override window.alert method
  window.alert = function(name, message) {
    modal.style.display = "block";
    el2.innerHTML = name;
    el3.innerHTML = message;
  }
});
