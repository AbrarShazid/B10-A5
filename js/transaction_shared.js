let availableBal = parseFloat(document.getElementById("balance").innerText);

// validation shared function
function validation(amnt) {
  if (amnt < 1 || isNaN(amnt)) {
    return;
  } else {
    amnt = parseFloat(amnt);
    if (amnt > availableBal) {
      return;
    }
    return amnt;
  }
}

// noakhali balance
const donateNoakhali = document.getElementById("donateNoakhali");
let noaTotal = parseFloat(document.getElementById("noaTotal").innerText);

donateNoakhali.addEventListener("click", function () {
  let noakhaliAmnt = document.getElementById("noakhaliAmnt").value;

  noakhaliAmnt = validation(noakhaliAmnt);

  if (noakhaliAmnt !== undefined) {
    availableBal -= noakhaliAmnt;
    noaTotal += noakhaliAmnt;
    document.getElementById("noaTotal").innerText = `${noaTotal}`;

    document.getElementById("balance").innerText = `${availableBal}`;
    document.getElementById("noakhaliAmnt").value = "";
  } else {
    alert("Enter a valid amount");
  }
});

// feni balance 




// aid for student 