// Persona
let alias = null;
let race = null;
let alignment = null;

// Stats
let strength = null;
let dexterity = null;
let intelligence = null;
let wisdom = null;
let charisma = null;
let luck = null;

// Inventory
const maxInventoryItems = 5;

let gold = null;
let itemListHeader = null;
let itemListContainer = null;
let addItemInput = null;
let addItemButton = null;

// Ensure variables are intiialized on page load
window.onload = initializeElementVariables;

function initializeElementVariables()
{
	// Persona
	alias = document.getElementById('input-name');
	race = document.getElementByName('dropdown-race');
	alignment = document.getElementByName('radio-alignment');
	
	// Stats
	strength = document.getElementByName('range-strength');
	dexterity = document.getElementByName('range-dexterity');
	intelligence = document.getElementByName('range-intelligence');
	wisdom = document.getElementByName('range-wisdom');
	charisma = document.getElementByName('range-charisma');
	luck = document.getElementByName('range-luck');
	
	// Inventory
	itemListContainer = document.getElementById('item-list-items-container');

	itemListHeader = document.getElementById('item-list-header');
	itemListHeader.innerHTML = `ITEMS (${itemListContainer.childElementCount} / ${maxInventoryItems})`;


	addItemInput = document.getElementById('text-add-item');
	addItemButton = document.getElementById('button-add-item');

	initializeElementEvents();
}

function initializeElementEvents()
{
	addItemButton.addEventListener('click', function (event)
	{
		if (!addItemInput.value || itemListContainer.childElementCount >= 5)
			return;

		addItemToList(addItemInput.value);
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