window.onload = function() {
    const payments = getPayments();
    if (!document.getElementById('total-month')) return;

    const totalMonth = document.getElementById('total-month');
    const categoryList = document.getElementById('category-list');

    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    let total = 0;
    const categoryTotals = {};

    payments.forEach(payment => {
        const paymentDate = new Date(payment.date);
        if(paymentDate.getMonth() === currentMonth && paymentDate.getFullYear() === currentYear){
            total += parseFloat(payment.amount);
            if(categoryTotals[payment.category]){
                categoryTotals[payment.category] += parseFloat(payment.amount);
            } else {
                categoryTotals[payment.category] = parseFloat(payment.amount);
            }
        }
    });
