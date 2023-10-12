
const deleteDrink = async (event) => {
    console.log('chacl');
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/drink/saveddrinks`, {
        method: 'DELETE',
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to delete project');
    }

};


document
    .querySelector('.drink-del')
    .addEventListener('click', deleteDrink);

