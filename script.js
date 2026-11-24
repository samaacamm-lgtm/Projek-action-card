const $=(s,r=document)=>r.querySelector(s),wait=ms=>new Promise(r=>setTimeout(r,ms)),shuf=a=>{for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
const P={sword:'<path d="m14.5 17.5-11.5-11.5v-3h3l11.5 11.5M13 19l6-6M16 16l4 4M19 21l2-2"/>',shield:'<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/>',ban:'<circle cx="12" cy="12" r="9"/><path d="m5.600 5.600 12.800 12.800"/>',up:'<path d="m17 11-5-5-5 5M17 18l-5-5-5 5"/>',hour:'<path d="M5 22h14M5 2h14M17 22v-4.200a2 2 0 0 0-.600-1.400L12 12l-4.400 4.400A2 2 0 0 0 7 17.800V22M7 2v4.200a2 2 0 0 0 .600 1.400L12 12l4.400-4.400A2 2 0 0 0 17 6.200V2"/>'};
const ic=k=>`<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${P[k]}</svg>`;
const T={atk:['#F26A1B','Attack','sword'],def:['#2563EB','Defense','shield'],deb:['#7E3FBF','Debuff','ban'],buff:['#16A34A','Buff','up'],time:['#E23C86','Time','hour']},ORD=['atk','def','deb','buff','time'];
const HD=[
['The Colossal Tank',18,210,'Tidak ada efek','Murni mengandalkan HP tebal.'],
['The Chronomancer',15,190,'Game Start','Mulai dengan 1 Time Card di tangan (+6 kartu acak).'],
['The Saboteur',14,280,'Game Start','Pasang 1 Debuff Card langsung aktif di meja lawan.'],
['The Berserker',13,8,'Game Start','Hancurkan 2 Health Card lawan di awal game.'],
['The Tactician',15,45,'Game Start','Intip 3 kartu di tangan lawan selama 5 detik; kartunya tetap bertanda.'],
['The Minimalist',16,215,'Game Start','Kedua pemain hanya mendapat 5 kartu awal (bukan 7).']];
const F='#05070e',dots=(c,s,n=16)=>Array.from({length:n},(_,i)=>`<circle cx='${(i*53+s*37)%200+5}' cy='${(i*31+s*19)%86+6}' r='${(.6+((i+s)%3)*.45).toFixed(2)}' fill='${c}' opacity='${(.35+((i*7+s)%5)*.12).toFixed(2)}'/>`).join('');
const sil=(id,c,bg,fig)=>`<svg viewBox='0 0 210 100' preserveAspectRatio='xMidYMax meet' aria-hidden='true'><defs><radialGradient id='s${id}' cx='50%' cy='52%' r='52%'><stop offset='0' stop-color='${c}' stop-opacity='.95'/><stop offset='.5' stop-color='${c}' stop-opacity='.3'/><stop offset='1' stop-color='${c}' stop-opacity='0'/></radialGradient></defs><rect width='210' height='100' fill='url(#s${id})'/>${bg}<ellipse cx='105' cy='97' rx='52' ry='4' fill='${c}' opacity='.4'/><g fill='${F}'>${fig}</g></svg>`;
const SIL=[
/* Colossal Tank */ sil('t','#5aa0e0',dots('#a9cdf5',1)+`<circle cx='105' cy='52' r='44' fill='none' stroke='#7fb0e8' stroke-opacity='.4' stroke-width='1.2'/>`,`<path d='M97 24V16Q97 9 105 9Q113 9 113 16V24Z'/><path d='M103 10Q105 2 112 4Q108 7 108 11Z'/><path d='M99 17H111' stroke='#a9cdf5' stroke-width='1.2'/><rect x='99' y='23' width='12' height='6'/><ellipse cx='84' cy='34' rx='13' ry='8'/><ellipse cx='126' cy='34' rx='13' ry='8'/><path d='M72 32 66 26 76 29ZM138 32 144 26 134 29Z'/><path d='M90 30H120L123 62H87Z'/><path d='M87 62H123L126 78H84Z'/><path d='M85 78H104L103 94H83ZM106 78H125L127 94H107Z'/><rect x='79' y='93' width='26' height='4' rx='2'/><rect x='106' y='93' width='26' height='4' rx='2'/><path d='M130 36 137 40 139 68H131Z'/><rect x='130' y='67' width='9' height='7' rx='2'/><path d='M52 28Q52 23 57 23H79Q84 23 84 28V74L68 93 52 74Z' stroke='#8fc0f5' stroke-width='1.4'/><path d='M68 28V82M54 46H82' stroke='#8fc0f5' stroke-opacity='.55' stroke-width='1' fill='none'/>`),
/* Chronomancer */ sil('c','#22d3ee',`<circle cx='105' cy='50' r='42' fill='none' stroke='#22d3ee' stroke-width='1.3' stroke-opacity='.85'/><circle cx='105' cy='50' r='36' fill='none' stroke='#67e8f9' stroke-width='4' stroke-opacity='.5' stroke-dasharray='1.2 17.65'/><path d='M105 50V20M105 50 126 62' stroke='#67e8f9' stroke-opacity='.7' stroke-width='1.4'/>`+dots('#a5f3fc',2),`<circle cx='132' cy='13' r='13' fill='#22d3ee' opacity='.35'/><path d='M105 12Q94 18 95 34L98 40H112L115 34Q116 18 105 12Z'/><circle cx='101' cy='28' r='1.3' fill='#67e8f9'/><circle cx='109' cy='28' r='1.3' fill='#67e8f9'/><path d='M92 40Q105 36 118 40L122 54H88Z'/><path d='M92 52H118L130 88 122 84 117 92 110 85 105 93 100 85 93 92 88 84 80 88Z'/><path d='M92 42 82 66 88 68 96 52Z'/><path d='M118 42 130 34 133 38 123 54Z'/><rect x='130.4' y='21' width='2.6' height='68' rx='1'/><path d='M127 5H137L133.6 13 137 21H127L130.4 13Z' fill='#a5f3fc'/>`),
/* Saboteur */ sil('s','#7c3aed',`<ellipse cx='70' cy='92' rx='34' ry='8' fill='#a78bfa' opacity='.2'/><ellipse cx='140' cy='90' rx='30' ry='7' fill='#a78bfa' opacity='.18'/><circle cx='60' cy='80' r='10' fill='#c4b5fd' opacity='.12'/><circle cx='150' cy='78' r='8' fill='#c4b5fd' opacity='.12'/><path d='M40 70Q55 60 50 48Q64 56 62 70Z' fill='#c4b5fd' opacity='.12'/>`+dots('#c4b5fd',3,12),`<path d='M88 38Q92 26 104 27Q112 29 113 38L108 44H96Z'/><path d='M88 38 80 44 92 42Z'/><path d='M103 35H110' stroke='#c4b5fd' stroke-width='1.4'/><path d='M92 42 112 44 118 62 104 72 90 66 86 52Z'/><path d='M92 44 74 70 66 88 72 84 76 90 82 82 90 66Z'/><path d='M112 46 128 54 126 58 110 54Z'/><path d='M128 55 148 46 147 50 130 60Z' fill='#ddd6fe'/><path d='M96 52 84 62 88 66 98 58Z'/><path d='M86 63 66 72 68 75 88 67Z' fill='#ddd6fe'/><path d='M104 68 124 76 120 82 102 76Z'/><path d='M120 78 126 80 124 96H116L118 86Z'/><path d='M96 70 84 80 88 84 100 76Z'/><path d='M86 82 94 84 92 96H80L84 90Z'/>`),
/* Berserker */ sil('b','#ff3b30',dots('#ffb199',4,18)+dots('#ffb347',9,10)+`<circle cx='105' cy='50' r='46' fill='none' stroke='#ff6a3d' stroke-opacity='.35' stroke-width='1.2'/>`,`<path d='M94 20 86 12 96 14 95 6 103 12 108 4 110 13 118 10 113 20 109 24 96 24Z'/><circle cx='103' cy='25' r='6.5'/><circle cx='83' cy='41' r='8'/><circle cx='123' cy='41' r='8'/><path d='M85 34Q94 30 103 32Q112 30 121 34L117 62H89Z'/><path d='M80 38 90 44 118 52 116 57 88 52 78 46Z'/><path d='M120 36 132 30 136 35 124 46Z'/><path d='M88 60H118V66H88Z'/><path d='M88 62H102L96 80 98 96H84L86 80Z'/><path d='M104 62H118L124 80 128 96H114L112 82Z'/><path d='M82 96 144 16 148 19 86 98Z' stroke='#ff8a65' stroke-opacity='.6' stroke-width='.7'/><path d='M138 20Q160 6 166 30 150 24 140 32Z' stroke='#ff8a65' stroke-width='1.2'/><path d='M137 19 128 12 138 23Z'/>`),
/* Tactician */ sil('a','#f5b301',`<path d='M24 78 52 58 84 68M130 36 160 50 188 30M30 40 60 30 78 44' fill='none' stroke='#ffd166' stroke-opacity='.5' stroke-width='1' stroke-dasharray='3 3'/>`+[[24,78],[52,58],[84,68],[130,36],[160,50],[188,30],[30,40],[60,30],[78,44]].map(([x,y])=>`<circle cx='${x}' cy='${y}' r='2.2' fill='#ffd166'/>`).join('')+dots('#ffe29a',5,10),`<path d='M97 18 93 38H117L113 18 109 30H101Z'/><circle cx='105' cy='22' r='6.5'/><path d='M92 37H118L126 50 128 70 124 96H86L82 70 84 50Z'/><path d='M105 40V96' stroke='#ffd166' stroke-opacity='.4' stroke-width='.8'/><path d='M118 42 128 56 126 76 120 76 120 58Z'/><path d='M90 42 82 58 96 66 100 60 90 56Z'/><rect x='96' y='52' width='13' height='18' rx='1.5' fill='#1a1405' stroke='#ffd166' stroke-width='1' transform='rotate(-8 102 61)'/><path d='M102.5 57 106 61 102.5 65 99 61Z' fill='#ffd166'/>`),
/* Minimalist */ sil('m','#e8edf5',`<circle cx='105' cy='50' r='40' fill='none' stroke='#f1f5f9' stroke-width='1.8'/><circle cx='105' cy='50' r='46' fill='none' stroke='#cbd5e1' stroke-opacity='.35' stroke-width='1'/>`+dots('#f8fafc',6,7),`<path d='M105 10 127 28Q105 32 83 28Z'/><rect x='101' y='29' width='8' height='7'/><path d='M96 36H114L120 50 124 96H86L90 50Z'/><path d='M94 38 84 62 90 64 96 48Z'/><path d='M114 38 126 56 118 62 112 50Z'/><path d='M124 55 66 72 65 75 124 59Z' stroke='#e2e8f0' stroke-width='.8'/><circle cx='121' cy='57' r='2.6' stroke='#e2e8f0' stroke-width='.8'/>`)];

const root=$('#root');let S=null,DF=1,MODE='ai',V='p';const LIM=4,NET={};
/* Suara: dibuat dengan Web Audio, tanpa file */
let AC=null,MUTE=false;try{MUTE=localStorage.getItem('mute')=='1'}catch(e){}
const au=()=>{if(!AC){try{AC=new(window.AudioContext||window.webkitAudioContext)()}catch(e){}}if(AC&&AC.state=='suspended')AC.resume();return AC};
const tone=(f,t,d,ty='sine',v=.15,f2)=>{const a=au();if(!a||MUTE)return;const o=a.createOscillator(),g=a.createGain(),s=a.currentTime+t;o.type=ty;o.frequency.setValueAtTime(f,s);if(f2)o.frequency.exponentialRampToValueAtTime(f2,s+d);g.gain.setValueAtTime(0,s);g.gain.linearRampToValueAtTime(v,s+.01);g.gain.exponentialRampToValueAtTime(.0001,s+d);o.connect(g);g.connect(a.destination);o.start(s);o.stop(s+d+.02)};
const noise=(t,d,v=.2,fr=1800,ty='lowpass')=>{const a=au();if(!a||MUTE)return;const n=a.sampleRate*d|0,b=a.createBuffer(1,n,a.sampleRate),x=b.getChannelData(0);for(let i=0;i<n;i++)x[i]=(Math.random()*2-1)*(1-i/n);const s=a.createBufferSource(),f=a.createBiquadFilter(),g=a.createGain();s.buffer=b;f.type=ty;f.frequency.value=fr;g.gain.value=v;s.connect(f);f.connect(g);g.connect(a.destination);s.start(a.currentTime+t)};
const SFX={sel:()=>tone(660,0,.06,'triangle',.08),desel:()=>tone(440,0,.05,'triangle',.06),ui:()=>tone(520,0,.05,'sine',.07),draw:()=>{noise(0,.1,.14,2500,'highpass');tone(300,.02,.08,'sine',.05)},shuf:()=>{for(let i=0;i<5;i++)noise(i*.05,.06,.1,2500,'highpass')},play:()=>{noise(0,.18,.18,1200);tone(200,0,.15,'sine',.1,120)},hit:n=>{noise(0,.2+.05*n,.3,500+n*150);tone(150,0,.2+.06*n,'sawtooth',.18,45)},heal:()=>[523,659,784].forEach((f,i)=>tone(f,i*.09,.25,'sine',.12)),deb:()=>{tone(300,0,.5,'sawtooth',.12,90);tone(150,0,.5,'square',.06,60)},buff:()=>[784,988,1319].forEach((f,i)=>tone(f,i*.06,.2,'triangle',.1)),cancel:()=>tone(400,0,.25,'square',.1,120),time:()=>{for(let i=0;i<6;i++)tone(i%2?900:700,i*.07,.05,'square',.06)},turn:()=>{tone(880,0,.12,'sine',.1);tone(1175,.1,.2,'sine',.1)},win:()=>[523,659,784,1047].forEach((f,i)=>tone(f,i*.14,.4,'triangle',.15)),lose:()=>[392,330,262,196].forEach((f,i)=>tone(f,i*.2,.45,'sawtooth',.1))};
const sfx=(k,a,r)=>{try{SFX[k]&&SFX[k](a)}catch(e){}if(!r&&MODE=='host'&&NET.c&&!['ui','sel','desel','turn','win','lose'].includes(k))send({t:'sfx',k,a})};
const sfxFor=(w,k)=>{if(MODE=='ai'){if(w=='p')sfx(k)}else if(w==V)sfx(k,0,1);else send({t:'sfx',k})};
const fxs=(w,cs,b4,L)=>{const o=w=='p'?'a':'p',dmg=b4.hp[o]-S.hp[o],gn=S.hp[w]-b4.hp[w];let dl=0;const q=(k,a)=>{setTimeout(()=>sfx(k,a),dl);dl+=260};if(cs.some(c=>c.t=='time'))q('time');if(L.some(l=>l.startsWith('Buff membatalkan')))q('buff');if(L.some(l=>l.startsWith('Debuff menggagalkan')))q('cancel');if(dmg>0)q('hit',dmg);if(gn>0)q('heal');if(S.deb[o]&&!b4.deb[o])q('deb')};
const mt=document.getElementById('mt'),mtu=()=>{mt.innerHTML=`<svg viewBox='0 0 24 24' width='20' height='20' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M11 5 6 9H2v6h4l5 4z'/>${MUTE?`<path d='m22 9-6 6M16 9l6 6'/>`:`<path d='M15.5 8.5a5 5 0 0 1 0 7M19 5a9 9 0 0 1 0 14'/>`}</svg>`;mt.setAttribute('aria-label',MUTE?'Nyalakan suara':'Matikan suara')};mtu();mt.onclick=()=>{MUTE=!MUTE;try{localStorage.setItem('mute',MUTE?'1':'0')}catch(e){}mtu();if(!MUTE)sfx('ui')};
const DN=[['Easy','#22c55e','Bot sering memilih acak, kadang melewatkan giliran, dan tidak memakai stack.'],['Normal','#3b82f6','Bot bermain wajar tapi sering meleset, dan tidak memakai stack Time.'],['Hard','#f97316','Bot menghitung hasil tiap kemungkinan main, termasuk stack Buff dan Time.'],['Extreme','#ef4444','Seperti Hard, ditambah bot memperhitungkan balasanmu dan membaca kartu di tanganmu.']];
const nm=w=>'{'+w+'}',nmc=c=>T[c.t][1]+(c.v?' '+c.v*100:''),lg=(t,w)=>{S.log.push([t,w]);if(S.log.length>70)S.log.shift()};
const rank=c=>c.t=='atk'?10+c.v*3:c.t=='def'?8+c.v*2:c.t=='time'?9:c.t=='deb'?7:6;
const key=c=>c.t+c.v,spread=a=>{shuf(a);for(let i=1;i<a.length;i++){const ok=c=>![1,2,3].some(d=>i-d>=0&&key(a[i-d])==key(c));if(!ok(a[i])){const j=a.findIndex((c,x)=>x>i&&ok(c));if(j>0){[a[i],a[j]]=[a[j],a[i]]}}}return a};
const mk=()=>{let id=0,d=[];[['atk',1,12],['atk',2,10],['atk',3,5],['def',1,9],['def',2,6],['deb',0,7],['buff',0,7],['time',0,4]].forEach(([t,v,n])=>{for(let i=0;i<n;i++)d.push({id:++id,t,v})});return spread(d)};
const val=cs=>{const n=cs.length,tm=cs.filter(c=>c.t=='time').length,bf=cs.filter(c=>c.t=='buff').length,mn=n-tm-bf;if(n==1)return mn==1;if(tm)return n==3&&tm==1&&bf<=1;if(bf)return n==2&&bf==1&&mn==1;return false};
const hint=cs=>{if(!cs.length)return 'Pilih 1 kartu. Buff butuh 1 kartu pendamping, Time butuh 2.';if(val(cs))return 'Siap dimainkan.';if(cs.some(c=>c.t=='time'))return `Time wajib di-stack dengan 2 kartu lain (maks. 1 Buff). Terpilih ${cs.length-1} dari 2.`;if(cs.some(c=>c.t=='buff'))return 'Buff wajib di-stack dengan 1 Attack, Defense, atau Debuff.';return 'Beberapa kartu hanya bisa dimainkan bersama Buff atau Time.'};

function calc(w,cs,st){
 const o=w=='p'?'a':'p',L=[],mains=cs.filter(c=>c.t=='atk'||c.t=='def'||c.t=='deb'),bf=cs.some(c=>c.t=='buff'),tm=cs.some(c=>c.t=='time');
 if(st.deb[w]){st.deb[w]=0;if(bf)L.push('Buff membatalkan Debuff, kartu tetap sah');else{const x=mains.shift();L.push(x?`Debuff menggagalkan ${nmc(x)}`:'Debuff terpakai')}}else if(bf)L.push('Buff tidak terpakai karena tidak ada Debuff');
 const ap=c=>{if(c.t=='atk'){const d=Math.min(c.v,st.hp[o]);st.hp[o]-=d;L.push(`${nm(w)} menghancurkan ${d} Health Card ${nm(o)}`)}else if(c.t=='def'){const g=Math.min(c.v,st.pool);st.pool-=g;st.hp[w]+=g;L.push(`${nm(w)} menambah ${g} Health Card dari cadangan`)}else{st.deb[o]=1;L.push(`${nm(w)} memasang Debuff di meja ${nm(o)}`)}};
 mains.forEach(ap);
 if(tm){const b=mains.filter(c=>c.t!='deb').sort((x,y)=>rank(y)-rank(x))[0];if(b){L.push('Time menggandakan '+nmc(b));ap(b)}else L.push('REC')}
 return L;
}
const sc=(w,cs,B=S)=>{const o=w=='p'?'a':'p',st={hp:{...B.hp},pool:B.pool,deb:{...B.deb}},b=st.hp[o],m=st.hp[w],d0=st.deb[o],L=calc(w,cs,st),dmg=b-st.hp[o],gain=st.hp[w]-m,bf=cs.some(c=>c.t=='buff');let s=dmg*10+gain*(m<=b?9:5);if(st.deb[o]&&!d0)s+=S.hand[o].length>=3?5:3;if(dmg>=b)s+=1e3;if(B.deb[w])s+=bf?3:2.5;if(L.includes('REC'))s+=Math.min(S.disc.length,2)*2;return s-cs.reduce((a,c)=>a+rank(c)*.12,0)};
const plays=(w,B=S)=>{const h=S.hand[w],r=[],add=cs=>{if(val(cs))r.push({cs,s:sc(w,cs,B)})};h.forEach((a,i)=>{add([a]);h.forEach((b,j)=>{if(j>i){add([a,b]);h.forEach((c,k)=>{if(k>j)add([a,b,c])})}})});return r};

function pull(w){if(!S.deck.length&&S.disc.length){S.deck=spread(S.disc);S.disc=[];lg('Discard Pile dikocok menjadi dek baru');sfx('shuf')}if(!S.deck.length)return 0;const L=S.deck.length;let bi=L-1,bs=1e9;for(let x=0;x<Math.min(5,L);x++){const q=S.deck[L-1-x],s=S.hand[w].filter(h=>key(h)==key(q)).length+Math.random()*.9;if(s<bs){bs=s;bi=L-1-x}}const c=S.deck.splice(bi,1)[0];c.n=1;S.hand[w].push(c);return 1}
function dr(w,n){const o=w=='p'?'a':'p';let a=0,b=0;sfx('draw');while(n-->0)a+=pull(w);for(let i=0;i<a;i++)b+=pull(o);lg(`${nm(w)} ambil ${a} kartu, ${nm(o)} otomatis ambil ${b} kartu (Shared Draw)`,w)}
function fix(){if(MODE=='ai')while(S.hand.a.length>10){const c=S.hand.a.sort((x,y)=>rank(x)-rank(y)).shift();S.disc.push(c);lg(`{a} membuang ${nmc(c)} (batas 10 kartu)`,'a')}S.mode=S.hand.p.length>10?'p':S.hand.a.length>10?'a':0}
function chkEmpty(){['p','a'].forEach(w=>{if(!S.hand[w].length){lg(`${nm(w)} kehabisan kartu di tangan`,w);dr(w,7)}})}
const free=async()=>{while(S.mode&&!S.over)await wait(300)};
function win(){if(S.hp.p>0&&S.hp.a>0)return 0;S.over=S.hp.a<=0?'p':'a';S.busy=true;sfxFor('p',S.over=='p'?'win':'lose');sfxFor('a',S.over=='a'?'win':'lose');lg(`Health Card ${nm(S.over=='p'?'a':'p')} habis. ${nm(S.over)} menang!`);R();return 1}

function init(pi,ai0){
 const ai=ai0??(Math.random()*6|0),g=S={h:{p:pi,a:ai},hp:{p:HD[pi][1],a:HD[ai][1]},hand:{p:[],a:[]},deck:mk(),disc:[],pool:20,deb:{p:0,a:0},turn:'p',sel:[],busy:true,over:0,zone:[],log:[],pv:{},rv:{p:[],a:[]},mode:0,df:DF,dc:0};
 const n=pi==5||ai==5?5:7;
 ['p','a'].forEach(w=>{let k=n;if(g.h[w]==1){g.hand[w].push(g.deck.splice(g.deck.findIndex(c=>c.t=='time'),1)[0]);k--}while(k-->0)pull(w)});
 [...g.hand.p,...g.hand.a].forEach(c=>c.n=1);
 if(MODE=='ai')lg('Tingkat kesulitan: '+DN[DF][0]);lg(`{p}: ${HD[pi][0]} melawan {a}: ${HD[ai][0]}. Masing-masing mendapat ${n} kartu.`);
 ['p','a'].forEach(w=>{const o=w=='p'?'a':'p',h=g.h[w];
  if(h==1)lg(`${nm(w)} mulai dengan 1 Time Card di tangan`,w);
  if(h==2){g.deb[o]=1;lg(`${nm(w)} memasang Debuff di meja ${nm(o)}`,w)}
  if(h==3){g.hp[o]=Math.max(0,g.hp[o]-2);lg(`${nm(w)} menghancurkan 2 Health Card ${nm(o)}`,w)}
  if(h==4){const m=shuf([...g.hand[o]]).slice(0,3);m.forEach(c=>c.seen=1);lg(`${nm(w)} mengintip 3 kartu di tangan ${nm(o)}`,w);g.rv[w]=m.map(c=>c.id);setTimeout(()=>{if(S===g){g.rv[w]=[];R()}},5000)}});
 g.pv={...g.hp};g.busy=false;sfx('shuf');setTimeout(()=>{if(g.deb.p||g.deb.a)sfx('deb');if(g.hp.p<HD[pi][1]||g.hp.a<HD[ai][1])sfx('hit',2)},350);lg('Giliran {p}: mainkan 1 kartu (atau stack), ambil kartu, atau akhiri giliran.');R();
}

async function play(w,cs){
 const g=S;g.busy=true;g.sel=[];sfx('play');
 cs.forEach(c=>g.hand[w].splice(g.hand[w].indexOf(c),1));
 g.zone=cs.map(c=>({...c,n:0,pop:1,z:w}));
 lg(`${nm(w)} memainkan ${cs.map(nmc).join(' + ')}`,w);R();
 await wait(1300);if(S!==g)return;
 const b4={hp:{...g.hp},deb:{...g.deb}},L0=calc(w,cs,g);fxs(w,cs,b4,L0);L0.forEach(l=>{if(l=='REC'){const d=g.disc.sort((a,b)=>rank(b)-rank(a)).splice(0,2);d.forEach(c=>c.n=1);g.hand[w].push(...d);lg(`Time mengambil kembali ${d.length} kartu terbaik dari Discard Pile`,w)}else lg(l,w)});
 g.disc.push(...cs);g.zone=[];
 chkEmpty();fix();R();
 if(win())return;
 await wait(800);if(S!==g)return;
 await free();if(S!==g)return;
 g.turn=w=='p'?'a':'p';g.dc=0;g.busy=MODE=='ai'&&g.turn=='a';
 if(MODE=='ai'&&g.turn=='a'){R();aiTurn()}else{lg('Giliran '+nm(g.turn));R();sfxFor(g.turn,'turn')}
}
async function aiTurn(){
 const g=S;g.busy=true;R();await wait(1000);if(S!==g)return;await free();if(S!==g)return;
 for(let k=0;k<3;k++){
  const df=g.df;let pl=plays('a');if(df<2){pl=pl.filter(p=>p.cs.length<(df?3:2));pl.forEach(p=>p.s+=(Math.random()-.5)*(df?6:50))}pl.sort((x,y)=>y.s-x.s);if(df==3){pl=pl.slice(0,12);pl.forEach(p=>{p.raw=p.s;if(p.s>=1e3)return;const st={hp:{...g.hp},pool:g.pool,deb:{...g.deb}};calc('a',p.cs,st);p.s-=.35*plays('p',st).reduce((m,q)=>Math.max(m,q.s),0)});pl.sort((x,y)=>y.s-x.s)}
  const b=pl[0],want=df?g.hand.a.length<=5&&g.hand.p.length<7&&k<2&&g.deck.length+g.disc.length>=2:g.hand.a.length<=3&&k<1&&Math.random()<.5;
  if(df==0&&k==0&&Math.random()<.2)break;
  const rs=b&&(b.raw??b.s);if(b&&(rs>=4||(rs>=1&&!want)))return play('a',b.cs);
  if(want){g.dc++;dr('a',1);fix();R();await wait(900);if(S!==g)return;await free();if(S!==g)return;continue}
  break;
 }
 lg('Bot mengakhiri giliran','a');g.turn='p';g.dc=0;g.busy=false;lg('Giliranmu',null);R();sfx('turn');
}

const cd=c=>{const[col,l,i]=T[c.t];return `<div class="ac ${S.sel.includes(c.id)?'sel':''} ${c.n?'deal':''} ${c.pop?'pop z'+c.z:''}" data-id="${c.id}" style="--c:${col}" title="${l}${c.v?' '+c.v*100:''}">${c.seen?'<u title="Ditandai Tactician"></u>':''}<b>${l}</b>${c.v?`<em>${c.v*100}</em>`:''}${ic(i)}<small>${c.t=='buff'?'Stack +1':c.t=='time'?'Stack +2':'Langsung'}</small></div>`};
const stk=w=>{const n=S.hp[w],p=S.pv[w]??n,nw=Math.max(0,n-p);return Array.from({length:n},(_,i)=>`<i class="${i>=n-nw?'new':''}"></i>`).join('')+Array.from({length:Math.max(0,p-n)},()=>'<i class="gone"></i>').join('')};
const side=w=>{const i=S.h[w],d=HD[i];return `<div class="side"><div class="hero ${S.pv[w]>S.hp[w]?'hit':''}" style="--hu:${d[2]}"><div class="art">${SIL[i]}</div><h4>${d[0]}</h4><div class="hpn">${S.hp[w]*100}<small>HP</small></div></div><div class="stack"><div class="hs">${stk(w)}</div><span>${S.hp[w]} Health Card</span></div><div class="deb ${S.deb[w]?'on':''}">${ic('ban')}<span>${S.deb[w]?'Debuff aktif':'Tanpa Debuff'}</span></div></div>`};

function R(){
 const g=S,o=V=='p'?'a':'p',rv=g.rv[V]||[],ex=Math.max(0,g.hand[V].length-10),pc=[...g.hand[V]].sort((a,b)=>ORD.indexOf(a.t)-ORD.indexOf(b.t)||a.v-b.v),top=g.disc[g.disc.length-1];
 const msg=g.over?'':g.mode==V?`Tanganmu lebih dari 10 kartu. Klik kartu untuk membuang (${ex} lagi).`:g.mode?'Menunggu lawan membuang kartu...':g.turn==V&&!g.busy?'Giliranmu':g.turn==V?'Menyelesaikan kartu...':MODE=='ai'?'Bot sedang berpikir...':'Giliran lawan...';
 if(MODE=='host'){bc();if(NET.code){if(!g.busy)NET.ss=JSON.stringify(g);saveSess()}}
 root.innerHTML=`<div id="g"><div class="board">
<div class="sec">${side(o)}<div class="ohand">${g.hand[o].map(c=>rv.includes(c.id)?cd(c):`<div class="ac bk ${c.n?'deal':''}">${c.seen?'<u></u>':''}${ic('hour')}</div>`).join('')}<small>${g.hand[o].length} kartu tertutup</small></div></div>
<div class="sec mid"><div class="piles"><div class="pile"><div class="ac bk">${ic('sword')}</div><span>Dek: ${g.deck.length}</span></div><div class="pile"><div class="ac dis" style="--c:${top?T[top.t][0]:'#4b5675'}">${top?`<b>${T[top.t][1]}</b>${top.v?`<em>${top.v*100}</em>`:''}`:''}</div><span>Discard: ${g.disc.length}</span></div><div class="pile"><div class="ac hpc"></div><span>Health Pool: ${g.pool}</span></div></div><div class="zone"><div class="zc">${g.zone.map(cd).join('')}</div><p id="msg">${msg}</p></div></div>
<div class="sec">${side(V)}<div class="hand">${pc.map(cd).join('')}</div><div class="ctl"><button class="pri" data-a="play">Mainkan Kartu</button><button data-a="draw">Ambil Kartu (Shared Draw)</button><button data-a="end">Akhiri Giliran</button></div><p id="hint"></p></div>
</div><aside class="log" id="log">${g.log.map(([x,w])=>`<p class="${w?(w==V?'p':'a'):''}">${tx(x)}</p>`).join('')}</aside></div>${g.over?`<div class="ov"><div class="box"><h2>${g.over==V?'Kamu menang!':nameOf(g.over)+' menang'}</h2><p>${g.over==V?`Tumpukan Health Card ${nameOf(o)} habis.`:'Tumpukan Health Card-mu habis.'}</p><button class="pri" data-a="again">${MODE=='ai'?'Main lagi':'Main lagi dengan teman'}</button> <button data-a="menu">Menu utama</button></div></div>`:''}`;
 g.pv={...g.hp};[...g.hand.p,...g.hand.a,...g.zone].forEach(c=>{c.n=0;c.pop=0});
 const l=$('#log');l.scrollTop=l.scrollHeight;U();
}
function U(){
 document.querySelectorAll('.hand .ac').forEach(e=>e.classList.toggle('sel',S.sel.includes(+e.dataset.id)));
 const cs=S.sel.map(i=>S.hand[V].find(c=>c.id==i)).filter(Boolean),mine=S.turn==V&&!S.busy&&!S.mode&&!S.over;
 $('[data-a=play]').disabled=!(mine&&val(cs));$('[data-a=draw]').disabled=!mine||S.dc>=LIM;$('[data-a=draw]').textContent=`Ambil Kartu (Shared Draw) ${S.dc}/${LIM}`;$('[data-a=end]').disabled=!mine;
 $('#hint').textContent=mine?hint(cs)+(S.dc>=LIM?' Batas ambil kartu giliran ini sudah habis.':''):'';
}
function levels(){
 S=null;root.innerHTML=`<h1>Duel Kartu Strategi</h1><p class='sub'>Pilih tingkat kesulitan Bot. Setelah itu kamu memilih Hero. <button class='lnk' data-a='menu'>kembali ke menu</button></p><div class='pg'>${DN.map((d,i)=>`<button class='lv' data-d='${i}' style='--c:${d[1]}'><h3>${d[0]}</h3><p>${d[2]}</p></button>`).join('')}</div>`;
}
function pick(){
 S=null;root.innerHTML=`<h1>Pilih Hero</h1><p class='sub'>${MODE=='ai'?`<span class='chip' style='--c:${DN[DF][1]}'>${DN[DF][0]}</span> <button class='lnk' data-a='back'>ganti tingkat kesulitan</button><br>`:`<span class='chip' style='--c:#e23c86'>Player vs Player</span><br>`}Habiskan tumpukan Health Card lawan sampai 0. Tiap giliran kamu memainkan satu kartu (atau satu stack), lalu giliran berpindah. Kamu juga bisa mengambil kartu (maksimal 4 kali per giliran), tapi lawan otomatis mendapat jumlah yang sama. Pilih Hero-mu:</p><div class="pg">${HD.map((d,i)=>`<button class="hcd" data-h="${i}" style="--hu:${d[2]}"><div class="kind">Hero card</div><h3>${d[0]}</h3><div class="art">${SIL[i]}</div><div class="hpr"><div class="hpn">${d[1]*100}<small>HP</small><em>${d[1]} Health Card</em></div><div class="mini">${'<i></i>'.repeat(d[1])}</div></div><div class="fx"><b class="${i?'':'no'}">${d[3]}</b><p>${d[4]}</p></div></button>`).join('')}</div>`;
}
const nameOf=w=>w==V?'Kamu':MODE=='ai'?'Bot':'Lawan',tx=t=>t.replace(/\{([pa])\}/g,(m,w)=>nameOf(w));
function act(w,m){
 if(!S||S.over)return;
 if(m.k=='discard'){if(S.mode!=w)return;const h=S.hand[w],c=h.find(x=>x.id==m.id);if(!c)return;h.splice(h.indexOf(c),1);S.disc.push(c);lg(`${nm(w)} membuang ${nmc(c)}`,w);fix();R();return}
 if(S.turn!=w||S.busy||S.mode)return;
 if(m.k=='draw'){if(S.dc>=LIM)return;S.dc++;if(w==V)S.sel=[];dr(w,1);fix();chkEmpty();R()}
 if(m.k=='end'){if(w==V)S.sel=[];lg(`${nm(w)} mengakhiri giliran`,w);S.dc=0;S.turn=w=='p'?'a':'p';S.busy=MODE=='ai';if(MODE=='ai'){R();aiTurn()}else{lg('Giliran '+nm(S.turn));R();sfxFor(S.turn,'turn')}}
 if(m.k=='play'){const ids=m.ids||[],cs=ids.map(i=>S.hand[w].find(c=>c.id==i)).filter(Boolean);if(cs.length==ids.length&&val(cs))play(w,cs)}
}
/* Online: pesan dikirim lewat broker MQTT publik. Kode ruangan = 8 angka. */
const BROKERS=window.DK_BROKERS||['wss://broker.emqx.io:8084/mqtt','wss://broker.hivemq.com:8884/mqtt','wss://test.mosquitto.org:8081'];
const TP=k=>'dk1/'+NET.code+'/'+k;
const pub=(k,o,rt,q=1)=>{try{if(NET.c&&NET.c.connected)NET.c.publish(TP(k),typeof o=='string'?o:JSON.stringify(o),{retain:!!rt,qos:q})}catch(e){}};
const send=m=>{if(m.t=='s')pub('snap',m.s,1);else if(m.t=='act')pub('act',m);else if(m.t=='sfx')pub('sfx',m,0,0);else if(m.t=='re')pub('re',{from:MODE})};
const ls={get:k=>{try{return sessionStorage.getItem(k)||localStorage.getItem(k)}catch(e){return null}},set:(k,v)=>{try{sessionStorage.setItem(k,v);localStorage.setItem(k,v)}catch(e){}},del:k=>{try{sessionStorage.removeItem(k);localStorage.removeItem(k)}catch(e){}}};
function saveSess(){if(NET.code)ls.set('dk_s',JSON.stringify({role:MODE,code:NET.code,gid:NET.gid,seat:NET.seat,phase:NET.phase,hh:NET.hh,gen:NET.gen,ss:MODE=='host'?NET.ss:null}))}
function netBanner(){const e=$('#nb');if(!e)return;const t=NET.down?'Koneksi terputus. Menyambung ulang...':MODE=='guest'&&NET.joined&&NET.hostOff?'Host sedang offline. Menunggu host kembali...':MODE=='host'&&NET.seat&&NET.guestOff?'Temanmu sedang offline. Game lanjut saat ia kembali.':'';e.textContent=t;e.hidden=!t}
function netClose(){const c=NET.c;if(c){try{c.removeAllListeners();c.end(true)}catch(e){}}for(const k in NET)delete NET[k];netBanner()}
function leave(){const c=NET.c;if(c&&c.connected){const ks=MODE=='host'?['host','snap','hostlive','guest']:MODE=='guest'?['guest','guestlive']:[];ks.forEach(k=>c.publish(TP(k),'',{retain:true,qos:1}));try{c.removeAllListeners();c.end(false)}catch(e){}NET.c=null}ls.del('dk_s');netClose()}
function netOpen(role,code,init,ready,fail){
 netClose();Object.assign(NET,init||{},{role,code});const tok=NET.tok=Math.random(),id='dk'+Math.random().toString(16).slice(2,10);let i=0;
 const topics=role=='host'?['guest','guestlive','act','re']:['host','hostlive','snap','sfx','re'];
 const next=()=>{
  if(NET.tok!==tok)return;
  if(i>=BROKERS.length){fail&&fail();return}
  const url=BROKERS[i++];let ok=0,c;
  try{c=mqtt.connect(url,{clientId:id+i,connectTimeout:6000,reconnectPeriod:0,keepalive:20,will:{topic:TP(role+'live'),payload:'off',qos:1,retain:true}})}catch(e){return next()}
  const tm=setTimeout(()=>{if(!ok){try{c.removeAllListeners();c.end(true)}catch(e){}next()}},7000);
  c.on('error',()=>{});
  c.on('connect',()=>{
   if(NET.tok!==tok){try{c.end(true)}catch(e){}return}
   clearTimeout(tm);NET.c=c;NET.down=0;c.options.reconnectPeriod=2000;
   c.subscribe(topics.map(k=>TP(k)),{qos:1});
   c.publish(TP(role+'live'),'on',{retain:true,qos:1});
   if(!ok){ok=1;ready&&ready()}else{if(MODE=='host')bc();if(MODE=='guest'&&NET.joined)pubGuest()}
   netBanner()});
  c.on('close',()=>{if(!ok){clearTimeout(tm);next();return}NET.down=1;netBanner()});
  c.on('message',(t,pl)=>onTopic(t.split('/')[2],pl.toString()));
 };next();
}
function onTopic(k,p){
 let m=null;try{m=p?JSON.parse(p):null}catch(e){}
 if(MODE=='guest'){
  if(k=='host'){NET.hi=m;guestLobby()}
  else if(k=='hostlive'){NET.hostOff=p!='on';netBanner()}
  else if(k=='snap'&&m){NET.phase='play';NET.lph='play';recv(m)}
  else if(k=='sfx'&&m)sfx(m.k,m.a,1)
  else if(k=='re'&&m&&m.from=='host')rematch(0)
 }else if(MODE=='host'){
  if(k=='guest'){NET.gi=m;hostLobby()}
  else if(k=='guestlive'){NET.guestOff=p!='on';netBanner()}
  else if(k=='act'&&m)act('a',m)
  else if(k=='re'&&m&&m.from=='guest')rematch(0)
 }
}
const pubHost=()=>{pub('host',{phase:NET.phase,seat:NET.seat||null,hh:NET.hh??null,gen:NET.gen||0},1);saveSess()};
const pubGuest=()=>{pub('guest',{gid:NET.gid,gh:NET.gh??null,ts:Date.now()},1);saveSess()};
function lobbyScreen(){if(NET.phase=='wait')roomView();else if(NET.phase=='pick'){NET.hh==null?pick():waitScreen()}else if(!S)waitScreen()}
function hostLobby(){
 const gi=NET.gi;if(!gi||!gi.gid)return;
 if(!NET.seat){NET.seat=gi.gid;NET.phase='pick';NET.hh=null;pubHost();lobbyScreen()}
 if(NET.seat!=gi.gid)return;
 const g0=NET.gh;NET.gh=gi.gh??null;
 if(!S&&g0!==NET.gh)lobbyScreen();
 tryStart();netBanner()
}
function tryStart(){if(NET.phase=='pick'&&NET.hh!=null&&NET.gh!=null){NET.phase='play';NET.gen=Date.now();init(NET.hh,NET.gh);pubHost()}}
function guestLobby(){
 const hi=NET.hi;if(!hi)return;clearTimeout(NET.t0);
 if(hi.seat&&hi.seat!=NET.gid)return failG('Ruangan sudah penuh.');
 if(!NET.joined){NET.joined=1;NET.gh=null;pubGuest()}
 if(hi.phase==NET.lph)return;NET.lph=hi.phase;
 if(hi.phase=='wait')roomView();
 else if(hi.phase=='pick'){S=null;NET.gh==null?pick():waitScreen()}
 else if(!S)waitScreen('Menunggu game dimulai...');
 netBanner();saveSess()
}
function recv(n){const old=S;n.deck=new Array(n.deckN);n.disc=new Array(n.discN);if(n.discN)n.disc[n.discN-1]=n.discTop;n.sel=((old&&old.sel)||[]).filter(id=>n.hand.a.some(c=>c.id==id));S=n;R()}
function bc(){
 if(!NET.c||!NET.c.connected)return;
 const g=S,mask=c=>g.rv.a.includes(c.id)?c:{id:c.id,seen:c.seen,n:c.n};
 send({t:'s',s:{h:g.h,hp:g.hp,pool:g.pool,deb:g.deb,turn:g.turn,busy:g.busy,over:g.over,mode:g.mode,dc:g.dc,zone:g.zone,log:g.log.slice(-40),pv:g.pv,rv:g.rv,hand:{p:g.hand.p.map(mask),a:g.hand.a},deckN:g.deck.length,discN:g.disc.length,discTop:g.disc[g.disc.length-1]||null}});
}
function rematch(mine){
 if(MODE=='ai')return levels();
 if(mine)send({t:'re'});
 S=null;NET.hh=NET.gh=null;NET.ss=null;
 if(MODE=='host'){NET.phase='pick';pubHost();pub('snap','',1)}else{NET.lph='pick';pubGuest()}
 pick()
}
function choose(i){if(MODE=='ai')return init(i);if(MODE=='host'){NET.hh=i;pubHost();waitScreen();tryStart()}else{NET.gh=i;pubGuest();waitScreen()}}
const waitScreen=m=>{S=null;root.innerHTML=`<h1>Menunggu lawan...</h1><p class='sub'>${m||'Lawanmu masih memilih Hero. Game dimulai otomatis.'}</p><div class='lob'><div class='rc'>${NET.code}</div><button class='lnk' data-a='menu'>keluar dari ruangan</button></div>`};
function roomView(){
 const h=MODE=='host',o=h?(NET.seat?(NET.guestOff?'offline':'sudah bergabung'):'menunggu...'):(NET.hostOff?'offline':'online'),okc=o=='menunggu...'||o=='offline'?'':'ok';
 root.innerHTML=`<h1>Ruang Tunggu</h1><p class='sub'>${h?'Bagikan kode ini ke temanmu. Game lanjut otomatis begitu ia bergabung.':'Kamu sudah masuk. Menunggu host memulai.'}</p><div class='lob'><div class='rc'>${NET.code}</div><button data-a='copy'>Salin kode</button><ul class='pl'><li><b>Kamu (${h?'Host':'Tamu'})</b><i class='ok'>siap</i></li><li><b>Teman</b><i class='${okc}'>${o}</i></li></ul><button class='lnk' data-a='menu'>keluar dari ruangan</button></div>`}
function createRoom(){
 const code=Array.from(crypto.getRandomValues(new Uint32Array(8)),x=>x%10).join('');
 MODE='host';V='p';S=null;root.innerHTML=`<h1>Membuat ruangan...</h1>`;
 netOpen('host',code,{phase:'wait',gen:0},()=>{pubHost();roomView()},()=>{netClose();menu('Tidak bisa terhubung ke server perantara. Periksa internetmu. Mode online tidak jalan di pratinjau Claude, buka dari hosting sendiri (misalnya Vercel).')});
}
function joinScreen(err){S=null;root.innerHTML=`<h1>Gabung ruangan</h1><p class='sub'>Masukkan kode 8 angka dari temanmu.</p><div class='lob'><input id='cin' inputmode='numeric' maxlength='8' autocomplete='off' placeholder='00000000'><button class='pri' data-a='joingo'>Gabung</button><p id='st'>${err||''}</p><button class='lnk' data-a='menu'>kembali ke menu</button></div>`}
const failG=m=>{netClose();ls.del('dk_s');joinScreen(m)};
function joinRoom(code){
 MODE='guest';V='a';S=null;root.innerHTML=`<h1>Menyambungkan...</h1><p class='sub'>Ruangan ${code}</p>`;
 let g=ls.get('dk_gid');if(!g){g=Math.random().toString(36).slice(2,10);ls.set('dk_gid',g)}
 netOpen('guest',code,{gid:g},()=>{NET.t0=setTimeout(()=>{if(!NET.hi)failG('Ruangan tidak ditemukan. Periksa kodenya.')},5000)},()=>failG('Tidak bisa terhubung ke server perantara. Periksa internetmu.'));
}
function boot(){
 let s=null;try{s=JSON.parse(ls.get('dk_s')||'null')}catch(e){}
 if(!s||!s.code||!window.mqtt)return menu();
 MODE=s.role;V=MODE=='host'?'p':'a';S=null;
 root.innerHTML=`<h1>Menyambungkan kembali...</h1><p class='sub'>Ruangan ${s.code}</p><div class='lob'><button class='lnk' data-a='menu'>batal dan keluar dari ruangan</button></div>`;
 netOpen(MODE,s.code,{gid:s.gid,seat:s.seat,phase:s.phase,hh:s.hh,gen:s.gen},()=>{
  if(MODE=='host'){NET.ss=s.ss;if(s.ss){S=JSON.parse(s.ss);S.busy=false;S.zone=[];S.rv={p:[],a:[]};S.sel=[];NET.phase='play';pubHost();R()}else{pubHost();lobbyScreen()}}
  else{NET.joined=1;NET.gh=null;pubGuest();NET.t0=setTimeout(()=>{if(!NET.hi)failG('Ruangan sudah tidak ada.')},6000)}
 },()=>{netClose();ls.del('dk_s');menu('Tidak bisa terhubung ke server perantara. Periksa internetmu.')});
}
document.addEventListener('visibilitychange',()=>{try{if(!document.hidden&&NET.c&&!NET.c.connected)NET.c.reconnect()}catch(e){}});
function menu(msg){leave();S=null;MODE='ai';V='p';root.innerHTML=`<h1>Duel Kartu Strategi</h1><p class='sub'>Pilih mode permainan.</p>${msg?`<p class='sub' style='color:#f87171'>${msg}</p>`:''}<div class='pg'><button class='lv' data-m='ai' style='--c:#3b82f6'><h3>Player vs AI</h3><p>Lawan Bot. Kamu memilih tingkat kesulitan dulu, lalu Hero.</p></button><button class='lv' data-m='pvp' style='--c:#e23c86'><h3>Player vs Player</h3><p>Main bareng teman di dua perangkat. Buat ruangan, lalu bagikan kode 8 angkanya.</p></button></div>`}
function lobby(){S=null;root.innerHTML=`<h1>Player vs Player</h1><p class='sub'>Satu orang membuat ruangan dan membagikan kode 8 angka, yang lain memasukkan kodenya.</p><div class='pg'><button class='lv' data-a='host' style='--c:#3b82f6'><h3>Buat ruangan</h3><p>Kamu mendapat kode untuk dikirim ke temanmu.</p></button><button class='lv' data-a='join' style='--c:#22c55e'><h3>Gabung ruangan</h3><p>Masukkan kode dari temanmu.</p></button></div><p class='sub'><button class='lnk' data-a='menu'>kembali ke menu</button></p>`}
root.onclick=e=>{
 const mm=e.target.closest('[data-m]');if(mm){sfx('ui');if(mm.dataset.m=='ai'){MODE='ai';V='p';return levels()}return lobby()}
 const d=e.target.closest('[data-d]');if(d){sfx('ui');DF=+d.dataset.d;return pick()}
 const h=e.target.closest('[data-h]');if(h){sfx('ui');return choose(+h.dataset.h)}
 const a=e.target.closest('[data-a]');
 if(a&&!a.disabled){const k=a.dataset.a;
  if(k=='menu')return menu();
  if(k=='back')return levels();
  if(k=='again')return MODE=='ai'?levels():rematch(1);
  if(k=='host')return createRoom();
  if(k=='join')return joinScreen();
  if(k=='joingo'){const c=$('#cin').value.replace(/\D/g,'');if(c.length!=8){$('#st').textContent='Kode harus 8 angka.';return}return joinRoom(c)}
  if(k=='copy'){try{navigator.clipboard.writeText(NET.code)}catch(x){}a.textContent='Tersalin';return}
  if(k=='draw'||k=='end'||k=='play'){if(k!='draw')sfx('ui');const m={k,ids:[...S.sel]};if(MODE=='guest'){if(NET.hostOff||NET.down)return;send({t:'act',...m});S.sel=[];U()}else act(V,m)}
  return}
 const c=e.target.closest('.hand .ac');if(!c||!S||S.over)return;const id=+c.dataset.id;
 if(S.mode==V){sfx('ui');return MODE=='guest'?send({t:'act',k:'discard',id}):act(V,{k:'discard',id})}
 if(S.turn!=V||S.busy||S.mode)return;
 const i=S.sel.indexOf(id);if(i>=0){S.sel.splice(i,1);sfx('desel')}else if(S.sel.length<3){S.sel.push(id);sfx('sel')}U();
};
boot();
