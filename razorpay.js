document.getElementById("paymentButton").addEventListener("click", function () {
    var options = {
      key: 'rzp_test_37DXAqJ2J8AuWz', // Your Razorpay API key
      amount: 1000, // Payment amount in paise (e.g., 1000 paise = 10 INR)
      currency: 'INR', // Currency code (e.g., INR for Indian Rupees)
      name: 'Optimus', // Your company name or website name
      description: 'Payment for a product or service',
      order_id: 'order_123456', // Generate a unique order ID for each payment
      handler: function (response) {
        // Handle the success response from Razorpay here
        alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
        window.location.href = 'https://example.com/redirect-page.html';
      },
      prefill: {
        name: 'Kiruthik', // Customer name
        email: 'kiruthicksathy@gmail.com', // Customer email
        contact: '8610559369' // Customer phone number
      }
    };
    var rzp = new Razorpay(options);
    rzp.open();
  });
  <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
