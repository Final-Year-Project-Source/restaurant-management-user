(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7106],{3140:function(e,t,l){Promise.resolve().then(l.bind(l,60227))},60227:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return D}});var n=l(57437);l(20069);var a=l(75370),i=l(1434),r=l(2265),o=l(76158),s=l(35414),c=l(90850),d=l(16223),u=l(73297),m=l(93046);let x={groupName:"Dietary restrictions",options:[{icon:"Vegan",label:"Vegan"},{icon:"Vegetarian",label:"Vegetarian"},{icon:"Diary-free",label:"Diary-free"},{icon:"Gluten-free",label:"Gluten-free"}]},p={groupName:"Protein",options:[{label:"Chicken"},{label:"Pork"},{label:"Beef"},{label:"Seafood"},{label:"Other"}]};var h=l(91623),f=l(77190);l(19509);var v=e=>{let{...t}=e,[l,a]=(0,r.useState)(!1);return(0,n.jsx)(h.ZP,{theme:{components:{Input:{paddingInline:16,paddingBlock:11,activeBorderColor:"rgba(19, 28, 22, 0.2)",hoverBorderColor:"rgba(19, 28, 22, 0.2)"}},token:{lineHeight:1.5,colorText:"#131C16",fontSize:14,colorBgContainer:"transparent",colorBorder:"rgba(19, 28, 22, 0.2)",colorPrimary:"transparent",colorPrimaryHover:"transparent",colorPrimaryActive:"transparent",colorTextPlaceholder:"rgba(0, 0, 0, 0.50)",borderRadius:16,fontFamily:"var(--font-open-sans)"}},children:(0,n.jsx)(f.default,{className:"search-input-container--".concat(l?"focus":""),placeholder:"Search for dishes at Bella Olonje restaurant",onFocus:()=>a(!0),onBlur:()=>a(!1),prefix:(0,n.jsx)("div",{className:"mr-[8px]",children:(0,n.jsx)(s.W1,{})}),...t})})},y=l(11425),g=l(24033),b=e=>{var t,l;let{children:a,handleSearch:x,disabledSecondary:p,toggleFilter:h,onClickSecondaryBtn:f,onClickPrimaryBtn:b,secondaryBtnChildren:j,primaryBtnChildren:k,isShowPrimaryButton:C,activeCategory:B,setActiveCategory:N,isClickedCategoryBtn:S,setIsClickedClickCategoryBtn:T,isEmptyData:w,categories:E,bottomHeight:P=0}=e;(0,g.useRouter)();let R=(0,r.useRef)(null),_=(null===(l=null==R?void 0:R.current)||void 0===l?void 0:null===(t=l.getBoundingClientRect())||void 0===t?void 0:t.top)===0,Z=(0,r.useRef)(null),I=(0,m.v9)(e=>e.menuFilterReducer),[q,A]=(0,r.useState)(),{scrollBottom:F}=(0,y.I)(Z),{height:M}=(0,i.d)(),O=(0,r.useMemo)(()=>(null==q?void 0:q.protein)||[],[q]),L=(0,r.useMemo)(()=>(null==q?void 0:q.dietaryRestrictions)||[],[q]),z=(0,r.useMemo)(()=>(null==O?void 0:O.length)+(null==L?void 0:L.length),[L,O]),D=(null==E?void 0:E.map(e=>({...e,id:e._id})))||[];(0,r.useEffect)(()=>{A(I)},[I]),(0,r.useEffect)(()=>{if(S)return;let e=document.getElementById("btn_category_".concat(B));if(e){let t=e.parentElement;if(t){let l=t.getBoundingClientRect(),n=e.getBoundingClientRect().left-l.left-24;t.scrollTo({left:n,behavior:"smooth"})}}},[B,S]);let G=e=>{if(B===e)return;N(e),T(!0);let t=document.getElementById(e);if(t){var l,n;let a=(null==t?void 0:null===(l=t.getBoundingClientRect())||void 0===l?void 0:l.top)-(e===(null===(n=D[0])||void 0===n?void 0:n.id)?150:77)-20,i=Z.current;i&&i.scrollTo({top:i.scrollTop+a,behavior:"smooth"}),setTimeout(()=>{T(!1)},500)}},[U,V]=(0,r.useState)(""),H=E.filter((e,t)=>D.findIndex(t=>t.name===e.name)===t);return(0,n.jsx)("main",{ref:Z,className:"overflow-y-auto h-full ",style:{height:M-85},children:(0,n.jsxs)("div",{className:"flex flex-col ".concat(w?"h-full":""),children:[(0,n.jsxs)("div",{className:"w-full flex flex-row space-x-[9px] pt-[15px] pb-[10px] px-[24px]",children:[(0,n.jsx)(v,{value:U,suffix:U&&(0,n.jsx)(u.Z,{style:{color:"rgba(19, 28, 22, 0.50)"},onClick:e=>{V(""),x&&x(e)}}),onChange:e=>{V(e.target.value),x&&x(e)}}),(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)(o.hU,{className:"p-[10px]",onClick:h,icon:(0,n.jsx)(s.k1,{})}),!!z&&(0,n.jsx)("span",{className:"absolute top-[-2px] right-[-1px] flex items-center justify-center font-open-sans bg-black-500 text-white h-[18px] min-w-[18px] font-bold text-[11px] leading-[28px] rounded-[50%]",children:z})]})]}),(0,n.jsx)("div",{ref:R,className:"customized-menu sticky shrink-0 top-0 customized-background z-10 pl-[24px] pt-[20px] pb-[19px] flex space-x-[14px] overflow-auto ".concat((null==R?void 0:R.current)&&_?"shadow-medium-bottom":""),children:H.map(e=>(0,n.jsx)(d.Z,{id:"btn_category_".concat(e.id),active:B===e.id,onClick:()=>G(e.id),children:e.name},e.id))}),a,(0,n.jsx)(c.Z,{className:F-(50+P)>0?"shadow-medium-top":"shadow-medium-none",isShowPrimaryButton:C,disabledSecondary:p,onClickPrimaryBtn:b,primaryBtnChildren:k,onClickSecondaryBtn:f,secondaryBtnChildren:j})]})})},j=l(90601),k=l(29340),C=l(55261),B=l(97500),N=l.n(B),S=l(32596),T=l(1922),w=l(6779),E=e=>{let{id:t,name:l,description:a,price:i,image_url:r,discountPrice:o,className:s,track_stock:c}=e;return(0,n.jsxs)("div",{className:"".concat(s||""," ").concat(!c&&"opacity-50"||""," flex w-full"),children:[(0,n.jsx)(S.Z,{className:"mr-[24px]",width:86,height:86,src:r,alt:l}),(0,n.jsxs)("div",{className:"flex flex-col w-full",children:[(0,n.jsx)("div",{className:"text-[18px] text-red-50",children:l}),(0,n.jsx)("div",{className:"text-[13px] text-black-300 mt-[7px] ".concat(N().className),dangerouslySetInnerHTML:{__html:a||""}}),(0,n.jsxs)("div",{className:"flex items-center justify-between mt-[9px]",children:[o<i&&(0,n.jsxs)("div",{className:"flex space-x-[3px]",children:[(0,n.jsx)("div",{className:"text-[18px] text-black-400 line-through",children:i}),(0,n.jsx)("div",{className:"text-[18px] text-black-500",children:o})]})||(0,n.jsx)("div",{className:"text-[15px] text-back-500",children:"".concat((0,w.T4)(i)," vnd")}),(0,n.jsxs)("div",{className:"flex space-x-[10px]",children:[!c&&(0,n.jsx)(T.Z,{children:"Out of stock"}),c&&(0,n.jsx)(C.Z,{className:"btn--add-to-basket",id:"btn--add_".concat(t),plus:!0,variant:"secondary",disabled:!c})]})]})]})]})},P=l(33722),R=l(64308),_=l(85363),Z=l(91637),I=l(18968),q=l(66693),A=l(61732),F=l(99424),M=l(68143),O=l.n(M),L=l(61396),z=l.n(L);function D(){var e,t,l;let o=(0,m.I0)(),[s,c]=(0,r.useState)(0),[d,u]=(0,r.useState)(""),f=(0,m.v9)(e=>e.menuFilterReducer.protein),v=(0,m.v9)(e=>e.menuFilterReducer.dietaryRestrictions),[y,C]=(0,r.useState)([]),[B,N]=(0,r.useState)([]),S=(0,m.v9)(e=>e.tableReducer.tableId),[T,w]=(0,r.useState)(!1),M=(0,g.useRouter)(),{data:L}=(0,_.NL)(),{data:D}=(0,q.fq)({id:S||""},{skip:!S}),G=null==D?void 0:D.data,{data:U}=(0,Z.$r)({id:null==G?void 0:G.discount},{skip:!(null==G?void 0:G.discount)});null==U||U.data;let{data:V,isFetching:H}=(0,I.OR)({search:d,dietary_restrictions:y,proteins:B}),J=(0,r.useMemo)(()=>L?[...L].sort((e,t)=>e.name.localeCompare(t.name)):[],[L]),Q=null==V?void 0:V.data,W=(e,t)=>(Array.isArray(t)?[...t]:[]).sort((e,t)=>e.name.localeCompare(t.name)).map(t=>{let l=null==e?void 0:e.filter(e=>e.category_id===t.id);if((null==l?void 0:l.length)>0){let e=l.sort((e,t)=>e.name.localeCompare(t.name));return{id:t.id,name:t.name,items:e}}return null}).filter(Boolean),X=(0,r.useMemo)(()=>W(Q,J),[Q,J]),[Y,$]=(0,r.useState)(null==J?void 0:null===(e=J[0])||void 0===e?void 0:e.id),[K,ee]=(0,r.useState)(!1),et=(0,m.v9)(e=>e.basketReducer.basket),[el,en]=(0,r.useState)([]),ea=(0,g.useSearchParams)().get("bill_id"),{data:ei,isFetching:er}=(0,R.LJ)({id:ea||""},{skip:!ea}),eo=((null==el?void 0:el.length)||0)+((null==ei?void 0:null===(l=ei.data)||void 0===l?void 0:null===(t=l.orders)||void 0===t?void 0:t.reduce((e,t)=>e+t.items.length,0))||0),{width:es,height:ec}=(0,i.d)();(0,r.useEffect)(()=>{en(null==et?void 0:et.orderItems)},[et]);let[ed,eu]=(0,r.useState)([]),[em,ex]=(0,r.useState)([]);(0,r.useEffect)(()=>{C(v),N(f),eu(v),ex(f)},[v,f,T]);let ep=()=>{w(!1)},eh=(0,r.useCallback)(e=>{1>=Math.abs(e.length-J.length)||e.forEach(e=>{e.target.id&&e.isIntersecting&&$(e.target.id)})},[J]),ef=O()(e=>{u(e)},500);(0,r.useEffect)(()=>{var e;$(null==X?void 0:null===(e=X[0])||void 0===e?void 0:e.id)},[X]),(0,r.useEffect)(()=>{if(K)return;let e=97/ec*100,t=new IntersectionObserver(eh,{rootMargin:"-".concat(e,"% 0px -").concat(100-e,"% 0px")});return document.querySelectorAll(".category--item").forEach(e=>{t.observe(e)}),()=>{t.disconnect()}},[K,eh,V,ec]);let ev=(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{children:"View basket"}),(0,n.jsxs)("span",{id:"basket-ele",className:"font-normal",children:["・",eo," item",eo>1?"s":""]})]});return(0,r.useEffect)(()=>{if(X){let e=document.querySelectorAll("#last-category"),t=e[e.length-1];t&&c(ec-(162+t.getBoundingClientRect().height+40+20)+1)}},[X]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(b,{secondaryBtnChildren:ev,onClickSecondaryBtn:()=>M.push(ea?"/basket?bill_id=".concat(ea):"/basket"),toggleFilter:()=>{w(!0)},activeCategory:Y,setActiveCategory:$,isClickedCategoryBtn:K,handleSearch:e=>{ef(e.target.value)},setIsClickedClickCategoryBtn:ee,isEmptyData:!(null==X?void 0:X.length),disabledSecondary:!eo,categories:X,bottomHeight:s,children:(0,n.jsxs)("main",{className:"flex flex-col justify-center px-[24px] h-full",children:[(null==X?void 0:X.length)===0&&!H&&(0,n.jsx)(A.Z,{image:A.Z.PRESENTED_IMAGE_SIMPLE,description:(0,n.jsx)("span",{className:"text-black-300 text-lg",children:"No items found"})}),null==X?void 0:X.map((e,t)=>{var l,a;let i=(null==e?void 0:null===(l=e.items)||void 0===l?void 0:l.length)||0;return(0,n.jsxs)("div",{id:"last-category",className:"flex flex-col justify-start w-full mb-[40px] ".concat(0===t?"pt-[5px]":""),children:[(0,n.jsx)("p",{id:null==e?void 0:e.id,className:"text-[24px] font-medium text-red-50 leading-7 category--item",children:"".concat(null==e?void 0:e.name," (").concat(null==e?void 0:e.items.length,")")}),(0,n.jsx)("div",{className:"flex flex-col w-full mt-[30px]",children:null==e?void 0:null===(a=e.items)||void 0===a?void 0:a.map((e,t)=>(0,n.jsxs)(z(),{className:"".concat(e.is_available?"cursor-pointer":"pointer-events-none"),href:ea?"/product?id=".concat(e.id,"&bill_id=").concat(ea):"/product?id=".concat(e.id),children:[(0,n.jsx)("div",{className:0!==t?"mt-[22px]":"",children:(0,n.jsx)(E,{id:e.id,name:e.name,image_url:e.image_url,description:e.description,price:e.price,track_stock:e.is_available})}),t<i-1&&(0,n.jsx)("hr",{className:"w-full border-t border-black-100 mt-[18px]"})]},e._id))})]},null==e?void 0:e.id)}),(0,n.jsx)("div",{style:{height:s}}),T&&(0,n.jsx)(h.ZP,{theme:{token:{fontFamily:"var(--font-rubik)"}},children:(0,n.jsx)(F.Z,{title:"",closable:!1,placement:"left",onClose:ep,open:T,width:es,children:(0,n.jsx)(j.Z,{isHiddenAvatar:!0,isShowPrimaryButton:!1,isShowBackBtn:!0,onClickBackBtn:ep,secondaryBtnChildren:(0,n.jsx)(n.Fragment,{children:"Apply filters"}),onClickSecondaryBtn:()=>{o((0,P.BE)(ed)),o((0,P.dL)(em)),ep()},title:"Filter menu",children:(0,n.jsxs)("div",{className:"flex flex-col space-y-[29px] mt-[12px] pl-[25px]",children:[(0,n.jsx)(a.Z,{defaultValue:v,...x,onChange:e=>{eu(e)}}),(0,n.jsx)(a.Z,{defaultValue:f,...p,onChange:e=>{ex(e)}})]})})})})]})}),(H||er)&&(0,n.jsx)(k.Z,{})]})}},29340:function(e,t,l){"use strict";var n=l(57437),a=l(91623),i=l(59810);t.Z=()=>(0,n.jsx)(a.ZP,{theme:{token:{colorPrimary:"#131C16"}},children:(0,n.jsx)(i.Z,{className:"!fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 black-500",size:"large"})})},32596:function(e,t,l){"use strict";var n=l(57437),a=l(23172),i=l(16691),r=l.n(i),o=l(2265);t.Z=e=>{let{src:t,alt:l,width:i,height:s,className:c}=e,[d,u]=(0,o.useState)(!0),m={width:i,height:s};return(0,n.jsxs)("div",{className:"".concat(c||""," flex flex-col items-center shrink-0"),style:m,children:[d&&(0,n.jsx)(a.Z.Button,{style:m,active:!0}),(0,n.jsx)(r(),{className:"shrink-0",priority:!0,onLoad:()=>u(!1),onError:()=>u(!1),width:i,height:s,src:t||"/assets/images/product-default.png",alt:l,style:{opacity:d?0:1}})]})}},1922:function(e,t,l){"use strict";var n=l(57437),a=l(97500),i=l.n(a),r=l(91623),o=l(28073);t.Z=e=>{let{className:t,children:l,...a}=e;return(0,n.jsx)(r.ZP,{theme:{components:{Tag:{borderRadiusSM:7,defaultBg:"#fff",fontSizeSM:10,defaultColor:"#A82825",lineHeightSM:2.2,colorBorder:"#A82825"}}},children:(0,n.jsx)(o.Z,{...a,className:" ".concat(t||"","  font-normal"),style:{marginInlineEnd:0},children:(0,n.jsx)("div",{className:i().className,children:l})})})}},90601:function(e,t,l){"use strict";var n=l(57437),a=l(24033),i=l(2265),r=l(76158),o=l(11425),s=l(35414),c=l(90850);t.Z=e=>{let{isShowBackBtn:t=!0,title:l,isTextRequestTaxInvoice:d,children:u,disabledPrimary:m,disabledSecondary:x,onClickSecondaryBtn:p,secondaryBtnChildren:h,onClickPrimaryBtn:f,primaryBtnChildren:v,isShowPrimaryButton:y,onClickBackBtn:g,onClickDownBtn:b,disabledBackBtn:j,isHiddenAvatar:k=!1}=e,C=(0,i.useRef)(null),{scrollTop:B,scrollBottom:N}=(0,o.I)(C);(0,a.useRouter)();let S=(0,i.useMemo)(()=>y?"243px":d?"211px":"170px",[y,d]);return(0,n.jsxs)("div",{className:"flex flex-col h-screen",children:[(0,n.jsxs)("div",{className:"".concat(B-13>0?"shadow-medium-bottom":""," relative w-full pt-[22px] pb-[15px] flex flex-row items-center ").concat(t?"justify-start pl-4":"justify-end pr-4"),children:[t&&(0,n.jsx)(r.hU,{icon:(0,n.jsx)(s.Y4,{}),disabled:j,onClick:g}),(0,n.jsx)("span",{className:"w-[calc(100%-8rem)] absolute top-[40%] right-1/2 transform translate-x-1/2 text-center text-xl font-medium text-black-500",children:l}),!t&&(0,n.jsx)(r.hU,{icon:(0,n.jsx)(s._8,{}),onClick:b})]}),(0,n.jsx)("div",{ref:C,className:"overflow-y-auto max-h-screen-".concat(S),children:u}),(0,n.jsx)(c.Z,{className:N-40>0?"shadow-medium-top":"",disabledPrimary:m,disabledSecondary:x,isTextRequestTaxInvoice:d,isShowPrimaryButton:y,onClickPrimaryBtn:f,primaryBtnChildren:v,onClickSecondaryBtn:p,secondaryBtnChildren:h})]})}},33722:function(e,t,l){"use strict";l.d(t,{BE:function(){return s},dL:function(){return o}});var n=l(73135),a=l(50940);let i={protein:(0,a.Oq)(),dietaryRestrictions:(0,a.eU)()},r=(0,n.oM)({name:"menuFilter",initialState:i,reducers:{updateProtein:(e,t)=>{e.protein=t.payload,localStorage.setItem("protein",JSON.stringify(t.payload))},updateDietaryRestrictions:(e,t)=>{e.dietaryRestrictions=t.payload,localStorage.setItem("dietaryRestrictions",JSON.stringify(t.payload))},resetMenuFilter:e=>{e.protein=[],e.dietaryRestrictions=[],(0,a.dl)(),(0,a.A7)()}}}),{updateProtein:o,updateDietaryRestrictions:s,resetMenuFilter:c}=r.actions;t.ZP=r.reducer},64308:function(e,t,l){"use strict";l.d(t,{LJ:function(){return o},QC:function(){return i},db:function(){return u},kX:function(){return m},oQ:function(){return s},w2:function(){return c}});var n=l(85687),a=l(40329);let i=(0,n.LC)({reducerPath:"billApi",refetchOnFocus:!0,baseQuery:(0,a.ni)({baseUrl:"".concat("http://localhost:3001/v1","/")}),tagTypes:["Bill"],endpoints:e=>({getBills:e.query({query:()=>({url:"bill",method:"GET",headers:{"Content-Type":"application/json"}}),providesTags:["Bill"]}),getSingleBill:e.query({query:e=>"bill/".concat(e.id),providesTags:["Bill"]}),addBill:e.mutation({query:e=>{let{data:t}=e;return{url:"bill",method:"POST",body:t}},invalidatesTags:["Bill"]}),updateBill:e.mutation({query:e=>{let{data:t}=e;return{url:"bill",method:"PUT",body:t,headers:{"Content-Type":"application/json"}}},invalidatesTags:["Bill"]}),deleteBill:e.mutation({query:e=>{let{data:t}=e;return{url:"bill/".concat(t.id),method:"DELETE",body:{data:t},headers:{"Content-Type":"application/json"}}},invalidatesTags:["Bill"]}),createFeedback:e.mutation({query:e=>{let{data:t}=e;return{url:"feedback",method:"POST",body:t}},invalidatesTags:["Bill"]}),createTaxInvoice:e.mutation({query:e=>{let{data:t}=e;return{url:"taxinvoice",method:"POST",body:t}},invalidatesTags:["Bill"]})})}),{useGetBillsQuery:r,useGetSingleBillQuery:o,useUpdateBillMutation:s,useAddBillMutation:c,useDeleteBillMutation:d,useCreateFeedbackMutation:u,useCreateTaxInvoiceMutation:m}=i},85363:function(e,t,l){"use strict";l.d(t,{NL:function(){return r},rj:function(){return i}});var n=l(85687),a=l(40329);let i=(0,n.LC)({reducerPath:"categoryApi",refetchOnFocus:!0,baseQuery:(0,a.ni)({baseUrl:"".concat("http://localhost:3001/v1","/")}),endpoints:e=>({getCategories:e.query({query:()=>({url:"category",method:"GET",headers:{"Content-Type":"application/json"}})}),getAllCategories:e.query({query:()=>({url:"category",method:"GET",headers:{"Content-Type":"application/json",isAll:"true"}})}),getCategoriesById:e.query({query:e=>{let{access_token:t,id:l}=e;return{url:"category/".concat(l),method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}}})})}),{useGetCategoriesQuery:r,useGetAllCategoriesQuery:o,useGetCategoriesByIdQuery:s}=i},20069:function(){}},function(e){e.O(0,[4872,2598,8809,5687,2379,9810,8863,7190,6691,6394,1369,1396,693,3305,2322,4440,5220,2971,4938,1744],function(){return e(e.s=3140)}),_N_E=e.O()}]);