


function newDrink() {


  document.location.reload();
};

const saveDrink = async (event) => {
  event.preventDefault();

  const name = event.target.getAttribute('data-name');
  const steps = event.target.getAttribute('data-steps');
  const ingredient = event.target.getAttribute('data-ing');
  const image = event.target.getAttribute('data-image');

 

  const response = await fetch('/api/drink/saveddrinks', {
    method: 'POST',
    body: JSON.stringify({ name, steps, image, ingredient}),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  
  if (response.ok) {
    document.location.replace('/saveddrinks');
  } else {
    alert('Failed to save drink');
  }



};





document
  .querySelector('.drink-new')
  .addEventListener('click', newDrink);

document
  .querySelector('.drink-save')
  .addEventListener('click', saveDrink);


