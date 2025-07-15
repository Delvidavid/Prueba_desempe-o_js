
import { CreateEvent } from '../componts/createEvent.js';
import { FormEvent } from '../componts/event.js';
import { router } from '../router/router.js';
import { requireAuth, logout } from './auth.js';


document.addEventListener("DOMContentLoaded",()=>{

    const user = requireAuth();


document.getElementById("welcome").textContent = `${user.role}`;
document.getElementById("name").textContent = `${user.name}`;
document.getElementById("logout").addEventListener("click", logout);
const main = document.querySelector("containerEvents")

document.getElementById("buttonEvent").addEventListener("click",(e)=>{
    e.defaultPrevented();

    const ref = e.getAttribute("href")
    const patch = ref.replace("#","/")
    
    main.innerHTML = router[patch]()

})


const xs = FormEvent().text

document.getElementById("add").addEventListener("click",()=>{

    main.innerHTML= xs

})
})

