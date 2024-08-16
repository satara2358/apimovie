// import './input.css'

function App() {


  return (
    <div >
      <h1 >Search Película</h1>
      <form 
        onSubmit={handleSubmit}
        className="text-center">
        <input
          type="text"
          placeholder="Buscador de películas"
          value={pelicula}
          onChange={handleInputChange}
          className=""
        />
        <button
          type="submit"
          className=""
        >
          Buscar
        </button>
      </form>
      <div className="">
        {movies.map((mov) => (
          <div  key={mov.id} className="">
            <img 
              src={`https://image.tmdb.org/t/p/w500${mov.poster_path}`} 
              alt={mov.title} 
              className=""
            />
            <h1>{mov.title}</h1>
            <p>{mov.overview}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
