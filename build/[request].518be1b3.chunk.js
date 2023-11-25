(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[6750],{22452:(j,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>ce});var e=t(74081),o=t(27279),i=t(51447),c=t(61020),r=t(93198),l=t(17735),a=t(16026),s=t(1180);const p={getLast:async()=>{console.log("summaryAPIWrapper : getLast");try{return(0,s.request)("/cms-analyzer/summaries/last",{method:"GET"})}catch($){console.log("Error: ",$)}return null}};var y=t(97487),f=t(10084),x=t(34739),b=t(58629),m=t.n(b),d=t(69819),M=t.n(d),N=t(89867),u=t.n(N),v=t(16747),z=t.n(v),h=t(22493),T=t(50568),C=t(1905),I=t(25074),D=t(16897),E=t(96053),A=t(58892),O=t(41226),S=t(94305),B=t(29046),U=t(23201),k=t(30219),J=t(70627),R=t.n(J),Z=t(15243),le=t.n(Z),H=t(84637),K=t(78711);const te=$=>{const{formatMessage:L}=(0,c.Z)(),X=5,F=(0,K.getSeoWarningLevelColor)(),q=(0,K.getSeoErrorLevelColor)();return(0,e.jsxs)(h.Table,{colCount:X,rowCount:$.value.length,children:[(0,e.jsx)(h.Thead,{children:(0,e.jsxs)(h.Tr,{children:[(0,e.jsx)(h.Th,{children:(0,e.jsx)(T.Typography,{variant:"sigma",children:L({id:(0,r.Z)("plugin.seo.experttable.tag")})})}),(0,e.jsx)(h.Th,{children:(0,e.jsx)(T.Typography,{variant:"sigma",children:L({id:(0,r.Z)("plugin.seo.experttable.message")})})}),(0,e.jsx)(h.Th,{children:(0,e.jsx)(T.Typography,{variant:"sigma",children:L({id:(0,r.Z)("plugin.seo.experttable.level")})})}),(0,e.jsx)(h.Th,{children:(0,e.jsx)(T.Typography,{variant:"sigma",children:L({id:(0,r.Z)("plugin.seo.experttable.content")})})})]})}),(0,e.jsx)(h.Tbody,{children:$.value.map(Y=>(0,e.jsxs)(h.Tr,{children:[(0,e.jsx)(h.Td,{children:(0,e.jsx)(T.Typography,{textColor:"neutral800",children:Y.tag})}),(0,e.jsx)(h.Td,{children:(0,e.jsx)(T.Typography,{textColor:"neutral800",children:Y.message})}),(0,e.jsx)(h.Td,{children:Y.level==="warnings"?(0,e.jsx)(C.Badge,{backgroundColor:F,textColor:(0,K.getBadgeTextColor)(F),paddingLeft:"5",paddingRight:"5",paddingTop:"2",paddingBottom:"2",children:"Low"}):(0,e.jsx)(C.Badge,{backgroundColor:q,textColor:(0,K.getBadgeTextColor)(q),paddingLeft:"5",paddingRight:"5",paddingTop:"2",paddingBottom:"2",children:"High"})}),(0,e.jsx)(h.Td,{children:(0,e.jsx)(T.Typography,{textColor:"neutral800",children:Y.content})})]},`${Y.message}_${Y.content}`))})]})};te.defaultProps={value:[]},te.propTypes={value:R().array};const ee=$=>{const{formatMessage:L}=(0,c.Z)(),X=5,F=(0,K.getSeoWarningLevelColor)(),q=(0,K.getSeoErrorLevelColor)();return(0,e.jsxs)(h.Table,{colCount:X,rowCount:$.value.length,children:[(0,e.jsx)(h.Thead,{children:(0,e.jsxs)(h.Tr,{children:[(0,e.jsx)(h.Th,{children:(0,e.jsx)(T.Typography,{variant:"sigma",children:L({id:(0,r.Z)("plugin.seo.experttable.tag")})})}),(0,e.jsx)(h.Th,{children:(0,e.jsx)(T.Typography,{variant:"sigma",children:L({id:(0,r.Z)("plugin.seo.experttable.message")})})}),(0,e.jsx)(h.Th,{children:(0,e.jsx)(T.Typography,{variant:"sigma",children:L({id:(0,r.Z)("plugin.seo.experttable.level")})})}),(0,e.jsx)(h.Th,{children:(0,e.jsx)(T.Typography,{variant:"sigma",children:L({id:(0,r.Z)("plugin.seo.experttable.content")})})})]})}),(0,e.jsx)(h.Tbody,{children:$.value.map(Y=>(0,e.jsxs)(h.Tr,{children:[(0,e.jsx)(h.Td,{children:(0,e.jsx)(T.Typography,{textColor:"neutral800",children:Y.tag})}),(0,e.jsx)(h.Td,{children:(0,e.jsx)(T.Typography,{textColor:"neutral800",children:Y.message})}),(0,e.jsx)(h.Td,{children:Y.level==="warnings"?(0,e.jsx)(C.Badge,{backgroundColor:F,textColor:(0,K.getBadgeTextColor)(F),paddingLeft:"5",paddingRight:"5",paddingTop:"2",paddingBottom:"2",children:"Low"}):(0,e.jsx)(C.Badge,{backgroundColor:q,textColor:(0,K.getBadgeTextColor)(q),paddingLeft:"5",paddingRight:"5",paddingTop:"2",paddingBottom:"2",children:"High"})}),(0,e.jsx)(h.Td,{children:(0,e.jsx)(T.Typography,{textColor:"neutral800",children:Y.content})})]},`${Y.message}_${Y.content}`))})]})};ee.defaultProps={value:[]},ee.propTypes={value:R().array};var Te=t(76229),be=t.n(Te);const ie=$=>{const{formatMessage:L}=(0,c.Z)(),X=5;return(0,e.jsxs)(h.Table,{colCount:X,rowCount:$.value.length,children:[(0,e.jsx)(h.Thead,{children:(0,e.jsxs)(h.Tr,{children:[(0,e.jsx)(h.Th,{children:(0,e.jsx)(T.Typography,{variant:"sigma",children:"Message"})}),(0,e.jsx)(h.Th,{children:(0,e.jsx)(T.Typography,{variant:"sigma",children:"Priority"})}),(0,e.jsx)(h.Th,{children:(0,e.jsx)(T.Typography,{variant:"sigma",children:"Level"})}),(0,e.jsx)(h.Th,{children:(0,e.jsx)(T.Typography,{variant:"sigma",children:"Content"})})]})}),(0,e.jsx)(h.Tbody,{children:$.value.map(F=>(0,e.jsxs)(h.Tr,{children:[(0,e.jsx)(h.Td,{children:(0,e.jsx)(T.Typography,{textColor:"neutral800",children:F.message})}),(0,e.jsx)(h.Td,{children:(0,e.jsx)(T.Typography,{textColor:"neutral800",children:F.priority})}),(0,e.jsx)(h.Td,{children:(0,e.jsx)(T.Typography,{textColor:"neutral800",children:F.level})}),(0,e.jsx)(h.Td,{children:(0,e.jsx)(T.Typography,{textColor:"neutral800",children:F.content})}),(0,e.jsx)(h.Td,{children:(0,e.jsx)(D.Flex,{children:(0,e.jsx)(f.IconButton,{onClick:()=>console.log("Show again"),label:"Show again",noBorder:!0,icon:(0,e.jsx)(be(),{})})})})]},`${F.message}_${F.content}`))})]})};ie.defaultProps={value:[]},ie.propTypes={value:R().array};var se=t(5833),ge=t(83067);const de=$=>(0,e.jsx)(e.Fragment,{children:$.isVisible&&(0,e.jsxs)(se.ModalLayout,{onClose:$.onClose,labelledBy:"title",children:[(0,e.jsx)(se.ModalHeader,{children:(0,e.jsx)(T.Typography,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title",children:"Custom the front url title"})}),(0,e.jsx)(se.ModalBody,{children:(0,e.jsx)(ge.TextInput,{label:"New title",name:"newTile",placeholder:"new title",onChange:({target:{value:L}})=>{},value:$.value,hint:"The name of the url you want to custom"})}),(0,e.jsx)(se.ModalFooter,{startActions:(0,e.jsx)(y.Button,{onClick:$.onClose,variant:"tertiary",children:"Cancel"}),endActions:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(y.Button,{onClick:$.onSave,children:"Save"})})})]})});de.defaultProps={onClose:()=>{console.log("modal is closing!")},onSave:()=>{console.log("saving!")},isVisible:!1,value:""},de.propTypes={onClose:R().func,onSave:R().func,isVisible:R().bool,value:R().string};const re=$=>{const{formatMessage:L}=(0,c.Z)(),[X,F]=(0,o.useState)([]),[q,Y]=(0,o.useState)([]),[Ne,ue]=(0,o.useState)([]),[ye,V]=(0,o.useState)(!1),{push:Me}=(0,i.k6)();(0,o.useEffect)(()=>{if($.value&&$.value.seoAnalyse){const G=JSON.parse($.value.seoAnalyse);G&&G.length>0&&(F(G.filter(_=>_.target===0||_.target===2)),Y(G.filter(_=>_.target===1||_.target===2)),ue([{message:"test",priority:70,target:0,content:""}]))}},[]);const me=async(G,_,he,xe,oe)=>{await a.Z.setAnalyzeAsChecked(G),Me(`/content-manager/${_}/${he}/${xe}?plugins[i18n][locale]=${oe}`)};return(0,e.jsxs)(k.Accordion,{expanded:$.toggleState[$.id],toggle:()=>$.onToggle($.id),id:$.id,children:[(0,e.jsx)(k.AccordionToggle,{startIcon:(0,e.jsx)(le(),{"aria-hidden":!0}),togglePosition:"left",action:(0,e.jsx)(A.Stack,{horizontal:!0,size:0,children:(0,e.jsx)(f.IconButton,{label:L({id:(0,r.Z)("plugin.seo.table.edit")}),icon:(0,e.jsx)(u(),{}),onClick:()=>me($.value.id,$.value.contentKind,$.value.apiName,$.value.documentId,$.value.locale)})}),title:$.value.isChecked?"":`${L({id:(0,r.Z)("plugin.seo.table.rank")})}: ${$.value.depth} - ${L({id:(0,r.Z)("plugin.seo.table.url")})}: ${$.value.frontUrl}`,description:$.value.isChecked?`${L({id:(0,r.Z)("plugin.seo.table.rank")})}: ${$.value.depth} - ${L({id:(0,r.Z)("plugin.seo.table.url")})}: ${$.value.frontUrl}`:""}),(0,e.jsx)(k.AccordionContent,{children:(0,e.jsx)(I.Box,{padding:3,children:(0,e.jsx)(I.Box,{padding:4,background:"neutral0",children:(0,e.jsx)(I.Box,{padding:8,background:"primary100",children:(0,e.jsxs)(H.TabGroup,{label:"Some stuff for the label",id:"tabs",onTabChange:G=>console.log(G),children:[(0,e.jsxs)(H.Tabs,{children:[(0,e.jsxs)(H.Tab,{children:[L({id:(0,r.Z)("plugin.seo.experttable.contentOptimisation")})," (",X.length,")"]}),(0,e.jsxs)(H.Tab,{children:[L({id:(0,r.Z)("plugin.seo.experttable.frontOptimisation")})," (",q.length,")"]})]}),(0,e.jsxs)(H.TabPanels,{children:[(0,e.jsx)(H.TabPanel,{children:(0,e.jsx)(te,{value:X})}),(0,e.jsx)(H.TabPanel,{children:(0,e.jsx)(I.Box,{padding:4,background:"neutral0",children:(0,e.jsx)(ee,{value:q})})})]})]})})})})}),(0,e.jsx)(de,{isVisible:ye,onClose:()=>{V(G=>!G)},onSave:()=>{V(G=>!G)},value:$.value.frontUrl})]},$.id)};re.defaultProps={value:null,id:"id",onToggle:$=>{},toggleState:[]},re.propTypes={value:R().object,id:R().string,onToggle:R().func,toggleState:R().object};var Q=t(4697),ae=t.n(Q);const fe=$=>{const{formatMessage:L,locale:X}=(0,c.Z)(),[F,q]=(0,o.useState)(),[Y,Ne]=(0,o.useState)([]),[ue,ye]=(0,o.useState)(!0),[V,Me]=(0,o.useState)(),[me,G]=(0,o.useState)(),[_,he]=(0,o.useState)({}),xe=(0,s.useNotification)(),[oe,De]=(0,o.useState)(null),{push:ve}=(0,i.k6)(),Ie=(0,K.getSeoWarningLevelColor)(),ze=(0,K.getSeoErrorLevelColor)();(0,o.useEffect)(async()=>{ye(!0),await Ce(),q(await l.Z.get()),ye(!1)},[]),(0,o.useEffect)(()=>{let P;return V&&(P=setInterval(async()=>{const w=await a.Z.analysisState();G({current:w.analyzed,total:w.total}),w.isRunning||(await Ce(),clearInterval(P),P=null)},3e3)),()=>{P&&(clearInterval(P),P=null)}},[V]);const Ce=async()=>{try{const P=await a.Z.analysisState();if(Me(P.isRunning),G({current:P.analyzed,total:P.total}),!P.isRunning){let w=await p.getLast();const W=await a.Z.getSortedAnalyses();console.log("Retrieved analyses:",W),De(w),Ne(W),Ee(W)}}catch(P){console.log("HomePage mount error: ",P)}},Ee=P=>{let w={};for(let W=0;W<P.length;++W)w[`acc-${W}`]=W===0;he(w)},$e=async()=>{try{const P=[F.seo.frontUrl].filter(w=>w);if(P.length>0)Me(!0),G(null),De(null),await a.Z.run({urls:P,navigationTimeout:F.seo.navigationTimeout*1e3,clickToFind:!!F.seo.clickToFind,locale:X});else throw"No front end URL to crawl. Check in settings if an URL is set."}catch(P){if(xe===void 0)return;xe({type:"warning",message:P})}},Le=P=>{let w={..._};for(const W in w)W===P?w[W]=!w[W]:w[W]=!1;he(w)},Se=()=>{ve(`/settings/${ae()}/seo`)},we=async(P,w,W,pe,je)=>{await a.Z.setAnalyzeAsChecked(P),ve(`/content-manager/${w}/${W}/${pe}?plugins[i18n][locale]=${je}`)},Oe=async()=>{await a.Z.cancel()},Re=()=>(0,e.jsx)(S.Layout,{children:(0,e.jsx)(k.AccordionGroup,{children:Y.map((P,w)=>{const W=`acc-${w}`;return(0,e.jsx)(re,{toggleState:_,id:W,value:P,onToggle:Le},`contentpage-${w}`)})})}),Pe=()=>(0,e.jsxs)(h.Table,{colCount:5,rowCount:Y.length,children:[(0,e.jsx)(h.Thead,{children:(0,e.jsxs)(h.Tr,{children:[(0,e.jsx)(h.Th,{children:(0,e.jsx)(T.Typography,{variant:"sigma",children:L({id:(0,r.Z)("plugin.seo.table.rank")})})}),(0,e.jsx)(h.Th,{children:(0,e.jsx)(T.Typography,{variant:"sigma",children:L({id:(0,r.Z)("plugin.seo.table.url")})})}),(0,e.jsx)(h.Th,{children:(0,e.jsx)(T.Typography,{variant:"sigma",children:L({id:(0,r.Z)("plugin.seo.table.errors")})})}),(0,e.jsx)(h.Th,{children:(0,e.jsx)(T.Typography,{variant:"sigma",children:L({id:(0,r.Z)("plugin.seo.table.edit")})})})]})}),(0,e.jsx)(h.Tbody,{children:Y.map((w,W)=>{const pe=JSON.parse(w.seoAnalyse),je=pe.filter(ne=>(ne.target===0||ne.target===2)&&ne.level=="warnings"),Ae=pe.filter(ne=>(ne.target===0||ne.target===2)&&ne.level=="errors");return(0,e.jsxs)(h.Tr,{children:[(0,e.jsx)(h.Td,{children:(0,e.jsx)(T.Typography,{textColor:"neutral800",fontWeight:w.isChecked?"inherited":"bold",children:w.depth})}),(0,e.jsx)(h.Td,{style:{whiteSpace:"break-spaces"},children:(0,e.jsx)(T.Typography,{textColor:"neutral800",fontWeight:w.isChecked?"inherited":"bold",children:w.frontUrl})}),(0,e.jsx)(h.Td,{children:(0,e.jsxs)(E.Grid,{gridCols:2,gap:2,children:[(0,e.jsx)(I.Box,{children:Ae?.length?(0,e.jsx)(C.Badge,{backgroundColor:ze,textColor:(0,K.getBadgeTextColor)(ze),padding:2,children:"High: "+Ae?.length}):(0,e.jsx)(e.Fragment,{})}),(0,e.jsx)(I.Box,{children:je?.length?(0,e.jsx)(C.Badge,{backgroundColor:Ie,textColor:(0,K.getBadgeTextColor)(Ie),padding:2,children:"Low: "+je?.length}):(0,e.jsx)(e.Fragment,{})})]})}),(0,e.jsx)(h.Td,{children:(0,e.jsx)(f.IconButton,{label:"Edit",icon:(0,e.jsx)(u(),{}),onClick:()=>we(w.id,w.contentKind,w.apiName,w.documentId,w.locale)})})]},`contentpage-${W}`)})})]}),Be=()=>F!=null?F.seo.expertMode?Re():Pe():(0,e.jsx)(e.Fragment,{}),Ue=()=>(0,e.jsxs)(E.Grid,{gridCols:8,gap:2,children:[(0,e.jsx)(E.GridItem,{col:2,style:{height:"100%"},children:(0,e.jsxs)(I.Box,{background:"neutral0",shadow:"filterShadow",hasRadius:!0,paddingTop:5,paddingBottom:5,paddingLeft:3,paddingRight:3,style:{height:"100%"},children:[(0,e.jsx)(T.Typography,{variant:"omega",fontWeight:"bold",textColor:"neutral500",textTransform:"uppercase",children:L({id:(0,r.Z)("plugin.seo.summary.information.title")})}),(0,e.jsx)(O.Divider,{unsetMargin:!0}),(0,e.jsxs)(D.Flex,{justifyContent:"space-between",paddingTop:5,children:[(0,e.jsx)(T.Typography,{variant:"omega",fontWeight:"bold",textColor:"neutral900",children:L({id:(0,r.Z)("plugin.seo.summary.lastUpdate")})}),(0,e.jsx)(T.Typography,{variant:"omega",textColor:"neutral900",children:oe?.date?new Date(oe?.date).toLocaleString(X):"--"})]}),(0,e.jsxs)(D.Flex,{justifyContent:"space-between",paddingTop:5,children:[(0,e.jsx)(T.Typography,{variant:"omega",fontWeight:"bold",textColor:"neutral900",children:L({id:(0,r.Z)("plugin.seo.summary.startedBy")})}),(0,e.jsx)(T.Typography,{variant:"omega",textColor:"neutral900",children:oe?.user??"--"})]})]})}),(0,e.jsx)(E.GridItem,{col:2,style:{height:"100%"},children:(0,e.jsxs)(I.Box,{background:"neutral0",shadow:"filterShadow",hasRadius:!0,paddingTop:5,paddingBottom:5,paddingLeft:3,paddingRight:3,style:{height:"100%"},children:[(0,e.jsx)(T.Typography,{variant:"omega",fontWeight:"bold",textColor:"neutral500",textTransform:"uppercase",children:L({id:(0,r.Z)("plugin.seo.summary.result.title")})}),(0,e.jsx)(O.Divider,{}),(0,e.jsxs)(D.Flex,{justifyContent:"space-between",paddingTop:5,children:[(0,e.jsx)(T.Typography,{variant:"omega",fontWeight:"bold",textColor:(0,K.getSeoErrorLevelColor)(),children:oe?.nbErrorHigh??"--"}),(0,e.jsx)(T.Typography,{variant:"omega",textColor:"neutral900",children:L({id:(0,r.Z)("plugin.seo.summary.highNumber")})})]}),(0,e.jsxs)(D.Flex,{justifyContent:"space-between",paddingTop:5,children:[(0,e.jsxs)(T.Typography,{variant:"omega",fontWeight:"bold",textColor:(0,K.getSeoWarningLevelColor)(),children:[oe?.nbErrorLow??"--"," "]}),(0,e.jsx)(T.Typography,{variant:"omega",textColor:"neutral900",children:L({id:(0,r.Z)("plugin.seo.summary.lowNumber")})})]})]})}),(0,e.jsx)(E.GridItem,{col:4,style:{height:"100%"},children:(0,e.jsxs)(I.Box,{background:"neutral0",shadow:"filterShadow",hasRadius:!0,paddingTop:5,paddingBottom:5,paddingLeft:3,paddingRight:3,style:{height:"100%"},children:[(0,e.jsx)(T.Typography,{variant:"omega",fontWeight:"bold",textColor:"neutral500",textTransform:"uppercase",children:L({id:(0,r.Z)("plugin.seo.summary.recommendation.title")})}),(0,e.jsx)(O.Divider,{}),(0,e.jsx)(D.Flex,{paddingTop:5,paddingBottom:5,children:(0,e.jsx)(T.Typography,{variant:"omega",children:L({id:(0,r.Z)("plugin.seo.summary.recommendation.descr")})})})]})})]});return(0,e.jsxs)(U.Main,{labelledBy:"title","aria-busy":ue||V,children:[(0,e.jsx)(S.HeaderLayout,{id:"title",title:L({id:(0,r.Z)("plugin.seo.title")}),subtitle:L({id:(0,r.Z)("plugin.seo.subtitle")}),primaryAction:(0,e.jsxs)(A.Stack,{horizontal:!0,size:2,children:[V&&(0,e.jsx)(y.Button,{startIcon:(0,e.jsx)(z(),{}),variant:"Stack",onClick:Oe,size:"L",children:L({id:(0,r.Z)("plugin.seo.cancel")})}),(0,e.jsx)(y.Button,{onClick:$e,startIcon:(0,e.jsx)(m(),{}),size:"L",disabled:ue||V,loading:V,children:L({id:(0,r.Z)(V?"plugin.seo.analysisPending":"plugin.seo.runAnalysis")})})]}),secondaryAction:(0,e.jsx)(y.Button,{variant:"tertiary",onClick:Se,startIcon:(0,e.jsx)(M(),{}),children:L({id:(0,r.Z)("plugin.seo.settings")})})}),(0,e.jsxs)(S.ContentLayout,{children:[Ue(),(0,e.jsx)("br",{}),ue||V?(0,e.jsx)(B.EmptyStateLayout,{icon:(0,e.jsx)(x.Loader,{children:L({id:(0,r.Z)("plugin.seo.loading")})}),content:V?L({id:(0,r.Z)("plugin.seo.runningAnalysisProgress")},me??{current:0,total:0}):"",children:(0,e.jsx)(y.Button,{variant:"tertiary",onClick:Oe,startIcon:(0,e.jsx)(M(),{}),children:L({id:(0,r.Z)("plugin.seo.settings")})})}):Be()]})]})},ce=(0,o.memo)(fe)},63744:j=>{function n(e,o,i,c){Object.defineProperty(e,o,{get:i,set:c,enumerable:!0,configurable:!0})}n(j.exports,"composeEventHandlers",()=>t);function t(e,o,{checkForDefaultPrevented:i=!0}={}){return function(r){if(e?.(r),i===!1||!r.defaultPrevented)return o?.(r)}}},48383:(j,n,t)=>{var e=t(27279);function o(l,a,s,g){Object.defineProperty(l,a,{get:s,set:g,enumerable:!0,configurable:!0})}o(j.exports,"composeRefs",()=>c),o(j.exports,"useComposedRefs",()=>r);function i(l,a){typeof l=="function"?l(a):l!=null&&(l.current=a)}function c(...l){return a=>l.forEach(s=>i(s,a))}function r(...l){return e.useCallback(c(...l),l)}},82:(j,n,t)=>{var e=t(52342),o=t(27279),i=t(63744),c=t(41816),r=t(48383),l=t(3765),a=t(38932);function s(I,D,E,A){Object.defineProperty(I,D,{get:E,set:A,enumerable:!0,configurable:!0})}function g(I){return I&&I.__esModule?I.default:I}s(j.exports,"DismissableLayer",()=>d),s(j.exports,"DismissableLayerBranch",()=>N),s(j.exports,"Root",()=>T),s(j.exports,"Branch",()=>C);const p="DismissableLayer",y="dismissableLayer.update",f="dismissableLayer.pointerDownOutside",x="dismissableLayer.focusOutside";let b;const m=o.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),d=o.forwardRef((I,D)=>{var E;const{disableOutsidePointerEvents:A=!1,onEscapeKeyDown:O,onPointerDownOutside:S,onFocusOutside:B,onInteractOutside:U,onDismiss:k,...J}=I,R=o.useContext(m),[Z,le]=o.useState(null),H=(E=Z?.ownerDocument)!==null&&E!==void 0?E:globalThis?.document,[,K]=o.useState({}),te=r.useComposedRefs(D,Q=>le(Q)),ee=Array.from(R.layers),[Te]=[...R.layersWithOutsidePointerEventsDisabled].slice(-1),be=ee.indexOf(Te),ie=Z?ee.indexOf(Z):-1,se=R.layersWithOutsidePointerEventsDisabled.size>0,ge=ie>=be,de=u(Q=>{const ae=Q.target,fe=[...R.branches].some(ce=>ce.contains(ae));!ge||fe||(S?.(Q),U?.(Q),Q.defaultPrevented||k?.())},H),re=v(Q=>{const ae=Q.target;[...R.branches].some(ce=>ce.contains(ae))||(B?.(Q),U?.(Q),Q.defaultPrevented||k?.())},H);return a.useEscapeKeydown(Q=>{ie===R.layers.size-1&&(O?.(Q),!Q.defaultPrevented&&k&&(Q.preventDefault(),k()))},H),o.useEffect(()=>{if(Z)return A&&(R.layersWithOutsidePointerEventsDisabled.size===0&&(b=H.body.style.pointerEvents,H.body.style.pointerEvents="none"),R.layersWithOutsidePointerEventsDisabled.add(Z)),R.layers.add(Z),z(),()=>{A&&R.layersWithOutsidePointerEventsDisabled.size===1&&(H.body.style.pointerEvents=b)}},[Z,H,A,R]),o.useEffect(()=>()=>{Z&&(R.layers.delete(Z),R.layersWithOutsidePointerEventsDisabled.delete(Z),z())},[Z,R]),o.useEffect(()=>{const Q=()=>K({});return document.addEventListener(y,Q),()=>document.removeEventListener(y,Q)},[]),o.createElement(c.Primitive.div,g(e)({},J,{ref:te,style:{pointerEvents:se?ge?"auto":"none":void 0,...I.style},onFocusCapture:i.composeEventHandlers(I.onFocusCapture,re.onFocusCapture),onBlurCapture:i.composeEventHandlers(I.onBlurCapture,re.onBlurCapture),onPointerDownCapture:i.composeEventHandlers(I.onPointerDownCapture,de.onPointerDownCapture)}))}),M="DismissableLayerBranch",N=o.forwardRef((I,D)=>{const E=o.useContext(m),A=o.useRef(null),O=r.useComposedRefs(D,A);return o.useEffect(()=>{const S=A.current;if(S)return E.branches.add(S),()=>{E.branches.delete(S)}},[E.branches]),o.createElement(c.Primitive.div,g(e)({},I,{ref:O}))});function u(I,D=globalThis?.document){const E=l.useCallbackRef(I),A=o.useRef(!1),O=o.useRef(()=>{});return o.useEffect(()=>{const S=U=>{if(U.target&&!A.current){let J=function(){h(f,E,R,{discrete:!0})};var k=J;const R={originalEvent:U};U.pointerType==="touch"?(D.removeEventListener("click",O.current),O.current=J,D.addEventListener("click",O.current,{once:!0})):J()}else D.removeEventListener("click",O.current);A.current=!1},B=window.setTimeout(()=>{D.addEventListener("pointerdown",S)},0);return()=>{window.clearTimeout(B),D.removeEventListener("pointerdown",S),D.removeEventListener("click",O.current)}},[D,E]),{onPointerDownCapture:()=>A.current=!0}}function v(I,D=globalThis?.document){const E=l.useCallbackRef(I),A=o.useRef(!1);return o.useEffect(()=>{const O=S=>{S.target&&!A.current&&h(x,E,{originalEvent:S},{discrete:!1})};return D.addEventListener("focusin",O),()=>D.removeEventListener("focusin",O)},[D,E]),{onFocusCapture:()=>A.current=!0,onBlurCapture:()=>A.current=!1}}function z(){const I=new CustomEvent(y);document.dispatchEvent(I)}function h(I,D,E,{discrete:A}){const O=E.originalEvent.target,S=new CustomEvent(I,{bubbles:!1,cancelable:!0,detail:E});D&&O.addEventListener(I,D,{once:!0}),A?c.dispatchDiscreteCustomEvent(O,S):O.dispatchEvent(S)}const T=d,C=N},41816:(j,n,t)=>{var e=t(52342),o=t(27279),i=t(69530),c=t(81019);function r(y,f,x,b){Object.defineProperty(y,f,{get:x,set:b,enumerable:!0,configurable:!0})}function l(y){return y&&y.__esModule?y.default:y}r(j.exports,"Primitive",()=>s),r(j.exports,"Root",()=>p),r(j.exports,"dispatchDiscreteCustomEvent",()=>g);const s=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((y,f)=>{const x=o.forwardRef((b,m)=>{const{asChild:d,...M}=b,N=d?c.Slot:f;return o.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),o.createElement(N,l(e)({},M,{ref:m}))});return x.displayName=`Primitive.${f}`,{...y,[f]:x}},{});function g(y,f){y&&i.flushSync(()=>y.dispatchEvent(f))}const p=s},81019:(j,n,t)=>{var e=t(52342),o=t(27279),i=t(48383);function c(f,x,b,m){Object.defineProperty(f,x,{get:b,set:m,enumerable:!0,configurable:!0})}function r(f){return f&&f.__esModule?f.default:f}c(j.exports,"Slot",()=>l),c(j.exports,"Slottable",()=>s),c(j.exports,"Root",()=>y);const l=o.forwardRef((f,x)=>{const{children:b,...m}=f,d=o.Children.toArray(b),M=d.find(g);if(M){const N=M.props.children,u=d.map(v=>v===M?o.Children.count(N)>1?o.Children.only(null):o.isValidElement(N)?N.props.children:null:v);return o.createElement(a,r(e)({},m,{ref:x}),o.isValidElement(N)?o.cloneElement(N,void 0,u):null)}return o.createElement(a,r(e)({},m,{ref:x}),b)});l.displayName="Slot";const a=o.forwardRef((f,x)=>{const{children:b,...m}=f;return o.isValidElement(b)?o.cloneElement(b,{...p(m,b.props),ref:x?i.composeRefs(x,b.ref):b.ref}):o.Children.count(b)>1?o.Children.only(null):null});a.displayName="SlotClone";const s=({children:f})=>o.createElement(o.Fragment,null,f);function g(f){return o.isValidElement(f)&&f.type===s}function p(f,x){const b={...x};for(const m in x){const d=f[m],M=x[m];/^on[A-Z]/.test(m)?d&&M?b[m]=(...u)=>{M(...u),d(...u)}:d&&(b[m]=d):m==="style"?b[m]={...d,...M}:m==="className"&&(b[m]=[d,M].filter(Boolean).join(" "))}return{...f,...b}}const y=l},3765:(j,n,t)=>{var e=t(27279);function o(c,r,l,a){Object.defineProperty(c,r,{get:l,set:a,enumerable:!0,configurable:!0})}o(j.exports,"useCallbackRef",()=>i);function i(c){const r=e.useRef(c);return e.useEffect(()=>{r.current=c}),e.useMemo(()=>(...l)=>{var a;return(a=r.current)===null||a===void 0?void 0:a.call(r,...l)},[])}},38932:(j,n,t)=>{var e=t(27279),o=t(3765);function i(r,l,a,s){Object.defineProperty(r,l,{get:a,set:s,enumerable:!0,configurable:!0})}i(j.exports,"useEscapeKeydown",()=>c);function c(r,l=globalThis?.document){const a=o.useCallbackRef(r);e.useEffect(()=>{const s=g=>{g.key==="Escape"&&a(g)};return l.addEventListener("keydown",s),()=>l.removeEventListener("keydown",s)},[a,l])}},74349:(j,n,t)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(74081),o=t(27279),i=t(72450),c=t(15093),r=t(54673),l=t(11880),a=t(35725),s=t(44747),g=M=>M&&M.__esModule?M:{default:M};function p(M){if(M&&M.__esModule)return M;const N=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(M){for(const u in M)if(u!=="default"){const v=Object.getOwnPropertyDescriptor(M,u);Object.defineProperty(N,u,v.get?v:{enumerable:!0,get:()=>M[u]})}}return N.default=M,Object.freeze(N)}const y=p(o),f=g(i),x=({theme:M,expanded:N,variant:u,disabled:v,error:z})=>z?`1px solid ${M.colors.danger600} !important`:v?`1px solid ${M.colors.neutral150}`:N?`1px solid ${M.colors.primary600}`:u==="primary"?`1px solid ${M.colors.neutral0}`:`1px solid ${M.colors.neutral100}`,b=f.default(l.Typography)``,m=f.default(s.Box)`
  border: ${x};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:M})=>M.colors.primary600};

    ${b} {
      color: ${({theme:M,expanded:N})=>N?void 0:M.colors.primary700};
    }

    ${l.Typography} {
      color: ${({theme:M,expanded:N})=>N?void 0:M.colors.primary600};
    }

    & > ${a.Flex} {
      background: ${({theme:M})=>M.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:M})=>M.colors.primary200};
    }
  }
`,d=({children:M,disabled:N=!1,error:u,expanded:v=!1,hasErrorMessage:z=!0,id:h,onToggle:T,toggle:C,size:I="M",variant:D="primary",shadow:E})=>{const A=r.useId(h),O=y.useMemo(()=>({expanded:v,onToggle:T,toggle:C,id:A,size:I,variant:D,disabled:N}),[N,v,A,T,I,C,D]);return e.jsxs(c.AccordionContext.Provider,{value:O,children:[e.jsx(m,{"data-strapi-expanded":v,disabled:N,"aria-disabled":N,expanded:v,hasRadius:!0,variant:D,error:u,shadow:E,children:M}),u&&z&&e.jsx(s.Box,{paddingTop:1,children:e.jsx(l.Typography,{variant:"pi",textColor:"danger600",children:u})})]})};n.Accordion=d,n.AccordionTypography=b},40932:(j,n,t)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(74081),o=t(15093),i=t(44747),c=({children:r,...l})=>{const{expanded:a,id:s}=o.useAccordion();if(!a)return null;const g=`accordion-content-${s}`,p=`accordion-label-${s}`,y=`accordion-desc-${s}`;return e.jsx(i.Box,{role:"region",id:g,"aria-labelledby":p,"aria-describedby":y,...l,children:r})};n.AccordionContent=c},15093:(j,n,t)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(27279),o=e.createContext({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),i=()=>e.useContext(o);n.AccordionContext=o,n.useAccordion=i},43270:(j,n,t)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(74081),o=t(27279),i=t(72450),c=t(50359),r=t(44747),l=t(35725),a=t(11880),s=d=>d&&d.__esModule?d:{default:d};function g(d){if(d&&d.__esModule)return d;const M=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(d){for(const N in d)if(N!=="default"){const u=Object.getOwnPropertyDescriptor(d,N);Object.defineProperty(M,N,u.get?u:{enumerable:!0,get:()=>d[N]})}}return M.default=d,Object.freeze(M)}const p=g(o),y=s(i),f=y.default(r.Box)`
  border-bottom: 1px solid ${({theme:d})=>d.colors.neutral200};
  border-right: 1px solid ${({theme:d})=>d.colors.neutral200};
  border-left: 1px solid ${({theme:d})=>d.colors.neutral200};
  border-radius: 0 0 ${({theme:d})=>d.borderRadius} ${({theme:d})=>d.borderRadius};
`,x=y.default(r.Box)`
  & > * {
    & > * {
      border-radius: unset;
    }
  }

  & > * {
    border-radius: unset;
    border-right: 1px solid ${({theme:d})=>d.colors.neutral200};
    border-left: 1px solid ${({theme:d})=>d.colors.neutral200};
    border-bottom: 1px solid ${({theme:d})=>d.colors.neutral200};
  }

  & > *:first-of-type {
    border-top: 1px solid ${({theme:d})=>d.colors.neutral200};
    border-radius: ${({theme:d})=>d.borderRadius} ${({theme:d})=>d.borderRadius} 0 0;
    & > * {
      border-radius: ${({theme:d})=>d.borderRadius} ${({theme:d})=>d.borderRadius} 0 0;
    }

    &:hover {
      border-top: 1px solid ${({theme:d})=>d.colors.primary600};
    }
  }

  & [data-strapi-expanded='true'] {
    border: 1px solid ${({theme:d})=>d.colors.primary600};
  }

  ${({theme:d,footer:M})=>`
    &:not(${M}) {
      & > *:last-of-type {
        border-radius: 0 0 ${d.borderRadius} ${d.borderRadius};
      }
    }
  `}
`,b=y.default(r.Box)`
  svg path {
    fill: ${({theme:d})=>d.colors.neutral500};
  }
`,m=({children:d,footer:M,label:N,labelAction:u,error:v})=>{const z=p.Children.toArray(d).map(h=>p.cloneElement(h,{hasErrorMessage:!1}));return e.jsxs(c.KeyboardNavigable,{attributeName:"data-strapi-accordion-toggle",children:[N&&e.jsxs(l.Flex,{paddingBottom:1,children:[e.jsx(a.Typography,{variant:"pi",as:"label",textColor:"neutral800",fontWeight:"bold",children:N}),u&&e.jsx(b,{paddingLeft:1,children:u})]}),e.jsx(x,{footer:M,children:z}),M&&e.jsx(f,{children:M}),v&&e.jsx(r.Box,{paddingTop:1,children:e.jsx(a.Typography,{variant:"pi",textColor:"danger600",children:v})})]})};n.AccordionGroup=m},18459:(j,n,t)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(74081),o=t(71434),i=t(72450),c=t(74349),r=t(15093),l=t(65336),a=t(80652),s=t(34760),g=t(35725),p=t(11880),f=(d=>d&&d.__esModule?d:{default:d})(i),x=f.default(a.TextButton)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:d,expanded:M})=>M?d.colors.primary600:d.colors.neutral500};
    }
  }
`,b=f.default(g.Flex)`
  min-height: ${({theme:d,size:M})=>d.sizes.accordions[M]};
  border-radius: ${({theme:d,expanded:M})=>M?`${d.borderRadius} ${d.borderRadius} 0 0`:d.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:d})=>d.colors.primary600};
      }
    }
  }
`,m=({title:d,description:M,as:N="span",togglePosition:u="right",action:v,...z})=>{const{onToggle:h,toggle:T,expanded:C,id:I,size:D,variant:E,disabled:A}=r.useAccordion(),O=`accordion-content-${I}`,S=`accordion-label-${I}`,B=`accordion-desc-${I}`,U=D==="M"?6:4,k=D==="M"?U:U-2,J=l.getBackground({expanded:C,disabled:A,variant:E}),Z={as:N,fontWeight:D==="S"?"bold":void 0,id:S,textColor:C?"primary600":"neutral700",ellipsis:!0,variant:D==="M"?"delta":void 0},le=C?"primary600":"neutral600",H=C?"primary200":"neutral200",K=D==="M"?`${32/16}rem`:`${24/16}rem`,te=()=>{A||(T&&!h?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),T()):h&&h())},ee=e.jsx(g.Flex,{justifyContent:"center",borderRadius:"50%",height:K,width:K,transform:C?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:H,cursor:A?"not-allowed":"pointer",onClick:te,shrink:0,children:e.jsx(s.Icon,{as:o.CarretDown,width:D==="M"?`${11/16}rem`:`${8/16}rem`,color:C?"primary600":"neutral600"})});return e.jsx(b,{paddingBottom:k,paddingLeft:U,paddingRight:U,paddingTop:k,background:J,expanded:C,size:D,justifyContent:"space-between",cursor:A?"not-allowed":"",children:e.jsxs(g.Flex,{gap:3,flex:1,maxWidth:"100%",children:[u==="left"&&ee,e.jsx(x,{onClick:te,"aria-disabled":A,"aria-expanded":C,"aria-controls":O,"aria-labelledby":S,"data-strapi-accordion-toggle":!0,expanded:C,type:"button",flex:1,minWidth:0,...z,children:e.jsxs(e.Fragment,{children:[e.jsx(c.AccordionTypography,{...Z,children:d}),M&&e.jsx(p.Typography,{as:"p",id:B,textColor:le,children:M})]})}),u==="right"&&e.jsxs(g.Flex,{gap:3,children:[ee,v]}),u==="left"&&v]})})};n.AccordionToggle=m},30219:(j,n,t)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(74349),o=t(40932),i=t(18459),c=t(43270);n.Accordion=e.Accordion,n.AccordionTypography=e.AccordionTypography,n.AccordionContent=o.AccordionContent,n.AccordionToggle=i.AccordionToggle,n.AccordionGroup=c.AccordionGroup},65336:(j,n)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=({expanded:e,disabled:o,variant:i})=>{let c="neutral100";return e?c="primary100":o?c="neutral150":i==="primary"&&(c="neutral0"),c};n.getBackground=t},98675:(j,n,t)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(82);function o(r){if(r&&r.__esModule)return r;const l=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(r){for(const a in r)if(a!=="default"){const s=Object.getOwnPropertyDescriptor(r,a);Object.defineProperty(l,a,s.get?s:{enumerable:!0,get:()=>r[a]})}}return l.default=r,Object.freeze(l)}const c=o(e).Root;n.DismissibleLayer=c},19658:(j,n,t)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(74081),o=t(72450),i=t(44747),l=(s=>s&&s.__esModule?s:{default:s})(o).default(i.Box)`
  height: 1px;
  border: none;
  /* If contained in a Flex parent we want to prevent the Divider to shink */
  flex-shrink: 0;
  ${({unsetMargin:s})=>s?"margin: 0;":""}
`,a=({unsetMargin:s=!0,...g})=>e.jsx(l,{...g,background:"neutral150",as:"hr",unsetMargin:s});n.Divider=a},41226:(j,n,t)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(19658);n.Divider=e.Divider},67931:(j,n,t)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(74081),o=t(72450),i=t(44747),c=t(35725),r=t(11880),s=(p=>p&&p.__esModule?p:{default:p})(o).default(i.Box)`
  svg {
    height: ${88/16}rem;
  }
`,g=({icon:p,content:y,action:f,hasRadius:x=!0,shadow:b="tableShadow"})=>e.jsxs(c.Flex,{alignItems:"center",direction:"column",padding:11,background:"neutral0",hasRadius:x,shadow:b,children:[e.jsx(s,{paddingBottom:6,"aria-hidden":!0,children:p}),e.jsx(i.Box,{paddingBottom:4,children:e.jsx(r.Typography,{variant:"delta",as:"p",textAlign:"center",textColor:"neutral600",children:y})}),f]});n.EmptyStateLayout=g},29046:(j,n,t)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(67931);n.EmptyStateLayout=e.EmptyStateLayout},16897:(j,n,t)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(35725);n.Flex=e.Flex},9935:(j,n,t)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(74081),o=t(27279),i=t(70598),c=t(77547),r=({onEscape:l,restoreFocus:a=!0,...s})=>{const g=o.useRef(null);o.useEffect(()=>{let y=null;return a&&(y=document.activeElement),()=>{y&&y.focus()}},[a]),o.useEffect(()=>{if(!g.current)return;const y=i.getFocusableNodes(g.current);y.length>0?y[0].focus():console.warn("[FocusTrap]: it seems there are no focusable elements in the focus trap tree. Make sure there s at least one.")},[]);const p=y=>{if(y.key===c.KeyboardKeys.ESCAPE&&l){l();return}if(y.key!==c.KeyboardKeys.TAB)return;const f=i.getFocusableNodes(g.current);if(f.length>0){const x=f[0],b=f[f.length-1];y.shiftKey?x===document.activeElement&&(y.preventDefault(),b.focus()):b===document.activeElement&&(y.preventDefault(),x.focus())}};return e.jsx("div",{ref:g,onKeyDown:p,...s})};n.FocusTrap=r},80518:(j,n,t)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(74081),o=t(27279),i=t(72450),c=t(70321),r=t(23555),l=t(30863),a=t(35725),s=u=>u&&u.__esModule?u:{default:u};function g(u){if(u&&u.__esModule)return u;const v=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(u){for(const z in u)if(z!=="default"){const h=Object.getOwnPropertyDescriptor(u,z);Object.defineProperty(v,z,h.get?h:{enumerable:!0,get:()=>u[z]})}}return v.default=u,Object.freeze(v)}const p=g(o),y=s(i),f="tertiary",x="secondary",b=["S","M","L"],m=[f,x],d=p.forwardRef(({label:u,background:v,borderWidth:z,noBorder:h=!1,children:T,icon:C,disabled:I=!1,onClick:D,size:E=b[0],"aria-label":A,variant:O=m[0],...S},B)=>{const U=J=>{!I&&D&&D(J)},k=e.jsxs(M,{"aria-disabled":I,background:I?"neutral150":v,borderWidth:h?0:z,justifyContent:"center",...S,ref:B,size:E,onClick:U,variant:O,children:[e.jsx(c.VisuallyHidden,{as:"span",children:u??A}),p.cloneElement(C||T,{"aria-hidden":!0,focusable:!1})]});return u?e.jsx(r.Tooltip,{label:u,children:k}):k}),M=y.default(l.BaseButton)`
  background-color: ${({theme:u,variant:v})=>{if(v===x)return u.colors.primary100}};
  border-color: ${({theme:u,variant:v})=>v===x?u.colors.primary200:u.colors.neutral200};
  height: ${({theme:u,size:v})=>u.sizes.button[v]};
  width: ${({theme:u,size:v})=>u.sizes.button[v]};

  svg {
    g,
    path {
      fill: ${({theme:u,variant:v})=>v===x?u.colors.primary500:u.colors.neutral500};
    }
  }

  :hover,
  :focus {
    svg {
      g,
      path {
        fill: ${({theme:u,variant:v})=>v===x?u.colors.primary600:u.colors.neutral600};
      }
    }
  }

  &[aria-disabled='true'] {
    svg {
      path {
        fill: ${({theme:u})=>u.colors.neutral600};
      }
    }
  }
`,N=y.default(a.Flex)`
  & span:first-child button {
    border-left: 1px solid ${({theme:u})=>u.colors.neutral200};
    border-radius: ${({theme:u})=>`${u.borderRadius} 0 0 ${u.borderRadius}`};
  }

  & span:last-child button {
    border-radius: ${({theme:u})=>`0 ${u.borderRadius} ${u.borderRadius} 0`};
  }

  & ${M} {
    border-radius: 0;
    border-left: none;

    svg {
      path {
        fill: ${({theme:u})=>u.colors.neutral700};
      }
    }

    &:hover {
      background-color: ${({theme:u})=>u.colors.neutral100};

      svg {
        path {
          fill: ${({theme:u})=>u.colors.neutral800};
        }
      }
    }

    &:active {
      background-color: ${({theme:u})=>u.colors.neutral150};
      svg {
        path {
          fill: ${({theme:u})=>u.colors.neutral900};
        }
      }
    }

    &[aria-disabled='true'] {
      svg {
        path {
          fill: ${({theme:u})=>u.colors.neutral600};
        }
      }
    }
  }
`;n.IconButton=d,n.IconButtonGroup=N},10084:(j,n,t)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(80518);n.IconButton=e.IconButton,n.IconButtonGroup=e.IconButtonGroup},50359:(j,n,t)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(74081),o=t(77547),i=t(44747),c=({tagName:r,attributeName:l="",...a})=>{const s=()=>{const y=document.activeElement;return y?r?y.tagName.toLowerCase()===r:y.hasAttribute(l):!1},g=y=>r?y.querySelectorAll(r):y.querySelectorAll(`[${l}]`),p=y=>{switch(y.key){case o.KeyboardKeys.RIGHT:case o.KeyboardKeys.DOWN:{if(s()){y.preventDefault();const f=document.activeElement,x=[...g(y.currentTarget)],b=x.findIndex(d=>d===f),m=b+1<x.length?b+1:0;x[m].focus()}break}case o.KeyboardKeys.LEFT:case o.KeyboardKeys.UP:{if(s()){y.preventDefault();const f=document.activeElement,x=[...g(y.currentTarget)],b=x.findIndex(d=>d===f),m=b-1>-1?b-1:x.length-1;x[m].focus()}break}case o.KeyboardKeys.HOME:{s()&&(y.preventDefault(),g(y.currentTarget).item(0).focus());break}case o.KeyboardKeys.END:{if(s()){y.preventDefault();const f=g(y.currentTarget);f.item(f.length-1).focus()}break}}};return e.jsx(i.Box,{onKeyDown:p,...a})};n.KeyboardNavigable=c},83330:(j,n,t)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(74081),o=t(27279),i=t(72450),c=t(19112),r=t(70321),l=x=>x&&x.__esModule?x:{default:x};function a(x){if(x&&x.__esModule)return x;const b=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(x){for(const m in x)if(m!=="default"){const d=Object.getOwnPropertyDescriptor(x,m);Object.defineProperty(b,m,d.get?d:{enumerable:!0,get:()=>x[m]})}}return b.default=x,Object.freeze(b)}const s=a(o),g=l(i),p=i.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,y=g.default.img`
  animation: ${p} 1s infinite linear;
  will-change: transform;
  ${({small:x,theme:b})=>x&&`width: ${b.spaces[6]}; height: ${b.spaces[6]};`}
`,f=s.forwardRef(({children:x,small:b=!1,...m},d)=>e.jsxs("div",{role:"alert","aria-live":"assertive",ref:d,...m,children:[e.jsx(r.VisuallyHidden,{children:x}),e.jsx(y,{src:c,"aria-hidden":!0,small:b})]}));n.Loader=f},19112:j=>{"use strict";const n="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjMiIGhlaWdodD0iNjMiIHZpZXdCb3g9IjAgMCA2MyA2MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQyLjU1NjMgMTEuOTgxNkMzOS40ODQgMTAuMzA3MSAzNS44NTc1IDkuMjkwOTcgMzIuMzM1NCA5LjEzNTIxQzI4LjY0NDMgOC45Mjg4OCAyNC44Mjk1IDkuNzIzMTggMjEuMzMzNiAxMS40MTI5QzIwLjkxMjMgMTEuNTkwMSAyMC41Mzc2IDExLjgxMDEgMjAuMTcyMiAxMi4wMjQ5TDIwLjAxMDggMTIuMTE3OUMxOS44Nzc0IDEyLjE5NTEgMTkuNzQ0MSAxMi4yNzI0IDE5LjYwOCAxMi4zNTM2QzE5LjMyNTMgMTIuNTE0NiAxOS4wNDkyIDEyLjY3NDQgMTguNzU0NCAxMi44NzkyQzE4LjU0NjMgMTMuMDMyOSAxOC4zMzk1IDEzLjE3NTkgMTguMTMwMSAxMy4zMjNDMTcuNTY1OCAxMy43MjA4IDE2Ljk4NjggMTQuMTMxNyAxNi40OTgzIDE0LjU5NzlDMTQuODQ3NiAxNS45NTI0IDEzLjU1NzEgMTcuNjA3NSAxMi42MDcxIDE4LjkyMTRDMTAuNDM2NSAyMi4xNTY2IDkuMDg2MjIgMjUuOTU2NyA4LjgwNzAyIDI5LjYxNDNMOC43NzY0IDMwLjE1ODhDOC43MzMyOCAzMC45MTk2IDguNjg0NzYgMzEuNzA1NyA4Ljc1MzUzIDMyLjQ1NTVDOC43NjY0OCAzMi42MDg0IDguNzY2MSAzMi43NjM4IDguNzc1MDYgMzIuOTE0QzguNzg4OTUgMzMuMjI5IDguODAxNTIgMzMuNTM3MyA4Ljg0NiAzMy44NjcyTDkuMDczOTYgMzUuNDIyMUM5LjA5NzU2IDM1LjU3NjQgOS4xMTk4IDM1Ljc0MTMgOS4xNjMzIDM1LjkyNjNMOS42NTkxOSAzNy45MjcyTDEwLjEzOCAzOS4yODIzQzEwLjI3MjkgMzkuNjY3MyAxMC40MTU4IDQwLjA3NTEgMTAuNiA0MC40M0MxMi4wMjkyIDQzLjYzNyAxNC4xNDI1IDQ2LjQ1NzggMTYuNzA2MyA0OC41ODVDMTkuMDUwOCA1MC41Mjk2IDIxLjgyNCA1Mi4wMDIzIDI0Ljc0OTEgNTIuODQ1MkwyNi4yMzcxIDUzLjIzNzZDMjYuMzc4MSA1My4yNjkzIDI2LjQ5MjYgNTMuMjg4OSAyNi42MDMxIDUzLjMwNThMMjYuNzc3NSA1My4zMzExQzI3LjAwNTIgNTMuMzYzNiAyNy4yMTk1IDUzLjM5ODYgMjcuNDQ0NSA1My40MzVDMjcuODU5OCA1My41MDc2IDI4LjI2NzIgNTMuNTc0OCAyOC43MDc5IDUzLjYxODNMMzAuNTY0MSA1My43MjI5QzMwLjk1MTYgNTMuNzI0OSAzMS4zMzUyIDUzLjcwNjggMzEuNzA4MSA1My42ODc0QzMxLjkwMzkgNTMuNjgxIDMyLjA5ODQgNTMuNjY4MSAzMi4zMjg4IDUzLjY2MkMzNC41MjUzIDUzLjQ3NzIgMzYuNTEwNiA1My4wNjM0IDM4LjA1MTYgNTIuNDY1MkMzOC4xNzY5IDUyLjQxNzEgMzguMzAwOCA1Mi4zNzk2IDM4LjQyMzQgNTIuMzM1NUMzOC42NzI3IDUyLjI0OTkgMzguOTI1OSA1Mi4xNjcgMzkuMTQzMiA1Mi4wNTk5TDQwLjg1OTEgNTEuMjYyNkw0Mi41NzAyIDUwLjI2NkM0Mi45MDA5IDUwLjA2ODIgNDMuMDIwNSA0OS42NDE0IDQyLjgyODIgNDkuMjk4NEM0Mi42MzIgNDguOTUyNiA0Mi4yMDM0IDQ4LjgzMDggNDEuODYzNCA0OS4wMTY2TDQwLjE3OTIgNDkuOTIxOEwzOC40OTk1IDUwLjYyMjRDMzguMzE2OSA1MC42OTUzIDM4LjEyMSA1MC43NTM0IDM3LjkyMjQgNTAuODE1NUMzNy43ODM4IDUwLjg0ODkgMzcuNjUxOCA1MC44OTgzIDM3LjUwMTIgNTAuOTQwOEMzNi4wNzExIDUxLjQzNSAzNC4yNDQ1IDUxLjc0MjUgMzIuMjQ0IDUxLjgzNDZDMzIuMDQ0MiA1MS44MzgzIDMxLjg0NzEgNTEuODM3OSAzMS42NTQgNTEuODQwM0MzMS4zMDUxIDUxLjg0MTQgMzAuOTYwMiA1MS44NDUxIDMwLjYzOTIgNTEuODMwNUwyOC45MTc3IDUxLjY3MjVDMjguNTQ3NiA1MS42MTkgMjguMTY5NSA1MS41NDI3IDI3Ljc4NDggNTEuNDY3OEMyNy41NjM5IDUxLjQxNjcgMjcuMzM3NiA1MS4zNzM3IDI3LjEyOTkgNTEuMzM3NEwyNi45NTI5IDUxLjI5ODdDMjYuODcwNCA1MS4yODM0IDI2Ljc3NzIgNTEuMjY2NyAyNi43MzMzIDUxLjI1NDNMMjUuMzQ2NiA1MC44MzIyQzIyLjc2NTEgNDkuOTc4OSAyMC4zMyA0OC41NzI5IDE4LjI5NDIgNDYuNzU1N0MxNi4xMDU2IDQ0Ljc5NTEgMTQuMzMzOSA0Mi4yMzM1IDEzLjE3NDIgMzkuMzU4MkMxMi4wMjc2IDM2LjYwMTMgMTEuNTk4OCAzMy4yNzkyIDExLjk3MTYgMzAuMDA3NkMxMi4zMTQ1IDI3LjAyMTMgMTMuMzk0OCAyNC4xNjM1IDE1LjE4NTggMjEuNTA4M0MxNS4zMDM0IDIxLjMzMzkgMTUuNDIxIDIxLjE1OTYgMTUuNTIxMiAyMS4wMTk2QzE2LjQzMDkgMTkuODY4OCAxNy41NDA4IDE4LjU1ODkgMTguOTQ4MyAxNy40OTZDMTkuMzM2NyAxNy4xNTI1IDE5Ljc4NjIgMTYuODU2IDIwLjI2MTEgMTYuNTQ3OEMyMC40ODc4IDE2LjQwMDkgMjAuNzA3OSAxNi4yNTUzIDIwLjg5MDcgMTYuMTMwNkMyMS4wOTc0IDE2LjAwNDggMjEuMzE4OCAxNS44ODMxIDIxLjUzNDggMTUuNzY5NEMyMS42NzYxIDE1LjY5NzUgMjEuODE2MiAxNS42MTkgMjEuOTM4OCAxNS41NTc2TDIyLjEwMDIgMTUuNDY0NkMyMi40MDAyIDE1LjMwMzcgMjIuNjc0OSAxNS4xNTQ2IDIyLjk5MDggMTUuMDM5TDI0LjExODYgMTQuNTcxNUMyNC4zMzk5IDE0LjQ4NDQgMjQuNTcxOCAxNC40MTU5IDI0Ljc5OTcgMTQuMzQ0N0MyNC45NTMgMTQuMjk4MiAyNS4wOTgyIDE0LjI2MzUgMjUuMjYzNSAxNC4yMDc4QzI1Ljc4NiAxNC4wMTgyIDI2LjMyODMgMTMuOTExMiAyNi45MTA1IDEzLjc5NjVDMjcuMTE3IDEzLjc1NzEgMjcuMzMwMiAxMy43MTYzIDI3LjU2MDggMTMuNjU4NUMyNy43NTUzIDEzLjYxMSAyNy45NzM3IDEzLjU5NjkgMjguMjA4MiAxMy41NzYyQzI4LjM2NCAxMy41NjAzIDI4LjUxNzIgMTMuNTQ4MyAyOC42MzE4IDEzLjUzMzNDMjguNzg3NiAxMy41MTczIDI4LjkzNDIgMTMuNTA2NiAyOS4wOTI3IDEzLjQ4NjdDMjkuMzI4NSAxMy40NTU1IDI5LjU0NTYgMTMuNDM0NyAyOS43NDk0IDEzLjQzMzdDMzAuMDIzNyAxMy40NCAzMC4yOTk0IDEzLjQzNTcgMzAuNTc3NyAxMy40Mjc0QzMxLjA4MTEgMTMuNDIxIDMxLjU1NzkgMTMuNDE5NyAzMi4wMzE4IDEzLjQ5MTRDMzQuOTY2NCAxMy43MzUyIDM3LjcxNDQgMTQuNjA4NSA0MC4yMDUyIDE2LjA4NjhDNDIuMzQ4OSAxNy4zNjU1IDQ0LjI3MTYgMTkuMTUyNSA0NS43NjA3IDIxLjI2NEM0Ny4wMjU1IDIzLjA2MjggNDcuOTc1NiAyNS4wNTI4IDQ4LjQ5MjggMjcuMDM5M0M0OC41NzIgMjcuMzE3NiA0OC42Mjk5IDI3LjU5MzEgNDguNjgzOSAyNy44NjU5QzQ4LjcxNTQgMjguMDQyOCA0OC43NTYzIDI4LjIxNDUgNDguNzg5MiAyOC4zNjM2QzQ4LjgwMzcgMjguNDU0MSA0OC44MjA4IDI4LjU0MDYgNDguODQ0NSAyOC42MjU4QzQ4Ljg3NDkgMjguNzQ0MyA0OC44OTg2IDI4Ljg2NCA0OC45MTE2IDI4Ljk2NTFMNDguOTc5MyAyOS42MDQ3QzQ4Ljk5MjIgMjkuNzc0OCA0OS4wMTMyIDI5LjkzMzEgNDkuMDMwMSAzMC4wODg3QzQ5LjA2NjggMzAuMzI2OCA0OS4wODg5IDMwLjU2MDggNDkuMDk2NCAzMC43NTYxTDQ5LjEwODMgMzEuOTAwMUM0OS4xMzEyIDMyLjMzMDcgNDkuMDg5IDMyLjcxMTYgNDkuMDUyMiAzMy4wNjczQzQ5LjAzODQgMzMuMjU5OCA0OS4wMTI2IDMzLjQ0NDMgNDkuMDEyMyAzMy41ODI0QzQ4Ljk5NjEgMzMuNjkyNiA0OC45OTE4IDMzLjc5MzUgNDguOTgzNiAzMy44OTE3QzQ4Ljk3NTMgMzQuMDA3MiA0OC45NzI0IDM0LjExNDggNDguOTQxNCAzNC4yNTU0TDQ4LjU0NDkgMzYuMzA1OUM0OC4zMTM0IDM3Ljg2MjMgNDkuMzc5MyAzOS4zMzY1IDUwLjk0ODggMzkuNTgyMkM1Mi4wNDE3IDM5Ljc2MDEgNTMuMTUzNiAzOS4yODE5IDUzLjc3MTEgMzguMzY2NEM1NC4wMDYzIDM4LjAxNzYgNTQuMTYwNCAzNy42MjU3IDU0LjIyMjcgMzcuMjA2NEw1NC41MjE3IDM1LjI1NzRDNTQuNTUxNCAzNS4wNzU2IDU0LjU3MiAzNC44MyA1NC41ODQ2IDM0LjU3OTFMNTQuNjAyOCAzNC4yMzM4QzU0LjYwOTggMzQuMDU5OCA1NC42MjIzIDMzLjg3NzkgNTQuNjM0NyAzMy42Nzg4QzU0LjY3MzQgMzMuMTA1MiA1NC43MTYzIDMyLjQ0NzkgNTQuNjYxOSAzMS44MDU4TDU0LjU4NjcgMzAuNDI4OUM1NC41NjIyIDMwLjA5NTIgNTQuNTA5NyAyOS43NiA1NC40NTU5IDI5LjQxODFDNTQuNDMxIDI5LjI1NzIgNTQuNDA0OCAyOS4wODk2IDU0LjM4MjYgMjguOTA3NEw1NC4yNjg3IDI4LjEwNEM1NC4yMzMyIDI3LjkyNDQgNTQuMTgwNCAyNy43MjczIDU0LjEzMjkgMjcuNTM5Nkw1NC4wNjQzIDI3LjI0NTRDNTQuMDE5NSAyNy4wNzEgNTMuOTc3MyAyNi44OTI3IDUzLjkzMzggMjYuNzA3NkM1My44NDU1IDI2LjMzMDkgNTMuNzQ3OSAyNS45NDIyIDUzLjYxMyAyNS41NTcxQzUyLjg0IDIzLjAyOTIgNTEuNTM4MyAyMC41MTk0IDQ5LjgzMzggMTguMjc5OUM0Ny44NTQ0IDE1LjY4MiA0NS4zMzMzIDEzLjUwODcgNDIuNTU2MyAxMS45ODE2WiIgZmlsbD0iIzQ5NDVGRiIvPgo8L3N2Zz4K";j.exports=n},34739:(j,n,t)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(83330);n.Loader=e.Loader},83855:(j,n,t)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(74081),o=t(72450),i=t(44747),l=(s=>s&&s.__esModule?s:{default:s})(o).default(i.Box)`
  overflow: auto;
  max-height: 60vh;
`,a=s=>e.jsx(l,{padding:7,...s});n.ModalBody=a},46832:(j,n,t)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(27279),o=e.createContext(()=>{}),i=()=>e.useContext(o);n.ModalContext=o,n.useModal=i},90410:(j,n,t)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(74081),o=t(72450),i=t(44747),c=t(35725),a=(g=>g&&g.__esModule?g:{default:g})(o).default(i.Box)`
  border-radius: 0 0 ${({theme:g})=>g.borderRadius} ${({theme:g})=>g.borderRadius};
  border-top: 1px solid ${({theme:g})=>g.colors.neutral150};
`,s=({startActions:g,endActions:p})=>e.jsx(a,{paddingTop:4,paddingBottom:4,paddingLeft:5,paddingRight:5,background:"neutral100",children:e.jsxs(c.Flex,{justifyContent:"space-between",children:[e.jsx(c.Flex,{gap:2,children:g}),e.jsx(c.Flex,{gap:2,children:p})]})});n.ModalFooter=s},60944:(j,n,t)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(74081),o=t(71434),i=t(72450),c=t(46832),r=t(80518),l=t(44747),a=t(35725),p=(f=>f&&f.__esModule?f:{default:f})(i).default(l.Box)`
  border-radius: ${({theme:f})=>f.borderRadius} ${({theme:f})=>f.borderRadius} 0 0;
  border-bottom: 1px solid ${({theme:f})=>f.colors.neutral150};
`,y=({children:f,closeLabel:x="Close the modal"})=>{const b=c.useModal();return e.jsx(p,{paddingTop:4,paddingBottom:4,paddingLeft:5,paddingRight:5,background:"neutral100",children:e.jsxs(a.Flex,{justifyContent:"space-between",children:[f,e.jsx(r.IconButton,{onClick:b,"aria-label":x,icon:e.jsx(o.Cross,{})})]})})};n.ModalHeader=y},41522:(j,n,t)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(74081),o=t(72450),i=t(46832),c=t(98675),r=t(78064),l=t(35725),a=t(36145),s=t(9935),g=t(44747),f=(b=>b&&b.__esModule?b:{default:b})(o).default(l.Flex)`
  background: ${({theme:b})=>`${b.colors.neutral800}1F`};
  inset: 0;
`,x=({onClose:b,labelledBy:m,...d})=>(r(!0),e.jsx(a.Portal,{children:e.jsx(i.ModalContext.Provider,{value:b,children:e.jsx(f,{justifyContent:"center",paddingLeft:8,paddingRight:8,position:"fixed",zIndex:4,children:e.jsx(s.FocusTrap,{children:e.jsx(c.DismissibleLayer,{onEscapeKeyDown:b,onPointerDownOutside:b,children:e.jsx(g.Box,{"aria-labelledby":m,"aria-modal":!0,onClick:M=>M.stopPropagation(),background:"neutral0",hasRadius:!0,role:"dialog",shadow:"popupShadow",width:`${830/16}rem`,...d})})})})})}));n.ModalLayout=x},5833:(j,n,t)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(41522),o=t(60944),i=t(90410),c=t(83855);n.ModalLayout=e.ModalLayout,n.ModalHeader=o.ModalHeader,n.ModalFooter=i.ModalFooter,n.ModalBody=c.ModalBody},24986:(j,n,t)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(74081),o=t(27279),i=t(29935),c=t(70598),r=t(77547),l=t(44747),a=g=>e.jsx(s,{...g,as:"th"}),s=({coords:g={col:0,row:0},as:p="td",...y})=>{const f=o.useRef(null),{rowIndex:x,colIndex:b,setTableValues:m}=i.useTable(),[d,M]=o.useState(!1),N=z=>{const h=c.getFocusableNodes(f.current,!0);if(h.length===0||h.length===1&&c.getFocusableNodesWithKeyboardNav(h).length===0)return;if(h.length>1&&!h.find(C=>C.tagName!=="BUTTON")){z.preventDefault();const C=h.findIndex(I=>I===document.activeElement);if(z.key===r.KeyboardKeys.RIGHT){const I=h[C+1];I&&(z.stopPropagation(),I.focus())}else if(z.key===r.KeyboardKeys.LEFT){const I=h[C-1];I&&(z.stopPropagation(),I.focus())}return}const T=z.key===r.KeyboardKeys.ENTER;if(T&&!d)M(!0);else if((z.key===r.KeyboardKeys.ESCAPE||T)&&d){if(T&&document.activeElement?.tagName==="A")return;M(!1),f.current.focus()}else d&&z.stopPropagation()},u=x===g.row-1&&b===g.col-1;o.useLayoutEffect(()=>{const z=c.getFocusableNodes(f.current,!0);z.length===0||z.length===1&&c.getFocusableNodesWithKeyboardNav(z).length!==0||z.length>1&&Boolean(z.find(h=>h.tagName!=="BUTTON"))?(f.current.setAttribute("tabIndex",!d&&u?"0":"-1"),z.forEach((h,T)=>{h.setAttribute("tabIndex",d?"0":"-1"),d&&T===0&&h.focus()})):z.forEach(h=>{h.setAttribute("tabIndex",u?"0":"-1")})},[d,u]);const v=o.useCallback(()=>{const z=c.getFocusableNodes(f.current,!0);z.length>=1&&(c.getFocusableNodesWithKeyboardNav(z).length!==0||!z.find(h=>h.tagName!=="BUTTON"))&&M(!0),m({rowIndex:g.row-1,colIndex:g.col-1})},[g,m]);return o.useLayoutEffect(()=>{const z=f.current;return c.getFocusableNodes(z,!0).forEach(T=>{T.addEventListener("focus",v)}),()=>{c.getFocusableNodes(z,!0).forEach(C=>{C.removeEventListener("focus",v)})}},[v]),e.jsx(l.Box,{role:"gridcell",as:p,ref:f,onKeyDown:N,...y})};n.RawTd=s,n.RawTh=a},56094:(j,n,t)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(74081),o=t(27279),i=t(9609),c=t(29935),r=t(77547),l=({colCount:a,rowCount:s,jumpStep:g=3,initialCol:p=0,initialRow:y=0,...f})=>{const x=o.useRef(null),b=o.useRef(!1),[m,d]=o.useState(y),[M,N]=o.useState(p),u=o.useCallback(({colIndex:h,rowIndex:T})=>{N(h),d(T)},[]);o.useEffect(()=>{b.current&&i.focusFocusable(x.current),b.current||(b.current=!0)},[M,m]);const v=h=>{switch(h.key){case r.KeyboardKeys.RIGHT:{h.preventDefault(),N(T=>T<a-1?T+1:T);break}case r.KeyboardKeys.LEFT:{h.preventDefault(),N(T=>T>0?T-1:T);break}case r.KeyboardKeys.UP:{h.preventDefault(),d(T=>T>0?T-1:T);break}case r.KeyboardKeys.DOWN:{h.preventDefault(),d(T=>T<s-1?T+1:T);break}case r.KeyboardKeys.HOME:{h.preventDefault(),h.ctrlKey&&d(0),N(0);break}case r.KeyboardKeys.END:{h.preventDefault(),h.ctrlKey&&d(s-1),N(a-1);break}case r.KeyboardKeys.PAGE_DOWN:{h.preventDefault(),d(T=>T+g<s?T+g:s-1);break}case r.KeyboardKeys.PAGE_UP:{h.preventDefault(),d(T=>T-g>0?T-g:0);break}}},z=o.useMemo(()=>({rowIndex:m,colIndex:M,setTableValues:u}),[M,m,u]);return e.jsx(c.RawTableContext.Provider,{value:z,children:e.jsx("table",{role:"grid",ref:x,"aria-rowcount":s,"aria-colcount":a,onKeyDown:v,...f})})};n.RawTable=l},29935:(j,n,t)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(27279),o=e.createContext({rowIndex:0,colIndex:0,setTableValues(){throw new Error("setTableValues must be initialized via the RawTableContext.Provider")}}),i=()=>e.useContext(o);n.RawTableContext=o,n.useTable=i},6890:(j,n,t)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(74081),o=t(27279),i=({children:c,...r})=>{const l=o.Children.toArray(c).map((a,s)=>o.isValidElement(a)?o.cloneElement(a,{"aria-rowindex":s+2}):a);return e.jsx("tbody",{...r,children:l})};n.RawTbody=i},41179:(j,n,t)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(74081),o=t(27279),i=({children:c,...r})=>{const l=o.Children.toArray(c).map(a=>o.isValidElement(a)?o.cloneElement(a,{"aria-rowindex":1}):a);return e.jsx("thead",{...r,children:l})};n.RawThead=i},26014:(j,n,t)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(74081),o=t(27279),i=t(44747),c=({children:r,...l})=>{const a=o.Children.toArray(r).map((s,g)=>o.isValidElement(s)?o.cloneElement(s,{"aria-colindex":g+1,coords:{col:g+1,row:l["aria-rowindex"]}}):s);return e.jsx(i.Box,{as:"tr",...l,children:a})};n.RawTr=c},9609:(j,n)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e=>{const o=e.querySelector('[tabindex="0"]');o&&o.focus()};n.focusFocusable=t},34922:(j,n,t)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(74081),o=t(72450),i=t(24986),c=t(35725),l=(y=>y&&y.__esModule?y:{default:y})(o),a=l.default(i.RawTd)`
  vertical-align: middle;
  text-align: left;
  color: ${({theme:y})=>y.colors.neutral600};
  outline-offset: -4px;

  /**
  * Hack to make sure the checkbox looks aligned
  */
  input {
    vertical-align: sub;
  }
`,s=l.default.span`
  svg {
    height: ${4/16}rem;
  }
`,g=({children:y,action:f,...x})=>e.jsx(a,{as:i.RawTh,...x,children:e.jsxs(c.Flex,{children:[y,e.jsx(s,{children:f})]})}),p=({children:y,...f})=>e.jsx(a,{...f,children:y});n.Td=p,n.Th=g},82079:(j,n,t)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(74081),o=t(72450),i=t(44747),c=t(19658),r=t(35725),l=t(11880),s=(f=>f&&f.__esModule?f:{default:f})(o),g=s.default(i.Box)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:f})=>f.colors.primary600};
  }
`,p=s.default(i.Box)`
  border-radius: 0 0 ${({theme:f})=>f.borderRadius} ${({theme:f})=>f.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,y=({children:f,icon:x,...b})=>e.jsxs("div",{children:[e.jsx(c.Divider,{}),e.jsx(p,{as:"button",background:"primary100",padding:5,...b,children:e.jsxs(r.Flex,{children:[e.jsx(g,{"aria-hidden":!0,background:"primary200",children:x}),e.jsx(i.Box,{paddingLeft:3,children:e.jsx(l.Typography,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:f})})]})})]});n.TFooter=y},31661:(j,n,t)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(74081),o=t(27279),i=t(72450),c=t(56094),r=t(44747),a=(x=>x&&x.__esModule?x:{default:x})(i),s=a.default(r.Box)`
  overflow: hidden;
  border: 1px solid ${({theme:x})=>x.colors.neutral150};
`,g=a.default(c.RawTable)`
  width: 100%;
  white-space: nowrap;
`,p=a.default(r.Box)`
  &:before {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(90deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({overflowing:x})=>x==="both"||x==="left"?"''":void 0};
    box-shadow: ${({theme:x})=>x.shadows.tableShadow};
    width: ${({theme:x})=>x.spaces[2]};
    left: 0;
  }

  &:after {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(270deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({overflowing:x})=>x==="both"||x==="right"?"''":void 0};
    box-shadow: ${({theme:x})=>x.shadows.tableShadow};
    width: ${({theme:x})=>x.spaces[2]};
    right: 0;
    top: 0;
  }
`,y=a.default(r.Box)`
  overflow-x: auto;
`,f=({footer:x,...b})=>{const m=o.useRef(null),[d,M]=o.useState(),N=u=>{const v=u.target.scrollWidth-u.target.clientWidth;if(u.target.scrollLeft===0){M("right");return}if(u.target.scrollLeft===v){M("left");return}u.target.scrollLeft>0&&M("both")};return o.useEffect(()=>{m.current.scrollWidth>m.current.clientWidth&&M("right")},[]),e.jsxs(s,{shadow:"tableShadow",hasRadius:!0,background:"neutral0",children:[e.jsx(p,{overflowing:d,position:"relative",children:e.jsx(y,{ref:m,onScroll:N,paddingLeft:6,paddingRight:6,children:e.jsx(g,{...b})})}),x]})};n.Table=f},73314:(j,n,t)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(74081),o=t(72450),i=t(6890),l=(s=>s&&s.__esModule?s:{default:s})(o).default(i.RawTbody)`
  & tr:last-of-type {
    border-bottom: none;
  }
`,a=({children:s,...g})=>e.jsx(l,{...g,children:s});n.Tbody=a},79821:(j,n,t)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(74081),o=t(72450),i=t(41179),l=(s=>s&&s.__esModule?s:{default:s})(o).default(i.RawThead)`
  border-bottom: 1px solid ${({theme:s})=>s.colors.neutral150};
`,a=({children:s,...g})=>e.jsx(l,{...g,children:s});n.Thead=a},45286:(j,n,t)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(74081),o=t(72450),i=t(26014),l=(s=>s&&s.__esModule?s:{default:s})(o).default(i.RawTr)`
  border-bottom: 1px solid ${({theme:s})=>s.colors.neutral150};

  & td,
  & th {
    padding: ${({theme:s})=>s.spaces[4]};
  }

  & td:first-of-type,
  & th:first-of-type {
    padding: 0 ${({theme:s})=>s.spaces[1]};
  }

  // Resetting padding values and fixing a height
  th {
    padding-top: 0;
    padding-bottom: 0;
    height: ${56/16}rem;
  }
`,a=s=>e.jsx(l,{...s});n.Tr=a},22493:(j,n,t)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(31661),o=t(73314),i=t(79821),c=t(45286),r=t(34922),l=t(82079);n.Table=e.Table,n.Tbody=o.Tbody,n.Thead=i.Thead,n.Tr=c.Tr,n.Td=r.Td,n.Th=r.Th,n.TFooter=l.TFooter},61887:(j,n,t)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(74081),o=t(27279),i=t(9246),c=t(54673);function r(s){if(s&&s.__esModule)return s;const g=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(s){for(const p in s)if(p!=="default"){const y=Object.getOwnPropertyDescriptor(s,p);Object.defineProperty(g,p,y.get?y:{enumerable:!0,get:()=>s[p]})}}return g.default=s,Object.freeze(g)}const l=r(o),a=l.forwardRef(({id:s,initialSelectedTabIndex:g=0,label:p,onTabChange:y,variant:f,...x},b)=>{const m=c.useId(s),[d,M]=l.useState(g);l.useImperativeHandle(b,()=>({_handlers:{setSelectedTabIndex:M}}));const N=l.useMemo(()=>({id:m,selectedTabIndex:d,selectTabIndex:M,label:p,variant:f,onTabChange:y}),[p,y,d,m,f]);return e.jsx(i.TabsContext.Provider,{value:N,children:e.jsx("div",{...x})})});a.displayName="TabGroup",n.TabGroup=a},90958:(j,n,t)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(74081),o=t(27279),i=t(9246),c=({children:l,...a})=>{const{id:s,selectedTabIndex:g}=i.useTabs(),p=o.Children.toArray(l).map((y,f)=>o.cloneElement(y,{id:`${s}-${f}`})).filter((y,f)=>f===g);return e.jsx("div",{...a,children:p})},r=({id:l,...a})=>{const s=`${l}-tab`,g=`${l}-tabpanel`;return e.jsx("div",{id:g,role:"tabpanel",tabIndex:0,"aria-labelledby":s,...a})};n.TabPanel=r,n.TabPanels=c},96239:(j,n,t)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(74081),o=t(27279),i=t(81906),c=t(72450),r=t(63101),l=t(9246),a=t(77547),s=t(11880),p=(m=>m&&m.__esModule?m:{default:m})(c),y=(m,d)=>{const M=o.useRef(null),N=o.useRef(!1),u=i.useCallbackRef(d);return o.useEffect(()=>{if(M.current){if(N.current){const v=M.current.querySelector('[tabindex="0"]');v&&(v.focus(),u(m))}N.current||(N.current=!0)}},[m,u]),M},f=p.default.button`
  &[aria-disabled='true'] {
    cursor: not-allowed;
  }
`,x=({children:m,...d})=>{const{id:M,selectedTabIndex:N,selectTabIndex:u,label:v,variant:z,onTabChange:h}=l.useTabs(),T=y(N,h),C=o.Children.toArray(m).map((D,E)=>o.cloneElement(D,{id:`${M}-${E}`,index:E,selectedTabIndex:N,onTabClick:()=>u(E),variant:z})),I=D=>{if(!C.every(A=>A.props.disabled))switch(D.key){case a.KeyboardKeys.RIGHT:{const A=N+1,O=B=>C[B].props.disabled?B===C.length-1?O(0):O(B+1):B,S=O(A>=C.length?0:A);u(S);break}case a.KeyboardKeys.LEFT:{const A=N-1,O=B=>C[B].props.disabled?O(B===0?C.length-1:B-1):B,S=O(A<0?C.length-1:A);u(S);break}case a.KeyboardKeys.HOME:{const A=C.findIndex(O=>!O.props.disabled);u(A);break}case a.KeyboardKeys.END:{const O=C.map((S,B)=>({isDisabled:S.props.disabled,index:B})).reverse().find(({isDisabled:S})=>!S);O&&u(O.index);break}}};return z==="simple"?e.jsx("div",{ref:T,role:"tablist","aria-label":v,onKeyDown:I,...d,children:C}):e.jsx(r.DefaultTabsRow,{ref:T,role:"tablist",alignItems:"flex-end","aria-label":v,onKeyDown:I,...d,children:C})},b=({disabled:m=!1,id:d,children:M,variant:N,hasError:u=!1,index:v,selectedTabIndex:z,onTabClick:h,...T})=>{const C=`${d}-tab`,I=`${d}-tabpanel`,D=v===z,E=()=>{m||h&&h()};if(N==="simple"){let O;return u?O="danger600":D?O="primary600":O="neutral600",e.jsx(f,{id:C,role:"tab","aria-controls":D?I:void 0,tabIndex:D?0:-1,"aria-selected":D,type:"button",onClick:E,"aria-disabled":m,...T,children:e.jsx(r.SimpleTabBox,{padding:4,selected:D,hasError:u,children:e.jsx(s.Typography,{variant:"sigma",textColor:O,children:M})})})}u&&console.warn('The "hasError" prop is only available for the "simple" variant.');const A=z&&z-1===v;return e.jsx(r.DefaultTabButton,{id:C,role:"tab",type:"button","aria-controls":D?I:void 0,tabIndex:D?0:-1,"aria-selected":D,onClick:E,"aria-disabled":m,showRightBorder:Boolean(A),...T,children:e.jsx(r.DefaultTabBox,{padding:D?4:3,background:D?"neutral0":"neutral100",selected:D,children:e.jsx(s.Typography,{fontWeight:"bold",textColor:D?"primary700":"neutral600",children:M})})})};n.Tab=b,n.Tabs=x},9246:(j,n,t)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(27279),o=e.createContext({id:"",label:"",selectedTabIndex:0,selectTabIndex(){throw new Error("TabsContext.selectTabIndex is not implemented.")}}),i=()=>e.useContext(o);n.TabsContext=o,n.useTabs=i},63101:(j,n,t)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(72450),o=t(44747),i=t(35725),r=(p=>p&&p.__esModule?p:{default:p})(e),l=r.default(o.Box)`
  border-bottom: 2px solid
    ${({theme:p,selected:y,hasError:f})=>y?f?p.colors.danger600:p.colors.primary600:"transparent"};
`,a=r.default(o.Box)`
  border-bottom: 1px solid ${({theme:p,selected:y})=>y?p.colors.neutral0:p.colors.neutral150};
`,s=r.default.button`
  border: none;
  background: transparent;
  padding: 0;

  & + & > ${a} {
    border-left: 1px solid ${({theme:p})=>p.colors.neutral150};
  }

  ${a} {
    border-right: ${({theme:p,showRightBorder:y})=>y?`1px solid ${p.colors.neutral150}`:"none"};
  }

  // Hack preventing the outline from being overflow by the following tab
  outline-offset: -2px;

  &[aria-disabled='true'] {
    cursor: not-allowed;
  }
`,g=r.default(i.Flex)`
  & > * {
    flex: 1;
  }

  & ${s}:first-of-type ${a} {
    border-radius: ${({theme:p})=>`${p.borderRadius} 0 0 0`};
  }

  & ${s}:last-of-type ${a} {
    border-radius: ${({theme:p})=>`0 ${p.borderRadius} 0 0`};
  }

  & ${s}[aria-selected="true"] ${a} {
    border-radius: ${({theme:p})=>`${p.borderRadius} ${p.borderRadius} 0 0`};
    border-left: none;
    border-right: none;
  }
`;n.DefaultTabBox=a,n.DefaultTabButton=s,n.DefaultTabsRow=g,n.SimpleTabBox=l},84637:(j,n,t)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(96239),o=t(90958),i=t(61887);n.Tab=e.Tab,n.Tabs=e.Tabs,n.TabPanel=o.TabPanel,n.TabPanels=o.TabPanels,n.TabGroup=i.TabGroup},23555:(j,n,t)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(74081),o=t(27279),i=t(72450),c=t(71102),r=t(52597),l=t(54673),a=t(36145),s=t(44747),g=t(70321),p=t(11880),y=M=>M&&M.__esModule?M:{default:M};function f(M){if(M&&M.__esModule)return M;const N=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(M){for(const u in M)if(u!=="default"){const v=Object.getOwnPropertyDescriptor(M,u);Object.defineProperty(N,u,v.get?v:{enumerable:!0,get:()=>M[u]})}}return N.default=M,Object.freeze(N)}const x=f(o),m=y(i).default(s.Box)`
  /* z-index exist because of its position inside Modals */
  z-index: 4;
  display: ${({visible:M})=>M?"revert":"none"};
`,d=({children:M,label:N,description:u,delay:v=500,position:z="top",id:h,...T})=>{const C=l.useId(h),I=l.useId(),{visible:D,...E}=c.useTooltipHandlers(v),{tooltipWrapperRef:A,toggleSourceRef:O}=r.useTooltipLayout(D,z),S=x.cloneElement(M,{tabIndex:0,"aria-labelledby":N?C:void 0,"aria-describedby":u?C:void 0,...E});return e.jsxs(e.Fragment,{children:[e.jsx(a.Portal,{children:e.jsxs(m,{id:C,background:"neutral900",hasRadius:!0,padding:2,role:"tooltip",ref:A,visible:D,position:"absolute",...T,children:[D&&e.jsx(g.VisuallyHidden,{id:I,children:u}),e.jsx(p.Typography,{as:"p",variant:"pi",fontWeight:"bold",textColor:"neutral0",children:N||u})]})}),e.jsx("span",{ref:O,children:S})]})};n.Tooltip=d},71102:(j,n,t)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(27279),o=i=>{const[c,r]=e.useState(!1),l=e.useRef(null),a=()=>{typeof l.current=="number"&&(clearTimeout(l.current),l.current=null)};return e.useEffect(()=>()=>{a()},[]),{visible:c,onFocus:()=>{r(!0)},onBlur:()=>{r(!1)},onMouseEnter:()=>{l.current=setTimeout(()=>{r(!0)},i)},onMouseLeave:()=>{a(),r(!1)}}};n.useTooltipHandlers=o},52597:(j,n,t)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t(27279),o=t(3955),i=(c,r)=>{const l=e.useRef(null),a=e.useRef(null);return e.useLayoutEffect(()=>{if(c){const s=l.current,g=a.current;if(s&&g){const p=o.positionTooltip(s,g,r);s.style.left=`${p.left}px`,s.style.top=`${p.top}px`}}},[r,c]),{tooltipWrapperRef:l,toggleSourceRef:a}};n.useTooltipLayout=i},3955:(j,n)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=8,e=(l,a)=>{const s=(l.width-a.width)/2,g=a.left-s,p=a.top+a.height+t+window.pageYOffset;return{left:g,top:p}},o=(l,a)=>{const s=(l.height-a.height)/2,g=a.left+a.width+t,p=a.top-s+window.pageYOffset;return{left:g,top:p}},i=(l,a)=>{const s=(l.height-a.height)/2,g=a.left-l.width-t,p=a.top-s+window.pageYOffset;return{left:g,top:p}},c=(l,a)=>{const s=(l.width-a.width)/2;let g=a.left-s,p=a.top-l.height-t+window.pageYOffset;const y=window.innerWidth-a.right;return a.left+l.width-y>window.innerWidth?(g=a.left-l.width-t,p=a.top+window.scrollY-a.height/2):g<0?(g=a.width+a.left+t,p=a.top+window.scrollY-l.height/2+t):p<0&&g>0&&(p=a.top+a.height+t),{left:g,top:p}},r=(l,a,s)=>{const g=l.getBoundingClientRect(),p=a.getBoundingClientRect();return s==="bottom"?e(g,p):s==="right"?o(g,p):s==="left"?i(g,p):c(g,p)};n.positionTooltip=r},70598:(j,n)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=(o,i)=>[...o.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')].filter(l=>l.hasAttribute("disabled")?!1:i?!0:l.getAttribute("tabindex")!=="-1"),e=o=>o.filter(i=>i.tagName==="INPUT"?i.type!=="checkbox"&&i.type!=="radio":!1);n.getFocusableNodes=t,n.getFocusableNodesWithKeyboardNav=e},78064:(j,n,t)=>{"use strict";const e=t(27279),o=i=>{e.useEffect(()=>(i&&document.body.classList.add("lock-body-scroll"),()=>{document.body.classList.remove("lock-body-scroll")}),[i])};j.exports=o},16747:(j,n,t)=>{"use strict";const e=t(74081),o=c=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...c,children:e.jsx("path",{fill:"#212134",d:"M24 2.417 21.583 0 12 9.583 2.417 0 0 2.417 9.583 12 0 21.583 2.417 24 12 14.417 21.583 24 24 21.583 14.417 12 24 2.417Z"})}),i=o;j.exports=i},76229:(j,n,t)=>{"use strict";const e=t(74081),o=c=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...c,children:[e.jsx("path",{fill:"#212134",d:"M15.2 12a3.2 3.2 0 1 1-6.399 0 3.2 3.2 0 0 1 6.4 0Z"}),e.jsx("path",{fill:"#212134",fillRule:"evenodd",d:"M18.78 6.103c1.923 1.243 3.64 2.981 4.963 5.027a1.61 1.61 0 0 1 .005 1.738c-1.318 2.063-3.031 3.807-4.954 5.046-2.12 1.364-4.475 2.086-6.81 2.086-2.388 0-4.683-.7-6.816-2.082-1.894-1.225-3.593-2.966-4.914-5.032a1.596 1.596 0 0 1 .032-1.777C1.89 8.811 3.734 7.027 5.77 5.805 7.767 4.608 9.858 4 11.984 4c2.317 0 4.667.728 6.795 2.103Zm-9.446 9.888a4.8 4.8 0 1 0 5.334-7.982 4.8 4.8 0 0 0-5.334 7.982Z",clipRule:"evenodd"})]}),i=o;j.exports=i},89867:(j,n,t)=>{"use strict";const e=t(74081),o=c=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...c,children:e.jsx("path",{fill:"#212134",fillRule:"evenodd",d:"M23.604 3.514c.528.528.528 1.36 0 1.887l-2.622 2.607-4.99-4.99L18.6.396a1.322 1.322 0 0 1 1.887 0l3.118 3.118ZM0 24v-4.99l14.2-14.2 4.99 4.99L4.99 24H0Z",clipRule:"evenodd"})}),i=o;j.exports=i},58629:(j,n,t)=>{"use strict";const e=t(74081),o=c=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 8 8",...c,children:e.jsx("path",{fill:"#212134",d:"M2 .93c0-.4.45-.63.78-.41l4.6 3.06c.3.2.3.64 0 .84l-4.6 3.06A.5.5 0 0 1 2 7.07V.93Z"})}),i=o;j.exports=i},52342:j=>{function n(){return j.exports=n=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])}return t},j.exports.__esModule=!0,j.exports.default=j.exports,n.apply(this,arguments)}j.exports=n,j.exports.__esModule=!0,j.exports.default=j.exports}}]);
