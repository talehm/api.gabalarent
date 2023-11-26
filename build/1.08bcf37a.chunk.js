"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[1],{80001:(w,x,s)=>{s.r(x),s.d(x,{default:()=>ds});var e=s(74081),n=s(1180),I=s(49402),B=s(44328),i=s(27279),W=s(93153),_=s(50086),r=s(21395),f=s(10701),y=s(93415),Z=s(4987),L=s(73354),P=s(27875),S=s(48102),N=s(37472),F=s(74758),$=s(70774),Y=s(38566),C=s(38101),Q=s(10989),V=s(86967),q=s(78031),ss=s(26784),es=s(78665),b=s(36938),z=s(61020),ts=s(51447),ns=s(20498),g=s(70627),as=s(61815),Ds=s(40464),cs=s(64797),Ms=s(85811),Os=s(92401),Ps=s(15816),Cs=s(97442),gs=s(13576),Rs=s(87830),us=s(47184),Ts=s(364),ms=s(71563),hs=s(49204),Ls=s(47853),As=s(75719),vs=s(74919),xs=s(29206),Is=s(98934),Bs=s(43433),Ws=s(8175);const os=()=>"todo empty role",G=({id:a,name:d,description:o,usersCount:R,icons:l,rowIndex:A,canUpdate:E})=>{const{formatMessage:u}=(0,z.Z)(),[,T]=l,D=u({id:"Roles.RoleRow.user-count",defaultMessage:"{number, plural, =0 {#  user} one {#  user} other {# users}}"},{number:R});return(0,e.jsxs)(W.Tr,{"aria-rowindex":A,...E?(0,n.onRowClick)({fn:T.onClick}):{},children:[(0,e.jsx)(_.Td,{maxWidth:(0,n.pxToRem)(130),children:(0,e.jsx)(r.Z,{ellipsis:!0,textColor:"neutral800",children:d})}),(0,e.jsx)(_.Td,{maxWidth:(0,n.pxToRem)(250),children:(0,e.jsx)(r.Z,{ellipsis:!0,textColor:"neutral800",children:o})}),(0,e.jsx)(_.Td,{children:(0,e.jsx)(r.Z,{textColor:"neutral800",children:D})}),(0,e.jsx)(_.Td,{children:(0,e.jsx)(f.k,{justifyContent:"flex-end",...n.stopPropagation,children:l.map((c,m)=>c?(0,e.jsx)(y.x,{paddingLeft:m===0?0:1,children:(0,e.jsx)(Z.h,{onClick:c.onClick,label:c.label,noBorder:!0,icon:c.icon})},c.label):null)})})]},a)};G.propTypes={id:g.number.isRequired,name:g.string.isRequired,description:g.string.isRequired,usersCount:g.number.isRequired,icons:g.array.isRequired,rowIndex:g.number.isRequired,canUpdate:g.bool},G.defaultProps={canUpdate:!1};const ls={roleToDelete:null,showModalConfirmButtonLoading:!1,shouldRefetchData:!1},is=(a,d)=>(0,as.ZP)(a,o=>{switch(d.type){case"ON_REMOVE_ROLES":{o.showModalConfirmButtonLoading=!0;break}case"ON_REMOVE_ROLES_SUCCEEDED":{o.shouldRefetchData=!0,o.roleToDelete=null;break}case"RESET_DATA_TO_DELETE":{o.shouldRefetchData=!1,o.roleToDelete=null,o.showModalConfirmButtonLoading=!1;break}case"SET_ROLE_TO_DELETE":{o.roleToDelete=d.id;break}default:return o}}),_s=({canCreate:a,canDelete:d,canUpdate:o,refetchRoles:R})=>{const{formatMessage:l}=(0,z.Z)(),{formatAPIError:A}=(0,n.useAPIErrorHandler)(),E=(0,n.useNotification)(),[u,T]=(0,i.useState)(!1),{push:D}=(0,ts.k6)(),[{selectedRoles:c,showModalConfirmButtonLoading:m,roleToDelete:H},v]=(0,i.useReducer)(is,ls),{post:J}=(0,n.getFetchClient)(),X=async()=>{try{v({type:"ON_REMOVE_ROLES"}),await J("/admin/roles/batch-delete",{ids:[H]}),await R(),v({type:"RESET_DATA_TO_DELETE"})}catch(t){E({type:"warning",message:A(t)})}h()},U=(0,i.useCallback)(t=>{D(`/settings/roles/duplicate/${t}`)},[D]),K=()=>D("/settings/roles/new"),p=(0,i.useCallback)(t=>{v({type:"SET_ROLE_TO_DELETE",id:t}),h()},[]),h=()=>T(t=>!t),M=(0,i.useCallback)(t=>{D(`/settings/roles/${t}`)},[D]),j=(0,i.useCallback)((t,O)=>{t.preventDefault(),t.stopPropagation(),O.usersCount?E({type:"info",message:{id:"Roles.ListPage.notification.delete-not-allowed"}}):p(O.id)},[E,p]),k=(0,i.useCallback)((t,O)=>{t.preventDefault(),t.stopPropagation(),U(O.id)},[U]),Es=(0,i.useCallback)(t=>[...a?[{onClick:O=>k(O,t),label:l({id:"app.utils.duplicate",defaultMessage:"Duplicate"}),icon:(0,e.jsx)(q.Z,{})}]:[],...o?[{onClick:()=>M(t.id),label:l({id:"app.utils.edit",defaultMessage:"Edit"}),icon:(0,e.jsx)(ss.Z,{})}]:[],...d?[{onClick:O=>j(O,t),label:l({id:"global.delete",defaultMessage:"Delete"}),icon:(0,e.jsx)(es.Z,{})}]:[]],[l,j,k,M,a,o,d]);return{handleNewRoleClick:K,getIcons:Es,selectedRoles:c,isWarningDeleteAllOpened:u,showModalConfirmButtonLoading:m,handleToggleModal:h,handleDeleteData:X}},rs=()=>{const{formatMessage:a}=(0,z.Z)();(0,n.useFocusWhenNavigate)();const d=(0,I.useSelector)(B.s),[{query:o}]=(0,n.useQueryParams)(),{isLoading:R,allowedActions:{canCreate:l,canDelete:A,canRead:E,canUpdate:u}}=(0,n.useRBAC)(d.settings.roles),{roles:T,isLoading:D,refetch:c}=(0,ns.u)({filters:o?._q?{name:{$containsi:o._q}}:void 0},{cacheTime:0,enabled:!R&&E}),{handleNewRoleClick:m,getIcons:H,isWarningDeleteAllOpened:v,showModalConfirmButtonLoading:J,handleToggleModal:X,handleDeleteData:U}=_s({refetchRoles:c,canCreate:l,canDelete:A,canUpdate:u}),K=T.length+1,p=6;if(R)return(0,e.jsx)(L.o,{children:(0,e.jsx)(n.LoadingIndicatorPage,{})});const h=a({id:"global.roles",defaultMessage:"roles"});return(0,e.jsxs)(L.o,{children:[(0,e.jsx)(n.SettingsPageTitle,{name:"Roles"}),(0,e.jsx)(P.T,{primaryAction:l?(0,e.jsx)(S.z,{onClick:m,startIcon:(0,e.jsx)(b.Z,{}),size:"S",children:a({id:"Settings.roles.list.button.add",defaultMessage:"Add new role"})}):null,title:h,subtitle:a({id:"Settings.roles.list.description",defaultMessage:"List of roles"}),as:"h2"}),E&&(0,e.jsx)(N.Z,{startActions:(0,e.jsx)(n.SearchURLQuery,{label:a({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:h})})}),E&&(0,e.jsxs)(F.D,{children:[(0,e.jsxs)($.i,{colCount:p,rowCount:K,footer:l?(0,e.jsx)(Y.c,{onClick:m,icon:(0,e.jsx)(b.Z,{}),children:a({id:"Settings.roles.list.button.add",defaultMessage:"Add new role"})}):null,children:[(0,e.jsx)(C.h,{children:(0,e.jsxs)(W.Tr,{"aria-rowindex":1,children:[(0,e.jsx)(_.Th,{children:(0,e.jsx)(r.Z,{variant:"sigma",textColor:"neutral600",children:a({id:"global.name",defaultMessage:"Name"})})}),(0,e.jsx)(_.Th,{children:(0,e.jsx)(r.Z,{variant:"sigma",textColor:"neutral600",children:a({id:"global.description",defaultMessage:"Description"})})}),(0,e.jsx)(_.Th,{children:(0,e.jsx)(r.Z,{variant:"sigma",textColor:"neutral600",children:a({id:"global.users",defaultMessage:"Users"})})}),(0,e.jsx)(_.Th,{children:(0,e.jsx)(Q.T,{children:a({id:"global.actions",defaultMessage:"Actions"})})})]})}),(0,e.jsx)(V.p,{children:T?.map((M,j)=>(0,e.jsx)(G,{id:M.id,name:M.name,description:M.description,usersCount:M.usersCount,icons:H(M),rowIndex:j+2,canUpdate:u},M.id))})]}),!K&&!D&&(0,e.jsx)(os,{})]}),(0,e.jsx)(n.ConfirmDialog,{isOpen:v,onConfirm:U,isConfirmButtonLoading:J,onToggleDialog:X})]})},ds=()=>{const a=(0,I.useSelector)(B.s);return(0,e.jsx)(n.CheckPagePermissions,{permissions:a.settings.roles.main,children:(0,e.jsx)(rs,{})})}},20498:(w,x,s)=>{s.d(x,{u:()=>i});var e=s(27279),n=s(1180),I=s(61020),B=s(40464);const i=(W={},_={})=>{const{id:r="",...f}=W,{get:y}=(0,n.useFetchClient)(),{locale:Z}=(0,I.Z)(),L=(0,n.useCollator)(Z,{sensitivity:"base"}),{data:P,error:S,isError:N,isLoading:F,refetch:$}=(0,B.useQuery)(["roles",r,f],async()=>{const{data:C}=await y(`/admin/roles/${r??""}`,{params:f});return C},_);return{roles:e.useMemo(()=>{let C=[];return P&&(Array.isArray(P.data)?C=P.data:C=[P.data]),[...C].sort((Q,V)=>L.compare(Q.name,V.name))},[P,L]),error:S,isError:N,isLoading:F,refetch:$}}}}]);