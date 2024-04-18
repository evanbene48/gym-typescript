import Logo from "@/assets/Logo.png"
import NavbarLink from "./NavbarLink";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import ActionButton from "@/shared/ActionButton";

type Props = {
    // selectedPage:string;
    // setSelectedPage:(value: string) => void;
    isTopOfPage:boolean;
    selectedPage:SelectedPage;
    setSelectedPage:(value: SelectedPage) => void;
}

// tsrafce
const Navbar = ({
    isTopOfPage,
    selectedPage,
    setSelectedPage
}: Props) => {
    const flexBetween = `flex items-center justify-between`;
    
    //variable dibawah will return boolean 'true
    // if the window is at least 1060px
    // and false if not
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

    // console.log(isAboveMediumScreens)
  return (
    <nav>
        {/* fixed = untuk memposisikan navbar di top */}
        {/* z-30 = ini biar navbarnya diatas yang lain */}
        {/* div ini sebagai parent container untuk navbar */}
        <div 
            className=
            {`${navbarBackground}
            ${flexBetween} fixed 
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
                    {isAboveMediumScreens ? (
                        //w-full = ini artinya div ini akan ambil
                        // lebar sebanyak yang dia bisa
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
                                {/* <button>Become a Member</button> */}
                                <ActionButton 
                                    setSelectedPage={setSelectedPage}
                                >
                                    Become a Member
                                </ActionButton>
                            </div>
                        </div>
                    ):(
                        <button
                            className="rounded-full bg-secondary-500 p-2"
                            onClick={() => setIsMenuToggled(!isMenuToggled)}
                        >
                            <Bars3Icon className="h-6 w-6 text-white" />
                        </button>
                    )}
                    {/* END OF RIGHT SIDE */}
                </div>
            </div>
        </div>

        {/* MOBILE MENU MODAL */}
        {!isAboveMediumScreens && isMenuToggled && (
            //fixed = biar posisinya tetap disitu gk flex
            //right-0 = posisi di paling kanan
            //z-40 = hover over everything
            //h-full = tingginya full
            //w-[300px] = uses 300 pixel exactly (karena shorthand untuk 300px gk ada)
            <div className={`fixed right-0 
                bottom-0 z-40 h-full 
                w-[300px] bg-primary-100 
                drop-shadow-xl`
            }>
                {/* {CLOSE ICON} */}
                <div className={`flex justify-end p-12`}>
                    <button onClick={()=>setIsMenuToggled(!isMenuToggled)}>
                        <XMarkIcon className="h-6 w-6 text-gray-400" />                        
                    </button>
                </div>
                <div className={`ml-[30%] flex flex-col text-2xl gap-10`}>
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

            </div>
        )}

    </nav>
  )
}

export default Navbar