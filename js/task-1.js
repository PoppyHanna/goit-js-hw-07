'use strict'
// Список кількості категорій в  ul#categories
const categoriesList = document.querySelectorAll('#categories .item');

// Вивести кількість категорій в консоль
console.log(`Кількість категорій: ${categoriesList.length}`);

categoriesList.forEach(category => {
  // Отримання назви котегорії з тегу h2
  const categoryName = category.querySelector('h2').textContent;
  
   // Отримання кількості елементів у ul
  const itemsCount = category.querySelectorAll('ul li').length;

  
  console.log(`Категорія: ${categoryName}`);
  console.log(`Кількість елементів: ${itemsCount}`);

});

