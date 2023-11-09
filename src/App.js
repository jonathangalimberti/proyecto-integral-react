import './App.css';
import { Appi } from './components/Main.jsx';
import { Footer } from './components/footer.jsx';

// let pagina = 1;

// const cargarPeliculas = async () => {
//   try {
//     const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=9ad816b5e30fc1892635fae8cf7940f2&language=es-MX&page=${pagina}`);
//     console.log(respuesta);

//     if (respuesta.status === 200) {

//       const datos = await respuesta.json();
//       console.log(datos)
//       let peliculas = "";
//       datos.results.forEach(pelicula => {
//         peliculas += `
//                     <div className="pelicula card-body">
//                         <img className="poster card-img " src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
//                         <h3 className="titulo card-title ">${pelicula.title} </h3>
//                         <p className= "card-text">${pelicula.overview}</p>
//                     </div> 
//             `;
//       });

//       document.getElementById("contenedor").innerHTML = peliculas;
//     }

//     else if (respuesta.status === 401) { console.log("Key incorrecta"); }
//     else if (respuesta.status === 404) { console.log("no disponible"); }
//     else { console.log("no tengo idea del error"); }
//   } catch (error) {
//     console.log(error.message);
//   }

// }

// cargarPeliculas();
function App() {


  // API key 9ad816b5e30fc1892635fae8cf7940f2
  return (
    <>
      <Appi/> 
      <Footer/>
    </>
  
  );
}

export default App;
