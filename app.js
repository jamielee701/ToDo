const close = document.querySelectorAll('.close');
const ul = document.querySelector('#myUL');
const addBtn = document.querySelector('.addBtn');
const input = document.querySelector('#myInput');
const todoArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
const removeAll = document.querySelector('#removed');
localStorage.setItem('items',JSON.stringify(todoArray));
const data = JSON.parse(localStorage.getItem('items'));
removeAll.addEventListener('click', function() {
	// ul.parentNode.removeChild(ul);
	document.querySelectorAll('li').forEach((e) => e.remove());
	localStorage.clear();
});
const myLiItems = document.querySelectorAll('li');
for (i = 0; i < myLiItems.length; i++) {
	const span = document.createElement('SPAN');
	const txt = document.createTextNode('\u00D7');
	span.className = 'close';
	span.appendChild(txt);
	myLiItems[i].appendChild(span);
	
}


const list = document.querySelector('ul');
list.addEventListener(
	'click',
	function(e) {
		if (e.target.tagName === 'LI') {
			e.target.classList.toggle('checked');
		}
	},
	false
);

const liMaker = (text)=>{
	const newItem = document.createElement('li');
	newItem.innerText = input.value;
	input.value = '';
	ul.appendChild(newItem);
	const myLiItems = document.querySelectorAll('li');
	const newSpan = document.createElement('SPAN');
	const txt = document.createTextNode('\u00D7');
	newSpan.className = 'close';
	newSpan.appendChild(txt);
	myLiItems[i].appendChild(newSpan);
	todoArray.push(newItem.innerText);
	localStorage.setItem('items',JSON.stringify(todoArray));
	const close = document.querySelectorAll('.close');
	for (i = 0; i < close.length; i++) {
		close[i].onclick = function() {
			const div = this.parentElement;
			div.style.display = 'none';
			localStorage.remove();
		};
		}
	}
addBtn.addEventListener('click', function(e) {
	e.preventDefault();
	liMaker(input.value);
	
});
data.forEach((data)=>{
	liMaker(data);
});






