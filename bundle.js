(()=>{"use strict";const t=document.querySelector(".todo__input"),e=document.querySelector(".todo__btn"),a=document.querySelector(".todo__list");let i=[];const s=()=>{let t="";i.forEach(((e,a)=>{t+=`<li class='todo__item ${e.important?"important":""}'>\n    <input id='task-${a}' type='checkbox' ${e.checked?"checked":""}>\n    <label class='todo__task' for='task-${a}'>${e.task}</label>\n    <img class='todo__image todo__image_important' src='https://imgs.search.brave.com/kpAyjn8oEOxnMSWGrYRFMG5CVaIWG3XNXrHfQDykYVg/rs:fit:958:980:1/g:ce/aHR0cHM6Ly9jZG4u/b25saW5ld2ViZm9u/dHMuY29tL3N2Zy9p/bWdfNDQ4MzA2LnBu/Zw' data-important='task-${a}'>\n    <img class='todo__image todo__image_important' src='https://imgs.search.brave.com/yYLQe6s-lpDNtkZqncwuX3FzqtuApP8E8Cr9t4FshEw/rs:fit:560:560:1/g:ce/aHR0cDovL3BpeHNl/Y3Rvci5jb20vY2Fj/aGUvZTZiN2Q2MGYv/YXY3NTBjMTU2ZWE1/NGQ3N2I5N2Q0LnBu/Zw' data-id='task-${a}' alt='Trash bin'>\n    </li>`})),a.innerHTML=t};localStorage.getItem("taskList")&&(i=JSON.parse(localStorage.getItem("taskList")),s()),e.addEventListener("click",(()=>{if(!t.value)return;const e={task:t.value,checked:!1,important:!1};i.push(e),t.value="",s(),localStorage.setItem("taskList",JSON.stringify(i))})),a.addEventListener("click",(t=>{if(t.target.hasAttribute("id")){const e=t.target.getAttribute("id"),s=a.querySelector(`[for='${e}']`).innerHTML;i.forEach((t=>{s===t.task&&(t.checked=!t.checked,localStorage.setItem("taskList",JSON.stringify(i)))}))}if(t.target.hasAttribute("data-id")){const e=t.target.getAttribute("data-id").slice(5);i.splice(e,1),s(),localStorage.setItem("taskList",JSON.stringify(i))}if(t.target.hasAttribute("data-important")){console.log(t);const e=t.target.getAttribute("data-important").slice(5);i.forEach(((t,a)=>{e==a&&(t.important=!t.important,console.log(t.important),s(),localStorage.setItem("taskList",JSON.stringify(i)))}))}}))})();