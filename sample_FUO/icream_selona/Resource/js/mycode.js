const menu = document.querySelector(".order__body");
const orderBody = document.querySelector(".order__body.right");
const bill = document.querySelector(".bill");

function CalTotal() {
  let listOrder = [];
  let priceTotal = 0;

  menu.querySelectorAll('input[type="checkbox"]:checked').forEach((item) => {
    let name = item.nextElementSibling.textContent;
    let price = parseFloat(item.value);
    priceTotal += price;
    listOrder.push(name);
  });
  if (listOrder.length) {
    let listHTML = "";
    listOrder.forEach((item) => {
      listHTML += `<p>${item}</p>`;
    });
    orderBody.innerHTML = listHTML;
    orderBody.classList.add("show");
    bill.innerHTML = `<h3>Total amount: ${priceTotal}$</h3>`;
    bill.classList.add("show");
  } else {
    orderBody.classList.remove("show");
    priceTotal = 0;
    bill.innerHTML = `<h3>Total amount: ${priceTotal}$</h3>`;
  }
}
