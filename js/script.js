
//***************  PAGE RESTAURANT*************//
//****** Div Midi **********/
let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
/************NEWSLETTER*************/
function openForm() {
  document.getElementById("popupForm").style.display="block";
}

function closeForm() {
  document.getElementById("popupForm").style.display="none";
}

/*******DATE FORMULAIRE******** */

$(document).ready(function () {
    
  $("#dt1").datepicker({
      dateFormat: "dd-M-yy",
      minDate: 0,
      onSelect: function (date) {
          var date2 = $('#dt1').datepicker('getDate');
          date2.setDate(date2.getDate() + 1);
          $('#dt2').datepicker('setDate', date2);
          //sets minDate to dt1 date + 1
          $('#dt2').datepicker('option', 'minDate', date2);
      }
  });
  $('#dt2').datepicker({
      dateFormat: "dd-M-yy",
      onClose: function () {
          var dt1 = $('#dt1').datepicker('getDate');
          console.log(dt1);
          var dt2 = $('#dt2').datepicker('getDate');
          if (dt2 <= dt1) {
              var minDate = $('#dt2').datepicker('option', 'minDate');
              $('#dt2').datepicker('setDate', minDate);
          }
      }
  });
  $("#dt3").datepicker({
    dateFormat: "dd-M-yy",
  });
  $("#dt4").datepicker({
    dateFormat: "dd-M-yy",
  });

});//////////////////////
/*******BLOCAGE FORMULAIRE**********/
let envoi = document.querySelector(`.btn-NL, .submit1, .submit2, .btnContact`);

envoi.addEventListener('click', testDonnees);

function testDonnees(e){
  alert('Envoi du formulaire bloqué');
  e.preventDefault();
}



