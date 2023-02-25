$(document).ready(function () {
  console.log();
  const recievedMenu = JSON.parse(localStorage.getItem("sendcartArray"));

  resetBadge();
  resetTotal();

  const checkoutCenter = document.querySelector("#container3");

  displayCheckoutMenu(recievedMenu, checkoutCenter);

  function resetBadge() {
    var sum = 0;

    recievedMenu.forEach((element) => {
      sum += element.quantity;
    });
    $(".badge-item").text(sum);
  }

  function resetTotal() {
    var sum = 0;
    recievedMenu.forEach((element) => {
      sum += element.quantity * element.price;
    });
    console.log(sum);
    resetSuperTotal(sum);
    $("#Total").text("$" + sum.toFixed(2));
  }

  function resetSuperTotal(sum) {
    var addedExpense = $("#standard-deli").text();

    $("#supertotal").text("$" + (sum + 2).toFixed(2));
  }

  $("button").on("click", function () {
    var checkoutfoodid = this.parentNode.parentNode.children[0].children[0].id;

    var checkoutfood = recievedMenu[checkoutfoodid];

    if (this.children[0].className == "fas fa-plus") {
      checkoutfood.quantity += 1;
    } else if (this.children[0].className == "fas fa-minus") {
      if (checkoutfood.quantity > 0) {
        checkoutfood.quantity -= 1;
      }
    }

    console.log(recievedMenu);
    resetBadge();
    resetTotal();
  });

  function displayCheckoutMenu(menuItems, destination) {
    let displayCheckMenu = recievedMenu.map((item) => {
      return `<div
      class="item row mb-4 d-flex justify-content-between align-items-center"
    >
      <div class="col-md-2 col-lg-2 col-xl-2">
        <img
          src=${item.img}
          class="img-fluid rounded-3"
          alt="Cotton T-shirt"
          id="${item.id}"
        />
      </div>
      <div class="col-md-3 col-lg-3 col-xl-3">
        <h6 class="text-muted">${item.category}</h6>
        <h6 class="text-black mb-0">${item.title}</h6>
      </div>
      <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
        <button
          class="btn btn-link px-2"
          onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
        >
          <i class="fas fa-minus"></i>
        </button>
  
        <input
          id="form1"
          min="0"
          name="quantity"
          value="${item.quantity}"
          type="number"
          class="form-control form-control-sm text-md-center"
        />
  
        <button
          class="btn btn-link px-2"
          onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
        >
          <i class="fas fa-plus"></i>
        </button>
      </div>
      <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
        <h6 class="mb-0">${item.price}</h6>
      </div>
      <div class="col-md-1 col-lg-1 col-xl-1 text-end">
        <a href="#!" class="text-muted"
          ><i class="fas fa-times"></i
        ></a>
      </div>
    </div>
    <hr class="my-4" />`;
    });
    displayCheckMenu = displayCheckMenu.join("");

    destination.outerHTML = displayCheckMenu;
  }
});
