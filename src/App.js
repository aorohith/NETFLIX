import NavBar from './Components/NavBar/NavBar' 
import React from 'react'
import {originals,action,comedy,horror,romance,documentaries} from './urls'
import "./App.css"
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={comedy} title='ComedyMovies' isSmall />
      <RowPost url={horror} title='HorrorMovies' isSmall />
      <RowPost url={romance} title='RomanceMovies' isSmall />
      <RowPost url={documentaries} title='Documentaries' isSmall />
    </div>
  )
}

export default App
