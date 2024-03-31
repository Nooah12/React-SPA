import { useState } from 'react'
import './App.css'
import Home from './Components/Home/Home'
import Marines from './Components/Marines/Marines';
import Pirates from './Components/Pirates/Pirates';

function App() {
  const [page, setPage] = useState(null);

  return (
    <>
    {!page && <Home update={setPage} />}
    {page === "Marines" && <Marines update={setPage}/>} 
    {page === "Pirates" && <Pirates update={setPage} />}
    </>
  )
}

export default App
