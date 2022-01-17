const container = document.querySelector('.container');

const getData = async url => {
  let response = await fetch(url);
  return await response.json();
}

const displayAffirmation = obj => {
  const { affirmation } = obj;
  const title = document.createElement('h1');
  title.classList.add('content');
  title.textContent = affirmation;
  container.append(title);
}

getData("https://www.affirmations.dev").then((data) => {
  displayAffirmation(data);
});

