console.log("el archivo javascrip ya está importado");

const libros = {
    listarLibros: () =>{
        const contenedor= document.getElementById("contenedorLibros");
        const books="<ul><li> libro1 <li> libro2 </ul>";
        contenedor.innerHTML=books;
    }
}
libros.listarLibros();