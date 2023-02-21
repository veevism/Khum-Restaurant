$(document).ready(function () {
  $("#cart").on("click", function () {
    $(".shopping-cart").fadeToggle("fast");
  });

  const sectionCenter = document.querySelector(".section-center");
  const menuSector = document.querySelector(".shopping-cart-items");
  var cartArray = [];
  var counter = 0;

  diplayMenuItems(menu);

  $(".section-center img").click(function (e) {
    var selectedfoodid = e.target.id;
    var selectedfood = menu[selectedfoodid];

    //if item never been in cart before
    if (selectedfood.quantity == 0) {
      selectedfood.quantity += 1;
      generateCart(selectedfood, selectedfoodid, e);

      //if item already in cart
    } else if (selectedfood.quantity >= 1) {
      selectedfood.quantity += 1;

      for (let i = 0; i < cartArray.length; i++) {
        if (selectedfoodid == cartArray[i]) {
          document.querySelectorAll(".shopping-cart-items li")[
            i
          ].children[3].innerHTML = "Quantity: " + selectedfood.quantity;
        }
      }
      resetBadge();
      resetTotal();
    }
  });

  $("#checkout-button").click(function () {
    var sendCartArray = [];
    menu.forEach((element) => {
      if (element.quantity > 0) {
        sendCartArray.push(element);
      }
    });
    console.log(sendCartArray);
  });

  // $("img").click(function (e) {
  //   console.log("hello");
  // });

  $("#clear-button").click(function () {
    clearButton();
    resetBadge();
  });

  function sendIndexToAdmin() {}

  function clearButton() {
    for (let i = 0; i < cartArray.length; i++) {
      document.querySelectorAll(".shopping-cart-items li")[0].remove();
    }
    cartArray = [];
    counter = 0;
    clearMenu();
  }

  function clearMenu() {
    menu.forEach((element) => {
      element.quantity = 0;
    });
    resetBadge();
    resetTotal();
  }

  function resetBadge() {
    var sum = 0;

    menu.forEach((element) => {
      sum += element.quantity;
    });
    $(".badge").text(sum);
  }

  function resetTotal() {
    var sum = 0;
    menu.forEach((element) => {
      sum += element.quantity * element.price;
    });
    $("#Total").text("$" + sum.toFixed(2));
  }

  function generateCart(selectedfood, selectedfoodid, e) {
    var hello = `<li class="clearfix" id="${selectedfood.title}">
      <img
        src="${selectedfood.img}"
        alt="${selectedfood.title}"
        class="cart-img"
      />
      <span class="item-name">${selectedfood.title}</span>
      <span class="item-price">${selectedfood.price}</span>
      <span class="item-quantity">Quantity: ${selectedfood.quantity}</span>
    </li>`;
    menuSector.innerHTML += hello;

    cartArray[counter] = selectedfoodid;
    counter++;
    resetBadge();
    resetTotal();
  }

  function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map((item) => {
      return `<article class="menu-item" >
            <img id="${item.id}" src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");

    sectionCenter.innerHTML = displayMenu;
  }
});
