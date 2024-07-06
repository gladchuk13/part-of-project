document.addEventListener('DOMContentLoaded', () => {
    const itemsContainer = document.querySelector('.items-container');
    const paginationContainer = document.querySelector('.pagination');
    const itemsPerPage = 6;
    let currentPage = 1;
    let totalPages = 1;

    const items = [
        { name: "JORDAN 5", price: "199 $", discount: "-33%", type: "SHOES", img: "./probyi.jpg" },
        { name: "JORDAN 5", price: "199 $", discount: "-33%", type: "SHOES", img: "./prod-pic1.jpg" },
        { name: "JORDAN 5", price: "219 $", discount: "-25%", type: "SHOES", img: "./prod-pic-2.jpg" },
        { name: "JORDAN 5", price: "159 $", discount: "-50%", type: "SHOES", img: "./prod-pic3.jpg" },
        { name: "JORDAN 5", price: "189 $", discount: "-25%", type: "SHOES", img: "./prod-pic4.jpg" },
        { name: "JORDAN 5", price: "259 $", discount: "-10%", type: "SHOES", img: "./prod-pic5.jpg" },
        { name: "JORDAN 5", price: "199 $", discount: "-33%", type: "SHOES", img: "./probyi.jpg" },
        { name: "JORDAN 5", price: "199 $", discount: "-33%", type: "SHOES", img: "./prod-pic1.jpg" },
        { name: "JORDAN 5", price: "199 $", discount: "-33%", type: "SHOES", img: "./probyi.jpg"  },
        { name: "JORDAN 5", price: "159 $", discount: "-50%", type: "SHOES", img: "./prod-pic3.jpg" },
        { name: "JORDAN 5", price: "189 $", discount: "-25%", type: "SHOES", img: "./prod-pic4.jpg" },
        { name: "JORDAN 5", price: "259 $", discount: "-10%", type: "SHOES", img: "./prod-pic5.jpg" },
    ];

    totalPages = Math.ceil(items.length / itemsPerPage);

    function displayItems(page) {
        itemsContainer.innerHTML = '';
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedItems = items.slice(start, end);

        paginatedItems.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('whole-card');
            itemDiv.innerHTML = `
                <div class="top-of-card">
                    <div class="discount">${item.discount}</div>
                    <div class="type">${item.type}</div>
                </div>
                <img class="pic-of-card" src="${item.img}" alt="">
                <div class="mid-of-card">
                    <div class="name-of">${item.name}</div>
                </div>
                <div class="bottom-of-card">
                    <div class="price">${item.price}</div>
                    <div class="edit-delete">
                        <img class="edit" src="./edit.png" alt="">
                        <img class="delete" src="./trash.png" alt="">
                    </div>
                </div>
            `;
            itemsContainer.appendChild(itemDiv);
        });
    }

    function setupPagination() {
        paginationContainer.innerHTML = '';
        paginationContainer.innerHTML += `<a href="#" data-page="prev">&laquo;</a>`;
        for (let i = 1; i <= totalPages; i++) {
            paginationContainer.innerHTML += `<a href="#" data-page="${i}">${i}</a>`;
        }
        paginationContainer.innerHTML += `<a href="#" data-page="next">&raquo;</a>`;
    }

    paginationContainer.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            const page = e.target.getAttribute('data-page');
            if (page === 'prev' && currentPage > 1) {
                currentPage--;
            } else if (page === 'next' && currentPage < totalPages) {
                currentPage++;
            } else if (!isNaN(page)) {
                currentPage = parseInt(page);
            }
            loadItems();
        }
    });

    function loadItems() {
        displayItems(currentPage);
        updateActivePage();
    }

    function updateActivePage() {
        const paginationLinks = paginationContainer.querySelectorAll('a');
        paginationLinks.forEach(link => link.classList.remove('active'));
        paginationLinks.forEach(link => {
            if (parseInt(link.getAttribute('data-page')) === currentPage) {
                link.classList.add('active');
            }
        });
    }

    setupPagination();
    loadItems();
});
