/* <p id="ans"></p>
<p id="total-price">Total:</p> */


function CalTotal(){
    var list = document.getElementsByTagName("input");
    var list_check = document.getElementById("ans");
    var list_total = document.getElementById("total-price");
    var arrPrint = [];
    var total = 0;
    for(var i = 0; i < list.length; i++){
        if(list[i].type === "checkbox" && list[i].checked){
            arrPrint.push(list[i].parentNode.getElementsByTagName("label")[0].textContent); // textcontent chu khong xai thi no lay luon tag label!
            console.log(list[i].parentNode.getElementsByTagName("label")[0]);
            total += parseFloat(list[i].value);
        }
    }
    console.table(arrPrint);
    console.log(total);

    if(arrPrint.length != 0){
        list_check.innerHTML = arrPrint.join("<br>");
        list_check.style.background = " rgb(237, 237, 237)";
        list_total.style.background = "#F79646";
        list_total.innerHTML = "Total: " + total + "$";
    }else{
        list_check.innerHTML = "";
        list_check.style.background = "white";
        list_total.style.background = "white";
        list_total.innerHTML = "";
    }
}