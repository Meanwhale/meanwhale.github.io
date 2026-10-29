(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();const dt=(t,{p1:e,p2:n,p3:o,color:s})=>{t.save(),t.fillStyle=s,t.beginPath(),t.moveTo(e.x,e.y),t.lineTo(n.x,n.y),t.lineTo(o.x,o.y),t.closePath(),t.fill(),t.restore()},T=(t,e,n)=>Math.min(Math.max(t,e),n),ut=(t,e,n,o,s,r)=>{const i=T(r,0,Math.min(o,s)/2);t.beginPath(),t.moveTo(e+i,n),t.lineTo(e+o-i,n),t.quadraticCurveTo(e+o,n,e+o,n+i),t.lineTo(e+o,n+s-i),t.quadraticCurveTo(e+o,n+s,e+o-i,n+s),t.lineTo(e+i,n+s),t.quadraticCurveTo(e,n+s,e,n+s-i),t.lineTo(e,n+i),t.quadraticCurveTo(e,n,e+i,n),t.closePath()},he=(t,e,n,o)=>{const s=o.bold?"700":"500",r=o.italic?"italic ":"";return t.font=`${r}${s} ${e}px ${n}`,t.measureText(o.text).width},be=(t,e,n,o)=>o.reduce((s,r)=>s+he(t,e,n,r),0),pt=(t,e,n,o,s)=>{const r=[];return o.forEach(i=>{let a=[];i.forEach(l=>{l.text.split(/(\s+)/).filter(u=>u.length>0).forEach(u=>{const p={...l,text:u},b=be(t,e,n,[...a,p]),v=/^\s+$/.test(u);b<=s||a.length===0?v&&a.length===0||a.push(p):(r.push(a),a=v?[]:[p])})}),r.push(a)}),r.length?r:[[]]},ht=(t,e,n,o)=>{const s=Math.max(40,e-40),r=Math.max(0,Math.min(120,(s-24)/2)),i=T(o.paddingX,0,r),a=T(o.paddingY,4,120),l=T(o.fontSize,12,200),c=`"${o.fontName}", "Segoe UI", system-ui, sans-serif`,u=l*1.2,p=T(o.textWidth,24,s-i*2),v=pt(t,l,c,o.richText??[[{text:o.text}]],p),z=v.length*u,H=p+i*2,M=z+a*2,lt=(e-H)/2,ct=(n-M)/2;return{boxX:lt,boxY:ct,boxWidth:H,boxHeight:M,lineHeight:u,lines:v,paddingX:i,paddingY:a}},bt=(t,e,n)=>{const o=`"${n.fontName}", "Segoe UI", system-ui, sans-serif`,s=n.textColor||"#0b111e",r=n.bubbleColor||"#ffffff";t.textBaseline="top",t.textAlign="left",t.save(),t.fillStyle=r,ut(t,e.boxX,e.boxY,e.boxWidth,e.boxHeight,n.roundness),t.fill(),t.restore(),t.fillStyle=s;const i=e.boxY+e.paddingY+n.textOffset;e.lines.forEach((a,l)=>{const c=be(t,n.fontSize,o,a);let u=e.boxX+e.boxWidth/2+n.textOffsetX-c/2;n.textAlign==="left"?u=e.boxX+e.paddingX+n.textOffsetX:n.textAlign==="right"&&(u=e.boxX+e.boxWidth-e.paddingX-c+n.textOffsetX);const p=i+l*e.lineHeight;a.forEach(b=>{const v=b.bold?"700":"500",z=b.italic?"italic ":"";t.font=`${z}${v} ${n.fontSize}px ${o}`,t.fillText(b.text,u,p);const H=he(t,n.fontSize,o,b);if(b.underline){const M=p+n.fontSize*1.05;t.beginPath(),t.moveTo(u,M),t.lineTo(u+H,M),t.lineWidth=Math.max(1,n.fontSize*.07),t.strokeStyle=s,t.stroke()}u+=H})})},ft=(t,e,n)=>{if(n.arrowHidden)return;const o=n.arrowBase,s=n.arrowTip,r=s.x-o.x,i=s.y-o.y,a=Math.hypot(r,i);if(a<1)return;const l=-i/a,c=r/a,u=T(n.arrowBaseThickness/2,2,80),p={x:s.x,y:s.y},b={x:o.x+l*u,y:o.y+c*u},v={x:o.x-l*u,y:o.y-c*u};t.save(),t.fillStyle=n.bubbleColor||"#ffffff",dt(t,{p1:p,p2:b,p3:v,color:n.bubbleColor||"#ffffff"}),t.restore()};class gt{container;toolbarElement;editorElement;options;boldBtn;italicBtn;underlineBtn;constructor(e){this.options={placeholder:"Start typing...",minHeight:"300px",...e},this.container=e.container,this.render(),this.attachEventListeners(),this.options.initialContent&&this.setContent(this.options.initialContent)}render(){this.container.innerHTML="";const e=document.createElement("div");e.className=`rich-editor-wrapper ${this.options.className||""}`,e.innerHTML=`
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
    `,this.container.appendChild(e),this.toolbarElement=e.querySelector(".rich-editor-toolbar"),this.editorElement=e.querySelector(".rich-editor-content"),this.boldBtn=this.toolbarElement.querySelector('[data-format="bold"]'),this.italicBtn=this.toolbarElement.querySelector('[data-format="italic"]'),this.underlineBtn=this.toolbarElement.querySelector('[data-format="underline"]')}attachEventListeners(){this.editorElement.addEventListener("keydown",e=>{if(e.ctrlKey||e.metaKey){let n=null;switch(e.key.toLowerCase()){case"b":n="bold";break;case"i":n="italic";break;case"u":n="underline";break}n&&(e.preventDefault(),this.toggleFormat(n))}}),this.editorElement.addEventListener("click",()=>{this.cleanupEmptyFormattingTags()}),this.editorElement.addEventListener("mouseup",()=>this.updateToolbar()),this.editorElement.addEventListener("keyup",()=>this.updateToolbar()),this.editorElement.addEventListener("focus",()=>this.updateToolbar()),this.editorElement.addEventListener("input",()=>{this.options.onChange&&this.options.onChange(this.getContent())}),this.toolbarElement.addEventListener("click",e=>{const o=e.target.closest(".format-btn");if(o){const s=o.dataset.format;this.toggleFormat(s),this.editorElement.focus()}})}toggleFormat(e){document.execCommand(e,!1),this.updateToolbar()}updateToolbar(){setTimeout(()=>{const e=this.getFormatState();this.boldBtn.classList.toggle("active",e.bold),this.italicBtn.classList.toggle("active",e.italic),this.underlineBtn.classList.toggle("active",e.underline),this.options.onSelectionChange&&this.options.onSelectionChange(e)},0)}getFormatState(){return{bold:document.queryCommandState("bold"),italic:document.queryCommandState("italic"),underline:document.queryCommandState("underline")}}cleanupEmptyFormattingTags(){this.editorElement.querySelectorAll("strong:empty, b:empty, em:empty, i:empty, u:empty").forEach(n=>n.remove())}getContent(){return this.editorElement.innerHTML}getPlainText(){return this.editorElement.innerText}setContent(e){this.editorElement.innerHTML=e}clear(){this.editorElement.innerHTML=""}focus(){this.editorElement.focus()}isEmpty(){return this.editorElement.innerText.trim()===""}destroy(){this.container.innerHTML=""}}function mt(t,e,n){e/=100,n/=100;const o=i=>(i+t/30)%12,s=e*Math.min(n,1-n),r=i=>n-s*Math.max(-1,Math.min(o(i)-3,9-o(i),1));return{r:Math.round(255*r(0)),g:Math.round(255*r(8)),b:Math.round(255*r(4))}}function yt(t,e,n){const o=s=>s.toString(16).padStart(2,"0");return`#${o(t)}${o(e)}${o(n)}`.toUpperCase()}class F{static stylesInjected=!1;modalElement;callbacks;triggeredBy=null;currentH=0;currentS=100;currentL=50;isHueDragging=!1;isSlDragging=!1;RING_THICKNESS=32;hueRing;hueIndicator;slSquare;slIndicator;colorPreview;hexOutput;hslOutput;rgbOutput;quickSelectGrid;okButton;closeButton;constructor(e={}){this.callbacks=e,this.injectStyles(),this.modalElement=this.createModalStructure(),document.body.appendChild(this.modalElement),this.cacheDomElements(),this.addEventListeners(),this.generateQuickSelectGrid(),this.initColor()}injectStyles(){if(F.stylesInjected)return;const e=document.createElement("style");e.id="color-picker-modal-styles",e.textContent=`
      .cp-backdrop {
        position: fixed;
        inset: 0;
        display: none;
        align-items: center;
        justify-content: center;
        padding: 24px;
        background: rgba(0, 0, 0, 0.55);
        z-index: 9999;
      }

      .cp-modal {
        width: min(960px, 92vw);
        display: flex;
        flex-direction: column;
        gap: 16px;
        background: linear-gradient(135deg, rgba(15, 21, 36, 0.94), rgba(12, 16, 28, 0.94));
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 18px;
        padding: 16px;
        box-shadow: 0 30px 120px rgba(0, 0, 0, 0.45);
        color: #e7edf6;
        font-family: 'Segoe UI', 'Inter', system-ui, -apple-system, sans-serif;
      }

      .cp-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
      }

      .cp-title {
        margin: 0;
        letter-spacing: -0.01em;
      }

      .cp-eyebrow {
        margin: 0;
        text-transform: uppercase;
        letter-spacing: 0.18em;
        font-size: 11px;
        color: #9cc0ff;
      }

      .cp-icon-button {
        width: 38px;
        height: 38px;
        padding: 0;
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.08);
        color: #e7edf6;
        border: 1px solid rgba(255, 255, 255, 0.12);
        cursor: pointer;
      }

      .cp-icon-button:hover {
        background: #5ab0ff;
        color: #0a0c11;
      }

      .cp-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 14px;
        align-items: start;
      }

      .cp-card {
        display: grid;
        gap: 10px;
        padding: 12px;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 14px;
      }

      .cp-card h3 {
        margin: 0;
        font-size: 1rem;
        color: #cfe3ff;
      }

      .cp-center {
        align-items: center;
        text-align: center;
      }

      .cp-hue-ring {
        width: 220px;
        height: 220px;
        border-radius: 50%;
        position: relative;
        cursor: crosshair;
        background: conic-gradient(hsl(0, 100%, 50%), hsl(60, 100%, 50%), hsl(120, 100%, 50%),
                                   hsl(180, 100%, 50%), hsl(240, 100%, 50%), hsl(300, 100%, 50%), hsl(360, 100%, 50%));
        border: 1px solid rgba(255, 255, 255, 0.14);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
        margin: 0 auto;
      }

      .cp-hue-hole {
        position: absolute;
        inset: 32px;
        border-radius: 50%;
        background: #0b111e;
        box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
      }

      .cp-indicator {
        position: absolute;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        border: 3px solid #0b111e;
        box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.8), 0 4px 12px rgba(0, 0, 0, 0.35);
        transform: translate(-50%, -50%);
        pointer-events: none;
      }

      .cp-sl-square {
        width: 220px;
        height: 220px;
        position: relative;
        cursor: crosshair;
        border-radius: 12px;
        background-color: hsl(var(--current-hue, 0), 100%, 50%);
        background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.85)), linear-gradient(to right, #fff, rgba(255, 255, 255, 0));
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.08);
        overflow: hidden;
        margin: 0 auto;
      }

      .cp-preview {
        height: 60px;
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.12);
        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.28);
      }

      .cp-readout {
        display: grid;
        gap: 6px;
      }

      .cp-label {
        display: grid;
        gap: 4px;
        font-size: 0.9rem;
        color: #cfe3ff;
      }

      .cp-input {
        width: 100%;
        padding: 6px 8px;
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.12);
        background: rgba(0, 0, 0, 0.35);
        color: #e7edf6;
        outline: none;
      }

      .cp-input:focus {
        border-color: #5ab0ff;
        box-shadow: 0 0 0 2px rgba(90, 176, 255, 0.3);
      }

      .cp-palette {
        display: grid;
        gap: 8px;
        justify-items: center;
      }

      .cp-meta {
        color: #9cc0ff;
        font-size: 0.85rem;
      }

      .cp-quick-grid {
        width: 328px;
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        grid-auto-rows: 40px;
        gap: 2px;
        padding: 6px;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.08);
        box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.02);
      }

      .cp-swatch {
        width: 100%;
        height: 100%;
        border-radius: 8px;
        border: 1px solid rgba(255, 255, 255, 0.12);
        cursor: pointer;
        position: relative;
        transition: transform 90ms ease, box-shadow 120ms ease, border-color 120ms ease;
      }

      .cp-swatch:hover {
        transform: scale(1.08);
        box-shadow: 0 14px 32px rgba(0, 0, 0, 0.45);
        border-color: rgba(255, 255, 255, 0.2);
        z-index: 2;
      }

      .cp-actions {
        display: flex;
        justify-content: flex-end;
      }

      .cp-actions button {
        min-width: 140px;
      }

      @media (max-width: 640px) {
        .cp-grid {
          grid-template-columns: 1fr;
        }

        .cp-hue-ring,
        .cp-sl-square {
          width: 200px;
          height: 200px;
        }
      }
    `,document.head.appendChild(e),F.stylesInjected=!0}createModalStructure(){const e=document.createElement("div");return e.id="colorPickerModal",e.className="cp-backdrop",e.innerHTML=`
      <div id="colorPickerContent" class="cp-modal" role="dialog" aria-modal="true" aria-labelledby="cp-title">
        <header class="cp-header">
          <div>
            <p class="cp-eyebrow">Palette</p>
            <h2 class="cp-title" id="cp-title">Pick a color</h2>
          </div>
          <button id="closeButton" class="cp-icon-button" type="button" aria-label="Close color picker">×</button>
        </header>

        <div class="cp-grid">
          <div class="cp-card cp-center">
            <h3>Hue</h3>
            <div id="hueRing" class="cp-hue-ring">
              <div class="cp-hue-hole"></div>
              <div id="hueIndicator" class="cp-indicator"></div>
            </div>
          </div>

          <div class="cp-card cp-center">
            <h3>Saturation & Light</h3>
            <div id="slSquare" class="cp-sl-square">
              <div id="slIndicator" class="cp-indicator"></div>
            </div>
          </div>

          <div class="cp-card cp-readout">
            <h3>Selected</h3>
            <div id="colorPreview" class="cp-preview"></div>
            <label class="cp-label">
              <span>HEX</span>
              <input type="text" id="hexOutput" class="cp-input" readonly>
            </label>
            <label class="cp-label">
              <span>HSL</span>
              <input type="text" id="hslOutput" class="cp-input" readonly>
            </label>
            <label class="cp-label">
              <span>RGB</span>
              <input type="text" id="rgbOutput" class="cp-input" readonly>
            </label>
          </div>
        </div>

        <div class="cp-palette">
          <h3>Quick palette</h3>
          <div class="cp-meta">High saturation left · Soft saturation right</div>
          <div id="quickSelectGrid" class="cp-quick-grid"></div>
        </div>

        <div class="cp-actions">
          <button id="okButton" type="button">Use color</button>
        </div>
      </div>
    `,e}cacheDomElements(){const e=this.modalElement.querySelector("#colorPickerContent");this.hueRing=e.querySelector("#hueRing"),this.hueIndicator=e.querySelector("#hueIndicator"),this.slSquare=e.querySelector("#slSquare"),this.slIndicator=e.querySelector("#slIndicator"),this.colorPreview=e.querySelector("#colorPreview"),this.hexOutput=e.querySelector("#hexOutput"),this.hslOutput=e.querySelector("#hslOutput"),this.rgbOutput=e.querySelector("#rgbOutput"),this.quickSelectGrid=e.querySelector("#quickSelectGrid"),this.okButton=e.querySelector("#okButton"),this.closeButton=e.querySelector("#closeButton")}getColorData(){const e=mt(this.currentH,this.currentS,this.currentL);return{hex:yt(e.r,e.g,e.b),rgb:e,hsl:{h:Math.round(this.currentH),s:Math.round(this.currentS),l:Math.round(this.currentL)},inputElement:this.triggeredBy}}updateColor(e=!0){const n=this.getColorData();this.modalElement.style.setProperty("--current-hue",String(this.currentH)),this.modalElement.style.setProperty("--current-hex",n.hex),this.colorPreview.style.backgroundColor=n.hex,this.hexOutput.value=n.hex,this.hslOutput.value=`${n.hsl.h}, ${n.hsl.s}%, ${n.hsl.l}%`,this.rgbOutput.value=`${n.rgb.r}, ${n.rgb.g}, ${n.rgb.b}`,this.slSquare.style.backgroundColor=`hsl(${this.currentH}, 100%, 50%)`,this.slIndicator.style.backgroundColor=n.hex,this.hueIndicator.style.backgroundColor=`hsl(${this.currentH}, 100%, 50%)`,e&&this.callbacks.onColorSelect&&this.callbacks.onColorSelect(n)}handleHueInteraction(e,n){const o=this.hueRing.getBoundingClientRect(),s=e-o.left,r=n-o.top,i=o.width/2,a=o.height/2,l=Math.atan2(r-a,s-i);let c=l*180/Math.PI+90;c<0&&(c+=360),this.currentH=c%360;const u=i-this.RING_THICKNESS/2,p=i+u*Math.cos(l),b=a+u*Math.sin(l);this.hueIndicator.style.left=`${p}px`,this.hueIndicator.style.top=`${b}px`,this.updateColor()}handleSlInteraction(e,n){const o=this.slSquare.getBoundingClientRect();let s=e-o.left,r=n-o.top;s=Math.max(0,Math.min(s,o.width)),r=Math.max(0,Math.min(r,o.height));const i=100-r/o.height*100,a=s/o.width*100,l=i/100,c=a/100,u=l*(1-c/2),p=u===0||u===1?0:(l-u)/Math.min(u,1-u);this.currentS=p*100,this.currentL=u*100,this.currentS>100&&(this.currentS=100),this.slIndicator.style.left=`${s}px`,this.slIndicator.style.top=`${r}px`,this.updateColor()}handleClose=()=>{this.modalElement.style.display="none",this.triggeredBy=null,this.callbacks.onClose&&this.callbacks.onClose()};handleCancel=()=>{const e=this.getColorData();this.callbacks.onCancel&&this.callbacks.onCancel(e),this.handleClose()};handleOk=()=>{const e=this.getColorData();this.callbacks.onOk&&this.callbacks.onOk(e),this.handleClose()};generateQuickSelectGrid(){const n=Array.from({length:8},(l,c)=>Math.round(45*c)),o=40,s=70,r=[20,40,60,80],i=[30,50,70,90];n.forEach(l=>{r.forEach(c=>{this.quickSelectGrid.appendChild(this.createSwatch(l,s,c))}),i.forEach(c=>{this.quickSelectGrid.appendChild(this.createSwatch(l,o,c))})}),[5,15,25,35,65,75,85,95].forEach(l=>{this.quickSelectGrid.appendChild(this.createSwatch(0,0,l))})}createSwatch(e,n,o){const s=document.createElement("div");return s.className="cp-swatch",s.style.backgroundColor=`hsl(${e}, ${n}%, ${o}%)`,s.title=`hsl(${e}, ${n}%, ${o}%)`,s.addEventListener("click",()=>{this.setHsl(e,n,o)}),s}addEventListeners(){this.okButton.addEventListener("click",this.handleOk),this.closeButton.addEventListener("click",this.handleCancel),this.modalElement.addEventListener("click",e=>{e.target===this.modalElement&&this.handleClose()}),this.hueRing.addEventListener("mousedown",e=>{e.preventDefault(),this.isHueDragging=!0,this.handleHueInteraction(e.clientX,e.clientY)}),document.addEventListener("mousemove",e=>{this.isHueDragging&&this.handleHueInteraction(e.clientX,e.clientY)}),document.addEventListener("mouseup",()=>{this.isHueDragging=!1}),this.slSquare.addEventListener("mousedown",e=>{e.preventDefault(),this.isSlDragging=!0,this.handleSlInteraction(e.clientX,e.clientY)}),document.addEventListener("mousemove",e=>{this.isSlDragging&&this.handleSlInteraction(e.clientX,e.clientY)}),document.addEventListener("mouseup",()=>{this.isSlDragging=!1}),this.hueRing.addEventListener("touchstart",e=>{e.preventDefault(),this.isHueDragging=!0,this.handleHueInteraction(e.touches[0].clientX,e.touches[0].clientY)}),document.addEventListener("touchmove",e=>{this.isHueDragging&&e.touches.length>0&&this.handleHueInteraction(e.touches[0].clientX,e.touches[0].clientY)}),document.addEventListener("touchend",()=>{this.isHueDragging=!1}),this.slSquare.addEventListener("touchstart",e=>{e.preventDefault(),this.isSlDragging=!0,this.handleSlInteraction(e.touches[0].clientX,e.touches[0].clientY)}),document.addEventListener("touchmove",e=>{this.isSlDragging&&e.touches.length>0&&this.handleSlInteraction(e.touches[0].clientX,e.touches[0].clientY)}),document.addEventListener("touchend",()=>{this.isSlDragging=!1})}initColor(){this.setHsl(0,100,50,!1)}show(e=null){this.triggeredBy=e,this.modalElement.style.display="flex",this.updateIndicatorsPosition()}setHsl(e,n,o,s=!0){this.currentH=e,this.currentS=n,this.currentL=o,this.updateColor(s),this.updateIndicatorsPosition()}updateIndicatorsPosition(){const n=this.hueRing.getBoundingClientRect().width/2,o=n-this.RING_THICKNESS/2,s=(this.currentH-90)*(Math.PI/180);this.hueIndicator.style.left=`${n+o*Math.cos(s)}px`,this.hueIndicator.style.top=`${n+o*Math.sin(s)}px`;const r=this.slSquare.getBoundingClientRect(),i=this.currentL/100,a=this.currentS/100;let l,c;i===0?(l=0,c=0):i===1?(l=1,c=0):a===0?(l=i,c=0):(l=i+a*Math.min(i,1-i),c=2*(1-i/l)),this.slIndicator.style.left=`${c*r.width}px`,this.slIndicator.style.top=`${r.height-l*r.height}px`}}const fe="speech-bubble-baker.presets",ge=1,me=80,W=t=>({fontName:t.fontName,textColor:t.textColor,bubbleColor:t.bubbleColor,fontSize:t.fontSize,textWidth:t.textWidth,roundness:t.roundness,paddingX:t.paddingX,paddingY:t.paddingY,arrowBase:{...t.arrowBase},arrowTip:{...t.arrowTip},arrowBaseThickness:t.arrowBaseThickness,textOffset:t.textOffset,textOffsetX:t.textOffsetX,textAlign:t.textAlign,arrowHidden:t.arrowHidden}),q=t=>t.trim().toLowerCase(),Y=t=>typeof t=="object"&&t!==null&&!Array.isArray(t),K=(t,e,n)=>typeof t=="number"&&Number.isFinite(t)&&t>=e&&t<=n,S=(t,e,n,o=1)=>K(t,e,n)&&Number.isInteger((t-e)/o),de=t=>Y(t)&&K(t.x,0,800)&&K(t.y,0,800),vt=(t,e)=>Y(t)?typeof t.fontName=="string"&&e.includes(t.fontName)&&typeof t.textColor=="string"&&/^#[0-9a-f]{6}$/i.test(t.textColor)&&typeof t.bubbleColor=="string"&&/^#[0-9a-f]{6}$/i.test(t.bubbleColor)&&S(t.fontSize,18,96)&&S(t.textWidth,160,760,10)&&S(t.roundness,0,120,2)&&S(t.paddingX,0,120)&&S(t.paddingY,8,60)&&de(t.arrowBase)&&de(t.arrowTip)&&S(t.arrowBaseThickness,4,80)&&S(t.textOffset,-200,200)&&S(t.textOffsetX,-200,200)&&(t.textAlign==="left"||t.textAlign==="center"||t.textAlign==="right")&&typeof t.arrowHidden=="boolean":!1,ye=t=>{const e=localStorage.getItem(fe);if(e===null)return{presets:[],skipped:!1};const n=JSON.parse(e);if(!Y(n)||n.version!==ge||!Array.isArray(n.presets))throw new Error("Saved preset data is not in a supported format.");const o=[],s=new Set,r=new Set;for(const i of n.presets)!Y(i)||typeof i.id!="string"||!i.id.trim()||typeof i.name!="string"||!i.name.trim()||i.name.trim().length>me||!vt(i.settings,t)||s.has(i.id)||r.has(q(i.name))||(s.add(i.id),r.add(q(i.name)),o.push({id:i.id,name:i.name.trim(),settings:W(i.settings)}));return{presets:o,skipped:o.length!==n.presets.length}},xt=t=>{localStorage.setItem(fe,JSON.stringify({version:ge,presets:t}))},ee=document.querySelector("#app");if(!ee)throw new Error("App container not found");ee.innerHTML=`
  <main class="layout">
    <header class="header">
      <h1>Speech Bubble Baker</h1>
      <p class="lede">
        Create a transparent-background speech bubble you can copy anywhere. Adjust the text, bubble, and arrow as you like.
      </p>
    </header>

    <section class="board">
      <section class="preset-card" aria-label="Style presets">
        <div class="preset-controls">
          <label class="field preset-field" for="preset-select">
            <span class="micro-eyebrow">Saved presets</span>
            <select id="preset-select" disabled>
              <option value="">No saved presets yet</option>
            </select>
          </label>
          <button id="save-preset-button" type="button">Save preset</button>
        </div>
        <p id="preset-status" class="status" role="status" aria-live="polite">Save your current style for later. Your text stays as it is.</p>
      </section>
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

          <label class="field color-field">
            <div class="field-label">
              <span>Font color</span>
              <span class="value-pill" id="text-color-value"></span>
            </div>
            <button id="text-color-button" class="color-chip" type="button">
              <span id="text-color-swatch" class="color-chip-swatch" aria-hidden="true"></span>
              <span class="color-chip-label">Pick a color</span>
            </button>
          </label>

          <label class="field color-field">
            <div class="field-label">
              <span>Bubble + arrow color</span>
              <span class="value-pill" id="bubble-color-value"></span>
            </div>
            <button id="bubble-color-button" class="color-chip" type="button">
              <span id="bubble-color-swatch" class="color-chip-swatch" aria-hidden="true"></span>
              <span class="color-chip-label">Pick a color</span>
            </button>
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
  <dialog id="save-preset-dialog" class="preset-dialog" aria-labelledby="save-preset-title">
    <form id="save-preset-form">
      <header class="modal-header">
        <h2 class="modal-title" id="save-preset-title">Save preset</h2>
        <button id="close-save-preset" class="icon-button" type="button" aria-label="Close save preset">×</button>
      </header>
      <label class="field" for="preset-name">
        <span class="field-label">Preset name</span>
        <input id="preset-name" type="text" maxlength="${me}" placeholder="e.g. Comic caption" autocomplete="off" required autofocus />
      </label>
      <p id="save-preset-message" class="status" role="status" aria-live="polite"></p>
      <div class="preset-dialog-actions">
        <button id="cancel-save-preset" class="secondary-button" type="button">Cancel</button>
        <button id="confirm-save-preset" type="submit">Save preset</button>
      </div>
    </form>
  </dialog>
`;const L=document.querySelector("main.layout"),J=document.querySelector("#canvas-wrapper"),h=document.querySelector("#artboard"),X=document.querySelector("#copy-button"),Q=document.querySelector("#status"),ve=document.querySelector("#text-editor"),xe=document.querySelector("#font-size"),Se=document.querySelector("#text-width"),we=document.querySelector("#roundness"),Ce=document.querySelector("#padding-vertical"),ke=document.querySelector("#padding-horizontal"),Ee=document.querySelector("#arrow-thickness"),Te=document.querySelector("#text-offset"),Le=document.querySelector("#text-offset-x"),P=document.querySelector("#arrow-hidden"),C=document.querySelector("#arrow-base-token"),k=document.querySelector("#arrow-tip-token"),qe=document.querySelector("#font-size-value"),Be=document.querySelector("#text-width-value"),Ie=document.querySelector("#roundness-value"),He=document.querySelector("#padding-vertical-value"),Me=document.querySelector("#padding-horizontal-value"),Oe=document.querySelector("#arrow-thickness-value"),Pe=document.querySelector("#text-offset-value"),$e=document.querySelector("#text-offset-x-value"),$=document.querySelector("#align-select"),te=document.querySelector("#font-picker-button"),Ae=document.querySelector("#text-color-value"),U=document.querySelector("#text-color-button"),Re=document.querySelector("#text-color-swatch"),ze=document.querySelector("#bubble-color-value"),_=document.querySelector("#bubble-color-button"),Ne=document.querySelector("#bubble-color-swatch"),f=document.querySelector("#font-modal"),V=document.querySelector("#font-list"),Xe=document.querySelector("#close-font-modal"),ne=document.querySelector("#current-font-label"),g=document.querySelector("#preset-select"),oe=document.querySelector("#save-preset-button"),A=document.querySelector("#preset-status"),B=document.querySelector("#save-preset-dialog"),De=document.querySelector("#save-preset-form"),m=document.querySelector("#preset-name"),se=document.querySelector("#save-preset-message"),Fe=document.querySelector("#confirm-save-preset"),Ye=document.querySelector("#close-save-preset"),Ve=document.querySelector("#cancel-save-preset");if(!L||!J||!h||!X||!Q||!ve||!xe||!Se||!we||!Ce||!ke||!Ee||!Te||!Le||!P||!C||!k||!qe||!Be||!Ie||!He||!Me||!Oe||!Pe||!$e||!$||!te||!Ae||!U||!Re||!ze||!_||!Ne||!f||!V||!Xe||!ne||!g||!oe||!A||!B||!De||!m||!se||!Fe||!Ye||!Ve)throw new Error("Page did not render expected elements");const O=h.getContext("2d");if(!O)throw new Error("Canvas 2D context is unavailable");const St=()=>{J.style.setProperty("--canvas-aspect",`${h.width} / ${h.height}`),J.style.setProperty("--canvas-max-width",`${h.width}px`)};St();const N=t=>Number.parseFloat(t)||0,We="Hello world!",wt="Bangers",ie=["Roboto","Open Sans","Lato","Poppins","Archivo","Quicksand","Bubbler One","Bubblegum Sans","Comic Neue","Patrick Hand","Patrick Hand SC","Handlee","Kalam","Delius","Caveat","Indie Flower","Just Another Hand","Shadows Into Light","Shadows Into Light Two","Waiting for the Sunrise","Sue Ellen Francisco","Short Stack","DJB Chalk It Up","Bangers","Permanent Marker","Concert One","Baloo 2","Lilita One","Luckiest Guy","Titan One","Sniglet","Chewy","Rock Salt","Amatic SC","Gloria Hallelujah","Fredericka the Great","Modak","Sriracha","Pacifico","Great Vibes","Euphoria Script","Yesteryear","BhuTuka Expanded One"],Ct={"Baloo 2":"नमस्ते दुनिया",Kalam:"नमस्ते दुनिया","BhuTuka Expanded One":"नमस्ते दुनिया",Sriracha:"สวัสดีชาวโลก"},R=t=>{const e=t.trim().replace("#","");return`#${(e.length===3?e.split("").map(s=>s+s).join(""):e).padEnd(6,"0").slice(0,6)}`.toUpperCase()},kt=t=>{const e=R(t),n=parseInt(e.slice(1,3),16)/255,o=parseInt(e.slice(3,5),16)/255,s=parseInt(e.slice(5,7),16)/255,r=Math.max(n,o,s),i=Math.min(n,o,s),a=r-i;let l=0,c=0;const u=(r+i)/2;if(a!==0){switch(c=u>.5?a/(2-r-i):a/(r+i),r){case n:l=(o-s)/a+(o<s?6:0);break;case o:l=(s-n)/a+2;break;default:l=(n-o)/a+4}l*=60}return{h:l,s:c*100,l:u*100}},Et=t=>{L?.style.setProperty("--bubble-font-family",`"${t}", 'Segoe UI', system-ui, sans-serif`)},Tt=t=>{const e=document.createElement("div");e.innerHTML=t||"";const n=[];let o=[];const s=(a=!1)=>{(a||o.length)&&(n.push(o),o=[])},r=(a,l)=>{const c=a.replace(/\u00a0/g," ").replace(/\n/g," ");c.length&&o.push({text:c,bold:l.bold,italic:l.italic,underline:l.underline})},i=(a,l)=>{if(a.nodeType===Node.TEXT_NODE){r(a.textContent??"",l);return}if(!(a instanceof HTMLElement))return;const c=a.tagName,u={bold:l.bold||c==="B"||c==="STRONG",italic:l.italic||c==="I"||c==="EM",underline:l.underline||c==="U"};if(c==="BR"){s(!0);return}const p=c==="DIV"||c==="P"||c==="LI";p&&o.length&&s(!0),Array.from(a.childNodes).forEach(b=>i(b,u)),p&&s(!0)};for(Array.from(e.childNodes).forEach(a=>i(a,{bold:!1,italic:!1,underline:!1})),o.length&&n.push(o);n.length>1&&n[n.length-1].length===0;)n.pop();return n.length?n:[[]]},Lt=async t=>{if(!("fonts"in document))return;const e=document.fonts;"load"in e&&await e.load(`16px "${t}"`)},re=async t=>{d.fontName=t,Et(t),ne.textContent=t,ot(t),x();try{await Lt(t)}catch(e){console.warn("Unable to load font; using the fallback font.",e)}d.fontName===t&&x()},Ue=t=>{d.textAlign=t,x()},I=()=>{if(!L)return;const t=window.getComputedStyle(ee),e=N(t.paddingLeft)+N(t.paddingRight),n=N(t.paddingTop)+N(t.paddingBottom);L.style.setProperty("--layout-scale","1");const{width:o,height:s}=L.getBoundingClientRect(),r=Math.max(window.innerWidth-e,0),i=Math.max(window.innerHeight-n,0);if(!o||!s)return;const a=Math.min(r/o,i/s,1);L.style.setProperty("--layout-scale",a.toString())};I();const d={text:We,fontName:wt,textColor:"#0b111e",bubbleColor:"#ffffff",fontSize:44,textWidth:440,roundness:22,paddingX:18,paddingY:18,arrowBase:{x:400,y:400},arrowTip:{x:400,y:620},arrowBaseThickness:14,textOffset:0,textOffsetX:0,textAlign:"center",arrowHidden:!1};let y=[];const x=()=>{O.clearRect(0,0,h.width,h.height);const t=ht(O,h.width,h.height,d);ft(O,t,d),bt(O,t,d),ae();const e=y.find(n=>n.id===g.value);e&&JSON.stringify(W(d))!==JSON.stringify(e.settings)&&(g.value="")},_e=t=>{const e=R(t);Ae.textContent=e,Re.style.backgroundColor=e},Ge=(t,e=!0)=>{const n=R(t);d.textColor=n,_e(n),e&&x()},je=t=>{const e=R(t);ze.textContent=e,Ne.style.backgroundColor=e},Ke=(t,e=!0)=>{const n=R(t);d.bubbleColor=n,je(n),e&&x()},ue=(t,e)=>{t.style.left=`${e.x/h.width*100}%`,t.style.top=`${e.y/h.height*100}%`},ae=()=>{!C||!k||d.arrowHidden||(ue(C,d.arrowBase),ue(k,d.arrowTip))},le=t=>{if(!C||!k)return;const e=t?"block":"none";C.style.display=e,k.style.display=e},D=t=>{Q&&(Q.textContent=t)},qt=t=>{const{width:e,height:n}=t,o=t.getContext("2d");if(!o)throw new Error("Canvas 2D context is unavailable");const{data:s}=o.getImageData(0,0,e,n);let r=e,i=n,a=-1,l=-1;for(let c=0;c<n;c+=1)for(let u=0;u<e;u+=1)s[(c*e+u)*4+3]!==0&&(u<r&&(r=u),c<i&&(i=c),u>a&&(a=u),c>l&&(l=c));return a===-1||l===-1?null:{x:r,y:i,width:a-r+1,height:l-i+1}},Bt=()=>{const t=qt(h);if(!t)return h;const e=document.createElement("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");if(!n)throw new Error("Canvas 2D context is unavailable");return n.drawImage(h,t.x,t.y,t.width,t.height,0,0,t.width,t.height),e},It=t=>new Promise((e,n)=>{t.toBlob(o=>{o?e(o):n(new Error("Unable to create image from canvas"))},"image/png")}),Ht=async()=>{if(!("clipboard"in navigator)||typeof ClipboardItem>"u")throw new Error("Clipboard API is not available in this browser");const t=Bt(),e=await It(t);await navigator.clipboard.write([new ClipboardItem({[e.type]:e})])},Je=(t,e,n)=>{t.textContent=`${Math.round(e)}${n}`},Qe=[],w=(t,e,n,o)=>{Qe.push({input:t,label:e,key:n,suffix:o});const s=()=>{d[n]=Number(t.value),Je(e,d[n],o),x()};t.value=String(d[n]),s(),t.addEventListener("input",s)};w(xe,qe,"fontSize"," px");w(Se,Be,"textWidth"," px");w(Te,Pe,"textOffset"," px");w(Le,$e,"textOffsetX"," px");w(Ce,He,"paddingY"," px");w(ke,Me,"paddingX"," px");w(we,Ie,"roundness"," px");w(Ee,Oe,"arrowBaseThickness"," px");P.checked=d.arrowHidden;P.addEventListener("change",()=>{d.arrowHidden=P.checked,le(!d.arrowHidden),x()});le(!d.arrowHidden);Ge(d.textColor,!1);Ke(d.bubbleColor,!1);let E="text",Ze=null;const et={text:d.textColor,bubble:d.bubbleColor},j=(t,e)=>{t==="bubble"?Ke(e):Ge(e)},pe=new F({onColorSelect:t=>j(E,t.hex),onOk:t=>j(E,t.hex),onCancel:()=>{j(E,et[E])},onClose:()=>{(Ze??(E==="bubble"?_:U)).focus()}}),tt=t=>{E=t;const e=t==="bubble"?d.bubbleColor:d.textColor;et[t]=e;const{h:n,s:o,l:s}=kt(e),r=t==="bubble"?_:U;Ze=r,pe.setHsl(n,o,s,!1),pe.show(r)};U.addEventListener("click",()=>tt("text"));_.addEventListener("click",()=>tt("bubble"));const nt=t=>e=>{e.preventDefault(),(t==="arrowBase"?C:k).setPointerCapture(e.pointerId);const o=r=>{const i=h.getBoundingClientRect(),a=(r.clientX-i.left)/i.width*h.width,l=(r.clientY-i.top)/i.height*h.height,c={x:Math.min(Math.max(a,0),h.width),y:Math.min(Math.max(l,0),h.height)};d[t]=c,ae(),x()},s=()=>{window.removeEventListener("pointermove",o),window.removeEventListener("pointerup",s),window.removeEventListener("pointercancel",s)};window.addEventListener("pointermove",o),window.addEventListener("pointerup",s),window.addEventListener("pointercancel",s)};C.addEventListener("pointerdown",nt("arrowBase"));k.addEventListener("pointerdown",nt("arrowTip"));const ot=t=>{Array.from(V.querySelectorAll(".font-option")).forEach(e=>{const n=e.dataset.fontName===t;e.classList.toggle("active",n),e.setAttribute("aria-pressed",n?"true":"false")})},Mt=()=>{V.innerHTML="",ie.forEach(t=>{const e=Ct[t]??"The quick brown fox",n=document.createElement("button");n.type="button",n.className="font-option",n.dataset.fontName=t,n.setAttribute("aria-pressed","false"),n.innerHTML=`
      <span class="font-option-name">${t}</span>
      <span class="font-option-sample" style="font-family: '${t}', 'Segoe UI', system-ui, sans-serif;">
        ${e}
      </span>
    `,n.addEventListener("click",()=>{re(t),G()}),V.appendChild(n)}),ot(d.fontName)},st=t=>{t.key==="Escape"&&G()},it=t=>{t.target===f&&G()},Ot=()=>{f.classList.add("open"),f.removeAttribute("aria-hidden"),f.addEventListener("keydown",st),f.addEventListener("click",it),f.focus()},G=()=>{f.classList.remove("open"),f.setAttribute("aria-hidden","true"),f.removeEventListener("keydown",st),f.removeEventListener("click",it),te.focus()};te.addEventListener("click",Ot);Xe.addEventListener("click",G);const rt=t=>{const e=Tt(t);d.richText=e,d.text=e.map(n=>n.map(o=>o.text).join("")).join(`
`),x()},Pt=new gt({container:ve,placeholder:"Type what the bubble should say...",initialContent:`${We}`,minHeight:"174px",className:"bubble-text-editor",onChange:rt});rt(Pt.getContent());I();ne.textContent=d.fontName;Mt();re(d.fontName);$.value=d.textAlign;$.addEventListener("change",()=>{const t=$.value;Ue(t)});Ue(d.textAlign);const $t=()=>{ae(),I()};window.addEventListener("resize",$t);D("Ready to copy");X.addEventListener("click",async()=>{X.disabled=!0,D("Copying to clipboard...");try{await Ht(),D("Copied to clipboard")}catch(t){console.error(t);const e=t instanceof Error?t.message:"Unexpected error while copying";D(`Copy failed: ${e}`)}finally{X.disabled=!1}});const Z=(t="")=>{g.replaceChildren(new Option(y.length?"Choose a preset":"No saved presets yet",""));const e=[...y].sort((n,o)=>n.name.localeCompare(o.name));for(const n of e)g.add(new Option(n.name,n.id));g.disabled=y.length===0,g.value=t},At=t=>{Object.assign(d,W(t));for(const{input:e,label:n,key:o,suffix:s}of Qe)e.value=String(d[o]),Je(n,d[o],s);$.value=d.textAlign,P.checked=d.arrowHidden,le(!d.arrowHidden),_e(d.textColor),je(d.bubbleColor),re(d.fontName)};g.addEventListener("change",()=>{const t=y.find(e=>e.id===g.value);t&&(At(t.settings),A.textContent=`Applied “${t.name}”. Your text is unchanged.`,I())});let at=null;const ce=()=>{m.setCustomValidity("");const t=y.find(e=>q(e.name)===q(m.value));at=t?.id??null,Fe.textContent=t?"Replace preset":"Save preset",se.textContent=t?`A preset named “${t.name}” already exists. Replacing it saves your current settings over it.`:"Saves the current style, including the arrow position. Your text is kept separately."};oe.addEventListener("click",()=>{const t=y.find(e=>e.id===g.value);m.value=t?.name??"",ce(),B.showModal(),m.focus(),m.select()});m.addEventListener("input",ce);Ye.addEventListener("click",()=>B.close());Ve.addEventListener("click",()=>B.close());B.addEventListener("close",()=>oe.focus());De.addEventListener("submit",t=>{t.preventDefault();const e=m.value.trim();if(!e){m.setCustomValidity("Enter a name for this preset."),m.reportValidity();return}try{const n=ye(ie),o=n.presets.find(i=>q(i.name)===q(e));if(o&&at!==o.id){y=n.presets,Z(g.value),ce();return}const s={id:o?.id??crypto.randomUUID(),name:e,settings:W(d)},r=n.presets.filter(i=>i.id!==s.id);r.push(s),xt(r),y=r,Z(s.id),A.textContent=`${o?"Updated":"Saved"} “${e}”. Choose it here whenever you need it.`,B.close(),I()}catch(n){console.warn("Unable to save preset.",n),se.textContent="Could not save the preset. Browser storage may be full, blocked, or contain unreadable preset data."}});try{const t=ye(ie);y=t.presets,Z(),t.skipped&&(A.textContent="Some saved presets could not be loaded because their settings are invalid.")}catch(t){console.warn("Unable to read presets.",t),A.textContent="Could not load presets. Browser storage may be blocked or contain unreadable preset data."}I();
