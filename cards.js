var createButton = document.getElementById('create')

// card.innerHTML = `${textInput} + </div> `;

createButton.addEventListener("click", handleCreate);

var hearDelete = document.addEventListener("click", handleDelete);
	




function handleCreate() {
	var textInput = document.getElementById('text_area').value;
	
	if (textInput) {
		createCard(textInput);
	}
}

	
function createCard(textInput) {
	var cardHolder = document.getElementById('card_holder');
	var newCard = document.createElement('div');
	cardHolder.appendChild(newCard);
	newCard.innerHTML = `<div class="cards">${textInput}<input class="delete_button" type="button" value="delete"></div> </div> `;
}

function handleDelete(event) {
	if (event.target.value === "delete") {
		event.target.parentNode.remove();
	}
}

document.addEventListener("click", handleDelete);