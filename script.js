
function splitBill() {
    const billInput = document.getElementById("bill").value;
    const peopleInput = document.getElementById("people").value;
    const tipInput = document.getElementById("tip").value;

    const bill = Number(billInput);
    const people = Number(peopleInput);
    const tip = Number(tipInput);

    const error = document.getElementById("error");
    const result = document.getElementById("result");

    error.textContent = "";
    result.hidden = true;

    // Validate user inputs
    if (
        billInput.trim() === "" ||
        peopleInput.trim() === "" ||
        tipInput.trim() === "" ||
        !Number.isFinite(bill) ||
        !Number.isFinite(people) ||
        !Number.isFinite(tip) ||
        bill <= 0 ||
        !Number.isInteger(people) ||
        people <= 0 ||
        tip < 0
    ) {
        error.textContent = "Please enter valid values!";
        return;
    }

    // Calculate bill splitting
    const tipAmount = (bill * tip) / 100;
    const finalTotal = bill + tipAmount;
    const perPerson = finalTotal / people;

    // Display results
    document.getElementById("totalBill").textContent =
        "₹" + bill.toFixed(2);

    document.getElementById("tipAmount").textContent =
        "₹" + tipAmount.toFixed(2);

    document.getElementById("finalTotal").textContent =
        "₹" + finalTotal.toFixed(2);

    document.getElementById("perPerson").textContent =
        "₹" + perPerson.toFixed(2);

    result.hidden = false;
}

function resetForm() {
    document.getElementById("bill").value = "";
    document.getElementById("people").value = "";
    document.getElementById("tip").value = "0";

    document.getElementById("result").hidden = true;
    document.getElementById("error").textContent = "";
}
