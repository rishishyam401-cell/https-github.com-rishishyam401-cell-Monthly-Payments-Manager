window.onload = function() {
    // Home Page
    if (document.getElementById('payments')) {
        const payments = getPayments();
        const paymentsList = document.getElementById('payments');
        const totalAmount = document.getElementById('total-amount');

        let total = 0;
        paymentsList.innerHTML = '';
        payments.forEach(payment => {
            const li = document.createElement('li');
            li.innerHTML = `<span>${payment.name} - ₹${payment.amount}</span> <span class="category">${payment.category}</span>`;
            paymentsList.appendChild(li);
            total += parseFloat(payment.amount);
        });
        totalAmount.textContent = `₹${total}`;
    }

    // Add Page
    const form = document.getElementById('payment-form');
    if (form) {
        form.addEventListener('submit', function(e){
            e.preventDefault();
            const name = document.getElementById('name').value;
            const amount = document.getElementById('amount').value;
            const date = document.getElementById('date').value;
            const category = document.getElementById('category').value;

            const payments = getPayments();
            payments.push({name, amount, date, category});
            savePayments(payments);

            alert("Payment saved!");
            window.location.href = "index.html";
        });
    }
};
