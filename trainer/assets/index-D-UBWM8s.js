(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();class c{constructor(e,n){this.x=e,this.y=n}static{this.TOP_LEFT=new c(0,0)}static{this.TOP_CENTER=new c(.5,0)}static{this.TOP_RIGHT=new c(1,0)}static{this.MIDDLE_LEFT=new c(0,.5)}static{this.MIDDLE_CENTER=new c(.5,.5)}static{this.MIDDLE_RIGHT=new c(1,.5)}static{this.BOTTOM_LEFT=new c(0,1)}static{this.BOTTOM_CENTER=new c(.5,1)}static{this.BOTTOM_RIGHT=new c(1,1)}static{this.CENTER=new c(.5,.5)}static{this.ZERO=new c(0,0)}static{this.ONE=new c(1,1)}}class p{constructor(e,n,s=c.ZERO){this.position=e,this.pivot=n,this.gOffset=s}static{this.TOP_LEFT=new p(c.TOP_LEFT,c.TOP_LEFT)}static{this.TOP_CENTER=new p(c.TOP_CENTER,c.TOP_CENTER)}static{this.TOP_RIGHT=new p(c.TOP_RIGHT,c.TOP_RIGHT)}static{this.MIDDLE_LEFT=new p(c.MIDDLE_LEFT,c.MIDDLE_LEFT)}static{this.MIDDLE_CENTER=new p(c.MIDDLE_CENTER,c.MIDDLE_CENTER)}static{this.MIDDLE_RIGHT=new p(c.MIDDLE_RIGHT,c.MIDDLE_RIGHT)}static{this.BOTTOM_LEFT=new p(c.BOTTOM_LEFT,c.BOTTOM_LEFT)}static{this.BOTTOM_CENTER=new p(c.BOTTOM_CENTER,c.BOTTOM_CENTER)}static{this.BOTTOM_RIGHT=new p(c.BOTTOM_RIGHT,c.BOTTOM_RIGHT)}}function x(t){t||console.error("Assertion failed!")}class st{constructor(e,n,s,i,r){this.x=e,this.y=n,this.width=s,this.height=i,this.scale=r}unit(e){return e*this.scale}}let sn=0;class it{refresh(){}constructor(){this.ID=++sn}}class _e extends it{constructor(){super(),this.destroyed=!1,this.pxSizeX=1,this.pxSizeY=1,this.z=-1}setZ(e){x(this.z==-1),this.z=e}setParent(e){x(this.parent==null),this.parent=e}updateSizeRef(e,n,s){this.pxSizeX=e.unit(n),this.pxSizeY=e.unit(s)}calculateTopLeft(e,n){x(this.z!=-1);const s=e.x+n.position.x*e.width,i=e.y+n.position.y*e.height;let r=s+e.unit(n.gOffset.x),o=i+e.unit(n.gOffset.y);return r-=n.pivot.x*this.pxSizeX,o-=n.pivot.y*this.pxSizeY,new c(r,o)}update(e){}destroy(){this.destroyed=!0}isDestroyed(){return this.destroyed}react(e,n){}}class H extends _e{constructor(e,n=""){super(),this.visible=!0,this.refX=e.x,this.refY=e.y;const s=document.createElement("div");n!=""&&(s.className=n),s.style.position="absolute",s.style.display="none",document.body.append(s),this.element=s}setSize(e){this.refX=e.x,this.refY=e.y}setVisibility(e){this.element.style.display=e?"":"none"}updateSize(e){this.updateSizeRef(e,this.refX,this.refY);const n=this.element.style;n.width=this.pxSizeX+"px",n.height=this.pxSizeY+"px"}updatePosition(e,n){const s=this.calculateTopLeft(e,n);this.setTopLeft(s.x,s.y)}setTopLeft(e,n){const s=this.element.style;s.left=e+"px",s.top=n+"px",s.zIndex=this.z.toString()}destroy(){super.destroy(),this.element.remove()}refresh(){super.refresh(),this.setVisibility(this.visible)}}class T{static{this.SCENE_ZBASE=1e6}static{this.POPUP_ZBASE=2e6}update(e){}constructor(e){this.zBase=e}}class rn{constructor(e,n){this.obj=e,this.key=n}}class on{constructor(){this.values={},this.listeners=[]}set(e,n){if(!Object.is(this.values[e],n)){this.values[e]=n,this.listeners=this.listeners.filter(s=>!s.obj.isDestroyed());for(const s of this.listeners)s.key===e&&s.obj.react(e,n)}}addition(e,n,s=0){this.values.hasOwnProperty(e)||(this.values[e]=s);const i=this.values[e];if(typeof i!="number"||!Number.isFinite(i)){console.error(`Value for "${e}" is not a finite number (got ${String(i)})`);return}const r=i+n;this.set(e,r)}addListener(e,n){this.listeners.push(new rn(e,n))}getNumberValue(e){const n=this.values[e];return typeof n=="number"&&Number.isFinite(n)?n:(console.error(`DReactor.getNumberValue: ${e}`),0)}getBooleanValue(e){const n=this.values[e];return typeof n=="boolean"?n:(console.error(`DReactor.getBooleanValue: ${e}`),!1)}}class an{constructor(){this.roots=[],this.lastUpdate=0,this.STEP=1e3/20,this.loop=e=>{if(e-this.lastUpdate>=this.STEP){const n=e-this.lastUpdate;this.lastUpdate=e;try{this.update(n)}catch(s){console.error("DCore loop: error in update.",s)}for(const s of this.roots)s.update(n)}requestAnimationFrame(this.loop)},this.reactor=new on}resize(e,n,s){for(const i of this.roots)i.updateLayout(new st(0,0,e,n,s))}createRoot(e){let n=new hn(e);return this.roots.push(n),n}update(e){}start(){this.lastUpdate=performance.now(),requestAnimationFrame(this.loop)}}class cn{constructor(e,n){this.pos=e,this.obj=n}}class rt{constructor(e,n){this.children=[],this.zBase=e,this.parent=n}add(e,n){e.setParent(this.parent),this.children.push(new cn(n,e)),e.setZ(this.zBase+this.children.length)}removeAll(){for(const e of this.children)e.obj.destroy();this.children=[]}}class ln extends _e{constructor(e){super(),this.scale=1,this.refX=e.x,this.refY=e.y,this.collection=new rt(-1,this)}setZ(e){super.setZ(e),this.collection.zBase=e}setTopLeft(e,n){const s=new st(e,n,this.pxSizeX,this.pxSizeY,this.scale);for(const i of this.collection.children)i.obj.updateSize(s),i.obj.updatePosition(s,i.pos)}add(e,n){x(this.z!=-1),this.collection.add(e,n)}updateSize(e){this.scale=e.scale,this.updateSizeRef(e,this.refX,this.refY)}updatePosition(e,n){this.scale=e.scale;const s=this.calculateTopLeft(e,n);this.setTopLeft(s.x,s.y)}update(e){for(const n of this.collection.children)n.obj.update(e)}destroy(){this.collection.removeAll()}refresh(){super.refresh();for(const e of this.collection.children)e.obj.refresh()}}class hn extends it{constructor(e){super(),this.refreshLayoutOnNextUpdate=!1,this.collection=new rt(e,this)}getZ(){return this.collection.zBase}updateLayout(e){this.box=e,this.refreshLayoutOnNextUpdate=!0}add(e,n){this.collection.add(e,n)}update(e){if(this.refreshLayoutOnNextUpdate&&this.box){for(const n of this.collection.children)n.obj.refresh(),n.obj.updateSize(this.box),n.obj.updatePosition(this.box,n.pos);this.refreshLayoutOnNextUpdate=!1}for(const n of this.collection.children)n.obj.update(e)}refresh(){this.refreshLayoutOnNextUpdate=!0}removeAll(){this.collection.removeAll()}}class w extends _e{constructor(e=w.VERTICAL,n=w.ALIGN_CENTER){super(),this.children=[],this.orientation=e,this.alignment=n}static{this.HORIZONTAL=1001}static{this.VERTICAL=1002}static{this.ALIGN_FRONT=2001}static{this.ALIGN_BACK=2002}static{this.ALIGN_CENTER=2003}add(e){x(this.z!=-1),e.setParent(this),this.children.push(e),e.setZ(this.z+this.children.length)}updateSize(e){let n=0,s=0;for(const i of this.children)i.updateSize(e),this.orientation==w.VERTICAL?(s+=i.pxSizeY,n=Math.max(n,i.pxSizeX)):this.orientation==w.HORIZONTAL?(n+=i.pxSizeX,s=Math.max(s,i.pxSizeY)):x(!1);this.pxSizeX=n,this.pxSizeY=s}updatePosition(e,n){const s=this.calculateTopLeft(e,n);this.setTopLeft(s.x,s.y)}setTopLeft(e,n){let s=e,i=n;for(const r of this.children)this.orientation==w.VERTICAL?(this.alignment==w.ALIGN_FRONT?r.setTopLeft(s,i):this.alignment==w.ALIGN_BACK?r.setTopLeft(s+this.pxSizeX-r.pxSizeX,i):this.alignment==w.ALIGN_CENTER?r.setTopLeft(s+(this.pxSizeX-r.pxSizeX)/2,i):x(!1),i+=r.pxSizeY):this.orientation==w.HORIZONTAL?(r.setTopLeft(s,i),s+=r.pxSizeX):x(!1)}update(e){this.children=this.children.filter(n=>!n.isDestroyed());for(const n of this.children)n.update(e)}refresh(){for(const e of this.children)e.refresh()}destroy(){for(const e of this.children)e.destroy();this.children=[]}}const ot=["en","fi","sv","th"];function at(t){return t==="sv"&&(t="se"),({en:"GB"}[t]||t).toUpperCase().replace(/./g,s=>String.fromCodePoint(127397+s.charCodeAt(0)))}const un=ot.map(at).join("");function pe(t){for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}var u=(t=>(t[t.ML=0]="ML",t[t.CL=1]="CL",t[t.DL=2]="DL",t[t.L=3]="L",t))(u||{}),K=(t=>(t[t.MG=0]="MG",t))(K||{});const ct={0:1,1:10,2:100,3:1e3};function lt(t){const e=ct[t];if(!Number.isFinite(e))throw new Error("Cannot convert using non-volume unit");return e}function L(t,e){return t*lt(e)}function te(t,e){return t/lt(e)}function E(t,e){const n=Math.ceil(t),s=Math.floor(e);return Math.max(n,Math.floor(Math.random()*(s-n+1))+n)}function ht(t){const e=E(0,t.length-1);return t[e]}function $e(t){return`[[${t}]]`}const Se=new Map;let fe=[];async function ut(t){const e=(t||"en").toLowerCase();for(const r of fe)Se.delete(r);fe=[];const n=q(`i18n/${e}.json`),s=await fetch(n);if(!s.ok)throw new Error(`i18n load failed: ${s.status} ${s.statusText}`);console.log(`language loaded: ${t}`);const i=await s.json();ft(i)}function d(t,e,n){const s=Se.get(t)??n??t;return e?s.replace(/\{(\w+)\}/g,(i,r)=>String(e[r]??`{${r}}`)):s}function dt(t){return d(`exercise.${t.id}.title`)}function g(t){switch(t){case u.ML:return d("units.ml");case u.CL:return d("units.cl");case u.DL:return d("units.dl");case u.L:return d("units.l");default:return"?"}}function Re(t){switch(t){case K.MG:return d("units.mg",void 0,"mg");default:return"?"}}function pt(t){const e=t.toLowerCase();return e==="sv"?d("language.swedish",void 0,"Swedish"):e==="fi"?d("language.finnish",void 0,"Finnish"):e==="th"?d("language.thai",void 0,"Thai"):e==="en"?d("language.english",void 0,"English"):(console.error(`languageName: ${t}`),t)}function ft(t,e){for(const[n,s]of Object.entries(t)){const i=e?`${e}.${n}`:n;typeof s=="string"?(Se.set(i,s),fe.push(i)):dn(s)&&ft(s,i)}}function dn(t){return!!t&&typeof t=="object"&&!Array.isArray(t)}const ge=new Map,Y=new Map;function pn(t){const e=t.split("?")[0].toLowerCase();return/\.(png|jpe?g|gif|webp|bmp|svg)$/.test(e)?"image":e.endsWith(".json")||e.endsWith(".txt")?"text":"blob"}function Pe(t){if(!t.ok)throw new Error(`Failed to load (${t.status} ${t.statusText})`);return t}function fn(t){return new Promise((e,n)=>{const s=new Image;s.decoding="async",s.onload=()=>e(s),s.onerror=()=>n(new Error(`Failed to load image: ${t}`)),s.src=q(t)})}async function gn(t,e=pn(t)){if(ge.has(t))return;if(Y.has(t))return Y.get(t).then(()=>{});let n;e==="image"?n=fn(t):e==="text"?n=fetch(q(t),{credentials:"same-origin"}).then(Pe).then(s=>s.text()):n=fetch(t,{credentials:"same-origin"}).then(Pe).then(s=>s.blob()),Y.set(t,n);try{const s=await n;ge.set(t,s)}finally{Y.delete(t)}}function mn(t){const e=ge.get(t);return typeof e!="string"?(console.error(`Text not found in cache: ${t}`),""):e}let me;async function wn(t){const e=await fetch(t);if(!e.ok)throw new Error(`Failed to load catalog [${t}]: ${e.status} ${e.statusText}`);me=await e.json()}function bn(t){if(!me)throw new Error;for(const e of me.areas){const n=e.topics.find(s=>s.id===t);if(n)return n}throw new Error(`Topic not found: ${t}`)}function yn(t){return bn(t).subtopics}function En(t){return`questions/${A.language}/${t}.json`}async function In(t){const e=En(t);await gn(e);const n=mn(e);if(!n)throw new Error(`Question data for "${t}" not loaded. Call loadById first.`);let s;try{s=JSON.parse(n)}catch(i){throw new Error(`Failed to parse question data for "${t}": ${i.message}`)}if(!Array.isArray(s))throw new Error(`Question data for "${t}" is not an array`);return s}const ve=new c(400,50);class I extends H{constructor(e,n,s="dtext",i=!1){super(n,s),i?this.element.innerHTML=e||"???":this.element.textContent=e||"???"}react(e,n){this.element.textContent=n}}class y extends H{constructor(e,n,s=ve,i="dbutton"){super(s,"dbutton-div"),this.vanishTime=2e3,this.vanishing=!1,this.action=n,this.htmlButton=document.createElement("div"),this.htmlButton.className=i,this.htmlButton.style.position="relative",this.htmlButton.textContent=e,this.element.appendChild(this.htmlButton),this.clickHandler=()=>{this.action()},this.htmlButton.addEventListener("click",this.clickHandler)}vanish(){this.vanishing=!0,this.element.removeEventListener("click",this.clickHandler)}disable(){this.htmlButton.style.pointerEvents="none"}update(e){this.vanishing&&(this.refY*=.9,this.vanishTime-=e,this.vanishTime<=0&&this.destroy(),this.parent?.refresh(),console.log("vanishing "+e+" pxy"+this.pxSizeY))}setAction(e){this.action=e}}class Ne extends y{constructor(e,n,s){super(e,s,ve,"dbutton split-button"),this.htmlRight=document.createElement("div"),this.htmlRight.className="split-button-right",this.htmlRight.textContent=n,this.element.appendChild(this.htmlRight)}}class Tn extends H{constructor(e,n){super(n);const s=document.createElement("img");s.src=q(e),s.style.width="100%",s.style.height="100%",s.style.objectFit="cover",this.element.appendChild(s)}}const gt="★",_n="☆";function mt(t){let e="";for(let n=0;n<3;n++)e+=n<t?gt:_n;return e}class Sn extends y{htmlStars;constructor(e,n,s,i){super(e,i,new c(400,100),"dbutton sub-topic-button"),this.htmlStars=document.createElement("div"),this.htmlStars.className="sub-topic-stars",this.htmlStars.textContent=`${gt} ${n} / ${s}`,this.element.appendChild(this.htmlStars)}}class vn extends y{htmlRight;constructor(e,n,s){super(e,s,new c(400,100),"dbutton exercise-button"),this.htmlRight=document.createElement("div"),this.htmlRight.className="sub-topic-stars",this.htmlRight.textContent=mt(n),this.element.appendChild(this.htmlRight)}}class Cn extends H{anchor;constructor(e,n){super(new c(10,10),n),this.anchor=e}updateSize(e){const n=this.element.style;n.width=this.anchor.pxSizeX+"px",n.height=this.anchor.pxSizeY+"px"}}class xn extends T{root;game;backButton;backAction;subtopic=void 0;constructor(e){super(T.SCENE_ZBASE),this.game=e,this.root=e.sceneContainer}init(){if(this.subtopic){this.goExercises(this.subtopic);return}const e=this.root;e.removeAll();const n=new w;e.add(n,p.MIDDLE_CENTER),n.add(new Tn("icons/title.png",new c(300,300))),n.add(new y(d("menu.start"),()=>this.goSubTopics())),n.add(new Ne(d("menu.language"),un,()=>this.goLanguageSelection())),e.refresh()}uninit(){}goLanguageSelection(){const e=this.root;e.removeAll();const n=new w;e.add(n,p.MIDDLE_CENTER),n.add(new I(d("language.title"),new c(400,50),"dtext-title"));for(const s of ot)n.add(new Ne(pt(s),at(s),()=>this.setLanguage(s)));this.addBackButton(this.init),e.refresh()}setLanguage(e){this.game.showPopupBG(),Promise.all([ut(e)]).then(()=>this.setLanguageDone(e)).catch(n=>{console.error("setLanguage",n),this.game.hidePopupBG()})}setLanguageDone(e){A.setLanguage(e),this.game.loadInfoPopup("language")}addBackButton(e){this.backButton=new y(d("menu.commonBack"),()=>{this.backPressed()},new c(150,100)),this.root.add(this.backButton,new p(c.BOTTOM_CENTER,c.BOTTOM_LEFT,new c(-200,-10))),this.backAction=e}backPressed(){this.backAction&&this.backAction()}goSubTopics(){this.subtopic=void 0;const e=this.root;e.removeAll();const n=new w;this.root.add(n,p.MIDDLE_CENTER),n.add(new I(d("menu.subtopicsTitle"),new c(400,50),"dtext-title"));const s=yn("measurement");console.log(s.length);for(const i of s){const r=(i.exercise?.length||0)*3;let o=0;if(A&&i.exercise)for(const a of i.exercise){const l=A.stars(a.id);o+=l}n.add(new Sn(d(i.name),o,r,()=>this.goExercises(i)))}this.addBackButton(this.init),e.refresh()}goExercises(e){this.subtopic=e;const n=this.root;n.removeAll();const s=new w;this.root.add(s,p.MIDDLE_CENTER),s.add(new I(d(e.name),new c(400,50),"dtext-title")),console.log(e.exercise.length);for(const i of e.exercise){const r=A.stars(i.id);s.add(new vn(dt(i),r,()=>this.startExercise(i)))}this.addBackButton(this.goSubTopics),n.refresh()}startExercise(e){console.log(`start ${e.id}`),m.loadScene(m.quizScene),m.quizScene.setExercise(e)}}class An extends T{root;game;done;constructor(e){super(T.SCENE_ZBASE),this.game=e,this.root=e.sceneContainer,this.done=!1}init(){const e=new w;this.root.add(e,p.MIDDLE_CENTER),e.add(new I(". . .",new c(200,50)));const n=q("question_catalog.json");this.done=!1,Promise.all([wn(n),ut(A.language).catch(s=>{console.warn("i18n load failed",s)})]).then(()=>Ln(this)).catch(s=>console.error(s))}update(e){this.done&&this.game.loadScene(this.game.mainMenu)}uninit(){}}function Ln(t){t.done=!0,console.log(d("menu.start"))}class Dn extends T{root;game;constructor(e){super(T.POPUP_ZBASE),this.game=e,this.root=e.popupContainer}init(){const e=new w;this.root.add(e,p.MIDDLE_CENTER),e.add(new I("Settings",new c(200,50)))}uninit(){}}class Ce{scene;exercise;list;constructor(e,n){this.scene=e,this.exercise=n,this.list=new w,this.scene.root.add(this.list,new p(c.TOP_CENTER,c.TOP_CENTER,new c(0,105)))}}class On extends Ce{questions=[];count=6;current=-1;correct="";buttons=[];init(){In(this.exercise.id).then(e=>{this.initQuestions(e)}).catch(()=>{console.error("MCQControl init failed")})}initQuestions(e){console.log(`loaded ${e.length} questions`),e=pe(e),this.questions=e.length>this.count?e.slice(0,this.count):e,this.current=0,this.showNext()}cheat(){this.scene.finished(this.count,this.count)}showNext(){if(this.current>=this.count){this.scene.finished(m.reactor.getNumberValue("score"),this.count);return}const e=this.questions[this.current];this.list.destroy(),this.list.add(new I(e.question,new c(400,200),"dtext-panel")),this.correct=e.options[0];const n=pe(e.options);for(const s of n){const i=new y(s,()=>{this.answer(s)});this.buttons.push(i),this.list.add(i)}this.scene.root.refresh()}answer(e){for(const r of this.buttons)r.disable();const n=this.correct===e;console.log(`isCorrect: ${n}`),this.colorize(this.correct,"green");const s=this.questions[this.current];let i="";n?(m.reactor.addition("score",1,0),i=`${d("gameplay.correct")} ${s.explanation}`):(i=d("gameplay.wrongPrefix",{answer:s.explanation||"..."}),this.colorize(e,"red")),this.list.add(new I(i,new c(400,200),"dtext-panel")),this.current++,this.list.add(new y(d("menu.commonNext"),()=>{this.showNext()})),this.scene.root.refresh()}colorize(e,n){for(const s of this.buttons)if(s.element.textContent===e){s.htmlButton.style.backgroundColor=`var(--${n})`;return}}}class Mn extends H{displayValue;displayUnit;buttons=[];onChange;value="";constructor(e,n=new c(400,400),s){super(n,"calculator"),this.onChange=s,this.displayValue=document.createElement("span"),this.displayValue.className="calculator__value",this.displayUnit=document.createElement("span"),this.displayUnit.className="calculator__unit",this.displayUnit.textContent=e;const i=document.createElement("div");i.className="calculator__display",i.append(this.displayValue,this.displayUnit);const r=document.createElement("div");r.className="calculator__grid",this.element.append(i,r),this.buttons=[{label:"7",action:()=>this.appendDigit("7")},{label:"8",action:()=>this.appendDigit("8")},{label:"9",action:()=>this.appendDigit("9")},{label:"4",action:()=>this.appendDigit("4")},{label:"5",action:()=>this.appendDigit("5")},{label:"6",action:()=>this.appendDigit("6")},{label:"1",action:()=>this.appendDigit("1")},{label:"2",action:()=>this.appendDigit("2")},{label:"3",action:()=>this.appendDigit("3")},{label:"0",action:()=>this.appendDigit("0"),css:"calculator__button--zero"},{label:",",action:()=>this.appendComma()},{label:"⌫",action:()=>this.backspace(),css:"calculator__button--backspace"}],this.buttons.forEach(o=>{const a=document.createElement("button");a.type="button",a.textContent=o.label,a.className=`calculator__button ${o.css??""}`.trim(),a.addEventListener("click",o.action),r.append(a)}),this.render()}setUnit(e){this.displayUnit.textContent=e}setValue(e){this.value=Bn(e),this.render()}getValue(){return this.value}clear(){this.value!==""&&(this.value="",this.render())}appendDigit(e){e==="0"&&this.value==="0"||(this.value==="0"?this.value=e:this.value+=e,this.render())}appendComma(){this.value.includes(",")||(this.value=this.value===""?"0,":`${this.value},`,this.render())}backspace(){this.value!==""&&(this.value=this.value.slice(0,-1),this.render())}render(){this.displayValue.textContent=this.value||"0",this.onChange?.(this.value)}}function Bn(t){const e=t.trim();if(e==="")return"";const s=e.replace(".",",").match(/^\d*(?:,\d*)?$/);return s?s[0].startsWith("0")&&!s[0].startsWith("0,")?s[0].replace(/^0+/,"")||"0":s[0]:""}class j{text;answer;answerUnit;constructor(e,n,s){this.text=e,this.answer=n,this.answerUnit=s}}class $n extends j{constructor(){const e=g(u.ML),n=d("exercise.add_and_convert_to_ml.guide"),s=[u.ML,u.CL,u.DL,u.L],i=s[Math.random()*s.length|0],r=s[Math.random()*s.length|0],o=E(i===u.ML?10:1,i===u.L?3:10),a=E(r===u.ML?10:1,r===u.L?3:10),l=`${n} ${o} ${g(i)} + ${a} ${g(r)}`,h=L(o,i)+L(a,r),b=te(h,u.ML);super(l,b,e)}}class Rn extends j{constructor(){const e=u.ML,n=E(2,5),s=E(2,6)*Math.pow(10,E(1,2));let i=n*s;const r=ht([u.CL,u.DL,u.L]);i=te(i,r);const a=`${d("exercise.divide_and_convert_to_ml.guide")}

${i} ${g(r)} / ${n}`;super(a,s,g(e))}}class Pn extends j{constructor(){const e=E(2,6),n=ht([u.CL,u.DL]),s=E(2,10),i=`${s} ${g(n)}`,r=g(u.ML),o=`
${e} ${Re(K.MG)}/${r}`,a=d("exercise.liquid_mass_concentration_amount.guide",{concentration:$e(o),volumeLabel:$e(i)}),l=L(s,n),h=e*l;super(a,h,Re(K.MG))}}class Nn extends j{constructor(){const e=u.ML,n=d("exercise.multiply_and_convert_to_ml.guide"),s=[u.CL,u.DL,u.L],i=E(2,5),r=s[Math.random()*s.length|0],o=E(2,9),a=`${n}

${i} x ${o} ${g(r)}`,l=i*L(o,r),h=te(l,e);super(a,h,g(e))}}class kn extends j{constructor(){const e=d("exercise.easy_liquids_units.guide"),n=u.ML,s=[u.CL,u.DL,u.L],i=s[Math.random()*s.length|0],r=1,o=i===u.L?3:10,a=E(r,o),l=`${e} [[${a} ${g(i)}]]`,h=L(a,i);super(l,h,g(n))}}class Fn extends j{constructor(){const e=u.ML,n=d("exercise.subtract_and_convert_to_ml.guide"),s=[u.ML,u.CL,u.DL,u.L];let i=s[Math.random()*s.length|0],r=s[Math.random()*s.length|0],o=E(i===u.ML?10:1,i===u.L?3:10),a=E(r===u.ML?10:1,r===u.L?3:10);L(o,i)<L(a,r)&&([o,a,i,r]=[a,o,r,i]);const l=`${n}

${o} ${g(i)} - ${a} ${g(r)}`,h=L(o,i)-L(a,r),b=te(h,e);super(l,b,g(e))}}class zn extends Ce{current=0;count=6;tasks=[];calculator;init(){if(m.reactor.set("score",0),this.exercise?.task==="add_and_convert_to_ml")this.tasks=Array.from({length:6},()=>new $n);else if(this.exercise?.task==="subtract_and_convert_to_ml")this.tasks=Array.from({length:6},()=>new Fn);else if(this.exercise?.task==="multiply_and_convert_to_ml")this.tasks=Array.from({length:6},()=>new Nn);else if(this.exercise?.task==="divide_and_convert_to_ml")this.tasks=Array.from({length:6},()=>new Rn);else if(this.exercise?.task==="simple_convert_to_ml")this.tasks=Array.from({length:6},()=>new kn);else if(this.exercise?.task==="liquid_mass_concentration_amount")this.tasks=Array.from({length:6},()=>new Pn);else{console.error(`unknown task ${this.exercise?.task}`);return}console.log("len: "+this.tasks.length),console.log(this.tasks[0].text),this.showNext()}cheat(){this.scene.finished(this.count,this.count)}showNext(){if(console.log(`task ${this.current} / ${this.tasks.length}`),this.current>=this.tasks.length){this.finished();return}const e=this.tasks[this.current];let n=e.text;console.log(n),n=n.replaceAll("[[",'<span style="color: yellow;">'),n=n.replaceAll("]]","</span>"),console.log(n),this.current++,this.list.destroy(),this.list.add(new I(n,new c(400,200),"dtext-panel",!0)),this.calculator=new Mn(e.answerUnit),this.list.add(this.calculator),this.list.add(new y("OK",()=>{this.answer(e)})),this.scene.root.refresh()}answer(e){const n=this.calculator?.getValue(),s=Number(n);if(!Number.isFinite(s))return;let i="";s==e.answer?(m.reactor.addition("score",1,0),i=`${d("gameplay.correct")} ${e.answer}`):i=d("gameplay.wrongPrefix",{answer:e.answer||"..."}),this.list.add(new I(i,new c(400,100),"dtext-panel")),this.list.add(new y(d("menu.commonNext"),()=>{this.showNext()})),this.scene.root.refresh()}finished(){this.scene.finished(m.reactor.getNumberValue("score"),this.count)}}class Un extends H{correctOrder;listeners=new Map;draggedButton=null;pointerId=null;dragOffsetY=0;placeholder=null;containerRect=null;containerScrollTop=0;constructor(e,n){if(super(e,"drag-drop-button-list"),n.length===0)throw new Error("DragDropButtonList requires at least one button");this.correctOrder=n.map(i=>i.id);const s=this.createInitialOrder(n);this.element.classList.add("drag-drop-button-list"),s.forEach(i=>{const r=this.buildButton(i);this.element.append(r)})}disable(){for(const e of this.listeners.keys())e.style.pointerEvents="none"}isCorrectOrder(){const e=Array.from(this.element.children).filter(n=>n instanceof HTMLButtonElement).map(n=>n.dataset.id??"");return e.length!==this.correctOrder.length?!1:e.every((n,s)=>n===this.correctOrder[s])}destroy(){this.listeners.forEach((e,n)=>{n.removeEventListener("pointerdown",e.pointerdown),n.removeEventListener("pointermove",e.pointermove),n.removeEventListener("pointerup",e.pointerup),n.removeEventListener("pointercancel",e.pointercancel)}),this.listeners.clear(),this.draggedButton=null,this.pointerId=null,this.placeholder?.remove(),this.placeholder=null,super.destroy()}buildButton(e){const n=document.createElement("button");n.type="button",n.draggable=!1,n.textContent=e.label,n.dataset.id=e.id,n.classList.add("drag-drop-button-list__item","dbutton");const s={pointerdown:i=>this.handlePointerDown(i,n),pointermove:i=>this.handlePointerMove(i,n),pointerup:i=>this.handlePointerUp(i,n),pointercancel:i=>this.handlePointerUp(i,n)};return n.addEventListener("pointerdown",s.pointerdown),n.addEventListener("pointermove",s.pointermove),n.addEventListener("pointerup",s.pointerup),n.addEventListener("pointercancel",s.pointercancel),this.listeners.set(n,s),n}handlePointerDown(e,n){if(e.button!==0||(e.preventDefault(),this.draggedButton))return;this.draggedButton=n,this.pointerId=e.pointerId,this.containerRect=this.element.getBoundingClientRect(),this.containerScrollTop=this.element.scrollTop;const s=n.getBoundingClientRect();this.dragOffsetY=e.clientY-s.top,this.placeholder=this.createPlaceholder(s.height),this.element.insertBefore(this.placeholder,n),n.setPointerCapture(e.pointerId),n.classList.add("drag-drop-button-list__item--dragging");const i=s.left-(this.containerRect?.left??0),r=s.top-(this.containerRect?.top??0)+this.containerScrollTop;n.style.left=`${i}px`,n.style.top=`${r}px`}handlePointerMove(e,n){if(!this.draggedButton||this.draggedButton!==n||this.pointerId!==e.pointerId)return;const s=this.containerRect?.top??0,i=e.clientY-this.dragOffsetY-s+this.containerScrollTop;n.style.top=`${i}px`,this.updatePlaceholderPosition(e.clientY)}handlePointerUp(e,n){!this.draggedButton||this.draggedButton!==n||this.pointerId!==e.pointerId||(n.hasPointerCapture(e.pointerId)&&n.releasePointerCapture(e.pointerId),this.placeholder&&(this.element.insertBefore(n,this.placeholder),this.placeholder.remove(),this.placeholder=null),n.classList.remove("drag-drop-button-list__item--dragging"),n.style.left="",n.style.top="",this.draggedButton=null,this.pointerId=null,this.containerRect=null,this.dragOffsetY=0,this.containerScrollTop=0)}createInitialOrder(e){const n=pe(e.slice());if(e.length<2||!n.every((o,a)=>o.id===this.correctOrder[a]))return n;const i=n.slice(),r=i.length-1;return[i[r-1],i[r]]=[i[r],i[r-1]],i}createPlaceholder(e){const n=document.createElement("div");return n.className="drag-drop-button-list__placeholder",n.style.height=`${e}px`,n}updatePlaceholderPosition(e){if(!this.placeholder)return;const s=Array.from(this.element.children).filter(i=>i instanceof HTMLElement&&i!==this.draggedButton).find(i=>{if(i===this.placeholder)return!1;const r=i.getBoundingClientRect();return e<r.top+r.height/2});s?this.element.insertBefore(this.placeholder,s):this.element.appendChild(this.placeholder)}}class xe{question;items;correctOrder;constructor(e,n){this.question=e,this.correctOrder=[...n],this.items=[...this.correctOrder]}isCorrect(e){if(e.length!==this.correctOrder.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==this.correctOrder[n])return!1;return!0}}const Hn=[100,200,300,400,500];class jn extends xe{constructor(){const e=Gn();super(d("exercise.sort_liquid_mass_concentration.guide"),e)}}function Gn(){const t=Vn();Kn(t);const e=[],n=new Set;for(const s of t)if(!n.has(s.key)&&(n.add(s.key),e.push(s),e.length===4))break;if(e.length<4)throw new Error("Failed to generate unique mass concentrations");return e.sort((s,i)=>s.ratio-i.ratio),e.map(s=>qn(s))}function Vn(){const t=[];for(const e of Hn)for(let n=1;n<=9;n++){const s=n/e,i=Wn(n,e);t.push({mass:n,volume:e,ratio:s,key:i})}return t}function qn(t){const e=`${t.volume} ${g(u.ML)}`;return`${t.mass} mg / ${e}`}function Wn(t,e){const n=Yn(t,e);return`${t/n}/${e/n}`}function Yn(t,e){let n=Math.abs(t),s=Math.abs(e);for(;s!==0;){const i=s;s=n%s,n=i}return n}function Kn(t){for(let e=t.length-1;e>0;e--){const n=E(0,e),s=t[e];t[e]=t[n],t[n]=s}}class Xn extends xe{constructor(){const e=E(1,4),n=Zn(e);super(d("exercise.sort_liquid_units.guide"),n)}}function Zn(t){const e=t*50,n=t*8,s=t*6,i=t*3;return[`${e} ${g(u.ML)}`,`${n} ${g(u.CL)}`,`${s} ${g(u.DL)}`,`${i} ${g(u.L)}`]}const Jn=[u.ML,u.CL,u.DL,u.L];class Qn extends xe{constructor(){const e=E(1,9),n=[e,e*10,e*100,e*1e3],s=ns([...Jn]),i=n.map((r,o)=>es(r,s[o]));super(d("exercise.sort_liquid_units_decimal.guide"),i)}}function es(t,e){const n=ct[e];if(!Number.isFinite(n))throw new Error("Unsupported unit for decimal sort");const s=t/n;return`${ts(s)} ${g(e)}`}function ts(t){if(Number.isInteger(t))return t.toString();const e=t.toString();return e.includes("e")?t.toFixed(3).replace(/0+$/,"").replace(/\.$/,""):e.replace(/0+$/,"").replace(/\.$/,"")}function ns(t){for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1)),s=t[e];t[e]=t[n],t[n]=s}return t}class ss extends Ce{current=0;count=6;tasks=[];sorter;readyButton;init(){if(m.reactor.set("score",0),this.exercise?.task==="sort_liquid_units")this.tasks=Array.from({length:6},()=>new Xn);else if(this.exercise?.task==="sort_liquid_units_decimal")this.tasks=Array.from({length:6},()=>new Qn);else if(this.exercise?.task==="sort_liquid_mass_concentration")this.tasks=Array.from({length:6},()=>new jn);else{console.error(`Unknown sort task: ${this.exercise?.task}`);return}console.log("len: "+this.tasks.length),console.log(this.tasks[0].question),this.showNext()}cheat(){this.scene.finished(this.count,this.count)}showNext(){if(console.log(`task ${this.current} / ${this.tasks.length}`),this.current>=this.tasks.length){this.finished();return}const e=this.tasks[this.current];let n=[];for(const s of e.items)n.push({id:s,label:s});this.current++,this.list.destroy(),this.list.add(new I(e.question,new c(400,200),"dtext-panel")),this.sorter=new Un(new c(400,300),n),this.list.add(this.sorter),this.readyButton=new y("OK",()=>{this.answer(e)}),this.list.add(this.readyButton),this.scene.root.refresh()}answer(e){this.readyButton?.disable(),this.sorter?.disable();let n="";this.sorter?.isCorrectOrder()?(m.reactor.addition("score",1,0),n=`${d("gameplay.correct")}`):n=d("gameplay.wrongPrefix",{answer:"TODO"}),this.list.add(new I(n,new c(400,200),"dtext-panel")),this.list.add(new y(d("menu.commonNext"),()=>{this.showNext()})),this.scene.root.refresh()}finished(){this.scene.finished(m.reactor.getNumberValue("score"),this.count)}}class is extends T{root;info;action;constructor(e,n){super(T.POPUP_ZBASE),this.root=m.popupContainer,this.info=e,this.action=n}init(){const e=new w;this.root.add(e,p.MIDDLE_CENTER);const n=300,s=new c(n,ve.y);e.add(new I(this.info,new c(n,n),"dtext-panel")),e.add(new y(d("menu.commonYes"),this.action,s)),e.add(new y(d("menu.commonNo"),()=>{m.closePopup()},s))}uninit(){}}class rs extends T{root;game;exercise;ctrl;constructor(e){super(T.SCENE_ZBASE),this.game=e,this.root=e.sceneContainer,this.exercise=void 0,this.ctrl=void 0}init(){if(!this.exercise){x(!1);return}if(this.exercise.format=="mcq")this.ctrl=new On(this,this.exercise);else if(this.exercise.format=="calculus")this.ctrl=new zn(this,this.exercise);else if(this.exercise.format=="sort")this.ctrl=new ss(this,this.exercise);else{console.error("unhandled format: ",this.exercise.format),this.game.loadScene(this.game.mainMenu);return}this.ctrl.init(),this.addScoreBar(this.exercise),this.root.add(new y("<cheat>",()=>{this.ctrl?.cheat()}),p.BOTTOM_CENTER)}addScoreBar(e){const n=new c(400,100),s=new ln(n);this.root.add(s,p.TOP_CENTER),s.add(new Cn(s,"quiz-plane"),p.TOP_LEFT);const i=6,r=d("gameplay.score",{score:0,total:i}),o=new I(r,new c(400,30));o.react=(a,l)=>{const h=typeof l=="number"?l:0;o.element.textContent=d("gameplay.score",{score:h,total:i})},m.reactor.addListener(o,"score"),s.add(o,p.BOTTOM_CENTER),s.add(new I(dt(e),new c(400,30)),new p(c.MIDDLE_CENTER,c.MIDDLE_CENTER,new c(0,-10))),s.add(new y("II",()=>{this.pauseClicked()},new c(50,50)),p.BOTTOM_LEFT)}pauseClicked(){const e=new is(d("gameplay.quitMessage"),()=>{m.loadScene(this.game.mainMenu)});m.loadPopup(e)}uninit(){}setExercise(e){this.exercise=e}exit(){this.exercise=void 0,this.ctrl=void 0}finished(e,n){if(!this.ctrl||!this.exercise)return;this.ctrl.list.destroy(),A.setExerciseSuccess(this.exercise.id,e/n);const s=A.stars(this.exercise.id),i=`<p><span style="color: yellow;">${mt(s)}</span>`,r=`${d("menu.resultsTitle")} ${d("gameplay.score",{score:e,total:n})} ${i}`;this.ctrl.list.add(new I(r,new c(400,200),"dtext-panel",!0)),this.ctrl.list.add(new y("OK",()=>{m.loadScene(this.game.mainMenu)})),this.root.refresh()}}class os extends T{root;game;info="";constructor(e){super(T.POPUP_ZBASE),this.game=e,this.root=e.popupContainer}init(){const e=new w;this.root.add(e,p.MIDDLE_CENTER),this.info==="language"?this.initLanguage(e):console.error(`InfoPopup info not set: ${this.info}`)}initLanguage(e){e.add(new I(d("language.selected",{name:pt(A.language)}),new c(200,50))),e.add(new y("OK",()=>{this.game.closePopup(),this.game.loadScene(this.game.mainMenu)}))}uninit(){}}class as extends an{nextScene=void 0;nextPopup=void 0;scene;popup=void 0;sceneContainer;popupContainer;popupBG;mainMenu;quizScene;boot;settingsPopup;infoPopup;constructor(){super(),this.sceneContainer=this.createRoot(T.SCENE_ZBASE),this.popupContainer=this.createRoot(T.POPUP_ZBASE),this.popupBG=ls(T.POPUP_ZBASE-1,()=>cs(this)),this.hidePopupBG(),this.mainMenu=new xn(this),this.quizScene=new rs(this),this.boot=new An(this),this.settingsPopup=new Dn(this),this.infoPopup=new os(this),this.scene=this.boot}update(e){this.nextScene?(this.scene.uninit(),this.scene=this.nextScene,this.nextScene=void 0,this.cleanupScene(),this.scene.init(),this.sceneContainer.refresh()):this.nextPopup?(this.popup&&(this.popup.uninit(),this.cleanupPopup()),this.popup=this.nextPopup,this.nextPopup=void 0,this.popup.init(),this.showPopupBG(),this.popupContainer.refresh()):(this.scene.update(e),this.popup&&this.popup.update(e))}hidePopupBG(){this.popupBG.style.display="none"}showPopupBG(){this.popupBG.style.display=""}closePopup(){this.popup&&(this.popup.uninit(),this.popup=void 0,this.cleanupPopup(),this.hidePopupBG())}cleanupScene(){this.sceneContainer.removeAll()}cleanupPopup(){this.popupContainer.removeAll()}loadScene(e){x(!this.nextScene&&!this.nextPopup),this.closePopup(),this.hidePopupBG(),this.nextScene=e}loadPopup(e){x(!this.nextScene&&!this.nextPopup),this.nextPopup=e}loadInfoPopup(e){this.infoPopup.info=e,this.loadPopup(this.infoPopup)}resize(e,n){const s=window.innerHeight/1024;document.documentElement.style.setProperty("--one",s+"px"),super.resize(e,n,s)}}function cs(t){console.log("pop-up BG pressed"),t.popup&&t.closePopup()}function ls(t,e){const n=document.createElement("div");return Object.assign(n.style,{position:"fixed",inset:"0",background:"rgba(0,0,0,0.5)",zIndex:String(t),pointerEvents:"auto"}),n.addEventListener("pointerdown",s=>{s.preventDefault(),s.stopPropagation(),e?.(s)}),document.body.appendChild(n),n}const hs=()=>{};var ke={};/**
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
 */const wt=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},us=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},bt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,h=l?t[i+2]:0,b=r>>2,C=(r&3)<<4|a>>4;let S=(a&15)<<2|h>>6,W=h&63;l||(W=64,o||(S=64)),s.push(n[b],n[C],n[S],n[W])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(wt(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):us(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const C=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||h==null||C==null)throw new ds;const S=r<<2|a>>4;if(s.push(S),h!==64){const W=a<<4&240|h>>2;if(s.push(W),C!==64){const nn=h<<6&192|C;s.push(nn)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ds extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ps=function(t){const e=wt(t);return bt.encodeByteArray(e,!0)},yt=function(t){return ps(t).replace(/\./g,"")},fs=function(t){try{return bt.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function gs(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ms=()=>gs().__FIREBASE_DEFAULTS__,ws=()=>{if(typeof process>"u"||typeof ke>"u")return;const t=ke.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},bs=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&fs(t[1]);return e&&JSON.parse(e)},ys=()=>{try{return hs()||ms()||ws()||bs()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Et=()=>ys()?.config;/**
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
 */class Es{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}function Is(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function It(){try{return typeof indexedDB=="object"}catch{return!1}}function Tt(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(n){e(n)}})}function Ts(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const _s="FirebaseError";class U extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=_s,Object.setPrototypeOf(this,U.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ne.prototype.create)}}class ne{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Ss(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new U(i,a,s)}}function Ss(t,e){return t.replace(vs,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const vs=/\{\$([^}]+)}/g;function X(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Fe(r)&&Fe(o)){if(!X(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Fe(t){return t!==null&&typeof t=="object"}/**
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
 */const Cs=1e3,xs=2,As=14400*1e3,Ls=.5;function ze(t,e=Cs,n=xs){const s=e*Math.pow(n,t),i=Math.round(Ls*s*(Math.random()-.5)*2);return Math.min(As,s+i)}/**
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
 */function _t(t){return t&&t._delegate?t._delegate:t}class ${constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Ds{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Es;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ms(e))try{this.getOrInitializeService({instanceIdentifier:R})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=R){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=R){return this.instances.has(e)}getOptions(e=R){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(s)??new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Os(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=R){return this.component?this.component.multipleInstances?e:R:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Os(t){return t===R?void 0:t}function Ms(t){return t.instantiationMode==="EAGER"}/**
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
 */class Bs{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ds(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var f;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(f||(f={}));const $s={debug:f.DEBUG,verbose:f.VERBOSE,info:f.INFO,warn:f.WARN,error:f.ERROR,silent:f.SILENT},Rs=f.INFO,Ps={[f.DEBUG]:"log",[f.VERBOSE]:"log",[f.INFO]:"info",[f.WARN]:"warn",[f.ERROR]:"error"},Ns=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Ps[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class St{constructor(e){this.name=e,this._logLevel=Rs,this._logHandler=Ns,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in f))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,f.DEBUG,...e),this._logHandler(this,f.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,f.VERBOSE,...e),this._logHandler(this,f.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,f.INFO,...e),this._logHandler(this,f.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,f.WARN,...e),this._logHandler(this,f.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,f.ERROR,...e),this._logHandler(this,f.ERROR,...e)}}const ks=(t,e)=>e.some(n=>t instanceof n);let Ue,He;function Fs(){return Ue||(Ue=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zs(){return He||(He=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vt=new WeakMap,we=new WeakMap,Ct=new WeakMap,oe=new WeakMap,Ae=new WeakMap;function Us(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(O(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&vt.set(n,t)}).catch(()=>{}),Ae.set(e,t),e}function Hs(t){if(we.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});we.set(t,e)}let be={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return we.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ct.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return O(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function js(t){be=t(be)}function Gs(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ae(this),e,...n);return Ct.set(s,e.sort?e.sort():[e]),O(s)}:zs().includes(t)?function(...e){return t.apply(ae(this),e),O(vt.get(this))}:function(...e){return O(t.apply(ae(this),e))}}function Vs(t){return typeof t=="function"?Gs(t):(t instanceof IDBTransaction&&Hs(t),ks(t,Fs())?new Proxy(t,be):t)}function O(t){if(t instanceof IDBRequest)return Us(t);if(oe.has(t))return oe.get(t);const e=Vs(t);return e!==t&&(oe.set(t,e),Ae.set(e,t)),e}const ae=t=>Ae.get(t);function xt(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=O(o);return s&&o.addEventListener("upgradeneeded",l=>{s(O(o.result),l.oldVersion,l.newVersion,O(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),a}const qs=["get","getKey","getAll","getAllKeys","count"],Ws=["put","add","delete","clear"],ce=new Map;function je(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ce.get(e))return ce.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Ws.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||qs.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let h=l.store;return s&&(h=h.index(a.shift())),(await Promise.all([h[n](...a),i&&l.done]))[0]};return ce.set(e,r),r}js(t=>({...t,get:(e,n,s)=>je(e,n)||t.get(e,n,s),has:(e,n)=>!!je(e,n)||t.has(e,n)}));/**
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
 */class Ys{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ks(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Ks(t){return t.getComponent()?.type==="VERSION"}const ye="@firebase/app",Ge="0.14.3";/**
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
 */const D=new St("@firebase/app"),Xs="@firebase/app-compat",Zs="@firebase/analytics-compat",Js="@firebase/analytics",Qs="@firebase/app-check-compat",ei="@firebase/app-check",ti="@firebase/auth",ni="@firebase/auth-compat",si="@firebase/database",ii="@firebase/data-connect",ri="@firebase/database-compat",oi="@firebase/functions",ai="@firebase/functions-compat",ci="@firebase/installations",li="@firebase/installations-compat",hi="@firebase/messaging",ui="@firebase/messaging-compat",di="@firebase/performance",pi="@firebase/performance-compat",fi="@firebase/remote-config",gi="@firebase/remote-config-compat",mi="@firebase/storage",wi="@firebase/storage-compat",bi="@firebase/firestore",yi="@firebase/ai",Ei="@firebase/firestore-compat",Ii="firebase";/**
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
 */const Ee="[DEFAULT]",Ti={[ye]:"fire-core",[Xs]:"fire-core-compat",[Js]:"fire-analytics",[Zs]:"fire-analytics-compat",[ei]:"fire-app-check",[Qs]:"fire-app-check-compat",[ti]:"fire-auth",[ni]:"fire-auth-compat",[si]:"fire-rtdb",[ii]:"fire-data-connect",[ri]:"fire-rtdb-compat",[oi]:"fire-fn",[ai]:"fire-fn-compat",[ci]:"fire-iid",[li]:"fire-iid-compat",[hi]:"fire-fcm",[ui]:"fire-fcm-compat",[di]:"fire-perf",[pi]:"fire-perf-compat",[fi]:"fire-rc",[gi]:"fire-rc-compat",[mi]:"fire-gcs",[wi]:"fire-gcs-compat",[bi]:"fire-fst",[Ei]:"fire-fst-compat",[yi]:"fire-vertex","fire-js":"fire-js",[Ii]:"fire-js-all"};/**
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
 */const Z=new Map,_i=new Map,Ie=new Map;function Ve(t,e){try{t.container.addComponent(e)}catch(n){D.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function k(t){const e=t.name;if(Ie.has(e))return D.debug(`There were multiple attempts to register component ${e}.`),!1;Ie.set(e,t);for(const n of Z.values())Ve(n,t);for(const n of _i.values())Ve(n,t);return!0}function se(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Si={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},M=new ne("app","Firebase",Si);/**
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
 */class vi{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new $("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw M.create("app-deleted",{appName:this._name})}}function At(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s={name:Ee,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw M.create("bad-app-name",{appName:String(i)});if(n||(n=Et()),!n)throw M.create("no-options");const r=Z.get(i);if(r){if(X(n,r.options)&&X(s,r.config))return r;throw M.create("duplicate-app",{appName:i})}const o=new Bs(i);for(const l of Ie.values())o.addComponent(l);const a=new vi(n,s,o);return Z.set(i,a),a}function Ci(t=Ee){const e=Z.get(t);if(!e&&t===Ee&&Et())return At();if(!e)throw M.create("no-app",{appName:t});return e}function B(t,e,n){let s=Ti[t]??t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),D.warn(o.join(" "));return}k(new $(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const xi="firebase-heartbeat-database",Ai=1,V="firebase-heartbeat-store";let le=null;function Lt(){return le||(le=xt(xi,Ai,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(V)}catch(n){console.warn(n)}}}}).catch(t=>{throw M.create("idb-open",{originalErrorMessage:t.message})})),le}async function Li(t){try{const n=(await Lt()).transaction(V),s=await n.objectStore(V).get(Dt(t));return await n.done,s}catch(e){if(e instanceof U)D.warn(e.message);else{const n=M.create("idb-get",{originalErrorMessage:e?.message});D.warn(n.message)}}}async function qe(t,e){try{const s=(await Lt()).transaction(V,"readwrite");await s.objectStore(V).put(e,Dt(t)),await s.done}catch(n){if(n instanceof U)D.warn(n.message);else{const s=M.create("idb-set",{originalErrorMessage:n?.message});D.warn(s.message)}}}function Dt(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Di=1024,Oi=30;class Mi{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $i(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=We();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>Oi){const i=Ri(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){D.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=We(),{heartbeatsToSend:n,unsentEntries:s}=Bi(this._heartbeatsCache.heartbeats),i=yt(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return D.warn(e),""}}}function We(){return new Date().toISOString().substring(0,10)}function Bi(t,e=Di){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Ye(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ye(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class $i{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return It()?Tt().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Li(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return qe(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return qe(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ye(t){return yt(JSON.stringify({version:2,heartbeats:t})).length}function Ri(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function Pi(t){k(new $("platform-logger",e=>new Ys(e),"PRIVATE")),k(new $("heartbeat",e=>new Mi(e),"PRIVATE")),B(ye,Ge,t),B(ye,Ge,"esm2020"),B("fire-js","")}Pi("");var Ni="firebase",ki="12.3.0";/**
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
 */B(Ni,ki,"app");const Ot="@firebase/installations",Le="0.6.19";/**
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
 */const Mt=1e4,Bt=`w:${Le}`,$t="FIS_v2",Fi="https://firebaseinstallations.googleapis.com/v1",zi=3600*1e3,Ui="installations",Hi="Installations";/**
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
 */const ji={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},F=new ne(Ui,Hi,ji);function Rt(t){return t instanceof U&&t.code.includes("request-failed")}/**
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
 */function Pt({projectId:t}){return`${Fi}/projects/${t}/installations`}function Nt(t){return{token:t.token,requestStatus:2,expiresIn:Vi(t.expiresIn),creationTime:Date.now()}}async function kt(t,e){const s=(await e.json()).error;return F.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Ft({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Gi(t,{refreshToken:e}){const n=Ft(t);return n.append("Authorization",qi(e)),n}async function zt(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Vi(t){return Number(t.replace("s","000"))}function qi(t){return`${$t} ${t}`}/**
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
 */async function Wi({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=Pt(t),i=Ft(t),r=e.getImmediate({optional:!0});if(r){const h=await r.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const o={fid:n,authVersion:$t,appId:t.appId,sdkVersion:Bt},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await zt(()=>fetch(s,a));if(l.ok){const h=await l.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:Nt(h.authToken)}}else throw await kt("Create Installation",l)}/**
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
 */function Ut(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Yi(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Ki=/^[cdef][\w-]{21}$/,Te="";function Xi(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Zi(t);return Ki.test(n)?n:Te}catch{return Te}}function Zi(t){return Yi(t).substr(0,22)}/**
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
 */function ie(t){return`${t.appName}!${t.appId}`}/**
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
 */const Ht=new Map;function jt(t,e){const n=ie(t);Gt(n,e),Ji(n,e)}function Gt(t,e){const n=Ht.get(t);if(n)for(const s of n)s(e)}function Ji(t,e){const n=Qi();n&&n.postMessage({key:t,fid:e}),er()}let N=null;function Qi(){return!N&&"BroadcastChannel"in self&&(N=new BroadcastChannel("[Firebase] FID Change"),N.onmessage=t=>{Gt(t.data.key,t.data.fid)}),N}function er(){Ht.size===0&&N&&(N.close(),N=null)}/**
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
 */const tr="firebase-installations-database",nr=1,z="firebase-installations-store";let he=null;function De(){return he||(he=xt(tr,nr,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(z)}}})),he}async function J(t,e){const n=ie(t),i=(await De()).transaction(z,"readwrite"),r=i.objectStore(z),o=await r.get(n);return await r.put(e,n),await i.done,(!o||o.fid!==e.fid)&&jt(t,e.fid),e}async function Vt(t){const e=ie(t),s=(await De()).transaction(z,"readwrite");await s.objectStore(z).delete(e),await s.done}async function re(t,e){const n=ie(t),i=(await De()).transaction(z,"readwrite"),r=i.objectStore(z),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&jt(t,a.fid),a}/**
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
 */async function Oe(t){let e;const n=await re(t.appConfig,s=>{const i=sr(s),r=ir(t,i);return e=r.registrationPromise,r.installationEntry});return n.fid===Te?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function sr(t){const e=t||{fid:Xi(),registrationStatus:0};return qt(e)}function ir(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(F.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=rr(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:or(t)}:{installationEntry:e}}async function rr(t,e){try{const n=await Wi(t,e);return J(t.appConfig,n)}catch(n){throw Rt(n)&&n.customData.serverCode===409?await Vt(t.appConfig):await J(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function or(t){let e=await Ke(t.appConfig);for(;e.registrationStatus===1;)await Ut(100),e=await Ke(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Oe(t);return s||n}return e}function Ke(t){return re(t,e=>{if(!e)throw F.create("installation-not-found");return qt(e)})}function qt(t){return ar(t)?{fid:t.fid,registrationStatus:0}:t}function ar(t){return t.registrationStatus===1&&t.registrationTime+Mt<Date.now()}/**
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
 */async function cr({appConfig:t,heartbeatServiceProvider:e},n){const s=lr(t,n),i=Gi(t,n),r=e.getImmediate({optional:!0});if(r){const h=await r.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const o={installation:{sdkVersion:Bt,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await zt(()=>fetch(s,a));if(l.ok){const h=await l.json();return Nt(h)}else throw await kt("Generate Auth Token",l)}function lr(t,{fid:e}){return`${Pt(t)}/${e}/authTokens:generate`}/**
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
 */async function Me(t,e=!1){let n;const s=await re(t.appConfig,r=>{if(!Wt(r))throw F.create("not-registered");const o=r.authToken;if(!e&&dr(o))return r;if(o.requestStatus===1)return n=hr(t,e),r;{if(!navigator.onLine)throw F.create("app-offline");const a=fr(r);return n=ur(t,a),a}});return n?await n:s.authToken}async function hr(t,e){let n=await Xe(t.appConfig);for(;n.authToken.requestStatus===1;)await Ut(100),n=await Xe(t.appConfig);const s=n.authToken;return s.requestStatus===0?Me(t,e):s}function Xe(t){return re(t,e=>{if(!Wt(e))throw F.create("not-registered");const n=e.authToken;return gr(n)?{...e,authToken:{requestStatus:0}}:e})}async function ur(t,e){try{const n=await cr(t,e),s={...e,authToken:n};return await J(t.appConfig,s),n}catch(n){if(Rt(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Vt(t.appConfig);else{const s={...e,authToken:{requestStatus:0}};await J(t.appConfig,s)}throw n}}function Wt(t){return t!==void 0&&t.registrationStatus===2}function dr(t){return t.requestStatus===2&&!pr(t)}function pr(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+zi}function fr(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function gr(t){return t.requestStatus===1&&t.requestTime+Mt<Date.now()}/**
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
 */async function mr(t){const e=t,{installationEntry:n,registrationPromise:s}=await Oe(e);return s?s.catch(console.error):Me(e).catch(console.error),n.fid}/**
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
 */async function wr(t,e=!1){const n=t;return await br(n),(await Me(n,e)).token}async function br(t){const{registrationPromise:e}=await Oe(t);e&&await e}/**
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
 */function yr(t){if(!t||!t.options)throw ue("App Configuration");if(!t.name)throw ue("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ue(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ue(t){return F.create("missing-app-config-values",{valueName:t})}/**
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
 */const Yt="installations",Er="installations-internal",Ir=t=>{const e=t.getProvider("app").getImmediate(),n=yr(e),s=se(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Tr=t=>{const e=t.getProvider("app").getImmediate(),n=se(e,Yt).getImmediate();return{getId:()=>mr(n),getToken:i=>wr(n,i)}};function _r(){k(new $(Yt,Ir,"PUBLIC")),k(new $(Er,Tr,"PRIVATE"))}_r();B(Ot,Le);B(Ot,Le,"esm2020");/**
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
 */const Q="analytics",Sr="firebase_id",vr="origin",Cr=60*1e3,xr="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Be="https://www.googletagmanager.com/gtag/js";/**
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
 */const _=new St("@firebase/analytics");/**
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
 */const Ar={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},v=new ne("analytics","Analytics",Ar);/**
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
 */function Lr(t){if(!t.startsWith(Be)){const e=v.create("invalid-gtag-resource",{gtagURL:t});return _.warn(e.message),""}return t}function Kt(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Dr(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Or(t,e){const n=Dr("firebase-js-sdk-policy",{createScriptURL:Lr}),s=document.createElement("script"),i=`${Be}?l=${t}&id=${e}`;s.src=n?n?.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function Mr(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Br(t,e,n,s,i,r){const o=s[i];try{if(o)await e[o];else{const l=(await Kt(n)).find(h=>h.measurementId===i);l&&await e[l.appId]}}catch(a){_.error(a)}t("config",i,r)}async function $r(t,e,n,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await Kt(n);for(const l of o){const h=a.find(C=>C.measurementId===l),b=h&&e[h.appId];if(b)r.push(b);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",s,i||{})}catch(r){_.error(r)}}function Rr(t,e,n,s){async function i(r,...o){try{if(r==="event"){const[a,l]=o;await $r(t,e,n,a,l)}else if(r==="config"){const[a,l]=o;await Br(t,e,n,s,a,l)}else if(r==="consent"){const[a,l]=o;t("consent",a,l)}else if(r==="get"){const[a,l,h]=o;t("get",a,l,h)}else if(r==="set"){const[a]=o;t("set",a)}else t(r,...o)}catch(a){_.error(a)}}return i}function Pr(t,e,n,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=Rr(r,t,e,n),{gtagCore:r,wrappedGtag:window[i]}}function Nr(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Be)&&n.src.includes(t))return n;return null}/**
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
 */const kr=30,Fr=1e3;class zr{constructor(e={},n=Fr){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Xt=new zr;function Ur(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Hr(t){const{appId:e,apiKey:n}=t,s={method:"GET",headers:Ur(n)},i=xr.replace("{app-id}",e),r=await fetch(i,s);if(r.status!==200&&r.status!==304){let o="";try{const a=await r.json();a.error?.message&&(o=a.error.message)}catch{}throw v.create("config-fetch-failed",{httpStatus:r.status,responseMessage:o})}return r.json()}async function jr(t,e=Xt,n){const{appId:s,apiKey:i,measurementId:r}=t.options;if(!s)throw v.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw v.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new qr;return setTimeout(async()=>{a.abort()},Cr),Zt({appId:s,apiKey:i,measurementId:r},o,a,e)}async function Zt(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=Xt){const{appId:r,measurementId:o}=t;try{await Gr(s,e)}catch(a){if(o)return _.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a?.message}]`),{appId:r,measurementId:o};throw a}try{const a=await Hr(t);return i.deleteThrottleMetadata(r),a}catch(a){const l=a;if(!Vr(l)){if(i.deleteThrottleMetadata(r),o)return _.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:r,measurementId:o};throw a}const h=Number(l?.customData?.httpStatus)===503?ze(n,i.intervalMillis,kr):ze(n,i.intervalMillis),b={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(r,b),_.debug(`Calling attemptFetch again in ${h} millis`),Zt(t,b,s,i)}}function Gr(t,e){return new Promise((n,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(r),s(v.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Vr(t){if(!(t instanceof U)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class qr{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Wr(t,e,n,s,i){if(i&&i.global){t("event",n,s);return}else{const r=await e,o={...s,send_to:r};t("event",n,o)}}/**
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
 */async function Yr(){if(It())try{await Tt()}catch(t){return _.warn(v.create("indexeddb-unavailable",{errorInfo:t?.toString()}).message),!1}else return _.warn(v.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Kr(t,e,n,s,i,r,o){const a=jr(t);a.then(S=>{n[S.measurementId]=S.appId,t.options.measurementId&&S.measurementId!==t.options.measurementId&&_.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${S.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(S=>_.error(S)),e.push(a);const l=Yr().then(S=>{if(S)return s.getId()}),[h,b]=await Promise.all([a,l]);Nr(r)||Or(r,h.measurementId),i("js",new Date);const C=o?.config??{};return C[vr]="firebase",C.update=!0,b!=null&&(C[Sr]=b),i("config",h.measurementId,C),h.measurementId}/**
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
 */class Xr{constructor(e){this.app=e}_delete(){return delete G[this.app.options.appId],Promise.resolve()}}let G={},Ze=[];const Je={};let de="dataLayer",Zr="gtag",Qe,Jt,et=!1;function Jr(){const t=[];if(Is()&&t.push("This is a browser extension environment."),Ts()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=v.create("invalid-analytics-context",{errorInfo:e});_.warn(n.message)}}function Qr(t,e,n){Jr();const s=t.options.appId;if(!s)throw v.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)_.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw v.create("no-api-key");if(G[s]!=null)throw v.create("already-exists",{id:s});if(!et){Mr(de);const{wrappedGtag:r,gtagCore:o}=Pr(G,Ze,Je,de,Zr);Jt=r,Qe=o,et=!0}return G[s]=Kr(t,Ze,Je,e,Qe,de,n),new Xr(t)}function Qt(t=Ci()){t=_t(t);const e=se(t,Q);return e.isInitialized()?e.getImmediate():eo(t)}function eo(t,e={}){const n=se(t,Q);if(n.isInitialized()){const i=n.getImmediate();if(X(e,n.getOptions()))return i;throw v.create("already-initialized")}return n.initialize({options:e})}function en(t,e,n,s){t=_t(t),Wr(Jt,G[t.app.options.appId],e,n,s).catch(i=>_.error(i))}const tt="@firebase/analytics",nt="0.10.18";function to(){k(new $(Q,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return Qr(s,i,n)},"PUBLIC")),k(new $("analytics-internal",t,"PRIVATE")),B(tt,nt),B(tt,nt,"esm2020");function t(e){try{const n=e.getProvider(Q).getImmediate();return{logEvent:(s,i,r)=>en(n,s,i,r)}}catch(n){throw v.create("interop-component-reg-failed",{reason:n})}}}to();class P{static STORAGE_KEY="playerSettings";language="en";stats={};constructor(e){e?.language&&(this.language=e.language.toLowerCase()),e?.stats&&typeof e.stats=="object"&&(this.stats={...e.stats})}static loadFromStorage(){try{const e=localStorage.getItem(P.STORAGE_KEY);if(!e)return new P;const n=JSON.parse(e);return new P(n)}catch{return new P}}toJSON(){return{language:this.language,stats:this.stats}}save(){try{localStorage.setItem(P.STORAGE_KEY,JSON.stringify(this.toJSON()))}catch{}}setLanguage(e){this.language=(e||"en").toLowerCase(),this.save()}setExerciseSuccess(e,n){const s=Math.max(0,Math.min(1,Number(n))),i=`x:${e}`,r=this.stats[i];(r===void 0||s>r)&&(this.stats[i]=s,this.save())}stars(e){const n=this.stats?.[`x:${e}`];return n===void 0?0:n===1?3:n>.5?2:n>0?1:0}}const no={apiKey:"AIzaSyCeRJx0UKqnYmhr6u_ZWyCrbU45Xb0ReIs",authDomain:"dolfin-math.firebaseapp.com",projectId:"dolfin-math",storageBucket:"dolfin-math.firebasestorage.app",messagingSenderId:"499035696239",appId:"1:499035696239:web:3a5ee2c439acd40797319a",measurementId:"G-W9DWNKS6P6"},so=At(no),io=Qt(so);console.log(io);ro("start");const ee=document.querySelector("#app");if(!ee)throw new Error("Unable to find the root #app element.");function ro(t){en(Qt(),t)}ee.classList.add("app-root");const A=P.loadFromStorage();A.save();const m=new as;m.scene.init();function q(t){const e=`./assets/${t}`;return console.log(`path: ${e}`),e}const tn=()=>{m.resize(ee.clientWidth||window.innerWidth,ee.clientHeight||window.innerHeight)};window.addEventListener("resize",tn);tn();m.start();
