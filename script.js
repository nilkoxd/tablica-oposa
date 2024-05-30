document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.element');
    const modal = document.getElementById('modal');
    const modalInfo = document.getElementById('modal-info');
    const closeButton = document.getElementById('close-button');

    elements.forEach(element => {
        element.addEventListener('mouseenter', (e) => {
            element.style.transform = 'scale(1.1)';
        });

        element.addEventListener('mouseleave', (e) => {
            element.style.transform = 'scale(1)';
        });

        element.addEventListener('click', (e) => {
            const name = element.getAttribute('data-name');
            const symbol = element.getAttribute('data-symbol');
            const atomicNumber = element.getAttribute('data-atomic-number');
            const atomicMass = element.getAttribute('data-atomic-mass');
            const group = element.getAttribute('data-group');
            const period = element.getAttribute('data-period');
            const state = element.getAttribute('data-state');
            const density = element.getAttribute('data-density');
            const meltingPoint = element.getAttribute('data-melting-point');
            const boilingPoint = element.getAttribute('data-boiling-point');
            const color = element.getAttribute('data-color');
            const reactivity = element.getAttribute('data-reactivity');
            const rozpuszczalnosc = element.getAttribute('data-solubility');
            const tlenki = element.getAttribute('data-oxides');
            const zwiazki = element.getAttribute('data-compounds');
            const zastosowanie = element.getAttribute('data-uses');
            const historia = element.getAttribute('data-discovery-history');
            const wystepowanie = element.getAttribute('data-occurrence');
            const bezpieczensto = element.getAttribute('data-safety');
            const Ciekawostki = element.getAttribute('data-facts');

            modalInfo.innerHTML = `
                <center><h3>Pierwiastek ${name} (${symbol})</h3></center>
                <p><strong>Symbol:</strong> ${symbol}</p>
                <p><strong>Liczba atomowa:</strong> ${atomicNumber}</p>
                <p><strong>Masa atomowa:</strong> ${atomicMass}</p>
                <p><strong>Grupa:</strong> ${group}</p>
                <p><strong>Okres:</strong> ${period}</p>
                <h4>Właściwości fizyczne:</h4>
                <p><strong>Stan skupienia:</strong> ${state}</p>
                <p><strong>Gęstość:</strong> ${density}</p>
                <p><strong>Temperatura topnienia:</strong> ${meltingPoint}</p>
                <p><strong>Temperatura wrzenia:</strong> ${boilingPoint}</p>
                <p><strong>Kolor:</strong> ${color}</p>
                <p><strong>Reaktywność:</strong> ${reactivity}</p>
                <p><strong>Rozpuszczalność:</strong> ${rozpuszczalnosc}</p>
                <p><strong>Tlenki:</strong> ${tlenki}</p>
                <p><strong>Związki:</strong> ${zwiazki}</p>
                <p><strong>Zastosowania:</strong> ${zastosowanie}</p>


                <p><strong>Historia odkrycia:</strong> ${historia}</p>
                <p><strong>Występowanie:</strong> ${wystepowanie}</p>
                <p><strong>Bezpieczeństwo:</strong> ${bezpieczensto}</p>
                <p><strong>Ciekawostki:</strong> ${Ciekawostki}</p>

            `;

            modal.classList.add('active');
        });
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal || event.target === closeButton) {
            modal.classList.remove('active');
        }
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');

    themeToggle.addEventListener('click', () => {
        console.log('Przycisk został kliknięty!');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const modal = document.getElementById('modal');
    const modalContent = document.querySelector('.modal-content');
    const elements = document.querySelectorAll('.element');
    const kamil = document.querySelectorAll('.element');

    // Obsługa przycisku zmieniającego motyw
    themeToggle.addEventListener('click', () => {
        toggleTheme();
    });

   // Funkcja zmieniająca motyw
function toggleTheme() {
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.style.backgroundColor = '#f9f9f9'; // Białe tło
        modal.classList.remove('dark-theme-modal');
        modalContent.style.backgroundColor = '#fff'; // Białe tło modalu
        elements.forEach(element => {
            if (element.dataset.kamil === "true") {
                element.style.backgroundColor = '#00eaff'; // Niebieskie tło dla kamil
            } else {
                element.style.backgroundColor = '#fff'; // Białe tło dla reszty
            }
            element.style.color = '#333'; // Kolor tekstu pierwiastków
        });
    } else {
        body.classList.add('dark-theme');
        body.style.backgroundColor = '#333'; // Czarne tło
        modal.classList.add('dark-theme-modal');
        modalContent.style.backgroundColor = '#444'; // Czarne tło modalu
        elements.forEach(element => {
            if (element.dataset.kamil === "true") {
                element.style.backgroundColor = '#005f6b'; // Inny kolor niebieski dla kamil w ciemnym motywie
            } else {
                element.style.backgroundColor = '#333'; // Czarne tło dla reszty
            }
            element.style.color = '#f9f9f9'; // Kolor tekstu pierwiastków
        });
    }
}
});
