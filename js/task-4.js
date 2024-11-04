const form = document.querySelector('.login-form');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Запобігаємо перезавантаженню сторінки

  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  // Перевірка на заповненість полів
  if (!email || !password) {
    alert('All form fields must be filled in');
    return;
  }

  // Створюємо об’єкт з введеними даними
  const formData = {
    email: email,
    password: password,
  };

  console.log(formData); // Виводимо об’єкт у консоль

  // Очищуємо форму
  form.reset();
});
