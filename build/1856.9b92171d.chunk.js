"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[1856],{31856:(N,g,s)=>{s.r(g),s.d(g,{default:()=>J});var t=s(74081),a=s(1180),L=s(49402),h=s(51447),I=s(44328),u=s(27279),_=s(93415),r=s(10701),D=s(21395),R=s(48102),T=s(23298),c=s(74577),l=s(12881),B=s(39708),U=s(73354),f=s(27875),W=s(74758),S=s(76827),E=s(71563),v=s(61020),K=s(20498),j=s(68902),P=s(70627),F=s(47853),as=s(40464),es=s(64797),ns=s(85811),is=s(92401),os=s(15816),_s=s(97442),ds=s(13576),rs=s(87830),ls=s(47184),Es=s(364),Ps=s(49204),Ms=s(75719),Ds=s(74919),cs=s(29206),Os=s(98934),ms=s(43433),gs=s(8175),hs=s(10131),us=s(10124),Rs=s(51006),vs=s(63799),As=s(51943),Cs=s(39738),Ls=s(3243);const x=({disabled:d,role:e,values:i,errors:o,onChange:A,onBlur:O})=>{const{formatMessage:n}=(0,v.Z)();return(0,t.jsx)(_.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsxs)(r.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,t.jsxs)(r.k,{justifyContent:"space-between",children:[(0,t.jsxs)(_.x,{children:[(0,t.jsx)(_.x,{children:(0,t.jsx)(D.Z,{fontWeight:"bold",children:e?e.name:n({id:"global.details",defaultMessage:"Details"})})}),(0,t.jsx)(_.x,{children:(0,t.jsx)(D.Z,{textColor:"neutral500",variant:"pi",children:e?e.description:n({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})})})]}),(0,t.jsx)(R.z,{disabled:!0,variant:"secondary",children:n({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:e.usersCount})})]}),(0,t.jsxs)(T.r,{gap:4,children:[(0,t.jsx)(c.P,{col:6,children:(0,t.jsx)(l.o,{disabled:d,name:"name",error:o.name&&n({id:o.name}),label:n({id:"global.name",defaultMessage:"Name"}),onChange:A,onBlur:O,required:!0,value:i.name||""})}),(0,t.jsx)(c.P,{col:6,children:(0,t.jsx)(B.g,{disabled:d,label:n({id:"global.description",defaultMessage:"Description"}),id:"description",error:o.name&&n({id:o.name}),onChange:A,onBlur:O,children:i.description||""})})]})]})})};x.defaultProps={disabled:!1,role:null,values:{name:"",description:""}},x.propTypes={disabled:P.bool,errors:P.object.isRequired,onBlur:P.func.isRequired,onChange:P.func.isRequired,role:P.object,values:P.object};const $=F.Ry().shape({name:F.Z_().required(a.translatedErrors.required)}),H=()=>{const d=(0,a.useNotification)(),{formatMessage:e}=(0,v.Z)(),{params:{id:i}}=(0,h.$B)("/settings/roles/:id"),{put:o}=(0,a.useFetchClient)(),[A,O]=(0,u.useState)(!1),n=(0,u.useRef)(),{lockApp:Q,unlockApp:V}=(0,a.useOverlayBlocker)(),{trackUsage:G}=(0,a.useTracking)(),{formatAPIError:X}=(0,a.useAPIErrorHandler)(),{isLoading:Y,data:b}=(0,j.u)(i,{cacheTime:0}),{roles:[M={}],isLoading:p,refetch:k}=(0,K.u)({id:i},{cacheTime:0}),{permissions:w,isLoading:Z}=(0,j.a)({id:i},{cacheTime:0}),q=async C=>{try{Q(),O(!0);const{permissionsToSend:m,didUpdateConditions:y}=n.current.getPermissions();await o(`/admin/roles/${i}`,C),M.code!=="strapi-super-admin"&&(await o(`/admin/roles/${i}/permissions`,{permissions:m}),y&&G("didUpdateConditions")),n.current.setFormAfterSubmit(),await k(),d({type:"success",message:{id:"notification.success.saved"}})}catch(m){d({type:"warning",message:X(m)})}finally{O(!1),V()}},z=!p&&M.code==="strapi-super-admin";return(0,t.jsxs)(U.o,{children:[(0,t.jsx)(a.SettingsPageTitle,{name:"Roles"}),(0,t.jsx)(E.J9,{enableReinitialize:!0,initialValues:{name:M.name,description:M.description},onSubmit:q,validationSchema:$,validateOnChange:!1,children:({handleSubmit:C,values:m,errors:y,handleChange:ss,handleBlur:ts})=>(0,t.jsxs)("form",{onSubmit:C,children:[(0,t.jsx)(f.T,{primaryAction:(0,t.jsx)(r.k,{gap:2,children:(0,t.jsx)(R.z,{disabled:M.code==="strapi-super-admin",onClick:C,loading:A,size:"L",children:e({id:"global.save",defaultMessage:"Save"})})}),title:e({id:"Settings.roles.edit.title",defaultMessage:"Edit a role"}),subtitle:e({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:(0,t.jsx)(a.Link,{startIcon:(0,t.jsx)(S.Z,{}),to:"/settings/roles",children:e({id:"global.back",defaultMessage:"Back"})})}),(0,t.jsx)(W.D,{children:(0,t.jsxs)(r.k,{direction:"column",alignItems:"stretch",gap:6,children:[(0,t.jsx)(x,{isLoading:p||Z,disabled:z,errors:y,values:m,onChange:ss,onBlur:ts,role:M}),!Y&&!p&&!Z?(0,t.jsx)(_.x,{shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(j.P,{isFormDisabled:z,permissions:w,ref:n,layout:b})}):(0,t.jsx)(_.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(a.LoadingIndicatorPage,{})})]})})]})})]})},J=()=>{const d=(0,L.useSelector)(I.s),{isLoading:e,allowedActions:{canRead:i,canUpdate:o}}=(0,a.useRBAC)({read:d.settings.roles.read,update:d.settings.roles.update});return e?(0,t.jsx)(a.LoadingIndicatorPage,{}):!i&&!o?(0,t.jsx)(h.l_,{to:"/"}):(0,t.jsx)(H,{})}},20498:(N,g,s)=>{s.d(g,{u:()=>I});var t=s(27279),a=s(1180),L=s(61020),h=s(40464);const I=(u={},_={})=>{const{id:r="",...D}=u,{get:R}=(0,a.useFetchClient)(),{locale:T}=(0,L.Z)(),c=(0,a.useCollator)(T,{sensitivity:"base"}),{data:l,error:B,isError:U,isLoading:f,refetch:W}=(0,h.useQuery)(["roles",r,D],async()=>{const{data:E}=await R(`/admin/roles/${r??""}`,{params:D});return E},_);return{roles:t.useMemo(()=>{let E=[];return l&&(Array.isArray(l.data)?E=l.data:E=[l.data]),[...E].sort((v,K)=>c.compare(v.name,K.name))},[l,c]),error:B,isError:U,isLoading:f,refetch:W}}}}]);
