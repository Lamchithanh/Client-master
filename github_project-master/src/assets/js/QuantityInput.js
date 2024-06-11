const quantityInput = document.querySelector('.quantity-input input');
const decrementButton = document.querySelector('.quantity-input button:first-child');
const incrementButton = document.querySelector('.quantity-input button:last-child');

let quantity = 1;

decrementButton.addEventListener('click', () => {
  if (quantity > 1) {
    quantity--;
    quantityInput.value = quantity;
  }
});

incrementButton.addEventListener('click', () => {
  quantity++;
  quantityInput.value = quantity;
});
