(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();class c{constructor(t,n){this.x=t,this.y=n}static{this.TOP_LEFT=new c(0,0)}static{this.TOP_CENTER=new c(.5,0)}static{this.TOP_RIGHT=new c(1,0)}static{this.MIDDLE_LEFT=new c(0,.5)}static{this.MIDDLE_CENTER=new c(.5,.5)}static{this.MIDDLE_RIGHT=new c(1,.5)}static{this.BOTTOM_LEFT=new c(0,1)}static{this.BOTTOM_CENTER=new c(.5,1)}static{this.BOTTOM_RIGHT=new c(1,1)}static{this.CENTER=new c(.5,.5)}static{this.ZERO=new c(0,0)}static{this.ONE=new c(1,1)}}class p{constructor(t,n,s=c.ZERO){this.position=t,this.pivot=n,this.gOffset=s}static{this.TOP_LEFT=new p(c.TOP_LEFT,c.TOP_LEFT)}static{this.TOP_CENTER=new p(c.TOP_CENTER,c.TOP_CENTER)}static{this.TOP_RIGHT=new p(c.TOP_RIGHT,c.TOP_RIGHT)}static{this.MIDDLE_LEFT=new p(c.MIDDLE_LEFT,c.MIDDLE_LEFT)}static{this.MIDDLE_CENTER=new p(c.MIDDLE_CENTER,c.MIDDLE_CENTER)}static{this.MIDDLE_RIGHT=new p(c.MIDDLE_RIGHT,c.MIDDLE_RIGHT)}static{this.BOTTOM_LEFT=new p(c.BOTTOM_LEFT,c.BOTTOM_LEFT)}static{this.BOTTOM_CENTER=new p(c.BOTTOM_CENTER,c.BOTTOM_CENTER)}static{this.BOTTOM_RIGHT=new p(c.BOTTOM_RIGHT,c.BOTTOM_RIGHT)}}function L(e){e||console.error("Assertion failed!")}class ce{constructor(t,n,s,i,r){this.x=t,this.y=n,this.width=s,this.height=i,this.scale=r}unit(t){return t*this.scale}}let hn=0;class le{refresh(){}constructor(){this.ID=++hn}}class Ct extends le{constructor(){super(),this.destroyed=!1,this.pxSizeX=1,this.pxSizeY=1,this.z=-1}setZ(t){L(this.z==-1),this.z=t}setParent(t){L(this.parent==null),this.parent=t}updateSizeRef(t,n,s){this.pxSizeX=t.unit(n),this.pxSizeY=t.unit(s)}calculateTopLeft(t,n){L(this.z!=-1);const s=t.x+n.position.x*t.width,i=t.y+n.position.y*t.height;let r=s+t.unit(n.gOffset.x),o=i+t.unit(n.gOffset.y);return r-=n.pivot.x*this.pxSizeX,o-=n.pivot.y*this.pxSizeY,new c(r,o)}update(t){}destroy(){this.destroyed=!0}isDestroyed(){return this.destroyed}react(t,n){}}class U extends Ct{constructor(t,n=""){super(),this.visible=!0,this.refX=t.x,this.refY=t.y;const s=document.createElement("div");n!=""&&(s.className=n),s.style.position="absolute",s.style.display="none",document.body.append(s),this.element=s}setSize(t){this.refX=t.x,this.refY=t.y}setVisibility(t){this.element.style.display=t?"":"none"}updateSize(t){this.updateSizeRef(t,this.refX,this.refY);const n=this.element.style;n.width=this.pxSizeX+"px",n.height=this.pxSizeY+"px"}updatePosition(t,n){const s=this.calculateTopLeft(t,n);this.setTopLeft(s.x,s.y)}setTopLeft(t,n){const s=this.element.style;s.left=t+"px",s.top=n+"px",s.zIndex=this.z.toString()}destroy(){super.destroy(),this.element.remove()}refresh(){super.refresh(),this.setVisibility(this.visible)}}class I{static{this.SCENE_ZBASE=1e6}static{this.POPUP_ZBASE=2e6}update(t){}constructor(t){this.zBase=t}}class un{constructor(t,n){this.obj=t,this.key=n}}class dn{constructor(){this.values={},this.listeners=[]}set(t,n){if(!Object.is(this.values[t],n)){this.values[t]=n,this.listeners=this.listeners.filter(s=>!s.obj.isDestroyed());for(const s of this.listeners)s.key===t&&s.obj.react(t,n)}}addition(t,n,s=0){this.values.hasOwnProperty(t)||(this.values[t]=s);const i=this.values[t];if(typeof i!="number"||!Number.isFinite(i)){console.error(`Value for "${t}" is not a finite number (got ${String(i)})`);return}const r=i+n;this.set(t,r)}addListener(t,n){this.listeners.push(new un(t,n))}getNumberValue(t){const n=this.values[t];return typeof n=="number"&&Number.isFinite(n)?n:(console.error(`DReactor.getNumberValue: ${t}`),0)}getBooleanValue(t){const n=this.values[t];return typeof n=="boolean"?n:(console.error(`DReactor.getBooleanValue: ${t}`),!1)}}class pn{constructor(){this.roots=[],this.lastUpdate=0,this.STEP=1e3/20,this.loop=t=>{if(t-this.lastUpdate>=this.STEP){const n=t-this.lastUpdate;this.lastUpdate=t;try{this.update(n)}catch(s){console.error("DCore loop: error in update.",s)}for(const s of this.roots)s.update(n)}requestAnimationFrame(this.loop)},this.reactor=new dn}resize(t,n,s){for(const i of this.roots)i.updateLayout(new ce(0,0,t,n,s))}createRoot(t){let n=new mn(t);return this.roots.push(n),n}update(t){}start(){this.lastUpdate=performance.now(),requestAnimationFrame(this.loop)}}class fn{constructor(t,n){this.pos=t,this.obj=n}}class he{constructor(t,n){this.children=[],this.zBase=t,this.parent=n}add(t,n){t.setParent(this.parent),this.children.push(new fn(n,t)),t.setZ(this.zBase+this.children.length)}removeAll(){for(const t of this.children)t.obj.destroy();this.children=[]}}class ue extends Ct{constructor(t){super(),this.scale=1,this.refX=t.x,this.refY=t.y,this.collection=new he(-1,this)}setZ(t){super.setZ(t),this.collection.zBase=t}setTopLeft(t,n){const s=new ce(t,n,this.pxSizeX,this.pxSizeY,this.scale);for(const i of this.collection.children)i.obj.updateSize(s),i.obj.updatePosition(s,i.pos)}add(t,n){L(this.z!=-1),this.collection.add(t,n)}updateSize(t){this.scale=t.scale,this.updateSizeRef(t,this.refX,this.refY)}updatePosition(t,n){this.scale=t.scale;const s=this.calculateTopLeft(t,n);this.setTopLeft(s.x,s.y)}update(t){for(const n of this.collection.children)n.obj.update(t)}destroy(){this.collection.removeAll()}refresh(){super.refresh();for(const t of this.collection.children)t.obj.refresh()}}class mn extends le{constructor(t){super(),this.refreshLayoutOnNextUpdate=!1,this.collection=new he(t,this)}getZ(){return this.collection.zBase}updateLayout(t){this.box=t,this.refreshLayoutOnNextUpdate=!0}add(t,n){this.collection.add(t,n)}update(t){if(this.refreshLayoutOnNextUpdate&&this.box){for(const n of this.collection.children)n.obj.refresh(),n.obj.updateSize(this.box),n.obj.updatePosition(this.box,n.pos);this.refreshLayoutOnNextUpdate=!1}for(const n of this.collection.children)n.obj.update(t)}refresh(){this.refreshLayoutOnNextUpdate=!0}removeAll(){this.collection.removeAll()}}class b extends Ct{constructor(t=b.VERTICAL,n=b.ALIGN_CENTER){super(),this.children=[],this.orientation=t,this.alignment=n}static{this.HORIZONTAL=1001}static{this.VERTICAL=1002}static{this.ALIGN_FRONT=2001}static{this.ALIGN_BACK=2002}static{this.ALIGN_CENTER=2003}add(t){L(this.z!=-1),t.setParent(this),this.children.push(t),t.setZ(this.z+this.children.length)}updateSize(t){let n=0,s=0;for(const i of this.children)i.updateSize(t),this.orientation==b.VERTICAL?(s+=i.pxSizeY,n=Math.max(n,i.pxSizeX)):this.orientation==b.HORIZONTAL?(n+=i.pxSizeX,s=Math.max(s,i.pxSizeY)):L(!1);this.pxSizeX=n,this.pxSizeY=s}updatePosition(t,n){const s=this.calculateTopLeft(t,n);this.setTopLeft(s.x,s.y)}setTopLeft(t,n){let s=t,i=n;for(const r of this.children)this.orientation==b.VERTICAL?(this.alignment==b.ALIGN_FRONT?r.setTopLeft(s,i):this.alignment==b.ALIGN_BACK?r.setTopLeft(s+this.pxSizeX-r.pxSizeX,i):this.alignment==b.ALIGN_CENTER?r.setTopLeft(s+(this.pxSizeX-r.pxSizeX)/2,i):L(!1),i+=r.pxSizeY):this.orientation==b.HORIZONTAL?(r.setTopLeft(s,i),s+=r.pxSizeX):L(!1)}update(t){this.children=this.children.filter(n=>!n.isDestroyed());for(const n of this.children)n.update(t)}refresh(){for(const t of this.children)t.refresh()}destroy(){for(const t of this.children)t.destroy();this.children=[]}}const de=["en","fi","sv","th"];function pe(e){return e==="sv"&&(e="se"),({en:"GB"}[e]||e).toUpperCase().replace(/./g,s=>String.fromCodePoint(127397+s.charCodeAt(0)))}const gn=de.map(pe).join("");function mt(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}var u=(e=>(e[e.ML=0]="ML",e[e.CL=1]="CL",e[e.DL=2]="DL",e[e.L=3]="L",e))(u||{}),Z=(e=>(e[e.MG=0]="MG",e))(Z||{});const fe={0:1,1:10,2:100,3:1e3};function me(e){const t=fe[e];if(!Number.isFinite(t))throw new Error("Cannot convert using non-volume unit");return t}function D(e,t){return e*me(t)}function st(e,t){return e/me(t)}function E(e,t){const n=Math.ceil(e),s=Math.floor(t);return Math.max(n,Math.floor(Math.random()*(s-n+1))+n)}function ge(e){const t=E(0,e.length-1);return e[t]}function kt(e){return`[[${e}]]`}const St=new Map;let gt=[];async function we(e){const t=(e||"en").toLowerCase();for(const r of gt)St.delete(r);gt=[];const n=q(`i18n/${t}.json`),s=await fetch(n);if(!s.ok)throw new Error(`i18n load failed: ${s.status} ${s.statusText}`);console.log(`language loaded: ${e}`);const i=await s.json();Ee(i)}function d(e,t,n){const s=St.get(e)??n??e;return t?s.replace(/\{(\w+)\}/g,(i,r)=>String(t[r]??`{${r}}`)):s}function be(e){return d(`exercise.${e.id}.title`)}function g(e){switch(e){case u.ML:return d("units.ml");case u.CL:return d("units.cl");case u.DL:return d("units.dl");case u.L:return d("units.l");default:return"?"}}function Ft(e){switch(e){case Z.MG:return d("units.mg",void 0,"mg");default:return"?"}}function ye(e){const t=e.toLowerCase();return t==="sv"?d("language.swedish",void 0,"Swedish"):t==="fi"?d("language.finnish",void 0,"Finnish"):t==="th"?d("language.thai",void 0,"Thai"):t==="en"?d("language.english",void 0,"English"):(console.error(`languageName: ${e}`),e)}function Ee(e,t){for(const[n,s]of Object.entries(e)){const i=t?`${t}.${n}`:n;typeof s=="string"?(St.set(i,s),gt.push(i)):wn(s)&&Ee(s,i)}}function wn(e){return!!e&&typeof e=="object"&&!Array.isArray(e)}const wt=new Map,X=new Map;function bn(e){const t=e.split("?")[0].toLowerCase();return/\.(png|jpe?g|gif|webp|bmp|svg)$/.test(t)?"image":t.endsWith(".json")||t.endsWith(".txt")?"text":"blob"}function zt(e){if(!e.ok)throw new Error(`Failed to load (${e.status} ${e.statusText})`);return e}function yn(e){return new Promise((t,n)=>{const s=new Image;s.decoding="async",s.onload=()=>t(s),s.onerror=()=>n(new Error(`Failed to load image: ${e}`)),s.src=q(e)})}async function En(e,t=bn(e)){if(wt.has(e))return;if(X.has(e))return X.get(e).then(()=>{});let n;t==="image"?n=yn(e):t==="text"?n=fetch(q(e),{credentials:"same-origin"}).then(zt).then(s=>s.text()):n=fetch(e,{credentials:"same-origin"}).then(zt).then(s=>s.blob()),X.set(e,n);try{const s=await n;wt.set(e,s)}finally{X.delete(e)}}function Tn(e){const t=wt.get(e);return typeof t!="string"?(console.error(`Text not found in cache: ${e}`),""):t}let bt;async function In(e){const t=await fetch(e);if(!t.ok)throw new Error(`Failed to load catalog [${e}]: ${t.status} ${t.statusText}`);bt=await t.json()}function _n(e){if(!bt)throw new Error;for(const t of bt.areas){const n=t.topics.find(s=>s.id===e);if(n)return n}throw new Error(`Topic not found: ${e}`)}function vn(e){return _n(e).subtopics}function Cn(e){return`questions/${A.language}/${e}.json`}async function Sn(e){const t=Cn(e);await En(t);const n=Tn(t);if(!n)throw new Error(`Question data for "${e}" not loaded. Call loadById first.`);let s;try{s=JSON.parse(n)}catch(i){throw new Error(`Failed to parse question data for "${e}": ${i.message}`)}if(!Array.isArray(s))throw new Error(`Question data for "${e}" is not an array`);return s}let Lt=new c(400,50);function Ln(e){Lt=e}class _ extends U{constructor(t,n,s="dtext",i=!1){super(n,s),i?this.element.innerHTML=t||"???":this.element.textContent=t||"???"}react(t,n){this.element.textContent=n}}class S extends U{constructor(t,n,s=Lt,i="dbutton"){super(s,"dbutton-div"),this.vanishTime=2e3,this.vanishing=!1,this.action=n,this.htmlButton=document.createElement("div"),this.htmlButton.className=i,this.htmlButton.style.position="relative",this.htmlButton.textContent=t,this.element.appendChild(this.htmlButton),this.clickHandler=()=>{this.action()},this.htmlButton.addEventListener("click",this.clickHandler)}vanish(){this.vanishing=!0,this.element.removeEventListener("click",this.clickHandler)}disable(){this.htmlButton.style.pointerEvents="none"}update(t){this.vanishing&&(this.refY*=.9,this.vanishTime-=t,this.vanishTime<=0&&this.destroy(),this.parent?.refresh(),console.log("vanishing "+t+" pxy"+this.pxSizeY))}setAction(t){this.action=t}}class Ht extends S{constructor(t,n,s){super(t,s,Lt,"dbutton split-button"),this.htmlRight=document.createElement("div"),this.htmlRight.className="split-button-right",this.htmlRight.textContent=n,this.element.appendChild(this.htmlRight)}}class xn extends U{constructor(t,n){super(n);const s=document.createElement("img");s.src=q(t),s.style.width="100%",s.style.height="100%",s.style.objectFit="cover",this.element.appendChild(s)}}const Te="★",An="☆";function Ie(e){let t="";for(let n=0;n<3;n++)t+=n<e?Te:An;return t}class Dn extends S{htmlStars;constructor(t,n,s,i){super(t,i,new c(400,50),"dbutton sub-topic-button"),this.htmlStars=document.createElement("div"),this.htmlStars.className="sub-topic-stars",this.htmlStars.textContent=`${Te} ${n} / ${s}`,this.element.appendChild(this.htmlStars),this.disable()}}const _e=new c(200,100);class On extends S{htmlRight;constructor(t,n,s){super(t,s,_e,"dbutton exercise-button"),this.htmlRight=document.createElement("div"),this.htmlRight.className="sub-topic-stars",this.htmlRight.textContent=Ie(n),this.element.appendChild(this.htmlRight)}}class xt extends U{relMargin;anchor;constructor(t,n,s=0){super(new c(10,10),n),this.relMargin=s,this.anchor=t}updateSize(t){const n=this.element.style,s=t.scale*this.relMargin;n.width=this.anchor.pxSizeX+2*s+"px",n.height=this.anchor.pxSizeY+2*s+"px"}calculateTopLeft(t,n){let s=this.anchor.calculateTopLeft(t,n);const i=t.scale*this.relMargin;return s.x-=i,s.y-=i,s}}class Ut extends _{constructor(t){super(t,new c(400,100),"dtext-title")}}class Mn extends U{video;constructor(t,n,s,i=""){super(new c(t,n),i),this.element.style.overflow="hidden",this.element.style.backgroundColor="transparent",this.element.style.display="";const r=document.createElement("video");r.preload="auto",r.playsInline=!0,r.setAttribute("playsinline",""),r.autoplay=!0,r.muted=!0,r.loop=!1,r.controls=!1,r.style.position="absolute",r.style.left="50%",r.style.top="50%",r.style.transform="translate(-50%, -50%)",r.style.width="100%",r.style.height="100%",r.style.objectFit="contain",r.src=q(s),this.element.appendChild(r),this.video=r;const o=()=>{console.log("onCanPlay"),this.video.play().catch(a=>{console.warn("video.play() rejected:",a)}),this.video.removeEventListener("canplay",o)};this.video.addEventListener("canplay",o,{once:!0}),this.video.addEventListener("error",a=>{console.error("Video error",a,this.video.error)}),this.video.addEventListener("loadeddata",()=>console.log("loadeddata")),this.video.addEventListener("canplay",()=>console.log("canplay"))}destroy(){try{this.video.pause(),this.video.removeAttribute("src")}catch{}super.destroy()}playOnceAgain(){this.isDestroyed()||this.video.load()}}class Bn extends I{root;game;backButton;backAction;subtopic=void 0;constructor(t){super(I.SCENE_ZBASE),this.game=t,this.root=t.sceneContainer,Ln(uo)}init(){if(this.subtopic){this.goSubTopics();return}const t=this.root;t.removeAll();const n=new b;t.add(n,p.MIDDLE_CENTER),n.add(new xn("icons/title.png",new c(300,100))),n.add(new Mn(400,300,"videos/hello.mp4")),n.add(new S(d("menu.start"),()=>this.goSubTopics())),n.add(new Ht(d("menu.language"),gn,()=>this.goLanguageSelection())),t.refresh()}uninit(){}goLanguageSelection(){const t=this.root;t.removeAll();const n=new b;t.add(n,p.MIDDLE_CENTER),n.add(new Ut(d("language.title")));for(const s of de)n.add(new Ht(ye(s),pe(s),()=>this.setLanguage(s)));this.addBackButton(this.init),t.refresh()}setLanguage(t){this.game.showPopupBG(),Promise.all([we(t)]).then(()=>this.setLanguageDone(t)).catch(n=>{console.error("setLanguage",n),this.game.hidePopupBG()})}setLanguageDone(t){A.setLanguage(t),this.game.loadInfoPopup("language")}addBackButton(t){this.backButton=new S(d("menu.commonBack"),()=>{this.backPressed()},new c(150,100)),this.root.add(this.backButton,new p(c.BOTTOM_CENTER,c.BOTTOM_LEFT,new c(-200,-10))),this.backAction=t}backPressed(){this.backAction&&this.backAction()}goSubTopics(){this.subtopic=void 0;const t=this.root;t.removeAll();const n=new b;this.root.add(n,p.TOP_CENTER),n.add(new Ut(d("menu.subtopicsTitle")));const s=vn("measurement");console.log(s.length);for(const i of s){const r=(i.exercise?.length||0)*3;let o=0;if(A&&i.exercise)for(const x of i.exercise){const W=A.stars(x.id);o+=W}n.add(new Dn(d(i.name),o,r,()=>{}));const a=_e,l=2*a.y,h=new ue(new c(a.x*2,l));n.add(h);let m=0,T=0,y=0;for(const x of i.exercise){const W=A.stars(x.id);h.add(new On(be(x),W,()=>{this.startExercise(x),this.subtopic=i}),new p(c.TOP_LEFT,c.TOP_LEFT,new c(m,T))),y++,y%2==0?(m=0,T+=a.y):m=a.x}}this.addBackButton(this.init),t.refresh()}startExercise(t){console.log(`start ${t.id}`),w.loadScene(w.quizScene),w.quizScene.setExercise(t)}}class $n extends I{root;game;done;constructor(t){super(I.SCENE_ZBASE),this.game=t,this.root=t.sceneContainer,this.done=!1}init(){const t=new b;this.root.add(t,p.MIDDLE_CENTER),t.add(new _(". . .",new c(200,50)));const n=q("question_catalog.json");this.done=!1,Promise.all([In(n),we(A.language).catch(s=>{console.warn("i18n load failed",s)})]).then(()=>Pn(this)).catch(s=>console.error(s))}update(t){this.done&&this.game.loadScene(this.game.mainMenu)}uninit(){}}function Pn(e){e.done=!0,console.log(d("menu.start"))}class Rn extends I{root;game;constructor(t){super(I.POPUP_ZBASE),this.game=t,this.root=t.popupContainer}init(){const t=new b;this.root.add(t,p.MIDDLE_CENTER),t.add(new _("Settings",new c(200,50)))}uninit(){}}class At{scene;exercise;topList;bottomList;nextButton=void 0;constructor(t,n){this.scene=t,this.exercise=n,this.topList=new b,this.scene.root.add(this.topList,new p(c.TOP_CENTER,c.TOP_CENTER,new c(0,105))),this.bottomList=new b,this.scene.root.add(this.bottomList,new p(c.BOTTOM_CENTER,c.BOTTOM_CENTER,new c(0,-120)))}showNextButton(){this.showBottomButton(d("menu.commonNext"),()=>{this.showNextClicked()})}showBottomButton(t,n){this.nextButton&&this.nextButton.destroy(),this.nextButton=new S(t,n,new c(2*ln/3,V)),this.scene.root.add(this.nextButton,new p(c.BOTTOM_CENTER,c.BOTTOM_CENTER,new c(0,-20/2)))}showNextClicked(){this.nextButton?.destroy(),this.showNext()}}class Nn extends At{questions=[];count=6;current=-1;correct="";buttons=[];init(){Sn(this.exercise.id).then(t=>{this.initQuestions(t)}).catch(()=>{console.error("MCQControl init failed")})}initQuestions(t){console.log(`loaded ${t.length} questions`),t=mt(t),this.questions=t.length>this.count?t.slice(0,this.count):t,this.current=0,this.showNext()}cheat(){this.scene.finished(this.count,this.count)}showNext(){if(this.current>=this.count){this.scene.finished(w.reactor.getNumberValue("score"),this.count);return}const t=this.questions[this.current];this.topList.destroy(),this.bottomList.destroy(),this.topList.add(new _(t.question,new c(400,200),"dtext-panel")),this.correct=t.options[0];const n=mt(t.options);for(const s of n){const i=new S(s,()=>{this.answer(s)});this.buttons.push(i),this.bottomList.add(i)}this.scene.root.refresh()}answer(t){for(const r of this.buttons)r.disable();const n=this.correct===t;console.log(`isCorrect: ${n}`),this.colorize(this.correct,"green");const s=this.questions[this.current];let i="";n?(w.reactor.addition("score",1,0),i=`${d("gameplay.correct")} ${s.explanation}`):(i=d("gameplay.wrongPrefix",{answer:s.explanation||"..."}),this.colorize(t,"red")),this.topList.add(new _(i,new c(400,200),"dtext-panel")),this.current++,this.showNextButton(),this.scene.root.refresh()}colorize(t,n){for(const s of this.buttons)if(s.element.textContent===t){s.htmlButton.style.backgroundColor=`var(--${n})`;return}}}class kn extends U{displayValue;displayUnit;buttons=[];onChange;value="";constructor(t,n=new c(400,400),s){super(n,"calculator"),this.onChange=s,this.displayValue=document.createElement("span"),this.displayValue.className="calculator__value",this.displayUnit=document.createElement("span"),this.displayUnit.className="calculator__unit",this.displayUnit.textContent=t;const i=document.createElement("div");i.className="calculator__display",i.append(this.displayValue,this.displayUnit);const r=document.createElement("div");r.className="calculator__grid",this.element.append(i,r),this.buttons=[{label:"7",action:()=>this.appendDigit("7")},{label:"8",action:()=>this.appendDigit("8")},{label:"9",action:()=>this.appendDigit("9")},{label:"4",action:()=>this.appendDigit("4")},{label:"5",action:()=>this.appendDigit("5")},{label:"6",action:()=>this.appendDigit("6")},{label:"1",action:()=>this.appendDigit("1")},{label:"2",action:()=>this.appendDigit("2")},{label:"3",action:()=>this.appendDigit("3")},{label:"0",action:()=>this.appendDigit("0"),css:"calculator__button--zero"},{label:",",action:()=>this.appendComma()},{label:"⌫",action:()=>this.backspace(),css:"calculator__button--backspace"}],this.buttons.forEach(o=>{const a=document.createElement("button");o.element=a,a.type="button",a.textContent=o.label,a.className=`calculator__button ${o.css??""}`.trim(),a.addEventListener("click",o.action),r.append(a)}),this.render()}disable(){this.buttons.forEach(t=>{const n=t.element?.style;n?.pointerEvents&&(n.pointerEvents="none")})}setUnit(t){this.displayUnit.textContent=t}setValue(t){this.value=Fn(t),this.render()}getValue(){return this.value}clear(){this.value!==""&&(this.value="",this.render())}appendDigit(t){t==="0"&&this.value==="0"||(this.value==="0"?this.value=t:this.value+=t,this.render())}appendComma(){this.value.includes(",")||(this.value=this.value===""?"0,":`${this.value},`,this.render())}backspace(){this.value!==""&&(this.value=this.value.slice(0,-1),this.render())}render(){this.displayValue.textContent=this.value||"0",this.onChange?.(this.value)}}function Fn(e){const t=e.trim();if(t==="")return"";const s=t.replace(".",",").match(/^\d*(?:,\d*)?$/);return s?s[0].startsWith("0")&&!s[0].startsWith("0,")?s[0].replace(/^0+/,"")||"0":s[0]:""}class G{text;answer;answerUnit;constructor(t,n,s){this.text=t,this.answer=n,this.answerUnit=s}}class zn extends G{constructor(){const t=g(u.ML),n=d("exercise.add_and_convert_to_ml.guide"),s=[u.ML,u.CL,u.DL,u.L],i=s[Math.random()*s.length|0],r=s[Math.random()*s.length|0],o=E(i===u.ML?10:1,i===u.L?3:10),a=E(r===u.ML?10:1,r===u.L?3:10),l=`${n}
${o} ${g(i)} + ${a} ${g(r)}`,h=D(o,i)+D(a,r),m=st(h,u.ML);super(l,m,t)}}class Hn extends G{constructor(){const t=u.ML,n=E(2,5),s=E(2,6)*Math.pow(10,E(1,2));let i=n*s;const r=ge([u.CL,u.DL,u.L]);i=st(i,r);const a=`${d("exercise.divide_and_convert_to_ml.guide")}
${i} ${g(r)} / ${n}`;super(a,s,g(t))}}class Un extends G{constructor(){const t=E(2,6),n=ge([u.CL,u.DL]),s=E(2,10),i=`${s} ${g(n)}`,r=g(u.ML),o=`
${t} ${Ft(Z.MG)}/${r}`,a=d("exercise.liquid_mass_concentration_amount.guide",{concentration:kt(o),volumeLabel:kt(i)}),l=D(s,n),h=t*l;super(a,h,Ft(Z.MG))}}class jn extends G{constructor(){const t=u.ML,n=d("exercise.multiply_and_convert_to_ml.guide"),s=[u.CL,u.DL,u.L],i=E(2,5),r=s[Math.random()*s.length|0],o=E(2,9),a=`${n}
${i} x ${o} ${g(r)}`,l=i*D(o,r),h=st(l,t);super(a,h,g(t))}}class Vn extends G{constructor(){const t=d("exercise.easy_liquids_units.guide"),n=u.ML,s=[u.CL,u.DL,u.L],i=s[Math.random()*s.length|0],r=1,o=i===u.L?3:10,a=E(r,o),l=`${t} [[${a} ${g(i)}]]`,h=D(a,i);super(l,h,g(n))}}class Gn extends G{constructor(){const t=u.ML,n=d("exercise.subtract_and_convert_to_ml.guide"),s=[u.ML,u.CL,u.DL,u.L];let i=s[Math.random()*s.length|0],r=s[Math.random()*s.length|0],o=E(i===u.ML?10:1,i===u.L?3:10),a=E(r===u.ML?10:1,r===u.L?3:10);D(o,i)<D(a,r)&&([o,a,i,r]=[a,o,r,i]);const l=`${n}
${o} ${g(i)} - ${a} ${g(r)}`,h=D(o,i)-D(a,r),m=st(h,t);super(l,m,g(t))}}class qn extends At{current=0;count=6;tasks=[];calculator;init(){if(w.reactor.set("score",0),this.exercise?.task==="add_and_convert_to_ml")this.tasks=Array.from({length:6},()=>new zn);else if(this.exercise?.task==="subtract_and_convert_to_ml")this.tasks=Array.from({length:6},()=>new Gn);else if(this.exercise?.task==="multiply_and_convert_to_ml")this.tasks=Array.from({length:6},()=>new jn);else if(this.exercise?.task==="divide_and_convert_to_ml")this.tasks=Array.from({length:6},()=>new Hn);else if(this.exercise?.task==="simple_convert_to_ml")this.tasks=Array.from({length:6},()=>new Vn);else if(this.exercise?.task==="liquid_mass_concentration_amount")this.tasks=Array.from({length:6},()=>new Un);else{console.error(`unknown task ${this.exercise?.task}`);return}console.log("len: "+this.tasks.length),console.log(this.tasks[0].text),this.showNext()}cheat(){this.scene.finished(this.count,this.count)}showNext(){if(console.log(`task ${this.current} / ${this.tasks.length}`),this.current>=this.tasks.length){this.finished();return}const t=this.tasks[this.current];let n=t.text;n=n.replaceAll("[[",'<span style="color: yellow;">'),n=n.replaceAll("]]","</span>"),n=n.replaceAll(`
`,"<br>"),this.current++,this.topList.destroy(),this.bottomList.destroy(),this.topList.add(new _(n,new c(400,200),"dtext-panel",!0)),this.calculator=new kn(t.answerUnit),this.bottomList.add(this.calculator),this.showBottomButton("OK",()=>{this.answer(t)}),this.scene.root.refresh()}answer(t){this.calculator?.disable();const n=this.calculator?.getValue(),s=Number(n);if(!Number.isFinite(s))return;let i="";s==t.answer?(w.reactor.addition("score",1,0),i=`${d("gameplay.correct")} ${t.answer} ${t.answerUnit}`):i=d("gameplay.wrongPrefix",{answer:`${t.answer} ${t.answerUnit}`||"..."}),this.topList.add(new _(i,new c(400,100),"dtext-panel")),this.showNextButton(),this.scene.root.refresh()}finished(){this.scene.finished(w.reactor.getNumberValue("score"),this.count)}}class Wn extends U{correctOrder;listeners=new Map;draggedButton=null;pointerId=null;dragOffsetY=0;placeholder=null;containerRect=null;containerScrollTop=0;constructor(t,n){if(super(t,"drag-drop-button-list"),n.length===0)throw new Error("DragDropButtonList requires at least one button");this.correctOrder=n.map(i=>i.id);const s=this.createInitialOrder(n);this.element.classList.add("drag-drop-button-list"),s.forEach(i=>{const r=this.buildButton(i);this.element.append(r)})}disable(){for(const t of this.listeners.keys())t.style.pointerEvents="none"}isCorrectOrder(){const t=Array.from(this.element.children).filter(n=>n instanceof HTMLButtonElement).map(n=>n.dataset.id??"");return t.length!==this.correctOrder.length?!1:t.every((n,s)=>n===this.correctOrder[s])}destroy(){this.listeners.forEach((t,n)=>{n.removeEventListener("pointerdown",t.pointerdown),n.removeEventListener("pointermove",t.pointermove),n.removeEventListener("pointerup",t.pointerup),n.removeEventListener("pointercancel",t.pointercancel)}),this.listeners.clear(),this.draggedButton=null,this.pointerId=null,this.placeholder?.remove(),this.placeholder=null,super.destroy()}buildButton(t){const n=document.createElement("button");n.type="button",n.draggable=!1,n.textContent=t.label,n.dataset.id=t.id,n.classList.add("drag-drop-button-list__item","dbutton");const s={pointerdown:i=>this.handlePointerDown(i,n),pointermove:i=>this.handlePointerMove(i,n),pointerup:i=>this.handlePointerUp(i,n),pointercancel:i=>this.handlePointerUp(i,n)};return n.addEventListener("pointerdown",s.pointerdown),n.addEventListener("pointermove",s.pointermove),n.addEventListener("pointerup",s.pointerup),n.addEventListener("pointercancel",s.pointercancel),this.listeners.set(n,s),n}handlePointerDown(t,n){if(t.button!==0||(t.preventDefault(),this.draggedButton))return;this.draggedButton=n,this.pointerId=t.pointerId,this.containerRect=this.element.getBoundingClientRect(),this.containerScrollTop=this.element.scrollTop;const s=n.getBoundingClientRect();this.dragOffsetY=t.clientY-s.top,this.placeholder=this.createPlaceholder(s.height),this.element.insertBefore(this.placeholder,n),n.setPointerCapture(t.pointerId),n.classList.add("drag-drop-button-list__item--dragging");const i=s.left-(this.containerRect?.left??0),r=s.top-(this.containerRect?.top??0)+this.containerScrollTop;n.style.left=`${i}px`,n.style.top=`${r}px`}handlePointerMove(t,n){if(!this.draggedButton||this.draggedButton!==n||this.pointerId!==t.pointerId)return;const s=this.containerRect?.top??0,i=t.clientY-this.dragOffsetY-s+this.containerScrollTop;n.style.top=`${i}px`,this.updatePlaceholderPosition(t.clientY)}handlePointerUp(t,n){!this.draggedButton||this.draggedButton!==n||this.pointerId!==t.pointerId||(n.hasPointerCapture(t.pointerId)&&n.releasePointerCapture(t.pointerId),this.placeholder&&(this.element.insertBefore(n,this.placeholder),this.placeholder.remove(),this.placeholder=null),n.classList.remove("drag-drop-button-list__item--dragging"),n.style.left="",n.style.top="",this.draggedButton=null,this.pointerId=null,this.containerRect=null,this.dragOffsetY=0,this.containerScrollTop=0)}createInitialOrder(t){const n=mt(t.slice());if(t.length<2||!n.every((o,a)=>o.id===this.correctOrder[a]))return n;const i=n.slice(),r=i.length-1;return[i[r-1],i[r]]=[i[r],i[r-1]],i}createPlaceholder(t){const n=document.createElement("div");return n.className="drag-drop-button-list__placeholder",n.style.height=`${t}px`,n}updatePlaceholderPosition(t){if(!this.placeholder)return;const s=Array.from(this.element.children).filter(i=>i instanceof HTMLElement&&i!==this.draggedButton).find(i=>{if(i===this.placeholder)return!1;const r=i.getBoundingClientRect();return t<r.top+r.height/2});s?this.element.insertBefore(this.placeholder,s):this.element.appendChild(this.placeholder)}}class Dt{question;items;correctOrder;constructor(t,n){this.question=t,this.correctOrder=[...n],this.items=[...this.correctOrder]}isCorrect(t){if(t.length!==this.correctOrder.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==this.correctOrder[n])return!1;return!0}}const Yn=[100,200,300,400,500];class Kn extends Dt{constructor(){const t=Xn();super(d("exercise.sort_liquid_mass_concentration.guide"),t)}}function Xn(){const e=Zn();es(e);const t=[],n=new Set;for(const s of e)if(!n.has(s.key)&&(n.add(s.key),t.push(s),t.length===4))break;if(t.length<4)throw new Error("Failed to generate unique mass concentrations");return t.sort((s,i)=>s.ratio-i.ratio),t.map(s=>Jn(s))}function Zn(){const e=[];for(const t of Yn)for(let n=1;n<=9;n++){const s=n/t,i=Qn(n,t);e.push({mass:n,volume:t,ratio:s,key:i})}return e}function Jn(e){const t=`${e.volume} ${g(u.ML)}`;return`${e.mass} mg / ${t}`}function Qn(e,t){const n=ts(e,t);return`${e/n}/${t/n}`}function ts(e,t){let n=Math.abs(e),s=Math.abs(t);for(;s!==0;){const i=s;s=n%s,n=i}return n}function es(e){for(let t=e.length-1;t>0;t--){const n=E(0,t),s=e[t];e[t]=e[n],e[n]=s}}class ns extends Dt{constructor(){const t=E(1,4),n=ss(t);super(d("exercise.sort_liquid_units.guide"),n)}}function ss(e){const t=e*50,n=e*8,s=e*6,i=e*3;return[`${t} ${g(u.ML)}`,`${n} ${g(u.CL)}`,`${s} ${g(u.DL)}`,`${i} ${g(u.L)}`]}const is=[u.ML,u.CL,u.DL,u.L];class rs extends Dt{constructor(){const t=E(1,9),n=[t,t*10,t*100,t*1e3],s=cs([...is]),i=n.map((r,o)=>os(r,s[o]));super(d("exercise.sort_liquid_units_decimal.guide"),i)}}function os(e,t){const n=fe[t];if(!Number.isFinite(n))throw new Error("Unsupported unit for decimal sort");const s=e/n;return`${as(s)} ${g(t)}`}function as(e){if(Number.isInteger(e))return e.toString();const t=e.toString();return t.includes("e")?e.toFixed(3).replace(/0+$/,"").replace(/\.$/,""):t.replace(/0+$/,"").replace(/\.$/,"")}function cs(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1)),s=e[t];e[t]=e[n],e[n]=s}return e}class ls extends At{current=0;count=6;tasks=[];sorter;correctAnswer="";init(){if(w.reactor.set("score",0),this.exercise?.task==="sort_liquid_units")this.tasks=Array.from({length:6},()=>new ns);else if(this.exercise?.task==="sort_liquid_units_decimal")this.tasks=Array.from({length:6},()=>new rs);else if(this.exercise?.task==="sort_liquid_mass_concentration")this.tasks=Array.from({length:6},()=>new Kn);else{console.error(`Unknown sort task: ${this.exercise?.task}`);return}console.log("len: "+this.tasks.length),console.log(this.tasks[0].question),this.showNext()}cheat(){this.scene.finished(this.count,this.count)}showNext(){if(console.log(`task ${this.current} / ${this.tasks.length}`),this.current>=this.tasks.length){this.finished();return}const t=this.tasks[this.current];let n=[];this.correctAnswer="";let s=!0;for(const i of t.items)n.push({id:i,label:i}),s?s=!1:this.correctAnswer+=", ",this.correctAnswer+=i;this.current++,this.topList.destroy(),this.bottomList.destroy(),this.topList.add(new _(t.question,new c(400,200),"dtext-panel")),this.sorter=new Wn(new c(400,300),n),this.topList.add(this.sorter),this.showBottomButton("OK",()=>{this.answer(t)}),this.scene.root.refresh()}answer(t){this.sorter?.disable();let n="";this.sorter?.isCorrectOrder()?(w.reactor.addition("score",1,0),n=`${d("gameplay.correct")}`):n=d("gameplay.wrongPrefix",{answer:this.correctAnswer}),this.topList.add(new _(n,new c(400,100),"dtext-panel")),this.showNextButton(),this.scene.root.refresh()}finished(){this.scene.finished(w.reactor.getNumberValue("score"),this.count)}}class hs extends I{root;info;action;constructor(t,n){super(I.POPUP_ZBASE),this.root=w.popupContainer,this.info=t,this.action=n}init(){const t=new b;this.root.add(t,p.MIDDLE_CENTER),this.root.add(new xt(t,"pop-up-plane",10),p.MIDDLE_CENTER);const n=300,s=new c(n,V);t.add(new _(this.info,new c(n,n),"dtext-panel")),t.add(new S(d("menu.commonYes"),this.action,s)),t.add(new S(d("menu.commonNo"),()=>{w.closePopup()},s))}uninit(){}}class us extends I{root;game;exercise;ctrl;constructor(t){super(I.SCENE_ZBASE),this.game=t,this.root=t.sceneContainer,this.exercise=void 0,this.ctrl=void 0}init(){if(!this.exercise){L(!1);return}if(this.exercise.format=="mcq")this.ctrl=new Nn(this,this.exercise);else if(this.exercise.format=="calculus")this.ctrl=new qn(this,this.exercise);else if(this.exercise.format=="sort")this.ctrl=new ls(this,this.exercise);else{console.error("unhandled format: ",this.exercise.format),this.game.loadScene(this.game.mainMenu);return}this.ctrl.init(),this.addScoreBar(this.exercise)}addScoreBar(t){const n=new c(400,100),s=new ue(n);this.root.add(s,p.TOP_CENTER),s.add(new xt(s,"quiz-plane"),p.TOP_LEFT);const i=6,r=d("gameplay.score",{score:0,total:i}),o=new _(r,new c(400,30),"dtext small");o.react=(a,l)=>{const h=typeof l=="number"?l:0;o.element.textContent=d("gameplay.score",{score:h,total:i})},w.reactor.addListener(o,"score"),s.add(o,new p(c.BOTTOM_CENTER,c.BOTTOM_CENTER,new c(0,-10))),s.add(new _(be(t),new c(400,30),"dtext small"),new p(c.TOP_CENTER,c.TOP_CENTER,new c(0,5))),s.add(new S("II",()=>{this.pauseClicked()},new c(V,V)),new p(c.TOP_LEFT,c.TOP_LEFT,new c(-V-5,0)))}pauseClicked(){const t=new hs(d("gameplay.quitMessage"),()=>{w.loadScene(this.game.mainMenu)});w.loadPopup(t)}uninit(){}setExercise(t){this.exercise=t}exit(){this.exercise=void 0,this.ctrl=void 0}finished(t,n){if(!this.ctrl||!this.exercise)return;this.ctrl.topList.destroy(),this.ctrl.bottomList.destroy(),A.setExerciseSuccess(this.exercise.id,t/n);const s=A.stars(this.exercise.id),i=`<p><span style="color: yellow;">${Ie(s)}</span>`,r=`${d("menu.resultsTitle")} ${d("gameplay.score",{score:t,total:n})} ${i}`;this.ctrl.topList.add(new _(r,new c(400,200),"dtext-panel",!0)),this.ctrl.bottomList.add(new S("OK",()=>{w.loadScene(this.game.mainMenu)})),this.root.refresh()}}class ds extends I{root;game;info="";constructor(t){super(I.POPUP_ZBASE),this.game=t,this.root=t.popupContainer}init(){const t=new b;this.root.add(t,p.MIDDLE_CENTER),this.root.add(new xt(t,"pop-up-plane",10),p.MIDDLE_CENTER),this.info==="language"?this.initLanguage(t):console.error(`InfoPopup info not set: ${this.info}`)}initLanguage(t){t.add(new _(d("language.selected",{name:ye(A.language)}),new c(200,50))),t.add(new S("OK",()=>{this.game.closePopup(),this.game.loadScene(this.game.mainMenu)}))}uninit(){}}class ps extends pn{nextScene=void 0;nextPopup=void 0;scene;popup=void 0;sceneContainer;popupContainer;popupBG;mainMenu;quizScene;boot;settingsPopup;infoPopup;constructor(){super(),this.sceneContainer=this.createRoot(I.SCENE_ZBASE),this.popupContainer=this.createRoot(I.POPUP_ZBASE),this.popupBG=ms(I.POPUP_ZBASE-1,()=>fs(this)),this.hidePopupBG(),this.mainMenu=new Bn(this),this.quizScene=new us(this),this.boot=new $n(this),this.settingsPopup=new Rn(this),this.infoPopup=new ds(this),this.scene=this.boot}update(t){this.nextScene?(this.scene.uninit(),this.scene=this.nextScene,this.nextScene=void 0,this.cleanupScene(),this.scene.init(),this.sceneContainer.refresh()):this.nextPopup?(this.popup&&(this.popup.uninit(),this.cleanupPopup()),this.popup=this.nextPopup,this.nextPopup=void 0,this.popup.init(),this.showPopupBG(),this.popupContainer.refresh()):(this.scene.update(t),this.popup&&this.popup.update(t))}hidePopupBG(){this.popupBG.style.display="none"}showPopupBG(){this.popupBG.style.display=""}closePopup(){this.popup&&(this.popup.uninit(),this.popup=void 0,this.cleanupPopup(),this.hidePopupBG())}cleanupScene(){this.sceneContainer.removeAll()}cleanupPopup(){this.popupContainer.removeAll()}loadScene(t){L(!this.nextScene&&!this.nextPopup),this.closePopup(),this.hidePopupBG(),this.nextScene=t}loadPopup(t){L(!this.nextScene&&!this.nextPopup),this.nextPopup=t}loadInfoPopup(t){this.infoPopup.info=t,this.loadPopup(this.infoPopup)}resize(t,n){const s=window.innerHeight/1024;document.documentElement.style.setProperty("--one",s+"px"),super.resize(t,n,s)}}function fs(e){console.log("pop-up BG pressed"),e.popup&&e.closePopup()}function ms(e,t){const n=document.createElement("div");return Object.assign(n.style,{position:"fixed",inset:"0",background:"rgba(0,0,0,0.5)",zIndex:String(e),pointerEvents:"auto"}),n.addEventListener("pointerdown",s=>{s.preventDefault(),s.stopPropagation(),t?.(s)}),document.body.appendChild(n),n}const gs=()=>{};var jt={};/**
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
 */const ve=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},ws=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const i=e[n++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=e[n++];t[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(l>>10)),t[s++]=String.fromCharCode(56320+(l&1023))}else{const r=e[n++],o=e[n++];t[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return t.join("")},Ce={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<e.length;i+=3){const r=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,h=l?e[i+2]:0,m=r>>2,T=(r&3)<<4|a>>4;let y=(a&15)<<2|h>>6,x=h&63;l||(x=64,o||(y=64)),s.push(n[m],n[T],n[y],n[x])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ve(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):ws(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<e.length;){const r=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const h=i<e.length?n[e.charAt(i)]:64;++i;const T=i<e.length?n[e.charAt(i)]:64;if(++i,r==null||a==null||h==null||T==null)throw new bs;const y=r<<2|a>>4;if(s.push(y),h!==64){const x=a<<4&240|h>>2;if(s.push(x),T!==64){const W=h<<6&192|T;s.push(W)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class bs extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ys=function(e){const t=ve(e);return Ce.encodeByteArray(t,!0)},Se=function(e){return ys(e).replace(/\./g,"")},Es=function(e){try{return Ce.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Ts(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Is=()=>Ts().__FIREBASE_DEFAULTS__,_s=()=>{if(typeof process>"u"||typeof jt>"u")return;const e=jt.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},vs=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Es(e[1]);return t&&JSON.parse(t)},Cs=()=>{try{return gs()||Is()||_s()||vs()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Le=()=>Cs()?.config;/**
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
 */class Ss{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}function Ls(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function xe(){try{return typeof indexedDB=="object"}catch{return!1}}function Ae(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{t(i.error?.message||"")}}catch(n){t(n)}})}function xs(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const As="FirebaseError";class j extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=As,Object.setPrototypeOf(this,j.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,it.prototype.create)}}class it{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?Ds(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new j(i,a,s)}}function Ds(e,t){return e.replace(Os,(n,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const Os=/\{\$([^}]+)}/g;function J(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const i of n){if(!s.includes(i))return!1;const r=e[i],o=t[i];if(Vt(r)&&Vt(o)){if(!J(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Vt(e){return e!==null&&typeof e=="object"}/**
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
 */const Ms=1e3,Bs=2,$s=14400*1e3,Ps=.5;function Gt(e,t=Ms,n=Bs){const s=t*Math.pow(n,e),i=Math.round(Ps*s*(Math.random()-.5)*2);return Math.min($s,s+i)}/**
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
 */function De(e){return e&&e._delegate?e._delegate:e}class P{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const R="[DEFAULT]";/**
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
 */class Rs{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new Ss;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t?.identifier),s=t?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(ks(t))try{this.getOrInitializeService({instanceIdentifier:R})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(t=R){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=R){return this.instances.has(t)}getOptions(t=R){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(t,n){const s=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(s)??new Set;i.add(t),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&t(r,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Ns(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=R){return this.component?this.component.multipleInstances?t:R:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ns(e){return e===R?void 0:e}function ks(e){return e.instantiationMode==="EAGER"}/**
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
 */class Fs{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Rs(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var f;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(f||(f={}));const zs={debug:f.DEBUG,verbose:f.VERBOSE,info:f.INFO,warn:f.WARN,error:f.ERROR,silent:f.SILENT},Hs=f.INFO,Us={[f.DEBUG]:"log",[f.VERBOSE]:"log",[f.INFO]:"info",[f.WARN]:"warn",[f.ERROR]:"error"},js=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),i=Us[t];if(i)console[i](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Oe{constructor(t){this.name=t,this._logLevel=Hs,this._logHandler=js,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in f))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?zs[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,f.DEBUG,...t),this._logHandler(this,f.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,f.VERBOSE,...t),this._logHandler(this,f.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,f.INFO,...t),this._logHandler(this,f.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,f.WARN,...t),this._logHandler(this,f.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,f.ERROR,...t),this._logHandler(this,f.ERROR,...t)}}const Vs=(e,t)=>t.some(n=>e instanceof n);let qt,Wt;function Gs(){return qt||(qt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qs(){return Wt||(Wt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Me=new WeakMap,yt=new WeakMap,Be=new WeakMap,ct=new WeakMap,Ot=new WeakMap;function Ws(e){const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{n(M(e.result)),i()},o=()=>{s(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Me.set(n,e)}).catch(()=>{}),Ot.set(t,e),t}function Ys(e){if(yt.has(e))return;const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)});yt.set(e,t)}let Et={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return yt.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Be.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return M(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Ks(e){Et=e(Et)}function Xs(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(lt(this),t,...n);return Be.set(s,t.sort?t.sort():[t]),M(s)}:qs().includes(e)?function(...t){return e.apply(lt(this),t),M(Me.get(this))}:function(...t){return M(e.apply(lt(this),t))}}function Zs(e){return typeof e=="function"?Xs(e):(e instanceof IDBTransaction&&Ys(e),Vs(e,Gs())?new Proxy(e,Et):e)}function M(e){if(e instanceof IDBRequest)return Ws(e);if(ct.has(e))return ct.get(e);const t=Zs(e);return t!==e&&(ct.set(e,t),Ot.set(t,e)),t}const lt=e=>Ot.get(e);function $e(e,t,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(e,t),a=M(o);return s&&o.addEventListener("upgradeneeded",l=>{s(M(o.result),l.oldVersion,l.newVersion,M(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),a}const Js=["get","getKey","getAll","getAllKeys","count"],Qs=["put","add","delete","clear"],ht=new Map;function Yt(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ht.get(t))return ht.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,i=Qs.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Js.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let h=l.store;return s&&(h=h.index(a.shift())),(await Promise.all([h[n](...a),i&&l.done]))[0]};return ht.set(t,r),r}Ks(e=>({...e,get:(t,n,s)=>Yt(t,n)||e.get(t,n,s),has:(t,n)=>!!Yt(t,n)||e.has(t,n)}));/**
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
 */class ti{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ei(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function ei(e){return e.getComponent()?.type==="VERSION"}const Tt="@firebase/app",Kt="0.14.3";/**
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
 */const O=new Oe("@firebase/app"),ni="@firebase/app-compat",si="@firebase/analytics-compat",ii="@firebase/analytics",ri="@firebase/app-check-compat",oi="@firebase/app-check",ai="@firebase/auth",ci="@firebase/auth-compat",li="@firebase/database",hi="@firebase/data-connect",ui="@firebase/database-compat",di="@firebase/functions",pi="@firebase/functions-compat",fi="@firebase/installations",mi="@firebase/installations-compat",gi="@firebase/messaging",wi="@firebase/messaging-compat",bi="@firebase/performance",yi="@firebase/performance-compat",Ei="@firebase/remote-config",Ti="@firebase/remote-config-compat",Ii="@firebase/storage",_i="@firebase/storage-compat",vi="@firebase/firestore",Ci="@firebase/ai",Si="@firebase/firestore-compat",Li="firebase";/**
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
 */const It="[DEFAULT]",xi={[Tt]:"fire-core",[ni]:"fire-core-compat",[ii]:"fire-analytics",[si]:"fire-analytics-compat",[oi]:"fire-app-check",[ri]:"fire-app-check-compat",[ai]:"fire-auth",[ci]:"fire-auth-compat",[li]:"fire-rtdb",[hi]:"fire-data-connect",[ui]:"fire-rtdb-compat",[di]:"fire-fn",[pi]:"fire-fn-compat",[fi]:"fire-iid",[mi]:"fire-iid-compat",[gi]:"fire-fcm",[wi]:"fire-fcm-compat",[bi]:"fire-perf",[yi]:"fire-perf-compat",[Ei]:"fire-rc",[Ti]:"fire-rc-compat",[Ii]:"fire-gcs",[_i]:"fire-gcs-compat",[vi]:"fire-fst",[Si]:"fire-fst-compat",[Ci]:"fire-vertex","fire-js":"fire-js",[Li]:"fire-js-all"};/**
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
 */const Q=new Map,Ai=new Map,_t=new Map;function Xt(e,t){try{e.container.addComponent(t)}catch(n){O.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function F(e){const t=e.name;if(_t.has(t))return O.debug(`There were multiple attempts to register component ${t}.`),!1;_t.set(t,e);for(const n of Q.values())Xt(n,e);for(const n of Ai.values())Xt(n,e);return!0}function rt(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Di={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},B=new it("app","Firebase",Di);/**
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
 */class Oi{constructor(t,n,s){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new P("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw B.create("app-deleted",{appName:this._name})}}function Pe(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s={name:It,automaticDataCollectionEnabled:!0,...t},i=s.name;if(typeof i!="string"||!i)throw B.create("bad-app-name",{appName:String(i)});if(n||(n=Le()),!n)throw B.create("no-options");const r=Q.get(i);if(r){if(J(n,r.options)&&J(s,r.config))return r;throw B.create("duplicate-app",{appName:i})}const o=new Fs(i);for(const l of _t.values())o.addComponent(l);const a=new Oi(n,s,o);return Q.set(i,a),a}function Mi(e=It){const t=Q.get(e);if(!t&&e===It&&Le())return Pe();if(!t)throw B.create("no-app",{appName:e});return t}function $(e,t,n){let s=xi[e]??e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),r=t.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${t}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),O.warn(o.join(" "));return}F(new P(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const Bi="firebase-heartbeat-database",$i=1,K="firebase-heartbeat-store";let ut=null;function Re(){return ut||(ut=$e(Bi,$i,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(K)}catch(n){console.warn(n)}}}}).catch(e=>{throw B.create("idb-open",{originalErrorMessage:e.message})})),ut}async function Pi(e){try{const n=(await Re()).transaction(K),s=await n.objectStore(K).get(Ne(e));return await n.done,s}catch(t){if(t instanceof j)O.warn(t.message);else{const n=B.create("idb-get",{originalErrorMessage:t?.message});O.warn(n.message)}}}async function Zt(e,t){try{const s=(await Re()).transaction(K,"readwrite");await s.objectStore(K).put(t,Ne(e)),await s.done}catch(n){if(n instanceof j)O.warn(n.message);else{const s=B.create("idb-set",{originalErrorMessage:n?.message});O.warn(s.message)}}}function Ne(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Ri=1024,Ni=30;class ki{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new zi(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Jt();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>Ni){const i=Hi(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){O.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Jt(),{heartbeatsToSend:n,unsentEntries:s}=Fi(this._heartbeatsCache.heartbeats),i=Se(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return O.warn(t),""}}}function Jt(){return new Date().toISOString().substring(0,10)}function Fi(e,t=Ri){const n=[];let s=e.slice();for(const i of e){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Qt(n)>t){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Qt(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class zi{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xe()?Ae().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Pi(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return Zt(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return Zt(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Qt(e){return Se(JSON.stringify({version:2,heartbeats:e})).length}function Hi(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let s=1;s<e.length;s++)e[s].date<n&&(n=e[s].date,t=s);return t}/**
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
 */function Ui(e){F(new P("platform-logger",t=>new ti(t),"PRIVATE")),F(new P("heartbeat",t=>new ki(t),"PRIVATE")),$(Tt,Kt,e),$(Tt,Kt,"esm2020"),$("fire-js","")}Ui("");var ji="firebase",Vi="12.3.0";/**
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
 */$(ji,Vi,"app");const ke="@firebase/installations",Mt="0.6.19";/**
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
 */const Fe=1e4,ze=`w:${Mt}`,He="FIS_v2",Gi="https://firebaseinstallations.googleapis.com/v1",qi=3600*1e3,Wi="installations",Yi="Installations";/**
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
 */const Ki={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},z=new it(Wi,Yi,Ki);function Ue(e){return e instanceof j&&e.code.includes("request-failed")}/**
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
 */function je({projectId:e}){return`${Gi}/projects/${e}/installations`}function Ve(e){return{token:e.token,requestStatus:2,expiresIn:Zi(e.expiresIn),creationTime:Date.now()}}async function Ge(e,t){const s=(await t.json()).error;return z.create("request-failed",{requestName:e,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function qe({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Xi(e,{refreshToken:t}){const n=qe(e);return n.append("Authorization",Ji(t)),n}async function We(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Zi(e){return Number(e.replace("s","000"))}function Ji(e){return`${He} ${e}`}/**
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
 */async function Qi({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const s=je(e),i=qe(e),r=t.getImmediate({optional:!0});if(r){const h=await r.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const o={fid:n,authVersion:He,appId:e.appId,sdkVersion:ze},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await We(()=>fetch(s,a));if(l.ok){const h=await l.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:Ve(h.authToken)}}else throw await Ge("Create Installation",l)}/**
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
 */function Ye(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function tr(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const er=/^[cdef][\w-]{21}$/,vt="";function nr(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=sr(e);return er.test(n)?n:vt}catch{return vt}}function sr(e){return tr(e).substr(0,22)}/**
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
 */function ot(e){return`${e.appName}!${e.appId}`}/**
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
 */const Ke=new Map;function Xe(e,t){const n=ot(e);Ze(n,t),ir(n,t)}function Ze(e,t){const n=Ke.get(e);if(n)for(const s of n)s(t)}function ir(e,t){const n=rr();n&&n.postMessage({key:e,fid:t}),or()}let k=null;function rr(){return!k&&"BroadcastChannel"in self&&(k=new BroadcastChannel("[Firebase] FID Change"),k.onmessage=e=>{Ze(e.data.key,e.data.fid)}),k}function or(){Ke.size===0&&k&&(k.close(),k=null)}/**
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
 */const ar="firebase-installations-database",cr=1,H="firebase-installations-store";let dt=null;function Bt(){return dt||(dt=$e(ar,cr,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(H)}}})),dt}async function tt(e,t){const n=ot(e),i=(await Bt()).transaction(H,"readwrite"),r=i.objectStore(H),o=await r.get(n);return await r.put(t,n),await i.done,(!o||o.fid!==t.fid)&&Xe(e,t.fid),t}async function Je(e){const t=ot(e),s=(await Bt()).transaction(H,"readwrite");await s.objectStore(H).delete(t),await s.done}async function at(e,t){const n=ot(e),i=(await Bt()).transaction(H,"readwrite"),r=i.objectStore(H),o=await r.get(n),a=t(o);return a===void 0?await r.delete(n):await r.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&Xe(e,a.fid),a}/**
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
 */async function $t(e){let t;const n=await at(e.appConfig,s=>{const i=lr(s),r=hr(e,i);return t=r.registrationPromise,r.installationEntry});return n.fid===vt?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function lr(e){const t=e||{fid:nr(),registrationStatus:0};return Qe(t)}function hr(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(z.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=ur(e,n);return{installationEntry:n,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:dr(e)}:{installationEntry:t}}async function ur(e,t){try{const n=await Qi(e,t);return tt(e.appConfig,n)}catch(n){throw Ue(n)&&n.customData.serverCode===409?await Je(e.appConfig):await tt(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function dr(e){let t=await te(e.appConfig);for(;t.registrationStatus===1;)await Ye(100),t=await te(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await $t(e);return s||n}return t}function te(e){return at(e,t=>{if(!t)throw z.create("installation-not-found");return Qe(t)})}function Qe(e){return pr(e)?{fid:e.fid,registrationStatus:0}:e}function pr(e){return e.registrationStatus===1&&e.registrationTime+Fe<Date.now()}/**
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
 */async function fr({appConfig:e,heartbeatServiceProvider:t},n){const s=mr(e,n),i=Xi(e,n),r=t.getImmediate({optional:!0});if(r){const h=await r.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const o={installation:{sdkVersion:ze,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await We(()=>fetch(s,a));if(l.ok){const h=await l.json();return Ve(h)}else throw await Ge("Generate Auth Token",l)}function mr(e,{fid:t}){return`${je(e)}/${t}/authTokens:generate`}/**
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
 */async function Pt(e,t=!1){let n;const s=await at(e.appConfig,r=>{if(!tn(r))throw z.create("not-registered");const o=r.authToken;if(!t&&br(o))return r;if(o.requestStatus===1)return n=gr(e,t),r;{if(!navigator.onLine)throw z.create("app-offline");const a=Er(r);return n=wr(e,a),a}});return n?await n:s.authToken}async function gr(e,t){let n=await ee(e.appConfig);for(;n.authToken.requestStatus===1;)await Ye(100),n=await ee(e.appConfig);const s=n.authToken;return s.requestStatus===0?Pt(e,t):s}function ee(e){return at(e,t=>{if(!tn(t))throw z.create("not-registered");const n=t.authToken;return Tr(n)?{...t,authToken:{requestStatus:0}}:t})}async function wr(e,t){try{const n=await fr(e,t),s={...t,authToken:n};return await tt(e.appConfig,s),n}catch(n){if(Ue(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Je(e.appConfig);else{const s={...t,authToken:{requestStatus:0}};await tt(e.appConfig,s)}throw n}}function tn(e){return e!==void 0&&e.registrationStatus===2}function br(e){return e.requestStatus===2&&!yr(e)}function yr(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+qi}function Er(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}function Tr(e){return e.requestStatus===1&&e.requestTime+Fe<Date.now()}/**
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
 */async function Ir(e){const t=e,{installationEntry:n,registrationPromise:s}=await $t(t);return s?s.catch(console.error):Pt(t).catch(console.error),n.fid}/**
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
 */async function _r(e,t=!1){const n=e;return await vr(n),(await Pt(n,t)).token}async function vr(e){const{registrationPromise:t}=await $t(e);t&&await t}/**
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
 */function Cr(e){if(!e||!e.options)throw pt("App Configuration");if(!e.name)throw pt("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw pt(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function pt(e){return z.create("missing-app-config-values",{valueName:e})}/**
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
 */const en="installations",Sr="installations-internal",Lr=e=>{const t=e.getProvider("app").getImmediate(),n=Cr(t),s=rt(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},xr=e=>{const t=e.getProvider("app").getImmediate(),n=rt(t,en).getImmediate();return{getId:()=>Ir(n),getToken:i=>_r(n,i)}};function Ar(){F(new P(en,Lr,"PUBLIC")),F(new P(Sr,xr,"PRIVATE"))}Ar();$(ke,Mt);$(ke,Mt,"esm2020");/**
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
 */const et="analytics",Dr="firebase_id",Or="origin",Mr=60*1e3,Br="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Rt="https://www.googletagmanager.com/gtag/js";/**
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
 */const v=new Oe("@firebase/analytics");/**
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
 */const $r={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},C=new it("analytics","Analytics",$r);/**
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
 */function Pr(e){if(!e.startsWith(Rt)){const t=C.create("invalid-gtag-resource",{gtagURL:e});return v.warn(t.message),""}return e}function nn(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Rr(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function Nr(e,t){const n=Rr("firebase-js-sdk-policy",{createScriptURL:Pr}),s=document.createElement("script"),i=`${Rt}?l=${e}&id=${t}`;s.src=n?n?.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function kr(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Fr(e,t,n,s,i,r){const o=s[i];try{if(o)await t[o];else{const l=(await nn(n)).find(h=>h.measurementId===i);l&&await t[l.appId]}}catch(a){v.error(a)}e("config",i,r)}async function zr(e,t,n,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await nn(n);for(const l of o){const h=a.find(T=>T.measurementId===l),m=h&&t[h.appId];if(m)r.push(m);else{r=[];break}}}r.length===0&&(r=Object.values(t)),await Promise.all(r),e("event",s,i||{})}catch(r){v.error(r)}}function Hr(e,t,n,s){async function i(r,...o){try{if(r==="event"){const[a,l]=o;await zr(e,t,n,a,l)}else if(r==="config"){const[a,l]=o;await Fr(e,t,n,s,a,l)}else if(r==="consent"){const[a,l]=o;e("consent",a,l)}else if(r==="get"){const[a,l,h]=o;e("get",a,l,h)}else if(r==="set"){const[a]=o;e("set",a)}else e(r,...o)}catch(a){v.error(a)}}return i}function Ur(e,t,n,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=Hr(r,e,t,n),{gtagCore:r,wrappedGtag:window[i]}}function jr(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Rt)&&n.src.includes(e))return n;return null}/**
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
 */const Vr=30,Gr=1e3;class qr{constructor(t={},n=Gr){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const sn=new qr;function Wr(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Yr(e){const{appId:t,apiKey:n}=e,s={method:"GET",headers:Wr(n)},i=Br.replace("{app-id}",t),r=await fetch(i,s);if(r.status!==200&&r.status!==304){let o="";try{const a=await r.json();a.error?.message&&(o=a.error.message)}catch{}throw C.create("config-fetch-failed",{httpStatus:r.status,responseMessage:o})}return r.json()}async function Kr(e,t=sn,n){const{appId:s,apiKey:i,measurementId:r}=e.options;if(!s)throw C.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw C.create("no-api-key")}const o=t.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Jr;return setTimeout(async()=>{a.abort()},Mr),rn({appId:s,apiKey:i,measurementId:r},o,a,t)}async function rn(e,{throttleEndTimeMillis:t,backoffCount:n},s,i=sn){const{appId:r,measurementId:o}=e;try{await Xr(s,t)}catch(a){if(o)return v.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a?.message}]`),{appId:r,measurementId:o};throw a}try{const a=await Yr(e);return i.deleteThrottleMetadata(r),a}catch(a){const l=a;if(!Zr(l)){if(i.deleteThrottleMetadata(r),o)return v.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:r,measurementId:o};throw a}const h=Number(l?.customData?.httpStatus)===503?Gt(n,i.intervalMillis,Vr):Gt(n,i.intervalMillis),m={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(r,m),v.debug(`Calling attemptFetch again in ${h} millis`),rn(e,m,s,i)}}function Xr(e,t){return new Promise((n,s)=>{const i=Math.max(t-Date.now(),0),r=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(r),s(C.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Zr(e){if(!(e instanceof j)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Jr{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Qr(e,t,n,s,i){if(i&&i.global){e("event",n,s);return}else{const r=await t,o={...s,send_to:r};e("event",n,o)}}/**
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
 */async function to(){if(xe())try{await Ae()}catch(e){return v.warn(C.create("indexeddb-unavailable",{errorInfo:e?.toString()}).message),!1}else return v.warn(C.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function eo(e,t,n,s,i,r,o){const a=Kr(e);a.then(y=>{n[y.measurementId]=y.appId,e.options.measurementId&&y.measurementId!==e.options.measurementId&&v.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${y.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(y=>v.error(y)),t.push(a);const l=to().then(y=>{if(y)return s.getId()}),[h,m]=await Promise.all([a,l]);jr(r)||Nr(r,h.measurementId),i("js",new Date);const T=o?.config??{};return T[Or]="firebase",T.update=!0,m!=null&&(T[Dr]=m),i("config",h.measurementId,T),h.measurementId}/**
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
 */class no{constructor(t){this.app=t}_delete(){return delete Y[this.app.options.appId],Promise.resolve()}}let Y={},ne=[];const se={};let ft="dataLayer",so="gtag",ie,on,re=!1;function io(){const e=[];if(Ls()&&e.push("This is a browser extension environment."),xs()||e.push("Cookies are not available."),e.length>0){const t=e.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=C.create("invalid-analytics-context",{errorInfo:t});v.warn(n.message)}}function ro(e,t,n){io();const s=e.options.appId;if(!s)throw C.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)v.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw C.create("no-api-key");if(Y[s]!=null)throw C.create("already-exists",{id:s});if(!re){kr(ft);const{wrappedGtag:r,gtagCore:o}=Ur(Y,ne,se,ft,so);on=r,ie=o,re=!0}return Y[s]=eo(e,ne,se,t,ie,ft,n),new no(e)}function an(e=Mi()){e=De(e);const t=rt(e,et);return t.isInitialized()?t.getImmediate():oo(e)}function oo(e,t={}){const n=rt(e,et);if(n.isInitialized()){const i=n.getImmediate();if(J(t,n.getOptions()))return i;throw C.create("already-initialized")}return n.initialize({options:t})}function cn(e,t,n,s){e=De(e),Qr(on,Y[e.app.options.appId],t,n,s).catch(i=>v.error(i))}const oe="@firebase/analytics",ae="0.10.18";function ao(){F(new P(et,(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return ro(s,i,n)},"PUBLIC")),F(new P("analytics-internal",e,"PRIVATE")),$(oe,ae),$(oe,ae,"esm2020");function e(t){try{const n=t.getProvider(et).getImmediate();return{logEvent:(s,i,r)=>cn(n,s,i,r)}}catch(n){throw C.create("interop-component-reg-failed",{reason:n})}}}ao();class N{static STORAGE_KEY="playerSettings";language="en";stats={};constructor(t){t?.language&&(this.language=t.language.toLowerCase()),t?.stats&&typeof t.stats=="object"&&(this.stats={...t.stats})}static loadFromStorage(){try{const t=localStorage.getItem(N.STORAGE_KEY);if(!t)return new N;const n=JSON.parse(t);return new N(n)}catch{return new N}}toJSON(){return{language:this.language,stats:this.stats}}save(){try{localStorage.setItem(N.STORAGE_KEY,JSON.stringify(this.toJSON()))}catch{}}setLanguage(t){this.language=(t||"en").toLowerCase(),this.save()}setExerciseSuccess(t,n){const s=Math.max(0,Math.min(1,Number(n))),i=`x:${t}`,r=this.stats[i];(r===void 0||s>r)&&(this.stats[i]=s,this.save())}stars(t){const n=this.stats?.[`x:${t}`];return n===void 0?0:n===1?3:n>.5?2:n>0?1:0}}const co={apiKey:"AIzaSyCeRJx0UKqnYmhr6u_ZWyCrbU45Xb0ReIs",authDomain:"dolfin-math.firebaseapp.com",projectId:"dolfin-math",storageBucket:"dolfin-math.firebasestorage.app",messagingSenderId:"499035696239",appId:"1:499035696239:web:3a5ee2c439acd40797319a",measurementId:"G-W9DWNKS6P6"},lo=Pe(co),ho=an(lo);console.log(ho);po("start");const ln=400,V=100,uo=new c(ln,V),nt=document.querySelector("#app");if(!nt)throw new Error("Unable to find the root #app element.");function po(e){cn(an(),e)}nt.classList.add("app-root");const A=N.loadFromStorage();A.save();const w=new ps;w.scene.init();function q(e){const t=`./assets/${e}`;return console.log(`path: ${t}`),t}const Nt=()=>{if(!window.visualViewport){console.log("resizeCore: visualViewport not ready");return}w.resize(nt.clientWidth||window.visualViewport.width,nt.clientHeight||window.visualViewport.height)};window.addEventListener("resize",Nt);window.addEventListener("scroll",Nt);Nt();w.start();function fo(){document.addEventListener("touchmove",t=>{t.scale!==void 0&&t.scale!==1&&t.preventDefault()},{passive:!1});let e=0;document.addEventListener("touchend",t=>{const n=Date.now();n-e<=300&&t.preventDefault(),e=n},{passive:!1}),window.addEventListener("wheel",t=>{t.ctrlKey&&t.preventDefault()},{passive:!1})}function mo(){fo()}document.addEventListener("DOMContentLoaded",mo);
