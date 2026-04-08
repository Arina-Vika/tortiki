var supabaseUrl = "https://goocvassrianqsildbci.supabase.co";
var supabaseKey = "sb_publishable_8Ep3MbhG3IZYcK1x_BwVKA_TTxN-rNt";

var container = document.querySelector(".card-container");

var supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

async function loadCakes() {
    let {data, err} = await supabase.from('cakes').select('*');

    if (err) {
        console.error(err);
        return;
    }

    data.forEach(cake => {
        const card = document.createElement("div");
        card.setAttribute("data-aos", "zoom-in");
        card.setAttribute("data-aos-duration", "300");
        card.classList.add("card");

        if (cake.isPiece = false) {
            card.innerHTML = `
            <img src="${cake.image}" alt="${cake.name}">
            <h2 class="cake-name">${cake.name}</h2>
            <p class="cake-price">${cake.price.toLocaleString()}₽/кг.</p>
        `;
        } else {
            card.innerHTML = `
            <img src="${cake.image}" alt="${cake.name}">
            <h2 class="cake-name">${cake.name}</h2>
            <p class="cake-price">${cake.price.toLocaleString()}₽/уп.</p>
        `;
        }
        container.appendChild(card);
    });
}

loadCakes();