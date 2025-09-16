const urlParam = new URLSearchParams(window.location.search);

const product = urlParam.get("product")
var product_name = product ? product : null
console.log(product_name);

function toggleMenu() {
    document.getElementById('offcanvas').classList.toggle('active');
}