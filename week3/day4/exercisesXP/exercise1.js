const article = document.querySelector('article');

const h1Element = article.querySelector('h1');

const h2Element = article.querySelector('h2');
const h3Element = article.querySelector('h3');
const paragraphs = article.querySelectorAll('p');

const boldBtn = document.getElementById('boldBtn');

const lastParagraph = paragraphs[paragraphs.length - 1];
article.removeChild(lastParagraph);

h2Element.addEventListener('click', function() {
  h2Element.style.backgroundColor = 'red';
});

h3Element.addEventListener('click', function() {
  h3Element.style.display = 'none';
});

boldBtn.addEventListener('click', function() {
  paragraphs.forEach(p => {
    p.style.fontWeight = 'bold';
  });
});
document.querySelector('article h2').style.backgroundColor = 'red';
