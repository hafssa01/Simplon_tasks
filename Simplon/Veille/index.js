// // Sélectionner des éléments
const element = document.getElementById('myElement'); 
const elements = document.getElementsByClassName('myClass'); 
const tags = document.getElementsByTagName('div'); 
const firstElement = document.querySelector('.myClass'); 
const allElements = document.querySelectorAll('.myClass'); 
// Modifier des éléments
const changeButton = document.getElementById('changeButton'); 
changeButton.addEventListener('click', () => {
    element.textContent = 'Nouveau contenu textuel'; 
    element.innerHTML = '<p>Nouveau contenu HTML</p>'; 
    element.style.color = 'green'; 
    element.style.fontSize = '50px'; 
}); 
// Créer et ajouter des éléments 
const addButton = document.getElementById('addButton'); 
const container = document.getElementById('container'); 
addButton.addEventListener('click', () => { 
    const newElement = document.createElement('div'); // <div>bonjour le monde</div>
    newElement.textContent = 'Bonjour, le monde!'; 
    container.appendChild(newElement);    
}); 
// Supprimer des éléments 
const removeButton = document.getElementById('removeButton'); 
const elementToRemove = document.getElementById('removeMe'); 
removeButton.addEventListener('click', () => {
    elementToRemove.parentNode.removeChild(elementToRemove); 
}); 
// Gestion des événements 
const eventButton = document.getElementById('eventButton'); 
eventButton.addEventListener('click', () => {
    alert('Élément cliqué!'); 
});