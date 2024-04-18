
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from './types';

//React.ReactNode ? (Pertanyaan / Question)
type Props = {
    children:React.ReactNode;
    setSelectedPage:(value:SelectedPage) =>void;
}

const ActionButton = ({
    children,
    setSelectedPage
}: Props) => {
    console.log(children)
  return (
    <AnchorLink
        className={`rounded-md 
        bg-secondary-500 px-10 py-2 
        hover:bg-primary-500 hover:text-white`}
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        //href dibawah bisa juga ditulis seperti ini
        // href={`#contactus`}, tapi better penulisan
        // seperti href dibawah ini utk typescript
        href={`#${SelectedPage.ContactUs}`}
    >
        {children}
    </AnchorLink>
  )
}

export default ActionButton