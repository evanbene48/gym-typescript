import Logo from "@/assets/Logo.png"
import NavbarLink from "./NavbarLink";
import { SelectedPage } from "@/shared/types";

type Props = {
    // selectedPage:string;
    // setSelectedPage:(value: string) => void;
    selectedPage:SelectedPage;
    setSelectedPage:(value: SelectedPage) => void;
}

// tsrafce
const Navbar = ({
    selectedPage,
    setSelectedPage
}: Props) => {
    const flexBetween = `flex 
    items-center justify-between`;

  return (
    <nav>
        {/* fixed = untuk memposisikan navbar di top */}
        {/* z-30 = ini biar navbarnya diatas yang lain */}
        {/* div ini sebagai parent container untuk navbar */}
        <div 
            className=
            {`${flexBetween} fixed 
            top-0 z-30 w-full py-6`}
        >
            <div 
            className={`${flexBetween} mx-auto w-5/6`}
            >
                <div 
                className={`${flexBetween} w-full gap-16`}
                >
                    {/* LEFT SIDE */}
                    <img alt="logo" src={Logo} />

                    {/* RIGHT SIDE */}
                    {/* w-full = ini artinya div ini akan ambil */}
                    {/* lebar sebanyak yang dia bisa */}
                    <div className={`${flexBetween} w-full`}>
                        <div className={`${flexBetween} gap-8 text-sm`}>
                            {/* <Link
                                page="Home"
                                // selectedPage={selectedPage}
                                // setSelectedPage={setSelectedPage}
                            /> */}
                            <NavbarLink 
                                page="Home"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <NavbarLink 
                                page="Benefits"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <NavbarLink 
                                page="Our Classes"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <NavbarLink 
                                page="Contact Us" 
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            
                        </div>
                        
                        <div className={`${flexBetween} gap-8`}>
                            <p>Sign In</p>
                            <button>Become a Member</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar