'use strict';
const modes={
 showdown:{name:'Last trainer standing.',description:'Defeat the other teams. Monsters do not respawn in Monster Showdown, so every decision counts.',tip:'Pick elemental monsters or a team of Neutral monsters in Free.',access:'Included in Free',label:'Monster Showdown',image:'showdown',monster:'fire',token:'neutral'},
 hunt:{name:'Every knockout counts.',description:'Defeat monsters to reach the victory point target. Fallen monsters can return, so the fight is far from over.',tip:'Set the victory point target before your battle.',access:'Full Version',label:'Monster Hunt',image:'monster-hunt',monster:'evolved',token:'grass'},
 bounty:{name:'Catch the moving target.',description:'Defeat the bounty monster to score a point. It moves, changes element and returns elsewhere after each knockout.',tip:'The first trainer to reach the chosen hunt target wins. The default target is 3.',access:'Full Version',label:'Bounty Hunt',image:'bounty',monster:'bounty-neutral',token:'water'},
 flags:{name:'Protect yours. Take theirs.',description:'Bring an enemy flag to your home territory to eliminate its owner. A defender on the flag must be defeated before the flag can be picked up.',tip:'Monsters do not respawn. Guard your flag and choose your carrier carefully.',access:'Full Version',label:'Capture the Flag',image:'flags',monster:'grass',token:'flag'}
};
const tabs=[...document.querySelectorAll('[data-mode]')];
function selectMode(tab){
 const m=modes[tab.dataset.mode];if(!m)return;
 tabs.forEach(t=>{const active=t===tab;t.setAttribute('aria-selected',String(active));t.tabIndex=active?0:-1});
 document.querySelector('#mode-panel').setAttribute('aria-labelledby',tab.id);
 for(const [id,key]of [['mode-name','name'],['mode-description','description'],['mode-tip','tip'],['mode-access','access']])document.getElementById(id).textContent=m[key];
 const image=document.querySelector('#mode-image');image.src=`assets/${m.image}.webp`;image.alt=`${m.label} sample Android game`;
 const preview=document.querySelector('#mode-preview');preview.dataset.preview=image.src;preview.dataset.caption=`${m.label} · ${m.access} · Sample Android game`;
 document.querySelector('#mode-caption').textContent=`${m.label} · ${m.access}`;
 for(const [id,key]of [['mode-monster','monster'],['mode-token','token']]){const art=document.getElementById(id);art.src=`assets/${m[key]}.webp`;art.alt=m[key]==='flag'?'Player flag':`${m[key]} monster`}
}
tabs.forEach((tab,i)=>{tab.addEventListener('click',()=>selectMode(tab));tab.addEventListener('keydown',e=>{let next;if(e.key==='ArrowRight')next=(i+1)%tabs.length;if(e.key==='ArrowLeft')next=(i+tabs.length-1)%tabs.length;if(e.key==='Home')next=0;if(e.key==='End')next=tabs.length-1;if(next!==undefined){e.preventDefault();selectMode(tabs[next]);tabs[next].focus()}})});
const dialog=document.querySelector('#screenshot-dialog');let previousFocus;
document.querySelectorAll('[data-preview]').forEach(button=>button.addEventListener('click',()=>{previousFocus=button;document.querySelector('#screenshot-full').src=button.dataset.preview;document.querySelector('#screenshot-full').alt=button.dataset.caption;document.querySelector('#screenshot-caption').textContent=button.dataset.caption;dialog.showModal()}));
document.querySelector('#close-preview')?.addEventListener('click',()=>dialog.close());
dialog?.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
dialog?.addEventListener('close',()=>previousFocus?.focus());
