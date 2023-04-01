
import FindAgents from "../scripts/component/FindAgents.js";
// import Blogs from "../scripts/component/Blogs.js";


export default function Home(){
    document.body.innerHTML = ""
    document.body.appendChild(FindAgents()  )
}