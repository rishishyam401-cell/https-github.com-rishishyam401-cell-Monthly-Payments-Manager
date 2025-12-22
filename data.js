function getPayments() {
    return JSON.parse(localStorage.getItem("payments")) || [];
}

function savePayments(payments) {
    localStorage.setItem("payments", JSON.stringify(payments));
}
