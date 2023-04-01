import comket from "../../comket/html.js";

export default function Lading(){
let lading = comket.div({
    class:"lading",
    children:[Top() , InputSearch() , View() , We() , Your() , The() , Number() , Cards()  ,Changing() , Footer()]
})

return lading
}

function Top(){
    let top = comket.div({
        class:"top",
        children:[
            comket.div({children:[
                comket.h1({text:"People Over Profits"}),
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

function View(){
    let view = comket.div({
        class:"view",
        children:[
            comket.div({
                class:"find",
                children:[
                    comket.h3({text:"Find an Agent"}),
                    comket.p({text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio duis egestas auctor suspendisse nibh duis."}),
                    comket.button({text:"View Agents"}),
                ]}),

            comket.div({
                class:"find",
                children:[
                    comket.h3({text:"Find an Agent"}),
                    comket.p({text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio duis egestas auctor suspendisse nibh duis."}),
                    comket.button({text:"View Agents"}),
                ]}),  
                
            comket.div({
                class:"find",
                children:[
                    comket.h3({text:"Find an Agent"}),
                    comket.p({text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio duis egestas auctor suspendisse nibh duis."}),
                    comket.button({text:"View Agents"}),
                ]}),
        ]
    })
    return view
}

function We(){
    let we = comket.div({
        class:"we",
        children:[
            comket.h2({text:"Who we are"}),
            comket.p({text:"We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis rhoncus ipsum nunc consectetur lorem a eu amet ac. Bibendum est molestie dui arcu mi at cras malesuada nunc."}),
            comket.div({
                class:"imgs",
                children:[
                    comket.img({src:"media/we1.png"}),
                    comket.img({src:"media/we2.png",style:{marginTop:"40px"}}),
                    comket.img({src:"media/we3.png"}),
                    comket.img({src:"media/we4.png",style:{marginTop:"40px"}}),
                ]
            })
        ]
    })
    return we
}

function Your(){
    let your = comket.div({
        class:"your",
        children:[
            comket.h1({text:"Experience your home buying or selling journey with us"}),
            comket.div({
                class:"div1",
                children:[
                    comket.p({text:"As local community licensed real estate professionals, we know first hand why people live, work, and play here in Northeast Seattle. We have the knowledge & expertise to help you buy or sell your home, land, or property."}),
                    comket.img({src:"media/div1.png"})
                ]}),

            comket.div({
                class:"div1", style:{marginTop:"70px"},
                children:[
                    comket.img({src:"media/div2.png"}),
                    comket.p({text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis rhoncus ipsum nunc consectetur lorem a eu amet ac. Bibendum est molestie dui arcu mi at cras malesuada nunc."}),
                ]}),
        ]
    })
    return your
}

function The(){
    let the = comket.div({
        class:"the",
        children:[
            comket.h3({text:"We are the leader in the industry"}),
            comket.p({text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis rhoncus ipsum nunc consectetur lorem a eu amet ac. Bibendum est molestie dui arcu mi at cras malesuada nunc."}),
        ]
    })
    return the
}

function Number(){
    let number = comket.div({
        class:'number',
        children:[
            comket.div({
                children:[
                    comket.h1({text:"12"}),
                    comket.p({text:"Year of experience"}),
                ]}),
            comket.div({
                children:[
                    comket.h1({text:"20"}),
                    comket.p({text:"Awards gained"}),
                ]}),
            comket.div({
                children:[
                    comket.h1({text:"155"}),
                    comket.p({text:"Employees"}),
                ]}),
    ]
    })
    return number
}

function Cards(){
    let cards = comket.div({
        class:"cards",
        children:[
            comket.div({
                class:"cardsTop",
                children:[
                    comket.h2({text:"Featured listings"}),
                    comket.div({class:"click",
                    children:[
                        comket.p({text:"View Agents"}),
                        comket.img({src:"media/top.png"}),
                    ],
                })

                ]
            }),

            comket.div({
                class:"cardss",
                children:[
                    comket.div({
                        class:"card",
                        children:[
                            comket.img({src:"media/top1.png"}),
                            comket.h3({text:"5 Beds 5 Baths 5090 SqFt"}),
                            comket.div({
                                children:[
                                    comket.img({src:"media/home.png"}),
                                    comket.p({text:"Sold"}),
                                ]}),
                            comket.div({
                                children:[
                                    comket.img({src:"media/map.png"}),
                                    comket.p({text:"Seattle, WA"}),
                                ]}),
                            comket.div({
                                children:[
                                    comket.img({src:"media/dolar.png"}),
                                    comket.p({text:"$5,800,000"}),
                                ]}),
                            ]}),
                            comket.div({
                                class:"card",
                                children:[
                                    comket.img({src:"media/top2.png"}),
                                    comket.h3({text:"5 Beds 5 Baths 5090 SqFt"}),
                                    comket.div({
                                        children:[
                                            comket.img({src:"media/home.png"}),
                                            comket.p({text:"Sold"}),
                                        ]}),
                                    comket.div({
                                        children:[
                                            comket.img({src:"media/map.png"}),
                                            comket.p({text:"Seattle, WA"}),
                                        ]}),
                                    comket.div({
                                        children:[
                                            comket.img({src:"media/dolar.png"}),
                                            comket.p({text:"$5,800,000"}),
                                        ]}),
                                    ]}),
                            comket.div({
                                class:"card",
                                children:[
                                    comket.img({src:"media/top3.png"}),
                                    comket.h3({text:"5 Beds 5 Baths 5090 SqFt"}),
                                    comket.div({
                                        children:[
                                            comket.img({src:"media/home.png"}),
                                            comket.p({text:"Sold"}),
                                        ]}),
                                    comket.div({
                                        children:[
                                            comket.img({src:"media/map.png"}),
                                            comket.p({text:"Seattle, WA"}),
                                        ]}),
                                    comket.div({
                                        children:[
                                            comket.img({src:"media/dolar.png"}),
                                            comket.p({text:"$5,800,000"}),
                                        ]}),
                                    ]}),
                            comket.div({
                                class:"card",
                                children:[
                                    comket.img({src:"media/top4.png"}),
                                    comket.h3({text:"5 Beds 5 Baths 5090 SqFt"}),
                                    comket.div({
                                        children:[
                                            comket.img({src:"media/home.png"}),
                                            comket.p({text:"Sold"}),
                                        ]}),
                                    comket.div({
                                        children:[
                                            comket.img({src:"media/map.png"}),
                                            comket.p({text:"Seattle, WA"}),
                                        ]}),
                                    comket.div({
                                        children:[
                                            comket.img({src:"media/dolar.png"}),
                                            comket.p({text:"$5,800,000"}),
                                        ]}),
                                    ]}),
                            comket.div({
                                class:"card",
                                children:[
                                    comket.img({src:"media/top5.png"}),
                                    comket.h3({text:"5 Beds 5 Baths 5090 SqFt"}),
                                    comket.div({
                                        children:[
                                            comket.img({src:"media/home.png"}),
                                            comket.p({text:"Sold"}),
                                        ]}),
                                    comket.div({
                                        children:[
                                            comket.img({src:"media/map.png"}),
                                            comket.p({text:"Seattle, WA"}),
                                        ]}),
                                    comket.div({
                                        children:[
                                            comket.img({src:"media/dolar.png"}),
                                            comket.p({text:"$5,800,000"}),
                                        ]}),
                                    ]}),
                            comket.div({
                                class:"card",
                                children:[
                                    comket.img({src:"media/top6.png"}),
                                    comket.h3({text:"5 Beds 5 Baths 5090 SqFt"}),
                                    comket.div({
                                        children:[
                                            comket.img({src:"media/home.png"}),
                                            comket.p({text:"Sold"}),
                                        ]}),
                                    comket.div({
                                        children:[
                                            comket.img({src:"media/map.png"}),
                                            comket.p({text:"Seattle, WA"}),
                                        ]}),
                                    comket.div({
                                        children:[
                                            comket.img({src:"media/dolar.png"}),
                                            comket.p({text:"$5,800,000"}),
                                        ]}),
                                    ]}),
                            comket.div({
                                class:"card",
                                children:[
                                    comket.img({src:"media/top7.png"}),
                                    comket.h3({text:"5 Beds 5 Baths 5090 SqFt"}),
                                    comket.div({
                                        children:[
                                            comket.img({src:"media/home.png"}),
                                            comket.p({text:"Sold"}),
                                        ]}),
                                    comket.div({
                                        children:[
                                            comket.img({src:"media/map.png"}),
                                            comket.p({text:"Seattle, WA"}),
                                        ]}),
                                    comket.div({
                                        children:[
                                            comket.img({src:"media/dolar.png"}),
                                            comket.p({text:"$5,800,000"}),
                                        ]}),
                                    ]}),
                            comket.div({
                                class:"card",
                                children:[
                                    comket.img({src:"media/top8.png"}),
                                    comket.h3({text:"5 Beds 5 Baths 5090 SqFt"}),
                                    comket.div({
                                        children:[
                                            comket.img({src:"media/home.png"}),
                                            comket.p({text:"Sold"}),
                                        ]}),
                                    comket.div({
                                        children:[
                                            comket.img({src:"media/map.png"}),
                                            comket.p({text:"Seattle, WA"}),
                                        ]}),
                                    comket.div({
                                        children:[
                                            comket.img({src:"media/dolar.png"}),
                                            comket.p({text:"$5,800,000"}),
                                        ]}),
                                    ]}),
                            comket.div({
                                class:"card",
                                children:[
                                    comket.img({src:"media/top9.png"}),
                                    comket.h3({text:"5 Beds 5 Baths 5090 SqFt"}),
                                    comket.div({
                                        children:[
                                            comket.img({src:"media/home.png"}),
                                            comket.p({text:"Sold"}),
                                        ]}),
                                    comket.div({
                                        children:[
                                            comket.img({src:"media/map.png"}),
                                            comket.p({text:"Seattle, WA"}),
                                        ]}),
                                    comket.div({
                                        children:[
                                            comket.img({src:"media/dolar.png"}),
                                            comket.p({text:"$5,800,000"}),
                                        ]}),
                                    ]}),
            ]
            })
        ]
    })
    return cards
}


function Changing(){
    let changing = comket.div({
        class:"changing",
        children:[
            comket.Element("ion-icon", {name:"chevron-back"}),
            comket.h3({text:"1" ,id:"won" ,  onclick:won}),
            comket.h3({text:"2" ,id:"tow" ,   onclick:tow }),
            comket.h3({text:"3" ,id:"three" , onclick:three}),
            comket.h3({text:"4" ,id:"for" , }),
            comket.Element("ion-icon", {name:"chevron-forward"}),

        ]
    })

    return changing
}

import Blogs   from "../../scripts/component/Blogs.js";
import FindAgents   from "../../scripts/component/FindAgents.js";
import About   from "../../scripts/component/Abut.js";


function won(){
    document.body.innerHTML = ""
    document.body.append(FindAgents())
}
function tow(){
    document.body.innerHTML = ""
    document.body.append(Blogs())
}
function three(){
    document.body.innerHTML = ""
    document.body.append(About())
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





















