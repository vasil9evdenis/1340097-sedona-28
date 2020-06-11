function openPopup () {
	var button = document.querySelector('.button');
	button.onclick = function () {
		var popup = document.querySelector('.search-form');
		popup.classList.toggle('show');
	}
}

openPopup ();


