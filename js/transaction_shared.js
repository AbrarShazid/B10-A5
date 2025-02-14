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

// date genarate 
function dateTime(){
  const date = new Date();
  return date;
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

   
  // History section append 
    const timeDate=dateTime();
  const historyDiv = document.createElement("div");
  historyDiv.className = "border border-[#1111111A] rounded-2xl p-6 bg-white shadow-md space-y-3";
  
  // Creating content
  historyDiv.innerHTML = `
    <h3 class="font-bold text-xl">${noakhaliAmnt} Taka is Donated for flood at Noakhali,Bangladesh</h3>
    
    <p class="text-[#111111B3] font-light">Date: ${timeDate}</p>
  `;
  
  // Append to history section
  historySec.appendChild(historyDiv);
    
  


  } else {
    document.getElementById("noakhaliAmnt").value = "";
    alert("Enter a valid amount");
  }
});

// feni balance 




// aid for student 