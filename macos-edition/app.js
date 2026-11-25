const clock=document.getElementById('clock');
function tick(){clock.textContent=new Intl.DateTimeFormat(undefined,{hour:'2-digit',minute:'2-digit'}).format(new Date())}
tick();setInterval(tick,1000);
function openApp(name){document.querySelectorAll('.window').forEach(w=>w.classList.add('hidden'));const el=document.getElementById(name);if(el)el.classList.remove('hidden')}
document.querySelectorAll('[data-app]').forEach(btn=>btn.addEventListener('click',()=>openApp(btn.dataset.app)));
document.querySelectorAll('.traffic .close').forEach(btn=>btn.addEventListener('click',()=>btn.closest('.window').classList.add('hidden')));
document.getElementById('appearance').addEventListener('change',e=>document.body.classList.toggle('light',e.target.value==='light'));
document.getElementById('accent').addEventListener('change',e=>{const colors={blue:'#4779e6',purple:'#8c62d9',green:'#299b78'};document.querySelector('.hero-logo').style.background=colors[e.target.value]});
const form=document.getElementById('terminal-form'),input=document.getElementById('command'),output=document.getElementById('terminal-output');
form.addEventListener('submit',e=>{e.preventDefault();const cmd=input.value.trim().toLowerCase();if(!cmd)return;const answers={help:'Available demo commands: help, about, date, clear, version',about:'BudgieOS Mac Edition — an original desktop UI prototype.',date:new Date().toString(),version:'BudgieOS Mac Edition 1.0'};if(cmd==='clear'){output.textContent='';}else{const line=document.createElement('p');line.textContent='BudgieOS--$ '+cmd+'\n'+(answers[cmd]||'Command not found. Type help.');output.appendChild(line)}input.value='';});
