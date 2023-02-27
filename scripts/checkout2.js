// $(document).ready(function () {
//   function resetBadge() {
//     var sum = 0;

//     recievedMenu.forEach((element) => {
//       sum += element.quantity;
//     });
//     $(".badge-item").text(sum);
//   }

//   function resetTotal() {
//     var sum = 0;
//     menu.forEach((element) => {
//       sum += element.quantity * element.price;
//     });
//     $("#Total").text("$" + sum.toFixed(2));
//   }

//   $("button").on("click", function () {
//     resetBadge();
//     resetTotal();
//   });
// });
$(document).ready(function () {
  (function () {
    "use strict";

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add("was-validated");
        },
        false
      );
    });
  })();
});
