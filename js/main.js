/*===== MENU SHOW Y HIDDEN =====*/ 

const navMenu = document.getElementById('nav-menu'),

      toggleMenu = document.getElementById('nav-toggle'),
      closeMenu = document.getElementById('nav-close')

/*SHOW*/ 
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

/*HIDDEN*/
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
;

function generateWaLink(productName, phoneNumber, address, price, locationLink) {
  let baseURL = "https://wa.me/6281261233552";
  let message = `
  *CREATE ORDER YOUR*
  Nama Barang: ${productName}
  Nomor HP: ${phoneNumber}
  Alamat: ${address}
  Harga: ${price}
  Lokasi: ${locationLink}
  
  *TUNGGU BALASAN DARI KAMI*
  `;
  let finalURL = `${baseURL}?text=${encodeURIComponent(message)}`;
  document.getElementById('pesanWa').href = finalURL;
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let googleMapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;

    // Contoh penggunaan fungsi ini dengan produk dan lokasi pengguna
    generateWaLink('Cireng Ayam', '', '', 'Rp10.000', googleMapsLink);
  });
} else {
  alert("Geolocation is not supported by this browser.");
}

//swipe slide

var swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true, /* Menjadikan slider berputar terus */
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });