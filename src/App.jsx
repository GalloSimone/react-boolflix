import { FilmSearchProvider } from "./contexts/filmsContext"
import DefaultLayout from "./layout/DefaultLayout"
import FilmSearch from "./componets/SerchFilms"

function App(){
return (
  <FilmSearchProvider>
    <div>
      <FilmSearch/>
    </div>
    </FilmSearchProvider>
  )
}

  


export default App
