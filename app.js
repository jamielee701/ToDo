
const li = document.querySelector('li');
const ul = document.querySelector('#myUL');
const addBtn = document.querySelector('.addBtn');
const input = document.querySelector('#myInput');
JSON.parse(localStorage.getItem('list'));
const removeAll = document.querySelector('#removed');
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
const close = document.querySelectorAll('.close');
for (i = 0; i < close.length; i++) {
	close[i].onclick = function() {
		const div = this.parentElement;
		div.style.display = 'none';
		localStorage.removeItem('ul');
	};
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
addBtn.addEventListener('click', function(e) {
	e.preventDefault();
	const newItem = document.createElement('li');
	newItem.innerText = input.value;
	input.value = '';
	ul.appendChild(newItem);
	const myLiItems = document.querySelectorAll('li');
	const span = document.createElement('SPAN');
	const txt = document.createTextNode('\u00D7');
	span.className = 'close';
	span.appendChild(txt);
	myLiItems[i].appendChild(span);
	const close = document.querySelectorAll('.close');
	for (i = 0; i < close.length; i++) {
		close[i].onclick = function() {
			const div = this.parentElement;
			div.style.display = 'none';
		};
	}
});
localStorage.setItem('list', JSON.stringify(ul))
const data = JSON.parse(localStorage.getItem('list'))
