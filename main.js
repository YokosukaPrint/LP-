const productSelect = document.getElementById('product-select');
const quantitySelect = document.getElementById('quantity-select');
const printSelect = document.getElementById('print-select');
const positionSelect = document.getElementById('position-select');
const priceResult = document.getElementById('price-result');
const estimateButton = document.getElementById('estimate-button');

function calculatePrice() {
  const productPrice = parseInt(productSelect.value);
  const quantity = parseInt(quantitySelect.value);
  const printPrice = parseInt(printSelect.value);
  const positionPrice = parseInt(positionSelect.value);

  const unitPrice = productPrice + printPrice + positionPrice;
  const totalPrice = unitPrice * quantity;

  priceResult.textContent = totalPrice.toLocaleString();
  return totalPrice;
}

function createEstimateMessage() {
  const productText = productSelect.options[productSelect.selectedIndex].text;
  const quantityText = quantitySelect.options[quantitySelect.selectedIndex].text;
  const printText = printSelect.options[printSelect.selectedIndex].text;
  const positionText = positionSelect.options[positionSelect.selectedIndex].text;
  const totalPrice = calculatePrice().toLocaleString();

  return `【YokosukaPrint 見積もり依頼】
商品：${productText}
枚数：${quantityText}
プリント方法：${printText}
プリント位置：${positionText}
概算金額：¥${totalPrice}

この内容で相談したいです。`;
}

productSelect.addEventListener('change', calculatePrice);
quantitySelect.addEventListener('change', calculatePrice);
printSelect.addEventListener('change', calculatePrice);
positionSelect.addEventListener('change', calculatePrice);

estimateButton.addEventListener('click', () => {
  const message = createEstimateMessage();

  alert(message);

  /*
  LINE公式アカウントのURLがある場合は、
  下のURLを自分のLINE URLに変更して使う。

  const lineUrl = "https://lin.ee/あなたのLINE";
  window.location.href = lineUrl;
  */
});

calculatePrice();