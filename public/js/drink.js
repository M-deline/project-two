


function newDrink() {


  document.location.reload();
};

const saveDrink = async (event) => {
  event.preventDefault();

  const name = event.target.getAttribute('data-name');
  const steps = event.target.getAttribute('data-steps');
  const ing = event.target.getAttribute('data-ing');
  const image = event.target.getAttribute('data-image');

  const ingArray = ing.split(",");
  console.log(ingArray);

  const response1 = await fetch('/api/drink/saveddrinks', {
    method: 'POST',
    body: JSON.stringify({ name, steps, image }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  for (let i=0; i< ingArray.length; i++) {
    const ingredient = ingArray[i];
  
    console.log(ingredient);
    const response = await fetch('/api/ingt/saveddrinks/:id', {
      method: 'POST',
      body: JSON.stringify({ ingredient }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
     
    } else {
      alert('Failed to save drink');
    }
  }
  
  if (response1.ok) {
    // document.location.replace('/saveddrinks');
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


