(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();class c{constructor(t,n){this.x=t,this.y=n}static{this.TOP_LEFT=new c(0,0)}static{this.TOP_CENTER=new c(.5,0)}static{this.TOP_RIGHT=new c(1,0)}static{this.MIDDLE_LEFT=new c(0,.5)}static{this.MIDDLE_CENTER=new c(.5,.5)}static{this.MIDDLE_RIGHT=new c(1,.5)}static{this.BOTTOM_LEFT=new c(0,1)}static{this.BOTTOM_CENTER=new c(.5,1)}static{this.BOTTOM_RIGHT=new c(1,1)}static{this.CENTER=new c(.5,.5)}static{this.ZERO=new c(0,0)}static{this.ONE=new c(1,1)}}class p{constructor(t,n,s=c.ZERO){this.position=t,this.pivot=n,this.gOffset=s}static{this.TOP_LEFT=new p(c.TOP_LEFT,c.TOP_LEFT)}static{this.TOP_CENTER=new p(c.TOP_CENTER,c.TOP_CENTER)}static{this.TOP_RIGHT=new p(c.TOP_RIGHT,c.TOP_RIGHT)}static{this.MIDDLE_LEFT=new p(c.MIDDLE_LEFT,c.MIDDLE_LEFT)}static{this.MIDDLE_CENTER=new p(c.MIDDLE_CENTER,c.MIDDLE_CENTER)}static{this.MIDDLE_RIGHT=new p(c.MIDDLE_RIGHT,c.MIDDLE_RIGHT)}static{this.BOTTOM_LEFT=new p(c.BOTTOM_LEFT,c.BOTTOM_LEFT)}static{this.BOTTOM_CENTER=new p(c.BOTTOM_CENTER,c.BOTTOM_CENTER)}static{this.BOTTOM_RIGHT=new p(c.BOTTOM_RIGHT,c.BOTTOM_RIGHT)}}function x(e){e||console.error("Assertion failed!")}class ie{constructor(t,n,s,i,r){this.x=t,this.y=n,this.width=s,this.height=i,this.scale=r}unit(t){return t*this.scale}}let on=0;class re{refresh(){}constructor(){this.ID=++on}}class vt extends re{constructor(){super(),this.destroyed=!1,this.pxSizeX=1,this.pxSizeY=1,this.z=-1}setZ(t){x(this.z==-1),this.z=t}setParent(t){x(this.parent==null),this.parent=t}updateSizeRef(t,n,s){this.pxSizeX=t.unit(n),this.pxSizeY=t.unit(s)}calculateTopLeft(t,n){x(this.z!=-1);const s=t.x+n.position.x*t.width,i=t.y+n.position.y*t.height;let r=s+t.unit(n.gOffset.x),o=i+t.unit(n.gOffset.y);return r-=n.pivot.x*this.pxSizeX,o-=n.pivot.y*this.pxSizeY,new c(r,o)}update(t){}destroy(){this.destroyed=!0}isDestroyed(){return this.destroyed}react(t,n){}}class U extends vt{constructor(t,n=""){super(),this.visible=!0,this.refX=t.x,this.refY=t.y;const s=document.createElement("div");n!=""&&(s.className=n),s.style.position="absolute",s.style.display="none",document.body.append(s),this.element=s}setSize(t){this.refX=t.x,this.refY=t.y}setVisibility(t){this.element.style.display=t?"":"none"}updateSize(t){this.updateSizeRef(t,this.refX,this.refY);const n=this.element.style;n.width=this.pxSizeX+"px",n.height=this.pxSizeY+"px"}updatePosition(t,n){const s=this.calculateTopLeft(t,n);this.setTopLeft(s.x,s.y)}setTopLeft(t,n){const s=this.element.style;s.left=t+"px",s.top=n+"px",s.zIndex=this.z.toString()}destroy(){super.destroy(),this.element.remove()}refresh(){super.refresh(),this.setVisibility(this.visible)}}class E{static{this.SCENE_ZBASE=1e6}static{this.POPUP_ZBASE=2e6}update(t){}constructor(t){this.zBase=t}}class an{constructor(t,n){this.obj=t,this.key=n}}class cn{constructor(){this.values={},this.listeners=[]}set(t,n){if(!Object.is(this.values[t],n)){this.values[t]=n,this.listeners=this.listeners.filter(s=>!s.obj.isDestroyed());for(const s of this.listeners)s.key===t&&s.obj.react(t,n)}}addition(t,n,s=0){this.values.hasOwnProperty(t)||(this.values[t]=s);const i=this.values[t];if(typeof i!="number"||!Number.isFinite(i)){console.error(`Value for "${t}" is not a finite number (got ${String(i)})`);return}const r=i+n;this.set(t,r)}addListener(t,n){this.listeners.push(new an(t,n))}getNumberValue(t){const n=this.values[t];return typeof n=="number"&&Number.isFinite(n)?n:(console.error(`DReactor.getNumberValue: ${t}`),0)}getBooleanValue(t){const n=this.values[t];return typeof n=="boolean"?n:(console.error(`DReactor.getBooleanValue: ${t}`),!1)}}class ln{constructor(){this.roots=[],this.lastUpdate=0,this.STEP=1e3/20,this.loop=t=>{if(t-this.lastUpdate>=this.STEP){const n=t-this.lastUpdate;this.lastUpdate=t;try{this.update(n)}catch(s){console.error("DCore loop: error in update.",s)}for(const s of this.roots)s.update(n)}requestAnimationFrame(this.loop)},this.reactor=new cn}resize(t,n,s){for(const i of this.roots)i.updateLayout(new ie(0,0,t,n,s))}createRoot(t){let n=new dn(t);return this.roots.push(n),n}update(t){}start(){this.lastUpdate=performance.now(),requestAnimationFrame(this.loop)}}class hn{constructor(t,n){this.pos=t,this.obj=n}}class oe{constructor(t,n){this.children=[],this.zBase=t,this.parent=n}add(t,n){t.setParent(this.parent),this.children.push(new hn(n,t)),t.setZ(this.zBase+this.children.length)}removeAll(){for(const t of this.children)t.obj.destroy();this.children=[]}}class un extends vt{constructor(t){super(),this.scale=1,this.refX=t.x,this.refY=t.y,this.collection=new oe(-1,this)}setZ(t){super.setZ(t),this.collection.zBase=t}setTopLeft(t,n){const s=new ie(t,n,this.pxSizeX,this.pxSizeY,this.scale);for(const i of this.collection.children)i.obj.updateSize(s),i.obj.updatePosition(s,i.pos)}add(t,n){x(this.z!=-1),this.collection.add(t,n)}updateSize(t){this.scale=t.scale,this.updateSizeRef(t,this.refX,this.refY)}updatePosition(t,n){this.scale=t.scale;const s=this.calculateTopLeft(t,n);this.setTopLeft(s.x,s.y)}update(t){for(const n of this.collection.children)n.obj.update(t)}destroy(){this.collection.removeAll()}refresh(){super.refresh();for(const t of this.collection.children)t.obj.refresh()}}class dn extends re{constructor(t){super(),this.refreshLayoutOnNextUpdate=!1,this.collection=new oe(t,this)}getZ(){return this.collection.zBase}updateLayout(t){this.box=t,this.refreshLayoutOnNextUpdate=!0}add(t,n){this.collection.add(t,n)}update(t){if(this.refreshLayoutOnNextUpdate&&this.box){for(const n of this.collection.children)n.obj.refresh(),n.obj.updateSize(this.box),n.obj.updatePosition(this.box,n.pos);this.refreshLayoutOnNextUpdate=!1}for(const n of this.collection.children)n.obj.update(t)}refresh(){this.refreshLayoutOnNextUpdate=!0}removeAll(){this.collection.removeAll()}}class m extends vt{constructor(t=m.VERTICAL,n=m.ALIGN_CENTER){super(),this.children=[],this.orientation=t,this.alignment=n}static{this.HORIZONTAL=1001}static{this.VERTICAL=1002}static{this.ALIGN_FRONT=2001}static{this.ALIGN_BACK=2002}static{this.ALIGN_CENTER=2003}add(t){x(this.z!=-1),t.setParent(this),this.children.push(t),t.setZ(this.z+this.children.length)}updateSize(t){let n=0,s=0;for(const i of this.children)i.updateSize(t),this.orientation==m.VERTICAL?(s+=i.pxSizeY,n=Math.max(n,i.pxSizeX)):this.orientation==m.HORIZONTAL?(n+=i.pxSizeX,s=Math.max(s,i.pxSizeY)):x(!1);this.pxSizeX=n,this.pxSizeY=s}updatePosition(t,n){const s=this.calculateTopLeft(t,n);this.setTopLeft(s.x,s.y)}setTopLeft(t,n){let s=t,i=n;for(const r of this.children)this.orientation==m.VERTICAL?(this.alignment==m.ALIGN_FRONT?r.setTopLeft(s,i):this.alignment==m.ALIGN_BACK?r.setTopLeft(s+this.pxSizeX-r.pxSizeX,i):this.alignment==m.ALIGN_CENTER?r.setTopLeft(s+(this.pxSizeX-r.pxSizeX)/2,i):x(!1),i+=r.pxSizeY):this.orientation==m.HORIZONTAL?(r.setTopLeft(s,i),s+=r.pxSizeX):x(!1)}update(t){this.children=this.children.filter(n=>!n.isDestroyed());for(const n of this.children)n.update(t)}refresh(){for(const t of this.children)t.refresh()}destroy(){for(const t of this.children)t.destroy();this.children=[]}}const ae=["en","fi","sv","th"];function ce(e){return e==="sv"&&(e="se"),({en:"GB"}[e]||e).toUpperCase().replace(/./g,s=>String.fromCodePoint(127397+s.charCodeAt(0)))}const pn=ae.map(ce).join("");function ft(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}var u=(e=>(e[e.ML=0]="ML",e[e.CL=1]="CL",e[e.DL=2]="DL",e[e.L=3]="L",e))(u||{}),K=(e=>(e[e.MG=0]="MG",e))(K||{});const le={0:1,1:10,2:100,3:1e3};function he(e){const t=le[e];if(!Number.isFinite(t))throw new Error("Cannot convert using non-volume unit");return t}function A(e,t){return e*he(t)}function et(e,t){return e/he(t)}function y(e,t){const n=Math.ceil(e),s=Math.floor(t);return Math.max(n,Math.floor(Math.random()*(s-n+1))+n)}function ue(e){const t=y(0,e.length-1);return e[t]}function Rt(e){return`[[${e}]]`}const St=new Map;let mt=[];async function de(e){const t=(e||"en").toLowerCase();for(const r of mt)St.delete(r);mt=[];const n=q(`i18n/${t}.json`),s=await fetch(n);if(!s.ok)throw new Error(`i18n load failed: ${s.status} ${s.statusText}`);console.log(`language loaded: ${e}`);const i=await s.json();me(i)}function d(e,t,n){const s=St.get(e)??n??e;return t?s.replace(/\{(\w+)\}/g,(i,r)=>String(t[r]??`{${r}}`)):s}function pe(e){return d(`exercise.${e.id}.title`)}function g(e){switch(e){case u.ML:return d("units.ml");case u.CL:return d("units.cl");case u.DL:return d("units.dl");case u.L:return d("units.l");default:return"?"}}function Pt(e){switch(e){case K.MG:return d("units.mg",void 0,"mg");default:return"?"}}function fe(e){const t=e.toLowerCase();return t==="sv"?d("language.swedish",void 0,"Swedish"):t==="fi"?d("language.finnish",void 0,"Finnish"):t==="th"?d("language.thai",void 0,"Thai"):t==="en"?d("language.english",void 0,"English"):(console.error(`languageName: ${e}`),e)}function me(e,t){for(const[n,s]of Object.entries(e)){const i=t?`${t}.${n}`:n;typeof s=="string"?(St.set(i,s),mt.push(i)):fn(s)&&me(s,i)}}function fn(e){return!!e&&typeof e=="object"&&!Array.isArray(e)}const gt=new Map,Y=new Map;function mn(e){const t=e.split("?")[0].toLowerCase();return/\.(png|jpe?g|gif|webp|bmp|svg)$/.test(t)?"image":t.endsWith(".json")||t.endsWith(".txt")?"text":"blob"}function Nt(e){if(!e.ok)throw new Error(`Failed to load (${e.status} ${e.statusText})`);return e}function gn(e){return new Promise((t,n)=>{const s=new Image;s.decoding="async",s.onload=()=>t(s),s.onerror=()=>n(new Error(`Failed to load image: ${e}`)),s.src=q(e)})}async function wn(e,t=mn(e)){if(gt.has(e))return;if(Y.has(e))return Y.get(e).then(()=>{});let n;t==="image"?n=gn(e):t==="text"?n=fetch(q(e),{credentials:"same-origin"}).then(Nt).then(s=>s.text()):n=fetch(e,{credentials:"same-origin"}).then(Nt).then(s=>s.blob()),Y.set(e,n);try{const s=await n;gt.set(e,s)}finally{Y.delete(e)}}function bn(e){const t=gt.get(e);return typeof t!="string"?(console.error(`Text not found in cache: ${e}`),""):t}let wt;async function yn(e){const t=await fetch(e);if(!t.ok)throw new Error(`Failed to load catalog [${e}]: ${t.status} ${t.statusText}`);wt=await t.json()}function En(e){if(!wt)throw new Error;for(const t of wt.areas){const n=t.topics.find(s=>s.id===e);if(n)return n}throw new Error(`Topic not found: ${e}`)}function Tn(e){return En(e).subtopics}function In(e){return`questions/${L.language}/${e}.json`}async function _n(e){const t=In(e);await wn(t);const n=bn(t);if(!n)throw new Error(`Question data for "${e}" not loaded. Call loadById first.`);let s;try{s=JSON.parse(n)}catch(i){throw new Error(`Failed to parse question data for "${e}": ${i.message}`)}if(!Array.isArray(s))throw new Error(`Question data for "${e}" is not an array`);return s}let Ct=new c(400,50);function vn(e){Ct=e}class I extends U{constructor(t,n,s="dtext",i=!1){super(n,s),i?this.element.innerHTML=t||"???":this.element.textContent=t||"???"}react(t,n){this.element.textContent=n}}class T extends U{constructor(t,n,s=Ct,i="dbutton"){super(s,"dbutton-div"),this.vanishTime=2e3,this.vanishing=!1,this.action=n,this.htmlButton=document.createElement("div"),this.htmlButton.className=i,this.htmlButton.style.position="relative",this.htmlButton.textContent=t,this.element.appendChild(this.htmlButton),this.clickHandler=()=>{this.action()},this.htmlButton.addEventListener("click",this.clickHandler)}vanish(){this.vanishing=!0,this.element.removeEventListener("click",this.clickHandler)}disable(){this.htmlButton.style.pointerEvents="none"}update(t){this.vanishing&&(this.refY*=.9,this.vanishTime-=t,this.vanishTime<=0&&this.destroy(),this.parent?.refresh(),console.log("vanishing "+t+" pxy"+this.pxSizeY))}setAction(t){this.action=t}}class kt extends T{constructor(t,n,s){super(t,s,Ct,"dbutton split-button"),this.htmlRight=document.createElement("div"),this.htmlRight.className="split-button-right",this.htmlRight.textContent=n,this.element.appendChild(this.htmlRight)}}class Sn extends U{constructor(t,n){super(n);const s=document.createElement("img");s.src=q(t),s.style.width="100%",s.style.height="100%",s.style.objectFit="cover",this.element.appendChild(s)}}const ge="★",Cn="☆";function we(e){let t="";for(let n=0;n<3;n++)t+=n<e?ge:Cn;return t}class xn extends T{htmlStars;constructor(t,n,s,i){super(t,i,new c(400,150),"dbutton sub-topic-button"),this.htmlStars=document.createElement("div"),this.htmlStars.className="sub-topic-stars",this.htmlStars.textContent=`${ge} ${n} / ${s}`,this.element.appendChild(this.htmlStars)}}class Ln extends T{htmlRight;constructor(t,n,s){super(t,s,new c(400,150),"dbutton exercise-button"),this.htmlRight=document.createElement("div"),this.htmlRight.className="sub-topic-stars",this.htmlRight.textContent=we(n),this.element.appendChild(this.htmlRight)}}class An extends U{anchor;constructor(t,n){super(new c(10,10),n),this.anchor=t}updateSize(t){const n=this.element.style;n.width=this.anchor.pxSizeX+"px",n.height=this.anchor.pxSizeY+"px"}}class ot extends I{constructor(t){super(t,new c(400,100),"dtext-title")}}class Dn extends E{root;game;backButton;backAction;subtopic=void 0;constructor(t){super(E.SCENE_ZBASE),this.game=t,this.root=t.sceneContainer,vn(lo)}init(){if(this.subtopic){this.goExercises(this.subtopic);return}const t=this.root;t.removeAll();const n=new m;t.add(n,p.MIDDLE_CENTER),n.add(new Sn("icons/title.png",new c(300,300))),n.add(new T(d("menu.start"),()=>this.goSubTopics())),n.add(new kt(d("menu.language"),pn,()=>this.goLanguageSelection())),t.refresh()}uninit(){}goLanguageSelection(){const t=this.root;t.removeAll();const n=new m;t.add(n,p.MIDDLE_CENTER),n.add(new ot(d("language.title")));for(const s of ae)n.add(new kt(fe(s),ce(s),()=>this.setLanguage(s)));this.addBackButton(this.init),t.refresh()}setLanguage(t){this.game.showPopupBG(),Promise.all([de(t)]).then(()=>this.setLanguageDone(t)).catch(n=>{console.error("setLanguage",n),this.game.hidePopupBG()})}setLanguageDone(t){L.setLanguage(t),this.game.loadInfoPopup("language")}addBackButton(t){this.backButton=new T(d("menu.commonBack"),()=>{this.backPressed()},new c(150,100)),this.root.add(this.backButton,new p(c.BOTTOM_CENTER,c.BOTTOM_LEFT,new c(-200,-10))),this.backAction=t}backPressed(){this.backAction&&this.backAction()}goSubTopics(){this.subtopic=void 0;const t=this.root;t.removeAll();const n=new m;this.root.add(n,p.MIDDLE_CENTER),n.add(new ot(d("menu.subtopicsTitle")));const s=Tn("measurement");console.log(s.length);for(const i of s){const r=(i.exercise?.length||0)*3;let o=0;if(L&&i.exercise)for(const a of i.exercise){const l=L.stars(a.id);o+=l}n.add(new xn(d(i.name),o,r,()=>this.goExercises(i)))}this.addBackButton(this.init),t.refresh()}goExercises(t){this.subtopic=t;const n=this.root;n.removeAll();const s=new m;this.root.add(s,p.MIDDLE_CENTER),s.add(new ot(d(t.name))),console.log(t.exercise.length);for(const i of t.exercise){const r=L.stars(i.id);s.add(new Ln(pe(i),r,()=>this.startExercise(i)))}this.addBackButton(this.goSubTopics),n.refresh()}startExercise(t){console.log(`start ${t.id}`),w.loadScene(w.quizScene),w.quizScene.setExercise(t)}}class On extends E{root;game;done;constructor(t){super(E.SCENE_ZBASE),this.game=t,this.root=t.sceneContainer,this.done=!1}init(){const t=new m;this.root.add(t,p.MIDDLE_CENTER),t.add(new I(". . .",new c(200,50)));const n=q("question_catalog.json");this.done=!1,Promise.all([yn(n),de(L.language).catch(s=>{console.warn("i18n load failed",s)})]).then(()=>Mn(this)).catch(s=>console.error(s))}update(t){this.done&&this.game.loadScene(this.game.mainMenu)}uninit(){}}function Mn(e){e.done=!0,console.log(d("menu.start"))}class Bn extends E{root;game;constructor(t){super(E.POPUP_ZBASE),this.game=t,this.root=t.popupContainer}init(){const t=new m;this.root.add(t,p.MIDDLE_CENTER),t.add(new I("Settings",new c(200,50)))}uninit(){}}class xt{scene;exercise;topList;bottomList;nextButton=void 0;constructor(t,n){this.scene=t,this.exercise=n,this.topList=new m,this.scene.root.add(this.topList,new p(c.TOP_CENTER,c.TOP_CENTER,new c(0,105))),this.bottomList=new m,this.scene.root.add(this.bottomList,new p(c.BOTTOM_CENTER,c.BOTTOM_CENTER,new c(0,-100)))}showNextButton(){this.nextButton=new T(d("menu.commonNext"),()=>{this.showNextClicked()}),this.scene.root.add(this.nextButton,p.BOTTOM_CENTER)}showNextClicked(){this.nextButton?.destroy(),this.showNext()}}class $n extends xt{questions=[];count=6;current=-1;correct="";buttons=[];init(){_n(this.exercise.id).then(t=>{this.initQuestions(t)}).catch(()=>{console.error("MCQControl init failed")})}initQuestions(t){console.log(`loaded ${t.length} questions`),t=ft(t),this.questions=t.length>this.count?t.slice(0,this.count):t,this.current=0,this.showNext()}cheat(){this.scene.finished(this.count,this.count)}showNext(){if(this.current>=this.count){this.scene.finished(w.reactor.getNumberValue("score"),this.count);return}const t=this.questions[this.current];this.topList.destroy(),this.bottomList.destroy(),this.topList.add(new I(t.question,new c(400,200),"dtext-panel")),this.correct=t.options[0];const n=ft(t.options);for(const s of n){const i=new T(s,()=>{this.answer(s)});this.buttons.push(i),this.bottomList.add(i)}this.scene.root.refresh()}answer(t){for(const r of this.buttons)r.disable();const n=this.correct===t;console.log(`isCorrect: ${n}`),this.colorize(this.correct,"green");const s=this.questions[this.current];let i="";n?(w.reactor.addition("score",1,0),i=`${d("gameplay.correct")} ${s.explanation}`):(i=d("gameplay.wrongPrefix",{answer:s.explanation||"..."}),this.colorize(t,"red")),this.topList.add(new I(i,new c(400,200),"dtext-panel")),this.current++,this.showNextButton(),this.scene.root.refresh()}colorize(t,n){for(const s of this.buttons)if(s.element.textContent===t){s.htmlButton.style.backgroundColor=`var(--${n})`;return}}}class Rn extends U{displayValue;displayUnit;buttons=[];onChange;value="";constructor(t,n=new c(400,400),s){super(n,"calculator"),this.onChange=s,this.displayValue=document.createElement("span"),this.displayValue.className="calculator__value",this.displayUnit=document.createElement("span"),this.displayUnit.className="calculator__unit",this.displayUnit.textContent=t;const i=document.createElement("div");i.className="calculator__display",i.append(this.displayValue,this.displayUnit);const r=document.createElement("div");r.className="calculator__grid",this.element.append(i,r),this.buttons=[{label:"7",action:()=>this.appendDigit("7")},{label:"8",action:()=>this.appendDigit("8")},{label:"9",action:()=>this.appendDigit("9")},{label:"4",action:()=>this.appendDigit("4")},{label:"5",action:()=>this.appendDigit("5")},{label:"6",action:()=>this.appendDigit("6")},{label:"1",action:()=>this.appendDigit("1")},{label:"2",action:()=>this.appendDigit("2")},{label:"3",action:()=>this.appendDigit("3")},{label:"0",action:()=>this.appendDigit("0"),css:"calculator__button--zero"},{label:",",action:()=>this.appendComma()},{label:"⌫",action:()=>this.backspace(),css:"calculator__button--backspace"}],this.buttons.forEach(o=>{const a=document.createElement("button");o.element=a,a.type="button",a.textContent=o.label,a.className=`calculator__button ${o.css??""}`.trim(),a.addEventListener("click",o.action),r.append(a)}),this.render()}disable(){this.buttons.forEach(t=>{const n=t.element?.style;n?.pointerEvents&&(n.pointerEvents="none")})}setUnit(t){this.displayUnit.textContent=t}setValue(t){this.value=Pn(t),this.render()}getValue(){return this.value}clear(){this.value!==""&&(this.value="",this.render())}appendDigit(t){t==="0"&&this.value==="0"||(this.value==="0"?this.value=t:this.value+=t,this.render())}appendComma(){this.value.includes(",")||(this.value=this.value===""?"0,":`${this.value},`,this.render())}backspace(){this.value!==""&&(this.value=this.value.slice(0,-1),this.render())}render(){this.displayValue.textContent=this.value||"0",this.onChange?.(this.value)}}function Pn(e){const t=e.trim();if(t==="")return"";const s=t.replace(".",",").match(/^\d*(?:,\d*)?$/);return s?s[0].startsWith("0")&&!s[0].startsWith("0,")?s[0].replace(/^0+/,"")||"0":s[0]:""}class j{text;answer;answerUnit;constructor(t,n,s){this.text=t,this.answer=n,this.answerUnit=s}}class Nn extends j{constructor(){const t=g(u.ML),n=d("exercise.add_and_convert_to_ml.guide"),s=[u.ML,u.CL,u.DL,u.L],i=s[Math.random()*s.length|0],r=s[Math.random()*s.length|0],o=y(i===u.ML?10:1,i===u.L?3:10),a=y(r===u.ML?10:1,r===u.L?3:10),l=`${n} ${o} ${g(i)} + ${a} ${g(r)}`,h=A(o,i)+A(a,r),b=et(h,u.ML);super(l,b,t)}}class kn extends j{constructor(){const t=u.ML,n=y(2,5),s=y(2,6)*Math.pow(10,y(1,2));let i=n*s;const r=ue([u.CL,u.DL,u.L]);i=et(i,r);const a=`${d("exercise.divide_and_convert_to_ml.guide")}

${i} ${g(r)} / ${n}`;super(a,s,g(t))}}class Fn extends j{constructor(){const t=y(2,6),n=ue([u.CL,u.DL]),s=y(2,10),i=`${s} ${g(n)}`,r=g(u.ML),o=`
${t} ${Pt(K.MG)}/${r}`,a=d("exercise.liquid_mass_concentration_amount.guide",{concentration:Rt(o),volumeLabel:Rt(i)}),l=A(s,n),h=t*l;super(a,h,Pt(K.MG))}}class zn extends j{constructor(){const t=u.ML,n=d("exercise.multiply_and_convert_to_ml.guide"),s=[u.CL,u.DL,u.L],i=y(2,5),r=s[Math.random()*s.length|0],o=y(2,9),a=`${n}

${i} x ${o} ${g(r)}`,l=i*A(o,r),h=et(l,t);super(a,h,g(t))}}class Hn extends j{constructor(){const t=d("exercise.easy_liquids_units.guide"),n=u.ML,s=[u.CL,u.DL,u.L],i=s[Math.random()*s.length|0],r=1,o=i===u.L?3:10,a=y(r,o),l=`${t} [[${a} ${g(i)}]]`,h=A(a,i);super(l,h,g(n))}}class Un extends j{constructor(){const t=u.ML,n=d("exercise.subtract_and_convert_to_ml.guide"),s=[u.ML,u.CL,u.DL,u.L];let i=s[Math.random()*s.length|0],r=s[Math.random()*s.length|0],o=y(i===u.ML?10:1,i===u.L?3:10),a=y(r===u.ML?10:1,r===u.L?3:10);A(o,i)<A(a,r)&&([o,a,i,r]=[a,o,r,i]);const l=`${n}

${o} ${g(i)} - ${a} ${g(r)}`,h=A(o,i)-A(a,r),b=et(h,t);super(l,b,g(t))}}class jn extends xt{current=0;count=6;tasks=[];calculator;readyButton=void 0;init(){if(w.reactor.set("score",0),this.exercise?.task==="add_and_convert_to_ml")this.tasks=Array.from({length:6},()=>new Nn);else if(this.exercise?.task==="subtract_and_convert_to_ml")this.tasks=Array.from({length:6},()=>new Un);else if(this.exercise?.task==="multiply_and_convert_to_ml")this.tasks=Array.from({length:6},()=>new zn);else if(this.exercise?.task==="divide_and_convert_to_ml")this.tasks=Array.from({length:6},()=>new kn);else if(this.exercise?.task==="simple_convert_to_ml")this.tasks=Array.from({length:6},()=>new Hn);else if(this.exercise?.task==="liquid_mass_concentration_amount")this.tasks=Array.from({length:6},()=>new Fn);else{console.error(`unknown task ${this.exercise?.task}`);return}console.log("len: "+this.tasks.length),console.log(this.tasks[0].text),this.showNext()}cheat(){this.scene.finished(this.count,this.count)}showNext(){if(console.log(`task ${this.current} / ${this.tasks.length}`),this.current>=this.tasks.length){this.finished();return}const t=this.tasks[this.current];let n=t.text;n=n.replaceAll("[[",'<span style="color: yellow;">'),n=n.replaceAll("]]","</span>"),this.current++,this.topList.destroy(),this.bottomList.destroy(),this.topList.add(new I(n,new c(400,200),"dtext-panel",!0)),this.calculator=new Rn(t.answerUnit),this.bottomList.add(this.calculator),this.readyButton=new T("OK",()=>{this.answer(t)}),this.bottomList.add(this.readyButton),this.scene.root.refresh()}answer(t){this.readyButton?.disable(),this.calculator?.disable();const n=this.calculator?.getValue(),s=Number(n);if(!Number.isFinite(s))return;let i="";s==t.answer?(w.reactor.addition("score",1,0),i=`${d("gameplay.correct")} ${t.answer}`):i=d("gameplay.wrongPrefix",{answer:t.answer||"..."}),this.topList.add(new I(i,new c(400,100),"dtext-panel")),this.showNextButton(),this.scene.root.refresh()}finished(){this.scene.finished(w.reactor.getNumberValue("score"),this.count)}}class Gn extends U{correctOrder;listeners=new Map;draggedButton=null;pointerId=null;dragOffsetY=0;placeholder=null;containerRect=null;containerScrollTop=0;constructor(t,n){if(super(t,"drag-drop-button-list"),n.length===0)throw new Error("DragDropButtonList requires at least one button");this.correctOrder=n.map(i=>i.id);const s=this.createInitialOrder(n);this.element.classList.add("drag-drop-button-list"),s.forEach(i=>{const r=this.buildButton(i);this.element.append(r)})}disable(){for(const t of this.listeners.keys())t.style.pointerEvents="none"}isCorrectOrder(){const t=Array.from(this.element.children).filter(n=>n instanceof HTMLButtonElement).map(n=>n.dataset.id??"");return t.length!==this.correctOrder.length?!1:t.every((n,s)=>n===this.correctOrder[s])}destroy(){this.listeners.forEach((t,n)=>{n.removeEventListener("pointerdown",t.pointerdown),n.removeEventListener("pointermove",t.pointermove),n.removeEventListener("pointerup",t.pointerup),n.removeEventListener("pointercancel",t.pointercancel)}),this.listeners.clear(),this.draggedButton=null,this.pointerId=null,this.placeholder?.remove(),this.placeholder=null,super.destroy()}buildButton(t){const n=document.createElement("button");n.type="button",n.draggable=!1,n.textContent=t.label,n.dataset.id=t.id,n.classList.add("drag-drop-button-list__item","dbutton");const s={pointerdown:i=>this.handlePointerDown(i,n),pointermove:i=>this.handlePointerMove(i,n),pointerup:i=>this.handlePointerUp(i,n),pointercancel:i=>this.handlePointerUp(i,n)};return n.addEventListener("pointerdown",s.pointerdown),n.addEventListener("pointermove",s.pointermove),n.addEventListener("pointerup",s.pointerup),n.addEventListener("pointercancel",s.pointercancel),this.listeners.set(n,s),n}handlePointerDown(t,n){if(t.button!==0||(t.preventDefault(),this.draggedButton))return;this.draggedButton=n,this.pointerId=t.pointerId,this.containerRect=this.element.getBoundingClientRect(),this.containerScrollTop=this.element.scrollTop;const s=n.getBoundingClientRect();this.dragOffsetY=t.clientY-s.top,this.placeholder=this.createPlaceholder(s.height),this.element.insertBefore(this.placeholder,n),n.setPointerCapture(t.pointerId),n.classList.add("drag-drop-button-list__item--dragging");const i=s.left-(this.containerRect?.left??0),r=s.top-(this.containerRect?.top??0)+this.containerScrollTop;n.style.left=`${i}px`,n.style.top=`${r}px`}handlePointerMove(t,n){if(!this.draggedButton||this.draggedButton!==n||this.pointerId!==t.pointerId)return;const s=this.containerRect?.top??0,i=t.clientY-this.dragOffsetY-s+this.containerScrollTop;n.style.top=`${i}px`,this.updatePlaceholderPosition(t.clientY)}handlePointerUp(t,n){!this.draggedButton||this.draggedButton!==n||this.pointerId!==t.pointerId||(n.hasPointerCapture(t.pointerId)&&n.releasePointerCapture(t.pointerId),this.placeholder&&(this.element.insertBefore(n,this.placeholder),this.placeholder.remove(),this.placeholder=null),n.classList.remove("drag-drop-button-list__item--dragging"),n.style.left="",n.style.top="",this.draggedButton=null,this.pointerId=null,this.containerRect=null,this.dragOffsetY=0,this.containerScrollTop=0)}createInitialOrder(t){const n=ft(t.slice());if(t.length<2||!n.every((o,a)=>o.id===this.correctOrder[a]))return n;const i=n.slice(),r=i.length-1;return[i[r-1],i[r]]=[i[r],i[r-1]],i}createPlaceholder(t){const n=document.createElement("div");return n.className="drag-drop-button-list__placeholder",n.style.height=`${t}px`,n}updatePlaceholderPosition(t){if(!this.placeholder)return;const s=Array.from(this.element.children).filter(i=>i instanceof HTMLElement&&i!==this.draggedButton).find(i=>{if(i===this.placeholder)return!1;const r=i.getBoundingClientRect();return t<r.top+r.height/2});s?this.element.insertBefore(this.placeholder,s):this.element.appendChild(this.placeholder)}}class Lt{question;items;correctOrder;constructor(t,n){this.question=t,this.correctOrder=[...n],this.items=[...this.correctOrder]}isCorrect(t){if(t.length!==this.correctOrder.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==this.correctOrder[n])return!1;return!0}}const Vn=[100,200,300,400,500];class qn extends Lt{constructor(){const t=Wn();super(d("exercise.sort_liquid_mass_concentration.guide"),t)}}function Wn(){const e=Yn();Jn(e);const t=[],n=new Set;for(const s of e)if(!n.has(s.key)&&(n.add(s.key),t.push(s),t.length===4))break;if(t.length<4)throw new Error("Failed to generate unique mass concentrations");return t.sort((s,i)=>s.ratio-i.ratio),t.map(s=>Kn(s))}function Yn(){const e=[];for(const t of Vn)for(let n=1;n<=9;n++){const s=n/t,i=Xn(n,t);e.push({mass:n,volume:t,ratio:s,key:i})}return e}function Kn(e){const t=`${e.volume} ${g(u.ML)}`;return`${e.mass} mg / ${t}`}function Xn(e,t){const n=Zn(e,t);return`${e/n}/${t/n}`}function Zn(e,t){let n=Math.abs(e),s=Math.abs(t);for(;s!==0;){const i=s;s=n%s,n=i}return n}function Jn(e){for(let t=e.length-1;t>0;t--){const n=y(0,t),s=e[t];e[t]=e[n],e[n]=s}}class Qn extends Lt{constructor(){const t=y(1,4),n=ts(t);super(d("exercise.sort_liquid_units.guide"),n)}}function ts(e){const t=e*50,n=e*8,s=e*6,i=e*3;return[`${t} ${g(u.ML)}`,`${n} ${g(u.CL)}`,`${s} ${g(u.DL)}`,`${i} ${g(u.L)}`]}const es=[u.ML,u.CL,u.DL,u.L];class ns extends Lt{constructor(){const t=y(1,9),n=[t,t*10,t*100,t*1e3],s=rs([...es]),i=n.map((r,o)=>ss(r,s[o]));super(d("exercise.sort_liquid_units_decimal.guide"),i)}}function ss(e,t){const n=le[t];if(!Number.isFinite(n))throw new Error("Unsupported unit for decimal sort");const s=e/n;return`${is(s)} ${g(t)}`}function is(e){if(Number.isInteger(e))return e.toString();const t=e.toString();return t.includes("e")?e.toFixed(3).replace(/0+$/,"").replace(/\.$/,""):t.replace(/0+$/,"").replace(/\.$/,"")}function rs(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1)),s=e[t];e[t]=e[n],e[n]=s}return e}class os extends xt{current=0;count=6;tasks=[];sorter;readyButton;init(){if(w.reactor.set("score",0),this.exercise?.task==="sort_liquid_units")this.tasks=Array.from({length:6},()=>new Qn);else if(this.exercise?.task==="sort_liquid_units_decimal")this.tasks=Array.from({length:6},()=>new ns);else if(this.exercise?.task==="sort_liquid_mass_concentration")this.tasks=Array.from({length:6},()=>new qn);else{console.error(`Unknown sort task: ${this.exercise?.task}`);return}console.log("len: "+this.tasks.length),console.log(this.tasks[0].question),this.showNext()}cheat(){this.scene.finished(this.count,this.count)}showNext(){if(console.log(`task ${this.current} / ${this.tasks.length}`),this.current>=this.tasks.length){this.finished();return}const t=this.tasks[this.current];let n=[];for(const s of t.items)n.push({id:s,label:s});this.current++,this.topList.destroy(),this.bottomList.destroy(),this.topList.add(new I(t.question,new c(400,200),"dtext-panel")),this.sorter=new Gn(new c(400,300),n),this.topList.add(this.sorter),this.readyButton=new T("OK",()=>{this.answer(t)}),this.bottomList.add(this.readyButton),this.scene.root.refresh()}answer(t){this.readyButton?.destroy(),this.sorter?.disable();let n="";this.sorter?.isCorrectOrder()?(w.reactor.addition("score",1,0),n=`${d("gameplay.correct")}`):n=d("gameplay.wrongPrefix",{answer:"TODO"}),this.topList.add(new I(n,new c(400,100),"dtext-panel")),this.showNextButton(),this.scene.root.refresh()}finished(){this.scene.finished(w.reactor.getNumberValue("score"),this.count)}}class as extends E{root;info;action;constructor(t,n){super(E.POPUP_ZBASE),this.root=w.popupContainer,this.info=t,this.action=n}init(){const t=new m;this.root.add(t,p.MIDDLE_CENTER);const n=300,s=new c(n,nn);t.add(new I(this.info,new c(n,n),"dtext-panel")),t.add(new T(d("menu.commonYes"),this.action,s)),t.add(new T(d("menu.commonNo"),()=>{w.closePopup()},s))}uninit(){}}class cs extends E{root;game;exercise;ctrl;constructor(t){super(E.SCENE_ZBASE),this.game=t,this.root=t.sceneContainer,this.exercise=void 0,this.ctrl=void 0}init(){if(!this.exercise){x(!1);return}if(this.exercise.format=="mcq")this.ctrl=new $n(this,this.exercise);else if(this.exercise.format=="calculus")this.ctrl=new jn(this,this.exercise);else if(this.exercise.format=="sort")this.ctrl=new os(this,this.exercise);else{console.error("unhandled format: ",this.exercise.format),this.game.loadScene(this.game.mainMenu);return}this.ctrl.init(),this.addScoreBar(this.exercise),this.root.add(new T("<cheat>",()=>{this.ctrl?.cheat()}),p.BOTTOM_RIGHT)}addScoreBar(t){const n=new c(400,100),s=new un(n);this.root.add(s,p.TOP_CENTER),s.add(new An(s,"quiz-plane"),p.TOP_LEFT);const i=6,r=d("gameplay.score",{score:0,total:i}),o=new I(r,new c(400,30),"dtext small");o.react=(a,l)=>{const h=typeof l=="number"?l:0;o.element.textContent=d("gameplay.score",{score:h,total:i})},w.reactor.addListener(o,"score"),s.add(o,new p(c.BOTTOM_CENTER,c.BOTTOM_CENTER,new c(0,-10))),s.add(new I(pe(t),new c(400,30),"dtext small"),new p(c.MIDDLE_CENTER,c.MIDDLE_CENTER,new c(0,-20))),s.add(new T("II",()=>{this.pauseClicked()},new c(50,50)),new p(c.TOP_LEFT,c.TOP_LEFT,new c(-55,0)))}pauseClicked(){const t=new as(d("gameplay.quitMessage"),()=>{w.loadScene(this.game.mainMenu)});w.loadPopup(t)}uninit(){}setExercise(t){this.exercise=t}exit(){this.exercise=void 0,this.ctrl=void 0}finished(t,n){if(!this.ctrl||!this.exercise)return;this.ctrl.topList.destroy(),this.ctrl.bottomList.destroy(),L.setExerciseSuccess(this.exercise.id,t/n);const s=L.stars(this.exercise.id),i=`<p><span style="color: yellow;">${we(s)}</span>`,r=`${d("menu.resultsTitle")} ${d("gameplay.score",{score:t,total:n})} ${i}`;this.ctrl.topList.add(new I(r,new c(400,200),"dtext-panel",!0)),this.ctrl.bottomList.add(new T("OK",()=>{w.loadScene(this.game.mainMenu)})),this.root.refresh()}}class ls extends E{root;game;info="";constructor(t){super(E.POPUP_ZBASE),this.game=t,this.root=t.popupContainer}init(){const t=new m;this.root.add(t,p.MIDDLE_CENTER),this.info==="language"?this.initLanguage(t):console.error(`InfoPopup info not set: ${this.info}`)}initLanguage(t){t.add(new I(d("language.selected",{name:fe(L.language)}),new c(200,50))),t.add(new T("OK",()=>{this.game.closePopup(),this.game.loadScene(this.game.mainMenu)}))}uninit(){}}class hs extends ln{nextScene=void 0;nextPopup=void 0;scene;popup=void 0;sceneContainer;popupContainer;popupBG;mainMenu;quizScene;boot;settingsPopup;infoPopup;constructor(){super(),this.sceneContainer=this.createRoot(E.SCENE_ZBASE),this.popupContainer=this.createRoot(E.POPUP_ZBASE),this.popupBG=ds(E.POPUP_ZBASE-1,()=>us(this)),this.hidePopupBG(),this.mainMenu=new Dn(this),this.quizScene=new cs(this),this.boot=new On(this),this.settingsPopup=new Bn(this),this.infoPopup=new ls(this),this.scene=this.boot}update(t){this.nextScene?(this.scene.uninit(),this.scene=this.nextScene,this.nextScene=void 0,this.cleanupScene(),this.scene.init(),this.sceneContainer.refresh()):this.nextPopup?(this.popup&&(this.popup.uninit(),this.cleanupPopup()),this.popup=this.nextPopup,this.nextPopup=void 0,this.popup.init(),this.showPopupBG(),this.popupContainer.refresh()):(this.scene.update(t),this.popup&&this.popup.update(t))}hidePopupBG(){this.popupBG.style.display="none"}showPopupBG(){this.popupBG.style.display=""}closePopup(){this.popup&&(this.popup.uninit(),this.popup=void 0,this.cleanupPopup(),this.hidePopupBG())}cleanupScene(){this.sceneContainer.removeAll()}cleanupPopup(){this.popupContainer.removeAll()}loadScene(t){x(!this.nextScene&&!this.nextPopup),this.closePopup(),this.hidePopupBG(),this.nextScene=t}loadPopup(t){x(!this.nextScene&&!this.nextPopup),this.nextPopup=t}loadInfoPopup(t){this.infoPopup.info=t,this.loadPopup(this.infoPopup)}resize(t,n){const s=window.innerHeight/1024;document.documentElement.style.setProperty("--one",s+"px"),super.resize(t,n,s)}}function us(e){console.log("pop-up BG pressed"),e.popup&&e.closePopup()}function ds(e,t){const n=document.createElement("div");return Object.assign(n.style,{position:"fixed",inset:"0",background:"rgba(0,0,0,0.5)",zIndex:String(e),pointerEvents:"auto"}),n.addEventListener("pointerdown",s=>{s.preventDefault(),s.stopPropagation(),t?.(s)}),document.body.appendChild(n),n}const ps=()=>{};var Ft={};/**
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
 */const be=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},fs=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const i=e[n++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=e[n++];t[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(l>>10)),t[s++]=String.fromCharCode(56320+(l&1023))}else{const r=e[n++],o=e[n++];t[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return t.join("")},ye={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<e.length;i+=3){const r=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,h=l?e[i+2]:0,b=r>>2,C=(r&3)<<4|a>>4;let v=(a&15)<<2|h>>6,W=h&63;l||(W=64,o||(v=64)),s.push(n[b],n[C],n[v],n[W])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(be(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):fs(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<e.length;){const r=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const h=i<e.length?n[e.charAt(i)]:64;++i;const C=i<e.length?n[e.charAt(i)]:64;if(++i,r==null||a==null||h==null||C==null)throw new ms;const v=r<<2|a>>4;if(s.push(v),h!==64){const W=a<<4&240|h>>2;if(s.push(W),C!==64){const rn=h<<6&192|C;s.push(rn)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class ms extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gs=function(e){const t=be(e);return ye.encodeByteArray(t,!0)},Ee=function(e){return gs(e).replace(/\./g,"")},ws=function(e){try{return ye.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function bs(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ys=()=>bs().__FIREBASE_DEFAULTS__,Es=()=>{if(typeof process>"u"||typeof Ft>"u")return;const e=Ft.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Ts=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&ws(e[1]);return t&&JSON.parse(t)},Is=()=>{try{return ps()||ys()||Es()||Ts()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Te=()=>Is()?.config;/**
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
 */class _s{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}function vs(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Ie(){try{return typeof indexedDB=="object"}catch{return!1}}function _e(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{t(i.error?.message||"")}}catch(n){t(n)}})}function Ss(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Cs="FirebaseError";class H extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=Cs,Object.setPrototypeOf(this,H.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nt.prototype.create)}}class nt{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?xs(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new H(i,a,s)}}function xs(e,t){return e.replace(Ls,(n,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const Ls=/\{\$([^}]+)}/g;function X(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const i of n){if(!s.includes(i))return!1;const r=e[i],o=t[i];if(zt(r)&&zt(o)){if(!X(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function zt(e){return e!==null&&typeof e=="object"}/**
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
 */const As=1e3,Ds=2,Os=14400*1e3,Ms=.5;function Ht(e,t=As,n=Ds){const s=t*Math.pow(n,e),i=Math.round(Ms*s*(Math.random()-.5)*2);return Math.min(Os,s+i)}/**
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
 */function ve(e){return e&&e._delegate?e._delegate:e}class ${constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class Bs{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new _s;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t?.identifier),s=t?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Rs(t))try{this.getOrInitializeService({instanceIdentifier:R})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(t=R){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=R){return this.instances.has(t)}getOptions(t=R){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(t,n){const s=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(s)??new Set;i.add(t),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&t(r,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:$s(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=R){return this.component?this.component.multipleInstances?t:R:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $s(e){return e===R?void 0:e}function Rs(e){return e.instantiationMode==="EAGER"}/**
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
 */class Ps{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Bs(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var f;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(f||(f={}));const Ns={debug:f.DEBUG,verbose:f.VERBOSE,info:f.INFO,warn:f.WARN,error:f.ERROR,silent:f.SILENT},ks=f.INFO,Fs={[f.DEBUG]:"log",[f.VERBOSE]:"log",[f.INFO]:"info",[f.WARN]:"warn",[f.ERROR]:"error"},zs=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),i=Fs[t];if(i)console[i](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Se{constructor(t){this.name=t,this._logLevel=ks,this._logHandler=zs,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in f))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Ns[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,f.DEBUG,...t),this._logHandler(this,f.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,f.VERBOSE,...t),this._logHandler(this,f.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,f.INFO,...t),this._logHandler(this,f.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,f.WARN,...t),this._logHandler(this,f.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,f.ERROR,...t),this._logHandler(this,f.ERROR,...t)}}const Hs=(e,t)=>t.some(n=>e instanceof n);let Ut,jt;function Us(){return Ut||(Ut=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function js(){return jt||(jt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ce=new WeakMap,bt=new WeakMap,xe=new WeakMap,at=new WeakMap,At=new WeakMap;function Gs(e){const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{n(O(e.result)),i()},o=()=>{s(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Ce.set(n,e)}).catch(()=>{}),At.set(t,e),t}function Vs(e){if(bt.has(e))return;const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)});bt.set(e,t)}let yt={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return bt.get(e);if(t==="objectStoreNames")return e.objectStoreNames||xe.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return O(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function qs(e){yt=e(yt)}function Ws(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(ct(this),t,...n);return xe.set(s,t.sort?t.sort():[t]),O(s)}:js().includes(e)?function(...t){return e.apply(ct(this),t),O(Ce.get(this))}:function(...t){return O(e.apply(ct(this),t))}}function Ys(e){return typeof e=="function"?Ws(e):(e instanceof IDBTransaction&&Vs(e),Hs(e,Us())?new Proxy(e,yt):e)}function O(e){if(e instanceof IDBRequest)return Gs(e);if(at.has(e))return at.get(e);const t=Ys(e);return t!==e&&(at.set(e,t),At.set(t,e)),t}const ct=e=>At.get(e);function Le(e,t,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(e,t),a=O(o);return s&&o.addEventListener("upgradeneeded",l=>{s(O(o.result),l.oldVersion,l.newVersion,O(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),a}const Ks=["get","getKey","getAll","getAllKeys","count"],Xs=["put","add","delete","clear"],lt=new Map;function Gt(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(lt.get(t))return lt.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,i=Xs.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Ks.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let h=l.store;return s&&(h=h.index(a.shift())),(await Promise.all([h[n](...a),i&&l.done]))[0]};return lt.set(t,r),r}qs(e=>({...e,get:(t,n,s)=>Gt(t,n)||e.get(t,n,s),has:(t,n)=>!!Gt(t,n)||e.has(t,n)}));/**
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
 */class Zs{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Js(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Js(e){return e.getComponent()?.type==="VERSION"}const Et="@firebase/app",Vt="0.14.3";/**
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
 */const D=new Se("@firebase/app"),Qs="@firebase/app-compat",ti="@firebase/analytics-compat",ei="@firebase/analytics",ni="@firebase/app-check-compat",si="@firebase/app-check",ii="@firebase/auth",ri="@firebase/auth-compat",oi="@firebase/database",ai="@firebase/data-connect",ci="@firebase/database-compat",li="@firebase/functions",hi="@firebase/functions-compat",ui="@firebase/installations",di="@firebase/installations-compat",pi="@firebase/messaging",fi="@firebase/messaging-compat",mi="@firebase/performance",gi="@firebase/performance-compat",wi="@firebase/remote-config",bi="@firebase/remote-config-compat",yi="@firebase/storage",Ei="@firebase/storage-compat",Ti="@firebase/firestore",Ii="@firebase/ai",_i="@firebase/firestore-compat",vi="firebase";/**
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
 */const Tt="[DEFAULT]",Si={[Et]:"fire-core",[Qs]:"fire-core-compat",[ei]:"fire-analytics",[ti]:"fire-analytics-compat",[si]:"fire-app-check",[ni]:"fire-app-check-compat",[ii]:"fire-auth",[ri]:"fire-auth-compat",[oi]:"fire-rtdb",[ai]:"fire-data-connect",[ci]:"fire-rtdb-compat",[li]:"fire-fn",[hi]:"fire-fn-compat",[ui]:"fire-iid",[di]:"fire-iid-compat",[pi]:"fire-fcm",[fi]:"fire-fcm-compat",[mi]:"fire-perf",[gi]:"fire-perf-compat",[wi]:"fire-rc",[bi]:"fire-rc-compat",[yi]:"fire-gcs",[Ei]:"fire-gcs-compat",[Ti]:"fire-fst",[_i]:"fire-fst-compat",[Ii]:"fire-vertex","fire-js":"fire-js",[vi]:"fire-js-all"};/**
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
 */const Z=new Map,Ci=new Map,It=new Map;function qt(e,t){try{e.container.addComponent(t)}catch(n){D.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function k(e){const t=e.name;if(It.has(t))return D.debug(`There were multiple attempts to register component ${t}.`),!1;It.set(t,e);for(const n of Z.values())qt(n,e);for(const n of Ci.values())qt(n,e);return!0}function st(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const xi={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},M=new nt("app","Firebase",xi);/**
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
 */class Li{constructor(t,n,s){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new $("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw M.create("app-deleted",{appName:this._name})}}function Ae(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s={name:Tt,automaticDataCollectionEnabled:!0,...t},i=s.name;if(typeof i!="string"||!i)throw M.create("bad-app-name",{appName:String(i)});if(n||(n=Te()),!n)throw M.create("no-options");const r=Z.get(i);if(r){if(X(n,r.options)&&X(s,r.config))return r;throw M.create("duplicate-app",{appName:i})}const o=new Ps(i);for(const l of It.values())o.addComponent(l);const a=new Li(n,s,o);return Z.set(i,a),a}function Ai(e=Tt){const t=Z.get(e);if(!t&&e===Tt&&Te())return Ae();if(!t)throw M.create("no-app",{appName:e});return t}function B(e,t,n){let s=Si[e]??e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),r=t.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${t}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),D.warn(o.join(" "));return}k(new $(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const Di="firebase-heartbeat-database",Oi=1,V="firebase-heartbeat-store";let ht=null;function De(){return ht||(ht=Le(Di,Oi,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(V)}catch(n){console.warn(n)}}}}).catch(e=>{throw M.create("idb-open",{originalErrorMessage:e.message})})),ht}async function Mi(e){try{const n=(await De()).transaction(V),s=await n.objectStore(V).get(Oe(e));return await n.done,s}catch(t){if(t instanceof H)D.warn(t.message);else{const n=M.create("idb-get",{originalErrorMessage:t?.message});D.warn(n.message)}}}async function Wt(e,t){try{const s=(await De()).transaction(V,"readwrite");await s.objectStore(V).put(t,Oe(e)),await s.done}catch(n){if(n instanceof H)D.warn(n.message);else{const s=M.create("idb-set",{originalErrorMessage:n?.message});D.warn(s.message)}}}function Oe(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Bi=1024,$i=30;class Ri{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ni(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Yt();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>$i){const i=ki(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){D.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Yt(),{heartbeatsToSend:n,unsentEntries:s}=Pi(this._heartbeatsCache.heartbeats),i=Ee(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return D.warn(t),""}}}function Yt(){return new Date().toISOString().substring(0,10)}function Pi(e,t=Bi){const n=[];let s=e.slice();for(const i of e){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Kt(n)>t){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Kt(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Ni{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ie()?_e().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Mi(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return Wt(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return Wt(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Kt(e){return Ee(JSON.stringify({version:2,heartbeats:e})).length}function ki(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let s=1;s<e.length;s++)e[s].date<n&&(n=e[s].date,t=s);return t}/**
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
 */function Fi(e){k(new $("platform-logger",t=>new Zs(t),"PRIVATE")),k(new $("heartbeat",t=>new Ri(t),"PRIVATE")),B(Et,Vt,e),B(Et,Vt,"esm2020"),B("fire-js","")}Fi("");var zi="firebase",Hi="12.3.0";/**
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
 */B(zi,Hi,"app");const Me="@firebase/installations",Dt="0.6.19";/**
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
 */const Be=1e4,$e=`w:${Dt}`,Re="FIS_v2",Ui="https://firebaseinstallations.googleapis.com/v1",ji=3600*1e3,Gi="installations",Vi="Installations";/**
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
 */const qi={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},F=new nt(Gi,Vi,qi);function Pe(e){return e instanceof H&&e.code.includes("request-failed")}/**
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
 */function Ne({projectId:e}){return`${Ui}/projects/${e}/installations`}function ke(e){return{token:e.token,requestStatus:2,expiresIn:Yi(e.expiresIn),creationTime:Date.now()}}async function Fe(e,t){const s=(await t.json()).error;return F.create("request-failed",{requestName:e,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function ze({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Wi(e,{refreshToken:t}){const n=ze(e);return n.append("Authorization",Ki(t)),n}async function He(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Yi(e){return Number(e.replace("s","000"))}function Ki(e){return`${Re} ${e}`}/**
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
 */async function Xi({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const s=Ne(e),i=ze(e),r=t.getImmediate({optional:!0});if(r){const h=await r.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const o={fid:n,authVersion:Re,appId:e.appId,sdkVersion:$e},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await He(()=>fetch(s,a));if(l.ok){const h=await l.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:ke(h.authToken)}}else throw await Fe("Create Installation",l)}/**
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
 */function Ue(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function Zi(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Ji=/^[cdef][\w-]{21}$/,_t="";function Qi(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=tr(e);return Ji.test(n)?n:_t}catch{return _t}}function tr(e){return Zi(e).substr(0,22)}/**
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
 */function it(e){return`${e.appName}!${e.appId}`}/**
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
 */const je=new Map;function Ge(e,t){const n=it(e);Ve(n,t),er(n,t)}function Ve(e,t){const n=je.get(e);if(n)for(const s of n)s(t)}function er(e,t){const n=nr();n&&n.postMessage({key:e,fid:t}),sr()}let N=null;function nr(){return!N&&"BroadcastChannel"in self&&(N=new BroadcastChannel("[Firebase] FID Change"),N.onmessage=e=>{Ve(e.data.key,e.data.fid)}),N}function sr(){je.size===0&&N&&(N.close(),N=null)}/**
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
 */const ir="firebase-installations-database",rr=1,z="firebase-installations-store";let ut=null;function Ot(){return ut||(ut=Le(ir,rr,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(z)}}})),ut}async function J(e,t){const n=it(e),i=(await Ot()).transaction(z,"readwrite"),r=i.objectStore(z),o=await r.get(n);return await r.put(t,n),await i.done,(!o||o.fid!==t.fid)&&Ge(e,t.fid),t}async function qe(e){const t=it(e),s=(await Ot()).transaction(z,"readwrite");await s.objectStore(z).delete(t),await s.done}async function rt(e,t){const n=it(e),i=(await Ot()).transaction(z,"readwrite"),r=i.objectStore(z),o=await r.get(n),a=t(o);return a===void 0?await r.delete(n):await r.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&Ge(e,a.fid),a}/**
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
 */async function Mt(e){let t;const n=await rt(e.appConfig,s=>{const i=or(s),r=ar(e,i);return t=r.registrationPromise,r.installationEntry});return n.fid===_t?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function or(e){const t=e||{fid:Qi(),registrationStatus:0};return We(t)}function ar(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(F.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=cr(e,n);return{installationEntry:n,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:lr(e)}:{installationEntry:t}}async function cr(e,t){try{const n=await Xi(e,t);return J(e.appConfig,n)}catch(n){throw Pe(n)&&n.customData.serverCode===409?await qe(e.appConfig):await J(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function lr(e){let t=await Xt(e.appConfig);for(;t.registrationStatus===1;)await Ue(100),t=await Xt(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Mt(e);return s||n}return t}function Xt(e){return rt(e,t=>{if(!t)throw F.create("installation-not-found");return We(t)})}function We(e){return hr(e)?{fid:e.fid,registrationStatus:0}:e}function hr(e){return e.registrationStatus===1&&e.registrationTime+Be<Date.now()}/**
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
 */async function ur({appConfig:e,heartbeatServiceProvider:t},n){const s=dr(e,n),i=Wi(e,n),r=t.getImmediate({optional:!0});if(r){const h=await r.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const o={installation:{sdkVersion:$e,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await He(()=>fetch(s,a));if(l.ok){const h=await l.json();return ke(h)}else throw await Fe("Generate Auth Token",l)}function dr(e,{fid:t}){return`${Ne(e)}/${t}/authTokens:generate`}/**
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
 */async function Bt(e,t=!1){let n;const s=await rt(e.appConfig,r=>{if(!Ye(r))throw F.create("not-registered");const o=r.authToken;if(!t&&mr(o))return r;if(o.requestStatus===1)return n=pr(e,t),r;{if(!navigator.onLine)throw F.create("app-offline");const a=wr(r);return n=fr(e,a),a}});return n?await n:s.authToken}async function pr(e,t){let n=await Zt(e.appConfig);for(;n.authToken.requestStatus===1;)await Ue(100),n=await Zt(e.appConfig);const s=n.authToken;return s.requestStatus===0?Bt(e,t):s}function Zt(e){return rt(e,t=>{if(!Ye(t))throw F.create("not-registered");const n=t.authToken;return br(n)?{...t,authToken:{requestStatus:0}}:t})}async function fr(e,t){try{const n=await ur(e,t),s={...t,authToken:n};return await J(e.appConfig,s),n}catch(n){if(Pe(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await qe(e.appConfig);else{const s={...t,authToken:{requestStatus:0}};await J(e.appConfig,s)}throw n}}function Ye(e){return e!==void 0&&e.registrationStatus===2}function mr(e){return e.requestStatus===2&&!gr(e)}function gr(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+ji}function wr(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}function br(e){return e.requestStatus===1&&e.requestTime+Be<Date.now()}/**
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
 */async function yr(e){const t=e,{installationEntry:n,registrationPromise:s}=await Mt(t);return s?s.catch(console.error):Bt(t).catch(console.error),n.fid}/**
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
 */async function Er(e,t=!1){const n=e;return await Tr(n),(await Bt(n,t)).token}async function Tr(e){const{registrationPromise:t}=await Mt(e);t&&await t}/**
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
 */function Ir(e){if(!e||!e.options)throw dt("App Configuration");if(!e.name)throw dt("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw dt(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function dt(e){return F.create("missing-app-config-values",{valueName:e})}/**
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
 */const Ke="installations",_r="installations-internal",vr=e=>{const t=e.getProvider("app").getImmediate(),n=Ir(t),s=st(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Sr=e=>{const t=e.getProvider("app").getImmediate(),n=st(t,Ke).getImmediate();return{getId:()=>yr(n),getToken:i=>Er(n,i)}};function Cr(){k(new $(Ke,vr,"PUBLIC")),k(new $(_r,Sr,"PRIVATE"))}Cr();B(Me,Dt);B(Me,Dt,"esm2020");/**
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
 */const Q="analytics",xr="firebase_id",Lr="origin",Ar=60*1e3,Dr="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",$t="https://www.googletagmanager.com/gtag/js";/**
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
 */const _=new Se("@firebase/analytics");/**
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
 */const Or={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},S=new nt("analytics","Analytics",Or);/**
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
 */function Mr(e){if(!e.startsWith($t)){const t=S.create("invalid-gtag-resource",{gtagURL:e});return _.warn(t.message),""}return e}function Xe(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Br(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function $r(e,t){const n=Br("firebase-js-sdk-policy",{createScriptURL:Mr}),s=document.createElement("script"),i=`${$t}?l=${e}&id=${t}`;s.src=n?n?.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function Rr(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Pr(e,t,n,s,i,r){const o=s[i];try{if(o)await t[o];else{const l=(await Xe(n)).find(h=>h.measurementId===i);l&&await t[l.appId]}}catch(a){_.error(a)}e("config",i,r)}async function Nr(e,t,n,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await Xe(n);for(const l of o){const h=a.find(C=>C.measurementId===l),b=h&&t[h.appId];if(b)r.push(b);else{r=[];break}}}r.length===0&&(r=Object.values(t)),await Promise.all(r),e("event",s,i||{})}catch(r){_.error(r)}}function kr(e,t,n,s){async function i(r,...o){try{if(r==="event"){const[a,l]=o;await Nr(e,t,n,a,l)}else if(r==="config"){const[a,l]=o;await Pr(e,t,n,s,a,l)}else if(r==="consent"){const[a,l]=o;e("consent",a,l)}else if(r==="get"){const[a,l,h]=o;e("get",a,l,h)}else if(r==="set"){const[a]=o;e("set",a)}else e(r,...o)}catch(a){_.error(a)}}return i}function Fr(e,t,n,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=kr(r,e,t,n),{gtagCore:r,wrappedGtag:window[i]}}function zr(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes($t)&&n.src.includes(e))return n;return null}/**
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
 */const Hr=30,Ur=1e3;class jr{constructor(t={},n=Ur){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Ze=new jr;function Gr(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Vr(e){const{appId:t,apiKey:n}=e,s={method:"GET",headers:Gr(n)},i=Dr.replace("{app-id}",t),r=await fetch(i,s);if(r.status!==200&&r.status!==304){let o="";try{const a=await r.json();a.error?.message&&(o=a.error.message)}catch{}throw S.create("config-fetch-failed",{httpStatus:r.status,responseMessage:o})}return r.json()}async function qr(e,t=Ze,n){const{appId:s,apiKey:i,measurementId:r}=e.options;if(!s)throw S.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw S.create("no-api-key")}const o=t.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Kr;return setTimeout(async()=>{a.abort()},Ar),Je({appId:s,apiKey:i,measurementId:r},o,a,t)}async function Je(e,{throttleEndTimeMillis:t,backoffCount:n},s,i=Ze){const{appId:r,measurementId:o}=e;try{await Wr(s,t)}catch(a){if(o)return _.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a?.message}]`),{appId:r,measurementId:o};throw a}try{const a=await Vr(e);return i.deleteThrottleMetadata(r),a}catch(a){const l=a;if(!Yr(l)){if(i.deleteThrottleMetadata(r),o)return _.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:r,measurementId:o};throw a}const h=Number(l?.customData?.httpStatus)===503?Ht(n,i.intervalMillis,Hr):Ht(n,i.intervalMillis),b={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(r,b),_.debug(`Calling attemptFetch again in ${h} millis`),Je(e,b,s,i)}}function Wr(e,t){return new Promise((n,s)=>{const i=Math.max(t-Date.now(),0),r=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(r),s(S.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Yr(e){if(!(e instanceof H)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Kr{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Xr(e,t,n,s,i){if(i&&i.global){e("event",n,s);return}else{const r=await t,o={...s,send_to:r};e("event",n,o)}}/**
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
 */async function Zr(){if(Ie())try{await _e()}catch(e){return _.warn(S.create("indexeddb-unavailable",{errorInfo:e?.toString()}).message),!1}else return _.warn(S.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Jr(e,t,n,s,i,r,o){const a=qr(e);a.then(v=>{n[v.measurementId]=v.appId,e.options.measurementId&&v.measurementId!==e.options.measurementId&&_.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${v.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(v=>_.error(v)),t.push(a);const l=Zr().then(v=>{if(v)return s.getId()}),[h,b]=await Promise.all([a,l]);zr(r)||$r(r,h.measurementId),i("js",new Date);const C=o?.config??{};return C[Lr]="firebase",C.update=!0,b!=null&&(C[xr]=b),i("config",h.measurementId,C),h.measurementId}/**
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
 */class Qr{constructor(t){this.app=t}_delete(){return delete G[this.app.options.appId],Promise.resolve()}}let G={},Jt=[];const Qt={};let pt="dataLayer",to="gtag",te,Qe,ee=!1;function eo(){const e=[];if(vs()&&e.push("This is a browser extension environment."),Ss()||e.push("Cookies are not available."),e.length>0){const t=e.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=S.create("invalid-analytics-context",{errorInfo:t});_.warn(n.message)}}function no(e,t,n){eo();const s=e.options.appId;if(!s)throw S.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)_.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw S.create("no-api-key");if(G[s]!=null)throw S.create("already-exists",{id:s});if(!ee){Rr(pt);const{wrappedGtag:r,gtagCore:o}=Fr(G,Jt,Qt,pt,to);Qe=r,te=o,ee=!0}return G[s]=Jr(e,Jt,Qt,t,te,pt,n),new Qr(e)}function tn(e=Ai()){e=ve(e);const t=st(e,Q);return t.isInitialized()?t.getImmediate():so(e)}function so(e,t={}){const n=st(e,Q);if(n.isInitialized()){const i=n.getImmediate();if(X(t,n.getOptions()))return i;throw S.create("already-initialized")}return n.initialize({options:t})}function en(e,t,n,s){e=ve(e),Xr(Qe,G[e.app.options.appId],t,n,s).catch(i=>_.error(i))}const ne="@firebase/analytics",se="0.10.18";function io(){k(new $(Q,(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return no(s,i,n)},"PUBLIC")),k(new $("analytics-internal",e,"PRIVATE")),B(ne,se),B(ne,se,"esm2020");function e(t){try{const n=t.getProvider(Q).getImmediate();return{logEvent:(s,i,r)=>en(n,s,i,r)}}catch(n){throw S.create("interop-component-reg-failed",{reason:n})}}}io();class P{static STORAGE_KEY="playerSettings";language="en";stats={};constructor(t){t?.language&&(this.language=t.language.toLowerCase()),t?.stats&&typeof t.stats=="object"&&(this.stats={...t.stats})}static loadFromStorage(){try{const t=localStorage.getItem(P.STORAGE_KEY);if(!t)return new P;const n=JSON.parse(t);return new P(n)}catch{return new P}}toJSON(){return{language:this.language,stats:this.stats}}save(){try{localStorage.setItem(P.STORAGE_KEY,JSON.stringify(this.toJSON()))}catch{}}setLanguage(t){this.language=(t||"en").toLowerCase(),this.save()}setExerciseSuccess(t,n){const s=Math.max(0,Math.min(1,Number(n))),i=`x:${t}`,r=this.stats[i];(r===void 0||s>r)&&(this.stats[i]=s,this.save())}stars(t){const n=this.stats?.[`x:${t}`];return n===void 0?0:n===1?3:n>.5?2:n>0?1:0}}const ro={apiKey:"AIzaSyCeRJx0UKqnYmhr6u_ZWyCrbU45Xb0ReIs",authDomain:"dolfin-math.firebaseapp.com",projectId:"dolfin-math",storageBucket:"dolfin-math.firebasestorage.app",messagingSenderId:"499035696239",appId:"1:499035696239:web:3a5ee2c439acd40797319a",measurementId:"G-W9DWNKS6P6"},oo=Ae(ro),ao=tn(oo);console.log(ao);ho("start");const co=400,nn=100,lo=new c(co,nn),tt=document.querySelector("#app");if(!tt)throw new Error("Unable to find the root #app element.");function ho(e){en(tn(),e)}tt.classList.add("app-root");const L=P.loadFromStorage();L.save();const w=new hs;w.scene.init();function q(e){const t=`./assets/${e}`;return console.log(`path: ${t}`),t}const sn=()=>{w.resize(tt.clientWidth||window.innerWidth,tt.clientHeight||window.innerHeight)};window.addEventListener("resize",sn);sn();w.start();function uo(){document.addEventListener("touchmove",t=>{t.scale!==void 0&&t.scale!==1&&t.preventDefault()},{passive:!1});let e=0;document.addEventListener("touchend",t=>{const n=Date.now();n-e<=300&&t.preventDefault(),e=n},{passive:!1}),window.addEventListener("wheel",t=>{t.ctrlKey&&t.preventDefault()},{passive:!1})}function po(){uo()}document.addEventListener("DOMContentLoaded",po);
