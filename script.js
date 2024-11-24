let currentExpression = "";

function appendNumber(number) {
    currentExpression += number;
    updateResult();
}

function appendOperator(operator) {
    currentExpression += operator;
    updateResult();
}

function clearResult() {
    currentExpression = "";
    updateResult();
}

function calculateResult() {
    try {
        currentExpression = eval(currentExpression).toString();
        updateResult();
    } catch {
        currentExpression = "Error";
        updateResult();
    }
}

function updateResult() {
    document.getElementById("result").value = currentExpression;
}
