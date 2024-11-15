let carrito = [];
let total = 0;

function agregarAlCarrito(producto, precio) {
    carrito.push({ producto, precio });
    total += precio;
    actualizarCarrito();
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    const totalElement = document.getElementById('total');
    
    listaCarrito.innerHTML = '';
    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.producto} - $${item.precio.toFixed(2)}`;
        listaCarrito.appendChild(li);
    });
    
    totalElement.textContent = total.toFixed(2);
}

function finalizarCompra() {
    const numeroWhatsApp = "972180916";  
    let mensaje = "¡Hola! Me gustaría comprar los siguientes productos:\n\n";
    
    carrito.forEach(item => {
        mensaje += `${item.producto} - $${item.precio.toFixed(2)}\n`;
    });
    
    mensaje += `\nTotal: $${total.toFixed(2)}`;
    
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}
