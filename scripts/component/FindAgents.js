import comket from "../../comket/html.js";


export default function FindAgents(){
    let findAgents = comket.div({
        class:"findAgents",
        children:[ Top() , InputSearch() , Cards1() , Between1() , Cards2() , Between2() , Cards3() ,Between3() , Cards4() , Changing() , Footer() ]
    })
    return findAgents
}

function Top(){
    let top = comket.div({
        class:"top",
        children:[
            comket.div({children:[
                comket.h1({text:"Meet our agents"}),
                comket.p({text:"We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis rhoncus ipsum nunc consectetur lorem a eu amet ac. Bibendum est molestie dui arcu mi at cras malesuada nunc."}),
            ]})
        ]
    })
    return top
}

function InputSearch(){
    let search = comket.div({
        class:"search",
        children:[
            comket.input({type:"search", placeholder:"Search agents..."}),
            comket.Element("ion-icon",{name:"search-outline"})
        ]
    })
    return search
}

function Cards1(){
    let cards = comket.div({
        class:"cards",
        children:[ card1() , card2() , card3() ]
    })
    return cards
}

function card1(){
   let card = comket.div({
    class:"card",
    children:[
        comket.img({src:"media/card1.png"}),
        comket.h3({text:"Troy Anderson"}),
        comket.div({class:"phone",children:[comket.img({src:"media/call.png"}) , comket.p({text:"206-365-9957"})]}),
        comket.div({class:"phone",children:[comket.img({src:"media/mail.png"}) , comket.p({text:"greaterseattle@troya.com"})]}),
        comket.div({class:"phone",children:[comket.img({src:"media/link.png"}) , comket.p({text:"troyanderson.com"})]}),
    ]
   }) 
   return card
}

function card2(){
   let card = comket.div({
    class:"card",
    children:[
        comket.img({src:"media/card2.png"}),
        comket.h3({text:"Troy Anderson"}),
        comket.div({class:"phone",children:[comket.img({src:"media/call.png"}) , comket.p({text:"206-365-9957"})]}),
        comket.div({class:"phone",children:[comket.img({src:"media/mail.png"}) , comket.p({text:"greaterseattle@troya.com"})]}),
        comket.div({class:"phone",children:[comket.img({src:"media/link.png"}) , comket.p({text:"troyanderson.com"})]}),
    ]
   }) 
   return card
}

function card3(){
   let card = comket.div({
    class:"card",
    children:[
        comket.img({src:"media/card3.png"}),
        comket.h3({text:"Troy Anderson"}),
        comket.div({class:"phone",children:[comket.img({src:"media/call.png"}) , comket.p({text:"206-365-9957"})]}),
        comket.div({class:"phone",children:[comket.img({src:"media/mail.png"}) , comket.p({text:"greaterseattle@troya.com"})]}),
        comket.div({class:"phone",children:[comket.img({src:"media/link.png"}) , comket.p({text:"troyanderson.com"})]}),
    ]
   }) 
   return card
}

function Between1(){
    let between = comket.div({class:"between"})
    return between
}

// ######################################################

function Cards2(){
    let cards = comket.div({
        class:"cards", style:{margin:"52px"},
        children:[ card4() , card5() , card6() ]
    })
    return cards
}

function card4(){
   let card = comket.div({
    class:"card",
    children:[
        comket.img({src:"media/card4.png"}),
        comket.h3({text:"Troy Anderson"}),
        comket.div({class:"phone",children:[comket.img({src:"media/call.png"}) , comket.p({text:"206-365-9957"})]}),
        comket.div({class:"phone",children:[comket.img({src:"media/mail.png"}) , comket.p({text:"greaterseattle@troya.com"})]}),
        comket.div({class:"phone",children:[comket.img({src:"media/link.png"}) , comket.p({text:"troyanderson.com"})]}),
    ]
   }) 
   return card
}

function card5(){
   let card = comket.div({
    class:"card",
    children:[
        comket.img({src:"media/card5.png"}),
        comket.h3({text:"Troy Anderson"}),
        comket.div({class:"phone",children:[comket.img({src:"media/call.png"}) , comket.p({text:"206-365-9957"})]}),
        comket.div({class:"phone",children:[comket.img({src:"media/mail.png"}) , comket.p({text:"greaterseattle@troya.com"})]}),
        comket.div({class:"phone",children:[comket.img({src:"media/link.png"}) , comket.p({text:"troyanderson.com"})]}),
    ]
   }) 
   return card
}

function card6(){
   let card = comket.div({
    class:"card",
    children:[
        comket.img({src:"media/card6.png"}),
        comket.h3({text:"Troy Anderson"}),
        comket.div({class:"phone",children:[comket.img({src:"media/call.png"}) , comket.p({text:"206-365-9957"})]}),
        comket.div({class:"phone",children:[comket.img({src:"media/mail.png"}) , comket.p({text:"greaterseattle@troya.com"})]}),
        comket.div({class:"phone",children:[comket.img({src:"media/link.png"}) , comket.p({text:"troyanderson.com"})]}),
    ]
   }) 
   return card
}

function Between2(){
    let between = comket.div({class:"between" , style:{margin:"0"}})
    return between
}

// ######################################################


function Cards3(){
    let cards = comket.div({
        class:"cards", style:{margin:"52px"},
        children:[ card7() , card8() , card9() ]
    })
    return cards
}

function card7(){
   let card = comket.div({
    class:"card",
    children:[
        comket.img({src:"media/card7.png"}),
        comket.h3({text:"Troy Anderson"}),
        comket.div({class:"phone",children:[comket.img({src:"media/call.png"}) , comket.p({text:"206-365-9957"})]}),
        comket.div({class:"phone",children:[comket.img({src:"media/mail.png"}) , comket.p({text:"greaterseattle@troya.com"})]}),
        comket.div({class:"phone",children:[comket.img({src:"media/link.png"}) , comket.p({text:"troyanderson.com"})]}),
    ]
   }) 
   return card
}

function card8(){
   let card = comket.div({
    class:"card",
    children:[
        comket.img({src:"media/card8.png"}),
        comket.h3({text:"Troy Anderson"}),
        comket.div({class:"phone",children:[comket.img({src:"media/call.png"}) , comket.p({text:"206-365-9957"})]}),
        comket.div({class:"phone",children:[comket.img({src:"media/mail.png"}) , comket.p({text:"greaterseattle@troya.com"})]}),
        comket.div({class:"phone",children:[comket.img({src:"media/link.png"}) , comket.p({text:"troyanderson.com"})]}),
    ]
   }) 
   return card
}

function card9(){
   let card = comket.div({
    class:"card",
    children:[
        comket.img({src:"media/card9.png"}),
        comket.h3({text:"Troy Anderson"}),
        comket.div({class:"phone",children:[comket.img({src:"media/call.png"}) , comket.p({text:"206-365-9957"})]}),
        comket.div({class:"phone",children:[comket.img({src:"media/mail.png"}) , comket.p({text:"greaterseattle@troya.com"})]}),
        comket.div({class:"phone",children:[comket.img({src:"media/link.png"}) , comket.p({text:"troyanderson.com"})]}),
    ]
   }) 
   return card
}

function Between3(){
    let between = comket.div({class:"between" ,  style:{margin:"0"}})
    return between
}

// ######################################################


function Cards4(){
    let cards = comket.div({
        class:"cards", style:{margin:"52px"},
        children:[ card10() , card11() , card12() ]
    })
    return cards
}

function card10(){
   let card = comket.div({
    class:"card",
    children:[
        comket.img({src:"media/card10.png"}),
        comket.h3({text:"Troy Anderson"}),
        comket.div({class:"phone",children:[comket.img({src:"media/call.png"}) , comket.p({text:"206-365-9957"})]}),
        comket.div({class:"phone",children:[comket.img({src:"media/mail.png"}) , comket.p({text:"greaterseattle@troya.com"})]}),
        comket.div({class:"phone",children:[comket.img({src:"media/link.png"}) , comket.p({text:"troyanderson.com"})]}),
    ]
   }) 
   return card
}

function card11(){
   let card = comket.div({
    class:"card",
    children:[
        comket.img({src:"media/card11.png"}),
        comket.h3({text:"Troy Anderson"}),
        comket.div({class:"phone",children:[comket.img({src:"media/call.png"}) , comket.p({text:"206-365-9957"})]}),
        comket.div({class:"phone",children:[comket.img({src:"media/mail.png"}) , comket.p({text:"greaterseattle@troya.com"})]}),
        comket.div({class:"phone",children:[comket.img({src:"media/link.png"}) , comket.p({text:"troyanderson.com"})]}),
    ]
   }) 
   return card
}

function card12(){
   let card = comket.div({
    class:"card",
    children:[
        comket.img({src:"media/card12.png"}),
        comket.h3({text:"Troy Anderson"}),
        comket.div({class:"phone",children:[comket.img({src:"media/call.png"}) , comket.p({text:"206-365-9957"})]}),
        comket.div({class:"phone",children:[comket.img({src:"media/mail.png"}) , comket.p({text:"greaterseattle@troya.com"})]}),
        comket.div({class:"phone",children:[comket.img({src:"media/link.png"}) , comket.p({text:"troyanderson.com"})]}),
    ]
   }) 
   return card
}

function Changing(){
    let changing = comket.div({
        class:"changing",
        children:[
            comket.Element("ion-icon", {name:"chevron-back"}),
            comket.h3({text:"1" ,id:"won" ,}),
            comket.h3({text:"2" ,id:"tow" ,onclick:tow }),
            comket.h3({text:"3" ,id:"three" , onclick:three}),
            comket.h3({text:"4" ,id:"for" , onclick:fore}),
            comket.Element("ion-icon", {name:"chevron-forward"}),

        ]
    })

    return changing
}

import Blogs   from "../../scripts/component/Blogs.js";
import About   from "../../scripts/component/Abut.js";
import Lading   from "../../scripts/component/Lading.js";
function tow(){
    document.body.innerHTML = ""
    document.body.append(Blogs())
}
function three(){
    document.body.innerHTML = ""
    document.body.append(About())
}
function fore(){
    document.body.innerHTML = ""
    document.body.append(Lading())
}


function Footer(){
    let footer = comket.div({
        class:"footer",
        children:[FooterTop() ,
            comket.div({class:"bet"}),
            comket.div({
                class:"footerBottom",
                children:[
                comket.div({
                    class:"term",
                    children:[
                        comket.p({text:"Term of Use"}),
                        comket.p({text:"Privacy Statement"})
                    ]}),
                    comket.p({text:"@2020  All Rights Reserved. "})
                ]
            })

         ]
    })

    return footer
}

function FooterTop(){
    let footerTop = comket.div({
        class:"footerTop",
        children:[
            comket.div({ class:"logo", children:[ comket.img({src:"media/logo.png"}) , comket.h2({text:"Logo Name"})]}),
            Company(),
            Location(),
            Our(),
            Follow(),

        ]
    })
    return footerTop
}

function Company(){
    let company = comket.div({
        class:"company",
        children:[
            comket.h1({text:"Company"}),
            comket.p({text:"About Us"}),
            comket.p({text:"For Employers"}),
            comket.p({text:"Success Stories"}),
            comket.p({text:"Careers"}),
            comket.p({text:"Contact Us"}),
        ]
    })
    return company
}

function Location(){
    let locations = comket.div({
        class:"location",
        children:[

            comket.div({
                class:"locations",
                children:[
                    comket.h1({text:"Locations"}),
                    comket.p({text:"Seattle"}),
                    comket.p({text:"Los Angeles"}),
                ],}),
                
            comket.div({
                class:"links",
                children:[
                    comket.h1({text:"Popular Links"}),
                    comket.p({text:"Browse Jobs"}),
                    comket.p({text:"Browse Companies"}),
                    comket.p({text:"Seattle Real Estate"}),
                    comket.p({text:"LA Real Esate"}),
                    comket.p({text:"Dream Jobs Events"}),
                    comket.p({text:"Podcasts"}),
                    comket.p({text:"Students"}),
                ]}),
            ]
    })
    return locations
}

function Our(){
    let our = comket.div({
        class:'our',
        children:[
            comket.h1({text:"Our Offices"}),
            comket.div({class:"seattle",
            children:[
                comket.h4({text:"Seattle"}),
                comket.p({text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}),
            ]}),
            comket.div({class:"los",
            children:[
                comket.h4({text:"Los Angeles"}),
                comket.p({text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '}),
            ]}),

        ]
    })

    return our
}

function Follow(){
    let follow = comket.div({
        class:'follow',
        children:[
            comket.h2({text:"Follow Us"}),
            comket.div({class:"link",
            children:[
                comket.img({src:"media/Linkedin.png"}),
                comket.img({src:"media/Instagram.png"}),
                comket.img({src:"media/Facebook.png"}),
                comket.img({src:"media/Twitter.png"}),
                comket.img({src:"media/Vector.png"}),
                comket.img({src:"media/youtube.png"}),
            ]
        }),
            comket.h2({text:"Be in the know"}),
            comket.p({text:"Members receive job notifications early"}),
            comket.div({
                class:"email",
                children:[
                comket.input({type:"email" , placeholder:"Email"}),
                comket.button({text:"Sign Up Now"}),
                ]
            })


            
        ]
    })
    return follow
}






