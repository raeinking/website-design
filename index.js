const humberger = document.querySelector('.humberger');
const closemenu = document.querySelector('.closemenu');
const product = document.querySelector('.menu-product-header');
const Company = document.querySelector('.Company-btn');
const Connect = document.querySelector('.Connect-btn');
const addProduct = document.querySelector('.menu-add-product');
const addCompany = document.querySelector('.menu-add-Company');
const addContact = document.querySelector('.menu-add-Contact');
const menu = document.querySelector('.menu');

const Productbtn = document.querySelector('.Product-btn')
const Productadd = document.querySelector('.Product-add')

document.addEventListener('click', () => {{
                humberger.addEventListener('click', () => {
                closemenu.style.display='flex';
                humberger.style.display='none';
                menu.style.display='flex';
                menu.style.height='90%';
                menu.style.left='10%';
                menu.style.right='10%';
                menu.style.zIndex=3;

                })
                closemenu.addEventListener('click', () => {
                        humberger.style.display='flex';
                        closemenu.style.cursor='pointer';
                        closemenu.style.display='none';
                        menu.style.height='0%';
                        menu.style.left='0%';
                        menu.style.right='0%';
                        menu.style.zIndex=-3;
                })
                product.addEventListener('click', function() {
                addProduct.style.display='flex'
                addCompany.style.display='none'
                addContact.style.display='none'
                })
                Company.addEventListener('click', () => {
                addProduct.style.display='none'
                addCompany.style.display='flex'
                addContact.style.display='none'
                })
                Connect.addEventListener('click', () => {
                addProduct.style.display='none'
                addCompany.style.display='none'
                addContact.style.display='flex'
                })
        }
});
