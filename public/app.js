// Pic enum
const Racepicture = Object.freeze({
  Human: "https://i.imgur.com/GV4Nvoj.jpeg",
  Dwarf: "https://i.imgur.com/7nrEgXP.jpeg",
  Elf: "https://i.imgur.com/Jt5y1Mc.jpeg",
  Halfling: "https://i.imgur.com/uqiVPJK.jpeg",
  Dragonborn: "https://i.imgur.com/i7oxXrY.jpeg",
  Gnome: "https://i.imgur.com/6nkpCzo.jpeg",
  Goliath: "https://i.imgur.com/E3fpDRL.jpeg",
  Orc: "https://i.imgur.com/4k3FdXl.jpeg",
  Aarakocra: "https://i.imgur.com/72kQpV0.jpeg",
  Centaur: "https://i.imgur.com/7bCOdEU.jpeg",
});

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
let header = null;
let saveCharacterButton = null;

// Ensure variables are intiialized on page load
window.onload = initializeElementVariables;

function initializeElementVariables() {
  // Persona
  inputAlias = document.getElementById("input-name");
  inputRace = document.getElementById("input-race");
  inputAlignment = document.getElementsByName("radio-alignment");

  // Stats
  inputStrength = document.getElementById("input-strength");
  inputDexterity = document.getElementById("input-dexterity");
  inputIntelligence = document.getElementById("input-intelligence");
  inputWisdom = document.getElementById("input-wisdom");
  inputCharisma = document.getElementById("input-charisma");
  inputLuck = document.getElementById("input-luck");

  // Inventory
  itemListContainer = document.getElementById("item-list-items-container");

  itemListHeader = document.getElementById("item-list-header");
  itemListHeader.innerHTML = `ITEMS (${itemListContainer.childElementCount} / ${maxInventoryItems})`;

  addItemInput = document.getElementById("text-add-item");
  addItemButton = document.getElementById("button-add-item");

  // Functionality
  header = document.getElementById("header");
  saveCharacterButton = document.getElementById("button-save-character");

  initializeElementEvents();
}

function initializeElementEvents() {
  addItemButton.addEventListener("click", function (e) {
    if (
      !addItemInput.value ||
      itemListContainer.childElementCount >= maxInventoryItems
    )
      return;

    addItemToList(addItemInput.value);
  });

  saveCharacterButton.addEventListener("click", function (e) {
    saveCharacter();
    for (const element of characters) {
      console.log(element);
    }
  });

  window.addEventListener("keydown", function (e) {
    if (e.key == "U+000A" || e.key == "Enter" || e.code == 13)
      e.preventDefault();
  });
}

function addItemToList(item) {
  lowerCaseItem = item.toLowerCase();
  firstLetterUpperCaseItem =
    lowerCaseItem.charAt(0).toUpperCase() + lowerCaseItem.slice(1);
  itemListContainer.innerHTML += `<li>${firstLetterUpperCaseItem}</li>`;
  addItemInput.value = "";
  addItemInput.focus();
  itemListHeader.innerHTML = `ITEMS (${itemListContainer.childElementCount} / ${maxInventoryItems})`;
}

function saveCharacter() {
  let av = null;

  for (const a of inputAlignment) {
    if (!a.checked) continue;

    av = a.value;
  }

  characters.push({
    alias: inputAlias.value,
    race: inputRace.value,
    alignment: av,
    strength: inputStrength.value,
    dexterity: inputDexterity.value,
    intelligence: inputIntelligence.value,
    wisdom: inputWisdom.value,
    charisma: inputCharisma.value,
    luck: inputLuck.value,
    items: itemListContainer.innerHTML,
  });

  updateHeader();
}

function getLinkFromRace(race) {
  switch (race) {
    case "Human":
      return Racepicture.Human;
    case "Dwarf":
      return Racepicture.Dwarf;
    case "Elf":
      return Racepicture.Elf;
    case "Dragonborn":
      return Racepicture.Dragonborn;
    case "Halfling":
      return Racepicture.Halfling;
    case "Goliath":
      return Racepicture.Goliath;
    case "Gnome":
      return Racepicture.Gnome;
    case "Aarakocra":
      return Racepicture.Aarakocra;
    case "Orc":
      return Racepicture.Orc;
    case "Centaur":
      return Racepicture.Centaur;
  }
}

function updateHeader() {
  let c = characters[characters.length - 1];
  header.innerHTML += `
		<section class="flashcard">
			<img src=${getLinkFromRace(c.race)} alt=${c.race}>
			<span>
				<h4>${c.alias}</h4>
				<p>${c.alignment}</p>
			</span>
			<ul>
				<li>Strength: ${c.strength}</li>
				<li>Dexterity: ${c.dexterity}</li>
				<li>Intelligence: ${c.intelligence}</li>
				<li>Wisdom: ${c.wisdom}</li>
				<li>Charisma: ${c.charisma}</li>
				<li>Luck: ${c.luck}</li>
			</ul>
		</section>
	`;
}
