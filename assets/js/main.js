// Selectos
const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const arrowCart = document.querySelector('.title-container img');
const asideCart = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

// Lists
const productList = [
{
    id: 0,
    name: 'Bike',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},
{
    id: 1,
    name: 'Pantalla',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},
{
    id: 2,
    name: 'Compu',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
}];

// Events
emailMenu.addEventListener('click', toggleDesktopMenu);
mobileHamIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleCartAside);
arrowCart.addEventListener('click', toggleCartAside);

// Functions
function toggleDesktopMenu() {
    const isAsideClosed = asideCart.classList.contains('inactive')

    if(!isAsideClosed) {
        asideCart.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive');
};

function toggleMobileMenu() {
    const isAsideClosed = asideCart.classList.contains('inactive')

    if(!isAsideClosed) {
        asideCart.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive');
};

function toggleCartAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')

    if(!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }
    if(!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive')
    }
    
    asideCart.classList.toggle('inactive')
};

function renderProductos(arr) {
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const img = document.createElement('img');
        img.setAttribute('src', product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;

        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)

        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './assets/icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCard)

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(img)
        productCard.appendChild(productInfo)

        cardsContainer.appendChild(productCard)
    }
};

renderProductos(productList)









