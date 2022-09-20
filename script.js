var billAmount = document.querySelector("#billamount");
var cashGiven = document.querySelector("#cashgiven");
var btnCheck = document.querySelector("#check-button");
var btnBack = document.querySelector("#back-button");
var btnNext = document.querySelector("#nextbtn");
var error = document.querySelector("#error-msg");

var notesAvailable = document.querySelectorAll(".availableNotes");

var NotesTable = [2000, 500, 100, 20, 10, 5, 1];

function showError(errorMessage) {
  error.style.display = "block";
  error.innerHTML = errorMessage;
  notesAvailable.forEach((cell) => {
    cell.innerHTML = "";
  });
}

function calculate(billAmountValue, cashGivenValue) {
  error.style.display = "none";
  document.querySelector("#third-container").style.display = "block";
  var amountToBeReturned = cashGivenValue - billAmountValue;
  for (let i = 0; i < NotesTable.length; i++) {
    var noOfNotes = Math.trunc(amountToBeReturned / NotesTable[i]);
    notesAvailable[i].innerHTML = noOfNotes;
    amountToBeReturned = amountToBeReturned - noOfNotes * NotesTable[i];
  }
}
function checkCashGiven() {
  var cashGivenValue = Number(cashGiven.value);
  var billAmountValue = Number(billAmount.value);

  if (cashGivenValue <= 0) showError("Cash Given should be greater than 0");
  else if (cashGivenValue < billAmountValue)
    showError("Cash Given should be atleast equal to Bill Amount");
  else calculate(billAmountValue, cashGivenValue);
}

function backAction() {
  console.log("clicked");
  billAmount.disabled = false;
  btnNext.style.display = "block";
  document.querySelector("#second-container").style.display = "none";
  document.querySelector("#third-container").style.display = "none";
}

function checkBillAmount() {
  var billAmountValue = billAmount.value;
  if (billAmountValue <= 0) {
    showError("Bill Amount should be greater than 0");
  } else {
    btnNext.style.display = "none";
    billAmount.disabled = true;
    document.querySelector("#second-container").style.display = "block";
  }
}

btnNext.addEventListener("click", checkBillAmount);

btnCheck.addEventListener("click", checkCashGiven);

btnBack.addEventListener("click", backAction);
