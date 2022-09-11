const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const button = document.querySelector("#check-button");
const NoOfNotes = document.querySelectorAll(".NoOfNotes");
const nextContainer = document.querySelector(".next-container");

nextContainer.style.display = "none";
var message = document.querySelector("#error-message");

billAmount.addEventListener("input", () => {
  nextContainer.style.display = "block";
});

cashGiven.addEventListener("input", () => {
  billAmount.disabled = "true";
});
const avilabelNotes = [2000, 500, 100, 20, 10, 5, 1];

function hideMessage() {
  message.style.display = "none";
}

function errorMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
  NoOfNotes.forEach((temp) => {
    temp.innerHTML = "";
  });
}

function CheckAmount() {
  hideMessage();

  if (Number(billAmount.value) >= 0) {
    if (Number(cashGiven.value) > Number(billAmount.value)) {
      const AmountToBeReturn = cashGiven.value - billAmount.value;
      CalculateChange(AmountToBeReturn);
    } else if (Number(cashGiven.value) == Number(billAmount.value)) {
      errorMessage("No return");
    } else {
      errorMessage("Given Amount is less than Bill Amount");
    }
  } else {
    errorMessage("Bill Amount should be greater than Zero");
  }
}

function CalculateChange(AmountToBeReturn) {
  for (let i = 0; i < avilabelNotes.length; i++) {
    const Notes = Math.trunc(AmountToBeReturn / avilabelNotes[i]);

    AmountToBeReturn = AmountToBeReturn % avilabelNotes[i];
    NoOfNotes[i].innerText = Notes;
  }
}

button.addEventListener("click", CheckAmount);
