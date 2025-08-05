

let toggler = document.getElementById('switch');

toggler.addEventListener('change', () => {
    document.body.style.backgroundColor = toggler.checked ? 'black' : 'white';
})
