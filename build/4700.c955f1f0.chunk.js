(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[4700],{86961:($,W,e)=>{var o=e(13578),M=e(27138),s="[object Boolean]";function w(n){return n===!0||n===!1||M(n)&&o(n)==s}$.exports=w},92249:($,W,e)=>{var o=e(37997);function M(s){return o(s)&&s!=+s}$.exports=M},37997:($,W,e)=>{var o=e(13578),M=e(27138),s="[object Number]";function w(n){return typeof n=="number"||M(n)&&o(n)==s}$.exports=w},76368:($,W,e)=>{"use strict";e.d(W,{D:()=>n});var o=e(74081),M=e(93415),s=e(67621);function w(P,h,D){if(!P||!h||!D)return{display:"none"};const{x:A,y}=D;return{transform:`translate(${A}px, ${y}px)`}}const n=({renderItem:P})=>{const{itemType:h,isDragging:D,item:A,initialOffset:y,currentOffset:l,mouseOffset:Z}=(0,s.useDragLayer)(S=>({item:S.getItem(),itemType:S.getItemType(),initialOffset:S.getInitialSourceClientOffset(),currentOffset:S.getSourceClientOffset(),isDragging:S.isDragging(),mouseOffset:S.getClientOffset()}));return D?(0,o.jsx)(M.x,{height:"100%",left:0,position:"fixed",pointerEvents:"none",top:0,zIndex:100,width:"100%",children:(0,o.jsx)(M.x,{style:w(y,l,Z),children:P({type:h,item:A})})}):null}},55535:($,W,e)=>{"use strict";e.d(W,{B:()=>j,D:()=>V,H:()=>se,R:()=>H});var o=e(74081),M=e(10701),s=e(21395),w=e(27997),n=e(73354),P=e(74758),h=e(27875),D=e(1180),A=e(10411),y=e(76827),l=e(61020),Z=e(76368),S=e(47706),k=e(70627),T=e(72450);const X=(0,T.default)(M.k)`
  svg path {
    fill: ${({theme:B})=>B.colors.neutral600};
  }
`;function N({name:B}){return(0,o.jsxs)(M.k,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:(0,D.pxToRem)(300),children:[(0,o.jsx)(X,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6,children:(0,o.jsx)(A.Z,{width:`${8/16}rem`})}),(0,o.jsx)(s.Z,{fontWeight:"bold",children:B})]})}N.propTypes={name:k.string.isRequired};function b({type:B,item:J}){switch(B){case S.D.STAGE:return(0,o.jsx)(N,{...J});default:return null}}function V(){return(0,o.jsx)(Z.D,{renderItem:b})}function H({children:B}){return(0,o.jsx)(w.A,{children:(0,o.jsx)(n.o,{tabIndex:-1,children:(0,o.jsx)(P.D,{children:B})})})}function j({href:B}){const{formatMessage:J}=(0,l.Z)();return(0,o.jsx)(D.Link,{startIcon:(0,o.jsx)(y.Z,{}),to:B,children:J({id:"global.back",defaultMessage:"Back"})})}function se({title:B,subtitle:J,navigationAction:ue,primaryAction:r}){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(D.SettingsPageTitle,{name:B}),(0,o.jsx)(h.T,{navigationAction:ue,primaryAction:r,title:B,subtitle:J})]})}},11745:($,W,e)=>{"use strict";e.d(W,{a:()=>w,g:()=>s});var o=e(97003),M=e(47706);function s(n){if(!n)return null;const h=Object.entries(o.W.colors).filter(([,D])=>D.toUpperCase()===n.toUpperCase()).reduce((D,[A])=>(M.S?.[A]&&(D=A),D),null);return h?{themeColorName:h,name:M.S[h]}:null}function w(){return Object.entries(M.S).map(([n,P])=>({hex:o.W.colors[n].toUpperCase(),name:P}))}},52058:($,W,e)=>{"use strict";e.d(W,{a:()=>J,b:()=>N,c:()=>j,d:()=>X,g:()=>S,i:()=>se,m:()=>b,s:()=>V,u:()=>T});var o=e(27279),M=e(67621),s=e(57150),w=e(92401),n=e(1180),P=e(98934),h=e(86961),D=e(10124),A=e(92249),y=e(51527),l=e(47853);const S=r=>`content-manager.${r}`;(0,o.createContext)();const k=(r,g,{onCancel:c,onDropItem:a,onGrabItem:E,onMoveItem:v})=>{const[p,I]=(0,o.useState)(!1),Y=G=>{p&&(G==="UP"?v(g-1,g):G==="DOWN"&&v(g+1,g))},U=()=>{p?(a&&a(g),I(!1)):(E&&E(g),I(!0))},R=()=>{p&&(I(!1),c&&c(g))};return G=>{if(r&&!(G.key==="Tab"&&!p))switch(G.preventDefault(),G.key){case" ":case"Enter":U();break;case"Escape":R();break;case"ArrowDown":case"ArrowRight":Y("DOWN");break;case"ArrowUp":case"ArrowLeft":Y("UP");break}}},T=(r,{type:g="STRAPI_DND",index:c,item:a={},onStart:E,onEnd:v,onGrabItem:p,onDropItem:I,onCancel:Y,onMoveItem:U,dropSensitivity:R="regular"})=>{const Q=(0,o.useRef)(null),[{handlerId:G},fe]=(0,M.useDrop)({accept:g,collect(x){return{handlerId:x.getHandlerId()}},hover(x,Oe){if(!Q.current)return;const ie=x.index,oe=c;if(ie!==oe){if(R==="regular"){const ge=Q.current.getBoundingClientRect(),me=(ge.bottom-ge.top)/2,le=Oe.getClientOffset().y-ge.top;if(ie<oe&&le<me||ie>oe&&le>me)return}U(oe,ie),x.index=oe}}}),[{isDragging:i},_e,q]=(0,M.useDrag)({type:g,item(){E&&E();const{width:x}=Q.current?.getBoundingClientRect()??{};return{index:c,width:x,...a}},end(){v&&v()},canDrag:r,isDragging:a.id?x=>a.id===x.getItem().id:void 0,collect:x=>({isDragging:x.isDragging()})}),ye=k(r,c,{onGrabItem:p,onDropItem:I,onCancel:Y,onMoveItem:U});return[{handlerId:G,isDragging:i,handleKeyDown:ye},Q,fe,_e,q]},X=()=>r=>r["content-manager_app"]||w.J,N=()=>(0,s.P1)(X(),r=>({collectionTypeLinks:r.collectionTypeLinks,singleTypeLinks:r.singleTypeLinks})),b=()=>(0,s.P1)(X(),({components:r,models:g})=>({schemas:[...r,...g]})),V=(0,s.P1)(X(),r=>r.fieldSizes),H=(r,g)=>{typeof r=="function"?r(g):r!=null&&(r.current=g)},j=(...r)=>g=>r.forEach(c=>H(c,g));function se(r){return["integer","biginteger","decimal","float","number"].includes(r)}l.kM(l.nK,"defined",function(){return this.test("defined",n.translatedErrors.required,r=>r!==void 0)}),l.kM(l.IX,"notEmptyMin",function(r){return this.test("notEmptyMin",n.translatedErrors.min,g=>D(g)?!0:g.length>=r)}),l.kM(l.Z_,"isInferior",function(r,g){return this.test("isInferior",r,function(c){return!c||Number.isNaN(y(c))?!0:y(g)>=y(c)})}),l.kM(l.Z_,"isSuperior",function(r,g){return this.test("isSuperior",r,function(c){return!c||Number.isNaN(y(c))?!0:y(c)>=y(g)})});const B=r=>P(r,["attributes"],{}),J=(r,{components:g},c={isCreatingEntry:!0,isDraft:!0,isFromComponent:!1,isJSONTestDisabled:!1})=>{const a=B(r);return l.Ry().shape(Object.keys(a).reduce((E,v)=>{const p=a[v];if(p.type!=="relation"&&p.type!=="component"&&p.type!=="dynamiczone"){const I=ue(p.type,p,c);E[v]=I}if(p.type==="relation"&&(E[v]=["oneWay","oneToOne","manyToOne","oneToManyMorph","oneToOneMorph"].includes(p.relationType)?l.Ry().nullable():l.IX().nullable()),p.type==="component"){const I=J(g[p.component],{components:g},{...c,isFromComponent:!0});if(p.repeatable===!0){const{min:U,max:R,required:Q}=p;let G=l.Vo(fe=>{let i=l.IX().of(I);return U?Q?i=i.min(U,n.translatedErrors.min):Q!==!0&&D(fe)?i=i.nullable():i=i.min(U,n.translatedErrors.min):Q&&!c.isDraft&&(i=i.min(1,n.translatedErrors.required)),R&&(i=i.max(R,n.translatedErrors.max)),i});return E[v]=G,E}const Y=l.Vo(U=>U!==void 0?p.required===!0&&!c.isDraft?I.defined():I.nullable():p.required===!0?l.Ry().defined():l.Ry().nullable());return E[v]=Y,E}if(p.type==="dynamiczone"){let I=l.IX().of(l.Vo(({__component:R})=>J(g[R],{components:g},{...c,isFromComponent:!0})));const{max:Y,min:U}=p;U?p.required?I=I.test("min",n.translatedErrors.min,R=>c.isCreatingEntry?R&&R.length>=U:R===void 0?!0:R!==null&&R.length>=U).test("required",n.translatedErrors.required,R=>c.isCreatingEntry?R!==null||R!==void 0:R===void 0?!0:R!==null):I=I.notEmptyMin(U):p.required&&!c.isDraft&&(I=I.test("required",n.translatedErrors.required,R=>c.isCreatingEntry?R!==null||R!==void 0:R===void 0?!0:R!==null)),Y&&(I=I.max(Y,n.translatedErrors.max)),E[v]=I}return E},{}))},ue=(r,g,c)=>{let a=l.nK();return["string","uid","text","richtext","email","password","enumeration"].includes(r)&&(a=l.Z_()),r==="blocks"&&(a=l.nK().test("isJSON",n.translatedErrors.json,E=>c.isJSONTestDisabled||c.isDraft?!0:!(E&&!Array.isArray(E)))),r==="json"&&(a=l.nK(n.translatedErrors.json).test("isJSON",n.translatedErrors.json,E=>{if(c.isJSONTestDisabled||!E||!E.length)return!0;try{return JSON.parse(E),!0}catch{return!1}}).nullable().test("required",n.translatedErrors.required,E=>!(g.required&&(!E||!E.length)))),r==="email"&&(a=a.email(n.translatedErrors.email)),["number","integer","float","decimal"].includes(r)&&(a=l.Rx().transform(E=>A(E)?void 0:E).typeError()),r==="biginteger"&&(a=l.Z_().matches(/^-?\d*$/)),["date","datetime"].includes(r)&&(a=l.hT()),Object.keys(g).forEach(E=>{const v=g[E];if(v||!h(v)&&Number.isInteger(Math.floor(v))||v===0)switch(E){case"required":{c.isDraft||(r==="password"&&c.isCreatingEntry&&(a=a.required(n.translatedErrors.required)),r!=="password"&&(c.isCreatingEntry?a=a.required(n.translatedErrors.required):a=a.test("required",n.translatedErrors.required,p=>p===void 0&&!c.isFromComponent?!0:se(r)?p===0?!0:!!p:r==="boolean"?p!=null:r==="date"||r==="datetime"?typeof p=="string"?!D(p):!D(p?.toString()):!D(p))));break}case"max":{r==="biginteger"?a=a.isInferior(n.translatedErrors.max,v):a=a.max(v,n.translatedErrors.max);break}case"maxLength":a=a.max(v,n.translatedErrors.maxLength);break;case"min":{r==="biginteger"?a=a.isSuperior(n.translatedErrors.min,v):a=a.min(v,n.translatedErrors.min);break}case"minLength":{c.isDraft||(a=a.min(v,n.translatedErrors.minLength));break}case"regex":a=a.matches(new RegExp(v),{message:n.translatedErrors.regex,excludeEmptyString:!g.required});break;case"lowercase":["text","textarea","email","string"].includes(r)&&(a=a.strict().lowercase());break;case"uppercase":["text","textarea","email","string"].includes(r)&&(a=a.strict().uppercase());break;case"positive":se(r)&&(a=a.positive());break;case"negative":se(r)&&(a=a.negative());break;default:a=a.nullable()}}),a}},20498:($,W,e)=>{"use strict";e.d(W,{u:()=>n});var o=e(27279),M=e(1180),s=e(61020),w=e(40464);const n=(P={},h={})=>{const{id:D="",...A}=P,{get:y}=(0,M.useFetchClient)(),{locale:l}=(0,s.Z)(),Z=(0,M.useCollator)(l,{sensitivity:"base"}),{data:S,error:k,isError:T,isLoading:X,refetch:N}=(0,w.useQuery)(["roles",D,A],async()=>{const{data:V}=await y(`/admin/roles/${D??""}`,{params:A});return V},h);return{roles:o.useMemo(()=>{let V=[];return S&&(Array.isArray(S.data)?V=S.data:V=[S.data]),[...V].sort((H,j)=>Z.compare(H.name,j.name))},[S,Z]),error:k,isError:T,isLoading:X,refetch:N}}},59491:($,W,e)=>{"use strict";e.d(W,{u:()=>n});var o=e(27279),M=e(1180),s=e(53532),w=e(40464);function n(){const{get:P}=(0,M.useFetchClient)(),{formatAPIError:h}=(0,M.useAPIErrorHandler)(),D=(0,M.useNotification)(),A=(0,w.useQueries)([{queryKey:["content-manager","components"],async queryFn(){const{data:{data:T}}=await P("/content-manager/components");return T},onError(T){T instanceof s.d7&&D({type:"warning",message:h(T)})}},{queryKey:["content-manager","content-types"],async queryFn(){const{data:{data:T}}=await P("/content-manager/content-types");return T},onError(T){T instanceof s.d7&&D({type:"warning",message:h(T)})}}]),[y,l]=A,Z=y.isLoading||l.isLoading,S=o.useMemo(()=>(l?.data??[]).filter(T=>T.kind==="collectionType"&&T.isDisplayed),[l?.data]),k=o.useMemo(()=>(l?.data??[]).filter(T=>T.kind!=="collectionType"&&T.isDisplayed),[l?.data]);return{isLoading:Z,components:o.useMemo(()=>y?.data??[],[y?.data]),collectionTypes:S,singleTypes:k}}},88181:($,W,e)=>{"use strict";e.d(W,{u:()=>w});var o=e(27279),M=e(1180),s=e(40464);function w(n={}){const{get:P}=(0,M.useFetchClient)(),{id:h="",...D}=n,A={populate:"stages"},{data:y,isLoading:l,status:Z,refetch:S}=(0,s.useQuery)(["review-workflows","workflows",h],async()=>(await P(`/admin/review-workflows/workflows/${h}`,{params:{...A,...D}})).data),k=o.useMemo(()=>h&&y?.data?[y.data]:Array.isArray(y?.data)?y.data:[],[y?.data,h]);return{meta:o.useMemo(()=>y?.meta??{},[y?.meta]),workflows:k,isLoading:l,status:Z,refetch:S}}},54629:($,W,e)=>{"use strict";e.d(W,{S:()=>Ce,W:()=>Te,a:()=>qe,b:()=>ke,c:()=>Le,d:()=>ge,e:()=>Ve,f:()=>He,g:()=>Xe,h:()=>Pe,i:()=>Ye,j:()=>st,k:()=>et,l:()=>oe,r:()=>ze,s:()=>tt,u:()=>Oe,v:()=>gt});var o=e(27279),M=e(92401),s=e(74081),w=e(93415),n=e(21395),P=e(10701),h=e(97232),D=e(4987),A=e(10989),y=e(45322),l=e(24920),Z=e(34642),S=e(23298),k=e(74577),T=e(12881),X=e(63738),N=e(1180),b=e(70627),V=e(61020),H=e(49402),j=e(72450),se=e(77225),B=e(75438),J=e(33039),ue=e(78031),r=e(69933),g=e(61846),c=e(71563),a=e(92241),E=e(52058),v=e(61815),p=e(8175),I=e(98934),Y=e(43433),U=e(74919),R=e(92249),Q=e(87830),G=e(3243),fe=e(29206),i=e(47706),_e=e(11745),q=e(57150),ye=e(6078),x=e(47853);function Oe(t,u){const f=(0,M.V)();(0,o.useEffect)(()=>{f.injectReducer(t,u)},[f,t,u])}function ie(t){return{type:i.j,payload:{id:t}}}function oe({workflow:t}){return{type:i.A,payload:t}}function ge({workflows:t}){return{type:i.c,payload:t}}function me(t){return{type:i.k,payload:{stageId:t}}}function Pe(t={}){return{type:i.d,payload:t}}function le(t,u){return{type:i.l,payload:{stageId:t,...u}}}function Ze(t){return{type:i.m,payload:t}}function Fe(t,u){return{type:i.n,payload:{newIndex:u,oldIndex:t}}}function Ae(t){return{type:i.i,payload:t}}function ze(){return{type:i.e}}function Ve(t){return{type:i.f,payload:t}}function He(t){return{type:i.g,payload:t}}function Xe(t){return{type:i.h,payload:t}}const ve=(0,j.default)(se.Z)`
  > circle {
    fill: ${({theme:t})=>t.colors.neutral150};
  }
  > path {
    fill: ${({theme:t})=>t.colors.neutral600};
  }
`,Je=(0,j.default)(w.x)`
  border-radius: 26px;

  svg {
    height: ${({theme:t})=>t.spaces[6]};
    width: ${({theme:t})=>t.spaces[6]};

    > path {
      fill: ${({theme:t})=>t.colors.neutral600};
    }
  }

  &:hover {
    color: ${({theme:t})=>t.colors.primary600} !important;
    ${n.Z} {
      color: ${({theme:t})=>t.colors.primary600} !important;
    }

    ${ve} {
      > circle {
        fill: ${({theme:t})=>t.colors.primary600};
      }
      > path {
        fill: ${({theme:t})=>t.colors.neutral100};
      }
    }
  }

  &:active {
    ${n.Z} {
      color: ${({theme:t})=>t.colors.primary600};
    }

    ${ve} {
      > circle {
        fill: ${({theme:t})=>t.colors.primary600};
      }
      > path {
        fill: ${({theme:t})=>t.colors.neutral100};
      }
    }
  }
`;function be({children:t,...u}){return(0,s.jsx)(Je,{as:"button",background:"neutral0",border:"neutral150",paddingBottom:3,paddingLeft:4,paddingRight:4,paddingTop:3,shadow:"filterShadow",...u,children:(0,s.jsxs)(P.k,{gap:2,children:[(0,s.jsx)(ve,{"aria-hidden":!0}),(0,s.jsx)(n.Z,{variant:"pi",fontWeight:"bold",textColor:"neutral500",children:t})]})})}be.propTypes={children:b.node.isRequired};const pe={serverState:{contentTypes:{collectionTypes:[],singleTypes:[]},roles:[],workflow:null,workflows:[]},clientState:{currentWorkflow:{data:{name:"",contentTypes:[],stages:[],permissions:void 0}},isLoading:!0}};function Ye(t=pe,u){return(0,v.Uy)(t,f=>{const{payload:C}=u;switch(u.type){case i.f:{f.serverState.contentTypes=C;break}case i.h:{f.clientState.isLoading=C;break}case i.g:{f.serverState.roles=C;break}case i.A:{const m=C;m&&(f.serverState.workflow=m,f.clientState.currentWorkflow.data={...m,stages:m.stages.map(O=>({...O,color:O?.color??i.b}))});break}case i.c:{f.serverState.workflows=C;break}case i.e:{f.clientState=pe.clientState,f.serverState=pe.serverState;break}case i.k:{const{stageId:m}=C,{currentWorkflow:O}=t.clientState;f.clientState.currentWorkflow.data.stages=O.data.stages.filter(L=>(L?.id??L.__temp_key__)!==m);break}case i.d:{const{currentWorkflow:m}=t.clientState;m.data||(f.clientState.currentWorkflow.data={stages:[]});const O=We(f.clientState.currentWorkflow.data.stages);f.clientState.currentWorkflow.data.stages.push({...C,color:C?.color??i.b,__temp_key__:O});break}case i.j:{const{currentWorkflow:m}=t.clientState,{id:O}=C,L=m.data.stages.findIndex(F=>(F?.id??F?.__temp_key__)===O),K=m.data.stages[L];f.clientState.currentWorkflow.data.stages.splice(L+1,0,{...K,id:void 0,__temp_key__:We(f.clientState.currentWorkflow.data.stages)});break}case i.l:{const{currentWorkflow:m}=t.clientState,{stageId:O,...L}=C;f.clientState.currentWorkflow.data.stages=m.data.stages.map(K=>(K.id??K.__temp_key__)===O?{...K,...L}:K);break}case i.m:{const{currentWorkflow:m}=t.clientState;f.clientState.currentWorkflow.data.stages=m.data.stages.map(O=>({...O,...C}));break}case i.n:{const{currentWorkflow:{data:{stages:m}}}=t.clientState,{newIndex:O,oldIndex:L}=C;if(O>=0&&O<m.length){const K=m[L];let F=[...m];F.splice(L,1),F.splice(O,0,K),f.clientState.currentWorkflow.data.stages=F}break}case i.i:{f.clientState.currentWorkflow.data={...f.clientState.currentWorkflow.data,...C};break}}})}const We=(t=[])=>{const u=t.map(f=>f.id??f.__temp_key__);return Math.max(...u,-1)+1},re=t=>t[i.R]??pe,Ge=(0,q.P1)(re,({serverState:{contentTypes:t}})=>t),Le=(0,q.P1)(re,({serverState:{roles:t}})=>t),ke=(0,q.P1)(re,({clientState:{currentWorkflow:t}})=>t.data),Qe=(0,q.P1)(re,({serverState:{workflows:t}})=>t),qe=(0,q.P1)(re,({serverState:t,clientState:{currentWorkflow:u}})=>!ye(t.workflow,u.data)),et=(0,q.P1)(re,({serverState:t,clientState:{currentWorkflow:u}})=>!(t.workflow?.stages??[]).every(f=>!!u.data.stages.find(({id:C})=>C===f.id))),tt=(0,q.P1)(re,({clientState:{isLoading:t}})=>t),st=(0,q.P1)(re,({serverState:t})=>t),rt=(0,j.default)(h.ML)`
  padding-left: ${({theme:t})=>t.spaces[7]};
`,nt=(0,j.default)(P.k)`
  > * {
    flex-grow: 1;
  }
`,at=(0,j.default)(r.sN)`
  color: ${({theme:t})=>t.colors.danger600};
`,ot=(0,j.default)(g.xz)`
  :hover,
  :focus {
    background-color: ${({theme:t})=>t.colors.neutral100};
  }

  > span {
    font-size: 0;
  }
`,it=(0,j.default)(D.h)`
  align-items: center;
  border-radius: ${({theme:t})=>t.borderRadius};
  display: flex;
  justify-content: center;

  :hover,
  :focus {
    background-color: ${({theme:t})=>t.colors.neutral100};
  }

  svg {
    height: auto;
    width: ${({theme:t})=>t.spaces[3]}};
  }
`,lt=(0,_e.a)();function dt(){return(0,s.jsx)(w.x,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",display:"block",hasRadius:!0,padding:6,shadow:"tableShadow"})}function je({id:t,index:u,canDelete:f,canReorder:C,canUpdate:m,isOpen:O=!1,stagesCount:L}){const K=_=>`${_+1} of ${L}`,F=_=>{de(d({id:"dnd.grab-item",defaultMessage:"{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel."},{item:ae.value,position:K(_)}))},we=_=>{de(d({id:"dnd.drop-item",defaultMessage:"{item}, dropped. Final position in list: {position}."},{item:ae.value,position:K(_)}))},Re=()=>{de(d({id:"dnd.cancel-item",defaultMessage:"{item}, dropped. Re-order cancelled."},{item:ae.value}))},Ee=(_,z)=>{de(d({id:"dnd.reorder",defaultMessage:"{item}, moved. New position in list: {position}."},{item:ae.value,position:K(_)})),te(Fe(z,_))},Se=()=>{Ie(!0)},[he,de]=o.useState(null),{formatMessage:d}=(0,V.Z)(),{trackUsage:ee}=(0,N.useTracking)(),te=(0,H.useDispatch)(),ne=(0,N.useNotification)(),[xe,ft]=o.useState(O),[mt,Ie]=o.useState(!1),[ae,Be,pt]=(0,c.U$)(`stages.${u}.name`),[De,Ue,Et]=(0,c.U$)(`stages.${u}.color`),[ce,Ke,ht]=(0,c.U$)(`stages.${u}.permissions`),Dt=(0,H.useSelector)(Le),[{handlerId:Mt,isDragging:yt,handleKeyDown:Ot},Pt,vt,Ct,Ne]=(0,E.u)(C,{index:u,item:{name:ae.value},onGrabItem:F,onDropItem:we,onMoveItem:Ee,onCancel:Re,type:i.D.STAGE}),Tt=(0,E.c)(Pt,vt),wt=lt.map(({hex:_,name:z})=>({value:_,label:d({id:"Settings.review-workflows.stage.color.name",defaultMessage:"{name}"},{name:z}),color:_})),{themeColorName:Rt}=(0,_e.g)(De.value)??{},$e=Dt.filter(_=>_.code!=="strapi-super-admin");return o.useEffect(()=>{Ne((0,a.rX)(),{captureDraggingState:!1})},[Ne,u]),(0,s.jsxs)(w.x,{ref:Tt,children:[he&&(0,s.jsx)(A.T,{"aria-live":"assertive",children:he}),yt?(0,s.jsx)(dt,{}):(0,s.jsxs)(y.U,{size:"S",variant:"primary",onToggle:()=>{ft(!xe),xe||ee("willEditStage")},expanded:xe,shadow:"tableShadow",error:Be.error??Ue?.error??Ke?.error??!1,hasErrorMessage:!1,children:[(0,s.jsx)(l.B,{title:ae.value,togglePosition:"left",action:(f||m)&&(0,s.jsxs)(P.k,{children:[(0,s.jsxs)(g.fC,{children:[(0,s.jsxs)(ot,{size:"S",endIcon:null,paddingLeft:2,paddingRight:2,children:[(0,s.jsx)(B.Z,{"aria-hidden":!0,focusable:!1}),(0,s.jsx)(A.T,{as:"span",children:d({id:"[tbdb].components.DynamicZone.more-actions",defaultMessage:"More actions"})})]}),(0,s.jsx)(g.VY,{popoverPlacement:"bottom-end",zIndex:2,children:(0,s.jsxs)(g.rl,{children:[m&&(0,s.jsx)(r.sN,{onClick:()=>te(ie(t)),children:d({id:"Settings.review-workflows.stage.delete",defaultMessage:"Duplicate stage"})}),f&&(0,s.jsx)(at,{onClick:()=>te(me(t)),children:d({id:"Settings.review-workflows.stage.delete",defaultMessage:"Delete"})})]})})]}),m&&(0,s.jsx)(it,{background:"transparent",forwardedAs:"div",hasRadius:!0,role:"button",noBorder:!0,tabIndex:0,"data-handler-id":Mt,ref:Ct,label:d({id:"Settings.review-workflows.stage.drag",defaultMessage:"Drag"}),onClick:_=>_.stopPropagation(),onKeyDown:Ot,children:(0,s.jsx)(J.Z,{})})]})}),(0,s.jsx)(Z.v,{padding:6,background:"neutral0",hasRadius:!0,children:(0,s.jsxs)(S.r,{gap:4,children:[(0,s.jsx)(k.P,{col:6,children:(0,s.jsx)(T.o,{...ae,id:ae.name,disabled:!m,label:d({id:"Settings.review-workflows.stage.name.label",defaultMessage:"Stage name"}),error:Be.error??!1,onChange:_=>{pt.setValue(_.target.value),te(le(t,{name:_.target.value}))},required:!0})}),(0,s.jsx)(k.P,{col:6,children:(0,s.jsx)(X.q4,{disabled:!m,error:Ue?.error??!1,id:De.name,required:!0,label:d({id:"content-manager.reviewWorkflows.stage.color",defaultMessage:"Color"}),onChange:_=>{Et.setValue(_),te(le(t,{color:_}))},value:De.value.toUpperCase(),startIcon:(0,s.jsx)(P.k,{as:"span",height:2,background:De.value,borderColor:Rt==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2}),children:wt.map(({value:_,label:z,color:Me})=>{const{themeColorName:St}=(0,_e.g)(Me);return(0,s.jsx)(X.ag,{value:_,startIcon:(0,s.jsx)(P.k,{as:"span",height:2,background:Me,borderColor:St==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2}),children:z},_)})})}),(0,s.jsx)(k.P,{col:6,children:$e.length===0?(0,s.jsx)(N.NotAllowedInput,{description:{id:"Settings.review-workflows.stage.permissions.noPermissions.description",defaultMessage:"You don\u2019t have the permission to see roles"},intlLabel:{id:"Settings.review-workflows.stage.permissions.label",defaultMessage:"Roles that can change this stage"},name:ce.name}):(0,s.jsxs)(P.k,{alignItems:"flex-end",gap:3,children:[(0,s.jsx)(nt,{grow:1,children:(0,s.jsx)(h.NU,{...ce,disabled:!m,error:Ke.error??!1,id:ce.name,label:d({id:"Settings.review-workflows.stage.permissions.label",defaultMessage:"Roles that can change this stage"}),onChange:_=>{const z=_.map(Me=>({role:parseInt(Me,10),action:"admin::review-workflows.stage.transition"}));ht.setValue(z),te(le(t,{permissions:z}))},placeholder:d({id:"Settings.review-workflows.stage.permissions.placeholder",defaultMessage:"Select a role"}),required:!0,value:(ce.value??[]).map(_=>`${_.role}`),withTags:!0,children:[{label:d({id:"Settings.review-workflows.stage.permissions.allRoles.label",defaultMessage:"All roles"}),children:$e.map(_=>({value:`${_.id}`,label:_.name}))}].map(_=>"children"in _?(0,s.jsx)(h.Ab,{label:_.label,values:_.children.map(z=>z.value),children:_.children.map(z=>(0,s.jsx)(rt,{value:z.value,children:z.label},z.value))},_.label):(0,s.jsx)(h.ML,{value:_.value,children:_.label},_.value))})}),(0,s.jsx)(D.h,{disabled:!m,icon:(0,s.jsx)(ue.Z,{}),label:d({id:"Settings.review-workflows.stage.permissions.apply.label",defaultMessage:"Apply to all stages"}),size:"L",variant:"secondary",onClick:()=>Se(ce.value)})]})})]})})]}),(0,s.jsx)(N.ConfirmDialog.Root,{iconRightButton:null,isOpen:mt,onToggleDialog:()=>Ie(!1),onConfirm:()=>{te(Ze({permissions:ce.value})),Ie(!1),ne({type:"success",message:d({id:"Settings.review-workflows.page.edit.confirm.stages.permissions.copy.success",defaultMessage:"Applied roles to all other stages of the workflow"})})},variantRightButton:"primary",children:(0,s.jsx)(N.ConfirmDialog.Body,{children:(0,s.jsx)(n.Z,{textAlign:"center",variant:"omega",children:d({id:"Settings.review-workflows.page.edit.confirm.stages.permissions.copy",defaultMessage:"Roles that can change that stage will be applied to all the other stages."})})})})]})}je.propTypes=b.shape({id:b.number.isRequired,color:b.string.isRequired,canDelete:b.bool.isRequired,canReorder:b.bool.isRequired,canUpdate:b.bool.isRequired,stagesCount:b.number.isRequired}).isRequired;const ct=(0,j.default)(w.x)`
  transform: translateX(-50%);
`;function Ce({canDelete:t,canUpdate:u,stages:f}){const{formatMessage:C}=(0,V.Z)(),m=(0,H.useDispatch)(),{trackUsage:O}=(0,N.useTracking)();return(0,s.jsxs)(P.k,{direction:"column",gap:6,width:"100%",children:[(0,s.jsxs)(w.x,{position:"relative",spacing:4,width:"100%",children:[(0,s.jsx)(ct,{background:"neutral200",height:"100%",left:"50%",position:"absolute",top:"0",width:2,zIndex:1}),(0,s.jsx)(P.k,{direction:"column",alignItems:"stretch",gap:6,zIndex:2,position:"relative",as:"ol",children:f.map((L,K)=>{const F=L?.id??L.__temp_key__;return(0,s.jsx)(w.x,{as:"li",children:(0,s.jsx)(je,{id:F,index:K,isOpen:!L.id,canDelete:f.length>1&&t,canReorder:f.length>1,canUpdate:u,stagesCount:f.length})},`stage-${F}`)})})]}),u&&(0,s.jsx)(be,{type:"button",onClick:()=>{m(Pe({name:""})),O("willCreateStage")},children:C({id:"Settings.review-workflows.stage.add",defaultMessage:"Add new stage"})})]})}Ce.defaultProps={canDelete:!0,canUpdate:!0,stages:[]},Ce.propTypes={canDelete:b.bool,canUpdate:b.bool,stages:b.arrayOf(b.shape({id:b.number,__temp_key__:b.number,name:b.string.isRequired}))};const ut=(0,j.default)(h.ML)`
  padding-left: ${({theme:t})=>t.spaces[7]};
`,_t=(0,j.default)(n.Z)`
  font-style: italic;
`;function Te({canUpdate:t}){const{formatMessage:u,locale:f}=(0,V.Z)(),C=(0,H.useDispatch)(),{collectionTypes:m,singleTypes:O}=(0,H.useSelector)(Ge),L=(0,H.useSelector)(ke),K=(0,H.useSelector)(Qe),[F,we,Re]=(0,c.U$)("name"),[Ee,Se,he]=(0,c.U$)("contentTypes"),de=(0,N.useCollator)(f,{sensitivity:"base"});return(0,s.jsxs)(S.r,{background:"neutral0",hasRadius:!0,gap:4,padding:6,shadow:"tableShadow",children:[(0,s.jsx)(k.P,{col:6,children:(0,s.jsx)(T.o,{...F,id:F.name,disabled:!t,label:u({id:"Settings.review-workflows.workflow.name.label",defaultMessage:"Workflow Name"}),error:we.error??!1,onChange:d=>{C(Ae({name:d.target.value})),Re.setValue(d.target.value)},required:!0})}),(0,s.jsx)(k.P,{col:6,children:(0,s.jsx)(h.NU,{...Ee,customizeContent:d=>u({id:"Settings.review-workflows.workflow.contentTypes.displayValue",defaultMessage:"{count} {count, plural, one {content type} other {content types}} selected"},{count:d.length}),disabled:!t,error:Se.error??!1,id:Ee.name,label:u({id:"Settings.review-workflows.workflow.contentTypes.label",defaultMessage:"Associated to"}),onChange:d=>{C(Ae({contentTypes:d})),he.setValue(d)},placeholder:u({id:"Settings.review-workflows.workflow.contentTypes.placeholder",defaultMessage:"Select"}),children:[...m.length>0?[{label:u({id:"Settings.review-workflows.workflow.contentTypes.collectionTypes.label",defaultMessage:"Collection Types"}),children:[...m].sort((d,ee)=>de.compare(d.info.displayName,ee.info.displayName)).map(d=>({label:d.info.displayName,value:d.uid}))}]:[],...O.length>0?[{label:u({id:"Settings.review-workflows.workflow.contentTypes.singleTypes.label",defaultMessage:"Single Types"}),children:[...O].map(d=>({label:d.info.displayName,value:d.uid}))}]:[]].map(d=>"children"in d?(0,s.jsx)(h.Ab,{label:d.label,values:d.children.map(ee=>ee.value.toString()),children:d.children.map(ee=>{const{name:te}=K.find(ne=>(L&&ne.id!==L.id||!L)&&ne.contentTypes.includes(ee.value))??{};return(0,s.jsx)(ut,{value:ee.value,children:u({id:"Settings.review-workflows.workflow.contentTypes.assigned.notice",defaultMessage:"{label} {name, select, undefined {} other {<i>(assigned to <em>{name}</em> workflow)</i>}}"},{label:ee.label,name:te,em:(...ne)=>(0,s.jsx)(n.Z,{as:"em",fontWeight:"bold",children:ne}),i:(...ne)=>(0,s.jsx)(_t,{children:ne})})},ee.value)})},d.label):(0,s.jsx)(h.ML,{value:d.value,children:d.label},d.value))})})]})}Te.defaultProps={canUpdate:!0},Te.propTypes={canUpdate:b.bool};async function gt({values:t,formatMessage:u}){const f=x.Ry({contentTypes:x.IX().of(x.Z_()),name:x.Z_().max(255,u({id:"Settings.review-workflows.validation.name.max-length",defaultMessage:"Name can not be longer than 255 characters"})).required(),stages:x.IX().of(x.Ry().shape({name:x.Z_().required(u({id:"Settings.review-workflows.validation.stage.name",defaultMessage:"Name is required"})).max(255,u({id:"Settings.review-workflows.validation.stage.max-length",defaultMessage:"Name can not be longer than 255 characters"})).test("unique-name",u({id:"Settings.review-workflows.validation.stage.duplicate",defaultMessage:"Stage name must be unique"}),function(C){const{options:{context:m}}=this;return m.stages.filter(O=>O.name===C).length===1}),color:x.Z_().required(u({id:"Settings.review-workflows.validation.stage.color",defaultMessage:"Color is required"})).matches(/^#(?:[0-9a-fA-F]{3}){1,2}$/i),permissions:x.IX(x.Ry({role:x.Rx().strict().typeError(u({id:"Settings.review-workflows.validation.stage.permissions.role.number",defaultMessage:"Role must be of type number"})).required,action:x.Z_().required({id:"Settings.review-workflows.validation.stage.permissions.action.required",defaultMessage:"Action is a required argument"})})).strict()})).min(1)});try{return await f.validate(t,{abortEarly:!1,context:t}),!0}catch(C){let m={};return C instanceof x.p8&&C.inner.forEach(O=>{Y(m,O.path,O.message)}),m}}},53532:($,W,e)=>{"use strict";e.d(W,{d7:()=>s});var o=e(5466);const{Axios:M,AxiosError:s,CanceledError:w,isCancel:n,CancelToken:P,VERSION:h,all:D,Cancel:A,isAxiosError:y,spread:l,toFormData:Z,AxiosHeaders:S,HttpStatusCode:k,formToJSON:T,getAdapter:X,mergeConfig:N}=o.default}}]);
