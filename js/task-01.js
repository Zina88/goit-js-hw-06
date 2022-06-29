// const itemEl = document.querySelectorAll('.item');
// console.log('Number of categories:', itemEl.length);

// for (const item of itemEl) {
//   const titleEl = item.querySelector('h2');
//   console.log('Category:', titleEl.textContent);
//   const itemListEl = item.querySelectorAll('li');
//   console.log('Elements:', itemListEl.length);
// }

const itemEl = document.querySelectorAll('.item');
console.log('Number of categories:', itemEl.length);

const elements = [...itemEl].map(element => {
  const titleEl = element.querySelector('h2');
  console.log('Category:', titleEl.textContent);

  const itemListEl = element.querySelectorAll('li');
  console.log('Elements:', itemListEl.length);
});
