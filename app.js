const botonCheck = document.querySelector('.toggle-input');

const yearPrice = [199.99, 249.99, 399.99];
const monthPrice = [19.99, 24.99, 39.99];

const values = (planPrecios) => {
    const valores = document.querySelectorAll('.year')
    for (let i = 0; i < valores.length; i++) {
        valores[i].innerHTML = `
        <p class="value">
            <span class="dollar">$</span>${planPrecios[i]}
        </p>
        `;
    }
}

botonCheck.addEventListener('click', () => {
    const month = document.querySelectorAll('.month')

    if (!botonCheck.checked) {
        values(yearPrice)

    } else {
        values(monthPrice)
    }
});