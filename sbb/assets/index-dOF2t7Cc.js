(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();const ve=(e,{p1:t,p2:n,p3:o,color:i})=>{e.save(),e.fillStyle=i,e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(n.x,n.y),e.lineTo(o.x,o.y),e.closePath(),e.fill(),e.restore()},w=(e,t,n)=>Math.min(Math.max(e,t),n),we=(e,t,n,o,i,a)=>{const s=w(a,0,Math.min(o,i)/2);e.beginPath(),e.moveTo(t+s,n),e.lineTo(t+o-s,n),e.quadraticCurveTo(t+o,n,t+o,n+s),e.lineTo(t+o,n+i-s),e.quadraticCurveTo(t+o,n+i,t+o-s,n+i),e.lineTo(t+s,n+i),e.quadraticCurveTo(t,n+i,t,n+i-s),e.lineTo(t,n+s),e.quadraticCurveTo(t,n,t+s,n),e.closePath()},R=(e,t,n,o)=>{const i=o.bold?"700":"500",a=o.italic?"italic ":"";return e.font=`${a}${i} ${t}px ${n}`,e.measureText(o.text).width},V=(e,t,n,o)=>o.reduce((i,a)=>i+R(e,t,n,a),0),xe=(e,t,n,o,i)=>{const a=[];return o.forEach(s=>{let r=[];s.forEach(l=>{l.text.split(/(\s+)/).filter(c=>c.length>0).forEach(c=>{const h={...l,text:c},b=V(e,t,n,[...r,h]),m=/^\s+$/.test(c);b<=i||r.length===0?m&&r.length===0||r.push(h):(a.push(r),r=m?[]:[h])})}),a.push(r)}),a.length?a:[[]]},Se=(e,t,n,o)=>{const i=Math.max(40,t-40),a=Math.max(0,Math.min(120,(i-24)/2)),s=w(o.paddingX,0,a),r=w(o.paddingY,4,120),l=w(o.fontSize,12,200),d=`"${o.fontName}", "Segoe UI", system-ui, sans-serif`,c=l*1.2,h=w(o.textWidth,24,i-s*2),m=xe(e,l,d,o.richText??[[{text:o.text}]],h),T=m.length*c,$=h+s*2,W=T+r*2,ge=(t-$)/2,ye=(n-W)/2;return{boxX:ge,boxY:ye,boxWidth:$,boxHeight:W,lineHeight:c,lines:m,paddingX:s,paddingY:r}},Te=(e,t,n)=>{const o=`"${n.fontName}", "Segoe UI", system-ui, sans-serif`;e.textBaseline="top",e.textAlign="left",e.save(),e.fillStyle="#ffffff",we(e,t.boxX,t.boxY,t.boxWidth,t.boxHeight,n.roundness),e.fill(),e.restore(),e.fillStyle="#0b111e";const i=t.boxY+t.paddingY+n.textOffset;t.lines.forEach((a,s)=>{const r=V(e,n.fontSize,o,a);let l=t.boxX+t.boxWidth/2+n.textOffsetX-r/2;n.textAlign==="left"?l=t.boxX+t.paddingX+n.textOffsetX:n.textAlign==="right"&&(l=t.boxX+t.boxWidth-t.paddingX-r+n.textOffsetX);const d=i+s*t.lineHeight;a.forEach(c=>{const h=c.bold?"700":"500",b=c.italic?"italic ":"";e.font=`${b}${h} ${n.fontSize}px ${o}`,e.fillText(c.text,l,d);const m=R(e,n.fontSize,o,c);if(c.underline){const T=d+n.fontSize*1.05;e.beginPath(),e.moveTo(l,T),e.lineTo(l+m,T),e.lineWidth=Math.max(1,n.fontSize*.07),e.strokeStyle="#0b111e",e.stroke()}l+=m})})},Ee=(e,t,n)=>{if(n.arrowHidden)return;const o=n.arrowBase,i=n.arrowTip,a=i.x-o.x,s=i.y-o.y,r=Math.hypot(a,s);if(r<1)return;const l=-s/r,d=a/r,c=w(n.arrowBaseThickness/2,2,80),h={x:i.x,y:i.y},b={x:o.x+l*c,y:o.y+d*c},m={x:o.x-l*c,y:o.y-d*c};e.save(),e.fillStyle="#ffffff",ve(e,{p1:h,p2:b,p3:m,color:"#ffffff"}),e.restore()};class ke{container;toolbarElement;editorElement;options;boldBtn;italicBtn;underlineBtn;constructor(t){this.options={placeholder:"Start typing...",minHeight:"300px",...t},this.container=t.container,this.render(),this.attachEventListeners(),this.options.initialContent&&this.setContent(this.options.initialContent)}render(){this.container.innerHTML="";const t=document.createElement("div");t.className=`rich-editor-wrapper ${this.options.className||""}`,t.innerHTML=`
      <style>
        .rich-editor-wrapper {
          background: white;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          overflow: hidden;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
        }

        .rich-editor-toolbar {
          background: #f8f9fa;
          padding: 7px;
          border-bottom: 1px solid #e0e0e0;
          display: flex;
          gap: 8px;
        }

        .rich-editor-toolbar button {
          background: white;
          border: 1px solid #d0d0d0;
          border-radius: 4px;
          padding: 4px 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          min-width: 36px;
        }

        .rich-editor-toolbar button:hover {
          background: #667eea;
          color: white;
          border-color: #667eea;
        }

        .rich-editor-toolbar button.active {
          background: #667eea;
          color: white;
          border-color: #667eea;
        }

        .rich-editor-content {
          padding: 14px;
          min-height: ${this.options.minHeight};
          outline: none;
          font-size: 16px;
          line-height: 1.6;
          color: #333;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
          font-weight: 400;
          font-style: normal;
          text-decoration: none;
        }

        .rich-editor-content * {
          font-family: inherit;
        }

        .rich-editor-content:empty:before {
          content: '${this.options.placeholder}';
          color: #999;
          font-weight: normal;
          font-style: normal;
          text-decoration: none;
        }

        .rich-editor-content:focus {
          outline: none;
        }
      </style>
      
      <div class="rich-editor-toolbar">
        <button class="format-btn" data-format="bold" title="Bold (Ctrl+B)">
          <strong>B</strong>
        </button>
        <button class="format-btn" data-format="italic" title="Italic (Ctrl+I)">
          <em>I</em>
        </button>
        <button class="format-btn" data-format="underline" title="Underline (Ctrl+U)">
          <u>U</u>
        </button>
      </div>
      
      <div class="rich-editor-content" contenteditable="true"></div>
    `,this.container.appendChild(t),this.toolbarElement=t.querySelector(".rich-editor-toolbar"),this.editorElement=t.querySelector(".rich-editor-content"),this.boldBtn=this.toolbarElement.querySelector('[data-format="bold"]'),this.italicBtn=this.toolbarElement.querySelector('[data-format="italic"]'),this.underlineBtn=this.toolbarElement.querySelector('[data-format="underline"]')}attachEventListeners(){this.editorElement.addEventListener("keydown",t=>{if(t.ctrlKey||t.metaKey){let n=null;switch(t.key.toLowerCase()){case"b":n="bold";break;case"i":n="italic";break;case"u":n="underline";break}n&&(t.preventDefault(),this.toggleFormat(n))}}),this.editorElement.addEventListener("click",()=>{this.cleanupEmptyFormattingTags()}),this.editorElement.addEventListener("mouseup",()=>this.updateToolbar()),this.editorElement.addEventListener("keyup",()=>this.updateToolbar()),this.editorElement.addEventListener("focus",()=>this.updateToolbar()),this.editorElement.addEventListener("input",()=>{this.options.onChange&&this.options.onChange(this.getContent())}),this.toolbarElement.addEventListener("click",t=>{const o=t.target.closest(".format-btn");if(o){const i=o.dataset.format;this.toggleFormat(i),this.editorElement.focus()}})}toggleFormat(t){document.execCommand(t,!1),this.updateToolbar()}updateToolbar(){setTimeout(()=>{const t=this.getFormatState();this.boldBtn.classList.toggle("active",t.bold),this.italicBtn.classList.toggle("active",t.italic),this.underlineBtn.classList.toggle("active",t.underline),this.options.onSelectionChange&&this.options.onSelectionChange(t)},0)}getFormatState(){return{bold:document.queryCommandState("bold"),italic:document.queryCommandState("italic"),underline:document.queryCommandState("underline")}}cleanupEmptyFormattingTags(){this.editorElement.querySelectorAll("strong:empty, b:empty, em:empty, i:empty, u:empty").forEach(n=>n.remove())}getContent(){return this.editorElement.innerHTML}getPlainText(){return this.editorElement.innerText}setContent(t){this.editorElement.innerHTML=t}clear(){this.editorElement.innerHTML=""}focus(){this.editorElement.focus()}isEmpty(){return this.editorElement.innerText.trim()===""}destroy(){this.container.innerHTML=""}}const I=document.querySelector("#app");if(!I)throw new Error("App container not found");I.innerHTML=`
  <main class="layout">
    <header class="header">
      <h1>Speech Bubble Baker</h1>
      <p class="lede">
        Create a transparent-background speech bubble you can copy anywhere. Adjust the text, bubble, and arrow as you like.
      </p>
    </header>

    <section class="board">
      <div class="text-band">
        <section class="text-editor-card">
          <header class="text-editor-header">
            <div class="text-editor-headings">
              <p class="micro-eyebrow">Bubble text</p>
              <p class="text-editor-title">Write and style the words</p>
            </div>
            <span class="pill">Rich text</span>
          </header>
          <div id="text-editor"></div>
        </section>

        <aside class="text-side-panel">
          <label class="field align-field">
            <div class="field-label">
              <span>Text alignment</span>
            </div>
            <select id="align-select">
              <option value="left">Left</option>
              <option value="center" selected>Center</option>
              <option value="right">Right</option>
            </select>
          </label>

          <label class="field font-field">
            <div class="field-label">
              <span>Speech bubble font</span>
            </div>
            <div class="font-picker">
              <span class="value-pill" id="current-font-label"></span>
              <button id="font-picker-button" class="font-picker-button" type="button">
                Choose font
              </button>
            </div>
          </label>

          <div class="action-card">
            <button id="copy-button" type="button">Copy canvas</button>
            <p id="status" class="status" role="status" aria-live="polite"></p>
          </div>
        </aside>
      </div>

      <div class="workspace">
        <div class="controls">
          <div class="control-grid">
            <label class="field">
              <div class="field-label">
                <span>Font size</span>
                <span class="value-pill" id="font-size-value"></span>
              </div>
              <input id="font-size" type="range" min="18" max="96" step="1" />
            </label>

            <label class="field">
              <div class="field-label">
                <span>Text area width</span>
                <span class="value-pill" id="text-width-value"></span>
              </div>
              <input id="text-width" type="range" min="160" max="760" step="10" />
            </label>

            <label class="field">
              <div class="field-label">
                <span>Text vertical offset</span>
                <span class="value-pill" id="text-offset-value"></span>
              </div>
              <input id="text-offset" type="range" min="-200" max="200" step="1" />
            </label>

            <label class="field">
              <div class="field-label">
                <span>Text horizontal offset</span>
                <span class="value-pill" id="text-offset-x-value"></span>
              </div>
              <input id="text-offset-x" type="range" min="-200" max="200" step="1" />
            </label>

            <label class="field">
              <div class="field-label">
                <span>Text vertical padding</span>
                <span class="value-pill" id="padding-vertical-value"></span>
              </div>
              <input id="padding-vertical" type="range" min="8" max="60" step="1" />
            </label>

            <label class="field">
              <div class="field-label">
                <span>Text horizontal padding</span>
                <span class="value-pill" id="padding-horizontal-value"></span>
              </div>
              <input id="padding-horizontal" type="range" min="0" max="120" step="1" />
            </label>

            <label class="field">
              <div class="field-label">
                <span>Corner roundness</span>
                <span class="value-pill" id="roundness-value"></span>
              </div>
              <input id="roundness" type="range" min="0" max="120" step="2" />
            </label>

            <label class="field">
              <div class="field-label">
                <span>Arrow base thickness</span>
                <span class="value-pill" id="arrow-thickness-value"></span>
              </div>
              <input id="arrow-thickness" type="range" min="4" max="80" step="1" />
            </label>

            <label class="field checkbox-field">
              <span class="field-label">Hide arrow</span>
              <input id="arrow-hidden" type="checkbox" />
            </label>
          </div>
        </div>

        <div class="canvas-shell">
          <div class="canvas-wrapper" id="canvas-wrapper">
            <canvas id="artboard" width="800" height="800" aria-label="Canvas with centered speech bubble"></canvas>
            <div class="token-layer" id="token-layer" aria-hidden="true">
              <button class="token base-token" id="arrow-base-token" aria-label="Arrow base handle" type="button"></button>
              <button class="token tip-token" id="arrow-tip-token" aria-label="Arrow tip handle" type="button"></button>
            </div>
          </div>
          <span class="size-tag">800 x 800</span>
          Move the red rectangles to position the arrow.
        </div>
      </div>
    </section>
    <footer class="footer">©2025, Meanwhale</footer>
  </main>
  <div class="modal-backdrop" id="font-modal" aria-hidden="true" tabindex="-1">
    <div
      class="modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="font-modal-title"
      tabindex="-1"
    >
      <header class="modal-header">
        <div>
          <p class="micro-eyebrow">Free via Google Fonts</p>
          <h2 class="modal-title" id="font-modal-title">Pick a font style</h2>
        </div>
        <button id="close-font-modal" class="icon-button" type="button" aria-label="Close font picker">
          ×
        </button>
      </header>
      <div class="font-list" id="font-list"></div>
    </div>
  </div>
`;const x=document.querySelector("main.layout"),F=document.querySelector("#canvas-wrapper"),u=document.querySelector("#artboard"),L=document.querySelector("#copy-button"),A=document.querySelector("#status"),Y=document.querySelector("#text-editor"),U=document.querySelector("#font-size"),D=document.querySelector("#text-width"),_=document.querySelector("#roundness"),G=document.querySelector("#padding-vertical"),K=document.querySelector("#padding-horizontal"),j=document.querySelector("#arrow-thickness"),J=document.querySelector("#text-offset"),Q=document.querySelector("#text-offset-x"),B=document.querySelector("#arrow-hidden"),y=document.querySelector("#arrow-base-token"),v=document.querySelector("#arrow-tip-token"),Z=document.querySelector("#font-size-value"),ee=document.querySelector("#text-width-value"),te=document.querySelector("#roundness-value"),ne=document.querySelector("#padding-vertical-value"),oe=document.querySelector("#padding-horizontal-value"),ie=document.querySelector("#arrow-thickness-value"),ae=document.querySelector("#text-offset-value"),se=document.querySelector("#text-offset-x-value"),q=document.querySelector("#align-select"),z=document.querySelector("#font-picker-button"),f=document.querySelector("#font-modal"),M=document.querySelector("#font-list"),re=document.querySelector("#close-font-modal"),O=document.querySelector("#current-font-label");if(!x||!F||!u||!L||!A||!Y||!U||!D||!_||!G||!K||!j||!J||!Q||!B||!y||!v||!Z||!ee||!te||!ne||!oe||!ie||!ae||!se||!q||!z||!f||!M||!re||!O)throw new Error("Page did not render expected elements");const E=u.getContext("2d");if(!E)throw new Error("Canvas 2D context is unavailable");const Le=()=>{F.style.setProperty("--canvas-aspect",`${u.width} / ${u.height}`),F.style.setProperty("--canvas-max-width",`${u.width}px`)};Le();const k=e=>Number.parseFloat(e)||0,le="Hello world!",Ce="Bangers",Be=["Roboto","Open Sans","Lato","Poppins","Archivo","Quicksand","Bubbler One","Bubblegum Sans","Comic Neue","Patrick Hand","Patrick Hand SC","Handlee","Kalam","Delius","Caveat","Indie Flower","Just Another Hand","Shadows Into Light","Shadows Into Light Two","Waiting for the Sunrise","Sue Ellen Francisco","Short Stack","DJB Chalk It Up","Bangers","Permanent Marker","Concert One","Baloo 2","Lilita One","Luckiest Guy","Titan One","Sniglet","Chewy","Rock Salt","Amatic SC","Gloria Hallelujah","Fredericka the Great","Modak","Sriracha","Pacifico","Great Vibes","Euphoria Script","Yesteryear","BhuTuka Expanded One"],qe={"Baloo 2":"नमस्ते दुनिया",Kalam:"नमस्ते दुनिया","BhuTuka Expanded One":"नमस्ते दुनिया",Sriracha:"สวัสดีชาวโลก"},Me=e=>{x?.style.setProperty("--bubble-font-family",`"${e}", 'Segoe UI', system-ui, sans-serif`)},He=e=>{const t=document.createElement("div");t.innerHTML=e||"";const n=[];let o=[];const i=(r=!1)=>{(r||o.length)&&(n.push(o),o=[])},a=(r,l)=>{const d=r.replace(/\u00a0/g," ").replace(/\n/g," ");d.length&&o.push({text:d,bold:l.bold,italic:l.italic,underline:l.underline})},s=(r,l)=>{if(r.nodeType===Node.TEXT_NODE){a(r.textContent??"",l);return}if(!(r instanceof HTMLElement))return;const d=r.tagName,c={bold:l.bold||d==="B"||d==="STRONG",italic:l.italic||d==="I"||d==="EM",underline:l.underline||d==="U"};if(d==="BR"){i(!0);return}const h=d==="DIV"||d==="P"||d==="LI";h&&o.length&&i(!0),Array.from(r.childNodes).forEach(b=>s(b,c)),h&&i(!0)};for(Array.from(t.childNodes).forEach(r=>s(r,{bold:!1,italic:!1,underline:!1})),o.length&&n.push(o);n.length>1&&n[n.length-1].length===0;)n.pop();return n.length?n:[[]]},Fe=async e=>{if(!("fonts"in document))return;const t=document.fonts;"load"in t&&await t.load(`16px "${e}"`)},de=async e=>{p.fontName=e,Me(e),await Fe(e),S(),O.textContent=e,he(e)},ce=e=>{p.textAlign=e,S()},P=()=>{if(!x)return;const e=window.getComputedStyle(I),t=k(e.paddingLeft)+k(e.paddingRight),n=k(e.paddingTop)+k(e.paddingBottom);x.style.setProperty("--layout-scale","1");const{width:o,height:i}=x.getBoundingClientRect(),a=Math.max(window.innerWidth-t,0),s=Math.max(window.innerHeight-n,0);if(!o||!i)return;const r=Math.min(a/o,s/i,1);x.style.setProperty("--layout-scale",r.toString())};P();const p={text:le,fontName:Ce,fontSize:44,textWidth:440,roundness:22,paddingX:18,paddingY:18,arrowBase:{x:400,y:400},arrowTip:{x:400,y:620},arrowBaseThickness:14,textOffset:0,textOffsetX:0,textAlign:"center",arrowHidden:!1},S=()=>{E.clearRect(0,0,u.width,u.height);const e=Se(E,u.width,u.height,p);Ee(E,e,p),Te(E,e,p),X()},N=(e,t)=>{e.style.left=`${t.x/u.width*100}%`,e.style.top=`${t.y/u.height*100}%`},X=()=>{!y||!v||p.arrowHidden||(N(y,p.arrowBase),N(v,p.arrowTip))},pe=e=>{if(!y||!v)return;const t=e?"block":"none";y.style.display=t,v.style.display=t},C=e=>{A&&(A.textContent=e)},Ae=e=>{const{width:t,height:n}=e,o=e.getContext("2d");if(!o)throw new Error("Canvas 2D context is unavailable");const{data:i}=o.getImageData(0,0,t,n);let a=t,s=n,r=-1,l=-1;for(let d=0;d<n;d+=1)for(let c=0;c<t;c+=1)i[(d*t+c)*4+3]!==0&&(c<a&&(a=c),d<s&&(s=d),c>r&&(r=c),d>l&&(l=d));return r===-1||l===-1?null:{x:a,y:s,width:r-a+1,height:l-s+1}},Ie=()=>{const e=Ae(u);if(!e)return u;const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");if(!n)throw new Error("Canvas 2D context is unavailable");return n.drawImage(u,e.x,e.y,e.width,e.height,0,0,e.width,e.height),t},ze=e=>new Promise((t,n)=>{e.toBlob(o=>{o?t(o):n(new Error("Unable to create image from canvas"))},"image/png")}),Oe=async()=>{if(!("clipboard"in navigator)||typeof ClipboardItem>"u")throw new Error("Clipboard API is not available in this browser");const e=Ie(),t=await ze(e);await navigator.clipboard.write([new ClipboardItem({[t.type]:t})])},Pe=(e,t,n)=>{e.textContent=`${Math.round(t)}${n}`},g=(e,t,n,o)=>{const i=()=>{p[n]=Number(e.value),Pe(t,p[n],o),S()};e.value=String(p[n]),i(),e.addEventListener("input",i)};g(U,Z,"fontSize"," px");g(D,ee,"textWidth"," px");g(J,ae,"textOffset"," px");g(Q,se,"textOffsetX"," px");g(G,ne,"paddingY"," px");g(K,oe,"paddingX"," px");g(_,te,"roundness"," px");g(j,ie,"arrowBaseThickness"," px");B.checked=p.arrowHidden;B.addEventListener("change",()=>{p.arrowHidden=B.checked,pe(!p.arrowHidden),S()});pe(!p.arrowHidden);const ue=e=>t=>{t.preventDefault(),(e==="arrowBase"?y:v).setPointerCapture(t.pointerId);const o=a=>{const s=u.getBoundingClientRect(),r=(a.clientX-s.left)/s.width*u.width,l=(a.clientY-s.top)/s.height*u.height,d={x:Math.min(Math.max(r,0),u.width),y:Math.min(Math.max(l,0),u.height)};p[e]=d,X(),S()},i=()=>{window.removeEventListener("pointermove",o),window.removeEventListener("pointerup",i),window.removeEventListener("pointercancel",i)};window.addEventListener("pointermove",o),window.addEventListener("pointerup",i),window.addEventListener("pointercancel",i)};y.addEventListener("pointerdown",ue("arrowBase"));v.addEventListener("pointerdown",ue("arrowTip"));const he=e=>{Array.from(M.querySelectorAll(".font-option")).forEach(t=>{const n=t.dataset.fontName===e;t.classList.toggle("active",n),t.setAttribute("aria-pressed",n?"true":"false")})},Xe=()=>{M.innerHTML="",Be.forEach(e=>{const t=qe[e]??"The quick brown fox",n=document.createElement("button");n.type="button",n.className="font-option",n.dataset.fontName=e,n.setAttribute("aria-pressed","false"),n.innerHTML=`
      <span class="font-option-name">${e}</span>
      <span class="font-option-sample" style="font-family: '${e}', 'Segoe UI', system-ui, sans-serif;">
        ${t}
      </span>
    `,n.addEventListener("click",()=>{de(e),H()}),M.appendChild(n)}),he(p.fontName)},fe=e=>{e.key==="Escape"&&H()},me=e=>{e.target===f&&H()},$e=()=>{f.classList.add("open"),f.removeAttribute("aria-hidden"),f.addEventListener("keydown",fe),f.addEventListener("click",me),f.focus()},H=()=>{f.classList.remove("open"),f.setAttribute("aria-hidden","true"),f.removeEventListener("keydown",fe),f.removeEventListener("click",me),z.focus()};z.addEventListener("click",$e);re.addEventListener("click",H);const be=e=>{const t=He(e);p.richText=t,p.text=t.map(n=>n.map(o=>o.text).join("")).join(`
`),S()},We=new ke({container:Y,placeholder:"Type what the bubble should say...",initialContent:`${le}`,minHeight:"174px",className:"bubble-text-editor",onChange:be});be(We.getContent());P();O.textContent=p.fontName;Xe();de(p.fontName);q.value=p.textAlign;q.addEventListener("change",()=>{const e=q.value;ce(e)});ce(p.textAlign);const Ne=()=>{X(),P()};window.addEventListener("resize",Ne);C("Ready to copy");L.addEventListener("click",async()=>{L.disabled=!0,C("Copying to clipboard...");try{await Oe(),C("Copied to clipboard")}catch(e){console.error(e);const t=e instanceof Error?e.message:"Unexpected error while copying";C(`Copy failed: ${t}`)}finally{L.disabled=!1}});
