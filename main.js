// 各セレクトボックスと金額表示の要素を取得
const productSelect = document.getElementById('product-select');
const quantitySelect = document.getElementById('quantity-select');
const printSelect = document.getElementById('print-select');
const positionSelect = document.getElementById('position-select');
const priceResult = document.getElementById('price-result');

// 計算する関数
function calculatePrice() {
  const productPrice = parseInt(productSelect.value);
  const quantity = parseInt(quantitySelect.value);
  const printPrice = parseInt(printSelect.value);
  const positionPrice = parseInt(positionSelect.value);

  // 1枚あたりの単価 ＝（商品代 ＋ プリント代 ＋ 位置代）
  const unitPrice = productPrice + printPrice + positionPrice;
  
  // 合計金額 ＝ 単価 × 枚数
  const totalPrice = unitPrice * quantity;

  // 画面の金額を書き換える（日本円のカンマ区切りにする）
  priceResult.textContent = totalPrice.toLocaleString();
}

// ユーザーが選択肢を変えたら、毎回計算を実行する
productSelect.addEventListener('change', calculatePrice);
quantitySelect.addEventListener('change', calculatePrice);
printSelect.addEventListener('change', calculatePrice);
positionSelect.addEventListener('change', calculatePrice);

// 最初にページを開いた時にも1回計算しておく
calculatePrice();