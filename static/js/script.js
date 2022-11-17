console.log('hello, world!');

function getItems() {
  return fetch('/getItems').then((response) => response.json());
}

async function checkName() {
  const name = await getItems();
  document.querySelector('h2').innerText = name.name;
}

 const div = document.createElement('div');
  div.innerText = 'hello';
  document.querySelector('.ddd').appendChild(div);

checkName();

