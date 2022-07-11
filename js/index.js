let articulos = [
    {nombreProducto: "REMERA FELI", categoria: "REMERAS", temporada: "INVIERNO", precio: 8600, imagen: "./assets/remera1.jpg"},
    {nombreProducto: "REMERA MONACO", categoria: "REMERAS", temporada: "INVIERNO", precio: 7900, imagen: "./assets/remera1.jpg"},
    {nombreProducto: "REMERA CHILD", categoria: "REMERAS", temporada: "INVIERNO", precio: 5500, imagen: "./assets/remera1.jpg"},
    {nombreProducto: "CAMISA MARGARITA", categoria: "CAMISAS", temporada: "INVIERNO", precio: 20000, imagen: "./assets/camisa1.jpg"},
    {nombreProducto: "CAMISA PHIL", categoria: "CAMISAS", temporada: "INVIERNO", precio: 17500, imagen: "./assets/camisa1.jpg"},
    {nombreProducto: "CAMISA SOHO", categoria: "CAMISAS", temporada: "INVIERNO", precio: 16800, imagen: "./assets/camisa1.jpg"},
    {nombreProducto: "CAMISA MARKLE", categoria: "CAMISAS", temporada: "INVIERNO", precio: 12000, imagen: "./assets/camisa1.jpg"},
    {nombreProducto: "CAMISA BRIANA", categoria: "CAMISAS", temporada: "VERANO", precio: 11800, imagen: "./assets/camisa1.jpg"},
    {nombreProducto: "BUZO LIAM", categoria: "BUZOS", temporada: "INVIERNO", precio: 13900, imagen: "./assets/buzo1.jpg"},
    {nombreProducto: "BUZO ROSE", categoria: "BUZOS", temporada: "INVIERNO", precio: 16500, imagen: "./assets/buzo1.jpg"},
    {nombreProducto: "HOODIE DEAN", categoria: "BUZOS", temporada: "INVIERNO", precio: 11000, imagen: "./assets/buzo1.jpg"},
    {nombreProducto: "HOODIE LUCIEN", categoria: "BUZOS", temporada: "VERANO", precio: 9900, imagen: "./assets/buzo1.jpg"},
    {nombreProducto: "BUZO BLOOM ", categoria: "BUZOS", temporada: "VERANO", precio: 10700, imagen: "./assets/buzo1.jpg"},
    {nombreProducto: "VESTIDO IMMA", categoria: "VESTIDOS", temporada: "INVIERNO", precio: 14400, imagen: "./assets/vestido1.jpg"},
    {nombreProducto: "VESTIDO ANUSH", categoria: "VESTIDOS", temporada: "INVIERNO", precio: 13900, imagen: "./assets/vestido1.jpg"},
    {nombreProducto: "VESTIDO CROWN ", categoria: "VESTIDOS", temporada: "INVIERNO", precio: 15900, imagen: "./assets/vestido1.jpg"},
    {nombreProducto: "VESTIDO JANICE", categoria: "VESTIDOS", temporada: "INVIERNO", precio: 37500, imagen: "./assets/vestido1.jpg"},
    {nombreProducto: "JOGGER WAFLE", categoria: "CALZAS", temporada: "INVIERNO", precio: 9700, imagen: "./assets/calza1.jpg"},
    {nombreProducto: "JOGGER JERRY", categoria: "CALZAS", temporada: "INVIERNO", precio: 11000, imagen: "./assets/calza1.jpg"},
    {nombreProducto: "JOGGER JOSIE", categoria: "CALZAS", temporada: "INVIERNO", precio: 7300, imagen: "./assets/calza1.jpg"},
    {nombreProducto: "JOGGER LUCIEN", categoria: "CALZAS", temporada: "VERANO", precio: 9900, imagen: "./assets/calza1.jpg"},
    {nombreProducto: "JOGGER COMFY", categoria: "CALZAS", temporada: "VERANO", precio: 7600, imagen: "./assets/calza1.jpg"},
    {nombreProducto: "PANTALON MARGARET", categoria: "PANTALONES", temporada: "INVIERNO", precio: 13900, imagen: "./assets/pantalon1.jpg"},
    {nombreProducto: "PANTALON ELENA", categoria: "PANTALONES", temporada: "INVIERNO", precio: 16500, imagen: "./assets/pantalon1.jpg"},
    {nombreProducto: "DENIM ROSE", categoria: "PANTALONES", temporada: "INVIERNO", precio: 13000, imagen: "./assets/pantalon1.jpg"},
    {nombreProducto: "DENIM PAUL", categoria: "PANTALONES", temporada: "VERANO", precio: 12600, imagen: "./assets/pantalon1.jpg"},
    {nombreProducto: "CAMPERA FOWLER", categoria: "CAMPERAS", temporada: "INVIERNO", precio: 38000, imagen: "./assets/campera1.jpg"},
    {nombreProducto: "CAMPERA MADISON", categoria: "CAMPERAS", temporada: "INVIERNO", precio: 47000, imagen: "./assets/campera1.jpg"},
    {nombreProducto: "CAMPERA BIKER", categoria: "CAMPERAS", temporada: "INVIERNO", precio: 39000, imagen: "./assets/campera1.jpg"},
    {nombreProducto: "CAMPERA PUFFER", categoria: "CAMPERAS", temporada: "INVIERNO", precio: 44000, imagen: "./assets/campera1.jpg"},
    {nombreProducto: "PARKA SABBATH", categoria: "CAMPERAS", temporada: "VERANO", precio: 45000, imagen: "./assets/campera1.jpg"},
    {nombreProducto: "CARDIGAN MONZON", categoria: "SWEATERS", temporada: "INVIERNO", precio: 20000, imagen: "./assets/sweater1.jpg"},
    {nombreProducto: "CARDIGAN CAPE", categoria: "SWEATERS", temporada: "INVIERNO", precio: 22000, imagen: "./assets/sweater1.jpg"},
    {nombreProducto: "CARDIGAN JANDIRA", categoria: "SWEATERS", temporada: "INVIERNO", precio: 12000, imagen: "./assets/sweater1.jpg"},
    {nombreProducto: "REMERA FAIRY", categoria: "REMERAS", temporada: "VERANO", precio: 8300, imagen: "./assets/remera1.jpg"},
    {nombreProducto: "REMERA JUSTINA", categoria: "REMERAS", temporada: "VERANO", precio: 7600, imagen: "./assets/remera1.jpg"},
    {nombreProducto: "REMERA WASH", categoria: "REMERAS", temporada: "VERANO", precio: 5200, imagen: "./assets/remera1.jpg"},
    {nombreProducto: "CAMISA MORNING", categoria: "CAMISAS", temporada: "VERANO", precio: 16000, imagen: "./assets/camisa1.jpg"},
    {nombreProducto: "VESTIDO CAROL", categoria: "VESTIDOS", temporada: "VERANO", precio: 18800, imagen: "./assets/vestido1.jpg"},
    {nombreProducto: "JEAN BASTIAN", categoria: "PANTALONES", temporada: "VERANO", precio: 13300, imagen: "./assets/pantalon1.jpg"},
    {nombreProducto: "CAMPERA SMITH", categoria: "CAMPERAS", temporada: "VERANO", precio: 41000, imagen: "./assets/campera1.jpg"},
    {nombreProducto: "CARDIGAN SUNRAY", categoria: "SWEATERS", temporada: "VERANO", precio: 14000, imagen: "./assets/sweater1.jpg"},
    {nombreProducto: "CARDIGAN STRIPES", categoria: "SWEATERS", temporada: "VERANO", precio: 12300, imagen: "./assets/sweater1.jpg"},
];

let formNombre = document.getElementById("formNombre");
formNombre.addEventListener("submit", validarNombre);

function validarNombre(e){
    e.preventDefault();

    let form = e.target;
    let valorBuscado = form.children[0].value;
    console.log(valorBuscado);

    let resultado = articulos.filter((elemento) => elemento.nombreProducto.includes(valorBuscado.toUpperCase()));
        for(const articulo of resultado){
            let item = document.createElement("div");
            item.innerHTML = `<img src=${articulo.imagen}>
                              <h5>${articulo.nombreProducto}</h5>
                              <h5>Categoría: ${articulo.categoria}<h5>
                              <h5>Temporada: ${articulo.temporada}<h5>
                              <h5>Precio: ${articulo.precio}</h3>`;
            container.append(item);
        };
}

let formCategoria = document.getElementById("formCategoria");
formCategoria.addEventListener("submit", validarCategoria);

function validarCategoria(e){
    e.preventDefault();

    let form = e.target;
    let valorBuscado = form.children[0].value;
    console.log(valorBuscado);

    let resultado = articulos.filter((elemento) => elemento.categoria.includes(valorBuscado.toUpperCase()));
        for(const articulo of resultado){
            let item = document.createElement("div");
            item.innerHTML = `<img src=${articulo.imagen}>
                              <h5>${articulo.nombreProducto}</h5>
                              <h5>Categoría: ${articulo.categoria}<h5>
                              <h5>Temporada: ${articulo.temporada}<h5>
                              <h5>Precio: ${articulo.precio}</h3>`;
            container.append(item);
        };
}

let formTemporada = document.getElementById("formTemporada");
formTemporada.addEventListener("submit", validarTemporada);

function validarTemporada(e){
    e.preventDefault();
    
    let form = e.target;
    let valorBuscado = form.children[0].value;
    console.log(valorBuscado);

    let resultado = articulos.filter((elemento) => elemento.temporada.includes(valorBuscado.toUpperCase()));
        for(const articulo of resultado){
            let item = document.createElement("div");
            item.innerHTML = `<img src=${articulo.imagen}>
                              <h5>${articulo.nombreProducto}</h5>
                              <h5>Categoría: ${articulo.categoria}<h5>
                              <h5>Temporada: ${articulo.temporada}<h5>
                              <h5>Precio: ${articulo.precio}</h3>`;
            container.append(item);   
        };
}

let borrarTodo = document.getElementById("btnBorrarTodo");
borrarTodo.onclick = () => {container.remove()};



















                         