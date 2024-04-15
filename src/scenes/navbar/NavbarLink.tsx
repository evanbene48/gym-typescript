import { SelectedPage } from '@/shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll'

//kalau ingin pass component (dari contoh di bawah)
//  itu page, maka harus di declare jg typenya
//kalau contoh dibawah ini artinya page itu 
//  bakal selalu berisi string(gk bisa number, atau boolean)
type Props = {
    page:string;
    //-
    // selectedPage:string;
    // setSelectedPage:(value: string) => void;
    //+
    selectedPage:SelectedPage;
    setSelectedPage:(value: SelectedPage) => void;
}

const NavbarLink = ({
  page,
  selectedPage,
  setSelectedPage
}: Props) => {
  // replace(/ /g, "") = ini untuk ngilangin spasinya
  // (-)
  // const lowerCasePage = page.toLowerCase().replace(/ /g, "");
  //( + )
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  

  return (
    //kalau selected page maka rubah warnanya
    //kalau bukan, maka gausah rubah warna
    //transition duration-500 = durasi 
    //  animasi merubah warna hover
    <AnchorLink
        className={`
          ${selectedPage === lowerCasePage ? "text-primary-500" : ""}
          transition duration-500 
          hover:text-primary-300`
        }    
        href={`#${lowerCasePage}`}
        onClick={()=>setSelectedPage(lowerCasePage)}
    >
        {page}
    </AnchorLink>
  )
}

export default NavbarLink

//before
// type Props = {}

// const NavbarLink = (props: Props) => {
//   return (
//     <div>NavbarLink</div>
//   )
// }

// export default NavbarLink