function CalTotal() {

  let total = 0;

  let menuListItem = document.querySelectorAll(".content-form")[0];
  let menuListCart = document.querySelectorAll(".content-form")[1];

  let totalPrice = document.getElementById("total");

  let checkedItems = menuListItem.querySelectorAll('input[type="checkbox"]:checked');

  let menuListFooter = menuListCart.querySelector(".footer-form");
  let menuListCartContent = menuListCart.querySelector(".list-choice");

  menuListCartContent.innerHTML = "";

  checkedItems.forEach((item) => {
    const itemName = item.parentElement.querySelector("label").innerText;

    total += Number(item.value);

    // menuListCartContent.innerHTML += itemName;
    // menuListCartContent.innerHTML += "<br>";
    menuListCartContent.innerHTML += "<p>" + itemName + "</p>";
    // menuListCartContent.innerHTML += `<p>${itemName}</p>`
  });

  if (total > 0) {
    totalPrice.innerHTML = "Total Amount: " + total + "$";
    document.getElementById("footer-form").style.backgroundColor = 'orange';
    document.getElementById("list-choice").style.backgroundColor = 'rgb(235, 233, 233)';
  } else {
    totalPrice.innerHTML = "Total Amount: " + total + "$";
    document.getElementById("footer-form").style.backgroundColor = 'white';
    document.getElementById("total").innerHTML = "";
    document.getElementById("list-choice").style.backgroundColor = 'white';
  }
}