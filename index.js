const container = document.querySelector('.container');

const getData = async url => {
  let response = await fetch(url);
  return await response.json();
}

const displayAffirmation = obj => {
  const { phrase } = obj[0];
  const title = document.createElement('h1');
  title.classList.add('content');
  title.textContent = phrase;
  container.append(title);
}

getData("https://dulce-affirmations-api.herokuapp.com/affirmation").then((data) => {
  displayAffirmation(data);
});