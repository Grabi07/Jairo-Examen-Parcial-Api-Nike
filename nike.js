const API_URL = "http://localhost:3000/api/nike";

document.addEventListener("DOMContentLoaded", cargarProductos);

// Obtener productos
async function cargarProductos() {
    try {
        const res = await fetch(API_URL);
        const data = await res.json();
        mostrarProductos(data.productos);
    } catch (err) {
        console.error("Error al cargar:", err);
    }
}

function mostrarProductos(productos) {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";

    productos.forEach(p => {
        const div = document.createElement("div");
        div.className = "product-card";
        div.innerHTML = `
            <img src="${p.imagen}" alt="${p.producto}">
            <h3>${p.producto}</h3>
            <p><strong>Categoría:</strong> ${p.categoria}</p>
            <p><strong>Talla:</strong> ${p.talla || "N/A"}</p>
            <p><strong>Precio:</strong> $${p.precio}</p>
            <p><strong>Stock:</strong> ${p.stock}</p>
        `;
        productList.appendChild(div);
    });
}

// Guarda productos
document.getElementById("productForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const nuevoProd = {
        producto: document.getElementById("producto").value,
        categoria: document.getElementById("categoria").value,
        talla: document.getElementById("talla").value,
        precio: parseFloat(document.getElementById("precio").value),
        stock: parseInt(document.getElementById("stock").value),
        imagen: document.getElementById("imagen").value
    };

    await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevoProd)
    });

    alert("✔ Producto guardado con éxito");
    cargarProductos();
});
