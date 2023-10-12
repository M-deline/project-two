
const deleteDrink = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        
        console.log(id);
        const response = await fetch(`/api/drink/saveddrinks/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/saveddrinks');
        } else {
            alert('Failed to delete project');
        }
    }
};


document
    .querySelector('.deleteBTN')
    .addEventListener('click', deleteDrink);

