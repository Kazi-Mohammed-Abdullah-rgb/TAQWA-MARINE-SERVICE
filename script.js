/* TAQWA MARINE SERVICE - shared script. Edit contact info, names and image folder here. */
const WA='8801319798400', IMG='image/';           // WhatsApp number, image folder
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const wa=t=>`https://wa.me/${WA}?text=${encodeURIComponent(t)}`;
const card=(f,n,ic='')=>`<article class="p"><div class="ph"><img src="${IMG+f}" alt="${n}" loading="lazy"></div><h2>${n}</h2><a class="btn" target="_blank" rel="noopener" href="${wa('Hello, I want to inquire about: '+n)}">${ic}Inquire</a></article>`;
// if a .jpg / .jpeg name is wrong, try the other extension once
addEventListener('error',e=>{const i=e.target;if(i.tagName!=='IMG'||i.dataset.r)return;i.dataset.r=1;i.src=i.src.replace(/\.jpe?g$/i,m=>m.length>4?'.jpg':'.jpeg')},true);
 
/* ---------- header & footer (same on every page) ---------- */
const pg=location.pathname.split('/').pop()||'index.html';
const links=[['index.html','Home'],['shop.html','Shop'],['about.html','About Us'],['contact.html','Contact Us']];
const sub=[['nav','Navigation Communication Items'],['engine','Engine Machineries'],['auto','Automation & Safety System']];
$('#hdr').innerHTML=`<header><div class="top"><div class="wrap"><a class="logo" href="index.html"><img src="${IMG}logo-1.jpg" alt="Taqwa Marine Service"></a><div class="top-r"><ul class="info"><li><i class="fas fa-envelope"></i> taqwamarinebd@gmail.com</li><li><a href="tel:+8801319798400"><i class="fas fa-phone-alt"></i> +8801319-798400</a></li></ul><form class="search" action="shop.html"><input type="search" name="q" placeholder="Search..."><button aria-label="Search"><i class="fas fa-search"></i></button></form></div></div></div>
<div class="nav"><div class="wrap"><button class="burger" aria-label="Open menu"><i class="fas fa-bars"></i></button><ul class="menu"><li class="close"><button aria-label="Close menu"><i class="fas fa-times"></i></button></li>${links.map(l=>`<li><a class="${l[0]==pg?'on':''}" href="${l[0]}">${l[1]}</a></li>`).join('')}<li class="dd"><a class="${pg=='products.html'?'on':''}" href="products.html">Products &amp; Services <i class="fas fa-angle-down"></i></a><ul class="sub">${sub.map(s=>`<li><a href="products.html#${s[0]}">${s[1]}</a></li>`).join('')}</ul></li></ul><a class="btn light" href="${wa('Hello')}" target="_blank" rel="noopener">Message in Whatsapp</a></div></div></header>`;
$('#ftr').innerHTML=`<footer id="contact"><div class="wrap"><div class="cols"><div class="c1"><a class="logo-f" href="index.html"><img src="${IMG}logo-2.jpeg" alt="Taqwa Marine Service"></a><h5 class="fn">TAQWA MARINE SERVICE</h5><p class="fb">MARINE NAVIGATION / AUTOMATION / ELECTRONICS</p><div class="soc"><a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a><a href="${wa('Hello')}" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a></div></div>
<div class="c2"><h4>Useful Links</h4><ul><li><a href="privacy.html">Privacy Policy</a></li><li><a href="terms.html">Terms and Conditions</a></li></ul></div>
<div class="c3"><h4>Quick Links</h4><ul><li><a href="index.html">Home</a></li><li><a href="shop.html">Shop</a></li><li><a href="about.html">About Us</a></li><li><a href="contact.html">Contact</a></li><li><a href="contact.html">Message us on Whatsapp</a></li></ul></div></div>
<ul class="contact"><li><i class="fas fa-map-marker-alt"></i> Shagorika, Pahartali 4202, Chittagong, Bangladesh.</li><li><i class="fas fa-envelope"></i> E-mail: taqwamarinebd@gmail.com ,<br>machineries.taqwamarinebd@gmail.com</li><li><i class="fas fa-phone-alt"></i> Cell: +880 1319-798400 (24 Hours) (WhatsApp, WECHAT)</li></ul>
<p class="reg"><b>BIN</b> (Business Identification Number): 005199871-0503;<br><b>ERC</b> (Export Registration Certificate): 260315210263122</p>
<div class="bar"><a href="index.html">Taqwa Marine Service.</a><span>Copyright © 2026. All rights reserved.</span></div></div></footer>`;
 
/* ---------- mobile menu ---------- */
const menu=$('.menu');
$('.burger').onclick=()=>menu.classList.add('open');
$('.close button').onclick=()=>menu.classList.remove('open');
$$('.menu a').forEach(a=>a.onclick=()=>menu.classList.remove('open'));
 
/* ---------- hero text, counters ---------- */
$$('.rv').forEach((el,i)=>setTimeout(()=>el.classList.add('in'),150+i*200));
const io=new IntersectionObserver((es,o)=>es.forEach(en=>{if(!en.isIntersecting)return;const el=en.target,end=+el.dataset.n,t0=performance.now();
  const tick=t=>{const k=Math.min((t-t0)/3500,1);el.textContent=Math.round(end*k);if(k<1)requestAnimationFrame(tick)};requestAnimationFrame(tick);o.unobserve(el)}),{threshold:.4});
$$('[data-n]').forEach(c=>io.observe(c));
 
/* ---------- slider (data-pv="desktop,tablet,mobile" slides per view) ---------- */
function slider(box,ms){
  const tr=$('.track',box),n=tr.children.length;let i=0;
  const pv=()=>{const [d,t,m]=(box.dataset.pv||'2,1,1').split(',').map(Number);return innerWidth>1024?d:innerWidth>767?t:m};
  const go=()=>{const p=pv(),max=Math.max(n-p,0);if(i>max)i=0;if(i<0)i=max;[...tr.children].forEach(s=>s.style.flex=`0 0 ${100/p}%`);tr.style.transform=`translateX(-${i*100/p}%)`};
  if($('.l',box))$('.l',box).onclick=()=>{i--;go()};
  if($('.r',box))$('.r',box).onclick=()=>{i++;go()};
  setInterval(()=>{i++;go()},ms);addEventListener('resize',go);go();
}
 
/* ---------- home page ---------- */
const HOME=['Felcom - 18','Furuno AIS FA-150','JRC Navtex NCR-333','JRC MF/HF JSS-2150','Sailor MF/HF 6000 series','Sperry Gyro-compass X MK-I','Yokogawa Gyrocompass CMZ-900','Hydraulic Brattvrag M2202'];
const FEAT=['Furuno FAR 2827','JRC JMA 9122','Kelvin Hughes Manta Digital','Tokyo MEC PR-9000'];
const BRANDS=['ANSCHÜTZ','JRC','SAILOR','COBHAM','FURUNO'];
if($('#homeProd')){
  $('#homeProd').innerHTML=HOME.map((n,i)=>card(`product-${i+1}.jpeg`,n)).join('');
  $('#featTrack').innerHTML=FEAT.map((n,i)=>`<div class="slide">${card(`product-c${i+1}.jpeg`,n,'<i class="fas fa-shopping-cart"></i> ')}</div>`).join('');
  $('#brandTrack').innerHTML=BRANDS.map((n,i)=>`<div class="slide"><div class="bd"><img src="${IMG}brand-${i+1}.jpeg" alt="${n}"><span>${n}</span></div></div>`).join('');
  slider($('#featBox'),3500);slider($('#brandBox'),3000);
}
 
/* ---------- shop page: 15 per page, sorting, search ---------- */
if($('#shop')){
  const N=[
  "Sperry Gyro-compass X MK-I",
  "Yokogawa Gyrocompass CMZ-900",
  "Furuno Speedlog DS-80",
  "Tokyo Keiki TG-8000 gyrocomopass",
  "Furuno MF/HF FS-2570",
  "Furuno VHF FM-8800S",
  "Sailor VHF 6222",
  "Furuno VHF FM-8900S",
  "Brannstrom ODM Cleantrack 1000B",
  "Graviner OMD MK6",
  "Seil Seres ODME MK-III",
  "SAAB Rose-mount Tank-radar",
  "Schaller Automation Measuring Head - Visatron VN215/87 Plus",
  "Woodward Speed & Load Control Device",
  "Daihatsu 6DK-28",
  "Daihatsu 6DS-19A",
  "Daihatsu 6DSD-22F",
  "Daihatsu 6DS-18A",
  "GAGGREGATEBAU-NORD GMBH 125KVA Generator",
  "Yanmar M200L-EN",
  "Daihatsu 8DK-20",
  "Yanmar S165L-UN",
  "Yanmar 6N260L-EN",
  "Caterpillar 3512",
  "Sperre HV2/210",
  "Sperre HL2/105",
  "Hatlapa L-20",
  "Hatlapa W-220",
  "J.P. Sohn & Sauer WP-40L",
  "Alfa Laval OSD-18 Purifier",
  "Alfa Laval FOPX-611 Purifier",
  "Hamworthy V375",
  "Sabroe CMO 28 Compressor",
  "ABB Turbocharger VTR354",
]; // 34 product names, same order as our-product-1 ... our-product-34
  let q=(new URLSearchParams(location.search).get('q')||'').toLowerCase(),s='',p=1;
  const draw=()=>{
    let a=N.map((n,i)=>[n,i+1]).filter(x=>x[0].toLowerCase().includes(q));
    if(s)a.sort((x,y)=>s=='az'?x[0].localeCompare(y[0]):y[0].localeCompare(x[0]));
    const pages=Math.max(1,Math.ceil(a.length/15));p=Math.min(p,pages);const v=a.slice((p-1)*15,p*15);
    $('#grid').innerHTML=v.map(x=>card(`our-product-${x[1]}.jpeg`,x[0])).join('')||'<p>No products found.</p>';
    $('#count').textContent=`Showing ${a.length?(p-1)*15+1:0}–${(p-1)*15+v.length} of ${a.length} results`;
    $('#pager').innerHTML=pages>1?Array.from({length:pages},(_,k)=>`<button class="${k+1==p?'on':''}" data-p="${k+1}">${k+1}</button>`).join(''):'';
  };
  $('#sort').onchange=e=>{s=e.target.value;p=1;draw()};
  $('#pager').onclick=e=>{if(e.target.dataset.p){p=+e.target.dataset.p;draw();scrollTo({top:$('#shop').offsetTop,behavior:'smooth'})}};
  draw();
}
 
/* ---------- products & services page (data.js) ---------- */
if($('#catalog')){
  const S=[['nav','Navigation Communication Items',CATALOG.nav],['engine','Engine Machineries',CATALOG.engine],['auto','Automation & Safety System',CATALOG.auto]];
  $('#catalog').innerHTML=S.map(([id,t,d])=>`<section id="${id}" class="sector"><h2>${t}</h2>`+(typeof d[0]=='string'
    ?`<ul class="checks cols2">${d.map(x=>`<li><i class="fas fa-check"></i> ${x}</li>`).join('')}</ul>`
    :d.map((c,k)=>`<details><summary>${k+1}. ${c.t}</summary>${c.g.map(g=>`<div class="row"><b>${g[0]}</b><span>${g[1]}</span></div>`).join('')}${c.i?`<ul>${c.i.map(x=>`<li>${x}</li>`).join('')}</ul>`:''}</details>`).join(''))+'</section>').join('');
  if(location.hash){const e=$(location.hash);if(e)setTimeout(()=>e.scrollIntoView(),100)}
}
 
/* ---------- contact form -> opens WhatsApp ---------- */
if($('#cf'))$('#cf').onsubmit=e=>{e.preventDefault();const f=new FormData(e.target);
  open(wa(`Name: ${f.get('n')}\nPhone: ${f.get('p')}\nEmail: ${f.get('e')}\nMessage: ${f.get('m')}`),'_blank')};
 