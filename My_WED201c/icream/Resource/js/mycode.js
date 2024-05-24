function CalTotal() {
  let total = 0;

  menuListItem = document.querySelectorAll(".content-form")[0];
  menuListCart = document.querySelectorAll(".content-form")[1];

  totalPrice = document.getElementById("total");
  CheckedItems = menuListItem.querySelectorAll('input[type="checkbox"]:checked');

  menuListFooter = menuListCart.querySelector(".footer-form");
  menuListCartContent = menuListCart.querySelector(".list-choice")

  menuListCartContent.innerHTML = "";
  CheckedItems.forEach((item) => {
    const itemName = item.parentElement.querySelector("label").innerText;

    total += Number(item.value);

    menuListCartContent.innerHTML += itemName;
    menuListCartContent.innerHTML += "<br>";
  });


  if (total > 0) {
    totalPrice.innerHTML = "Total Amount: " + total + "$";
    document.getElementById("footer-form").style.backgroundColor = 'orange';
    document.getElementById("list-choice").style.backgroundColor = 'rgb(221, 220, 220)';
  } else {
    totalPrice.innerHTML = "Total Amount: " + total + "$";
    document.getElementById("footer-form").style.backgroundColor = 'white';
    document.getElementById("total").innerHTML = "";
    document.getElementById("list-choice").style.backgroundColor = 'white';
  }
}