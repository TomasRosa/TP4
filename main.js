document.addEventListener("DOMContentLoaded", () => 
{
  inicializarProductos();
  
})
const carrito = new Carrito();
function Producto (nombre,precio,cantidad,idProducto)
{
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
    this.idProducto = idProducto;
}
const listaProductos = [];
// Función para inicializar los productos desde el HTML
function inicializarProductos() 
{
    const producto1 = new Producto("Zapatillas", 100, 0, 1);
    const producto2 = new Producto("Camiseta", 100, 0, 2);
    const producto3 = new Producto("Medias", 100, 0, 3);

    listaProductos.push(producto1, producto2, producto3);
    if(listaProductos.length === 3)
    {
        console.log("Productos inicializados! ");
    }
} 
function buscarProductoPorIdEliminar (carrito,idProducto)
 {
    let prodARetornar = null;
    
    carrito.forEach(prod =>
    {
        if(prod.idProducto === idProducto)
        {
            prodARetornar = prod;
        }
    })
    return prodARetornar;
 }
 function buscarProductoPorIdAgregar(listaProductos,idProducto)
 {
    let prodARetornar = null;

    listaProductos.forEach(prod =>{
        if(prod.idProducto === idProducto)
        {
            prodARetornar = prod;
        }
    })
    return prodARetornar;
 }
function Carrito ()
{
    this.carrito = [];
    this.agregarProductoCarrito = function(producto)
    {
        this.carrito.push(producto);
    }
    this.quitarProductoCarrito = function(idProducto) 
    {
        const productoIndex = this.carrito.findIndex(producto => producto.idProducto === idProducto);

        if (productoIndex !== -1) 
        {
            this.carrito.splice(productoIndex, 1); // Elimina 1 elemento en la posición del producto encontrado
        } 
        else 
        {
            alert("No puede quitarse el producto del carrito debido a que no existe.");
        }
    }
}
function agregarAlCarrito(idProducto) 
{
    const productoEncontrado = buscarProductoPorIdAgregar(listaProductos, idProducto);

    if (productoEncontrado != null) 
    {
        const productoEnCarrito = carrito.carrito.find(producto => producto.idProducto === idProducto);
        if(productoEnCarrito != null)
        {
            productoEnCarrito.cantidad++;
        }
        else
        {
            productoEncontrado.cantidad = 1;
            carrito.agregarProductoCarrito(productoEncontrado);
        }
        actualizarVistaCarrito();
    }
}

function actualizarVistaCarrito() 
{
    const carritoElement = document.getElementById("carrito");
    carritoElement.innerHTML = "";

    carrito.carrito.forEach(producto => 
    {
        const li = document.createElement("li");
        li.textContent = `${producto.nombre} - Cantidad: ${producto.cantidad}`;
        carritoElement.appendChild(li);
    });
}

