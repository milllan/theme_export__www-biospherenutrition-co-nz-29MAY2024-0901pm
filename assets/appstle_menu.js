/*! For license information please see appstle-menu.bundle.js.LICENSE.txt?v=cf3314a89116572c20e1 */
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Ve=Le.keyframes`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,qe=Le.keyframes`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ze=(0,Le.styled)("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${w=>w.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Be} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Ve} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${w=>w.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${qe} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Ge=x(873),He=Ge.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Ye=(0,Ge.styled)("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${w=>w.secondary||"#e0e0e0"};
  border-right-color: ${w=>w.primary||"#616161"};
  animation: ${He} 1s linear infinite;
`,Qe=x(873),Ke=Qe.keyframes`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Je=Qe.keyframes`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Xe=(0,Qe.styled)("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${w=>w.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Ke} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Je} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${w=>w.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,et=(0,Fe.styled)("div")`
  position: absolute;
`,tt=(0,Fe.styled)("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,nt=Fe.keyframes`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,rt=(0,Fe.styled)("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${nt} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,U=({toast:w})=>{let{icon:P,type:x,iconTheme:q}=w;return void 0!==P?"string"==typeof P?De.createElement(rt,null,P):P:"blank"===x?null:De.createElement(tt,null,De.createElement(Ye,{...q}),"loading"!==x&&De.createElement(et,null,"error"===x?De.createElement(ze,{...q}):De.createElement(Xe,{...q})))},Se=w=>`\n0% {transform: translate3d(0,${-200*w}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,Ae=w=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*w}%,-1px) scale(.6); opacity:0;}\n`,at=(0,Re.styled)("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,ot=(0,Re.styled)("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,it=Me.memo((({toast:w,position:P,style:x,children:q})=>{let $=w.height?((w,P)=>{let x=w.includes("top")?1:-1,[q,$]=_e()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Se(x),Ae(x)];return{animation:P?`${(0,Re.keyframes)(q)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${(0,Re.keyframes)($)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(w.position||P||"top-center",w.visible):{opacity:0},te=Me.createElement(U,{toast:w}),ie=Me.createElement(ot,{...w.ariaProps},u(w.message,w));return Me.createElement(at,{className:w.className,style:{...$,...x,...w.style}},"function"==typeof q?q({icon:te,message:ie}):Me.createElement(Me.Fragment,null,te,ie))})),st=x(873),ct=W(x(0));(0,st.setup)(ct.createElement);var Ie=({id:w,className:P,style:x,onHeightUpdate:q,children:$})=>{let te=ct.useCallback((P=>{if(P){let i=()=>{let x=P.getBoundingClientRect().height;q(w,x)};i(),new MutationObserver(i).observe(P,{subtree:!0,childList:!0,characterData:!0})}}),[w,q]);return ct.createElement("div",{ref:te,className:P,style:x},$)},ut=st.css`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,J=({reverseOrder:w,position:P="top-center",toastOptions:x,gutter:q,children:$,containerStyle:te,containerClassName:ie})=>{let{toasts:ue,handlers:le}=V(x);return ct.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...te},className:ie,onMouseEnter:le.startPause,onMouseLeave:le.endPause},ue.map((x=>{let te=x.position||P,ie=((w,P)=>{let x=w.includes("top"),q=x?{top:0}:{bottom:0},$=w.includes("center")?{justifyContent:"center"}:w.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:_e()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${P*(x?1:-1)}px)`,...q,...$}})(te,le.calculateOffset(x,{reverseOrder:w,gutter:q,defaultPosition:P}));return ct.createElement(Ie,{id:x.id,key:x.id,onHeightUpdate:le.updateHeight,className:x.visible?ut:"",style:ie},"custom"===x.type?u(x.message,x):$?$(x):ct.createElement(it,{toast:x,position:te}))})))},lt=n},,,,,,function(w,P){w.exports=function(w){if(Array.isArray(w))return w}},function(w,P){w.exports=function(w,P){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(w)){var x=[],q=!0,$=!1,te=void 0;try{for(var ie,ue=w[Symbol.iterator]();!(q=(ie=ue.next()).done)&&(x.push(ie.value),!P||x.length!==P);q=!0);}catch(w){$=!0,te=w}finally{try{q||null==ue.return||ue.return()}finally{if($)throw te}}return x}}},function(w,P){w.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},,,,,,,,,,,,,,,,,,function(w,P,x){var q=x(99),$=x.n(q),te=x(116),ie=x.n(te),ue=x(53),le=x.n(ue),he=x(0),me=x.n(he),ve=x(98),_e=x(283),Ee=x(17),je=x(875),Te=x.n(je),we=x(1014),Pe=x.n(we),ke=x(867),Me=x(868),Re=x(13),De=x(75).b?Symbol.for("__APOLLO_CONTEXT__"):"__APOLLO_CONTEXT__";var ApolloProvider=function(w){var P,x=w.client,q=w.children,$=((P=he.createContext[De])||(Object.defineProperty(he.createContext,De,{value:P=he.createContext({}),enumerable:!1,writable:!1,configurable:!0}),P.displayName="ApolloContext"),P);return he.createElement($.Consumer,null,(function(w){return void 0===w&&(w={}),x&&w.client!==x&&(w=Object.assign({},w,{client:x})),__DEV__?Object(Re.b)(w.client,'ApolloProvider was not passed a client instance. Make sure you pass in your client via the "client" prop.'):Object(Re.b)(w.client,29),he.createElement($.Provider,{value:w},q)}))};x.d(P,"b",(function(){return context_useMainContext})),x.d(P,"a",(function(){return context_MainProvider}));var Fe=me.a.createContext({loading:!1}),context_useMainContext=function(){return me.a.useContext(Fe)},context_MainProvider=function(w){var P=w.children,x=(Object(Ee.useDispatch)(),Object(Ee.useSelector)((function(w){var P;return null===(P=w.appstleMenuCustomerState)||void 0===P?void 0:P.products}))),q=Object(Ee.useSelector)((function(w){var P;return null===(P=w.appstleMenuCustomerState)||void 0===P?void 0:P.loading})),te=Object(Ee.useSelector)((function(w){var P;return null===(P=w.appstleMenuCustomerState)||void 0===P?void 0:P.hasNextPage})),ue=Object(Ee.useSelector)((function(w){var P;return null===(P=w.appstleMenuCustomerState)||void 0===P?void 0:P.lastCursor})),je=Object(he.useState)(!1),we=ie()(je,2),Re=we[0],De=(we[1],Object(he.useState)(null)),Le=ie()(De,2),Be=Le[0],Ve=Le[1],qe=Object(he.useState)(null),ze=ie()(qe,2),Ge=ze[0],He=ze[1],Ye=Object(he.useState)(null),Qe=ie()(Ye,2),Ke=Qe[0],Je=Qe[1],Xe=Object(he.useState)(null),et=ie()(Xe,2),tt=et[0],nt=et[1],rt=Object(he.useState)(null),at=ie()(rt,2),ot=(at[0],at[1]),it=Object(he.useState)(!1),st=ie()(it,2),ct=(st[0],st[1]),ut=Object(he.useState)(!1),lt=ie()(ut,2),dt=(lt[0],lt[1]),pt=Object(he.useState)(!1),ft=ie()(pt,2),ht=ft[0],gt=ft[1],mt=Object(he.useState)(null),bt=ie()(mt,2),yt=bt[0],vt=bt[1],Ot=Object(he.useState)([]),_t=ie()(Ot,2),Et=_t[0],St=_t[1],jt=Object(he.useState)(""),Tt=ie()(jt,2),Ct=Tt[0],wt=Tt[1],Pt=Object(he.useState)(""),kt=ie()(Pt,2),At=kt[0],It=kt[1],xt=Object(he.useState)(null),Mt=ie()(xt,2),Nt=Mt[0],Rt=Mt[1],Dt=Object(he.useState)(null),Ft=ie()(Dt,2),Lt=Ft[0],Ut=Ft[1],Bt=Object(he.useState)(null),Vt=ie()(Bt,2),qt=Vt[0],zt=Vt[1];Object(he.useEffect)((function(){ve.a?(Object(_e.c)().then((function(w){var P=w.data;Ve(P.shop);var x=P.filterMenu?JSON.parse(P.filterMenu):[];Ut(P),He(x),Je(x.length>0?x[0]:null),x.length>0&&handleChangeFilterMenu(x[0],[])})),Object(_e.e)().then((function(w){var P=w.data;nt(P.storeFrontAccessToken)})),Object(_e.b)().then((function(w){var P=w.data;Rt(P)}))):processAppstleMenuDetails()}),[]);var processAppstleMenuDetails=function(){setTimeout((function(){if(null==Ge||null==tt){var w,P,x,q,$,te,ie,ue,le,he,me,ve,_e,Ee,je,Te,we,Pe;nt(null===(w=window)||void 0===w||null===(P=w.appstleMenu)||void 0===P?void 0:P.storeFrontAccessKey);var ke=void 0!==(null===(x=window)||void 0===x||null===(q=x.appstleMenu)||void 0===q?void 0:q.menu)?JSON.parse(null===($=window)||void 0===$||null===(te=$.appstleMenu)||void 0===te||null===(ie=te.menu)||void 0===ie?void 0:ie.filterMenu):[],Me=(null===(ue=window)||void 0===ue||null===(le=ue.appstleMenu)||void 0===le||null===(he=le.menu)||void 0===he?void 0:he.shop)||"",Re=void 0!==(null===(me=window)||void 0===me||null===(ve=me.appstleMenu)||void 0===ve?void 0:ve.menu)?null===(_e=window)||void 0===_e||null===(Ee=_e.appstleMenu)||void 0===Ee?void 0:Ee.menu:null;Ut(Re),Ve(Me),He(ke),Je(ke.length>0?ke[0]:null),ke.length>0&&handleChangeFilterMenu(ke[0],[]);var De=void 0!==(null===(je=window)||void 0===je||null===(Te=je.appstleMenu)||void 0===Te?void 0:Te.appstleMenuLabels)?null===(we=window)||void 0===we||null===(Pe=we.appstleMenu)||void 0===Pe?void 0:Pe.appstleMenuLabels:null;Rt(De)}}),[500])},handleChangeFilterMenu=function(w){St([]),Je(w),prepareProductSearchQuery(w,[])},prepareProductSearchQuery=function(w,P){var x="".concat("ONE_TIME"===(null==w?void 0:w.menuType)?"tag:APPSTLE_ONE_TIME"+w.sourceCollection:"SUBSCRIBE"===(null==w?void 0:w.menuType)?"tag:APPSTLE_SUBSCRIBE"+w.subscriptionGroup:"BUNDLE"===(null==w?void 0:w.menuType)?"tag:'APPSTLE_BUNDLE'":""),q=function(w){var P=[];return w.map((function(w){"tag_filter"===w.filterType&&(P.length>0?P.push("OR tag:'".concat(w.filterValue,"'")):P.push("tag:'".concat(w.filterValue,"'")))})),P}(P),$=function(w){var P=[];return w.map((function(w){"vendor_filter"===w.filterType&&(P.length>0?P.push("OR vendor:'".concat(w.filterValue,"'")):P.push("vendor:'".concat(w.filterValue,"'")))})),P}(P),te=["".concat(x).concat(q.length>0?" AND ".concat(q.join("")):""),"".concat($.length>0?" AND  ".concat($.join("")):"")];It(te.join("")),wt(x)};return Object(he.useEffect)((function(){var w=new ke.a({uri:"https://"+Be+"/api/2023-07/graphql",headers:{"X-Shopify-Storefront-Access-Token":tt},cache:new Me.a});zt(w)}),[Be,tt]),me.a.createElement(Fe.Provider,{value:{loading:Re,shop:Be,filterMenuList:Ge,selectedFilterMenu:Ke,setSelectedFilterMenu:Je,shopAccessKey:tt,shopifyProducts:x,shopifyProductsLoading:q,addToCart:function(w,P,x){var q;gt(!0),vt(w.id);var te={items:[]},ie={id:w.id.split("/").pop(),quantity:P};"SUBSCRIBE"===(null==Ke?void 0:Ke.menuType)&&null!=x&&(ie.selling_plan=x.id.split("/").pop()),null==te||null===(q=te.items)||void 0===q||q.push(ie);var ue={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(te)};fetch("".concat(location.origin,"/cart/add.js"),ue).then((function(w){return w.json()})).catch((function(w){ot(null==w?void 0:w.description),ct(!0),dt(!1)})).then((function(w){var P;null!=w&&null!==(P=w.items)&&void 0!==P&&P.length?fetch("".concat(location.origin,"/cart.js")).then((function(w){return w.json()})).then(function(){var w=$()(le.a.mark((function _callee(w){var P;return le.a.wrap((function(x){for(;;)switch(x.prev=x.next){case 0:gt(!1),vt(null),document.documentElement.dispatchEvent(new CustomEvent("cart:refresh",{bubbles:!0})),P=w.items.reduce((function(w,P){return w+P.quantity}),0),jQuery(".cart-count-bubble").html(P),Te.a.custom((function(w){return me.a.createElement("div",{className:"".concat(w.visible?"as-animate-enter":"as-animate-leave"," as-max-w-md as-w-full as-bg-white as-shadow-lg as-rounded-lg as-pointer-events-auto as-flex as-ring-1 as-ring-black as-ring-opacity-5")},me.a.createElement("div",{className:"as-flex-1 as-w-0 as-p-4"},me.a.createElement("div",{className:"as-flex"},me.a.createElement("div",null,me.a.createElement("img",{src:Pe.a,alt:"",style:{height:50,width:50}})),me.a.createElement("div",{className:"as-ml-3 as-flex as-justify-center as-items-center"},me.a.createElement("p",{className:"as-text-sm as-font-medium as-text-gray-900"},"Product added successfully.")))),me.a.createElement("div",{className:"as-flex as-border-l as-border-gray-200"},me.a.createElement("button",{onClick:function(){return Te.a.dismiss(w.id)},className:"as-w-full as-border as-border-transparent as-rounded-none as-rounded-r-lg as-p-4 as-flex as-items-center as-justify-center as-text-sm as-font-medium as-text-indigo-600 as-hover:text-indigo-500 as-focus:outline-none as-focus:ring-2 as-focus:ring-indigo-500"},"Close")))}));case 6:case"end":return x.stop()}}),_callee)})));return function(P){return w.apply(this,arguments)}}()):null!=w&&w.status&&200!==(null==w?void 0:w.status)&&(ot(null==w?void 0:w.description),ct(!0),dt(!1))})).catch((function(w){console.log(w),dt(!1),ot(null==w?void 0:w.description),ct(!0),Te.a.error("Something went wrong.",{icon:"❌"})})).finally((function(){document.documentElement.dispatchEvent(new CustomEvent("cart:refresh",{bubbles:!0}))}))},adding:ht,productId:yt,filterValues:Et,setFilterValues:St,hasNextPage:te,lastCursor:ue,setInitialQuery:wt,initialQuery:Ct,filterQuery:At,setFilterQuery:It,appstleMenuLabels:Nt,setAppstleMenuLabels:Rt,handleChangeFilterMenu,handleChangeFilterValues:function(w){St(w),prepareProductSearchQuery(Ke,w)},appstleMenuSettings:Lt}},qt&&me.a.createElement(ApolloProvider,{client:qt},P))}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(w,P,x){w.exports=x.p+"content/3ef1c52118b3a2c6c54660c749650c14.gif"},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(w,P,x){},function(w,P,x){},,,,,,,function(w,P,x){x.r(P);var q=x(0),$=x.n(q),te=x(27),ie=x.n(te),ue=x(17),le=x(16),he=x(50),me=x(456),ve=x(465),_e=x(469),Ee=x(277),je=x.n(Ee),Te=x(61),we=x(901),Pe=x(875),ke=Object(q.lazy)((function(){return Promise.all([x.e(3),x.e(10),x.e(16),x.e(133)]).then(x.bind(null,3218))})),AppstleMenu_AppMain=function(){Object(we.b)().loading;return $.a.createElement(q.Fragment,null,$.a.createElement(q.Suspense,{fallback:$.a.createElement("div",{className:"loader-container"},$.a.createElement("div",{className:"loader-container-inner"},$.a.createElement("div",{className:"text-center"},$.a.createElement(je.a,{type:"ball-grid-beat"})),$.a.createElement("div",{style:{margin:"10% 0 0 43%",flexDirection:"column"},className:"loader-wrapper d-flex justify-content-center align-items-center"},$.a.createElement("div",{className:"appstle_preloader appstle_loader--big"}))))},$.a.createElement(Te.d,null,$.a.createElement(Te.b,{path:"/",component:ke}))),$.a.createElement(Pe.Toaster,{position:"top-center",reverseOrder:!1}))},Me=(x(1171),Object(ue.connect)((function(w){return{}}),{})((function(){return $.a.createElement(_e.a,{handleWidth:!0,render:function(w){w.width;return $.a.createElement(we.a,null,$.a.createElement(AppstleMenu_AppMain,null))}})}))),Re=x(472),De=x(69),Fe=x(98),Le=(x(1172),Object(ve.a)());!0!==Fe.a&&(console.log=console.warn=console.error=function(){});var Be=Object(he.b)({clearAuthentication:De.a},Le.dispatch);Object(me.a)((function(){Be.clearAuthentication("login.error.unauthorized"),ie.a.render($.a.createElement("div",{className:"text-center"}),Ve)}));for(var Ve=document.getElementById("root");Ve.firstChild;)Ve.removeChild(Ve.firstChild);Fe.a,document.querySelectorAll("#appstle_initialLoader").forEach((function(w){w.remove()}));var qe;qe=Me,ie.a.render($.a.createElement(ue.Provider,{store:Le},$.a.createElement(le.b,null,$.a.createElement(qe,null))),Ve),Re.a()}]);