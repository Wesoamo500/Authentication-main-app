function _(selector) {
    return document.querySelector(selector);
}

_('#mv-login').addEventListener('click',(e)=>{
	e.preventDefault();
	_('.register').classList.add('hidden');
	_('.login').classList.remove('hidden');
})

