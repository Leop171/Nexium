"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[622],{16974(e,t,n){n.d(t,{A:()=>c});var o=n(77810),r=n(75826),i=n.n(r),l=n(44828);const a=({text:e})=>o.createElement(l.EY,{fontSize:{base:"16px",lg:"18px"},fontWeight:"500",lineHeight:"27px",color:"gray.700"},e);a.propTypes={text:i().string.isRequired};const c=a},25610(e,t,n){n.d(t,{A:()=>u});var o=n(77810),r=n(75826),i=n.n(r),l=n(24578),a=n(44828),c=n(41863),s=n(63158);const p=l.A.h2`
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: ${s.A.gray[700]};
    padding-left: 16px;
`,d=({title:e,children:t})=>o.createElement(a.As,null,o.createElement(p,null,o.createElement(a.J2,{height:"64px"},o.createElement(a.az,{flex:"1",textAlign:"left",fontWeight:"400",fontSize:"20px"},o.createElement(c.A,e)),o.createElement(a.QJ,null))),o.createElement(a.vr,{mb:6,padding:"0"},t));d.propTypes={title:i().object.isRequired,children:i().element.isRequired};const u=d},38378(e,t,n){n.d(t,{A:()=>w});var o=n(64180),r=n(77810),i=n(75826),l=n.n(i),a=n(24578),c=n(44828),s=n(63158),p=n(44100),d=n(6026),u=n(41824),m=n(62345),x=n(58081),h=n(71054),g=n(92288);const f=(0,x.A)(c.K0),b=a.A.div`
    --padding: 16px;
    --offset-tag-x: 10px;
    --offset-tag-y: 15px;
    overflow-y: visible;
    margin-left: ${e=>e.isMobileIsRenewal?"":"var(--offset-tag-x)"};
    margin-top: var(--offset-tag-y);
    position: relative;
    background-color: ${s.A.white};
    width: ${e=>e.isMobileIsRenewal?"253px":"290px"};
    height: ${e=>e.isMobileIsRenewal?"290px":"303px"};
    border-radius: 8px;
    border: 2px solid ${s.A.teal[500]};
    padding: var(--padding);
    box-shadow: 0px 4px 10px -1px #0000001a, 0px 2px 10px -1px #0000000f;
    transition: 0.2s;
    &:not(.active) {
        border-color: transparent;
    }

    @media (max-width: 991px) {
        width: 100%;
        max-width: 253px;
    }
`,y=a.A.h3`
    font-family: 'AMX';
    font-size: 24px;
    font-weight: 700;
    margin-top: calc(24px - var(--padding));
    line-height: 36px;
    color: ${s.A.gray[700]};
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-x: hidden;
    @media (max-width: 975px) {
        font-size: 20px;
    }
`,v=a.A.img`
    object-fit: contain;
    margin-inline: auto;
    width: 200px;
    height: 214px;
    @media (max-width: ${d.A.container.slg}) {
        width: 171px;
        height: 197px;
    }
`,E=(0,a.A)(h.A)`
    font-size: 14px;
    position: absolute;
    bottom: 12px;
    left: 16px;
`,A=({phone:e,onOpenPhoneTechnicalSheetModal:t,isActive:n,isMobileIsRenewal:i=!1})=>{var l,a,s;const d=(0,c.o5)("ProductTile"),{name:x}=e,h=null===(l=e.imageGroups.find(({viewType:e})=>"small"===e))||void 0===l||null===(a=l.images)||void 0===a?void 0:a[0],{data:A}=(0,u.T)(),w=null==A||null===(s=A.customerProductListItems)||void 0===s?void 0:s.some(t=>t.productId===e.id),_=null==e?void 0:e.c_cen_texto_etiqueta;return r.createElement(b,{className:n?"active":"",isMobileIsRenewal:i},_&&r.createElement(p.A,{text:_}),r.createElement(y,{title:x},x),r.createElement(v,{title:h.title,src:h.link,alt:h.alt}),r.createElement(c.az,null,r.createElement(f,(0,o.A)({},d.favIcon,{icon:w?r.createElement(m.nMd,null):r.createElement(m.Ssz,{width:"45px",height:"45px"}),marginBottom:"16px",marginRight:"16px"}))),r.createElement(g.A,{phone:e}),r.createElement(E,{onClick:()=>t(e)},"Ver detalle"))};A.propTypes={phone:l().object.isRequired,isActive:l().bool.isRequired,onOpenPhoneTechnicalSheetModal:l().func.isRequired,isMobileIsRenewal:l().bool};const w=A},44005(e,t,n){n.d(t,{A:()=>s});var o=n(28407),r=n(4026),i=n(55600),l=n(38360),a=n(90031);const c=function(){var e=(0,o.A)(function*({phone:e}){var t;const n=(0,i.o)(),{getTokenWhenReady:o}=(0,a.useAccessToken)(),{app:{commerceAPI:{parameters:{siteId:c,organizationId:s}}}}=(0,r.getConfig)(),p=null==e?void 0:e.c_cen_contenido_pdp,d=yield o(),u=yield(0,l.P3)(n,c,s,p,d),m=null==u||null===(t=u[0])||void 0===t?void 0:t.body,x=document.getElementById("feature-block");if(m&&x){x.innerHTML=m;const e=document.getElementsByClassName("jsScript-button");e&&Array.prototype.map.call(e,e=>{e.addEventListener("click",()=>(e=>{if(!e.classList||e.classList.length<2)return;const t=e.classList[1],n=document.getElementsByClassName("jsScript-button");n&&Array.prototype.map.call(n,e=>{e.style.border="1px solid #B9B9B9",e.style.color="#B9B9B9",e.classList.contains(t)&&(e.style.border="2px solid #0097A9",e.style.color="#0097A9")});const o=document.getElementsByClassName("jsScript-target");o&&Array.prototype.map.call(o,e=>{e.style.display="none",e.classList.contains(t)&&(e.style.display="block")})})(e))})}});return function(t){return e.apply(this,arguments)}}(),s=c},44100(e,t,n){n.d(t,{A:()=>d});var o=n(77810),r=n(75826),i=n.n(r),l=n(24578),a=n(63158),c=n(62345);const s=l.A.div`
    display: flex;
    gap: 8px;
    position: absolute;
    top: -15px;
    left: -10px;
    padding: 9px 16px;
    background-color: ${a.A.teal[500]};
    color: ${a.A.white};
    border-radius: 0px 8px 8px 0px;
    span {
        font-size: 14px;
        font-weight: 700;
        line-height: 14px;
        align-content: center;
    }
`,p=({text:e})=>o.createElement(s,null,o.createElement(c.gqV,{width:"12px",height:"12px"}),o.createElement("span",null,e));p.propTypes={text:i().string.isRequired};const d=p},44974(e,t,n){n.d(t,{A:()=>r});var o=n(77810);const r=()=>{const e=(0,o.useRef)(null);(0,o.useEffect)(()=>{if(e.current){const t=e.current.swiper;setTimeout(()=>{t.slideToLoop(0,300)},300)}},[]);const t=(0,o.useCallback)(()=>{e.current&&e.current.swiper.slidePrev()},[]),n=(0,o.useCallback)(()=>{if(e.current){const t=e.current.swiper;t.slideToLoop((t.realIndex+1)%t.slides.length,300)}},[]);return{swiperRef:e,back:t,next:n}}},46382(e,t,n){n.d(t,{A:()=>E});var o=n(64180),r=n(10939),i=n(28407),l=n(77810),a=n(75826),c=n.n(a),s=n(15921),p=n(44828),d=n(49785),u=n(5332),m=n(41863),x=n(90967),h=n(62345),g=n(36304),f=n(90031);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach(function(t){(0,r.A)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}const v=({hasStock:e,phone:t})=>{const n=(0,d.mN)(),{data:r}=(0,u.J)(),[a,c]=(0,l.useState)(!1),[b,v]=(0,l.useState)(!0),[E,A]=(0,l.useState)(""),w=(0,x.A)({form:n,prefix:""}),_=(0,p.o5)("ProductView"),{handleSubmit:O,trigger:S}=n;n.watch("email");const P=n.getValues("email"),{getTokenWhenReady:j}=(0,f.useAccessToken)();function k(){return R.apply(this,arguments)}function R(){return(R=(0,i.A)(function*(){const e=yield S("email");v(!e)})).apply(this,arguments)}(0,l.useEffect)(()=>{(E||(null==P?void 0:P.length)>2)&&k(),A(P)},[P]),(0,l.useEffect)(()=>{if(null!=r&&r.email)return n.setValue("email",null==r?void 0:r.email),void k();n.setValue("email",""),A("")},[null==r?void 0:r.email]);const M=function(){var e=(0,i.A)(function*({email:e}){const n={email:e,productId:t};(yield(0,g.A)(n,j)).sucess&&c(!0)});return function(t){return e.apply(this,arguments)}}();return l.createElement(l.Fragment,null,!e&&!a&&l.createElement(p.az,null,l.createElement(p.EY,{color:"gray.850",fontSize:"14px",fontStyle:"normal",fontWeight:"500"},l.createElement(m.A,{id:"pdp.plan.label.availability_notification",defaultMessage:[{type:0,value:"Avísame cuando esté disponible"}]})),l.createElement("form",{onSubmit:O(M)},l.createElement(p.so,_.inputFieldContainer,l.createElement(s.A,(0,o.A)({},w.email,{inputStyle:y({},_.inputFieldStyle)})),l.createElement(p.$n,(0,o.A)({},_.buttonSentNotification(b),{type:"submit",isDisabled:b,minWidth:"93px",sx:{"&[disabled]":{cursor:"pointer"}}}),l.createElement(m.A,{id:"pdp.plan.button.send",defaultMessage:[{type:0,value:"Enviar"}]}))))),!e&&a&&l.createElement(p.so,{borderRadius:"12px",border:"1px solid #DBDBDB",padding:"12px"},l.createElement(h.yqz,{alt:"Icono disponibilidad",boxSize:"38px"}),l.createElement(p.EY,_.labelSentNotification,l.createElement(m.A,{id:"pdp.plan.label.notification_sent_message",defaultMessage:[{type:0,value:"Su información ha sido enviada con éxito. Se le estará notificando al respecto"}]}))))};v.propTypes={hasStock:c().bool,phone:c().string};const E=v},47839(e,t,n){n.d(t,{A:()=>c});var o=n(10939),r=n(77810),i=n(44828);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach(function(t){(0,o.A)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}const c=()=>{const[e,t]=(0,r.useState)(null),n=(0,i.j1)();return{phone:e,modal:a(a({},n),{},{onOpen:e=>{t(e),n.onOpen()}})}}},57168(e,t,n){n.d(t,{A:()=>f});var o=n(77810),r=n(75826),i=n.n(r),l=n(24578),a=n(44828),c=n(62345),s=n(57628),p=n(25610),d=n(47259),u=n(44005),m=n(63158),x=n(67301);const h=l.A.h3`
    font-family: 'AMX';
    font-weight: 700;
    line-height: 45px;
    color: ${m.A.gray[700]};
`,g=({modal:e,phone:t})=>{var n,r;const{isOpen:i,onClose:l}=e,{selectedPlanPhone:m}=(0,x.N)(),g=null==m||null===(n=m.variant)||void 0===n?void 0:n.value,f=(null==g||null===(r=g.master)||void 0===r?void 0:r.masterId)===(null==t?void 0:t.id)?g:t,b=null!=f&&f.c_cen_box_items?null==f?void 0:f.c_cen_box_items.split(",").map(e=>e.trim()):[];(0,u.A)({phone:f});const y=(0,d.A)("slg");return o.createElement(a.aF,{onClose:l,isOpen:i,isCentered:!0,scrollBehavior:"inside"},o.createElement(a.mH,null),o.createElement(a.$m,{style:{width:"1200px",maxWidth:"unset",maxHeight:"700px"},pt:"30px",pl:"39.5px",pr:"25px",borderRadius:"12px"},o.createElement(a.s_,{fontSize:"13px",width:"21px",height:"21px",top:"30px",right:"38px",_active:{backgroundColor:"transparent"},_hover:{backgroundColor:"transparent"}}),o.createElement(a.rQ,{px:"0"},o.createElement(h,null,o.createElement(a.EY,{fontSize:y?"24px":"30px"},f.name))),o.createElement(a.cw,{mr:"18px",px:"0",className:"customScrollbar"},o.createElement(a.BJ,{direction:"row",spacing:[0,0,0,16],w:"100%",pr:"13px"},o.createElement(a.nD,{allowMultiple:!0,flex:[1,1,1,5]},o.createElement(p.A,{title:{defaultMessage:"Ficha Técnica",id:"product_detail.accordion.button.data_sheet"}},o.createElement(s.A,{product:f,wrapperProps:{gridTemplateColumns:["repeat(auto-fill, 345px)","repeat(auto-fill, 345px)","repeat(auto-fill, 350px)"],gap:"8px"},itemProps:{w:["345px","345px","350px","350px","350px"]}})),((null==f?void 0:f.c_cen_flixmedia_url)||(null==f?void 0:f.c_cen_contenido_pdp))&&o.createElement(p.A,{title:{defaultMessage:"Características por bloque",id:"product_detail.accordion.button.feature_by_block"}},null!=f&&f.c_cen_flixmedia_url?o.createElement(a.gl,{w:"100%",style:{position:"relative"}},o.createElement("iframe",{title:null==f?void 0:f.name,src:null==f?void 0:f.c_cen_flixmedia_url})):o.createElement(a.az,{id:"feature-block"})),(null==b?void 0:b.length)>0&&o.createElement(p.A,{title:{defaultMessage:"¿Qué viene en la caja?",id:"product_detail.accordion.button.what_is_in_the_box"}},o.createElement(a.so,{wrap:"wrap",direction:y?"column":"row",paddingLeft:"16px"},b.map((e,t)=>o.createElement(a.so,{key:t,align:"center",gap:"9.5px",width:y?"100%":"25%",mb:y?"14.5px":"11px"},o.createElement(c.Zy4,{width:"8px",height:"8px"}),o.createElement(a.EY,{style:{fontWeight:"400",fontSize:y?"14px":"18px",lineHeight:y?"20px":"27px"}},e)))))))),o.createElement(a.jl,null)))};g.propTypes={modal:i().object.isRequired,phone:i().object.isRequired};const f=g},57628(e,t,n){n.d(t,{A:()=>s});var o=n(77810),r=n(75826),i=n.n(r),l=n(44828);const a=/(['"]?Roboto\s+(Medium|Bold)['"]?)/gi,c=({product:e})=>{const t=()=>{const t=null==e?void 0:e.c_cen_esim_support,n=null==e?void 0:e.c_cen_sim_analogic_support;return n&&!t?"SIM física":!n&&t?"eSIM":n&&t?"SIM física, eSIM":void 0};return(0,o.useEffect)(()=>{if(null!=e&&e.c_cenDataSheet){const n=((e,n)=>{var o;return((o=e)?o.replace(a,"Roboto").replace(/font-family:\s*['"]?Roboto['"]?/gi,e=>`${e}; font-weight: 500`):"").replace(/{{\s*([\w.]+)\s*}}/g,(e,o)=>{const r=o.split(".");let i=n;return r.forEach(e=>{var n;i="c_cen_esim_support"==e||"c_cen_sim_analogic_support"==e?t():null===(n=i)||void 0===n?void 0:n[e]}),void 0!==i?i:e})})(null==e?void 0:e.c_cenDataSheet,e),o=document.getElementById("data-sheet-content");o&&(o.innerHTML=n),o.querySelectorAll(".data-sheet-card").forEach(e=>{let t=!1;e.querySelectorAll(".data-sheet-card-body-row").forEach(e=>{e.querySelector(".data-sheet-card-body-description").textContent.trim().includes("{{")?e.style.display="none":t=!0}),t||(e.style.display="none")}),o.querySelectorAll(".css-0").forEach(e=>{0===e.querySelectorAll('.data-sheet-card:not([style*="display: none"])').length&&(e.style.display="none")})}},[e]),o.createElement(l.az,{id:"data-sheet-content"})};c.propTypes={product:i().object};const s=c},61063(e,t,n){n.d(t,{A:()=>d});var o=n(77810),r=n(75826),i=n.n(r),l=n(24578),a=n(34078),c=n(63158);const s=(0,l.A)(a.A,{shouldForwardProp:e=>"centeredFixed"!==e})`
    padding: 16px 20px;
    box-shadow: unset;
    border: 1px solid ${c.A.gray[200]};
    @media (${e=>e.centeredFixed?"max-width: 1248px":"max-width: 975px"}) {
        padding: 12px 15px;
    }
`,p=({contractMonth:e,selectedPhone:t,centeredFixed:n=!1,skuPlan:r})=>o.createElement(s,{isPostPayment:!0,monthContractSelected:e.value,product:t,centeredFixed:n,postPaymentPlanSelected:r,customClassName:"plan-phone-price"});p.propTypes={contractMonth:i().object,selectedPhone:i().object,centeredFixed:i().bool,skuPlan:i().string};const d=p},67301(e,t,n){n.d(t,{G:()=>a,N:()=>c});var o=n(77810),r=n(75826),i=n.n(r);const l=o.createContext(),a=({value:e,children:t})=>o.createElement(l.Provider,{value:e},t);a.propTypes={value:i().object.isRequired,children:i().node.isRequired};const c=()=>o.useContext(l)},70829(e,t,n){n.d(t,{A:()=>f});var o=n(10939),r=n(64180),i=n(18801),l=n(77810),a=n(75826),c=n.n(a),s=n(24578),p=n(62345),d=n(63158);const u=["icon"];function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}const x=s.A.button`
    position: absolute;
    top: 50%;
    translate: 0 -50%;
    z-index: 1;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #b9b9b9cc;
    color: ${d.A.white};
    z-index: 3;
    svg {
        width: 28px;
        height: 28px;
    }
    :has(svg[data-navigate='left']) {
        left: -20px;
    }
    :has(svg[data-navigate='right']) {
        right: -20px;
    }
`,h=e=>{let{icon:t}=e,n=(0,i.A)(e,u);return l.createElement(x,(0,r.A)({type:"button"},n),t)};h.propTypes=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach(function(t){(0,o.A)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({icon:c().element},x.propTypes);const g=({phoneCarousel:e})=>l.createElement(l.Fragment,null,l.createElement(h,{icon:l.createElement(p.YJP,{"data-navigate":"left"}),onClick:e.back}),l.createElement(h,{icon:l.createElement(p.vKP,{"data-navigate":"right"}),onClick:e.next}));g.propTypes={phoneCarousel:c().object};const f=g},71054(e,t,n){n.d(t,{A:()=>i});var o=n(24578),r=n(63158);const i=o.A.button`
    border: 0;
    background-color: transparent;
    color: ${r.A.teal[500]};
    text-decoration: underline;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
`},92288(e,t,n){n.d(t,{A:()=>x});var o=n(77810),r=n(24578),i=n(75826),l=n.n(i),a=n(44828),c=n(44640),s=n(62345),p=n(66322);const d=(0,r.A)(a.BJ)`
    gap: 8px;
    position: absolute;
    left: 0;
    top: 50%;
    translate: 0 -50%;
    z-index: 9;
`,u=(0,r.A)(a.E9)`
    height: 36px;
`,m=({phone:e})=>{const t=(0,c.iP)(null==e?void 0:e.c_cen_5g),n=(0,c.iP)(null==e?void 0:e.c_cen_esim),r=(0,c.iP)(null==e?void 0:e.c_cen_ribbon_pos003),i=(0,c.iP)(null==e?void 0:e.c_cen_ribbon_pos004);return o.createElement(d,null,n&&o.createElement(a.az,{width:"74px",padding:"8px",background:"orange.500",borderRadius:"0px 8px 8px 0px",display:"flex",alignItems:"center"},o.createElement(s.gMu,{boxSize:5}),o.createElement(a.EY,{color:"white",fontSize:"14px",fontStyle:"normal",fontWeight:"500",lineHeight:"normal",ml:"4px"},p.pM.E_SIM)),t&&o.createElement(a.az,{width:"48px",height:"36px",borderRadius:"0px 8px 8px 0px",background:"red.600",padding:"0px 12px",display:"flex",alignItems:"center",mb:"8px"},o.createElement(s.q0,{boxSize:5})),r&&o.createElement(u,{src:r,alt:"Ribbon 003"}),i&&o.createElement(u,{src:i,alt:"Ribbon 004"}))};m.propTypes={phone:l().object.isRequired};const x=m}}]);