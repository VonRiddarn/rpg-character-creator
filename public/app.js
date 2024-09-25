const characters = [];

// Persona
let inputAlias = null;
let inputRace = null;
let inputAlignment = null;

// Stats
let inputStrength = null;
let inputDexterity = null;
let inputIntelligence = null;
let inputWisdom = null;
let inputCharisma = null;
let inputLuck = null;

// Inventory
const maxInventoryItems = 5;

let inputGold = null;
let itemListHeader = null;
let itemListContainer = null;
let addItemInput = null;
let addItemButton = null;

// Functionality
let saveCharacterButton = null;

// Ensure variables are intiialized on page load
window.onload = initializeElementVariables;

function initializeElementVariables()
{
	// Persona
	inputAlias = document.getElementById('input-name');
	inputRace = document.getElementsByName('dropdown-race');
	inputAlignment = document.getElementsByName('radio-alignment');
	
	// Stats
	inputStrength = document.getElementById('input-strength');
	inputDexterity = document.getElementById('input-dexterity');
	inputIntelligence = document.getElementById('input-intelligence');
	inputWisdom = document.getElementById('input-wisdom');
	inputCharisma = document.getElementById('input-charisma');
	inputLuck = document.getElementById('input-luck');
	
	// Inventory
	itemListContainer = document.getElementById('item-list-items-container');

	itemListHeader = document.getElementById('item-list-header');
	itemListHeader.innerHTML = `ITEMS (${itemListContainer.childElementCount} / ${maxInventoryItems})`;


	addItemInput = document.getElementById('text-add-item');
	addItemButton = document.getElementById('button-add-item');
	
	// Functionality
	saveCharacterButton = document.getElementById('button-save-character');
	
	initializeElementEvents();
}

function initializeElementEvents()
{
	addItemButton.addEventListener('click', function (e)
	{
		if (!addItemInput.value || itemListContainer.childElementCount >= maxInventoryItems)
			return;

		addItemToList(addItemInput.value);
	});
	
	saveCharacterButton.addEventListener('click', function(e)
	{
		saveCharacter();
		for (const element of characters) {
			console.log(element);
		}
	});
	
	window.addEventListener('keydown',
		function (e)
		{
			if (e.key == 'U+000A' || e.key == 'Enter' || e.code == 13)
				e.preventDefault();
		}
	)
}

function addItemToList(item)
{
	itemListContainer.innerHTML += `<li>${item}</li>`;
	addItemInput.value = "";
	addItemInput.focus();
	itemListHeader.innerHTML = `ITEMS (${itemListContainer.childElementCount} / ${maxInventoryItems})`;
}

function saveCharacter()
{
	characters.push
	(
		{
			alias: inputAlias.value,
			race: inputRace.value,
			alignment: inputAlignment.value,
			strength: inputStrength.value,
			dexterity: inputDexterity.value,
			intelligence: inputIntelligence.value,
			wisdom: inputWisdom.value,
			charisma: inputCharisma.value,
			luck: inputLuck.value,
			items: itemListContainer.innerHTML,
		},
	);
}