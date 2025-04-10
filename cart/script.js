let cartItems = JSON.parse(localStorage.getItem("cart"));
let sum = 0;
console.log(cartItems);
let emptyCart = document.getElementById("emptyCart");
let cart = document.getElementById("cartContainer");
let checkout = document.getElementById("checkoutContainer");
if (!cartItems || cartItems.length == 0) {
  emptyCart.style.display = "block";
  cart.style.display = "none";
  checkout.style.display = "none";
} else {
  renderItems();
  renderCheckoutList();
  function removeCart(index) {
    cartItems.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    renderItems();
    renderCheckoutList();
  }
  function renderItems() {
    document.getElementById("cartItems").innerHTML = "";
    cartItems.forEach((element, index) => {
      document.getElementById("cartItems").innerHTML += `
        <div class="cart-item">
           <img src=${element.image} alt="Shirt">
           <p><b>Price:</b> Rs. ${element.price}</p>
           <button onclick="removeCart(${index})">Remove From Cart</button>
       </div>`;
    });
  }
  function renderCheckoutList() {
    document.getElementById("checkList").innerHTML = "";
    sum = 0;
    cartItems.forEach((element, index) => {
      sum += element.price;
      document.getElementById("checkList").innerHTML += `
                  <li><span>Item ${index + 1}</span> <span>Rs. ${
        element.price
      }</span></li>
             `;
    });
    document.getElementById("checkList").innerHTML += `
           <li id="total"><strong>Total</strong> <strong>${sum.toFixed(
             2
           )}/-</strong></li>
       `;
  }
  document.getElementById("checkout-btn").addEventListener("click", () => {
    var options = {
      key: "rzp_test_hWqsXhfJjPk4pI", // Replace with your Test API Key
      amount: `${sum * 100}`, // Amount is in paisa = 50000 means ₹500
      currency: "INR",
      name: "Shopify",
      description: "Test Transaction",
      image: "https://your-logo-url.png",
      handler: function (response) {
        alert(
          "Payment Successful! Payment ID: " + response.razorpay_payment_id
        );
      },
      theme: {
        color: "#000000",
      },
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
    // clear mycart - localStorage
    e.preventDefault();
  });
}
