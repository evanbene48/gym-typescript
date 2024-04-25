//+

//enum itu adalah collection suatu constant
// jadi kalau isiannya itu udh fix di range tsb
// gabisa pakai variable lainnya
// kalau contoh dibawah ini SelectedPage itu pasti nilainya
// home, benefits, ourclasses dan contactus aja
// kalau mau nambah mesti ditambahin kesini
// example :
//ini boleh (v)
// if (lowerCasePage === "contactus"){
// }
//ini gk boleh (x)
// if (lowerCasePage === "ashiap"){
// }

export enum SelectedPage {
    Home = "home",
    Benefits = "benefits",
    OurClasses = "ourclasses",
    ContactUs = "contactus",
}

export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
}