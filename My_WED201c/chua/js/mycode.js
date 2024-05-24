
function getTotalAmount() {
  var people = document.getElementById('numOfPeople').value;
  if (people < 0) {
    alert('Vui lòng nhập số người hợp lệ.');
  }

  else if (isNaN(people) || people == 0) {
    alert("0 người sao mà đi")
  }

  // Tính tổng tiền
  var total = people * 150;
  document.getElementById('showTotal').innerHTML = total;
}