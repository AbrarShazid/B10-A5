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
function dateTime() {
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
    const timeDate = dateTime();
    const historyDiv = document.createElement("div");
    historyDiv.className =
      "border border-[#1111111A] rounded-2xl p-6 bg-white shadow-md space-y-3";

    // Creating content
    historyDiv.innerHTML = `
    <h3 class="font-bold text-xl">${noakhaliAmnt} Taka is Donated for flood at Noakhali,Bangladesh</h3>
    
    <p class="text-[#111111B3] font-light">Date: ${timeDate}</p>
  `;

    // Append to history section
    historySec.appendChild(historyDiv);

    // modal part

    document.getElementById("my_modal_5").showModal();
  } else {
    document.getElementById("noakhaliAmnt").value = "";
    alert("Enter a valid amount");
  }
});

// feni balance

const donateFeni = document.getElementById("donateFeni");
let feniTotal = parseFloat(document.getElementById("feniTotal").innerText);

donateFeni.addEventListener("click", function () {
  let feniAmnt = document.getElementById("feniAmnt").value;

  feniAmnt = validation(feniAmnt);

  if (feniAmnt !== undefined) {
    availableBal -= feniAmnt;
    feniTotal += feniAmnt;
    document.getElementById("feniTotal").innerText = `${feniTotal}`;

    document.getElementById("balance").innerText = `${availableBal}`;
    document.getElementById("feniAmnt").value = "";

    // History section append
    const timeDate = dateTime();
    const historyDiv = document.createElement("div");
    historyDiv.className =
      "border border-[#1111111A] rounded-2xl p-6 bg-white shadow-md space-y-3";

    // Creating content
    historyDiv.innerHTML = `
    <h3 class="font-bold text-xl">${feniAmnt} Taka is Donated for flood at Feni,Bangladesh</h3>
    
    <p class="text-[#111111B3] font-light">Date: ${timeDate}</p>
  `;

    // Append to history section
    historySec.appendChild(historyDiv);

    // modal part

    document.getElementById("my_modal_5").showModal();
  } else {
    document.getElementById("feniAmnt").value = "";
    alert("Enter a valid amount");
  }
});

// aid for student

const aidStudent = document.getElementById("aidStudent");
let aidTotal = parseFloat(document.getElementById("aidTotal").innerText);

aidStudent.addEventListener("click", function () {
  let aidAmnt = document.getElementById("aidAmnt").value;

  aidAmnt = validation(aidAmnt);

  if (aidAmnt !== undefined) {
    availableBal -= aidAmnt;
    aidTotal += aidAmnt;
    document.getElementById("aidTotal").innerText = `${aidTotal}`;

    document.getElementById("balance").innerText = `${availableBal}`;
    document.getElementById("aidAmnt").value = "";

    // History section append
    const timeDate = dateTime();
    const historyDiv = document.createElement("div");
    historyDiv.className =
      "border border-[#1111111A] rounded-2xl p-6 bg-white shadow-md space-y-3";

    // Creating content
    historyDiv.innerHTML = `
    <h3 class="font-bold text-xl">${aidAmnt} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h3>
    
    <p class="text-[#111111B3] font-light">Date: ${timeDate}</p>
  `;

    // Append to history section
    historySec.appendChild(historyDiv);
    // modal part

    document.getElementById("my_modal_5").showModal();
  } else {
    document.getElementById("aidAmnt").value = "";
    alert("Enter a valid amount");
  }
});
