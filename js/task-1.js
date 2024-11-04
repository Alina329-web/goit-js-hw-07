// Знаходимо ul з id categories
const categories = document.getElementById('categories');

// Підраховуємо кількість категорій (елементів li.item)
const categoryItems = categories.querySelectorAll('li.item');
console.log(`Number of categories: ${categoryItems.length}`);

// Проходимо по кожній категорії
categoryItems.forEach(item => {
  // Знаходимо заголовок h2
  const categoryTitle = item.querySelector('h2').innerText;

  // Знаходимо кількість елементів li в середині категорії
  const subcategoryItems = item.querySelectorAll('ul li');
  const subcategoryCount = subcategoryItems.length;

  // Виводимо в консоль заголовок та кількість підкатегорій
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${subcategoryCount}`);
});
