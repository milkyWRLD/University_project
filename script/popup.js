// Показать всплывающее окно автоматически при загрузке страницы
window.onload = function() {
  document.getElementById('popup').style.display = 'flex';
};

// Закрыть всплывающее окно при нажатии на кнопку закрытия
document.querySelectorAll('.close-btn').forEach(button => {
  button.addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
  });
});

// Обработка отправки формы
document.getElementById('emailForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const email = document.getElementById('email').value;
  if (email) {
    alert(`Спасибо! Код на скидку 20% отправлен на ${email}`);
    document.getElementById('popup').style.display = 'none';
  }
});

// Обработка нажатия на ссылку "Нет, спасибо"
document.querySelector('.no-thanks').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('popup').style.display = 'none';
});
