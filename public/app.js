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
	race = document.getElementsByName('dropdown-race');
	alignment = document.getElementsByName('radio-alignment');
	
	// Stats
	strength = document.getElementById('input-strength');
	dexterity = document.getElementById('input-dexterity');
	intelligence = document.getElementById('input-intelligence');
	wisdom = document.getElementById('range-wisdom');
	charisma = document.getElementById('input-charisma');
	luck = document.getElementById('input-luck');
	
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
		if (!addItemInput.value || itemListContainer.childElementCount >= maxInventoryItems)
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