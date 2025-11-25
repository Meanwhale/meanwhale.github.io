(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();class c{constructor(t,e){this.x=t,this.y=e}static{this.TOP_LEFT=new c(0,0)}static{this.TOP_CENTER=new c(.5,0)}static{this.TOP_RIGHT=new c(1,0)}static{this.MIDDLE_LEFT=new c(0,.5)}static{this.MIDDLE_CENTER=new c(.5,.5)}static{this.MIDDLE_RIGHT=new c(1,.5)}static{this.BOTTOM_LEFT=new c(0,1)}static{this.BOTTOM_CENTER=new c(.5,1)}static{this.BOTTOM_RIGHT=new c(1,1)}static{this.CENTER=new c(.5,.5)}static{this.ZERO=new c(0,0)}static{this.ONE=new c(1,1)}}class p{constructor(t,e,s=c.ZERO){this.position=t,this.pivot=e,this.gOffset=s}static{this.TOP_LEFT=new p(c.TOP_LEFT,c.TOP_LEFT)}static{this.TOP_CENTER=new p(c.TOP_CENTER,c.TOP_CENTER)}static{this.TOP_RIGHT=new p(c.TOP_RIGHT,c.TOP_RIGHT)}static{this.MIDDLE_LEFT=new p(c.MIDDLE_LEFT,c.MIDDLE_LEFT)}static{this.MIDDLE_CENTER=new p(c.MIDDLE_CENTER,c.MIDDLE_CENTER)}static{this.MIDDLE_RIGHT=new p(c.MIDDLE_RIGHT,c.MIDDLE_RIGHT)}static{this.BOTTOM_LEFT=new p(c.BOTTOM_LEFT,c.BOTTOM_LEFT)}static{this.BOTTOM_CENTER=new p(c.BOTTOM_CENTER,c.BOTTOM_CENTER)}static{this.BOTTOM_RIGHT=new p(c.BOTTOM_RIGHT,c.BOTTOM_RIGHT)}}function x(n){n||console.error("Assertion failed!")}class ue{constructor(t,e,s,i,r){this.x=t,this.y=e,this.width=s,this.height=i,this.scale=r}unit(t){return t*this.scale}}let un=0;class pe{refresh(){}constructor(){this.ID=++un}}class xt extends pe{constructor(){super(),this.destroyed=!1,this.pxSizeX=1,this.pxSizeY=1,this.z=-1}setZ(t){x(this.z==-1),this.z=t}setParent(t){x(this.parent==null),this.parent=t}updateSizeRef(t,e,s){this.pxSizeX=t.unit(e),this.pxSizeY=t.unit(s)}calculateTopLeft(t,e){x(this.z!=-1);const s=t.x+e.position.x*t.width,i=t.y+e.position.y*t.height;let r=s+t.unit(e.gOffset.x),o=i+t.unit(e.gOffset.y);return r-=e.pivot.x*this.pxSizeX,o-=e.pivot.y*this.pxSizeY,new c(r,o)}update(t){}destroy(){this.destroyed=!0}isDestroyed(){return this.destroyed}react(t,e){}}class H extends xt{constructor(t,e=""){super(),this.visible=!0,this.refX=t.x,this.refY=t.y;const s=document.createElement("div");e!=""&&(s.className=e),s.style.position="absolute",s.style.display="none",document.body.append(s),this.element=s}setSize(t){this.refX=t.x,this.refY=t.y}setVisibility(t){this.element.style.display=t?"":"none"}updateSize(t){this.updateSizeRef(t,this.refX,this.refY);const e=this.element.style;e.width=this.pxSizeX+"px",e.height=this.pxSizeY+"px"}updatePosition(t,e){const s=this.calculateTopLeft(t,e);this.setTopLeft(s.x,s.y)}setTopLeft(t,e){const s=this.element.style;s.left=t+"px",s.top=e+"px",s.zIndex=this.z.toString()}destroy(){super.destroy(),this.element.remove()}refresh(){super.refresh(),this.setVisibility(this.visible)}}class T{static{this.SCENE_ZBASE=1e6}static{this.POPUP_ZBASE=2e6}update(t){}constructor(t){this.zBase=t}}class pn{constructor(t,e){this.obj=t,this.key=e}}class fn{constructor(){this.values={},this.listeners=[]}set(t,e){if(!Object.is(this.values[t],e)){this.values[t]=e,this.listeners=this.listeners.filter(s=>!s.obj.isDestroyed());for(const s of this.listeners)s.key===t&&s.obj.react(t,e)}}addition(t,e,s=0){this.values.hasOwnProperty(t)||(this.values[t]=s);const i=this.values[t];if(typeof i!="number"||!Number.isFinite(i)){console.error(`Value for "${t}" is not a finite number (got ${String(i)})`);return}const r=i+e;this.set(t,r)}addListener(t,e){this.listeners.push(new pn(t,e))}getNumberValue(t){const e=this.values[t];return typeof e=="number"&&Number.isFinite(e)?e:(console.error(`DReactor.getNumberValue: ${t}`),0)}getBooleanValue(t){const e=this.values[t];return typeof e=="boolean"?e:(console.error(`DReactor.getBooleanValue: ${t}`),!1)}}class mn{constructor(){this.roots=[],this.lastUpdate=0,this.STEP=1e3/20,this.loop=t=>{if(t-this.lastUpdate>=this.STEP){const e=t-this.lastUpdate;this.lastUpdate=t;try{this.update(e)}catch(s){console.error("DCore loop: error in update.",s)}for(const s of this.roots)s.update(e)}requestAnimationFrame(this.loop)},this.reactor=new fn}resize(t,e,s){for(const i of this.roots)i.updateLayout(new ue(0,0,t,e,s))}createRoot(t){let e=new bn(t);return this.roots.push(e),e}update(t){}start(){this.lastUpdate=performance.now(),requestAnimationFrame(this.loop)}}class gn{constructor(t,e){this.pos=t,this.obj=e}}class fe{constructor(t,e){this.children=[],this.zBase=t,this.parent=e}add(t,e){t.setParent(this.parent),this.children.push(new gn(e,t)),t.setZ(this.zBase+this.children.length)}removeAll(){for(const t of this.children)t.obj.destroy();this.children=[]}}class wn extends xt{constructor(t){super(),this.scale=1,this.refX=t.x,this.refY=t.y,this.collection=new fe(-1,this)}setZ(t){super.setZ(t),this.collection.zBase=t}setTopLeft(t,e){const s=new ue(t,e,this.pxSizeX,this.pxSizeY,this.scale);for(const i of this.collection.children)i.obj.updateSize(s),i.obj.updatePosition(s,i.pos)}add(t,e){x(this.z!=-1),this.collection.add(t,e)}updateSize(t){this.scale=t.scale,this.updateSizeRef(t,this.refX,this.refY)}updatePosition(t,e){this.scale=t.scale;const s=this.calculateTopLeft(t,e);this.setTopLeft(s.x,s.y)}update(t){for(const e of this.collection.children)e.obj.update(t)}destroy(){this.collection.removeAll()}refresh(){super.refresh();for(const t of this.collection.children)t.obj.refresh()}}class bn extends pe{constructor(t){super(),this.refreshLayoutOnNextUpdate=!1,this.collection=new fe(t,this)}getZ(){return this.collection.zBase}updateLayout(t){this.box=t,this.refreshLayoutOnNextUpdate=!0}add(t,e){this.collection.add(t,e)}update(t){if(this.refreshLayoutOnNextUpdate&&this.box){for(const e of this.collection.children)e.obj.refresh(),e.obj.updateSize(this.box),e.obj.updatePosition(this.box,e.pos);this.refreshLayoutOnNextUpdate=!1}for(const e of this.collection.children)e.obj.update(t)}refresh(){this.refreshLayoutOnNextUpdate=!0}removeAll(){this.collection.removeAll()}}class g extends xt{constructor(t=g.VERTICAL,e=g.ALIGN_CENTER){super(),this.children=[],this.orientation=t,this.alignment=e}static{this.HORIZONTAL=1001}static{this.VERTICAL=1002}static{this.ALIGN_FRONT=2001}static{this.ALIGN_BACK=2002}static{this.ALIGN_CENTER=2003}add(t){x(this.z!=-1),t.setParent(this),this.children.push(t),t.setZ(this.z+this.children.length)}updateSize(t){let e=0,s=0;for(const i of this.children)i.updateSize(t),this.orientation==g.VERTICAL?(s+=i.pxSizeY,e=Math.max(e,i.pxSizeX)):this.orientation==g.HORIZONTAL?(e+=i.pxSizeX,s=Math.max(s,i.pxSizeY)):x(!1);this.pxSizeX=e,this.pxSizeY=s}updatePosition(t,e){const s=this.calculateTopLeft(t,e);this.setTopLeft(s.x,s.y)}setTopLeft(t,e){let s=t,i=e;for(const r of this.children)this.orientation==g.VERTICAL?(this.alignment==g.ALIGN_FRONT?r.setTopLeft(s,i):this.alignment==g.ALIGN_BACK?r.setTopLeft(s+this.pxSizeX-r.pxSizeX,i):this.alignment==g.ALIGN_CENTER?r.setTopLeft(s+(this.pxSizeX-r.pxSizeX)/2,i):x(!1),i+=r.pxSizeY):this.orientation==g.HORIZONTAL?(r.setTopLeft(s,i),s+=r.pxSizeX):x(!1)}update(t){this.children=this.children.filter(e=>!e.isDestroyed());for(const e of this.children)e.update(t)}refresh(){for(const t of this.children)t.refresh()}destroy(){for(const t of this.children)t.destroy();this.children=[]}}const me=["en","fi","sv","th"];function ge(n){return n==="sv"&&(n="se"),({en:"GB"}[n]||n).toUpperCase().replace(/./g,s=>String.fromCodePoint(127397+s.charCodeAt(0)))}const yn=me.map(ge).join("");function wt(n){for(let t=n.length-1;t>0;t--){const e=Math.floor(Math.random()*(t+1));[n[t],n[e]]=[n[e],n[t]]}return n}var d=(n=>(n[n.ML=0]="ML",n[n.CL=1]="CL",n[n.DL=2]="DL",n[n.L=3]="L",n))(d||{}),Z=(n=>(n[n.MG=0]="MG",n))(Z||{});const we={0:1,1:10,2:100,3:1e3};function be(n){const t=we[n];if(!Number.isFinite(t))throw new Error("Cannot convert using non-volume unit");return t}function A(n,t){return n*be(t)}function st(n,t){return n/be(t)}function w(n,t){const e=Math.ceil(n),s=Math.floor(t);return Math.max(e,Math.floor(Math.random()*(s-e+1))+e)}function ye(n){const t=w(0,n.length-1);return n[t]}function zt(n){return`[[${n}]]`}const Lt=new Map;let bt=[];async function Ee(n){const t=(n||"en").toLowerCase();for(const r of bt)Lt.delete(r);bt=[];const e=W(`i18n/${t}.json`),s=await fetch(e);if(!s.ok)throw new Error(`i18n load failed: ${s.status} ${s.statusText}`);console.log(`language loaded: ${n}`);const i=await s.json();Ie(i)}function u(n,t,e){const s=Lt.get(n)??e??n;return t?s.replace(/\{(\w+)\}/g,(i,r)=>String(t[r]??`{${r}}`)):s}function Te(n){return u(`exercise.${n.id}.title`)}function b(n){switch(n){case d.ML:return u("units.ml");case d.CL:return u("units.cl");case d.DL:return u("units.dl");case d.L:return u("units.l");default:return"?"}}function Ut(n){switch(n){case Z.MG:return u("units.mg",void 0,"mg");default:return"?"}}function Ht(n){const t=n.toLowerCase();return t==="sv"?u("language.swedish",void 0,"Swedish"):t==="fi"?u("language.finnish",void 0,"Finnish"):t==="th"?u("language.thai",void 0,"Thai"):t==="en"?u("language.english",void 0,"English"):(console.error(`languageName: ${n}`),n)}function Ie(n,t){for(const[e,s]of Object.entries(n)){const i=t?`${t}.${e}`:e;typeof s=="string"?(Lt.set(i,s),bt.push(i)):En(s)&&Ie(s,i)}}function En(n){return!!n&&typeof n=="object"&&!Array.isArray(n)}const yt=new Map,X=new Map;function Tn(n){const t=n.split("?")[0].toLowerCase();return/\.(png|jpe?g|gif|webp|bmp|svg)$/.test(t)?"image":t.endsWith(".json")||t.endsWith(".txt")?"text":"blob"}function jt(n){if(!n.ok)throw new Error(`Failed to load (${n.status} ${n.statusText})`);return n}function In(n){return new Promise((t,e)=>{const s=new Image;s.decoding="async",s.onload=()=>t(s),s.onerror=()=>e(new Error(`Failed to load image: ${n}`)),s.src=W(n)})}async function vn(n,t=Tn(n)){if(yt.has(n))return;if(X.has(n))return X.get(n).then(()=>{});let e;t==="image"?e=In(n):t==="text"?e=fetch(W(n),{credentials:"same-origin"}).then(jt).then(s=>s.text()):e=fetch(n,{credentials:"same-origin"}).then(jt).then(s=>s.blob()),X.set(n,e);try{const s=await e;yt.set(n,s)}finally{X.delete(n)}}function _n(n){const t=yt.get(n);return typeof t!="string"?(console.error(`Text not found in cache: ${n}`),""):t}let q;async function Sn(n){const t=await fetch(n);if(!t.ok)throw new Error(`Failed to load catalog [${n}]: ${t.status} ${t.statusText}`);q=await t.json()}function Cn(n){if(!q)throw new Error;for(const t of q.areas){const e=t.topics.find(s=>s.id===n);if(e)return e}throw new Error(`Topic not found: ${n}`)}function xn(n){return Cn(n).subtopics}function Ln(n){if(!q)throw new Error;const t=q.areas.find(e=>e.id===n);if(!t)throw new Error(`Area not found: ${n}`);return t.topics}function An(n){return`questions/${L.language}/${n}.json`}async function Dn(n){const t=An(n);await vn(t);const e=_n(t);if(!e)throw new Error(`Question data for "${n}" not loaded. Call loadById first.`);let s;try{s=JSON.parse(e)}catch(i){throw new Error(`Failed to parse question data for "${n}": ${i.message}`)}if(!Array.isArray(s))throw new Error(`Question data for "${n}" is not an array`);return s}let At=new c(400,50);function Mn(n){At=n}class E extends H{constructor(t,e,s="dtext",i=!1){super(e,s),i?this.element.innerHTML=t||"???":this.element.textContent=t||"???"}react(t,e){this.element.textContent=e}}class S extends H{constructor(t,e,s=At,i="dbutton"){super(s,"dbutton-div"),this.vanishTime=2e3,this.vanishing=!1,this.action=e,this.htmlButton=document.createElement("div"),this.htmlButton.className=i,this.htmlButton.style.position="relative",this.htmlButton.textContent=t,this.element.appendChild(this.htmlButton),this.clickHandler=()=>{this.action()},this.htmlButton.addEventListener("click",this.clickHandler)}vanish(){this.vanishing=!0,this.element.removeEventListener("click",this.clickHandler)}disable(){this.htmlButton.style.pointerEvents="none"}update(t){this.vanishing&&(this.refY*=.9,this.vanishTime-=t,this.vanishTime<=0&&this.destroy(),this.parent?.refresh(),console.log("vanishing "+t+" pxy"+this.pxSizeY))}setAction(t){this.action=t}}class Vt extends S{constructor(t,e,s){super(t,s,At,"dbutton split-button"),this.htmlRight=document.createElement("div"),this.htmlRight.className="split-button-right",this.htmlRight.textContent=e,this.element.appendChild(this.htmlRight)}}const ve="★",On="☆";function _e(n){let t="";for(let e=0;e<3;e++)t+=e<n?ve:On;return t}class $n extends S{htmlStars;constructor(t,e,s,i){super(t,i,new c(400,50),"dbutton sub-topic-button"),this.htmlStars=document.createElement("div"),this.htmlStars.className="sub-topic-stars",this.htmlStars.textContent=`${ve} ${e} / ${s}`,this.element.appendChild(this.htmlStars),this.disable()}}const Bn=new c(400,60);class Nn extends S{htmlRight;constructor(t,e,s){super(t,s,Bn,"dbutton exercise-button"),this.htmlRight=document.createElement("div"),this.htmlRight.className="sub-topic-stars",this.htmlRight.textContent=_e(e),this.element.appendChild(this.htmlRight)}}class Dt extends H{relMargin;anchor;constructor(t,e,s=0){super(new c(10,10),e),this.relMargin=s,this.anchor=t}updateSize(t){const e=this.element.style,s=t.scale*this.relMargin;e.width=this.anchor.pxSizeX+2*s+"px",e.height=this.anchor.pxSizeY+2*s+"px"}calculateTopLeft(t,e){let s=this.anchor.calculateTopLeft(t,e);const i=t.scale*this.relMargin;return s.x-=i,s.y-=i,s}}class ct extends E{constructor(t){super(t,new c(400,100),"dtext-title")}}class Pn extends H{video;constructor(t,e,s,i=""){super(new c(t,e),i),this.element.style.overflow="hidden",this.element.style.backgroundColor="transparent",this.element.style.display="";const r=document.createElement("video");r.preload="auto",r.playsInline=!0,r.setAttribute("playsinline",""),r.autoplay=!0,r.muted=!0,r.loop=!1,r.controls=!1,r.style.position="absolute",r.style.left="50%",r.style.top="50%",r.style.transform="translate(-50%, -50%)",r.style.width="100%",r.style.height="100%",r.style.objectFit="contain",r.src=W(s),this.element.appendChild(r),this.video=r;const o=()=>{console.log("onCanPlay"),this.video.play().catch(a=>{console.warn("video.play() rejected:",a)}),this.video.removeEventListener("canplay",o)};this.video.addEventListener("canplay",o,{once:!0}),this.video.addEventListener("error",a=>{console.error("Video error",a,this.video.error)}),this.video.addEventListener("loadeddata",()=>console.log("loadeddata")),this.video.addEventListener("canplay",()=>console.log("canplay"))}destroy(){try{this.video.pause(),this.video.removeAttribute("src")}catch{}super.destroy()}playOnceAgain(){this.isDestroyed()||this.video.load()}}class kn extends T{root;game;backButton;backAction;subtopic=void 0;topic=void 0;constructor(t){super(T.SCENE_ZBASE),this.game=t,this.root=t.sceneContainer,Mn(wo)}init(){if(this.subtopic){this.goTopics();return}const t=this.root;t.removeAll();const e=new g;t.add(e,p.MIDDLE_CENTER),e.add(new E("Penguin<br>Math Island",new c(400,140),"dtitle",!0)),e.add(new Pn(400,300,"videos/hello.mp4")),e.add(new S(u("menu.start"),()=>this.goTopics())),e.add(new Vt(u("menu.language"),yn,()=>this.goLanguageSelection())),e.add(new E("<br>© Dolfin Studio, 2025",new c(400,140),"dtext mini",!0)),t.refresh()}uninit(){}goLanguageSelection(){const t=this.root;t.removeAll();const e=new g;t.add(e,p.MIDDLE_CENTER),e.add(new ct(u("language.title")));for(const s of me)e.add(new Vt(Ht(s),ge(s),()=>this.setLanguage(s)));this.addBackButton(this.init),t.refresh()}setLanguage(t){this.game.showPopupBG(),Promise.all([Ee(t)]).then(()=>this.setLanguageDone(t)).catch(e=>{console.error("setLanguage",e),this.game.hidePopupBG()})}setLanguageDone(t){L.setLanguage(t),this.game.loadInfoPopup(u("language.selected",{name:Ht(L.language)}))}addBackButton(t){this.backButton=new S(u("menu.commonBack"),()=>{this.backPressed()},new c(150,100)),this.root.add(this.backButton,new p(c.BOTTOM_CENTER,c.BOTTOM_LEFT,new c(-200,-10))),this.backAction=t}backPressed(){this.backAction&&this.backAction()}goTopics(){this.topic=void 0;const t=this.root;t.removeAll();const e=new g;this.root.add(e,p.MIDDLE_CENTER),e.add(new ct(u("menu.subtopicsTitle")));const s=Ln("skills");for(const i of s)e.add(new S(u(i.name),()=>this.goSubTopics(i)));this.addBackButton(this.init),t.refresh()}goSubTopics(t){this.topic=t,this.subtopic=void 0;const e=this.root;e.removeAll();const s=new g;this.root.add(s,p.MIDDLE_CENTER),s.add(new ct(u("menu.chooseExercise")));const i=xn(this.topic.id);console.log(i.length);for(const r of i){const o=(r.exercise?.length||0)*3;let a=0;if(L&&r.exercise)for(const l of r.exercise){const h=L.stars(l.id);a+=h}s.add(new $n(u(r.name),a,o,()=>{}));for(const l of r.exercise){const h=L.stars(l.id),m=new Nn(Te(l),h,()=>{this.startExercise(l),this.subtopic=r});s.add(m)}}this.addBackButton(()=>this.goTopics()),e.refresh()}startExercise(t){console.log(`start ${t.id}`),y.loadScene(y.quizScene),y.quizScene.setExercise(t)}}class Rn extends T{root;game;done;constructor(t){super(T.SCENE_ZBASE),this.game=t,this.root=t.sceneContainer,this.done=!1}init(){const t=new g;this.root.add(t,p.MIDDLE_CENTER),t.add(new E(". . .",new c(200,50)));const e=W("question_catalog.json");this.done=!1,Promise.all([Sn(e),Ee(L.language).catch(s=>{console.warn("i18n load failed",s)})]).then(()=>Fn(this)).catch(s=>console.error(s))}update(t){this.done&&this.game.loadScene(this.game.mainMenu)}uninit(){}}function Fn(n){n.done=!0,console.log(u("menu.start"))}class zn extends T{root;game;constructor(t){super(T.POPUP_ZBASE),this.game=t,this.root=t.popupContainer}init(){const t=new g;this.root.add(t,p.MIDDLE_CENTER),t.add(new E("Settings",new c(200,50)))}uninit(){}}class Mt{scene;exercise;topList;bottomList;nextButton=void 0;constructor(t,e){this.scene=t,this.exercise=e,this.topList=new g,this.scene.root.add(this.topList,new p(c.TOP_CENTER,c.TOP_CENTER,new c(0,65))),this.bottomList=new g,this.scene.root.add(this.bottomList,new p(c.BOTTOM_CENTER,c.BOTTOM_CENTER,new c(0,-120)))}showNextButton(){this.showBottomButton(u("menu.commonNext"),()=>{this.showNextClicked()})}showBottomButton(t,e){this.nextButton&&this.nextButton.destroy(),this.nextButton=new S(t,e,new c(2*hn/3,R)),this.scene.root.add(this.nextButton,new p(c.BOTTOM_CENTER,c.BOTTOM_CENTER,new c(0,-20/2)))}showNextClicked(){this.nextButton?.destroy(),this.showNext()}}class Un extends Mt{questions=[];count=6;current=-1;correct="";buttons=[];init(){Dn(this.exercise.id).then(t=>{this.initQuestions(t)}).catch(()=>{console.error("MCQControl init failed")})}initQuestions(t){console.log(`loaded ${t.length} questions`),t=wt(t),this.questions=t.length>this.count?t.slice(0,this.count):t,this.current=0,this.showNext()}cheat(){this.scene.finished(this.count,this.count)}showNext(){if(this.current>=this.count){this.scene.finished(y.reactor.getNumberValue("score"),this.count);return}const t=this.questions[this.current];this.topList.destroy(),this.bottomList.destroy(),this.topList.add(new E(t.question,new c(400,200),"dtext-panel")),this.correct=t.options[0];const e=wt(t.options);for(const s of e){const i=new S(s,()=>{this.answer(s)});this.buttons.push(i),this.bottomList.add(i)}this.scene.root.refresh()}answer(t){for(const r of this.buttons)r.disable();const e=this.correct===t;console.log(`isCorrect: ${e}`),this.colorize(this.correct,"green");const s=this.questions[this.current];let i="";e?(y.reactor.addition("score",1,0),i=`${u("gameplay.correct")} ${s.explanation}`):(i=u("gameplay.wrongPrefix",{answer:s.explanation||"..."}),this.colorize(t,"red")),this.topList.add(new E(i,new c(400,200),"dtext-panel")),this.current++,this.showNextButton(),this.scene.root.refresh()}colorize(t,e){for(const s of this.buttons)if(s.element.textContent===t){s.htmlButton.style.backgroundColor=`var(--${e})`;return}}}class Hn extends H{displayValue;displayUnit;buttons=[];onChange;value="";constructor(t,e=new c(400,400),s){super(e,"calculator"),this.onChange=s,this.displayValue=document.createElement("span"),this.displayValue.className="calculator__value",this.displayUnit=document.createElement("span"),this.displayUnit.className="calculator__unit",this.displayUnit.textContent=t;const i=document.createElement("div");i.className="calculator__display",i.append(this.displayValue,this.displayUnit);const r=document.createElement("div");r.className="calculator__grid",this.element.append(i,r),this.buttons=[{label:"7",action:()=>this.appendDigit("7")},{label:"8",action:()=>this.appendDigit("8")},{label:"9",action:()=>this.appendDigit("9")},{label:"4",action:()=>this.appendDigit("4")},{label:"5",action:()=>this.appendDigit("5")},{label:"6",action:()=>this.appendDigit("6")},{label:"1",action:()=>this.appendDigit("1")},{label:"2",action:()=>this.appendDigit("2")},{label:"3",action:()=>this.appendDigit("3")},{label:"0",action:()=>this.appendDigit("0"),css:"calculator__button--zero"},{label:",",action:()=>this.appendComma()},{label:"⌫",action:()=>this.backspace(),css:"calculator__button--backspace"}],this.buttons.forEach(o=>{const a=document.createElement("button");o.element=a,a.type="button",a.textContent=o.label,a.className=`calculator__button ${o.css??""}`.trim(),a.addEventListener("click",o.action),r.append(a)}),this.render()}disable(){this.buttons.forEach(t=>{const e=t.element?.style;e?.pointerEvents&&(e.pointerEvents="none")})}setUnit(t){this.displayUnit.textContent=t}setValue(t){this.value=jn(t),this.render()}getValue(){return this.value}clear(){this.value!==""&&(this.value="",this.render())}appendDigit(t){t==="0"&&this.value==="0"||(this.value==="0"?this.value=t:this.value+=t,this.render())}appendComma(){this.value.includes(".")||(this.value=this.value===""?"0.":`${this.value}.`,this.render())}backspace(){this.value!==""&&(this.value=this.value.slice(0,-1),this.render())}render(){this.displayValue.textContent=this.value||"0",this.onChange?.(this.value)}}function jn(n){const t=n.trim();if(t==="")return"";const s=t.replace(".",",").match(/^\d*(?:,\d*)?$/);return s?s[0].startsWith("0")&&!s[0].startsWith("0,")?s[0].replace(/^0+/,"")||"0":s[0]:""}class j{text;answer;answerUnit;numberLine;minimal;constructor(t,e,s,i=!1,r){this.text=t,this.answer=e,this.answerUnit=s,this.numberLine=r,this.minimal=i}}class Vn extends j{constructor(){const t=b(d.ML),e=u("exercise.add_and_convert_to_ml.guide"),s=[d.ML,d.CL,d.DL,d.L],i=s[Math.random()*s.length|0],r=s[Math.random()*s.length|0],o=w(i===d.ML?10:1,i===d.L?3:10),a=w(r===d.ML?10:1,r===d.L?3:10),l=`${e}
${o} ${b(i)} + ${a} ${b(r)}`,h=A(o,i)+A(a,r),m=st(h,d.ML);super(l,m,t)}}class Gn extends j{constructor(){const t=d.ML,e=w(2,5),s=w(2,6)*Math.pow(10,w(1,2));let i=e*s;const r=ye([d.CL,d.DL,d.L]);i=st(i,r);const a=`${u("exercise.divide_and_convert_to_ml.guide")}
${i} ${b(r)} / ${e}`;super(a,s,b(t))}}class lt{value;color;label;constructor(t,e,s){this.value=t,this.color=e,this.label=s}}class Gt{rangeStart;rangeEnd;indicators;constructor(t,e,s=[]){this.rangeStart=t,this.rangeEnd=e,this.indicators=s}}class qn extends H{options;track;ticksContainer;majorTicksContainer;minorTicksContainer;labelsContainer;indicatorEls=[];constructor(t,e=new c(400,200)){super(e,"numberline"),this.options=t;const s=document.createElement("div");s.className="numberline-track",this.element.append(s),this.track=s;const i=document.createElement("div");i.className="numberline-ticks",this.element.append(i),this.ticksContainer=i;const r=document.createElement("div");r.className="numberline-majorticks",this.element.append(r),this.majorTicksContainer=r;const o=document.createElement("div");o.className="numberline-minorticks",this.element.append(o),this.minorTicksContainer=o;const a=document.createElement("div");a.className="numberline-labels",this.element.append(a),this.labelsContainer=a,this.createIndicatorElements(),this.visible=!0}setIndicators(t){this.options.indicators=t.slice(),this.createIndicatorElements(),this.refresh()}setRange(t,e){x(t!==e),this.options.rangeStart=t,this.options.rangeEnd=e,this.refresh()}createIndicatorElements(){for(const t of this.indicatorEls)t.remove();this.indicatorEls=[];for(const t of this.options.indicators){const e=document.createElement("div");if(e.className="numberline-indicator",e.textContent="▲",t.color&&(e.style.color=t.color),e.dataset.value=String(t.value),t.label){const s=document.createElement("div");s.className="numberline-indicator-label",s.textContent=t.label,e.append(s)}this.ticksContainer.append(e),this.indicatorEls.push(e)}}valueToPx(t){const e=(t-this.options.rangeStart)/(this.options.rangeEnd-this.options.rangeStart);return Math.max(0,Math.min(1,e))*this.pxSizeX}updateSize(t){super.updateSize(t),this.track.style.width=`${this.pxSizeX}px`,this.track.style.height="2px",this.ticksContainer.style.width=`${this.pxSizeX}px`,this.ticksContainer.style.height=`${this.pxSizeY}px`,this.majorTicksContainer.style.width=`${this.pxSizeX}px`,this.majorTicksContainer.style.height=`${this.pxSizeY}px`,this.minorTicksContainer.style.width=`${this.pxSizeX}px`,this.minorTicksContainer.style.height=`${this.pxSizeY}px`,this.labelsContainer.style.width=`${this.pxSizeX}px`,this.labelsContainer.style.height=`${this.pxSizeY}px`,this.layoutTicks(),this.layoutIndicatorsAndTicks()}updatePosition(t,e){super.updatePosition(t,e),this.layoutIndicatorsAndTicks()}layoutTicks(){this.majorTicksContainer.innerHTML="",this.minorTicksContainer.innerHTML="";const t=this.options.rangeStart,e=this.options.rangeEnd,s=Math.ceil(t),i=Math.floor(e);for(let h=s;h<=i;h++)this.addTick(this.majorTicksContainer,h);const r=.1;let o=Math.ceil(t*10)/10;const a=Math.round((e-t)/r)+10;let l=0;for(;o<=e&&l<a;o=Math.round((o+r)*10)/10,l++)Math.abs(o-Math.round(o))<1e-9||this.addTick(this.minorTicksContainer,o)}addTick(t,e){const s=document.createElement("div");s.className="numberline-tick",s.dataset.value=String(e),t.append(s)}layoutIndicatorsAndTicks(){const t=this.pxSizeY/2-1;this.track.style.left="0px",this.track.style.top=`${t}px`;for(let i=0;i<this.majorTicksContainer.children.length;i++){const r=this.majorTicksContainer.children[i],o=Number(r.dataset.value),a=this.valueToPx(o),l=r.offsetWidth||2,h=r.offsetHeight||14;r.style.left=`${a-l/2}px`,r.style.top=`${this.pxSizeY/2-h/2}px`}for(let i=0;i<this.minorTicksContainer.children.length;i++){const r=this.minorTicksContainer.children[i],o=Number(r.dataset.value),a=this.valueToPx(o),l=r.offsetWidth||1,h=r.offsetHeight||6;r.style.left=`${a-l/2}px`,r.style.top=`${this.pxSizeY/2-h/2}px`}for(let i=0;i<this.indicatorEls.length;i++){const r=this.indicatorEls[i],o=Number(r.dataset.value),a=this.valueToPx(o),l=r.offsetWidth||14,h=r.offsetHeight||14,m=a-l/2;r.style.left=`${m}px`;const I=this.pxSizeY/2-h/2;r.style.top=`${I}px`}this.labelsContainer.innerHTML="";const e=document.createElement("div");e.className="numberline-endlabel",e.textContent=String(this.options.rangeStart),e.style.left="0px",this.labelsContainer.append(e);const s=document.createElement("div");s.className="numberline-endlabel",s.textContent=String(this.options.rangeEnd),s.style.left=`${this.pxSizeX}px`,s.style.transform="translateX(-100%)",this.labelsContainer.append(s)}destroy(){super.destroy(),this.indicatorEls=[]}react(t,e){if(t==="indicators")this.setIndicators(e);else if(t==="range"){const s=e;this.setRange(s[0],s[1])}}}var Et=(n=>(n[n.PLUS_MINUS=0]="PLUS_MINUS",n[n.MUL_DIV=1]="MUL_DIV",n))(Et||{});class qt extends j{constructor(t){switch(t){case 0:{const e=Number((w(2,40)/10).toFixed(1)),s=Number((w(2,40)/10).toFixed(1)),i=Number((e+s).toFixed(1)),r=`${u("menu.formatCalculus")}<br><br>[[${e}]] + [[${s}]] = ?`;super(r,i,"",!0,new Gt(0,8,[new lt(e,"orange"),new lt(i,"orange")]));break}default:{const e=Number((w(2,20)/10).toFixed(1)),s=Number(w(2,5).toFixed(1)),i=Number((e*s).toFixed(1)),r=`${u("menu.formatCalculus")}<br><br>[[${s}]] x [[${e}]] = ?`,o=[];for(let a=1;a<=s;a++)o.push(new lt(a*e,"black"));super(r,i,"",!0,new Gt(0,10,o))}}}}class Yn extends j{constructor(){const t=d.ML,e=u("exercise.subtract_and_convert_to_ml.guide"),s=[d.ML,d.CL,d.DL,d.L];let i=s[Math.random()*s.length|0],r=s[Math.random()*s.length|0],o=w(i===d.ML?10:1,i===d.L?3:10),a=w(r===d.ML?10:1,r===d.L?3:10);A(o,i)<A(a,r)&&([o,a,i,r]=[a,o,r,i]);const l=`${e}
${o} ${b(i)} - ${a} ${b(r)}`,h=A(o,i)-A(a,r),m=st(h,t);super(l,m,b(t))}}class Wn extends j{constructor(){const t=d.ML,e=u("exercise.multiply_and_convert_to_ml.guide"),s=[d.CL,d.DL,d.L],i=w(2,5),r=s[Math.random()*s.length|0],o=w(2,9),a=`${e}
${i} x ${o} ${b(r)}`,l=i*A(o,r),h=st(l,t);super(a,h,b(t))}}class Kn extends j{constructor(){const t=u("exercise.easy_liquids_units.guide"),e=d.ML,s=[d.CL,d.DL,d.L],i=s[Math.random()*s.length|0],r=1,o=i===d.L?3:10,a=w(r,o),l=`${t} [[${a} ${b(i)}]]`,h=A(a,i);super(l,h,b(e))}}class Xn extends j{constructor(){const t=w(2,6),e=ye([d.CL,d.DL]),s=w(2,10),i=`${s} ${b(e)}`,r=b(d.ML),o=`
${t} ${Ut(Z.MG)}/${r}`,a=u("exercise.liquid_mass_concentration_amount.guide",{concentration:zt(o),volumeLabel:zt(i)}),l=A(s,e),h=t*l;super(a,h,Ut(Z.MG))}}class Zn extends Mt{current=0;count=6;tasks=[];calculator;init(){if(y.reactor.set("score",0),this.exercise?.task==="decimals_easy")this.tasks=Array.from({length:6},()=>new qt(Et.PLUS_MINUS));else if(this.exercise?.task==="decimals_medium")this.tasks=Array.from({length:6},()=>new qt(Et.MUL_DIV));else if(this.exercise?.task==="add_and_convert_to_ml")this.tasks=Array.from({length:6},()=>new Vn);else if(this.exercise?.task==="subtract_and_convert_to_ml")this.tasks=Array.from({length:6},()=>new Yn);else if(this.exercise?.task==="multiply_and_convert_to_ml")this.tasks=Array.from({length:6},()=>new Wn);else if(this.exercise?.task==="divide_and_convert_to_ml")this.tasks=Array.from({length:6},()=>new Gn);else if(this.exercise?.task==="simple_convert_to_ml")this.tasks=Array.from({length:6},()=>new Kn);else if(this.exercise?.task==="liquid_mass_concentration_amount")this.tasks=Array.from({length:6},()=>new Xn);else{console.error(`unknown task ${this.exercise?.task}`);return}console.log("len: "+this.tasks.length),console.log(this.tasks[0].text),this.showNext()}cheat(){this.scene.finished(this.count,this.count)}showNext(){if(console.log(`task ${this.current} / ${this.tasks.length}`),this.current>=this.tasks.length){this.finished();return}const t=this.tasks[this.current];let e=t.text;e=e.replaceAll("[[",'<span style="color: orange;">'),e=e.replaceAll("]]","</span>"),e=e.replaceAll(`
`,"<br>"),this.current++,this.topList.destroy(),this.bottomList.destroy(),t.minimal?(this.topList.add(new E(e,new c(400,100),"dtext-panel",!0)),t.numberLine&&this.topList.add(new qn(t.numberLine))):this.topList.add(new E(e,new c(400,200),"dtext-panel",!0)),this.calculator=new Hn(t.answerUnit),this.bottomList.add(this.calculator),this.showBottomButton("OK",()=>{this.answer(t)}),this.scene.root.refresh()}answer(t){this.calculator?.disable();const e=this.calculator?.getValue();console.log(e);const s=Number(e);if(!Number.isFinite(s)){console.error(`answer ${s}`);return}let i="";s==t.answer?(y.reactor.addition("score",1,0),i=`${u("gameplay.correct")} ${t.answer} ${t.answerUnit}`):i=u("gameplay.wrongPrefix",{answer:`${t.answer} ${t.answerUnit}`||"..."}),this.topList.add(new E(i,new c(400,100),"dtext-panel")),this.showNextButton(),this.scene.root.refresh()}finished(){this.scene.finished(y.reactor.getNumberValue("score"),this.count)}}class Jn extends H{correctOrder;listeners=new Map;draggedButton=null;pointerId=null;dragOffsetY=0;placeholder=null;containerRect=null;containerScrollTop=0;constructor(t,e){if(super(t,"drag-drop-button-list"),e.length===0)throw new Error("DragDropButtonList requires at least one button");this.correctOrder=e.map(i=>i.id);const s=this.createInitialOrder(e);this.element.classList.add("drag-drop-button-list"),s.forEach(i=>{const r=this.buildButton(i);this.element.append(r)})}disable(){for(const t of this.listeners.keys())t.style.pointerEvents="none"}isCorrectOrder(){const t=Array.from(this.element.children).filter(e=>e instanceof HTMLButtonElement).map(e=>e.dataset.id??"");return t.length!==this.correctOrder.length?!1:t.every((e,s)=>e===this.correctOrder[s])}destroy(){this.listeners.forEach((t,e)=>{e.removeEventListener("pointerdown",t.pointerdown),e.removeEventListener("pointermove",t.pointermove),e.removeEventListener("pointerup",t.pointerup),e.removeEventListener("pointercancel",t.pointercancel)}),this.listeners.clear(),this.draggedButton=null,this.pointerId=null,this.placeholder?.remove(),this.placeholder=null,super.destroy()}buildButton(t){const e=document.createElement("button");e.type="button",e.draggable=!1,e.textContent=t.label,e.dataset.id=t.id,e.classList.add("drag-drop-button-list__item","dbutton");const s={pointerdown:i=>this.handlePointerDown(i,e),pointermove:i=>this.handlePointerMove(i,e),pointerup:i=>this.handlePointerUp(i,e),pointercancel:i=>this.handlePointerUp(i,e)};return e.addEventListener("pointerdown",s.pointerdown),e.addEventListener("pointermove",s.pointermove),e.addEventListener("pointerup",s.pointerup),e.addEventListener("pointercancel",s.pointercancel),this.listeners.set(e,s),e}handlePointerDown(t,e){if(t.button!==0||(t.preventDefault(),this.draggedButton))return;this.draggedButton=e,this.pointerId=t.pointerId,this.containerRect=this.element.getBoundingClientRect(),this.containerScrollTop=this.element.scrollTop;const s=e.getBoundingClientRect();this.dragOffsetY=t.clientY-s.top,this.placeholder=this.createPlaceholder(s.height),this.element.insertBefore(this.placeholder,e),e.setPointerCapture(t.pointerId),e.classList.add("drag-drop-button-list__item--dragging");const i=s.left-(this.containerRect?.left??0),r=s.top-(this.containerRect?.top??0)+this.containerScrollTop;e.style.left=`${i}px`,e.style.top=`${r}px`}handlePointerMove(t,e){if(!this.draggedButton||this.draggedButton!==e||this.pointerId!==t.pointerId)return;const s=this.containerRect?.top??0,i=t.clientY-this.dragOffsetY-s+this.containerScrollTop;e.style.top=`${i}px`,this.updatePlaceholderPosition(t.clientY)}handlePointerUp(t,e){!this.draggedButton||this.draggedButton!==e||this.pointerId!==t.pointerId||(e.hasPointerCapture(t.pointerId)&&e.releasePointerCapture(t.pointerId),this.placeholder&&(this.element.insertBefore(e,this.placeholder),this.placeholder.remove(),this.placeholder=null),e.classList.remove("drag-drop-button-list__item--dragging"),e.style.left="",e.style.top="",this.draggedButton=null,this.pointerId=null,this.containerRect=null,this.dragOffsetY=0,this.containerScrollTop=0)}createInitialOrder(t){const e=wt(t.slice());if(t.length<2||!e.every((o,a)=>o.id===this.correctOrder[a]))return e;const i=e.slice(),r=i.length-1;return[i[r-1],i[r]]=[i[r],i[r-1]],i}createPlaceholder(t){const e=document.createElement("div");return e.className="drag-drop-button-list__placeholder",e.style.height=`${t}px`,e}updatePlaceholderPosition(t){if(!this.placeholder)return;const s=Array.from(this.element.children).filter(i=>i instanceof HTMLElement&&i!==this.draggedButton).find(i=>{if(i===this.placeholder)return!1;const r=i.getBoundingClientRect();return t<r.top+r.height/2});s?this.element.insertBefore(this.placeholder,s):this.element.appendChild(this.placeholder)}}class Ot{question;items;correctOrder;constructor(t,e){this.question=t,this.correctOrder=[...e],this.items=[...this.correctOrder]}isCorrect(t){if(t.length!==this.correctOrder.length)return!1;for(let e=0;e<t.length;e++)if(t[e]!==this.correctOrder[e])return!1;return!0}}const Qn=[100,200,300,400,500];class ts extends Ot{constructor(){const t=es();super(u("exercise.sort_liquid_mass_concentration.guide"),t)}}function es(){const n=ns();os(n);const t=[],e=new Set;for(const s of n)if(!e.has(s.key)&&(e.add(s.key),t.push(s),t.length===4))break;if(t.length<4)throw new Error("Failed to generate unique mass concentrations");return t.sort((s,i)=>s.ratio-i.ratio),t.map(s=>ss(s))}function ns(){const n=[];for(const t of Qn)for(let e=1;e<=9;e++){const s=e/t,i=is(e,t);n.push({mass:e,volume:t,ratio:s,key:i})}return n}function ss(n){const t=`${n.volume} ${b(d.ML)}`;return`${n.mass} mg / ${t}`}function is(n,t){const e=rs(n,t);return`${n/e}/${t/e}`}function rs(n,t){let e=Math.abs(n),s=Math.abs(t);for(;s!==0;){const i=s;s=e%s,e=i}return e}function os(n){for(let t=n.length-1;t>0;t--){const e=w(0,t),s=n[t];n[t]=n[e],n[e]=s}}class as extends Ot{constructor(){const t=w(1,4),e=cs(t);super(u("exercise.sort_liquid_units.guide"),e)}}function cs(n){const t=n*50,e=n*8,s=n*6,i=n*3;return[`${t} ${b(d.ML)}`,`${e} ${b(d.CL)}`,`${s} ${b(d.DL)}`,`${i} ${b(d.L)}`]}const ls=[d.ML,d.CL,d.DL,d.L];class hs extends Ot{constructor(){const t=w(1,9),e=[t,t*10,t*100,t*1e3],s=ps([...ls]),i=e.map((r,o)=>ds(r,s[o]));super(u("exercise.sort_liquid_units_decimal.guide"),i)}}function ds(n,t){const e=we[t];if(!Number.isFinite(e))throw new Error("Unsupported unit for decimal sort");const s=n/e;return`${us(s)} ${b(t)}`}function us(n){if(Number.isInteger(n))return n.toString();const t=n.toString();return t.includes("e")?n.toFixed(3).replace(/0+$/,"").replace(/\.$/,""):t.replace(/0+$/,"").replace(/\.$/,"")}function ps(n){for(let t=n.length-1;t>0;t--){const e=Math.floor(Math.random()*(t+1)),s=n[t];n[t]=n[e],n[e]=s}return n}class fs extends Mt{current=0;count=6;tasks=[];sorter;correctAnswer="";init(){if(y.reactor.set("score",0),this.exercise?.task==="sort_liquid_units")this.tasks=Array.from({length:6},()=>new as);else if(this.exercise?.task==="sort_liquid_units_decimal")this.tasks=Array.from({length:6},()=>new hs);else if(this.exercise?.task==="sort_liquid_mass_concentration")this.tasks=Array.from({length:6},()=>new ts);else{console.error(`Unknown sort task: ${this.exercise?.task}`);return}console.log("len: "+this.tasks.length),console.log(this.tasks[0].question),this.showNext()}cheat(){this.scene.finished(this.count,this.count)}showNext(){if(console.log(`task ${this.current} / ${this.tasks.length}`),this.current>=this.tasks.length){this.finished();return}const t=this.tasks[this.current];let e=[];this.correctAnswer="";let s=!0;for(const i of t.items)e.push({id:i,label:i}),s?s=!1:this.correctAnswer+=", ",this.correctAnswer+=i;this.current++,this.topList.destroy(),this.bottomList.destroy(),this.topList.add(new E(t.question,new c(400,200),"dtext-panel")),this.sorter=new Jn(new c(400,300),e),this.topList.add(this.sorter),this.showBottomButton("OK",()=>{this.answer(t)}),this.scene.root.refresh()}answer(t){this.sorter?.disable();let e="";this.sorter?.isCorrectOrder()?(y.reactor.addition("score",1,0),e=`${u("gameplay.correct")}`):e=u("gameplay.wrongPrefix",{answer:this.correctAnswer}),this.topList.add(new E(e,new c(400,100),"dtext-panel")),this.showNextButton(),this.scene.root.refresh()}finished(){this.scene.finished(y.reactor.getNumberValue("score"),this.count)}}class ms extends T{root;info;action;constructor(t,e){super(T.POPUP_ZBASE),this.root=y.popupContainer,this.info=t,this.action=e}init(){const t=new g;this.root.add(t,p.MIDDLE_CENTER),this.root.add(new Dt(t,"pop-up-plane",10),p.MIDDLE_CENTER);const e=300,s=new c(e,R);t.add(new E(this.info,new c(e,e),"dtext-panel")),t.add(new S(u("menu.commonYes"),this.action,s)),t.add(new S(u("menu.commonNo"),()=>{y.closePopup()},s))}uninit(){}}class gs extends T{root;game;exercise;ctrl;constructor(t){super(T.SCENE_ZBASE),this.game=t,this.root=t.sceneContainer,this.exercise=void 0,this.ctrl=void 0}init(){if(!this.exercise){x(!1);return}if(this.exercise.format=="mcq")this.ctrl=new Un(this,this.exercise);else if(this.exercise.format=="calculus")this.ctrl=new Zn(this,this.exercise);else if(this.exercise.format=="sort")this.ctrl=new fs(this,this.exercise);else{console.error("unhandled format: ",this.exercise.format),this.game.loadScene(this.game.mainMenu);return}this.ctrl.init(),this.addScoreBar(this.exercise)}addScoreBar(t){const e=new c(400,60),s=new wn(e);this.root.add(s,p.TOP_CENTER),s.add(new Dt(s,"quiz-plane"),p.TOP_LEFT);const i=6,r=u("gameplay.score",{score:0,total:i}),o=new E(r,new c(400,22),"dtext small");o.react=(a,l)=>{const h=typeof l=="number"?l:0;o.element.textContent=u("gameplay.score",{score:h,total:i})},y.reactor.addListener(o,"score"),s.add(o,new p(c.BOTTOM_CENTER,c.BOTTOM_CENTER,new c(0,-10))),s.add(new E(Te(t),new c(400,22),"dtext mini"),new p(c.TOP_CENTER,c.TOP_CENTER,new c(0,5))),s.add(new S("II",()=>{this.pauseClicked()},new c(R,R)),new p(c.TOP_LEFT,c.TOP_LEFT,new c(-R-5,0)))}pauseClicked(){const t=new ms(u("gameplay.quitMessage"),()=>{y.loadScene(this.game.mainMenu)});y.loadPopup(t)}uninit(){}setExercise(t){this.exercise=t}exit(){this.exercise=void 0,this.ctrl=void 0}finished(t,e){if(!this.ctrl||!this.exercise){console.error(`finished ${this.ctrl} ${this.ctrl}`);return}this.ctrl.topList.destroy(),this.ctrl.bottomList.destroy(),L.setExerciseSuccess(this.exercise.id,t/e);const s=L.stars(this.exercise.id),i=`<p><span style="color: yellow;">${_e(s)}</span>`,r=`${u("menu.resultsTitle")} ${u("gameplay.score",{score:t,total:e})} ${i}`;this.ctrl.topList.add(new E(r,new c(400,200),"dtext-panel",!0)),this.ctrl.bottomList.add(new S("OK",()=>{y.loadScene(this.game.mainMenu)})),this.root.refresh()}}class ws extends T{root;game;info="";constructor(t){super(T.POPUP_ZBASE),this.game=t,this.root=t.popupContainer}init(){const t=new g;this.root.add(t,p.MIDDLE_CENTER),this.root.add(new Dt(t,"pop-up-plane",10),p.MIDDLE_CENTER);const e=300,s=new c(e,R);t.add(new E(this.info,new c(e,e),"dtext-panel")),t.add(new S("OK",()=>{this.game.closePopup(),this.game.loadScene(this.game.mainMenu)},s))}uninit(){}}class bs extends mn{nextScene=void 0;nextPopup=void 0;scene;popup=void 0;sceneContainer;popupContainer;popupBG;mainMenu;quizScene;boot;settingsPopup;infoPopup;constructor(){super(),this.sceneContainer=this.createRoot(T.SCENE_ZBASE),this.popupContainer=this.createRoot(T.POPUP_ZBASE),this.popupBG=Es(T.POPUP_ZBASE-1,()=>ys(this)),this.hidePopupBG(),this.mainMenu=new kn(this),this.quizScene=new gs(this),this.boot=new Rn(this),this.settingsPopup=new zn(this),this.infoPopup=new ws(this),this.scene=this.boot}update(t){this.nextScene?(this.scene.uninit(),this.scene=this.nextScene,this.nextScene=void 0,this.cleanupScene(),this.scene.init(),this.sceneContainer.refresh()):this.nextPopup?(this.popup&&(this.popup.uninit(),this.cleanupPopup()),this.popup=this.nextPopup,this.nextPopup=void 0,this.popup.init(),this.showPopupBG(),this.popupContainer.refresh()):(this.scene.update(t),this.popup&&this.popup.update(t))}hidePopupBG(){this.popupBG.style.display="none"}showPopupBG(){this.popupBG.style.display=""}closePopup(){this.popup&&(this.popup.uninit(),this.popup=void 0,this.cleanupPopup(),this.hidePopupBG())}cleanupScene(){this.sceneContainer.removeAll()}cleanupPopup(){this.popupContainer.removeAll()}loadScene(t){x(!this.nextScene&&!this.nextPopup),this.closePopup(),this.hidePopupBG(),this.nextScene=t}loadPopup(t){x(!this.nextScene&&!this.nextPopup),this.nextPopup=t}loadInfoPopup(t){this.infoPopup.info=t,this.loadPopup(this.infoPopup)}resize(t,e){const s=window.innerHeight/1024;document.documentElement.style.setProperty("--one",s+"px"),super.resize(t,e,s)}}function ys(n){console.log("pop-up BG pressed"),n.popup&&n.closePopup()}function Es(n,t){const e=document.createElement("div");return Object.assign(e.style,{position:"fixed",inset:"0",background:"rgba(0,0,0,0.5)",zIndex:String(n),pointerEvents:"auto"}),e.addEventListener("pointerdown",s=>{s.preventDefault(),s.stopPropagation(),t?.(s)}),document.body.appendChild(e),e}const Ts=()=>{};var Yt={};/**
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
 */const Se=function(n){const t=[];let e=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},Is=function(n){const t=[];let e=0,s=0;for(;e<n.length;){const i=n[e++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[e++];t[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[e++],o=n[e++],a=n[e++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(l>>10)),t[s++]=String.fromCharCode(56320+(l&1023))}else{const r=n[e++],o=n[e++];t[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return t.join("")},Ce={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,h=l?n[i+2]:0,m=r>>2,I=(r&3)<<4|a>>4;let _=(a&15)<<2|h>>6,K=h&63;l||(K=64,o||(_=64)),s.push(e[m],e[I],e[_],e[K])}return s.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Se(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Is(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=e[n.charAt(i++)],a=i<n.length?e[n.charAt(i)]:0;++i;const h=i<n.length?e[n.charAt(i)]:64;++i;const I=i<n.length?e[n.charAt(i)]:64;if(++i,r==null||a==null||h==null||I==null)throw new vs;const _=r<<2|a>>4;if(s.push(_),h!==64){const K=a<<4&240|h>>2;if(s.push(K),I!==64){const dn=h<<6&192|I;s.push(dn)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class vs extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _s=function(n){const t=Se(n);return Ce.encodeByteArray(t,!0)},xe=function(n){return _s(n).replace(/\./g,"")},Ss=function(n){try{return Ce.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Cs(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const xs=()=>Cs().__FIREBASE_DEFAULTS__,Ls=()=>{if(typeof process>"u"||typeof Yt>"u")return;const n=Yt.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},As=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Ss(n[1]);return t&&JSON.parse(t)},Ds=()=>{try{return Ts()||xs()||Ls()||As()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Le=()=>Ds()?.config;/**
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
 */class Ms{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,s)=>{e?this.reject(e):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,s))}}}function Os(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ae(){try{return typeof indexedDB=="object"}catch{return!1}}function De(){return new Promise((n,t)=>{try{let e=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{t(i.error?.message||"")}}catch(e){t(e)}})}function $s(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Bs="FirebaseError";class V extends Error{constructor(t,e,s){super(e),this.code=t,this.customData=s,this.name=Bs,Object.setPrototypeOf(this,V.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,it.prototype.create)}}class it{constructor(t,e,s){this.service=t,this.serviceName=e,this.errors=s}create(t,...e){const s=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?Ns(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new V(i,a,s)}}function Ns(n,t){return n.replace(Ps,(e,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const Ps=/\{\$([^}]+)}/g;function J(n,t){if(n===t)return!0;const e=Object.keys(n),s=Object.keys(t);for(const i of e){if(!s.includes(i))return!1;const r=n[i],o=t[i];if(Wt(r)&&Wt(o)){if(!J(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!e.includes(i))return!1;return!0}function Wt(n){return n!==null&&typeof n=="object"}/**
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
 */const ks=1e3,Rs=2,Fs=14400*1e3,zs=.5;function Kt(n,t=ks,e=Rs){const s=t*Math.pow(e,n),i=Math.round(zs*s*(Math.random()-.5)*2);return Math.min(Fs,s+i)}/**
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
 */function Me(n){return n&&n._delegate?n._delegate:n}class B{constructor(t,e,s){this.name=t,this.instanceFactory=e,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class Us{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const s=new Ms;if(this.instancesDeferred.set(e,s),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t?.identifier),s=t?.optional??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(js(t))try{this.getOrInitializeService({instanceIdentifier:N})}catch{}for(const[e,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(t=N){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=N){return this.instances.has(t)}getOptions(t=N){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:e});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(t,e){const s=this.normalizeInstanceIdentifier(e),i=this.onInitCallbacks.get(s)??new Set;i.add(t),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&t(r,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const s=this.onInitCallbacks.get(e);if(s)for(const i of s)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Hs(t),options:e}),this.instances.set(t,s),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=N){return this.component?this.component.multipleInstances?t:N:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hs(n){return n===N?void 0:n}function js(n){return n.instantiationMode==="EAGER"}/**
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
 */class Vs{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Us(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var f;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(f||(f={}));const Gs={debug:f.DEBUG,verbose:f.VERBOSE,info:f.INFO,warn:f.WARN,error:f.ERROR,silent:f.SILENT},qs=f.INFO,Ys={[f.DEBUG]:"log",[f.VERBOSE]:"log",[f.INFO]:"info",[f.WARN]:"warn",[f.ERROR]:"error"},Ws=(n,t,...e)=>{if(t<n.logLevel)return;const s=new Date().toISOString(),i=Ys[t];if(i)console[i](`[${s}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Oe{constructor(t){this.name=t,this._logLevel=qs,this._logHandler=Ws,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in f))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Gs[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,f.DEBUG,...t),this._logHandler(this,f.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,f.VERBOSE,...t),this._logHandler(this,f.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,f.INFO,...t),this._logHandler(this,f.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,f.WARN,...t),this._logHandler(this,f.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,f.ERROR,...t),this._logHandler(this,f.ERROR,...t)}}const Ks=(n,t)=>t.some(e=>n instanceof e);let Xt,Zt;function Xs(){return Xt||(Xt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zs(){return Zt||(Zt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $e=new WeakMap,Tt=new WeakMap,Be=new WeakMap,ht=new WeakMap,$t=new WeakMap;function Js(n){const t=new Promise((e,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{e(M(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&$e.set(e,n)}).catch(()=>{}),$t.set(t,n),t}function Qs(n){if(Tt.has(n))return;const t=new Promise((e,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{e(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Tt.set(n,t)}let It={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Tt.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Be.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return M(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function ti(n){It=n(It)}function ei(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const s=n.call(dt(this),t,...e);return Be.set(s,t.sort?t.sort():[t]),M(s)}:Zs().includes(n)?function(...t){return n.apply(dt(this),t),M($e.get(this))}:function(...t){return M(n.apply(dt(this),t))}}function ni(n){return typeof n=="function"?ei(n):(n instanceof IDBTransaction&&Qs(n),Ks(n,Xs())?new Proxy(n,It):n)}function M(n){if(n instanceof IDBRequest)return Js(n);if(ht.has(n))return ht.get(n);const t=ni(n);return t!==n&&(ht.set(n,t),$t.set(t,n)),t}const dt=n=>$t.get(n);function Ne(n,t,{blocked:e,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,t),a=M(o);return s&&o.addEventListener("upgradeneeded",l=>{s(M(o.result),l.oldVersion,l.newVersion,M(o.transaction),l)}),e&&o.addEventListener("blocked",l=>e(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),a}const si=["get","getKey","getAll","getAllKeys","count"],ii=["put","add","delete","clear"],ut=new Map;function Jt(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(ut.get(t))return ut.get(t);const e=t.replace(/FromIndex$/,""),s=t!==e,i=ii.includes(e);if(!(e in(s?IDBIndex:IDBObjectStore).prototype)||!(i||si.includes(e)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let h=l.store;return s&&(h=h.index(a.shift())),(await Promise.all([h[e](...a),i&&l.done]))[0]};return ut.set(t,r),r}ti(n=>({...n,get:(t,e,s)=>Jt(t,e)||n.get(t,e,s),has:(t,e)=>!!Jt(t,e)||n.has(t,e)}));/**
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
 */class ri{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(oi(e)){const s=e.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(e=>e).join(" ")}}function oi(n){return n.getComponent()?.type==="VERSION"}const vt="@firebase/app",Qt="0.14.3";/**
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
 */const D=new Oe("@firebase/app"),ai="@firebase/app-compat",ci="@firebase/analytics-compat",li="@firebase/analytics",hi="@firebase/app-check-compat",di="@firebase/app-check",ui="@firebase/auth",pi="@firebase/auth-compat",fi="@firebase/database",mi="@firebase/data-connect",gi="@firebase/database-compat",wi="@firebase/functions",bi="@firebase/functions-compat",yi="@firebase/installations",Ei="@firebase/installations-compat",Ti="@firebase/messaging",Ii="@firebase/messaging-compat",vi="@firebase/performance",_i="@firebase/performance-compat",Si="@firebase/remote-config",Ci="@firebase/remote-config-compat",xi="@firebase/storage",Li="@firebase/storage-compat",Ai="@firebase/firestore",Di="@firebase/ai",Mi="@firebase/firestore-compat",Oi="firebase";/**
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
 */const _t="[DEFAULT]",$i={[vt]:"fire-core",[ai]:"fire-core-compat",[li]:"fire-analytics",[ci]:"fire-analytics-compat",[di]:"fire-app-check",[hi]:"fire-app-check-compat",[ui]:"fire-auth",[pi]:"fire-auth-compat",[fi]:"fire-rtdb",[mi]:"fire-data-connect",[gi]:"fire-rtdb-compat",[wi]:"fire-fn",[bi]:"fire-fn-compat",[yi]:"fire-iid",[Ei]:"fire-iid-compat",[Ti]:"fire-fcm",[Ii]:"fire-fcm-compat",[vi]:"fire-perf",[_i]:"fire-perf-compat",[Si]:"fire-rc",[Ci]:"fire-rc-compat",[xi]:"fire-gcs",[Li]:"fire-gcs-compat",[Ai]:"fire-fst",[Mi]:"fire-fst-compat",[Di]:"fire-vertex","fire-js":"fire-js",[Oi]:"fire-js-all"};/**
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
 */const Q=new Map,Bi=new Map,St=new Map;function te(n,t){try{n.container.addComponent(t)}catch(e){D.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function F(n){const t=n.name;if(St.has(t))return D.debug(`There were multiple attempts to register component ${t}.`),!1;St.set(t,n);for(const e of Q.values())te(e,n);for(const e of Bi.values())te(e,n);return!0}function rt(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const Ni={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},O=new it("app","Firebase",Ni);/**
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
 */class Pi{constructor(t,e,s){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new B("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw O.create("app-deleted",{appName:this._name})}}function Pe(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const s={name:_t,automaticDataCollectionEnabled:!0,...t},i=s.name;if(typeof i!="string"||!i)throw O.create("bad-app-name",{appName:String(i)});if(e||(e=Le()),!e)throw O.create("no-options");const r=Q.get(i);if(r){if(J(e,r.options)&&J(s,r.config))return r;throw O.create("duplicate-app",{appName:i})}const o=new Vs(i);for(const l of St.values())o.addComponent(l);const a=new Pi(e,s,o);return Q.set(i,a),a}function ki(n=_t){const t=Q.get(n);if(!t&&n===_t&&Le())return Pe();if(!t)throw O.create("no-app",{appName:n});return t}function $(n,t,e){let s=$i[n]??n;e&&(s+=`-${e}`);const i=s.match(/\s|\//),r=t.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${t}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),D.warn(o.join(" "));return}F(new B(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const Ri="firebase-heartbeat-database",Fi=1,Y="firebase-heartbeat-store";let pt=null;function ke(){return pt||(pt=Ne(Ri,Fi,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Y)}catch(e){console.warn(e)}}}}).catch(n=>{throw O.create("idb-open",{originalErrorMessage:n.message})})),pt}async function zi(n){try{const e=(await ke()).transaction(Y),s=await e.objectStore(Y).get(Re(n));return await e.done,s}catch(t){if(t instanceof V)D.warn(t.message);else{const e=O.create("idb-get",{originalErrorMessage:t?.message});D.warn(e.message)}}}async function ee(n,t){try{const s=(await ke()).transaction(Y,"readwrite");await s.objectStore(Y).put(t,Re(n)),await s.done}catch(e){if(e instanceof V)D.warn(e.message);else{const s=O.create("idb-set",{originalErrorMessage:e?.message});D.warn(s.message)}}}function Re(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Ui=1024,Hi=30;class ji{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Gi(e),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ne();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:e}),this._heartbeatsCache.heartbeats.length>Hi){const i=qi(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){D.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ne(),{heartbeatsToSend:e,unsentEntries:s}=Vi(this._heartbeatsCache.heartbeats),i=xe(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return D.warn(t),""}}}function ne(){return new Date().toISOString().substring(0,10)}function Vi(n,t=Ui){const e=[];let s=n.slice();for(const i of n){const r=e.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),se(e)>t){r.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),se(e)>t){e.pop();break}s=s.slice(1)}return{heartbeatsToSend:e,unsentEntries:s}}class Gi{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ae()?De().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await zi(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return ee(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return ee(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function se(n){return xe(JSON.stringify({version:2,heartbeats:n})).length}function qi(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let s=1;s<n.length;s++)n[s].date<e&&(e=n[s].date,t=s);return t}/**
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
 */function Yi(n){F(new B("platform-logger",t=>new ri(t),"PRIVATE")),F(new B("heartbeat",t=>new ji(t),"PRIVATE")),$(vt,Qt,n),$(vt,Qt,"esm2020"),$("fire-js","")}Yi("");var Wi="firebase",Ki="12.3.0";/**
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
 */$(Wi,Ki,"app");const Fe="@firebase/installations",Bt="0.6.19";/**
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
 */const ze=1e4,Ue=`w:${Bt}`,He="FIS_v2",Xi="https://firebaseinstallations.googleapis.com/v1",Zi=3600*1e3,Ji="installations",Qi="Installations";/**
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
 */const tr={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},z=new it(Ji,Qi,tr);function je(n){return n instanceof V&&n.code.includes("request-failed")}/**
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
 */function Ve({projectId:n}){return`${Xi}/projects/${n}/installations`}function Ge(n){return{token:n.token,requestStatus:2,expiresIn:nr(n.expiresIn),creationTime:Date.now()}}async function qe(n,t){const s=(await t.json()).error;return z.create("request-failed",{requestName:n,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Ye({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function er(n,{refreshToken:t}){const e=Ye(n);return e.append("Authorization",sr(t)),e}async function We(n){const t=await n();return t.status>=500&&t.status<600?n():t}function nr(n){return Number(n.replace("s","000"))}function sr(n){return`${He} ${n}`}/**
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
 */async function ir({appConfig:n,heartbeatServiceProvider:t},{fid:e}){const s=Ve(n),i=Ye(n),r=t.getImmediate({optional:!0});if(r){const h=await r.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const o={fid:e,authVersion:He,appId:n.appId,sdkVersion:Ue},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await We(()=>fetch(s,a));if(l.ok){const h=await l.json();return{fid:h.fid||e,registrationStatus:2,refreshToken:h.refreshToken,authToken:Ge(h.authToken)}}else throw await qe("Create Installation",l)}/**
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
 */function Ke(n){return new Promise(t=>{setTimeout(t,n)})}/**
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
 */function rr(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const or=/^[cdef][\w-]{21}$/,Ct="";function ar(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const e=cr(n);return or.test(e)?e:Ct}catch{return Ct}}function cr(n){return rr(n).substr(0,22)}/**
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
 */function ot(n){return`${n.appName}!${n.appId}`}/**
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
 */const Xe=new Map;function Ze(n,t){const e=ot(n);Je(e,t),lr(e,t)}function Je(n,t){const e=Xe.get(n);if(e)for(const s of e)s(t)}function lr(n,t){const e=hr();e&&e.postMessage({key:n,fid:t}),dr()}let k=null;function hr(){return!k&&"BroadcastChannel"in self&&(k=new BroadcastChannel("[Firebase] FID Change"),k.onmessage=n=>{Je(n.data.key,n.data.fid)}),k}function dr(){Xe.size===0&&k&&(k.close(),k=null)}/**
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
 */const ur="firebase-installations-database",pr=1,U="firebase-installations-store";let ft=null;function Nt(){return ft||(ft=Ne(ur,pr,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(U)}}})),ft}async function tt(n,t){const e=ot(n),i=(await Nt()).transaction(U,"readwrite"),r=i.objectStore(U),o=await r.get(e);return await r.put(t,e),await i.done,(!o||o.fid!==t.fid)&&Ze(n,t.fid),t}async function Qe(n){const t=ot(n),s=(await Nt()).transaction(U,"readwrite");await s.objectStore(U).delete(t),await s.done}async function at(n,t){const e=ot(n),i=(await Nt()).transaction(U,"readwrite"),r=i.objectStore(U),o=await r.get(e),a=t(o);return a===void 0?await r.delete(e):await r.put(a,e),await i.done,a&&(!o||o.fid!==a.fid)&&Ze(n,a.fid),a}/**
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
 */async function Pt(n){let t;const e=await at(n.appConfig,s=>{const i=fr(s),r=mr(n,i);return t=r.registrationPromise,r.installationEntry});return e.fid===Ct?{installationEntry:await t}:{installationEntry:e,registrationPromise:t}}function fr(n){const t=n||{fid:ar(),registrationStatus:0};return tn(t)}function mr(n,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(z.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const e={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=gr(n,e);return{installationEntry:e,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:wr(n)}:{installationEntry:t}}async function gr(n,t){try{const e=await ir(n,t);return tt(n.appConfig,e)}catch(e){throw je(e)&&e.customData.serverCode===409?await Qe(n.appConfig):await tt(n.appConfig,{fid:t.fid,registrationStatus:0}),e}}async function wr(n){let t=await ie(n.appConfig);for(;t.registrationStatus===1;)await Ke(100),t=await ie(n.appConfig);if(t.registrationStatus===0){const{installationEntry:e,registrationPromise:s}=await Pt(n);return s||e}return t}function ie(n){return at(n,t=>{if(!t)throw z.create("installation-not-found");return tn(t)})}function tn(n){return br(n)?{fid:n.fid,registrationStatus:0}:n}function br(n){return n.registrationStatus===1&&n.registrationTime+ze<Date.now()}/**
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
 */async function yr({appConfig:n,heartbeatServiceProvider:t},e){const s=Er(n,e),i=er(n,e),r=t.getImmediate({optional:!0});if(r){const h=await r.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const o={installation:{sdkVersion:Ue,appId:n.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await We(()=>fetch(s,a));if(l.ok){const h=await l.json();return Ge(h)}else throw await qe("Generate Auth Token",l)}function Er(n,{fid:t}){return`${Ve(n)}/${t}/authTokens:generate`}/**
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
 */async function kt(n,t=!1){let e;const s=await at(n.appConfig,r=>{if(!en(r))throw z.create("not-registered");const o=r.authToken;if(!t&&vr(o))return r;if(o.requestStatus===1)return e=Tr(n,t),r;{if(!navigator.onLine)throw z.create("app-offline");const a=Sr(r);return e=Ir(n,a),a}});return e?await e:s.authToken}async function Tr(n,t){let e=await re(n.appConfig);for(;e.authToken.requestStatus===1;)await Ke(100),e=await re(n.appConfig);const s=e.authToken;return s.requestStatus===0?kt(n,t):s}function re(n){return at(n,t=>{if(!en(t))throw z.create("not-registered");const e=t.authToken;return Cr(e)?{...t,authToken:{requestStatus:0}}:t})}async function Ir(n,t){try{const e=await yr(n,t),s={...t,authToken:e};return await tt(n.appConfig,s),e}catch(e){if(je(e)&&(e.customData.serverCode===401||e.customData.serverCode===404))await Qe(n.appConfig);else{const s={...t,authToken:{requestStatus:0}};await tt(n.appConfig,s)}throw e}}function en(n){return n!==void 0&&n.registrationStatus===2}function vr(n){return n.requestStatus===2&&!_r(n)}function _r(n){const t=Date.now();return t<n.creationTime||n.creationTime+n.expiresIn<t+Zi}function Sr(n){const t={requestStatus:1,requestTime:Date.now()};return{...n,authToken:t}}function Cr(n){return n.requestStatus===1&&n.requestTime+ze<Date.now()}/**
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
 */async function xr(n){const t=n,{installationEntry:e,registrationPromise:s}=await Pt(t);return s?s.catch(console.error):kt(t).catch(console.error),e.fid}/**
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
 */async function Lr(n,t=!1){const e=n;return await Ar(e),(await kt(e,t)).token}async function Ar(n){const{registrationPromise:t}=await Pt(n);t&&await t}/**
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
 */function Dr(n){if(!n||!n.options)throw mt("App Configuration");if(!n.name)throw mt("App Name");const t=["projectId","apiKey","appId"];for(const e of t)if(!n.options[e])throw mt(e);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function mt(n){return z.create("missing-app-config-values",{valueName:n})}/**
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
 */const nn="installations",Mr="installations-internal",Or=n=>{const t=n.getProvider("app").getImmediate(),e=Dr(t),s=rt(t,"heartbeat");return{app:t,appConfig:e,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},$r=n=>{const t=n.getProvider("app").getImmediate(),e=rt(t,nn).getImmediate();return{getId:()=>xr(e),getToken:i=>Lr(e,i)}};function Br(){F(new B(nn,Or,"PUBLIC")),F(new B(Mr,$r,"PRIVATE"))}Br();$(Fe,Bt);$(Fe,Bt,"esm2020");/**
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
 */const et="analytics",Nr="firebase_id",Pr="origin",kr=60*1e3,Rr="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Rt="https://www.googletagmanager.com/gtag/js";/**
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
 */const Fr={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},C=new it("analytics","Analytics",Fr);/**
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
 */function zr(n){if(!n.startsWith(Rt)){const t=C.create("invalid-gtag-resource",{gtagURL:n});return v.warn(t.message),""}return n}function sn(n){return Promise.all(n.map(t=>t.catch(e=>e)))}function Ur(n,t){let e;return window.trustedTypes&&(e=window.trustedTypes.createPolicy(n,t)),e}function Hr(n,t){const e=Ur("firebase-js-sdk-policy",{createScriptURL:zr}),s=document.createElement("script"),i=`${Rt}?l=${n}&id=${t}`;s.src=e?e?.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function jr(n){let t=[];return Array.isArray(window[n])?t=window[n]:window[n]=t,t}async function Vr(n,t,e,s,i,r){const o=s[i];try{if(o)await t[o];else{const l=(await sn(e)).find(h=>h.measurementId===i);l&&await t[l.appId]}}catch(a){v.error(a)}n("config",i,r)}async function Gr(n,t,e,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await sn(e);for(const l of o){const h=a.find(I=>I.measurementId===l),m=h&&t[h.appId];if(m)r.push(m);else{r=[];break}}}r.length===0&&(r=Object.values(t)),await Promise.all(r),n("event",s,i||{})}catch(r){v.error(r)}}function qr(n,t,e,s){async function i(r,...o){try{if(r==="event"){const[a,l]=o;await Gr(n,t,e,a,l)}else if(r==="config"){const[a,l]=o;await Vr(n,t,e,s,a,l)}else if(r==="consent"){const[a,l]=o;n("consent",a,l)}else if(r==="get"){const[a,l,h]=o;n("get",a,l,h)}else if(r==="set"){const[a]=o;n("set",a)}else n(r,...o)}catch(a){v.error(a)}}return i}function Yr(n,t,e,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=qr(r,n,t,e),{gtagCore:r,wrappedGtag:window[i]}}function Wr(n){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(Rt)&&e.src.includes(n))return e;return null}/**
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
 */const Kr=30,Xr=1e3;class Zr{constructor(t={},e=Xr){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const rn=new Zr;function Jr(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Qr(n){const{appId:t,apiKey:e}=n,s={method:"GET",headers:Jr(e)},i=Rr.replace("{app-id}",t),r=await fetch(i,s);if(r.status!==200&&r.status!==304){let o="";try{const a=await r.json();a.error?.message&&(o=a.error.message)}catch{}throw C.create("config-fetch-failed",{httpStatus:r.status,responseMessage:o})}return r.json()}async function to(n,t=rn,e){const{appId:s,apiKey:i,measurementId:r}=n.options;if(!s)throw C.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw C.create("no-api-key")}const o=t.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new so;return setTimeout(async()=>{a.abort()},kr),on({appId:s,apiKey:i,measurementId:r},o,a,t)}async function on(n,{throttleEndTimeMillis:t,backoffCount:e},s,i=rn){const{appId:r,measurementId:o}=n;try{await eo(s,t)}catch(a){if(o)return v.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a?.message}]`),{appId:r,measurementId:o};throw a}try{const a=await Qr(n);return i.deleteThrottleMetadata(r),a}catch(a){const l=a;if(!no(l)){if(i.deleteThrottleMetadata(r),o)return v.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:r,measurementId:o};throw a}const h=Number(l?.customData?.httpStatus)===503?Kt(e,i.intervalMillis,Kr):Kt(e,i.intervalMillis),m={throttleEndTimeMillis:Date.now()+h,backoffCount:e+1};return i.setThrottleMetadata(r,m),v.debug(`Calling attemptFetch again in ${h} millis`),on(n,m,s,i)}}function eo(n,t){return new Promise((e,s)=>{const i=Math.max(t-Date.now(),0),r=setTimeout(e,i);n.addEventListener(()=>{clearTimeout(r),s(C.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function no(n){if(!(n instanceof V)||!n.customData)return!1;const t=Number(n.customData.httpStatus);return t===429||t===500||t===503||t===504}class so{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function io(n,t,e,s,i){if(i&&i.global){n("event",e,s);return}else{const r=await t,o={...s,send_to:r};n("event",e,o)}}/**
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
 */async function ro(){if(Ae())try{await De()}catch(n){return v.warn(C.create("indexeddb-unavailable",{errorInfo:n?.toString()}).message),!1}else return v.warn(C.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function oo(n,t,e,s,i,r,o){const a=to(n);a.then(_=>{e[_.measurementId]=_.appId,n.options.measurementId&&_.measurementId!==n.options.measurementId&&v.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>v.error(_)),t.push(a);const l=ro().then(_=>{if(_)return s.getId()}),[h,m]=await Promise.all([a,l]);Wr(r)||Hr(r,h.measurementId),i("js",new Date);const I=o?.config??{};return I[Pr]="firebase",I.update=!0,m!=null&&(I[Nr]=m),i("config",h.measurementId,I),h.measurementId}/**
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
 */class ao{constructor(t){this.app=t}_delete(){return delete G[this.app.options.appId],Promise.resolve()}}let G={},oe=[];const ae={};let gt="dataLayer",co="gtag",ce,an,le=!1;function lo(){const n=[];if(Os()&&n.push("This is a browser extension environment."),$s()||n.push("Cookies are not available."),n.length>0){const t=n.map((s,i)=>`(${i+1}) ${s}`).join(" "),e=C.create("invalid-analytics-context",{errorInfo:t});v.warn(e.message)}}function ho(n,t,e){lo();const s=n.options.appId;if(!s)throw C.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)v.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw C.create("no-api-key");if(G[s]!=null)throw C.create("already-exists",{id:s});if(!le){jr(gt);const{wrappedGtag:r,gtagCore:o}=Yr(G,oe,ae,gt,co);an=r,ce=o,le=!0}return G[s]=oo(n,oe,ae,t,ce,gt,e),new ao(n)}function cn(n=ki()){n=Me(n);const t=rt(n,et);return t.isInitialized()?t.getImmediate():uo(n)}function uo(n,t={}){const e=rt(n,et);if(e.isInitialized()){const i=e.getImmediate();if(J(t,e.getOptions()))return i;throw C.create("already-initialized")}return e.initialize({options:t})}function ln(n,t,e,s){n=Me(n),io(an,G[n.app.options.appId],t,e,s).catch(i=>v.error(i))}const he="@firebase/analytics",de="0.10.18";function po(){F(new B(et,(t,{options:e})=>{const s=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return ho(s,i,e)},"PUBLIC")),F(new B("analytics-internal",n,"PRIVATE")),$(he,de),$(he,de,"esm2020");function n(t){try{const e=t.getProvider(et).getImmediate();return{logEvent:(s,i,r)=>ln(e,s,i,r)}}catch(e){throw C.create("interop-component-reg-failed",{reason:e})}}}po();class P{static STORAGE_KEY="playerSettings";language="en";stats={};constructor(t){t?.language&&(this.language=t.language.toLowerCase()),t?.stats&&typeof t.stats=="object"&&(this.stats={...t.stats})}static loadFromStorage(){try{const t=localStorage.getItem(P.STORAGE_KEY);if(!t)return new P;const e=JSON.parse(t);return new P(e)}catch{return new P}}toJSON(){return{language:this.language,stats:this.stats}}save(){try{localStorage.setItem(P.STORAGE_KEY,JSON.stringify(this.toJSON()))}catch{}}setLanguage(t){this.language=(t||"en").toLowerCase(),this.save()}setExerciseSuccess(t,e){const s=Math.max(0,Math.min(1,Number(e))),i=`x:${t}`,r=this.stats[i];(r===void 0||s>r)&&(this.stats[i]=s,this.save())}stars(t){const e=this.stats?.[`x:${t}`];return e===void 0?0:e===1?3:e>.5?2:e>0?1:0}}const fo={apiKey:"AIzaSyCeRJx0UKqnYmhr6u_ZWyCrbU45Xb0ReIs",authDomain:"dolfin-math.firebaseapp.com",projectId:"dolfin-math",storageBucket:"dolfin-math.firebasestorage.app",messagingSenderId:"499035696239",appId:"1:499035696239:web:3a5ee2c439acd40797319a",measurementId:"G-W9DWNKS6P6"},mo=Pe(fo),go=cn(mo);console.log(go);bo("start");const hn=400,R=100,wo=new c(hn,R),nt=document.querySelector("#app");if(!nt)throw new Error("Unable to find the root #app element.");function bo(n){ln(cn(),n)}nt.classList.add("app-root");const L=P.loadFromStorage();L.save();const y=new bs;y.scene.init();function W(n){const t=`./assets/${n}`;return console.log(`path: ${t}`),t}const Ft=()=>{if(!window.visualViewport){console.log("resizeCore: visualViewport not ready");return}y.resize(nt.clientWidth||window.visualViewport.width,nt.clientHeight||window.visualViewport.height)};window.addEventListener("resize",Ft);window.addEventListener("scroll",Ft);Ft();y.start();function yo(){document.addEventListener("touchmove",t=>{t.scale!==void 0&&t.scale!==1&&t.preventDefault()},{passive:!1});let n=0;document.addEventListener("touchend",t=>{const e=Date.now();e-n<=300&&t.preventDefault(),n=e},{passive:!1}),window.addEventListener("wheel",t=>{t.ctrlKey&&t.preventDefault()},{passive:!1})}function Eo(){yo()}document.addEventListener("DOMContentLoaded",Eo);
