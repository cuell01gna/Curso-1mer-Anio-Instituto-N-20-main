console.log("el archivo javascrip ya está importado");

const urlApi="https://biblioisp20-7912.restdb.io/rest/libros?apikey=64f8c71068885441e60bfe8a";

//
const appLibros = {
    listarLibros: () =>{
        //tomamos la referencia al contenedor donde se mostraran los libros
        const contenedor=document.getElementById("contenedorLibros");

        //creamos una variable vacia 
        let contenidoHTML= "";

        //
        fetch(urlApi).then(respuesta=>respuesta.json()).then(libros=>{
            console.log(libros);
            for(const libro of libros ) {
                contenidoHTML += `
                <div>
                    <img src="${libro.portada_url} "class="img-thumbnail"/>
                    <details>
                    <summary> ${libro.nombre}</summary>
                    ${libro.sinopsis}
                    </details>

                </div>`;

            };
        console.log(contenidoHTML);
        contenedor.innerHTML=contenidoHTML;
        })

    }
}
appLibros.listarLibros();