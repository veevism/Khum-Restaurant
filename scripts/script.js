$(document).ready(function () {
  $("#cart").on("click", function () {
    $(".shopping-cart").fadeToggle("fast");
  });
  const menu = [
    {
      id: 0,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
      quantity: 0,
    },
    {
      id: 1,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
      quantity: 0,
    },
    {
      id: 2,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
      quantity: 0,
    },
    {
      id: 3,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
      quantity: 0,
    },
    {
      id: 4,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
      quantity: 0,
    },
    {
      id: 5,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
      quantity: 0,
    },
    {
      id: 6,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
      quantity: 0,
    },
    {
      id: 7,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
      quantity: 0,
    },
    {
      id: 8,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      quantity: 0,
    },
    {
      id: 9,
      title: "bison steak",
      category: "dinner",
      price: 22.99,
      img: "./images/item-10.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      quantity: 0,
    },
  ];
  const sectionCenter = document.querySelector(".section-center");

  diplayMenuItems(menu);

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

  const menuSector = document.querySelector(".shopping-cart-items");
  var cartArray = [];
  var counter = 0;

  $("img").click(function (e) {
    var selectedfoodid = e.target.id;
    var selectedfood = menu[selectedfoodid];

    if (selectedfood.quantity == 0) {
      selectedfood.quantity += 1;

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
    } else if (selectedfood.quantity >= 1) {
      // cartArray[selectedfoodid] += 1;
      // cartArray[selectedfoodid][0] = 1;
      // console.log(cartArray);
      // console.log(selectedfoodid);
      // console.log(
      //   document.querySelectorAll(".shopping-cart-items li")[selectedfoodid]
      //     .children[3]
      // );
      console.log(cartArray);
      selectedfood.quantity += 1;

      for (let i = 0; i < cartArray.length; i++) {
        if (selectedfoodid == cartArray[i]) {
          document.querySelectorAll(".shopping-cart-items li")[
            i
          ].children[3].innerHTML = "Quantity: " + selectedfood.quantity;
          console.log(selectedfood.quantity);
        }
      }
    }
  });

  $("img").click(function (e) {
    console.log("hello");
  });
});
// document.querySelectorAll(".shopping-cart-items li")[0].remove()
