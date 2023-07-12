const categoryButton = document.querySelector('.category-button');
const categoryList = document.querySelector('.category-list');

categoryButton.addEventListener('click', () => {
  categoryList.style.display = (categoryList.style.display === 'block') ? 'none' : 'block';
});

document.addEventListener('click', (event) => {
  if (!categoryButton.contains(event.target)) {
    categoryList.style.display = 'none';
  }
});