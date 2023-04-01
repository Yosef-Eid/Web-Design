import comket from "../../comket/html.js";

// import { Footer } from "../component/FindAgents.js";

export default function Blogs(){
let blogs = comket.div({
    class:"blogs",
    children:[Top() , Most(),  Recent(), Changing(), Footer() ]
})

return blogs
}

function Top(){
    let top = comket.div({
        class:"top",
        children:[
            comket.div({children:[
                comket.h1({text:"Blogs"}),
                comket.p({text:"We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis rhoncus ipsum nunc consectetur lorem a eu amet ac. Bibendum est molestie dui arcu mi at cras malesuada nunc."}),
            ]})
        ]
    })
    return top
}
function Most(){    
    let most = comket.div({class:"most",
            children:[
                comket.h1({text:"Most Popular"}),
                comket.div({class:"mostCards",
                children:[
                    comket.div({class:"card1",
                    children:[
                        comket.img({src:"media/blogsCard1.png" , class:"img1"}),
                        comket.h2({text:"Real Estate during 2020"}),
                        comket.div({class:"profile",
                        children:[
                            comket.img({src:"media/proCArd1.png"}),
                            comket.div({class:"namePro",
                            children:[comket.h3({text:"Author Name"}),comket.p({text:"Nov 15th, 2020"})]
                        })]})]}),
                        comket.div({class:"card1",
                        children:[
                            comket.img({src:"media/blogsCard2.png" , class:"img1"}),
                            comket.h2({text:"Real Estate during 2020"}),
                            comket.div({class:"profile",
                            children:[
                                comket.img({src:"media/proCArd2.png"}),
                                comket.div({class:"namePro",
                                children:[comket.h3({text:"Author Name"}),comket.p({text:"Nov 15th, 2020"})]
                            })]})]}),
                            comket.div({class:"card1",
                            children:[
                                comket.img({src:"media/blogsCard3.png" , class:"img1"}),
                                comket.h2({text:"Real Estate during 2020"}),
                                comket.div({class:"profile",
                                children:[
                                    comket.img({src:"media/proCArd3.png"}),
                                    comket.div({class:"namePro",
                                    children:[comket.h3({text:"Author Name"}),comket.p({text:"Nov 15th, 2020"})]
                                })]})]}),
                    ]}),
            ]
    })
return most
}

function Recent(){
    let recent = comket.div({class:"recent",
    children:[
        comket.div({class:"recentCards",
        children:[
            comket.h1({text:"Recent posts"}),
            comket.div({class:"card",
            children:[
                comket.img({src:"media/recent1.png"}),
                comket.div({class:"prof",
                children:[
                    comket.h3({text:"Real Estate during 2020"}),
                    comket.div({class:"name",
                    children:[
                        comket.img({src:"media/recentPro1.png"}),
                        comket.div({class:"name1",
                        children:[
                            comket.h4({text:"Author Name"}),
                            comket.p({text:"Nov 15th, 2020"}),
                            ]})]})]})],}),
            comket.div({class:"card",
            children:[
                comket.img({src:"media/recent2.png"}),
                comket.div({class:"prof",
                children:[
                    comket.h3({text:"Real Estate during 2020"}),
                    comket.div({class:"name",
                    children:[
                        comket.img({src:"media/proCard3.png"}),
                        comket.div({class:"name1",
                        children:[
                            comket.h4({text:"Author Name"}),
                            comket.p({text:"Nov 15th, 2020"}),
                            ]})]})]})],}),     
                            
                            comket.div({class:"card",
            children:[
                comket.img({src:"media/recent3.png"}),
                comket.div({class:"prof",
                children:[
                    comket.h3({text:"Real Estate during 2020"}),
                    comket.div({class:"name",
                    children:[
                        comket.img({src:"media/proCard2.png"}),
                        comket.div({class:"name1",
                        children:[
                            comket.h4({text:"Author Name"}),
                            comket.p({text:"Nov 15th, 2020"}),
                            ]})]})]})],}),
        ]
    }),
        comket.div({class:"recentFollow",
        children:[
            comket.h5({text:"Follow Us"}),
            comket.div({class:"gram",
            children:[ comket.Element("ion-icon",{name:"logo-instagram"}), comket.p({text:"#realestate2020"}),]
        }),
        comket.div({class:"imgs",
        children:[
            comket.img({src:"media/foolow1.png"}),
            comket.img({src:"media/foolow2.png"}),
            comket.img({src:"media/foolow3.png"}),
            comket.img({src:"media/foolow4.png"}),
            comket.img({src:"media/foolow5.png"}),
            comket.img({src:"media/foolow6.png"}),
            comket.img({src:"media/foolow7.png"}),
            comket.img({src:"media/foolow8.png"}),
        ]
    })
        ]
    }),
    ]
})
    
    return recent
}

function Changing(){
    let changing = comket.div({
        class:"changing",
        children:[
            comket.Element("ion-icon", {name:"chevron-back"}),
            comket.h3({text:"1" ,id:"won" , onclick:won}),
            comket.h3({text:"2" ,id:"tow" , }),
            comket.h3({text:"3" ,id:"three" , onclick:three}),
            comket.h3({text:"4" ,id:"for" , onclick:fore}),
            comket.Element("ion-icon", {name:"chevron-forward"}),
        ]
    })
    return changing
}
import FindAgents   from "../../scripts/component/FindAgents.js";
import About   from "../../scripts/component/Abut.js";
import Lading   from "../../scripts/component/Lading.js";

function won(){
    document.body.innerHTML = ""
    document.body.append(FindAgents())
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







