
import comket from "../../comket/html.js";

// import { Footer } from "../component/FindAgents.js";

export default function About(){
let abut = comket.div({
    class:"abut",
            children:[
                Top(),
                Ours(),
                Core(),
                See(),
                comket.img({src:"media/b.png" , style:{ marginTop:"82px"  }}),
                Changing(),
                Footer(),

            ]
})
return abut
}

function Top(){
    let top = comket.div({
        class:"top",
        children:[
            comket.div({children:[
                comket.h1({text:"About Us"}),
                comket.p({text:"We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis rhoncus ipsum nunc consectetur lorem a eu amet ac. Bibendum est molestie dui arcu mi at cras malesuada nunc."}),
            ]})
        ]
    })
    return top
}

function Ours(){
    let our = comket.div({
        class:"our",
        children:[
            comket.h2({text:"Our founders"}),
            comket.p({text:"We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis rhoncus ipsum nunc consectetur lorem a eu amet ac. Bibendum est molestie dui arcu mi at cras malesuada nunc."}),
            Cards(),
        ]
    })
    return our
}

function Cards(){
    let cards = comket.div({
        class:"cards",
        children:[
            comket.div({
                class:"card",
                children:[
                    comket.img({src:'media/our1.png'}),
                    comket.h3({text:'Founder Name'}),
                    comket.p({text:'His/her position'}),
                    ]}),
            comket.div({
                class:"card",
                children:[
                    comket.img({src:'media/our2.png'}),
                    comket.h3({text:'Founder Name'}),
                    comket.p({text:'His/her position'}),
                    ]}),
            comket.div({
                class:"card",
                children:[
                    comket.img({src:'media/our3.png'}),
                    comket.h3({text:'Founder Name'}),
                    comket.p({text:'His/her position'}),
                    ]}),    
            comket.div({
                class:"card",
                children:[
                    comket.img({src:'media/our4.png'}),
                    comket.h3({text:'Founder Name'}),
                    comket.p({text:'His/her position'}),
                    ]}),    
                ]})
    return cards
}

function Core(){
    let core = comket.div({
        class:"core",
        children:[
            comket.h2(({text:"Core Value"})),
            comket.div({
                class:"values",
                children:[
                    comket.div({
                        class:"value1",
                        children:[
                            comket.h1({}),
                            comket.h4({text:"Reliability"}),
                            comket.p({text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio duis egestas auctor suspendisse nibh duis."}),
                            
                        ]}),
                    comket.div({
                        class:"value1",
                        children:[
                            comket.h1({}),
                            comket.h4({text:"Reliability"}),
                            comket.p({text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio duis egestas auctor suspendisse nibh duis."}),
                            
                        ]}),
                    comket.div({
                        class:"value1",
                        children:[
                            comket.h1({}),
                            comket.h4({text:"Reliability"}),
                            comket.p({text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio duis egestas auctor suspendisse nibh duis."}),
                            
                        ]}),
                ]
            })
        ]
    })
    return core
}

function See(){
    ;let see = comket.div({
        class:"see",
        children:[
            comket.h1({text:"See how we are doing during covid"}),
            comket.p({text:"We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis rhoncus ipsum nunc consectetur lorem a eu amet ac. Bibendum est molestie dui arcu mi at cras malesuada nunc."}),
        ]
    })
    return see
}

function Changing(){
    let changing = comket.div({
        class:"changing",
        children:[
            comket.Element("ion-icon", {name:"chevron-back"}),
            comket.h3({text:"1" ,id:"won" ,  onclick:won}),
            comket.h3({text:"2" ,id:"tow" ,   onclick:tow }),
            comket.h3({text:"3" ,id:"three"}),
            comket.h3({text:"4" ,id:"for" , onclick:fore}),
            comket.Element("ion-icon", {name:"chevron-forward"}),

        ]
    })

    return changing
}

import Blogs   from "../../scripts/component/Blogs.js";
import FindAgents   from "../../scripts/component/FindAgents.js";
import Lading   from "../../scripts/component/Lading.js";

function won(){
    document.body.innerHTML = ""
    document.body.append(FindAgents())
}
function tow(){
    document.body.innerHTML = ""
    document.body.append(Blogs())
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
























