let option = document.getElementById("tour");



function tourChoose() {
  let price = option.options[option.selectedIndex].value;
  document.getElementById("price").innerHTML = price + "$/Person";
}

function CalTotal() {
  let price = option.options[option.selectedIndex].value;
  let numOfpeople = document.getElementById("number").value;
  let total = price * numOfpeople;
  document.getElementById("total").innerHTML = total;
}