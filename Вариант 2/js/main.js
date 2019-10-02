window.onload = function() {

	let target = 15;
	let range = document.querySelector(".range");
	let currentValue = document.querySelector(".current-value");
	let value = document.querySelector(".value");
	let info = document.querySelector(".info");

	setValue(target, range, value, info);
	setPointer(target, range, currentValue);

	range.oninput = function() {
		setValue(target, range, value, info);
	};

	range.onmousemove = function() {
		setPointer(target, range, currentValue);
	};

};

function setValue(target, range, value, info) {
	value.innerHTML = range.value;

	if (range.value == target) {
		info.innerHTML = "You are reached your target!";
	} else {
		info.innerHTML = `You need $${target - range.value} more to reach your target.`;
	}
}

function setPointer(target, range, currentValue) {
	let x = range.value;
	let color = `linear-gradient(90deg, #0489D1 ${100 / target * x}%, #CDCFCC ${100 / target * x}%)`;
	let position = `${3 + (120 - 6) / target * x}px`;
	
	range.style.background = color;
	currentValue.style.left = position;
}