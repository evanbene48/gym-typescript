import { useState } from 'react'
import Navbar from './scenes/navbar/Navbar'
import { SelectedPage } from './shared/types'

// +

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  )

  // const [selectedPage, setSelectedPage] = useState<string>("home")
  //code diatas bisa juga ditulis seperti ini
  // const [selectedPage, setSelectedPage] = useState("home")
  //ini bisa dikarenakan sleectedPage returnnya string

  console.log(selectedPage)
  return (
    <div className='app bg-gray-20'>
      <Navbar 
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  )
}

export default App
