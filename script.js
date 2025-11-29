// ----------------------------------
// TASK 1: INPUT NAME & REGISTRATION ID
// ----------------------------------
function task1() {
    let name = prompt("Enter your Name:");
    let reg = prompt("Enter your Registration ID:");

    alert("Name: " + name + "\nRegistration ID: " + reg);
}


// ----------------------------------
// TASK 2: ARITHMETIC + COMPARISON
// ----------------------------------
function task2() {
    let num1 = Number(prompt("Enter first number:"));
    let num2 = Number(prompt("Enter second number:"));

    let sum = num1 + num2;
    let diff = num1 - num2;
    let product = num1 * num2;
    let quotient = num1 / num2;
    let compare = num1 > num2;

    alert(
        "Sum: " + sum +
        "\nDifference: " + diff +
        "\nProduct: " + product +
        "\nQuotient: " + quotient +
        "\nComparison (num1 > num2): " + compare
    );
}
