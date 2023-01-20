import{u as Z,r as w,a as R,o as ee,c,d as h,e as n,g as l,k as L,w as N,F as X,x as Y,m as _,t as f,f as $,h as F,P as J,l as K,j as T,K as V,H as ae,b as G}from"./app.5804264a.js";import{u as te}from"./announcementServices.0f751544.js";import{g as le,$ as H,S as ne,a as se,A as oe}from"./swiper.min.6f7eea25.js";import{u as ie}from"./announcementCommentServices.95be6d7e.js";import{r as re}from"./CalendarIcon.950c2778.js";import{r as de}from"./UserIcon.e62a5892.js";import{r as W}from"./UserCircleIcon.756d6ee2.js";import{r as ce}from"./PencilSquareIcon.09eb8707.js";import{r as ue,a as me}from"./MapPinIcon.3a1fe7ae.js";import{r as ge}from"./EnvelopeIcon.43708db9.js";import{r as fe}from"./PhoneIcon.b476bf91.js";import{r as pe}from"./GlobeEuropeAfricaIcon.9be7e56e.js";import{r as he}from"./BriefcaseIcon.00672f4b.js";function Q(e,D,v,x){const C=le();return e.params.createElements&&Object.keys(x).forEach(y=>{if(!v[y]&&v.auto===!0){let b=e.$el.children(`.${x[y]}`)[0];b||(b=C.createElement("div"),b.className=x[y],e.$el.append(b)),v[y]=b,D[y]=b}}),v}function ve({swiper:e,extendParams:D,on:v,emit:x}){D({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null};function C(i){let o;return i&&(o=H(i),e.params.uniqueNavElements&&typeof i=="string"&&o.length>1&&e.$el.find(i).length===1&&(o=e.$el.find(i))),o}function y(i,o){const a=e.params.navigation;i&&i.length>0&&(i[o?"addClass":"removeClass"](a.disabledClass),i[0]&&i[0].tagName==="BUTTON"&&(i[0].disabled=o),e.params.watchOverflow&&e.enabled&&i[e.isLocked?"addClass":"removeClass"](a.lockClass))}function b(){if(e.params.loop)return;const{$nextEl:i,$prevEl:o}=e.navigation;y(o,e.isBeginning&&!e.params.rewind),y(i,e.isEnd&&!e.params.rewind)}function O(i){i.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),x("navigationPrev"))}function E(i){i.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),x("navigationNext"))}function s(){const i=e.params.navigation;if(e.params.navigation=Q(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(i.nextEl||i.prevEl))return;const o=C(i.nextEl),a=C(i.prevEl);o&&o.length>0&&o.on("click",E),a&&a.length>0&&a.on("click",O),Object.assign(e.navigation,{$nextEl:o,nextEl:o&&o[0],$prevEl:a,prevEl:a&&a[0]}),e.enabled||(o&&o.addClass(i.lockClass),a&&a.addClass(i.lockClass))}function B(){const{$nextEl:i,$prevEl:o}=e.navigation;i&&i.length&&(i.off("click",E),i.removeClass(e.params.navigation.disabledClass)),o&&o.length&&(o.off("click",O),o.removeClass(e.params.navigation.disabledClass))}v("init",()=>{e.params.navigation.enabled===!1?S():(s(),b())}),v("toEdge fromEdge lock unlock",()=>{b()}),v("destroy",()=>{B()}),v("enable disable",()=>{const{$nextEl:i,$prevEl:o}=e.navigation;i&&i[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass),o&&o[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass)}),v("click",(i,o)=>{const{$nextEl:a,$prevEl:t}=e.navigation,u=o.target;if(e.params.navigation.hideOnClick&&!H(u).is(t)&&!H(u).is(a)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===u||e.pagination.el.contains(u)))return;let d;a?d=a.hasClass(e.params.navigation.hiddenClass):t&&(d=t.hasClass(e.params.navigation.hiddenClass)),x(d===!0?"navigationShow":"navigationHide"),a&&a.toggleClass(e.params.navigation.hiddenClass),t&&t.toggleClass(e.params.navigation.hiddenClass)}});const j=()=>{e.$el.removeClass(e.params.navigation.navigationDisabledClass),s(),b()},S=()=>{e.$el.addClass(e.params.navigation.navigationDisabledClass),B()};Object.assign(e.navigation,{enable:j,disable:S,update:b,init:s,destroy:B})}function q(e=""){return`.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function be({swiper:e,extendParams:D,on:v,emit:x}){const C="swiper-pagination";D({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:a=>a,formatFractionTotal:a=>a,bulletClass:`${C}-bullet`,bulletActiveClass:`${C}-bullet-active`,modifierClass:`${C}-`,currentClass:`${C}-current`,totalClass:`${C}-total`,hiddenClass:`${C}-hidden`,progressbarFillClass:`${C}-progressbar-fill`,progressbarOppositeClass:`${C}-progressbar-opposite`,clickableClass:`${C}-clickable`,lockClass:`${C}-lock`,horizontalClass:`${C}-horizontal`,verticalClass:`${C}-vertical`,paginationDisabledClass:`${C}-disabled`}}),e.pagination={el:null,$el:null,bullets:[]};let y,b=0;function O(){return!e.params.pagination.el||!e.pagination.el||!e.pagination.$el||e.pagination.$el.length===0}function E(a,t){const{bulletActiveClass:u}=e.params.pagination;a[t]().addClass(`${u}-${t}`)[t]().addClass(`${u}-${t}-${t}`)}function s(){const a=e.rtl,t=e.params.pagination;if(O())return;const u=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,d=e.pagination.$el;let r;const p=e.params.loop?Math.ceil((u-e.loopedSlides*2)/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(r=Math.ceil((e.activeIndex-e.loopedSlides)/e.params.slidesPerGroup),r>u-1-e.loopedSlides*2&&(r-=u-e.loopedSlides*2),r>p-1&&(r-=p),r<0&&e.params.paginationType!=="bullets"&&(r=p+r)):typeof e.snapIndex<"u"?r=e.snapIndex:r=e.activeIndex||0,t.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const m=e.pagination.bullets;let k,M,g;if(t.dynamicBullets&&(y=m.eq(0)[e.isHorizontal()?"outerWidth":"outerHeight"](!0),d.css(e.isHorizontal()?"width":"height",`${y*(t.dynamicMainBullets+4)}px`),t.dynamicMainBullets>1&&e.previousIndex!==void 0&&(b+=r-(e.previousIndex-e.loopedSlides||0),b>t.dynamicMainBullets-1?b=t.dynamicMainBullets-1:b<0&&(b=0)),k=Math.max(r-b,0),M=k+(Math.min(m.length,t.dynamicMainBullets)-1),g=(M+k)/2),m.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map(z=>`${t.bulletActiveClass}${z}`).join(" ")),d.length>1)m.each(z=>{const I=H(z),A=I.index();A===r&&I.addClass(t.bulletActiveClass),t.dynamicBullets&&(A>=k&&A<=M&&I.addClass(`${t.bulletActiveClass}-main`),A===k&&E(I,"prev"),A===M&&E(I,"next"))});else{const z=m.eq(r),I=z.index();if(z.addClass(t.bulletActiveClass),t.dynamicBullets){const A=m.eq(k),U=m.eq(M);for(let P=k;P<=M;P+=1)m.eq(P).addClass(`${t.bulletActiveClass}-main`);if(e.params.loop)if(I>=m.length){for(let P=t.dynamicMainBullets;P>=0;P-=1)m.eq(m.length-P).addClass(`${t.bulletActiveClass}-main`);m.eq(m.length-t.dynamicMainBullets-1).addClass(`${t.bulletActiveClass}-prev`)}else E(A,"prev"),E(U,"next");else E(A,"prev"),E(U,"next")}}if(t.dynamicBullets){const z=Math.min(m.length,t.dynamicMainBullets+4),I=(y*z-y)/2-g*y,A=a?"right":"left";m.css(e.isHorizontal()?A:"top",`${I}px`)}}if(t.type==="fraction"&&(d.find(q(t.currentClass)).text(t.formatFractionCurrent(r+1)),d.find(q(t.totalClass)).text(t.formatFractionTotal(p))),t.type==="progressbar"){let m;t.progressbarOpposite?m=e.isHorizontal()?"vertical":"horizontal":m=e.isHorizontal()?"horizontal":"vertical";const k=(r+1)/p;let M=1,g=1;m==="horizontal"?M=k:g=k,d.find(q(t.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${M}) scaleY(${g})`).transition(e.params.speed)}t.type==="custom"&&t.renderCustom?(d.html(t.renderCustom(e,r+1,p)),x("paginationRender",d[0])):x("paginationUpdate",d[0]),e.params.watchOverflow&&e.enabled&&d[e.isLocked?"addClass":"removeClass"](t.lockClass)}function B(){const a=e.params.pagination;if(O())return;const t=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,u=e.pagination.$el;let d="";if(a.type==="bullets"){let r=e.params.loop?Math.ceil((t-e.loopedSlides*2)/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&!e.params.loop&&r>t&&(r=t);for(let p=0;p<r;p+=1)a.renderBullet?d+=a.renderBullet.call(e,p,a.bulletClass):d+=`<${a.bulletElement} class="${a.bulletClass}"></${a.bulletElement}>`;u.html(d),e.pagination.bullets=u.find(q(a.bulletClass))}a.type==="fraction"&&(a.renderFraction?d=a.renderFraction.call(e,a.currentClass,a.totalClass):d=`<span class="${a.currentClass}"></span> / <span class="${a.totalClass}"></span>`,u.html(d)),a.type==="progressbar"&&(a.renderProgressbar?d=a.renderProgressbar.call(e,a.progressbarFillClass):d=`<span class="${a.progressbarFillClass}"></span>`,u.html(d)),a.type!=="custom"&&x("paginationRender",e.pagination.$el[0])}function j(){e.params.pagination=Q(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const a=e.params.pagination;if(!a.el)return;let t=H(a.el);t.length!==0&&(e.params.uniqueNavElements&&typeof a.el=="string"&&t.length>1&&(t=e.$el.find(a.el),t.length>1&&(t=t.filter(u=>H(u).parents(".swiper")[0]===e.el))),a.type==="bullets"&&a.clickable&&t.addClass(a.clickableClass),t.addClass(a.modifierClass+a.type),t.addClass(e.isHorizontal()?a.horizontalClass:a.verticalClass),a.type==="bullets"&&a.dynamicBullets&&(t.addClass(`${a.modifierClass}${a.type}-dynamic`),b=0,a.dynamicMainBullets<1&&(a.dynamicMainBullets=1)),a.type==="progressbar"&&a.progressbarOpposite&&t.addClass(a.progressbarOppositeClass),a.clickable&&t.on("click",q(a.bulletClass),function(d){d.preventDefault();let r=H(this).index()*e.params.slidesPerGroup;e.params.loop&&(r+=e.loopedSlides),e.slideTo(r)}),Object.assign(e.pagination,{$el:t,el:t[0]}),e.enabled||t.addClass(a.lockClass))}function S(){const a=e.params.pagination;if(O())return;const t=e.pagination.$el;t.removeClass(a.hiddenClass),t.removeClass(a.modifierClass+a.type),t.removeClass(e.isHorizontal()?a.horizontalClass:a.verticalClass),e.pagination.bullets&&e.pagination.bullets.removeClass&&e.pagination.bullets.removeClass(a.bulletActiveClass),a.clickable&&t.off("click",q(a.bulletClass))}v("init",()=>{e.params.pagination.enabled===!1?o():(j(),B(),s())}),v("activeIndexChange",()=>{(e.params.loop||typeof e.snapIndex>"u")&&s()}),v("snapIndexChange",()=>{e.params.loop||s()}),v("slidesLengthChange",()=>{e.params.loop&&(B(),s())}),v("snapGridLengthChange",()=>{e.params.loop||(B(),s())}),v("destroy",()=>{S()}),v("enable disable",()=>{const{$el:a}=e.pagination;a&&a[e.enabled?"removeClass":"addClass"](e.params.pagination.lockClass)}),v("lock unlock",()=>{s()}),v("click",(a,t)=>{const u=t.target,{$el:d}=e.pagination;if(e.params.pagination.el&&e.params.pagination.hideOnClick&&d&&d.length>0&&!H(u).hasClass(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&u===e.navigation.nextEl||e.navigation.prevEl&&u===e.navigation.prevEl))return;const r=d.hasClass(e.params.pagination.hiddenClass);x(r===!0?"paginationShow":"paginationHide"),d.toggleClass(e.params.pagination.hiddenClass)}});const i=()=>{e.$el.removeClass(e.params.pagination.paginationDisabledClass),e.pagination.$el&&e.pagination.$el.removeClass(e.params.pagination.paginationDisabledClass),j(),B(),s()},o=()=>{e.$el.addClass(e.params.pagination.paginationDisabledClass),e.pagination.$el&&e.pagination.$el.addClass(e.params.pagination.paginationDisabledClass),S()};Object.assign(e.pagination,{enable:i,disable:o,render:B,update:s,init:j,destroy:S})}const Ce={class:"mx-auto flex min-h-screen w-full flex-col bg-white p-4 text-lg md:space-y-2 lg:flex-row lg:space-x-2 xl:w-[90%]"},xe={class:"lg:w-[70%]"},ye={key:0,class:"py-6 px-4"},_e={class:"overflow-hidden rounded-lg bg-white shadow-md"},$e=["src"],ke=["src"],Ee={class:"p-6"},Be={href:"#",class:"rounded bg-primary-blue py-1 px-2 text-xs capitalize text-white"},Se={class:"mt-2 block transform text-3xl font-semibold text-gray-800 transition-colors duration-200 hover:text-gray-600"},Me={class:"mt-2 flex space-x-2 text-xs text-gray-500"},De={class:"flex space-x-1"},ze={href:"#",class:"hover:text-primary-blue"},Ae={class:"flex space-x-1"},Oe={class:"my-4 mt-2 py-4 text-gray-600"},Ie={class:"mt-4"},Ne={class:"flex items-center justify-between"},He=["src"],je={class:"mx-2 font-semibold text-gray-700"},Pe={class:"flex items-center"},Le={key:0,class:"ml-3"},qe={class:"flex items-center space-x-3 px-2 py-4"},Fe=["href"],Te=n("svg",{fill:"#25D366",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",class:"h-6 w-6"},[n("path",{d:"M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z"})],-1),Ve=[Te],Ge={key:2,class:"mt-4 px-8 py-4"},Ue={class:"h-10 w-10 overflow-hidden rounded-full shadow md:h-20 md:w-20"},Re=["src"],Xe={class:"mt-2 text-center text-xs font-bold hover:underline lg:text-sm"},Ye={class:"text-center text-xs font-light lg:text-sm"},Je={class:"ml-2 w-full p-2 text-xs lg:text-lg"},Ke={class:"mt-4 px-8 py-4"},We=n("label",{class:"text-gray-700",for:"pt"},[F("Laisser un Commentaire "),n("span",{class:"text-red-500"},"*")],-1),Qe={class:"mt-6"},Ze={key:0,type:"submit",class:"text-md w-full rounded bg-primary-blue px-6 py-4 leading-5 text-white focus:outline-none"},we={key:1,type:"submit",disabled:"",class:"text-md flex w-full items-center justify-center rounded bg-blue-300 px-6 py-4 leading-5 text-white focus:outline-none"},ea={key:1,class:"p-28"},aa={class:"bg-white py-5 lg:w-[30%]"},ta={class:"space-y-3 rounded-md py-5 px-10 shadow"},la={class:"text-2xl font-bold text-primary-blue"},na={key:0,class:"flex items-center space-x-2 text-gray-500"},sa={key:1,class:"flex items-center space-x-2 text-gray-500"},oa={key:2,class:"flex items-center space-x-2 text-gray-500"},ia={key:3,class:"flex items-center space-x-2 text-gray-500"},ra={key:4,class:"flex items-center space-x-2 text-gray-500"},da={key:5,class:"flex items-center space-x-2 text-gray-500"},ca={class:"mt-4 rounded-md py-5 shadow"},ua={key:1,class:"bg-green-50 py-4 px-2 text-green-700"},ma={class:"px-8"},ga={class:"text-xl font-bold text-primary-blue",for:"pt"},fa=n("span",{class:"text-red-500"},"*",-1),pa={class:"mt-6"},ha=n("input",{type:"hidden"},null,-1),va={key:0,type:"submit",class:"text-md w-full rounded bg-primary-blue px-6 py-4 leading-5 text-white focus:outline-none"},ba={key:1,type:"submit",disabled:"",class:"text-md flex w-full items-center justify-center rounded bg-blue-300 px-6 py-4 leading-5 text-white focus:outline-none"},Ca=n("svg",{class:"h-5 w-5 animate-spin text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[n("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),n("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),Ia={__name:"SingleAnnouncement",props:{id:{required:!0,type:String},slug:{required:!1,type:String}},setup(e){const D=e,v=[oe,ve,be],{locale:x}=Z();ae();const C=window.location.href,{createAnnouncementComment:y,errorsCmtAds:b,announcementComments:O,getAnnouncementCommentsPost:E}=ie(),{announcement:s,getAnnouncement2:B,loading:j,errors:S}=te(),i=localStorage.user?JSON.parse(localStorage.user):"",o=w(0),a=R({user_id:i.id,announcement_id:"",content:""});ee(async()=>{await B(D.id),await E(D.id),a.announcement_id=s.value.id});const t=R({user:i.id,ads:D.id,content:""}),u=async()=>{o.value=1,await y({...a}),o.value=0,a.content="",await E(D.id)},d=async()=>{S.value="";try{o.value=1,await axios.post("/api/announcement-send-contact",t,{headers:{Authorization:`Bearer ${localStorage.token}`}}),o.value=2}catch(r){if(r.response.status==422){o.value=0;for(const p in r.response.data.errors)S.value+=r.response.data.errors[p][0]+`
`}}};return(r,p)=>{const m=G("router-link"),k=G("Spin"),M=G("NoContent");return c(),h("div",Ce,[n("div",xe,[l(s).length!=0?(c(),h("div",ye,[n("div",_e,[l(s).image.length==1&&l(s).image[0]?(c(),h("img",{key:0,class:"h-96 w-full object-cover",src:l(s).image[0],alt:""},null,8,$e)):l(s).image.length>1?(c(),L(l(se),{key:1,class:"h-96 w-full",centeredSlides:!0,autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{clickable:!0},navigation:!0,modules:v},{default:N(()=>[(c(!0),h(X,null,Y(l(s).image,(g,z)=>(c(),L(l(ne),{class:"relative h-full w-full",key:z},{default:N(()=>[n("img",{class:"h-full w-full object-cover",src:g,alt:""},null,8,ke)]),_:2},1024))),128))]),_:1})):_("",!0),n("div",Ee,[n("div",null,[n("a",Be,f(l(s).category.name),1),n("h1",Se,f(l(s).title),1),n("div",Me,[n("div",De,[$(l(re),{class:"h-4 w-4"}),n("a",ze,f(new Date(l(s).date).toLocaleDateString(l(x),{day:"numeric",year:"numeric",month:"long"})),1)]),n("div",Ae,[$(l(de),{class:"h-4 w-4"}),$(m,{to:{name:"compte",params:{slug:l(s).user.slug,id:l(s).user.id}},class:"hover:text-primary-blue"},{default:N(()=>[F(f(l(s).user.firstname),1)]),_:1},8,["to"])])]),n("p",Oe,f(l(s).description),1)]),n("div",Ie,[n("div",Ne,[$(m,{to:{name:"compte",params:{slug:l(s).user.slug,id:l(s).user.id}},class:"flex items-center"},{default:N(()=>[l(s).user.avatar?(c(),h("img",{key:0,class:"h-16 w-16 rounded-full object-cover shadow",src:l(s).user.avatar},null,8,He)):(c(),L(l(W),{key:1,class:"h-10 w-10 text-gray-700"})),n("span",je,f(l(s).user.firstname),1)]),_:1},8,["to"]),n("div",Pe,[l(i).id==l(s).user.id?(c(),h("div",Le,[$(m,{to:{name:"edit.ads",params:{id:l(s).id}}},{default:N(()=>[$(l(ce),{class:"h-5 w-5 cursor-pointer text-gray-400 hover:text-primary-blue"})]),_:1},8,["to"])])):_("",!0)])])]),n("div",qe,[n("a",{href:"whatsapp://send?text=Hello, I have just published an publication on the AfricaUnity website. please go see, thank you "+l(C)},Ve,8,Fe)])]),l(O).length!=0?(c(),h("div",Ge,[(c(!0),h(X,null,Y(l(O),g=>(c(),h("div",{class:"flex border-b py-4",key:g.id},[n("div",null,[$(m,{to:{name:"compte",params:{slug:g.user.slug,id:g.user.id}}},{default:N(()=>[n("div",Ue,[g.user.avatar?(c(),h("img",{key:0,src:g.user.avatar,class:"h-full w-full bg-cover object-cover",alt:""},null,8,Re)):(c(),L(l(W),{key:1,class:"h-full w-full text-gray-500"}))]),n("h1",Xe,f(g.user.firstname),1)]),_:2},1032,["to"]),n("h3",Ye,f(new Date(g.date).toLocaleDateString(l(x),{day:"numeric",year:"numeric",month:"long"})),1)]),n("div",Je,f(g.content),1)]))),128))])):_("",!0),l(b)!=""?(c(),L(J,{key:3},{default:N(()=>[F(f(l(b)),1)]),_:1})):_("",!0),n("form",{onSubmit:p[2]||(p[2]=K(g=>u(),["prevent"]))},[n("div",Ke,[We,T(n("textarea",{"onUpdate:modelValue":p[0]||(p[0]=g=>a.content=g),required:"",type:"text",id:"pt",class:"mt-2 block h-60 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40"},`\r
                            `,512),[[V,a.content]]),n("div",Qe,[T(n("input",{type:"hidden","onUpdate:modelValue":p[1]||(p[1]=g=>a.announcement_id=g)},null,512),[[V,a.announcement_id]]),o.value==0?(c(),h("button",Ze,f(r.$t("save")),1)):_("",!0),o.value==1?(c(),h("button",we,[$(k,{size:"small"})])):_("",!0)])])],32)])])):l(j)==1?(c(),h("div",ea,[$(k)])):(c(),L(M,{key:2}))]),n("div",aa,[n("div",ta,[n("h1",la,f(r.$t("details")),1),l(s).university?(c(),h("div",na,[$(l(ue),{class:"h-8 w-8"}),n("span",null,f(l(s).university.name),1)])):_("",!0),l(s).email?(c(),h("div",sa,[$(l(ge),{class:"h-8 w-8"}),n("span",null,f(l(s).email),1)])):_("",!0),l(s).phone?(c(),h("div",oa,[$(l(fe),{class:"h-8 w-8"}),n("span",null,f(l(s).phone),1)])):_("",!0),l(s).website&&l(s).website!="null"?(c(),h("div",ia,[$(l(pe),{class:"h-8 w-8"}),n("span",null,f(l(s).website),1)])):_("",!0),l(s).adress&&l(s).adress!="null"?(c(),h("div",ra,[$(l(he),{class:"h-8 w-8"}),n("span",null,f(l(s).adress),1)])):_("",!0),l(s).currency&&l(s).price!="null"?(c(),h("div",da,[$(l(me),{class:"h-8 w-8"}),n("span",null,f(l(s).price)+" "+f(l(s).currency.symbol),1)])):_("",!0)]),n("div",ca,[l(S)!=""?(c(),L(J,{key:0},{default:N(()=>[F(f(l(S)),1)]),_:1})):_("",!0),o.value==2?(c(),h("div",ua,[n("p",null,f(r.$t("msg-contact-sucess")),1)])):(c(),h("form",{key:2,onSubmit:p[4]||(p[4]=K(g=>d(),["prevent"]))},[n("div",ma,[n("label",ga,[F(f(r.$t("contact-ads"))+" ",1),fa]),T(n("textarea",{"onUpdate:modelValue":p[3]||(p[3]=g=>t.content=g),required:"",type:"text",id:"pt",class:"mt-2 block h-60 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40"},`\r
                        `,512),[[V,t.content]]),n("div",pa,[ha,o.value==0?(c(),h("button",va,f(r.$t("send")),1)):_("",!0),o.value==1?(c(),h("button",ba,[F(f(r.$t("send"))+"... ",1),Ca])):_("",!0)])])],32))])])])}}};export{Ia as default};
