(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();class c{constructor(t,e){this.x=t,this.y=e}static{this.TOP_LEFT=new c(0,0)}static{this.TOP_CENTER=new c(.5,0)}static{this.TOP_RIGHT=new c(1,0)}static{this.MIDDLE_LEFT=new c(0,.5)}static{this.MIDDLE_CENTER=new c(.5,.5)}static{this.MIDDLE_RIGHT=new c(1,.5)}static{this.BOTTOM_LEFT=new c(0,1)}static{this.BOTTOM_CENTER=new c(.5,1)}static{this.BOTTOM_RIGHT=new c(1,1)}static{this.CENTER=new c(.5,.5)}static{this.ZERO=new c(0,0)}static{this.ONE=new c(1,1)}}class p{constructor(t,e,s=c.ZERO){this.position=t,this.pivot=e,this.gOffset=s}static{this.TOP_LEFT=new p(c.TOP_LEFT,c.TOP_LEFT)}static{this.TOP_CENTER=new p(c.TOP_CENTER,c.TOP_CENTER)}static{this.TOP_RIGHT=new p(c.TOP_RIGHT,c.TOP_RIGHT)}static{this.MIDDLE_LEFT=new p(c.MIDDLE_LEFT,c.MIDDLE_LEFT)}static{this.MIDDLE_CENTER=new p(c.MIDDLE_CENTER,c.MIDDLE_CENTER)}static{this.MIDDLE_RIGHT=new p(c.MIDDLE_RIGHT,c.MIDDLE_RIGHT)}static{this.BOTTOM_LEFT=new p(c.BOTTOM_LEFT,c.BOTTOM_LEFT)}static{this.BOTTOM_CENTER=new p(c.BOTTOM_CENTER,c.BOTTOM_CENTER)}static{this.BOTTOM_RIGHT=new p(c.BOTTOM_RIGHT,c.BOTTOM_RIGHT)}}function S(n){n||console.error("Assertion failed!")}class ge{constructor(t,e,s,i,r){this.x=t,this.y=e,this.width=s,this.height=i,this.scale=r}unit(t){return t*this.scale}}let mn=0;class we{refresh(){}constructor(){this.ID=++mn}}class Dt extends we{constructor(){super(),this.destroyed=!1,this.pxSizeX=1,this.pxSizeY=1,this.z=-1}setZ(t){S(this.z==-1),this.z=t}setParent(t){S(this.parent==null),this.parent=t}updateSizeRef(t,e,s){this.pxSizeX=t.unit(e),this.pxSizeY=t.unit(s)}calculateTopLeft(t,e){S(this.z!=-1);const s=t.x+e.position.x*t.width,i=t.y+e.position.y*t.height;let r=s+t.unit(e.gOffset.x),o=i+t.unit(e.gOffset.y);return r-=e.pivot.x*this.pxSizeX,o-=e.pivot.y*this.pxSizeY,new c(r,o)}update(t){}destroy(){this.destroyed=!0}isDestroyed(){return this.destroyed}react(t,e){}}class U extends Dt{constructor(t,e=""){super(),this.visible=!0,this.refX=t.x,this.refY=t.y;const s=document.createElement("div");e!=""&&(s.className=e),s.style.position="absolute",s.style.display="none",document.body.append(s),this.element=s}setSize(t){this.refX=t.x,this.refY=t.y}setVisibility(t){this.element.style.display=t?"":"none"}updateSize(t){this.updateSizeRef(t,this.refX,this.refY);const e=this.element.style;e.width=this.pxSizeX+"px",e.height=this.pxSizeY+"px"}updatePosition(t,e){const s=this.calculateTopLeft(t,e);this.setTopLeft(s.x,s.y)}setTopLeft(t,e){const s=this.element.style;s.left=t+"px",s.top=e+"px",s.zIndex=this.z.toString()}destroy(){super.destroy(),this.element.remove()}refresh(){super.refresh(),this.setVisibility(this.visible)}}class I{static{this.SCENE_ZBASE=1e6}static{this.POPUP_ZBASE=2e6}update(t){}constructor(t){this.zBase=t}}class gn{constructor(t,e){this.obj=t,this.key=e}}class wn{constructor(){this.values={},this.listeners=[]}set(t,e){if(!Object.is(this.values[t],e)){this.values[t]=e,this.listeners=this.listeners.filter(s=>!s.obj.isDestroyed());for(const s of this.listeners)s.key===t&&s.obj.react(t,e)}}addition(t,e,s=0){this.values.hasOwnProperty(t)||(this.values[t]=s);const i=this.values[t];if(typeof i!="number"||!Number.isFinite(i)){console.error(`Value for "${t}" is not a finite number (got ${String(i)})`);return}const r=i+e;this.set(t,r)}addListener(t,e){this.listeners.push(new gn(t,e))}getNumberValue(t){const e=this.values[t];return typeof e=="number"&&Number.isFinite(e)?e:(console.error(`DReactor.getNumberValue: ${t}`),0)}getBooleanValue(t){const e=this.values[t];return typeof e=="boolean"?e:(console.error(`DReactor.getBooleanValue: ${t}`),!1)}}class bn{constructor(){this.roots=[],this.lastUpdate=0,this.STEP=1e3/20,this.loop=t=>{if(t-this.lastUpdate>=this.STEP){const e=t-this.lastUpdate;this.lastUpdate=t;try{this.update(e)}catch(s){console.error("DCore loop: error in update.",s)}for(const s of this.roots)s.update(e)}requestAnimationFrame(this.loop)},this.reactor=new wn}resize(t,e,s,i,r){for(const o of this.roots)o.updateLayout(new ge(t,e,s,i,r))}createRoot(t){let e=new Tn(t);return this.roots.push(e),e}update(t){}start(){this.lastUpdate=performance.now(),requestAnimationFrame(this.loop)}}class yn{constructor(t,e){this.pos=t,this.obj=e}}class be{constructor(t,e){this.children=[],this.zBase=t,this.parent=e}add(t,e){t.setParent(this.parent),this.children.push(new yn(e,t)),t.setZ(this.zBase+this.children.length)}removeAll(){for(const t of this.children)t.obj.destroy();this.children=[]}}class En extends Dt{constructor(t){super(),this.scale=1,this.refX=t.x,this.refY=t.y,this.collection=new be(-1,this)}setZ(t){super.setZ(t),this.collection.zBase=t}setTopLeft(t,e){const s=new ge(t,e,this.pxSizeX,this.pxSizeY,this.scale);for(const i of this.collection.children)i.obj.updateSize(s),i.obj.updatePosition(s,i.pos)}add(t,e){S(this.z!=-1),this.collection.add(t,e)}updateSize(t){this.scale=t.scale,this.updateSizeRef(t,this.refX,this.refY)}updatePosition(t,e){this.scale=t.scale;const s=this.calculateTopLeft(t,e);this.setTopLeft(s.x,s.y)}update(t){for(const e of this.collection.children)e.obj.update(t)}destroy(){this.collection.removeAll()}refresh(){super.refresh();for(const t of this.collection.children)t.obj.refresh()}}class Tn extends we{constructor(t){super(),this.refreshLayoutOnNextUpdate=!1,this.collection=new be(t,this)}getZ(){return this.collection.zBase}updateLayout(t){this.box=t,this.refreshLayoutOnNextUpdate=!0}add(t,e){this.collection.add(t,e)}update(t){if(this.refreshLayoutOnNextUpdate&&this.box){for(const e of this.collection.children)e.obj.refresh(),e.obj.updateSize(this.box),e.obj.updatePosition(this.box,e.pos);this.refreshLayoutOnNextUpdate=!1}for(const e of this.collection.children)e.obj.update(t)}refresh(){this.refreshLayoutOnNextUpdate=!0}removeAll(){this.collection.removeAll()}}class w extends Dt{constructor(t=w.VERTICAL,e=w.ALIGN_CENTER){super(),this.children=[],this.orientation=t,this.alignment=e}static{this.HORIZONTAL=1001}static{this.VERTICAL=1002}static{this.ALIGN_FRONT=2001}static{this.ALIGN_BACK=2002}static{this.ALIGN_CENTER=2003}add(t){S(this.z!=-1),t.setParent(this),this.children.push(t),t.setZ(this.z+this.children.length)}updateSize(t){let e=0,s=0;for(const i of this.children)i.updateSize(t),this.orientation==w.VERTICAL?(s+=i.pxSizeY,e=Math.max(e,i.pxSizeX)):this.orientation==w.HORIZONTAL?(e+=i.pxSizeX,s=Math.max(s,i.pxSizeY)):S(!1);this.pxSizeX=e,this.pxSizeY=s}updatePosition(t,e){const s=this.calculateTopLeft(t,e);this.setTopLeft(s.x,s.y)}setTopLeft(t,e){let s=t,i=e;for(const r of this.children)this.orientation==w.VERTICAL?(this.alignment==w.ALIGN_FRONT?r.setTopLeft(s,i):this.alignment==w.ALIGN_BACK?r.setTopLeft(s+this.pxSizeX-r.pxSizeX,i):this.alignment==w.ALIGN_CENTER?r.setTopLeft(s+(this.pxSizeX-r.pxSizeX)/2,i):S(!1),i+=r.pxSizeY):this.orientation==w.HORIZONTAL?(r.setTopLeft(s,i),s+=r.pxSizeX):S(!1)}update(t){this.children=this.children.filter(e=>!e.isDestroyed());for(const e of this.children)e.update(t)}refresh(){for(const t of this.children)t.refresh()}destroy(){for(const t of this.children)t.destroy();this.children=[]}}const ye=["en","fi","sv","th"];function Ee(n){return n==="sv"&&(n="se"),({en:"GB"}[n]||n).toUpperCase().replace(/./g,s=>String.fromCodePoint(127397+s.charCodeAt(0)))}const In=ye.map(Ee).join("");function yt(n){for(let t=n.length-1;t>0;t--){const e=Math.floor(Math.random()*(t+1));[n[t],n[e]]=[n[e],n[t]]}return n}var u=(n=>(n[n.ML=0]="ML",n[n.CL=1]="CL",n[n.DL=2]="DL",n[n.L=3]="L",n))(u||{}),X=(n=>(n[n.MG=0]="MG",n))(X||{});const Te={0:1,1:10,2:100,3:1e3};function Ie(n){const t=Te[n];if(!Number.isFinite(t))throw new Error("Cannot convert using non-volume unit");return t}function A(n,t){return n*Ie(t)}function nt(n,t){return n/Ie(t)}function g(n,t){const e=Math.ceil(n),s=Math.floor(t);return Math.max(e,Math.floor(Math.random()*(s-e+1))+e)}function ve(n){const t=g(0,n.length-1);return n[t]}function Ht(n){return`[[${n}]]`}const Mt=new Map;let Et=[];async function _e(n){const t=(n||"en").toLowerCase();for(const r of Et)Mt.delete(r);Et=[];const e=Y(`i18n/${t}.json`),s=await fetch(e);if(!s.ok)throw new Error(`i18n load failed: ${s.status} ${s.statusText}`);console.log(`language loaded: ${n}`);const i=await s.json();xe(i)}function d(n,t={},e,s=new Set){if(s.has(n))return`{${n}}`;s.add(n);let i=Mt.get(n)??e??n,r;do r=i,i=i.replace(/\{\{(\w+(?:\.\w+)*)\}\}/g,(o,a)=>d(a,t,`{${a}}`,new Set(s)));while(i!==r);return i.replace(/\{(\w+)\}/g,(o,a)=>a in t?String(t[a]):`{${a}}`)}function Se(n){const t=n.name??`exercise.${n.id}.title`;return d(t)}function b(n){switch(n){case u.ML:return d("units.ml");case u.CL:return d("units.cl");case u.DL:return d("units.dl");case u.L:return d("units.l");default:return"?"}}function jt(n){switch(n){case X.MG:return d("units.mg",void 0,"mg");default:return"?"}}function Vt(n){const t=n.toLowerCase();return t==="sv"?d("language.swedish",void 0,"Swedish"):t==="fi"?d("language.finnish",void 0,"Finnish"):t==="th"?d("language.thai",void 0,"Thai"):t==="en"?d("language.english",void 0,"English"):(console.error(`languageName: ${n}`),n)}function xe(n,t){for(const[e,s]of Object.entries(n)){const i=t?`${t}.${e}`:e;typeof s=="string"?(Mt.set(i,s),Et.push(i)):vn(s)&&xe(s,i)}}function vn(n){return!!n&&typeof n=="object"&&!Array.isArray(n)}const Tt=new Map,K=new Map;function _n(n){const t=n.split("?")[0].toLowerCase();return/\.(png|jpe?g|gif|webp|bmp|svg)$/.test(t)?"image":t.endsWith(".json")||t.endsWith(".txt")?"text":"blob"}function Gt(n){if(!n.ok)throw new Error(`Failed to load (${n.status} ${n.statusText})`);return n}function Sn(n){return new Promise((t,e)=>{const s=new Image;s.decoding="async",s.onload=()=>t(s),s.onerror=()=>e(new Error(`Failed to load image: ${n}`)),s.src=Y(n)})}async function xn(n,t=_n(n)){if(Tt.has(n))return;if(K.has(n))return K.get(n).then(()=>{});let e;t==="image"?e=Sn(n):t==="text"?e=fetch(Y(n),{credentials:"same-origin"}).then(Gt).then(s=>s.text()):e=fetch(n,{credentials:"same-origin"}).then(Gt).then(s=>s.blob()),K.set(n,e);try{const s=await e;Tt.set(n,s)}finally{K.delete(n)}}function Cn(n){const t=Tt.get(n);return typeof t!="string"?(console.error(`Text not found in cache: ${n}`),""):t}let G;async function Ln(n){const t=await fetch(n);if(!t.ok)throw new Error(`Failed to load catalog [${n}]: ${t.status} ${t.statusText}`);G=await t.json()}function An(n){if(!G)throw new Error;for(const t of G.areas){const e=t.topics.find(s=>s.id===n);if(e)return e}throw new Error(`Topic not found: ${n}`)}function Dn(n){return An(n).subtopics}function Mn(n){if(!G)throw new Error;const t=G.areas.find(e=>e.id===n);if(!t)throw new Error(`Area not found: ${n}`);return t.topics}function $n(n){return`questions/${L.language}/${n}.json`}async function On(n){const t=$n(n);await xn(t);const e=Cn(t);if(!e)throw new Error(`Question data for "${n}" not loaded. Call loadById first.`);let s;try{s=JSON.parse(e)}catch(i){throw new Error(`Failed to parse question data for "${n}": ${i.message}`)}if(!Array.isArray(s))throw new Error(`Question data for "${n}" is not an array`);return s}let $t=new c(400,50);function Bn(n){$t=n}class E extends U{constructor(t,e,s="dtext",i=!1){super(e,s),i?this.element.innerHTML=t||"???":this.element.textContent=t||"???"}react(t,e){this.element.textContent=e}}class x extends U{constructor(t,e,s=$t,i="dbutton"){super(s,"dbutton-div"),this.vanishTime=2e3,this.vanishing=!1,this.action=e,this.htmlButton=document.createElement("div"),this.htmlButton.className=i,this.htmlButton.style.position="relative",this.htmlButton.textContent=t,this.element.appendChild(this.htmlButton),this.clickHandler=()=>{this.action()},this.htmlButton.addEventListener("click",this.clickHandler)}vanish(){this.vanishing=!0,this.element.removeEventListener("click",this.clickHandler)}disable(){this.htmlButton.style.pointerEvents="none"}update(t){this.vanishing&&(this.refY*=.9,this.vanishTime-=t,this.vanishTime<=0&&this.destroy(),this.parent?.refresh(),console.log("vanishing "+t+" pxy"+this.pxSizeY))}setAction(t){this.action=t}}class qt extends x{constructor(t,e,s){super(t,s,$t,"dbutton split-button"),this.htmlRight=document.createElement("div"),this.htmlRight.className="split-button-right",this.htmlRight.textContent=e,this.element.appendChild(this.htmlRight)}}const Ce="★",Nn="☆";function Le(n){let t="";for(let e=0;e<3;e++)t+=e<n?Ce:Nn;return t}class kn extends x{htmlStars;constructor(t,e,s,i){super(t,i,new c(400,60),"dbutton sub-topic-button"),this.htmlStars=document.createElement("div"),this.htmlStars.className="sub-topic-stars",this.htmlStars.textContent=`${Ce} ${e} / ${s}`,this.element.appendChild(this.htmlStars);const r="calc(var(--one) * 4)",o=r,a=document.createElement("div");a.style.position="absolute",a.style.top=r,a.style.left=r,a.style.right=r,a.style.bottom=r,a.style.border=o+" solid var(--very-light-ocean)",a.style.pointerEvents="none",this.element.appendChild(a),this.disable()}}const Pn=new c(400,60);class Rn extends x{htmlRight;constructor(t,e,s){super(t,s,Pn,"dbutton exercise-button"),this.htmlRight=document.createElement("div"),this.htmlRight.className="sub-topic-stars",this.htmlRight.textContent=Le(e),this.element.appendChild(this.htmlRight)}}class st extends U{relMargin;anchor;constructor(t,e,s=0){super(new c(10,10),e),this.relMargin=s,this.anchor=t}updateSize(t){const e=this.element.style,s=t.scale*this.relMargin;e.width=this.anchor.pxSizeX+2*s+"px",e.height=this.anchor.pxSizeY+2*s+"px"}calculateTopLeft(t,e){let s=this.anchor.calculateTopLeft(t,e);const i=t.scale*this.relMargin;return s.x-=i,s.y-=i,s}}class Yt extends E{constructor(t){super(t,new c(400,100),"dtext-title")}}class Fn extends U{video;constructor(t,e,s,i=""){super(new c(t,e),i),this.element.style.overflow="hidden",this.element.style.backgroundColor="transparent",this.element.style.display="";const r=document.createElement("video");r.preload="auto",r.playsInline=!0,r.setAttribute("playsinline",""),r.autoplay=!0,r.muted=!0,r.loop=!1,r.controls=!1,r.style.position="absolute",r.style.left="50%",r.style.top="50%",r.style.transform="translate(-50%, -50%)",r.style.width="100%",r.style.height="100%",r.style.objectFit="contain",r.src=Y(s),this.element.appendChild(r),this.video=r;const o=()=>{this.video.play().catch(a=>{console.warn("video.play() rejected:",a)}),this.video.removeEventListener("canplay",o)};this.video.addEventListener("canplay",o,{once:!0}),this.video.addEventListener("error",a=>{console.error("Video error",a,this.video.error)})}destroy(){try{this.video.pause(),this.video.removeAttribute("src")}catch{}super.destroy()}playOnceAgain(){this.isDestroyed()||this.video.load()}}class zn extends I{root;game;backButton;backAction;subtopic=void 0;topic=void 0;constructor(t){super(I.SCENE_ZBASE),this.game=t,this.root=t.sceneContainer,Bn(bt)}init(){if(this.subtopic){this.subtopic=void 0,this.goTopics();return}const t=this.root;t.removeAll();const e=new w;t.add(e,p.MIDDLE_CENTER),e.add(new E("Penguin<br>Math Island",new c(400,140),"dtitle",!0)),e.add(new Fn(400,300,"videos/hello.mp4")),e.add(new x(d("menu.start"),()=>this.goTopics())),e.add(new qt(d("menu.language"),In,()=>this.goLanguageSelection())),e.add(new E("<br>© Dolfin Studio, 2025",new c(400,140),"dtext mini",!0)),t.refresh()}uninit(){}goLanguageSelection(){const t=this.root;t.removeAll();const e=new w;t.add(e,p.MIDDLE_CENTER),e.add(new Yt(d("language.title")));for(const s of ye)e.add(new qt(Vt(s),Ee(s),()=>this.setLanguage(s)));this.addBackButton(`￩ ${d("common.back")}`,this.init),t.refresh()}setLanguage(t){this.game.showPopupBG(),Promise.all([_e(t)]).then(()=>this.setLanguageDone(t)).catch(e=>{console.error("setLanguage",e),this.game.hidePopupBG()})}setLanguageDone(t){L.setLanguage(t),this.game.loadInfoPopup(d("language.selected",{name:Vt(L.language)}))}addBackButton(t,e){this.backButton=new x(t,()=>{this.backPressed()},bt,"dbutton back-button"),this.root.add(this.backButton,p.BOTTOM_CENTER),this.backAction=e}backPressed(){this.backAction&&this.backAction()}goTopics(){this.topic=void 0;const t=this.root;t.removeAll();const e=new w;this.root.add(e,p.MIDDLE_CENTER),e.add(new Yt(d("menu.subtopicsTitle")));const s=Mn("skills");for(const i of s)e.add(this.createTopicButton(i));this.addBackButton(`￩ ${d("common.back")}`,this.init),t.refresh()}createTopicButton(t){return new x(d(t.name),()=>this.goSubTopics(t),bt,"dbutton topic-button")}goSubTopics(t){this.topic=t,this.subtopic=void 0;const e=this.root;e.removeAll();const s=new w;this.root.add(s,p.MIDDLE_CENTER),this.root.add(new st(s,"sub-topics-plane",20),p.MIDDLE_CENTER),s.add(new E(`${d(t.name)}<br><span class='mini'>${d("menu.chooseExercise")}</span>`,new c(zt,80),"dtext",!0));const i=Dn(this.topic.id);console.log(i.length);for(const r of i){const o=(r.exercise?.length||0)*3;let a=0;if(L&&r.exercise)for(const l of r.exercise){const h=L.stars(l.id);a+=h}s.add(new kn(d(r.name),a,o,()=>{}));for(const l of r.exercise){const h=L.stars(l.id),m=new Rn(Se(l),h,()=>{this.startExercise(r,l),this.subtopic=r});s.add(m)}}this.addBackButton(`￩ ${d("menu.subtopicsTitle")}`,()=>this.goTopics()),e.refresh()}startExercise(t,e){console.log(`start ${e.id}`),y.loadScene(y.quizScene),y.quizScene.setExercise(t,e)}}class Un extends I{root;game;done;constructor(t){super(I.SCENE_ZBASE),this.game=t,this.root=t.sceneContainer,this.done=!1}init(){const t=new w;this.root.add(t,p.MIDDLE_CENTER),t.add(new E(". . .",new c(200,50)));const e=Y("question_catalog.json");this.done=!1,Promise.all([Ln(e),_e(L.language).catch(s=>{console.warn("i18n load failed",s)})]).then(()=>Hn(this)).catch(s=>console.error(s))}update(t){this.done&&this.game.loadScene(this.game.mainMenu)}uninit(){}}function Hn(n){n.done=!0,console.log(d("menu.start"))}class jn extends I{root;game;constructor(t){super(I.POPUP_ZBASE),this.game=t,this.root=t.popupContainer}init(){const t=new w;this.root.add(t,p.MIDDLE_CENTER),t.add(new E("Settings",new c(200,50)))}uninit(){}}class Ot{scene;exercise;topList;bottomList;nextButton=void 0;constructor(t,e){this.scene=t,this.exercise=e,this.topList=new w,this.scene.root.add(this.topList,new p(c.TOP_CENTER,c.TOP_CENTER,new c(0,85))),this.bottomList=new w,this.scene.root.add(this.bottomList,new p(c.BOTTOM_CENTER,c.BOTTOM_CENTER,new c(0,-120)))}showNextButton(){this.showBottomButton(d("common.next"),()=>{this.showNextClicked()})}showBottomButton(t,e){this.nextButton&&this.nextButton.destroy(),this.nextButton=new x(t,e,new c(2*zt/3,lt)),this.scene.root.add(this.nextButton,new p(c.BOTTOM_CENTER,c.BOTTOM_CENTER,new c(0,-20/2)))}showNextClicked(){this.nextButton?.destroy(),this.showNext()}}class Vn extends Ot{questions=[];count=6;current=-1;correct="";buttons=[];init(){On(this.exercise.id).then(t=>{this.initQuestions(t)}).catch(()=>{console.error("MCQControl init failed")})}initQuestions(t){console.log(`loaded ${t.length} questions`),t=yt(t),this.questions=t.length>this.count?t.slice(0,this.count):t,this.current=0,this.showNext()}cheat(){this.scene.finished(this.count,this.count)}showNext(){if(this.current>=this.count){this.scene.finished(y.reactor.getNumberValue("score"),this.count);return}const t=this.questions[this.current];this.topList.destroy(),this.bottomList.destroy(),this.topList.add(new E(t.question,new c(400,200),"dtext-panel")),this.correct=t.options[0];const e=yt(t.options);for(const s of e){const i=new x(s,()=>{this.answer(s)});this.buttons.push(i),this.bottomList.add(i)}this.scene.root.refresh()}answer(t){for(const r of this.buttons)r.disable();const e=this.correct===t;console.log(`isCorrect: ${e}`),this.colorize(this.correct,"green");const s=this.questions[this.current];let i="";e?(y.reactor.addition("score",1,0),i=`${d("gameplay.correct")} ${s.explanation}`):(i=d("gameplay.wrongPrefix",{answer:s.explanation||"..."}),this.colorize(t,"red")),this.topList.add(new E(i,new c(400,200),"dtext-panel")),this.current++,this.showNextButton(),this.scene.root.refresh()}colorize(t,e){for(const s of this.buttons)if(s.element.textContent===t){s.htmlButton.style.backgroundColor=`var(--${e})`;return}}}class Gn extends U{displayValue;displayUnit;buttons=[];onChange;value="";constructor(t,e=new c(400,400),s){super(e,"calculator"),this.onChange=s,this.displayValue=document.createElement("span"),this.displayValue.className="calculator__value",this.displayUnit=document.createElement("span"),this.displayUnit.className="calculator__unit",this.displayUnit.textContent=t;const i=document.createElement("div");i.className="calculator__display",i.append(this.displayValue,this.displayUnit);const r=document.createElement("div");r.className="calculator__grid",this.element.append(i,r),this.buttons=[{label:"7",action:()=>this.appendDigit("7")},{label:"8",action:()=>this.appendDigit("8")},{label:"9",action:()=>this.appendDigit("9")},{label:"4",action:()=>this.appendDigit("4")},{label:"5",action:()=>this.appendDigit("5")},{label:"6",action:()=>this.appendDigit("6")},{label:"1",action:()=>this.appendDigit("1")},{label:"2",action:()=>this.appendDigit("2")},{label:"3",action:()=>this.appendDigit("3")},{label:"0",action:()=>this.appendDigit("0"),css:"calculator__button--zero"},{label:",",action:()=>this.appendComma()},{label:"⌫",action:()=>this.backspace(),css:"calculator__button--backspace"}],this.buttons.forEach(o=>{const a=document.createElement("button");o.element=a,a.type="button",a.textContent=o.label,a.className=`calculator__button ${o.css??""}`.trim(),a.addEventListener("click",o.action),r.append(a)}),this.render()}disable(){this.buttons.forEach(t=>{const e=t.element?.style;e?.pointerEvents&&(e.pointerEvents="none")})}setUnit(t){this.displayUnit.textContent=t}setValue(t){this.value=qn(t),this.render()}getValue(){return this.value}clear(){this.value!==""&&(this.value="",this.render())}appendDigit(t){t==="0"&&this.value==="0"||(this.value==="0"?this.value=t:this.value+=t,this.render())}appendComma(){this.value.includes(".")||(this.value=this.value===""?"0.":`${this.value}.`,this.render())}backspace(){this.value!==""&&(this.value=this.value.slice(0,-1),this.render())}render(){this.displayValue.textContent=this.value||"0",this.onChange?.(this.value)}}function qn(n){const t=n.trim();if(t==="")return"";const s=t.replace(".",",").match(/^\d*(?:,\d*)?$/);return s?s[0].startsWith("0")&&!s[0].startsWith("0,")?s[0].replace(/^0+/,"")||"0":s[0]:""}class H{text;answer;answerUnit;numberLine;minimal;constructor(t,e,s,i=!1,r){this.text=t,this.answer=e,this.answerUnit=s,this.numberLine=r,this.minimal=i}}class Yn extends H{constructor(){const t=b(u.ML),e=d("exercise.add_and_convert_to_ml.guide"),s=[u.ML,u.CL,u.DL,u.L],i=s[Math.random()*s.length|0],r=s[Math.random()*s.length|0],o=g(i===u.ML?10:1,i===u.L?3:10),a=g(r===u.ML?10:1,r===u.L?3:10),l=`${e}
${o} ${b(i)} + ${a} ${b(r)}`,h=A(o,i)+A(a,r),m=nt(h,u.ML);super(l,m,t)}}class Wn extends H{constructor(){const t=u.ML,e=g(2,5),s=g(2,6)*Math.pow(10,g(1,2));let i=e*s;const r=ve([u.CL,u.DL,u.L]);i=nt(i,r);const a=`${d("exercise.divide_and_convert_to_ml.guide")}
${i} ${b(r)} / ${e}`;super(a,s,b(t))}}class ht{value;color;label;constructor(t,e,s){this.value=t,this.color=e,this.label=s}}class Wt{rangeStart;rangeEnd;indicators;constructor(t,e,s=[]){this.rangeStart=t,this.rangeEnd=e,this.indicators=s}}class Kn extends U{options;track;ticksContainer;majorTicksContainer;minorTicksContainer;labelsContainer;indicatorEls=[];constructor(t,e=new c(400,200)){super(e,"numberline"),this.options=t;const s=document.createElement("div");s.className="numberline-track",this.element.append(s),this.track=s;const i=document.createElement("div");i.className="numberline-ticks",this.element.append(i),this.ticksContainer=i;const r=document.createElement("div");r.className="numberline-majorticks",this.element.append(r),this.majorTicksContainer=r;const o=document.createElement("div");o.className="numberline-minorticks",this.element.append(o),this.minorTicksContainer=o;const a=document.createElement("div");a.className="numberline-labels",this.element.append(a),this.labelsContainer=a,this.createIndicatorElements(),this.visible=!0}setIndicators(t){this.options.indicators=t.slice(),this.createIndicatorElements(),this.refresh()}setRange(t,e){S(t!==e),this.options.rangeStart=t,this.options.rangeEnd=e,this.refresh()}createIndicatorElements(){for(const t of this.indicatorEls)t.remove();this.indicatorEls=[];for(const t of this.options.indicators){const e=document.createElement("div");if(e.className="numberline-indicator",e.textContent="▲",t.color&&(e.style.color=t.color),e.dataset.value=String(t.value),t.label){const s=document.createElement("div");s.className="numberline-indicator-label",s.textContent=t.label,e.append(s)}this.ticksContainer.append(e),this.indicatorEls.push(e)}}valueToPx(t){const e=(t-this.options.rangeStart)/(this.options.rangeEnd-this.options.rangeStart);return Math.max(0,Math.min(1,e))*this.pxSizeX}updateSize(t){super.updateSize(t),this.track.style.width=`${this.pxSizeX}px`,this.track.style.height="2px",this.ticksContainer.style.width=`${this.pxSizeX}px`,this.ticksContainer.style.height=`${this.pxSizeY}px`,this.majorTicksContainer.style.width=`${this.pxSizeX}px`,this.majorTicksContainer.style.height=`${this.pxSizeY}px`,this.minorTicksContainer.style.width=`${this.pxSizeX}px`,this.minorTicksContainer.style.height=`${this.pxSizeY}px`,this.labelsContainer.style.width=`${this.pxSizeX}px`,this.labelsContainer.style.height=`${this.pxSizeY}px`,this.layoutTicks(),this.layoutIndicatorsAndTicks()}updatePosition(t,e){super.updatePosition(t,e),this.layoutIndicatorsAndTicks()}layoutTicks(){this.majorTicksContainer.innerHTML="",this.minorTicksContainer.innerHTML="";const t=this.options.rangeStart,e=this.options.rangeEnd,s=Math.ceil(t),i=Math.floor(e);for(let h=s;h<=i;h++)this.addTick(this.majorTicksContainer,h);const r=.1;let o=Math.ceil(t*10)/10;const a=Math.round((e-t)/r)+10;let l=0;for(;o<=e&&l<a;o=Math.round((o+r)*10)/10,l++)Math.abs(o-Math.round(o))<1e-9||this.addTick(this.minorTicksContainer,o)}addTick(t,e){const s=document.createElement("div");s.className="numberline-tick",s.dataset.value=String(e),t.append(s)}layoutIndicatorsAndTicks(){const t=this.pxSizeY/2-1;this.track.style.left="0px",this.track.style.top=`${t}px`;for(let i=0;i<this.majorTicksContainer.children.length;i++){const r=this.majorTicksContainer.children[i],o=Number(r.dataset.value),a=this.valueToPx(o),l=r.offsetWidth||2,h=r.offsetHeight||14;r.style.left=`${a-l/2}px`,r.style.top=`${this.pxSizeY/2-h/2}px`}for(let i=0;i<this.minorTicksContainer.children.length;i++){const r=this.minorTicksContainer.children[i],o=Number(r.dataset.value),a=this.valueToPx(o),l=r.offsetWidth||1,h=r.offsetHeight||6;r.style.left=`${a-l/2}px`,r.style.top=`${this.pxSizeY/2-h/2}px`}for(let i=0;i<this.indicatorEls.length;i++){const r=this.indicatorEls[i],o=Number(r.dataset.value),a=this.valueToPx(o),l=r.offsetWidth||14,h=r.offsetHeight||14,m=a-l/2;r.style.left=`${m}px`;const T=this.pxSizeY/2-h/2;r.style.top=`${T}px`}this.labelsContainer.innerHTML="";const e=document.createElement("div");e.className="numberline-endlabel",e.textContent=String(this.options.rangeStart),e.style.left="0px",this.labelsContainer.append(e);const s=document.createElement("div");s.className="numberline-endlabel",s.textContent=String(this.options.rangeEnd),s.style.left=`${this.pxSizeX}px`,s.style.transform="translateX(-100%)",this.labelsContainer.append(s)}destroy(){super.destroy(),this.indicatorEls=[]}react(t,e){if(t==="indicators")this.setIndicators(e);else if(t==="range"){const s=e;this.setRange(s[0],s[1])}}}var It=(n=>(n[n.PLUS_MINUS=0]="PLUS_MINUS",n[n.MUL_DIV=1]="MUL_DIV",n))(It||{});class Kt extends H{constructor(t){switch(t){case 0:{const e=Number((g(2,40)/10).toFixed(1)),s=Number((g(2,40)/10).toFixed(1)),i=Number((e+s).toFixed(1)),r=`${d("menu.formatCalculus")}<br><span class='formula'>[[${e}]] + [[${s}]] = ?</span>`;super(r,i,"",!0,new Wt(0,10,[new ht(e,"orange"),new ht(i,"orange")]));break}default:{const e=Number((g(5,19)/10).toFixed(1)),s=Number(g(2,5).toFixed(1)),i=Number((e*s).toFixed(1)),r=`${d("menu.formatCalculus")}<br><br>[[${s}]] x [[${e}]] = ?`,o=[];for(let a=1;a<=s;a++)o.push(new ht(a*e,"black"));super(r,i,"",!0,new Wt(0,10,o))}}}}class Xn extends H{constructor(){const t=u.ML,e=d("exercise.subtract_and_convert_to_ml.guide"),s=[u.ML,u.CL,u.DL,u.L];let i=s[Math.random()*s.length|0],r=s[Math.random()*s.length|0],o=g(i===u.ML?10:1,i===u.L?3:10),a=g(r===u.ML?10:1,r===u.L?3:10);A(o,i)<A(a,r)&&([o,a,i,r]=[a,o,r,i]);const l=`${e}
${o} ${b(i)} - ${a} ${b(r)}`,h=A(o,i)-A(a,r),m=nt(h,t);super(l,m,b(t))}}class Zn extends H{constructor(){const t=u.ML,e=d("exercise.multiply_and_convert_to_ml.guide"),s=[u.CL,u.DL,u.L],i=g(2,5),r=s[Math.random()*s.length|0],o=g(2,9),a=`${e}
${i} x ${o} ${b(r)}`,l=i*A(o,r),h=nt(l,t);super(a,h,b(t))}}class Jn extends H{constructor(){const t=d("exercise.easy_liquids_units.guide"),e=u.ML,s=[u.CL,u.DL,u.L],i=s[Math.random()*s.length|0],r=1,o=i===u.L?3:10,a=g(r,o),l=`${t} [[${a} ${b(i)}]]`,h=A(a,i);super(l,h,b(e))}}class Qn extends H{constructor(){const t=g(2,6),e=ve([u.CL,u.DL]),s=g(2,10),i=`${s} ${b(e)}`,r=b(u.ML),o=`
${t} ${jt(X.MG)}/${r}`,a=d("exercise.liquid_mass_concentration_amount.guide",{concentration:Ht(o),volumeLabel:Ht(i)}),l=A(s,e),h=t*l;super(a,h,jt(X.MG))}}class ts extends Ot{current=0;count=6;tasks=[];calculator;init(){if(y.reactor.set("score",0),this.exercise?.task==="decimals_calculus_easy")this.tasks=Array.from({length:6},()=>new Kt(It.PLUS_MINUS));else if(this.exercise?.task==="decimals_calculus_medium")this.tasks=Array.from({length:6},()=>new Kt(It.MUL_DIV));else if(this.exercise?.task==="add_and_convert_to_ml")this.tasks=Array.from({length:6},()=>new Yn);else if(this.exercise?.task==="subtract_and_convert_to_ml")this.tasks=Array.from({length:6},()=>new Xn);else if(this.exercise?.task==="multiply_and_convert_to_ml")this.tasks=Array.from({length:6},()=>new Zn);else if(this.exercise?.task==="divide_and_convert_to_ml")this.tasks=Array.from({length:6},()=>new Wn);else if(this.exercise?.task==="simple_convert_to_ml")this.tasks=Array.from({length:6},()=>new Jn);else if(this.exercise?.task==="liquid_mass_concentration_amount")this.tasks=Array.from({length:6},()=>new Qn);else{console.error(`unknown task ${this.exercise?.task}`);return}console.log("len: "+this.tasks.length),console.log(this.tasks[0].text),this.showNext()}cheat(){this.scene.finished(this.count,this.count)}showNext(){if(console.log(`task ${this.current} / ${this.tasks.length}`),this.current>=this.tasks.length){this.finished();return}const t=this.tasks[this.current];let e=t.text;e=e.replaceAll("[[",'<span style="color: orange;">'),e=e.replaceAll("]]","</span>"),e=e.replaceAll(`
`,"<br>"),this.current++,this.topList.destroy(),this.bottomList.destroy(),t.minimal?(this.topList.add(new E(e,new c(400,100),"dtext-panel",!0)),t.numberLine&&this.topList.add(new Kn(t.numberLine))):this.topList.add(new E(e,new c(400,200),"dtext-panel",!0)),this.calculator=new Gn(t.answerUnit),this.bottomList.add(this.calculator),this.showBottomButton("OK",()=>{this.answer(t)}),this.scene.root.refresh()}answer(t){this.calculator?.disable();const e=this.calculator?.getValue();console.log(e);const s=Number(e);if(!Number.isFinite(s)){console.error(`answer ${s}`);return}let i="";s==t.answer?(y.reactor.addition("score",1,0),i=`${d("gameplay.correct")} ${t.answer} ${t.answerUnit}`):i=d("gameplay.wrongPrefix",{answer:`${t.answer} ${t.answerUnit}`||"..."}),this.topList.add(new E(i,new c(400,100),"dtext-panel")),this.showNextButton(),this.scene.root.refresh()}finished(){this.scene.finished(y.reactor.getNumberValue("score"),this.count)}}class es extends U{correctOrder;listeners=new Map;draggedButton=null;pointerId=null;dragOffsetY=0;placeholder=null;containerRect=null;containerScrollTop=0;constructor(t,e){if(super(t,"drag-drop-button-list"),e.length===0)throw new Error("DragDropButtonList requires at least one button");this.correctOrder=e.map(i=>i.id);const s=this.createInitialOrder(e);this.element.classList.add("drag-drop-button-list"),s.forEach(i=>{const r=this.buildButton(i);this.element.append(r)})}disable(){for(const t of this.listeners.keys())t.style.pointerEvents="none"}isCorrectOrder(){const t=Array.from(this.element.children).filter(e=>e instanceof HTMLButtonElement).map(e=>e.dataset.id??"");return t.length!==this.correctOrder.length?!1:t.every((e,s)=>e===this.correctOrder[s])}destroy(){this.listeners.forEach((t,e)=>{e.removeEventListener("pointerdown",t.pointerdown),e.removeEventListener("pointermove",t.pointermove),e.removeEventListener("pointerup",t.pointerup),e.removeEventListener("pointercancel",t.pointercancel)}),this.listeners.clear(),this.draggedButton=null,this.pointerId=null,this.placeholder?.remove(),this.placeholder=null,super.destroy()}buildButton(t){const e=document.createElement("button");e.type="button",e.draggable=!1,e.textContent=t.label,e.dataset.id=t.id,e.classList.add("drag-drop-button-list__item","dbutton");const s={pointerdown:i=>this.handlePointerDown(i,e),pointermove:i=>this.handlePointerMove(i,e),pointerup:i=>this.handlePointerUp(i,e),pointercancel:i=>this.handlePointerUp(i,e)};return e.addEventListener("pointerdown",s.pointerdown),e.addEventListener("pointermove",s.pointermove),e.addEventListener("pointerup",s.pointerup),e.addEventListener("pointercancel",s.pointercancel),this.listeners.set(e,s),e}handlePointerDown(t,e){if(t.button!==0||(t.preventDefault(),this.draggedButton))return;this.draggedButton=e,this.pointerId=t.pointerId,this.containerRect=this.element.getBoundingClientRect(),this.containerScrollTop=this.element.scrollTop;const s=e.getBoundingClientRect();this.dragOffsetY=t.clientY-s.top,this.placeholder=this.createPlaceholder(s.height),this.element.insertBefore(this.placeholder,e),e.setPointerCapture(t.pointerId),e.classList.add("drag-drop-button-list__item--dragging");const i=s.left-(this.containerRect?.left??0),r=s.top-(this.containerRect?.top??0)+this.containerScrollTop;e.style.left=`${i}px`,e.style.top=`${r}px`}handlePointerMove(t,e){if(!this.draggedButton||this.draggedButton!==e||this.pointerId!==t.pointerId)return;const s=this.containerRect?.top??0,i=t.clientY-this.dragOffsetY-s+this.containerScrollTop;e.style.top=`${i}px`,this.updatePlaceholderPosition(t.clientY)}handlePointerUp(t,e){!this.draggedButton||this.draggedButton!==e||this.pointerId!==t.pointerId||(e.hasPointerCapture(t.pointerId)&&e.releasePointerCapture(t.pointerId),this.placeholder&&(this.element.insertBefore(e,this.placeholder),this.placeholder.remove(),this.placeholder=null),e.classList.remove("drag-drop-button-list__item--dragging"),e.style.left="",e.style.top="",this.draggedButton=null,this.pointerId=null,this.containerRect=null,this.dragOffsetY=0,this.containerScrollTop=0)}createInitialOrder(t){const e=yt(t.slice());if(t.length<2||!e.every((o,a)=>o.id===this.correctOrder[a]))return e;const i=e.slice(),r=i.length-1;return[i[r-1],i[r]]=[i[r],i[r-1]],i}createPlaceholder(t){const e=document.createElement("div");return e.className="drag-drop-button-list__placeholder",e.style.height=`${t}px`,e}updatePlaceholderPosition(t){if(!this.placeholder)return;const s=Array.from(this.element.children).filter(i=>i instanceof HTMLElement&&i!==this.draggedButton).find(i=>{if(i===this.placeholder)return!1;const r=i.getBoundingClientRect();return t<r.top+r.height/2});s?this.element.insertBefore(this.placeholder,s):this.element.appendChild(this.placeholder)}}class it{question;items;correctOrder;constructor(t,e){this.question=t,this.correctOrder=[...e],this.items=[...this.correctOrder]}isCorrect(t){if(t.length!==this.correctOrder.length)return!1;for(let e=0;e<t.length;e++)if(t[e]!==this.correctOrder[e])return!1;return!0}}const ns=[100,200,300,400,500];class ss extends it{constructor(){const t=is();super(d("exercise.sort_liquid_mass_concentration.guide"),t)}}function is(){const n=rs();ls(n);const t=[],e=new Set;for(const s of n)if(!e.has(s.key)&&(e.add(s.key),t.push(s),t.length===4))break;if(t.length<4)throw new Error("Failed to generate unique mass concentrations");return t.sort((s,i)=>s.ratio-i.ratio),t.map(s=>os(s))}function rs(){const n=[];for(const t of ns)for(let e=1;e<=9;e++){const s=e/t,i=as(e,t);n.push({mass:e,volume:t,ratio:s,key:i})}return n}function os(n){const t=`${n.volume} ${b(u.ML)}`;return`${n.mass} mg / ${t}`}function as(n,t){const e=cs(n,t);return`${n/e}/${t/e}`}function cs(n,t){let e=Math.abs(n),s=Math.abs(t);for(;s!==0;){const i=s;s=e%s,e=i}return e}function ls(n){for(let t=n.length-1;t>0;t--){const e=g(0,t),s=n[t];n[t]=n[e],n[e]=s}}class hs extends it{constructor(){const t=g(1,4),e=ds(t);super(d("exercise.sort_liquid_units.guide"),e)}}function ds(n){const t=n*50,e=n*8,s=n*6,i=n*3;return[`${t} ${b(u.ML)}`,`${e} ${b(u.CL)}`,`${s} ${b(u.DL)}`,`${i} ${b(u.L)}`]}const us=[u.ML,u.CL,u.DL,u.L];class ps extends it{constructor(){const t=g(1,9),e=[t,t*10,t*100,t*1e3],s=gs([...us]),i=e.map((r,o)=>fs(r,s[o]));super(d("exercise.sort_liquid_units_decimal.guide"),i)}}function fs(n,t){const e=Te[t];if(!Number.isFinite(e))throw new Error("Unsupported unit for decimal sort");const s=n/e;return`${ms(s)} ${b(t)}`}function ms(n){if(Number.isInteger(n))return n.toString();const t=n.toString();return t.includes("e")?n.toFixed(3).replace(/0+$/,"").replace(/\.$/,""):t.replace(/0+$/,"").replace(/\.$/,"")}function gs(n){for(let t=n.length-1;t>0;t--){const e=Math.floor(Math.random()*(t+1)),s=n[t];n[t]=n[e],n[e]=s}return n}var vt=(n=>(n[n.DECI=0]="DECI",n[n.CENT=1]="CENT",n))(vt||{});class Xt extends it{constructor(t){const e=ws(t);super(d("menu.formatSort"),e)}}function ws(n){const t=n===0?{min:.1,max:9.9,precision:1}:{min:.01,max:.19,precision:3},e=10**t.precision,s=Math.round(t.min*e),i=Math.round(t.max*e),r=new Set;for(;r.size<4;){const a=g(s,i)/e;r.add(Number(a.toFixed(t.precision)))}return[...r].sort((o,a)=>o-a).map(o=>bs(o,t.precision))}function bs(n,t){const e=n.toFixed(t).replace(/0+$/,"").replace(/\.$/,"");return e.includes(".")||t<=0?e:`${e}.0`}class ys extends Ot{current=0;count=6;tasks=[];sorter;correctAnswer="";init(){if(y.reactor.set("score",0),this.exercise?.task==="decimals_sort_easy")this.tasks=Array.from({length:6},()=>new Xt(vt.DECI));else if(this.exercise?.task==="decimals_sort_medium")this.tasks=Array.from({length:6},()=>new Xt(vt.CENT));else if(this.exercise?.task==="sort_liquid_units")this.tasks=Array.from({length:6},()=>new hs);else if(this.exercise?.task==="sort_liquid_units_decimal")this.tasks=Array.from({length:6},()=>new ps);else if(this.exercise?.task==="sort_liquid_mass_concentration")this.tasks=Array.from({length:6},()=>new ss);else{console.error(`Unknown sort task: ${this.exercise?.task}`);return}console.log("len: "+this.tasks.length),console.log(this.tasks[0].question),this.showNext()}cheat(){this.scene.finished(this.count,this.count)}showNext(){if(console.log(`task ${this.current} / ${this.tasks.length}`),this.current>=this.tasks.length){this.finished();return}const t=this.tasks[this.current];let e=[];this.correctAnswer="";let s=!0;for(const i of t.items)e.push({id:i,label:i}),s?s=!1:this.correctAnswer+=", ",this.correctAnswer+=i;this.current++,this.topList.destroy(),this.bottomList.destroy(),this.topList.add(new E(t.question,new c(400,200),"dtext-panel")),this.sorter=new es(new c(400,300),e),this.topList.add(this.sorter),this.showBottomButton("OK",()=>{this.answer(t)}),this.scene.root.refresh()}answer(t){this.sorter?.disable();let e="";this.sorter?.isCorrectOrder()?(y.reactor.addition("score",1,0),e=`${d("gameplay.correct")}`):e=d("gameplay.wrongPrefix",{answer:this.correctAnswer}),this.topList.add(new E(e,new c(400,100),"dtext-panel")),this.showNextButton(),this.scene.root.refresh()}finished(){this.scene.finished(y.reactor.getNumberValue("score"),this.count)}}class Es extends I{root;info;action;constructor(t,e){super(I.POPUP_ZBASE),this.root=y.popupContainer,this.info=t,this.action=e}init(){const t=new w;this.root.add(t,p.MIDDLE_CENTER),this.root.add(new st(t,"pop-up-plane",10),p.MIDDLE_CENTER);const e=300,s=new c(e,lt);t.add(new E(this.info,new c(e,e),"dtext-panel")),t.add(new x(d("common.yes"),this.action,s)),t.add(new x(d("common.no"),()=>{y.closePopup()},s))}uninit(){}}class Ts extends I{root;game;subtopic;exercise;ctrl;constructor(t){super(I.SCENE_ZBASE),this.game=t,this.root=t.sceneContainer,this.subtopic=void 0,this.exercise=void 0,this.ctrl=void 0}init(){if(!this.exercise){S(!1);return}if(!this.subtopic){S(!1);return}if(this.exercise.format=="mcq")this.ctrl=new Vn(this,this.exercise);else if(this.exercise.format=="calculus")this.ctrl=new ts(this,this.exercise);else if(this.exercise.format=="sort")this.ctrl=new ys(this,this.exercise);else{console.error("unhandled format: ",this.exercise.format),this.game.loadScene(this.game.mainMenu);return}this.ctrl.init(),this.addScoreBar(this.subtopic,this.exercise)}addScoreBar(t,e){const s=new c(400,80),i=s.y-10,r=new En(s);this.root.add(r,p.TOP_CENTER),r.add(new st(r,"quiz-plane"),p.TOP_LEFT);const o=6,a=d("gameplay.score",{score:0,total:o}),l=new E(a,new c(400,22),"dtext small left");l.react=(h,m)=>{const T=typeof m=="number"?m:0;l.element.textContent=d("gameplay.score",{score:T,total:o})},y.reactor.addListener(l,"score"),r.add(l,new p(c.BOTTOM_LEFT,c.BOTTOM_LEFT,new c(i+10,-10))),r.add(new E(`${d(t.name)} : ${Se(e)}`,new c(400-i-20,22),"dtext mini left"),new p(c.TOP_LEFT,c.TOP_LEFT,new c(i+10,2))),r.add(new x("II",()=>{this.pauseClicked()},new c(i,i),"dbutton pause-button"),new p(c.MIDDLE_LEFT,c.MIDDLE_LEFT,new c(5,0)))}pauseClicked(){const t=new Es(d("gameplay.quitMessage"),()=>{y.loadScene(this.game.mainMenu)});y.loadPopup(t)}uninit(){}setExercise(t,e){this.subtopic=t,this.exercise=e}exit(){this.exercise=void 0,this.ctrl=void 0}finished(t,e){if(!this.ctrl||!this.exercise){console.error(`finished ${this.ctrl} ${this.ctrl}`);return}this.ctrl.topList.destroy(),this.ctrl.bottomList.destroy(),L.setExerciseSuccess(this.exercise.id,t/e);const s=L.stars(this.exercise.id),i=`<p><span style="color: yellow;">${Le(s)}</span>`,r=`${d("menu.resultsTitle")} ${d("gameplay.score",{score:t,total:e})} ${i}`;this.ctrl.topList.add(new E(r,new c(400,200),"dtext-panel",!0)),this.ctrl.bottomList.add(new x("OK",()=>{y.loadScene(this.game.mainMenu)})),this.root.refresh()}}class Is extends I{root;game;info="";constructor(t){super(I.POPUP_ZBASE),this.game=t,this.root=t.popupContainer}init(){const t=new w;this.root.add(t,p.MIDDLE_CENTER),this.root.add(new st(t,"pop-up-plane",10),p.MIDDLE_CENTER);const e=300,s=new c(e,lt);t.add(new E(this.info,new c(e,e),"dtext-panel")),t.add(new x("OK",()=>{this.game.closePopup(),this.game.loadScene(this.game.mainMenu)},s))}uninit(){}}class vs extends bn{nextScene=void 0;nextPopup=void 0;scene;popup=void 0;sceneContainer;popupContainer;popupBG;mainMenu;quizScene;boot;settingsPopup;infoPopup;constructor(){super(),this.sceneContainer=this.createRoot(I.SCENE_ZBASE),this.popupContainer=this.createRoot(I.POPUP_ZBASE),this.popupBG=Ss(I.POPUP_ZBASE-1,()=>_s(this)),this.hidePopupBG(),this.mainMenu=new zn(this),this.quizScene=new Ts(this),this.boot=new Un(this),this.settingsPopup=new jn(this),this.infoPopup=new Is(this),this.scene=this.boot}update(t){this.nextScene?(this.scene.uninit(),this.scene=this.nextScene,this.nextScene=void 0,this.cleanupScene(),this.scene.init(),this.sceneContainer.refresh()):this.nextPopup?(this.popup&&(this.popup.uninit(),this.cleanupPopup()),this.popup=this.nextPopup,this.nextPopup=void 0,this.popup.init(),this.showPopupBG(),this.popupContainer.refresh()):(this.scene.update(t),this.popup&&this.popup.update(t))}hidePopupBG(){this.popupBG.style.display="none"}showPopupBG(){this.popupBG.style.display=""}closePopup(){this.popup&&(this.popup.uninit(),this.popup=void 0,this.cleanupPopup(),this.hidePopupBG())}cleanupScene(){this.sceneContainer.removeAll()}cleanupPopup(){this.popupContainer.removeAll()}loadScene(t){S(!this.nextScene&&!this.nextPopup),this.closePopup(),this.hidePopupBG(),this.nextScene=t}loadPopup(t){S(!this.nextScene&&!this.nextPopup),this.nextPopup=t}loadInfoPopup(t){this.infoPopup.info=t,this.loadPopup(this.infoPopup)}resize(t,e){const s=window.innerHeight/1024,i=s*10;document.documentElement.style.setProperty("--one",s+"px"),super.resize(0,i,t,e-2*i,s)}}function _s(n){console.log("pop-up BG pressed"),n.popup&&n.closePopup()}function Ss(n,t){const e=document.createElement("div");return Object.assign(e.style,{position:"fixed",inset:"0",background:"rgba(0,0,0,0.5)",zIndex:String(n),pointerEvents:"auto"}),e.addEventListener("pointerdown",s=>{s.preventDefault(),s.stopPropagation(),t?.(s)}),document.body.appendChild(e),e}const xs=()=>{};var Zt={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae=function(n){const t=[];let e=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},Cs=function(n){const t=[];let e=0,s=0;for(;e<n.length;){const i=n[e++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[e++];t[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[e++],o=n[e++],a=n[e++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(l>>10)),t[s++]=String.fromCharCode(56320+(l&1023))}else{const r=n[e++],o=n[e++];t[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return t.join("")},De={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,h=l?n[i+2]:0,m=r>>2,T=(r&3)<<4|a>>4;let _=(a&15)<<2|h>>6,W=h&63;l||(W=64,o||(_=64)),s.push(e[m],e[T],e[_],e[W])}return s.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Ae(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Cs(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=e[n.charAt(i++)],a=i<n.length?e[n.charAt(i)]:0;++i;const h=i<n.length?e[n.charAt(i)]:64;++i;const T=i<n.length?e[n.charAt(i)]:64;if(++i,r==null||a==null||h==null||T==null)throw new Ls;const _=r<<2|a>>4;if(s.push(_),h!==64){const W=a<<4&240|h>>2;if(s.push(W),T!==64){const fn=h<<6&192|T;s.push(fn)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ls extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const As=function(n){const t=Ae(n);return De.encodeByteArray(t,!0)},Me=function(n){return As(n).replace(/\./g,"")},Ds=function(n){try{return De.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s=()=>Ms().__FIREBASE_DEFAULTS__,Os=()=>{if(typeof process>"u"||typeof Zt>"u")return;const n=Zt.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Bs=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Ds(n[1]);return t&&JSON.parse(t)},Ns=()=>{try{return xs()||$s()||Os()||Bs()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},$e=()=>Ns()?.config;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,s)=>{e?this.reject(e):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,s))}}}function Ps(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Oe(){try{return typeof indexedDB=="object"}catch{return!1}}function Be(){return new Promise((n,t)=>{try{let e=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{t(i.error?.message||"")}}catch(e){t(e)}})}function Rs(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs="FirebaseError";class j extends Error{constructor(t,e,s){super(e),this.code=t,this.customData=s,this.name=Fs,Object.setPrototypeOf(this,j.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rt.prototype.create)}}class rt{constructor(t,e,s){this.service=t,this.serviceName=e,this.errors=s}create(t,...e){const s=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?zs(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new j(i,a,s)}}function zs(n,t){return n.replace(Us,(e,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const Us=/\{\$([^}]+)}/g;function Z(n,t){if(n===t)return!0;const e=Object.keys(n),s=Object.keys(t);for(const i of e){if(!s.includes(i))return!1;const r=n[i],o=t[i];if(Jt(r)&&Jt(o)){if(!Z(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!e.includes(i))return!1;return!0}function Jt(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs=1e3,js=2,Vs=14400*1e3,Gs=.5;function Qt(n,t=Hs,e=js){const s=t*Math.pow(e,n),i=Math.round(Gs*s*(Math.random()-.5)*2);return Math.min(Vs,s+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(n){return n&&n._delegate?n._delegate:n}class B{constructor(t,e,s){this.name=t,this.instanceFactory=e,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const s=new ks;if(this.instancesDeferred.set(e,s),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t?.identifier),s=t?.optional??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ws(t))try{this.getOrInitializeService({instanceIdentifier:N})}catch{}for(const[e,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(t=N){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=N){return this.instances.has(t)}getOptions(t=N){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:e});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(t,e){const s=this.normalizeInstanceIdentifier(e),i=this.onInitCallbacks.get(s)??new Set;i.add(t),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&t(r,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const s=this.onInitCallbacks.get(e);if(s)for(const i of s)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Ys(t),options:e}),this.instances.set(t,s),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=N){return this.component?this.component.multipleInstances?t:N:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ys(n){return n===N?void 0:n}function Ws(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new qs(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var f;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(f||(f={}));const Xs={debug:f.DEBUG,verbose:f.VERBOSE,info:f.INFO,warn:f.WARN,error:f.ERROR,silent:f.SILENT},Zs=f.INFO,Js={[f.DEBUG]:"log",[f.VERBOSE]:"log",[f.INFO]:"info",[f.WARN]:"warn",[f.ERROR]:"error"},Qs=(n,t,...e)=>{if(t<n.logLevel)return;const s=new Date().toISOString(),i=Js[t];if(i)console[i](`[${s}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ke{constructor(t){this.name=t,this._logLevel=Zs,this._logHandler=Qs,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in f))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Xs[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,f.DEBUG,...t),this._logHandler(this,f.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,f.VERBOSE,...t),this._logHandler(this,f.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,f.INFO,...t),this._logHandler(this,f.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,f.WARN,...t),this._logHandler(this,f.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,f.ERROR,...t),this._logHandler(this,f.ERROR,...t)}}const ti=(n,t)=>t.some(e=>n instanceof e);let te,ee;function ei(){return te||(te=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ni(){return ee||(ee=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pe=new WeakMap,_t=new WeakMap,Re=new WeakMap,dt=new WeakMap,Bt=new WeakMap;function si(n){const t=new Promise((e,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{e(M(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&Pe.set(e,n)}).catch(()=>{}),Bt.set(t,n),t}function ii(n){if(_t.has(n))return;const t=new Promise((e,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{e(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});_t.set(n,t)}let St={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return _t.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Re.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return M(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function ri(n){St=n(St)}function oi(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const s=n.call(ut(this),t,...e);return Re.set(s,t.sort?t.sort():[t]),M(s)}:ni().includes(n)?function(...t){return n.apply(ut(this),t),M(Pe.get(this))}:function(...t){return M(n.apply(ut(this),t))}}function ai(n){return typeof n=="function"?oi(n):(n instanceof IDBTransaction&&ii(n),ti(n,ei())?new Proxy(n,St):n)}function M(n){if(n instanceof IDBRequest)return si(n);if(dt.has(n))return dt.get(n);const t=ai(n);return t!==n&&(dt.set(n,t),Bt.set(t,n)),t}const ut=n=>Bt.get(n);function Fe(n,t,{blocked:e,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,t),a=M(o);return s&&o.addEventListener("upgradeneeded",l=>{s(M(o.result),l.oldVersion,l.newVersion,M(o.transaction),l)}),e&&o.addEventListener("blocked",l=>e(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),a}const ci=["get","getKey","getAll","getAllKeys","count"],li=["put","add","delete","clear"],pt=new Map;function ne(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(pt.get(t))return pt.get(t);const e=t.replace(/FromIndex$/,""),s=t!==e,i=li.includes(e);if(!(e in(s?IDBIndex:IDBObjectStore).prototype)||!(i||ci.includes(e)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let h=l.store;return s&&(h=h.index(a.shift())),(await Promise.all([h[e](...a),i&&l.done]))[0]};return pt.set(t,r),r}ri(n=>({...n,get:(t,e,s)=>ne(t,e)||n.get(t,e,s),has:(t,e)=>!!ne(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(di(e)){const s=e.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(e=>e).join(" ")}}function di(n){return n.getComponent()?.type==="VERSION"}const xt="@firebase/app",se="0.14.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D=new ke("@firebase/app"),ui="@firebase/app-compat",pi="@firebase/analytics-compat",fi="@firebase/analytics",mi="@firebase/app-check-compat",gi="@firebase/app-check",wi="@firebase/auth",bi="@firebase/auth-compat",yi="@firebase/database",Ei="@firebase/data-connect",Ti="@firebase/database-compat",Ii="@firebase/functions",vi="@firebase/functions-compat",_i="@firebase/installations",Si="@firebase/installations-compat",xi="@firebase/messaging",Ci="@firebase/messaging-compat",Li="@firebase/performance",Ai="@firebase/performance-compat",Di="@firebase/remote-config",Mi="@firebase/remote-config-compat",$i="@firebase/storage",Oi="@firebase/storage-compat",Bi="@firebase/firestore",Ni="@firebase/ai",ki="@firebase/firestore-compat",Pi="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct="[DEFAULT]",Ri={[xt]:"fire-core",[ui]:"fire-core-compat",[fi]:"fire-analytics",[pi]:"fire-analytics-compat",[gi]:"fire-app-check",[mi]:"fire-app-check-compat",[wi]:"fire-auth",[bi]:"fire-auth-compat",[yi]:"fire-rtdb",[Ei]:"fire-data-connect",[Ti]:"fire-rtdb-compat",[Ii]:"fire-fn",[vi]:"fire-fn-compat",[_i]:"fire-iid",[Si]:"fire-iid-compat",[xi]:"fire-fcm",[Ci]:"fire-fcm-compat",[Li]:"fire-perf",[Ai]:"fire-perf-compat",[Di]:"fire-rc",[Mi]:"fire-rc-compat",[$i]:"fire-gcs",[Oi]:"fire-gcs-compat",[Bi]:"fire-fst",[ki]:"fire-fst-compat",[Ni]:"fire-vertex","fire-js":"fire-js",[Pi]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J=new Map,Fi=new Map,Lt=new Map;function ie(n,t){try{n.container.addComponent(t)}catch(e){D.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function R(n){const t=n.name;if(Lt.has(t))return D.debug(`There were multiple attempts to register component ${t}.`),!1;Lt.set(t,n);for(const e of J.values())ie(e,n);for(const e of Fi.values())ie(e,n);return!0}function ot(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$=new rt("app","Firebase",zi);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(t,e,s){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new B("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw $.create("app-deleted",{appName:this._name})}}function ze(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const s={name:Ct,automaticDataCollectionEnabled:!0,...t},i=s.name;if(typeof i!="string"||!i)throw $.create("bad-app-name",{appName:String(i)});if(e||(e=$e()),!e)throw $.create("no-options");const r=J.get(i);if(r){if(Z(e,r.options)&&Z(s,r.config))return r;throw $.create("duplicate-app",{appName:i})}const o=new Ks(i);for(const l of Lt.values())o.addComponent(l);const a=new Ui(e,s,o);return J.set(i,a),a}function Hi(n=Ct){const t=J.get(n);if(!t&&n===Ct&&$e())return ze();if(!t)throw $.create("no-app",{appName:n});return t}function O(n,t,e){let s=Ri[n]??n;e&&(s+=`-${e}`);const i=s.match(/\s|\//),r=t.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${t}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),D.warn(o.join(" "));return}R(new B(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji="firebase-heartbeat-database",Vi=1,q="firebase-heartbeat-store";let ft=null;function Ue(){return ft||(ft=Fe(ji,Vi,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(q)}catch(e){console.warn(e)}}}}).catch(n=>{throw $.create("idb-open",{originalErrorMessage:n.message})})),ft}async function Gi(n){try{const e=(await Ue()).transaction(q),s=await e.objectStore(q).get(He(n));return await e.done,s}catch(t){if(t instanceof j)D.warn(t.message);else{const e=$.create("idb-get",{originalErrorMessage:t?.message});D.warn(e.message)}}}async function re(n,t){try{const s=(await Ue()).transaction(q,"readwrite");await s.objectStore(q).put(t,He(n)),await s.done}catch(e){if(e instanceof j)D.warn(e.message);else{const s=$.create("idb-set",{originalErrorMessage:e?.message});D.warn(s.message)}}}function He(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi=1024,Yi=30;class Wi{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Xi(e),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=oe();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:e}),this._heartbeatsCache.heartbeats.length>Yi){const i=Zi(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){D.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=oe(),{heartbeatsToSend:e,unsentEntries:s}=Ki(this._heartbeatsCache.heartbeats),i=Me(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return D.warn(t),""}}}function oe(){return new Date().toISOString().substring(0,10)}function Ki(n,t=qi){const e=[];let s=n.slice();for(const i of n){const r=e.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),ae(e)>t){r.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),ae(e)>t){e.pop();break}s=s.slice(1)}return{heartbeatsToSend:e,unsentEntries:s}}class Xi{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Oe()?Be().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Gi(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return re(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return re(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function ae(n){return Me(JSON.stringify({version:2,heartbeats:n})).length}function Zi(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let s=1;s<n.length;s++)n[s].date<e&&(e=n[s].date,t=s);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(n){R(new B("platform-logger",t=>new hi(t),"PRIVATE")),R(new B("heartbeat",t=>new Wi(t),"PRIVATE")),O(xt,se,n),O(xt,se,"esm2020"),O("fire-js","")}Ji("");var Qi="firebase",tr="12.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */O(Qi,tr,"app");const je="@firebase/installations",Nt="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve=1e4,Ge=`w:${Nt}`,qe="FIS_v2",er="https://firebaseinstallations.googleapis.com/v1",nr=3600*1e3,sr="installations",ir="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},F=new rt(sr,ir,rr);function Ye(n){return n instanceof j&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We({projectId:n}){return`${er}/projects/${n}/installations`}function Ke(n){return{token:n.token,requestStatus:2,expiresIn:ar(n.expiresIn),creationTime:Date.now()}}async function Xe(n,t){const s=(await t.json()).error;return F.create("request-failed",{requestName:n,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Ze({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function or(n,{refreshToken:t}){const e=Ze(n);return e.append("Authorization",cr(t)),e}async function Je(n){const t=await n();return t.status>=500&&t.status<600?n():t}function ar(n){return Number(n.replace("s","000"))}function cr(n){return`${qe} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lr({appConfig:n,heartbeatServiceProvider:t},{fid:e}){const s=We(n),i=Ze(n),r=t.getImmediate({optional:!0});if(r){const h=await r.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const o={fid:e,authVersion:qe,appId:n.appId,sdkVersion:Ge},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Je(()=>fetch(s,a));if(l.ok){const h=await l.json();return{fid:h.fid||e,registrationStatus:2,refreshToken:h.refreshToken,authToken:Ke(h.authToken)}}else throw await Xe("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(n){return new Promise(t=>{setTimeout(t,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=/^[cdef][\w-]{21}$/,At="";function ur(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const e=pr(n);return dr.test(e)?e:At}catch{return At}}function pr(n){return hr(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn=new Map;function en(n,t){const e=at(n);nn(e,t),fr(e,t)}function nn(n,t){const e=tn.get(n);if(e)for(const s of e)s(t)}function fr(n,t){const e=mr();e&&e.postMessage({key:n,fid:t}),gr()}let P=null;function mr(){return!P&&"BroadcastChannel"in self&&(P=new BroadcastChannel("[Firebase] FID Change"),P.onmessage=n=>{nn(n.data.key,n.data.fid)}),P}function gr(){tn.size===0&&P&&(P.close(),P=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr="firebase-installations-database",br=1,z="firebase-installations-store";let mt=null;function kt(){return mt||(mt=Fe(wr,br,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(z)}}})),mt}async function Q(n,t){const e=at(n),i=(await kt()).transaction(z,"readwrite"),r=i.objectStore(z),o=await r.get(e);return await r.put(t,e),await i.done,(!o||o.fid!==t.fid)&&en(n,t.fid),t}async function sn(n){const t=at(n),s=(await kt()).transaction(z,"readwrite");await s.objectStore(z).delete(t),await s.done}async function ct(n,t){const e=at(n),i=(await kt()).transaction(z,"readwrite"),r=i.objectStore(z),o=await r.get(e),a=t(o);return a===void 0?await r.delete(e):await r.put(a,e),await i.done,a&&(!o||o.fid!==a.fid)&&en(n,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pt(n){let t;const e=await ct(n.appConfig,s=>{const i=yr(s),r=Er(n,i);return t=r.registrationPromise,r.installationEntry});return e.fid===At?{installationEntry:await t}:{installationEntry:e,registrationPromise:t}}function yr(n){const t=n||{fid:ur(),registrationStatus:0};return rn(t)}function Er(n,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(F.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const e={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=Tr(n,e);return{installationEntry:e,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Ir(n)}:{installationEntry:t}}async function Tr(n,t){try{const e=await lr(n,t);return Q(n.appConfig,e)}catch(e){throw Ye(e)&&e.customData.serverCode===409?await sn(n.appConfig):await Q(n.appConfig,{fid:t.fid,registrationStatus:0}),e}}async function Ir(n){let t=await ce(n.appConfig);for(;t.registrationStatus===1;)await Qe(100),t=await ce(n.appConfig);if(t.registrationStatus===0){const{installationEntry:e,registrationPromise:s}=await Pt(n);return s||e}return t}function ce(n){return ct(n,t=>{if(!t)throw F.create("installation-not-found");return rn(t)})}function rn(n){return vr(n)?{fid:n.fid,registrationStatus:0}:n}function vr(n){return n.registrationStatus===1&&n.registrationTime+Ve<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _r({appConfig:n,heartbeatServiceProvider:t},e){const s=Sr(n,e),i=or(n,e),r=t.getImmediate({optional:!0});if(r){const h=await r.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const o={installation:{sdkVersion:Ge,appId:n.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Je(()=>fetch(s,a));if(l.ok){const h=await l.json();return Ke(h)}else throw await Xe("Generate Auth Token",l)}function Sr(n,{fid:t}){return`${We(n)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rt(n,t=!1){let e;const s=await ct(n.appConfig,r=>{if(!on(r))throw F.create("not-registered");const o=r.authToken;if(!t&&Lr(o))return r;if(o.requestStatus===1)return e=xr(n,t),r;{if(!navigator.onLine)throw F.create("app-offline");const a=Dr(r);return e=Cr(n,a),a}});return e?await e:s.authToken}async function xr(n,t){let e=await le(n.appConfig);for(;e.authToken.requestStatus===1;)await Qe(100),e=await le(n.appConfig);const s=e.authToken;return s.requestStatus===0?Rt(n,t):s}function le(n){return ct(n,t=>{if(!on(t))throw F.create("not-registered");const e=t.authToken;return Mr(e)?{...t,authToken:{requestStatus:0}}:t})}async function Cr(n,t){try{const e=await _r(n,t),s={...t,authToken:e};return await Q(n.appConfig,s),e}catch(e){if(Ye(e)&&(e.customData.serverCode===401||e.customData.serverCode===404))await sn(n.appConfig);else{const s={...t,authToken:{requestStatus:0}};await Q(n.appConfig,s)}throw e}}function on(n){return n!==void 0&&n.registrationStatus===2}function Lr(n){return n.requestStatus===2&&!Ar(n)}function Ar(n){const t=Date.now();return t<n.creationTime||n.creationTime+n.expiresIn<t+nr}function Dr(n){const t={requestStatus:1,requestTime:Date.now()};return{...n,authToken:t}}function Mr(n){return n.requestStatus===1&&n.requestTime+Ve<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $r(n){const t=n,{installationEntry:e,registrationPromise:s}=await Pt(t);return s?s.catch(console.error):Rt(t).catch(console.error),e.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Or(n,t=!1){const e=n;return await Br(e),(await Rt(e,t)).token}async function Br(n){const{registrationPromise:t}=await Pt(n);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(n){if(!n||!n.options)throw gt("App Configuration");if(!n.name)throw gt("App Name");const t=["projectId","apiKey","appId"];for(const e of t)if(!n.options[e])throw gt(e);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function gt(n){return F.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an="installations",kr="installations-internal",Pr=n=>{const t=n.getProvider("app").getImmediate(),e=Nr(t),s=ot(t,"heartbeat");return{app:t,appConfig:e,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Rr=n=>{const t=n.getProvider("app").getImmediate(),e=ot(t,an).getImmediate();return{getId:()=>$r(e),getToken:i=>Or(e,i)}};function Fr(){R(new B(an,Pr,"PUBLIC")),R(new B(kr,Rr,"PRIVATE"))}Fr();O(je,Nt);O(je,Nt,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt="analytics",zr="firebase_id",Ur="origin",Hr=60*1e3,jr="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ft="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v=new ke("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},C=new rt("analytics","Analytics",Vr);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(n){if(!n.startsWith(Ft)){const t=C.create("invalid-gtag-resource",{gtagURL:n});return v.warn(t.message),""}return n}function cn(n){return Promise.all(n.map(t=>t.catch(e=>e)))}function qr(n,t){let e;return window.trustedTypes&&(e=window.trustedTypes.createPolicy(n,t)),e}function Yr(n,t){const e=qr("firebase-js-sdk-policy",{createScriptURL:Gr}),s=document.createElement("script"),i=`${Ft}?l=${n}&id=${t}`;s.src=e?e?.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function Wr(n){let t=[];return Array.isArray(window[n])?t=window[n]:window[n]=t,t}async function Kr(n,t,e,s,i,r){const o=s[i];try{if(o)await t[o];else{const l=(await cn(e)).find(h=>h.measurementId===i);l&&await t[l.appId]}}catch(a){v.error(a)}n("config",i,r)}async function Xr(n,t,e,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await cn(e);for(const l of o){const h=a.find(T=>T.measurementId===l),m=h&&t[h.appId];if(m)r.push(m);else{r=[];break}}}r.length===0&&(r=Object.values(t)),await Promise.all(r),n("event",s,i||{})}catch(r){v.error(r)}}function Zr(n,t,e,s){async function i(r,...o){try{if(r==="event"){const[a,l]=o;await Xr(n,t,e,a,l)}else if(r==="config"){const[a,l]=o;await Kr(n,t,e,s,a,l)}else if(r==="consent"){const[a,l]=o;n("consent",a,l)}else if(r==="get"){const[a,l,h]=o;n("get",a,l,h)}else if(r==="set"){const[a]=o;n("set",a)}else n(r,...o)}catch(a){v.error(a)}}return i}function Jr(n,t,e,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=Zr(r,n,t,e),{gtagCore:r,wrappedGtag:window[i]}}function Qr(n){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(Ft)&&e.src.includes(n))return e;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to=30,eo=1e3;class no{constructor(t={},e=eo){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const ln=new no;function so(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function io(n){const{appId:t,apiKey:e}=n,s={method:"GET",headers:so(e)},i=jr.replace("{app-id}",t),r=await fetch(i,s);if(r.status!==200&&r.status!==304){let o="";try{const a=await r.json();a.error?.message&&(o=a.error.message)}catch{}throw C.create("config-fetch-failed",{httpStatus:r.status,responseMessage:o})}return r.json()}async function ro(n,t=ln,e){const{appId:s,apiKey:i,measurementId:r}=n.options;if(!s)throw C.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw C.create("no-api-key")}const o=t.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new co;return setTimeout(async()=>{a.abort()},Hr),hn({appId:s,apiKey:i,measurementId:r},o,a,t)}async function hn(n,{throttleEndTimeMillis:t,backoffCount:e},s,i=ln){const{appId:r,measurementId:o}=n;try{await oo(s,t)}catch(a){if(o)return v.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a?.message}]`),{appId:r,measurementId:o};throw a}try{const a=await io(n);return i.deleteThrottleMetadata(r),a}catch(a){const l=a;if(!ao(l)){if(i.deleteThrottleMetadata(r),o)return v.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:r,measurementId:o};throw a}const h=Number(l?.customData?.httpStatus)===503?Qt(e,i.intervalMillis,to):Qt(e,i.intervalMillis),m={throttleEndTimeMillis:Date.now()+h,backoffCount:e+1};return i.setThrottleMetadata(r,m),v.debug(`Calling attemptFetch again in ${h} millis`),hn(n,m,s,i)}}function oo(n,t){return new Promise((e,s)=>{const i=Math.max(t-Date.now(),0),r=setTimeout(e,i);n.addEventListener(()=>{clearTimeout(r),s(C.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function ao(n){if(!(n instanceof j)||!n.customData)return!1;const t=Number(n.customData.httpStatus);return t===429||t===500||t===503||t===504}class co{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function lo(n,t,e,s,i){if(i&&i.global){n("event",e,s);return}else{const r=await t,o={...s,send_to:r};n("event",e,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ho(){if(Oe())try{await Be()}catch(n){return v.warn(C.create("indexeddb-unavailable",{errorInfo:n?.toString()}).message),!1}else return v.warn(C.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function uo(n,t,e,s,i,r,o){const a=ro(n);a.then(_=>{e[_.measurementId]=_.appId,n.options.measurementId&&_.measurementId!==n.options.measurementId&&v.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>v.error(_)),t.push(a);const l=ho().then(_=>{if(_)return s.getId()}),[h,m]=await Promise.all([a,l]);Qr(r)||Yr(r,h.measurementId),i("js",new Date);const T=o?.config??{};return T[Ur]="firebase",T.update=!0,m!=null&&(T[zr]=m),i("config",h.measurementId,T),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(t){this.app=t}_delete(){return delete V[this.app.options.appId],Promise.resolve()}}let V={},he=[];const de={};let wt="dataLayer",fo="gtag",ue,dn,pe=!1;function mo(){const n=[];if(Ps()&&n.push("This is a browser extension environment."),Rs()||n.push("Cookies are not available."),n.length>0){const t=n.map((s,i)=>`(${i+1}) ${s}`).join(" "),e=C.create("invalid-analytics-context",{errorInfo:t});v.warn(e.message)}}function go(n,t,e){mo();const s=n.options.appId;if(!s)throw C.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)v.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw C.create("no-api-key");if(V[s]!=null)throw C.create("already-exists",{id:s});if(!pe){Wr(wt);const{wrappedGtag:r,gtagCore:o}=Jr(V,he,de,wt,fo);dn=r,ue=o,pe=!0}return V[s]=uo(n,he,de,t,ue,wt,e),new po(n)}function un(n=Hi()){n=Ne(n);const t=ot(n,tt);return t.isInitialized()?t.getImmediate():wo(n)}function wo(n,t={}){const e=ot(n,tt);if(e.isInitialized()){const i=e.getImmediate();if(Z(t,e.getOptions()))return i;throw C.create("already-initialized")}return e.initialize({options:t})}function pn(n,t,e,s){n=Ne(n),lo(dn,V[n.app.options.appId],t,e,s).catch(i=>v.error(i))}const fe="@firebase/analytics",me="0.10.18";function bo(){R(new B(tt,(t,{options:e})=>{const s=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return go(s,i,e)},"PUBLIC")),R(new B("analytics-internal",n,"PRIVATE")),O(fe,me),O(fe,me,"esm2020");function n(t){try{const e=t.getProvider(tt).getImmediate();return{logEvent:(s,i,r)=>pn(e,s,i,r)}}catch(e){throw C.create("interop-component-reg-failed",{reason:e})}}}bo();class k{static STORAGE_KEY="playerSettings";language="en";stats={};constructor(t){t?.language&&(this.language=t.language.toLowerCase()),t?.stats&&typeof t.stats=="object"&&(this.stats={...t.stats})}static loadFromStorage(){try{const t=localStorage.getItem(k.STORAGE_KEY);if(!t)return new k;const e=JSON.parse(t);return new k(e)}catch{return new k}}toJSON(){return{language:this.language,stats:this.stats}}save(){try{localStorage.setItem(k.STORAGE_KEY,JSON.stringify(this.toJSON()))}catch{}}setLanguage(t){this.language=(t||"en").toLowerCase(),this.save()}setExerciseSuccess(t,e){const s=Math.max(0,Math.min(1,Number(e))),i=`x:${t}`,r=this.stats[i];(r===void 0||s>r)&&(this.stats[i]=s,this.save())}stars(t){const e=this.stats?.[`x:${t}`];return e===void 0?0:e===1?3:e>.5?2:e>0?1:0}}const yo={apiKey:"AIzaSyCeRJx0UKqnYmhr6u_ZWyCrbU45Xb0ReIs",authDomain:"dolfin-math.firebaseapp.com",projectId:"dolfin-math",storageBucket:"dolfin-math.firebasestorage.app",messagingSenderId:"499035696239",appId:"1:499035696239:web:3a5ee2c439acd40797319a",measurementId:"G-W9DWNKS6P6"},Eo=ze(yo),To=un(Eo);console.log(To);Io("start");const zt=400,lt=100,bt=new c(zt,lt),et=document.querySelector("#app");if(!et)throw new Error("Unable to find the root #app element.");function Io(n){pn(un(),n)}et.classList.add("app-root");const L=k.loadFromStorage();L.save();const y=new vs;y.scene.init();function Y(n){const t=`./assets/${n}`;return console.log(`path: ${t}`),t}const Ut=()=>{if(!window.visualViewport){console.log("resizeCore: visualViewport not ready");return}y.resize(et.clientWidth||window.visualViewport.width,et.clientHeight||window.visualViewport.height)};window.addEventListener("resize",Ut);window.addEventListener("scroll",Ut);Ut();y.start();function vo(){document.addEventListener("touchmove",t=>{t.scale!==void 0&&t.scale!==1&&t.preventDefault()},{passive:!1});let n=0;document.addEventListener("touchend",t=>{const e=Date.now();e-n<=300&&t.preventDefault(),n=e},{passive:!1}),window.addEventListener("wheel",t=>{t.ctrlKey&&t.preventDefault()},{passive:!1})}function _o(){vo()}document.addEventListener("DOMContentLoaded",_o);
