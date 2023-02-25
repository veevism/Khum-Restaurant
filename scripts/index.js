$(document).ready(function () {
  $(".shopping-cart").fadeOut();
  $("#cart").on("click", function () {
    $(".shopping-cart").fadeToggle("fast");
  });

  const sectionCenter = document.querySelector(".section-center");
  const categorySector = document.querySelector("#input-select-group");
  const menuSector = document.querySelector(".shopping-cart-items");
  var cartArray = [];
  var counter = 0;

  displayCategoryButt(menu, categorySector);
  displayMenuItems(menu, sectionCenter);

  if (storageTranferGet("backward") != null) {
    var retrievedArray = storageTranferGet("backward");

    console.log("you came back");
    retrievedArray.forEach((element) => {
      console.log(element);
      displayCart(element, element.id, "");
      resetBadge();
      resetTotal;
    });
    // displayCart()
  }

  // $(".section-center img").click(function (e) {
  //   var selectedfoodid = e.target.id;
  //   var selectedfood = menu[selectedfoodid];

  //   //if item never been in cart before
  //   if (selectedfood.quantity == 0) {
  //     selectedfood.quantity += 1;
  //     displayCart(selectedfood, selectedfoodid, e);

  //     //if item already in cart
  //   } else if (selectedfood.quantity >= 1) {
  //     selectedfood.quantity += 1;

  //     for (let i = 0; i < cartArray.length; i++) {
  //       if (selectedfoodid == cartArray[i]) {
  //         document.querySelectorAll(".shopping-cart-items li")[
  //           i
  //         ].children[3].innerHTML = "Quantity: " + selectedfood.quantity;
  //       }
  //     }
  //     resetBadge();
  //     resetTotal();
  //   }
  // });

  $(".section-center").on("click", "img", function (e) {
    var selectedfoodid = e.target.id;
    var selectedfood = menu[selectedfoodid];

    //if item never been in cart before
    if (selectedfood.quantity == 0) {
      selectedfood.quantity += 1;
      displayCart(selectedfood, selectedfoodid, e);

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

    // console.log(sendCartArray);
    // localStorage.setItem("sendcartArray", JSON.stringify(sendCartArray));
    // localStorage.setItem("test", "hello");
    storageTranferSet("sendcartarray", JSON.stringify(sendCartArray));
  });

  // $("img").click(function (e) {
  //   console.log("hello");
  // });

  $("#clear-button").click(function () {
    clearButton();
    resetBadge();
  });

  $("#inputGroupSelect04");

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
    $(".cart-badge").text(sum);
  }

  function resetTotal() {
    var sum = 0;
    menu.forEach((element) => {
      sum += element.quantity * element.price;
    });
    $("#Total").text("$" + sum.toFixed(2));
  }

  // function displayCart(selectedfood, selectedfoodid, e) {
  //   var hello = `<li class="clearfix" id="${selectedfood.title}">
  //     <img
  //       src="${selectedfood.img}"
  //       alt="${selectedfood.title}"
  //       class="cart-img"
  //     />
  //     <span class="item-name">${selectedfood.title}</span>
  //     <span class="item-price">${selectedfood.price}</span>
  //     <span class="item-quantity">Quantity: ${selectedfood.quantity}</span>
  //   </li>`;
  //   menuSector.innerHTML += hello;

  //   cartArray[counter] = selectedfoodid;
  //   counter++;
  //   resetBadge();
  //   resetTotal();
  // }

  function displayCart(selectedfood, selectedfoodid, e) {
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

  function displayCategoryButt(menuItems, destination) {
    var categoryArray = [];
    menu.forEach((element) => {
      if (!categoryArray.includes(element.category)) {
        categoryArray.push(element.category);
      }
    });

    let displayCate = categoryArray.map((item) => {
      return `<option value=${item}>${
        item.charAt(0).toUpperCase() + item.slice(1)
      }</option>`;
    });
    displayCate = displayCate.join("");

    destination.innerHTML =
      displayCate + "<option selected='' value=all>All</option>";
  }

  function displayMenuItems(menuItems, destination) {
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

    destination.innerHTML += displayMenu;
  }

  $("#input-select-group").change(function () {
    var val = $("#input-select-group option:selected").val();
    console.log(val);

    var wanttoremove = $(".section-center article");
    wanttoremove.remove();

    var newmenu = [];
    menu.forEach((element) => {
      if (element.category == val) {
        newmenu.push(element);
      }

      if (val == "all") {
        newmenu.push(element);
      }
    });
    console.log(newmenu);
    displayMenuItems(newmenu, sectionCenter);
    // var newmenu = []
    // menu.forEach(element =>)
  });
});
