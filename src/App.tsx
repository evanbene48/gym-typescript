import { useEffect, useState } from 'react'
import Navbar from './scenes/navbar/Navbar'
import { SelectedPage } from './shared/types'
import Home from './scenes/home/Home';
import Benefits from './scenes/benefits/Benefits';

// +

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  )

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      //window.scrollY = posisi windownya lgi di mana
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const [selectedPage, setSelectedPage] = useState<string>("home")
  //code diatas bisa juga ditulis seperti ini
  // const [selectedPage, setSelectedPage] = useState("home")
  //ini bisa dikarenakan sleectedPage returnnya string

  // console.log(selectedPage)
  return (
    <div className='app bg-gray-20'>
      <Navbar 
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
    </div>
  )
}

export default App
