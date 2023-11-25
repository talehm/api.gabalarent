"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[4426],{64426:(g,d,s)=>{s.r(d),s.d(d,{LoginEE:()=>v});var t=s(74081),i=s(84366),n=s(93415),E=s(10701),P=s(21395),D=s(1180),M=s(61020),o=s(40464),l=s(72450),r=s(92401),e=s(47796),O=s(15816),h=s(97442),_=s(13576),c=s(87830),m=s(47184),a=s(364),I=s(27279),T=s(49402),W=s(71563),K=s(49204),j=s(47853),f=s(75719),u=s(74919),y=s(29206),S=s(98934),$=s(43433);const L=(0,l.default)(i.i)`
  flex: 1;
`,v=C=>{const{formatMessage:x}=(0,M.Z)(),{get:B}=(0,D.useFetchClient)(),{isLoading:U,data:R=[]}=(0,o.useQuery)(["ee","providers"],async()=>{const{data:A}=await B("/admin/providers");return A},{enabled:window.strapi.features.isEnabled(window.strapi.features.SSO)});return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!U&&R.length===0?(0,t.jsx)(r.L,{...C}):(0,t.jsx)(r.L,{...C,children:(0,t.jsx)(n.x,{paddingTop:7,children:(0,t.jsxs)(E.k,{direction:"column",alignItems:"stretch",gap:7,children:[(0,t.jsxs)(E.k,{children:[(0,t.jsx)(L,{}),(0,t.jsx)(n.x,{paddingLeft:3,paddingRight:3,children:(0,t.jsx)(P.Z,{variant:"sigma",textColor:"neutral600",children:x({id:"Auth.login.sso.divider"})})}),(0,t.jsx)(L,{})]}),(0,t.jsx)(e.S,{providers:R,displayAllProviders:!1})]})})})}},47796:(g,d,s)=>{s.d(d,{S:()=>r});var t=s(74081),i=s(23298),n=s(74577),E=s(2981),P=s(10701),D=s(21395),M=s(61020),o=s(47533),l=s(72450);const r=({providers:_,displayAllProviders:c})=>{const{formatMessage:m}=(0,M.Z)();return c?(0,t.jsx)(i.r,{gap:4,children:_.map(a=>(0,t.jsx)(n.P,{col:4,children:(0,t.jsx)(O,{provider:a})},a.uid))}):_.length>2&&!c?(0,t.jsxs)(i.r,{gap:4,children:[_.slice(0,2).map(a=>(0,t.jsx)(n.P,{col:4,children:(0,t.jsx)(O,{provider:a})},a.uid)),(0,t.jsx)(n.P,{col:4,children:(0,t.jsx)(E.u,{label:m({id:"global.see-more"}),children:(0,t.jsx)(h,{as:o.rU,to:"/auth/providers",children:(0,t.jsx)("span",{"aria-hidden":!0,children:"\u2022\u2022\u2022"})})})})]}):(0,t.jsx)(e,{justifyContent:"center",children:_.map(a=>(0,t.jsx)(O,{provider:a},a.uid))})},e=(0,l.default)(P.k)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:_})=>_.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:_})=>_.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:_})=>_.spaces[2]};
  }
`,O=({provider:_})=>(0,t.jsx)(E.u,{label:_.displayName,children:(0,t.jsx)(h,{href:`${window.strapi.backendURL}/admin/connect/${_.uid}`,children:_.icon?(0,t.jsx)("img",{src:_.icon,"aria-hidden":!0,alt:"",height:"32px"}):(0,t.jsx)(D.Z,{children:_.displayName})})}),h=l.default.a`
  width: ${136/16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48/16}rem;
  border: 1px solid ${({theme:_})=>_.colors.neutral150};
  border-radius: ${({theme:_})=>_.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({theme:_})=>_.colors.neutral600};
`}}]);
