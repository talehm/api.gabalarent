(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[8179],{20889:(j,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>N});var e=t(74081),c=t(27279),P=t(61020),o=t(93198),O=t(17735),_=t(58892),f=t.n(_),p=t(23201),E=t.n(p),y=t(94305),S=t.n(y),b=t(25074),U=t.n(b),B=t(97487),X=t.n(B),K=t(65713),R=t.n(K),L=t(96053),l=t.n(L),n=t(46618),s=t.n(n),i=t(50568),r=t.n(i),m=t(69819),d=t.n(m),v=t(1180),h=t(1996),F=t.n(h),z=t(988);const N=()=>{const{formatMessage:g}=(0,P.Z)(),D=(0,c.useRef)(!0),[I,w]=(0,c.useState)(!0),[$,Z]=(0,c.useState)(!1),[C,M]=(0,c.useState)(),V=(0,v.useNotification)(),G=!1;(0,c.useEffect)(()=>(O.Z.get().then(x=>{M(x),w(!1)}),()=>{D.current=!1}),[]);const W=async()=>{if(C.seo.navigationTimeout<2||C.seo.navigationTimeout>10){V({type:"warning",message:{id:(0,o.Z)("plugin.settings.button.save.error")}});return}C.seo.navigationTimeout||M(u=>({...u,seo:{...u.seo,navigationTimeout:2}})),Z(!0);const x=await O.Z.set(C);console.log("settings saved",x),M(x),Z(!1),V({type:"success",message:{id:(0,o.Z)("plugin.settings.button.save.message")}})},k=async()=>{M(await O.Z.reset())};return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(p.Main,{labelledBy:"title","aria-busy":I,children:[(0,e.jsx)(y.HeaderLayout,{id:"title",title:`${g({id:(0,o.Z)("plugin.seo.title")})} - ${g({id:(0,o.Z)("plugin.settings.advanced.title")})}`,subtitle:g({id:(0,o.Z)("plugin.settings.version")},{version:z.version}),primaryAction:I?(0,e.jsx)(e.Fragment,{}):(0,e.jsx)(B.Button,{onClick:W,startIcon:(0,e.jsx)(R(),{}),size:"L",disabled:$,loading:$,children:g({id:(0,o.Z)("plugin.settings.button.save.label")})}),secondaryAction:G?(0,e.jsx)(B.Button,{variant:"tertiary",onClick:k,startIcon:(0,e.jsx)(d(),{}),children:"Reset"}):""}),I?(0,e.jsx)(v.LoadingIndicatorPage,{}):(0,e.jsx)(y.ContentLayout,{children:(0,e.jsxs)("form",{onSubmit:W,children:[(0,e.jsxs)(b.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:[(0,e.jsx)(i.Typography,{variant:"omega",fontWeight:"semiBold",children:g({id:(0,o.Z)("plugin.settings.seo.description.title")})}),(0,e.jsx)("br",{}),(0,e.jsx)(b.Box,{marginTop:2,children:(0,e.jsx)(i.Typography,{variant:"omega",children:g({id:(0,o.Z)("plugin.settings.seo.description.click.content")})})})]}),(0,e.jsx)(b.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",marginTop:6,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,e.jsxs)(_.Stack,{size:3,children:[(0,e.jsx)("h2",{children:g({id:(0,o.Z)("plugin.settings.advanced.title")})}),(0,e.jsxs)(L.Grid,{gap:6,children:[(0,e.jsx)(L.GridItem,{col:6,s:12,children:(0,e.jsx)(h.ToggleInput,{checked:C?.seo?.clickToFind??!1,hint:g({id:(0,o.Z)("plugin.settings.advanced.clickToFind.descr")}),label:g({id:(0,o.Z)("plugin.settings.advanced.clickToFind")}),name:"clickToFindEnabled",offLabel:g({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:g({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:x=>{const u=x.target.checked;u&&V({type:"info",message:{id:(0,o.Z)("plugin.settings.advanced.clickToFind.warning")}}),M(A=>({...A,seo:{...A.seo,clickToFind:u}}))}})}),(0,e.jsx)(L.GridItem,{col:6,s:12,children:(0,e.jsx)(n.NumberInput,{name:"navigationTimeout",hint:g({id:(0,o.Z)("plugin.settings.advanced.navigationTimeout.descr")}),label:g({id:(0,o.Z)("plugin.settings.advanced.navigationTimeout")}),value:C?.seo?.navigationTimeout??2,error:C?.seo?.navigationTimeout<2||C?.seo?.navigationTimeout>10?g({id:(0,o.Z)("plugin.settings.advanced.navigationTimeout.error")}):null,onValueChange:x=>{M(u=>({...u,seo:{...u.seo,navigationTimeout:x}}))}})})]})]})})]})})]})})}},28471:(j,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>N});var e=t(74081),c=t(27279),P=t(61020),o=t(93198),O=t(17735),_=t(58892),f=t.n(_),p=t(23201),E=t.n(p),y=t(94305),S=t.n(y),b=t(25074),U=t.n(b),B=t(83067),X=t.n(B),K=t(97487),R=t.n(K),L=t(50568),l=t.n(L),n=t(65713),s=t.n(n),i=t(96053),r=t.n(i),m=t(69819),d=t.n(m),v=t(1180),h=t(1996),F=t.n(h),z=t(988);const N=()=>{const{formatMessage:g}=(0,P.Z)(),D=(0,c.useRef)(!0),[I,w]=(0,c.useState)(!0),[$,Z]=(0,c.useState)(!1),[C,M]=(0,c.useState)(),V=(0,v.useNotification)(),G=!1;(0,c.useEffect)(()=>(O.Z.get().then(x=>{M(x),w(!1)}),()=>{D.current=!1}),[]);const W=async()=>{Z(!0);const x=await O.Z.set(C);console.log("settings saved",x),M(x),Z(!1),V({type:"success",message:{id:(0,o.Z)("plugin.settings.button.save.message")}})},k=async()=>{M(await O.Z.reset())};return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(p.Main,{labelledBy:"title","aria-busy":I,children:[(0,e.jsx)(y.HeaderLayout,{id:"title",title:g({id:(0,o.Z)("plugin.settings.title")}),subtitle:g({id:(0,o.Z)("plugin.settings.version")},{version:z.version}),primaryAction:I?(0,e.jsx)(e.Fragment,{}):(0,e.jsx)(K.Button,{onClick:W,startIcon:(0,e.jsx)(s(),{}),size:"L",disabled:$,loading:$,children:g({id:(0,o.Z)("plugin.settings.button.save.label")})}),secondaryAction:G?(0,e.jsx)(K.Button,{variant:"tertiary",onClick:k,startIcon:(0,e.jsx)(d(),{}),children:"Reset"}):""}),I?(0,e.jsx)(v.LoadingIndicatorPage,{}):(0,e.jsxs)(y.ContentLayout,{children:[(0,e.jsxs)(b.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:[(0,e.jsx)(L.Typography,{variant:"omega",fontWeight:"semiBold",children:g({id:(0,o.Z)("plugin.settings.seo.description.title")})}),(0,e.jsx)("br",{}),(0,e.jsx)(b.Box,{marginTop:2,children:(0,e.jsx)(L.Typography,{variant:"omega",children:g({id:(0,o.Z)("plugin.settings.seo.description.content")})})})]}),(0,e.jsx)("form",{onSubmit:W,children:(0,e.jsx)(b.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",marginTop:6,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,e.jsxs)(_.Stack,{size:3,children:[(0,e.jsx)("h2",{children:g({id:(0,o.Z)("plugin.settings.seo.title")})}),(0,e.jsxs)(i.Grid,{gap:6,children:[(0,e.jsx)(i.GridItem,{col:12,s:12,children:(0,e.jsx)(h.ToggleInput,{checked:C?.seo?.enabled??!1,hint:g({id:(0,o.Z)("plugin.settings.seo.enabled.descr")}),label:g({id:(0,o.Z)("plugin.settings.seo.enabled")}),name:"moduleEnabled",offLabel:g({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:g({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:x=>{M(u=>({...u,seo:{...u.seo,enabled:x.target.checked}}))}})}),(0,e.jsx)(i.GridItem,{col:12,s:12,children:(0,e.jsx)(B.TextInput,{label:g({id:(0,o.Z)("plugin.settings.seo.frontEnd")}),name:"siteURL",placeholder:g({id:(0,o.Z)("plugin.settings.seo.frontEnd.placeholder")}),onChange:({target:{value:x}})=>{M(u=>({...u,seo:{...u.seo,frontUrl:x}}))},value:C?.seo?.frontUrl??"",hint:g({id:(0,o.Z)("plugin.settings.seo.frontEnd.descr")})})}),(0,e.jsx)(i.GridItem,{col:12,s:12,children:(0,e.jsx)(h.ToggleInput,{checked:C?.seo?.expertMode??!1,hint:g({id:(0,o.Z)("plugin.settings.seo.expert.descr")}),label:g({id:(0,o.Z)("plugin.settings.seo.expert")}),name:"expertModeEnabled",offLabel:g({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:g({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:x=>{M(u=>({...u,seo:{...u.seo,expertMode:x.target.checked}}))}})})]})]})})})]})]})})}},31208:j=>{function a(l,n,s,i){Object.defineProperty(l,n,{get:s,set:i,enumerable:!0,configurable:!0})}a(j.exports,"NumberFormatter",()=>o),a(j.exports,"NumberParser",()=>E);let t=new Map,e=!1;try{e=new Intl.NumberFormat("de-DE",{signDisplay:"exceptZero"}).resolvedOptions().signDisplay==="exceptZero"}catch{}let c=!1;try{c=new Intl.NumberFormat("de-DE",{style:"unit",unit:"degree"}).resolvedOptions().style==="unit"}catch{}const P={degree:{narrow:{default:"\xB0","ja-JP":" \u5EA6","zh-TW":"\u5EA6","sl-SI":" \xB0"}}};class o{format(n){let s="";if(!e&&this.options.signDisplay!=null?s=_(this.numberFormatter,this.options.signDisplay,n):s=this.numberFormatter.format(n),this.options.style==="unit"&&!c){var i;let{unit:r,unitDisplay:m="short",locale:d}=this.resolvedOptions(),v=(i=P[r])===null||i===void 0?void 0:i[m];s+=v[d]||v.default}return s}formatToParts(n){return this.numberFormatter.formatToParts(n)}formatRange(n,s){if(typeof this.numberFormatter.formatRange=="function")return this.numberFormatter.formatRange(n,s);if(s<n)throw new RangeError("End date must be >= start date");return`${this.format(n)} \u2013 ${this.format(s)}`}formatRangeToParts(n,s){if(typeof this.numberFormatter.formatRangeToParts=="function")return this.numberFormatter.formatRangeToParts(n,s);if(s<n)throw new RangeError("End date must be >= start date");let i=this.numberFormatter.formatToParts(n),r=this.numberFormatter.formatToParts(s);return[...i.map(m=>({...m,source:"startRange"})),{type:"literal",value:" \u2013 ",source:"shared"},...r.map(m=>({...m,source:"endRange"}))]}resolvedOptions(){let n=this.numberFormatter.resolvedOptions();return!e&&this.options.signDisplay!=null&&(n={...n,signDisplay:this.options.signDisplay}),!c&&this.options.style==="unit"&&(n={...n,style:"unit",unit:this.options.unit,unitDisplay:this.options.unitDisplay}),n}constructor(n,s={}){this.numberFormatter=O(n,s),this.options=s}}function O(l,n={}){let{numberingSystem:s}=n;if(s&&l.indexOf("-u-nu-")===-1&&(l=`${l}-u-nu-${s}`),n.style==="unit"&&!c){var i;let{unit:d,unitDisplay:v="short"}=n;if(!d)throw new Error('unit option must be provided with style: "unit"');if(!(!((i=P[d])===null||i===void 0)&&i[v]))throw new Error(`Unsupported unit ${d} with unitDisplay = ${v}`);n={...n,style:"decimal"}}let r=l+(n?Object.entries(n).sort((d,v)=>d[0]<v[0]?-1:1).join():"");if(t.has(r))return t.get(r);let m=new Intl.NumberFormat(l,n);return t.set(r,m),m}function _(l,n,s){if(n==="auto")return l.format(s);if(n==="never")return l.format(Math.abs(s));{let i=!1;if(n==="always"?i=s>0||Object.is(s,0):n==="exceptZero"&&(Object.is(s,-0)||Object.is(s,0)?s=Math.abs(s):i=s>0),i){let r=l.format(-s),m=l.format(s),d=r.replace(m,"").replace(/\u200e|\u061C/,"");return[...d].length!==1&&console.warn("@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case"),r.replace(m,"!!!").replace(d,"+").replace("!!!",m)}else return l.format(s)}}const f=new RegExp("^.*\\(.*\\).*$"),p=["latn","arab","hanidec"];class E{parse(n){return S(this.locale,this.options,n).parse(n)}isValidPartialNumber(n,s,i){return S(this.locale,this.options,n).isValidPartialNumber(n,s,i)}getNumberingSystem(n){return S(this.locale,this.options,n).options.numberingSystem}constructor(n,s={}){this.locale=n,this.options=s}}const y=new Map;function S(l,n,s){let i=b(l,n);if(!l.includes("-nu-")&&!i.isValidPartialNumber(s)){for(let r of p)if(r!==i.options.numberingSystem){let m=b(l+(l.includes("-u-")?"-nu-":"-u-nu-")+r,n);if(m.isValidPartialNumber(s))return m}}return i}function b(l,n){let s=l+(n?Object.entries(n).sort((r,m)=>r[0]<m[0]?-1:1).join():""),i=y.get(s);return i||(i=new U(l,n),y.set(s,i)),i}class U{parse(n){let s=this.sanitize(n);if(s=R(s,this.symbols.group,"").replace(this.symbols.decimal,".").replace(this.symbols.minusSign,"-").replace(this.symbols.numeral,this.symbols.index),this.options.style==="percent"){let r=s.indexOf("-");s=s.replace("-","");let m=s.indexOf(".");m===-1&&(m=s.length),s=s.replace(".",""),m-2===0?s=`0.${s}`:m-2===-1?s=`0.0${s}`:m-2===-2?s="0.00":s=`${s.slice(0,m-2)}.${s.slice(m-2)}`,r>-1&&(s=`-${s}`)}let i=s?+s:NaN;if(isNaN(i))return NaN;if(this.options.style==="percent"){let r={...this.options,style:"decimal",minimumFractionDigits:Math.min(this.options.minimumFractionDigits+2,20),maximumFractionDigits:Math.min(this.options.maximumFractionDigits+2,20)};return new E(this.locale,r).parse(new o(this.locale,r).format(i))}return this.options.currencySign==="accounting"&&f.test(n)&&(i=-1*i),i}sanitize(n){return n=n.replace(this.symbols.literals,""),n=n.replace("-",this.symbols.minusSign),this.options.numberingSystem==="arab"&&(n=n.replace(",",this.symbols.decimal),n=n.replace(String.fromCharCode(1548),this.symbols.decimal),n=R(n,".",this.symbols.group)),this.options.locale==="fr-FR"&&(n=R(n,".",String.fromCharCode(8239))),n}isValidPartialNumber(n,s=-1/0,i=1/0){return n=this.sanitize(n),n.startsWith(this.symbols.minusSign)&&s<0?n=n.slice(this.symbols.minusSign.length):this.symbols.plusSign&&n.startsWith(this.symbols.plusSign)&&i>0&&(n=n.slice(this.symbols.plusSign.length)),n.startsWith(this.symbols.group)||n.indexOf(this.symbols.decimal)>-1&&this.options.maximumFractionDigits===0?!1:(n=R(n,this.symbols.group,"").replace(this.symbols.numeral,"").replace(this.symbols.decimal,""),n.length===0)}constructor(n,s={}){this.locale=n,this.formatter=new Intl.NumberFormat(n,s),this.options=this.formatter.resolvedOptions(),this.symbols=K(n,this.formatter,this.options,s);var i,r;this.options.style==="percent"&&(((i=this.options.minimumFractionDigits)!==null&&i!==void 0?i:0)>18||((r=this.options.maximumFractionDigits)!==null&&r!==void 0?r:0)>18)&&console.warn("NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.")}}const B=new Set(["decimal","fraction","integer","minusSign","plusSign","group"]),X=[0,4,2,1,11,20,3,7,100,21,.1,1.1];function K(l,n,s,i){var r,m,d,v;let h=new Intl.NumberFormat(l,{...s,minimumSignificantDigits:1,maximumSignificantDigits:21}),F=h.formatToParts(-10000.111),z=h.formatToParts(10000.111),Y=X.map(u=>h.formatToParts(u));var N;let g=(N=(r=F.find(u=>u.type==="minusSign"))===null||r===void 0?void 0:r.value)!==null&&N!==void 0?N:"-",D=(m=z.find(u=>u.type==="plusSign"))===null||m===void 0?void 0:m.value;!D&&(i?.signDisplay==="exceptZero"||i?.signDisplay==="always")&&(D="+");let w=(d=new Intl.NumberFormat(l,{...s,minimumFractionDigits:2,maximumFractionDigits:2}).formatToParts(.001).find(u=>u.type==="decimal"))===null||d===void 0?void 0:d.value,$=(v=F.find(u=>u.type==="group"))===null||v===void 0?void 0:v.value,Z=F.filter(u=>!B.has(u.type)).map(u=>L(u.value)),C=Y.flatMap(u=>u.filter(A=>!B.has(A.type)).map(A=>L(A.value))),M=[...new Set([...Z,...C])].sort((u,A)=>A.length-u.length),V=M.length===0?new RegExp("[\\p{White_Space}]","gu"):new RegExp(`${M.join("|")}|[\\p{White_Space}]`,"gu"),G=[...new Intl.NumberFormat(s.locale,{useGrouping:!1}).format(9876543210)].reverse(),W=new Map(G.map((u,A)=>[u,A])),k=new RegExp(`[${G.join("")}]`,"g");return{minusSign:g,plusSign:D,decimal:w,group:$,literals:V,numeral:k,index:u=>String(W.get(u))}}function R(l,n,s){return l.replaceAll?l.replaceAll(n,s):l.split(n).join(s)}function L(l){return l.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}},5375:(j,a,t)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const e=t(74081),c=t(92292),P=t(40921),o="en-EN",O=()=>typeof navigator>"u"?o:navigator.language?navigator.language:o,[_,f]=c.createContext("StrapiDesignSystem",{locale:O()}),p=({locale:E=O(),...y})=>e.jsx(_,{locale:E,children:e.jsx(P.ThemeProvider,{...y})});a.DesignSystemProvider=p,a.useDesignSystem=f},16215:(j,a,t)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const e=t(74081),c=t(8169),P=t(70321),o=()=>e.jsxs(P.VisuallyHidden,{children:[e.jsx("p",{role:"log","aria-live":"polite",id:c.LiveRegionIds.Log,"aria-relevant":"all"}),e.jsx("p",{role:"status","aria-live":"polite",id:c.LiveRegionIds.Status,"aria-relevant":"all"}),e.jsx("p",{role:"alert","aria-live":"assertive",id:c.LiveRegionIds.Alert,"aria-relevant":"all"})]});a.LiveRegions=o},8169:(j,a)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const t={Log:"live-region-log",Status:"live-region-status",Alert:"live-region-alert"};a.LiveRegionIds=t},506:(j,a,t)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const e=t(74081),c=t(27279),P=t(31208),o=t(71434),O=t(72450),_=t(5375),f=t(77547),p=t(90207),E=t(54673),y=t(20601),S=t(59817),b=t(35725),U=t(69803),B=t(34760),X=t(63391),K=t(28518),R=r=>r&&r.__esModule?r:{default:r},L=R(c),n=R(O).default.button`
  display: flex;
  height: 1rem;
  align-items: ${({reverse:r})=>r?"flex-end":"flex-start"};
  transform: translateY(${({reverse:r})=>r?"-2px":"2px"});
  cursor: ${({disabled:r})=>r?"not-allowed":void 0};
  svg {
    display: block;
    height: ${4/16}rem;
    transform: ${({reverse:r})=>r?"rotateX(180deg)":void 0};
  }
`,s="",i=L.default.forwardRef(({size:r="M",startAction:m,name:d,hint:v,error:h,label:F,labelAction:z,locale:Y,id:N,onValueChange:g,value:D,step:I=1,required:w=!1,disabled:$=!1,...Z},C)=>{const M=E.useId(N),V=_.useDesignSystem("NumberInput"),G=Y||V.locale,W=c.useRef(new P.NumberParser(G,{style:"decimal"})),k=c.useRef(new P.NumberFormatter(G,{maximumFractionDigits:20})),[x,u]=p.useControllableState({prop(T){const H=String(D);return isNaN(Number(H))||H!==T&&T!==""?T:k.current.format(Number(D))},defaultProp:s,onChange(T){const H=W.current.parse(T??"");g(isNaN(H)?void 0:H)}}),A=T=>{u(String(T))},q=({target:{value:T}})=>{W.current.isValidPartialNumber(T)&&A(T)},J=()=>{if(!x){A(I);return}const T=W.current.parse(x),H=isNaN(T)?I:T+I;A(k.current.format(H))},Q=()=>{if(!x){A(-I);return}const T=W.current.parse(x),H=isNaN(T)?-I:T-I;A(k.current.format(H))},tt=T=>{if(!$)switch(T.key){case f.KeyboardKeys.DOWN:{T.preventDefault(),Q();break}case f.KeyboardKeys.UP:{T.preventDefault(),J();break}}},et=()=>{if(x){const T=W.current.parse(x),H=isNaN(T)?"":k.current.format(T);A(H)}};return e.jsx(S.Field,{name:d,hint:v,error:h,id:M,required:w,children:e.jsxs(b.Flex,{direction:"column",alignItems:"stretch",gap:1,children:[F&&e.jsx(U.FieldLabel,{action:z,children:F}),e.jsx(y.FieldInput,{ref:C,startAction:m,disabled:$,type:"text",inputMode:"decimal",onChange:q,onKeyDown:tt,onBlur:et,value:x,size:r,endAction:e.jsxs(e.Fragment,{children:[e.jsx(n,{disabled:$,"aria-hidden":!0,reverse:!0,onClick:J,tabIndex:-1,type:"button","data-testid":"ArrowUp",children:e.jsx(B.Icon,{as:o.CarretDown,color:"neutral500"})}),e.jsx(n,{disabled:$,"aria-hidden":!0,onClick:Q,tabIndex:-1,type:"button","data-testid":"ArrowDown",children:e.jsx(B.Icon,{as:o.CarretDown,color:"neutral500"})})]}),...Z}),e.jsx(X.FieldHint,{}),e.jsx(K.FieldError,{})]})})});a.NumberInput=i},46618:(j,a,t)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const e=t(506);a.NumberInput=e.NumberInput},40921:(j,a,t)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const e=t(74081),c=t(72450),P=t(16215),o=t(93205),O=c.createGlobalStyle`
 /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  /* My styles */
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  *:focus-visible {
    outline: 2px solid ${({theme:f})=>f.colors.primary600};
    outline-offset: 2px;
  }

  /* Focusing the button with a mouse, touch, or stylus will show a subtle drop shadow. */
  *:focus:not(:focus-visible) {
    outline: none;
  }

  body,html{
    height: 100%;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  button {
    margin: 0;
    padding: 0;
    border: none;
    background: none;
    color: inherit;
    font-size: 100%;
    cursor: pointer;
    font: inherit;
  }

  textarea,input {
    font: inherit;
  }

  .lock-body-scroll {
    height: 100vh;
    overflow-y: hidden;
  }
`,_=({children:f,theme:p=o.lightTheme})=>e.jsxs(c.ThemeProvider,{theme:p,children:[f,e.jsx(P.LiveRegions,{}),e.jsx(O,{})]});a.ThemeProvider=_},83728:(j,a,t)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const e=t(74081),c=t(27279),P=t(72450),o=t(90207),O=t(54673),_=t(20565),f=t(11880),p=t(35725),E=t(5529),y=t(59817),S=t(69803),b=t(63391),U=t(28518),B=t(80652),X=d=>d&&d.__esModule?d:{default:d};function K(d){if(d&&d.__esModule)return d;const v=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(d){for(const h in d)if(h!=="default"){const F=Object.getOwnPropertyDescriptor(d,h);Object.defineProperty(v,h,F.get?F:{enumerable:!0,get:()=>d[h]})}}return v.default=d,Object.freeze(v)}const R=K(c),L=X(P),l=R.forwardRef(({offLabel:d,onLabel:v,disabled:h,checked:F,onChange:z,size:Y="M",...N},g)=>{const[D=!1,I]=o.useControllableState({prop:F}),{error:w,id:$,name:Z,required:C}=_.useField(),M=D!==null&&!D,V=`${$}-hint`,G=`${$}-error`;return e.jsxs(n,{position:"relative",hasRadius:!0,padding:1,background:h?"neutral150":"neutral100",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral200",wrap:"wrap",cursor:h?"not-allowed":"pointer",hasError:Boolean(w),children:[e.jsx(s,{hasRadius:!0,flex:"1 1 50%",paddingTop:2,paddingBottom:2,paddingLeft:3,paddingRight:3,justifyContent:"center",background:h&&M?"neutral200":M?"neutral0":"transparent",borderColor:h&&M?"neutral300":M?"neutral200":h?"neutral150":"neutral100",size:Y,children:e.jsx(f.Typography,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:h?"neutral700":M?"danger700":"neutral600",children:d})}),e.jsx(s,{hasRadius:!0,flex:"1 1 50%",paddingLeft:3,paddingRight:3,justifyContent:"center",background:h&&D?"neutral200":D?"neutral0":"transparent",borderColor:h&&D?"neutral300":D?"neutral200":h?"neutral150":"neutral100",size:Y,children:e.jsx(f.Typography,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:h?"neutral700":D?"primary600":"neutral600",children:v})}),e.jsx(i,{...N,ref:g,onChange:W=>{I(W.currentTarget.checked),z?.(W)},type:"checkbox",id:$,name:Z,"aria-required":C,disabled:h,"aria-disabled":h,"aria-describedby":$?`${V} ${G}`:void 0,checked:Boolean(D)})]})}),n=L.default(p.Flex)`
  ${E.inputFocusStyle()}
`,s=L.default(p.Flex)`
  /**
    We declare the defined value because we want the height of the input when 
    the values are in a row to be 40px. But defining a height on the label
    would break the input when it wraps.
  */
  padding-top: ${({size:d})=>`${d==="S"?"2px":"6px"}`};
  padding-bottom: ${({size:d})=>`${d==="S"?"2px":"6px"}`};
`,i=L.default.input`
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 0;
  width: 100%;
`,r=R.forwardRef(({disabled:d=!1,error:v,hint:h,label:F,name:z,labelAction:Y,required:N=!1,id:g,onClear:D,clearLabel:I,checked:w,...$},Z)=>{const C=O.useId(g);return e.jsx(y.Field,{name:z,hint:h,error:v,id:C,required:N,maxWidth:"320px",children:e.jsxs(p.Flex,{direction:"column",alignItems:"stretch",gap:1,children:[e.jsxs(p.Flex,{children:[F?e.jsx(S.FieldLabel,{action:Y,children:F}):null,I&&D&&w!==null&&!d&&e.jsx(m,{onClick:D,children:I})]}),e.jsx(l,{ref:Z,checked:w,disabled:d,...$}),e.jsx(b.FieldHint,{}),e.jsx(U.FieldError,{})]})})}),m=L.default(B.TextButton)`
  align-self: flex-end;
  margin-left: auto;
`;a.ToggleInput=r},1996:(j,a,t)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const e=t(83728);a.ToggleInput=e.ToggleInput},92292:(j,a,t)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const e=t(74081),c=t(27279);function P(_){if(_&&_.__esModule)return _;const f=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(_){for(const p in _)if(p!=="default"){const E=Object.getOwnPropertyDescriptor(_,p);Object.defineProperty(f,p,E.get?E:{enumerable:!0,get:()=>_[p]})}}return f.default=_,Object.freeze(f)}const o=P(c),O=(_,f)=>{const p=o.createContext(f);function E(S){const{children:b,...U}=S,B=o.useMemo(()=>U,Object.values(U));return e.jsx(p.Provider,{value:B,children:b})}function y(S){const b=o.useContext(p);if(b)return b;if(f!==void 0)return f;throw new Error(`\`${S}\` must be used within \`${_}\``)}return E.displayName=`${_}Provider`,[E,y]};a.createContext=O},90207:(j,a,t)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const e=t(27279),c=t(81906);function P(f){if(f&&f.__esModule)return f;const p=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(f){for(const E in f)if(E!=="default"){const y=Object.getOwnPropertyDescriptor(f,E);Object.defineProperty(p,E,y.get?y:{enumerable:!0,get:()=>f[E]})}}return p.default=f,Object.freeze(p)}const o=P(e);function O({prop:f,defaultProp:p,onChange:E=()=>{}}){const[y,S]=_({defaultProp:p,onChange:E}),b=f!==void 0,U=f instanceof Function?f(y):f,B=b?U:y,X=c.useCallbackRef(E),K=o.useCallback(R=>{if(b){const l=typeof R=="function"?R(U):R;l!==U&&(X(l),S(R))}else S(R)},[b,U,S,X]);return[B,K]}function _({defaultProp:f,onChange:p}){const E=o.useState(f),[y]=E,S=o.useRef(y),b=c.useCallbackRef(p);return o.useEffect(()=>{S.current!==y&&(b(y),S.current=y)},[y,S,b]),E}a.useControllableState=O},36390:(j,a,t)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const c={sizes:t(91628).sizes,zIndices:[5,10,15,20],spaces:["0px","4px","8px","12px","16px","20px","24px","32px","40px","48px","56px","64px"],borderRadius:"4px",mediaQueries:{tablet:`@media (max-width: ${1100/16}rem)`,mobile:`@media (max-width: ${550/16}rem)`},fontSizes:[`${11/16}rem`,`${12/16}rem`,`${14/16}rem`,"1rem",`${18/16}rem`,`${32/16}rem`],lineHeights:[1.14,1.22,1.25,1.33,1.43,1.45,1.5],fontWeights:{regular:400,semiBold:500,bold:600}};a.commonTheme=c},93205:(j,a,t)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const e=t(10484),c=t(55465),P=t(36390),o={colors:e.lightColorTokenObject.color,shadows:c.lightShadowTokenObject.shadow,...P.commonTheme};a.lightTheme=o},10484:(j,a)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const t={color:{alternative100:"#f6ecfc",alternative200:"#e0c1f4",alternative500:"#ac73e6",alternative600:"#9736e8",alternative700:"#8312d1",buttonNeutral0:"#ffffff",buttonPrimary500:"#7b79ff",buttonPrimary600:"#4945ff",danger100:"#fcecea",danger200:"#f5c0b8",danger500:"#ee5e52",danger600:"#d02b20",danger700:"#b72b1a",neutral0:"#ffffff",neutral100:"#f6f6f9",neutral1000:"#181826",neutral150:"#eaeaef",neutral200:"#dcdce4",neutral300:"#c0c0cf",neutral400:"#a5a5ba",neutral500:"#8e8ea9",neutral600:"#666687",neutral700:"#4a4a6a",neutral800:"#32324d",neutral900:"#212134",primary100:"#f0f0ff",primary200:"#d9d8ff",primary500:"#7b79ff",primary600:"#4945ff",primary700:"#271fe0",secondary100:"#eaf5ff",secondary200:"#b8e1ff",secondary500:"#66b7f1",secondary600:"#0c75af",secondary700:"#006096",success100:"#eafbe7",success200:"#c6f0c2",success500:"#5cb176",success600:"#328048",success700:"#2f6846",warning100:"#fdf4dc",warning200:"#fae7b9",warning500:"#f29d41",warning600:"#d9822f",warning700:"#be5d01"}};a.lightColorTokenObject=t},55465:(j,a)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const t={shadow:{filterShadow:"0px 1px 4px rgba(33, 33, 52, 0.1)",focus:"inset 2px 0px 0px rgb(39, 31, 224), inset 0px 2px 0px rgb(39, 31, 224), inset -2px 0px 0px rgb(39, 31, 224), inset 0px -2px 0px rgb(39, 31, 224)",focusShadow:"0px 0px 6px rgba(76, 191, 255, 0.75)",popupShadow:"0px 2px 15px rgba(33, 33, 52, 0.1)",tableShadow:"0px 1px 4px rgba(33, 33, 52, 0.1)"}};a.lightShadowTokenObject=t},91628:(j,a)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});const t={input:{S:`${32/16}rem`,M:`${40/16}rem`},accordions:{S:`${48/16}rem`,M:`${88/16}rem`},badge:{S:`${16/16}rem`,M:`${24/16}rem`},button:{S:`${32/16}rem`,M:`${36/16}rem`,L:`${40/16}rem`}};a.sizes=t},65713:(j,a,t)=>{"use strict";const e=t(74081),c=o=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...o,children:e.jsx("path",{fill:"#212134",d:"M20.727 2.97a.2.2 0 0 1 .286 0l2.85 2.89a.2.2 0 0 1 0 .28L9.554 20.854a.2.2 0 0 1-.285 0l-9.13-9.243a.2.2 0 0 1 0-.281l2.85-2.892a.2.2 0 0 1 .284 0l6.14 6.209L20.726 2.97Z"})}),P=c;j.exports=P}}]);
