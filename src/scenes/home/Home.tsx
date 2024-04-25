import useMediaQuery from '@/hooks/useMediaQuery';
import { SelectedPage } from '@/shared/types';

import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import ActionButton from '@/shared/ActionButton';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from "framer-motion";

type Props = {
    setSelectedPage:(value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    // py-10 = paddint top dan bot = 10px
    <section 
        id="home"
        className={`py-10 
        md:h-full md:pb-0`}
    >
        {/* IMAGE and MAIN HEADER */}
        {/* mx-auto = buat bikin div ketengah */}
        {/* w-5/6 = buat bikin div 5/6 dri parent */}
        {/* items-center = buat bikin item didalam ke tengah */}
        <motion.div
            className={`mx-auto w-5/6 
            items-center justify-center 
            md:flex md:h-5/6`}
            onViewportEnter={()=>setSelectedPage(SelectedPage.Home)}
        >
            {/* MAIN HEADER */}
            {/* md:basis-3/5 = flex basis */}
            {/*  buat bikin ratio initial gambarnya jadi lebih gede  */}
            <div 
                className="z-10 
                mt-32
                md:basis-3/5"
            >
                {/* HEADINGS */}
                <motion.div
                    className="md:-mt-32"
                    initial="hidden"
                    whileInView="visible"
                    //once = animasinya trigger cuma sekali
                    //amount = seberapa persen div dilihat untuk
                    // trigger animasinya
                    viewport={{ once: true, amount: 0.5 }}
                    // duration = seberapa lama animasinya
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                      }}
                >
                    <div className="relative">
                        <div 
                            className="before:absolute 
                            before:-top-20 before:-left-10 
                            before:z-[-1] 
                            md:before:content-evolvetext"
                        >
                            <img alt='home-page-text' src={HomePageText}/>
                        </div>
                    </div>

                    <p className="mt-8 text-sm">
                        Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
                        Studios to get the Body Shapes That you Dream of.. Get Your Dream
                        Body Now.
                    </p>
                </motion.div>
                {/* ACTIONS */}
                <motion.div
                    className="mt-8 
                    flex items-center 
                    gap-8"
                    initial="hidden"
                    whileInView="visible"
                    //once = animasinya trigger cuma sekali
                    //amount = seberapa persen div dilihat untuk
                    // trigger animasinya
                    viewport={{ once: true, amount: 0.5 }}
                    // duration = seberapa lama animasinya
                    transition={{ delay:0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <ActionButton 
                        setSelectedPage={setSelectedPage}
                    >
                        Join Now
                    </ActionButton>
                    <AnchorLink
                        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                        href={`#${SelectedPage.ContactUs}`}
                    >
                        <p>Learn More</p>
                    </AnchorLink>
                </motion.div>
            </div>

            {/* IMAGES */}
            <div
                className="flex basis-3/5 
                justify-center 
                md:z-10
                md:ml-40 md:mt-16 
                md:justify-items-end"
            >
                <img 
                    alt='home-pageGraphic' 
                    src={HomePageGraphic} 
                />
            </div>
        </motion.div>

        {/* SPONSORS */}
        {isAboveMediumScreens &&(
            <div className="h-[150px] w-full bg-primary-100 py-10">
                <div 
                    className="mx-auto w-5/6"
                >
                    <div className="flex justify-center gap-16 items-center">
                        <img alt="redbull-sponsor" src={SponsorRedBull} />
                        <img alt="forbes-sponsor" src={SponsorForbes} />
                        <img alt="fortune-sponsor" src={SponsorFortune} />
                    </div>
                </div>
            </div>
        )}
    </section>
  )
}

export default Home