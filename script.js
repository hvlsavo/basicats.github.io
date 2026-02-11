const btnFacts = document.getElementById('btnFacts');
const pFacts = document.getElementById('pFacts');
const toggle = document.getElementById('btnToggleMode');



toggle.addEventListener('click', ()=>{
    const current_theme = document.body.dataset.theme;
    document.body.dataset.theme = current_theme === 'light' ? 'dark' : 'light';
});
btnFacts.addEventListener('click', async () => {
    try {
        pFacts.textContent = "Loading...";

        const res = await fetch('https://catfact.ninja/fact');
        const data = await res.json();

        pFacts.textContent = data.fact;

    } catch (err) {
        pFacts.textContent = "Oops! Could not load a cat fact 😿";
        console.error(err);
    }
});
