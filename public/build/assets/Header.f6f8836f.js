import{_ as E,u as F,r as S,o as N,a as H,b as L,c as a,d as n,e as s,f as l,w as m,g as p,h as c,t as o,i as g,j as C,v as _,k as j,l as i,m as h,n as O,p as T,q as Y,s as q,F as J,x as R}from"./app.69923205.js";import{r as V,a as U}from"./HomeIcon.0e026e6c.js";import{r as D}from"./UserCircleIcon.e4cff19b.js";import{S as G,a as K,A as P}from"./swiper.min.01be7d00.js";/* empty css                        */const I=$=>(Y("data-v-eddd285f"),$=$(),q(),$),Q={class:"text-md relative z-10 flex w-full justify-between border-t-4 border-primary-blue bg-menu px-4 pb-2 font-semibold"},W={class:"hidden lg:flex"},X={class:"absolute left-0 z-40 mt-2 flex w-60 flex-col bg-menu py-2"},Z={class:""},ee=c(),te={class:"absolute left-0 z-40 mt-2 flex w-60 flex-col bg-menu py-2"},se=["href"],oe={key:0},re=["src"],ae={class:"absolute left-0 z-40 mt-2 flex w-48 flex-col bg-menu py-2"},ne={key:0,class:"ml-3 h-5 w-5 animate-spin text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},le=I(()=>s("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),ie=I(()=>s("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),pe=[le,ie],ue={key:0},ce={key:1},ve={key:2},de={key:3},me={class:"absolute left-0 z-40 mt-2 flex w-48 flex-col bg-menu py-2"},ye={class:"z-50 flex lg:hidden"},he={class:"absolute mx-auto mt-12 flex w-[90%] flex-col justify-center border border-menu bg-white shadow-md"},fe={class:"relative py-2 px-3 uppercase text-menu"},xe={class:"flex cursor-pointer items-center"},be={class:"mt-2 flex flex-col py-2"},ge={class:"relative py-2 px-3 uppercase text-menu"},we={class:"mt-2 flex flex-col py-2"},$e=["href"],ke={class:"flex items-center space-x-2 bg-primary-blue px-3 py-2 text-sm uppercase text-white transition-colors duration-200"},Ce={key:0},_e=["src"],Se={class:"flex flex-col py-2"},je={key:0,class:"ml-3 h-5 w-5 animate-spin",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},Me=I(()=>s("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),ze=I(()=>s("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),Ie=[Me,ze],Ne={class:"relative py-2 px-3 uppercase text-menu"},Ae={class:"flex cursor-pointer items-center"},Be={key:0},Te={key:1},Ve={key:2},De={key:3},Le={class:"mt-2 flex flex-col py-2"},Ee={__name:"Navigation",setup($){const{locale:w}=F(),v=S(""),k=S("");S("");const f=S(0);let M=new Date,z=M.getFullYear(),b=M.getDate(),A=M.getMonth();N(async()=>{localStorage.token&&(v.value=JSON.parse(localStorage.user),k.value=localStorage.token)});const u=H({lang:!1,profile:!1,event:!1,search:!1,menu:!1,logout:!1}),B=async()=>{try{f.value=1,await O.post("/api/logout",{},{headers:{Authorization:`Bearer ${localStorage.token}`}}),window.localStorage.removeItem("token"),window.localStorage.removeItem("user"),f.value=2,location.href="/"}catch(t){f.value=0,t.response.status==401&&(location.href="/",window.localStorage.removeItem("token"),window.localStorage.removeItem("user"))}},y=(t,e="",d="")=>{e!=""&&d!=""?T.push({name:t,params:{slug:e.toLocaleLowerCase,id:d}}):T.push({name:t}),u.menu=!1},x=async t=>{w.value=t,localStorage.lang=w.value,location.reload()};return N(async()=>{localStorage.lang?w.value=localStorage.lang:localStorage.lang=w.value}),(t,e)=>{const d=L("router-link");return a(),n("div",Q,[s("nav",W,[l(d,{to:{name:"home"},class:"flex items-start justify-center px-3 py-2 text-white transition-colors duration-200 hover:bg-primary-blue"},{default:m(()=>[l(p(V),{class:"h-6 w-6"})]),_:1}),l(d,{to:{name:"articles"},class:"px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},{default:m(()=>[c(o(t.$t("articles")),1)]),_:1}),s("div",{onMouseleave:e[1]||(e[1]=r=>u.profile=!1),class:"relative px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},[s("span",{onMouseover:e[0]||(e[0]=r=>u.profile=!0),class:"flex cursor-pointer items-center justify-center"},[c(o(t.$t("profile"))+" ",1),l(p(g),{class:"ml-2 h-5 w-5"})],32),C(s("div",X,[l(d,{to:{name:"particular"},class:"px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},{default:m(()=>[c(o(t.$t("particular")),1)]),_:1}),l(d,{to:{name:"establishment"},class:"px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},{default:m(()=>[c(o(t.$t("establishment")),1)]),_:1}),l(d,{to:{name:"ip"},class:"px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},{default:m(()=>[c(o(t.$t("ip")),1)]),_:1})],512),[[_,u.profile]])],32),l(d,{to:{name:"propau"},class:"px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},{default:m(()=>[c(o(t.$t("propau")),1)]),_:1}),l(d,{to:{name:"universities"},class:"px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},{default:m(()=>[c(o(t.$t("univerities")),1)]),_:1}),s("div",{class:"relative px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue",onMouseleave:e[3]||(e[3]=r=>u.event=!1)},[l(d,{to:{name:"ads"},class:"flex cursor-pointer items-center justify-center",onMouseover:e[2]||(e[2]=r=>u.event=!0)},{default:m(()=>[s("span",Z,o(t.$t("ads-s")),1),ee,l(p(g),{class:"ml-2 h-5 w-5"})]),_:1}),C(s("div",te,[s("a",{href:`/events?date=${p(z)}-${p(A)+1}-${p(b)}&enterType=&continent=&country=&zone=&city=&ministry=&activityArea=&eventType=&eventMode=`,class:"px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"}," Evenements ",8,se)],512),[[_,u.event]])],32),l(d,{to:{name:"jobs"},class:"px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},{default:m(()=>[c(o(t.$t("jobs")),1)]),_:1}),l(d,{to:{name:"contact"},class:"px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},{default:m(()=>[c(o(t.$t("contact")),1)]),_:1}),k.value?(a(),j(d,{key:0,onMouseleave:e[6]||(e[6]=r=>u.logout=!1),to:{name:"compte",params:{slug:v.value.slug,id:v.value.id}},class:"relative mx-2 bg-primary-blue px-3 py-2 uppercase text-white transition-colors duration-200"},{default:m(()=>[s("div",{onMouseover:e[4]||(e[4]=r=>u.logout=!0),class:"flex items-start space-x-2"},[v.value.avatar?(a(),n("span",oe,[s("img",{src:v.value.avatar,alt:"",class:"h-7 w-7 rounded-full border object-cover shadow"},null,8,re)])):(a(),j(p(D),{key:1,class:"h-8 w-8 text-white"})),s("span",null,o(v.value.firstname),1),s("span",null,[l(p(g),{class:"h-5 w-5"})])],32),C(s("div",ae,[s("button",{type:"button",onClick:e[5]||(e[5]=i(r=>B(),["prevent"])),class:"flex items-center px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},[c(o(t.$t("logout"))+" ",1),f.value==1?(a(),n("svg",ne,pe)):h("",!0)])],512),[[_,u.logout]])]),_:1},8,["to"])):(a(),j(d,{key:1,to:{name:"login"},class:"mx-2 flex bg-primary-blue px-3 py-2 uppercase text-white transition-colors duration-200"},{default:m(()=>[c(o(t.$t("login")),1)]),_:1})),s("div",{onMouseleave:e[12]||(e[12]=r=>u.lang=!1),class:"relative px-3 py-2 uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},[s("label",{onMouseover:e[7]||(e[7]=r=>u.lang=!0),class:"flex cursor-pointer items-center justify-center"},[t.$i18n.locale=="fr"?(a(),n("span",ue,o(t.$t("fr")),1)):t.$i18n.locale=="en"?(a(),n("span",ce,o(t.$t("en")),1)):t.$i18n.locale=="es"?(a(),n("span",ve,o(t.$t("es")),1)):(a(),n("span",de,o(t.$t("pt")),1)),l(p(g),{class:"ml-2 h-5 w-5"})],32),C(s("div",me,[t.$i18n.locale!="fr"?(a(),n("a",{key:0,href:"#",onClick:e[8]||(e[8]=i(r=>x("fr"),["prevent"])),class:"px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},o(t.$t("fr")),1)):h("",!0),t.$i18n.locale!="en"?(a(),n("a",{key:1,href:"#",onClick:e[9]||(e[9]=i(r=>x("en"),["prevent"])),class:"px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},o(t.$t("en")),1)):h("",!0),t.$i18n.locale!="es"?(a(),n("a",{key:2,href:"#",onClick:e[10]||(e[10]=i(r=>x("es"),["prevent"])),class:"px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},o(t.$t("es")),1)):h("",!0),t.$i18n.locale!="pt"?(a(),n("a",{key:3,href:"#",onClick:e[11]||(e[11]=i(r=>x("pt"),["prevent"])),class:"px-3 py-2 text-sm uppercase text-white transition-colors duration-200 hover:bg-primary-blue"},o(t.$t("pt")),1)):h("",!0)],512),[[_,u.lang]])],32)]),s("nav",ye,[s("button",{type:"button",onClick:e[13]||(e[13]=i(r=>y("home"),["prevent"])),class:"flex items-center justify-center px-3 py-2 text-white transition-colors duration-200 hover:bg-primary-blue"},[l(p(V),{class:"h-6 w-6"})]),s("button",{type:"button",onClick:e[14]||(e[14]=r=>u.menu=!u.menu),class:"flex items-center justify-center px-3 py-2 text-white transition-colors duration-200 hover:bg-primary-blue"},[l(p(U),{class:"h-6 w-6"})]),C(s("div",he,[s("a",{href:"#",onClick:e[15]||(e[15]=i(r=>y("articles"),["prevent"])),class:"px-3 py-2 uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"},o(t.$t("articles")),1),s("div",fe,[s("span",xe,[c(o(t.$t("profile"))+" ",1),l(p(g),{class:"ml-2 h-5 w-5"})]),s("div",be,[s("a",{href:"#",onClick:e[16]||(e[16]=i(r=>y("particular"),["prevent"])),class:"px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"},o(t.$t("particular")),1),s("a",{href:"#",onClick:e[17]||(e[17]=i(r=>y("establishment"),["prevent"])),class:"px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"},o(t.$t("establishment")),1),s("a",{href:"#",type:"button",onClick:e[18]||(e[18]=i(r=>y("ip"),["prevent"])),class:"px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"},o(t.$t("ip")),1)])]),s("a",{href:"#",onClick:e[19]||(e[19]=i(r=>y("propau"),["prevent"])),class:"px-3 py-2 uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"},o(t.$t("propau")),1),s("a",{href:"#",onClick:e[20]||(e[20]=i(r=>y("universities"),["prevent"])),class:"px-3 py-2 uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"},o(t.$t("univerities")),1),s("div",ge,[s("a",{href:"#",onClick:e[21]||(e[21]=i(r=>y("ads"),["prevent"])),class:"flex cursor-pointer items-center"},[c(o(t.$t("ads"))+" ",1),l(p(g),{class:"ml-2 h-5 w-5"})]),s("div",we,[s("a",{href:`/events?date=${p(z)}-${p(A)+1}-${p(b)}&enterType=&continent=&country=&zone=&city=&ministry=&activityArea=&eventType=&eventMode=`,class:"px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"}," Evenements ",8,$e)])]),s("a",{href:"#",onClick:e[22]||(e[22]=i(r=>y("jobs"),["prevent"])),class:"px-3 py-2 uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"},o(t.$t("jobs")),1),s("a",{href:"#",onClick:e[23]||(e[23]=i(r=>y("contact"),["prevent"])),class:"px-3 py-2 uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"},o(t.$t("contact")),1),k.value?(a(),n("a",{key:0,href:"#",onClick:e[25]||(e[25]=i(r=>y("compte",v.value.firstname,v.value.id),["prevent"]))},[s("div",ke,[v.value.avatar?(a(),n("span",Ce,[s("img",{src:v.value.avatar,class:"h-16 w-16 rounded-full border shadow",alt:""},null,8,_e)])):(a(),j(p(D),{key:1,class:"h-8 w-8 text-white"})),s("span",null,o(v.value.firstname)+" "+o(v.value.lastname),1)]),s("div",Se,[s("a",{href:"#",onClick:e[24]||(e[24]=i(r=>B(),["prevent"])),class:"flex items-center px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"},[c(o(t.$t("logout"))+" ",1),f.value==1?(a(),n("svg",je,Ie)):h("",!0)])])])):(a(),n("a",{key:1,href:"#",onClick:e[26]||(e[26]=i(r=>y("login"),["prevent"])),class:"bg-primary-blue px-3 py-2 uppercase text-white transition-colors duration-200"},o(t.$t("login"))+" / "+o(t.$t("register")),1)),s("div",Ne,[s("label",Ae,[t.$i18n.locale=="fr"?(a(),n("span",Be,o(t.$t("fr")),1)):t.$i18n.locale=="en"?(a(),n("span",Te,o(t.$t("en")),1)):t.$i18n.locale=="es"?(a(),n("span",Ve,o(t.$t("es")),1)):(a(),n("span",De,o(t.$t("pt")),1)),l(p(g),{class:"ml-2 h-5 w-5"})]),s("div",Le,[t.$i18n.locale!="fr"?(a(),n("a",{key:0,href:"#",onClick:e[27]||(e[27]=i(r=>x("fr"),["prevent"])),class:"px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"},o(t.$t("fr")),1)):h("",!0),t.$i18n.locale!="en"?(a(),n("a",{key:1,href:"#",onClick:e[28]||(e[28]=i(r=>x("en"),["prevent"])),class:"px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"},o(t.$t("en")),1)):h("",!0),t.$i18n.locale!="es"?(a(),n("a",{key:2,href:"#",onClick:e[29]||(e[29]=i(r=>x("es"),["prevent"])),class:"px-3 py-2 text-sm uppercase text-menu transition-colors duration-200 hover:bg-primary-blue hover:text-white"},o(t.$t("es")),1)):h("",!0),t.$i18n.locale!="pt"?(a(),n("a",{key:3,href:"#",onClick:e[30]||(e[30]=i(r=>x("pt"),["prevent"])),class:"duration-200hover:text-white px-3 py-2 text-sm uppercase text-menu transition-colors hover:bg-primary-blue"},o(t.$t("pt")),1)):h("",!0)])])],512),[[_,u.menu]])]),h("",!0)])}}},Fe=E(Ee,[["__scopeId","data-v-eddd285f"]]),He={class:"mx-auto w-full bg-white xl:w-[90%]"},Oe={class:"flex flex-col items-center border-b border-gray-100 px-5 py-2 md:flex-row md:justify-start"},Ye={class:"mx-4 font-semibold"},qe=s("div",{class:"flex flex-col items-center justify-center space-y-2 p-4 md:justify-between lg:flex-row lg:space-y-0"},[s("img",{src:"/img/logo_au.png",class:"h-16 w-80",alt:""}),s("img",{src:"/img/barniere-africa.png",class:"h-20",alt:""})],-1),Pe={__name:"Header",setup($){const w=new Date().toUTCString().substr(0,16),v=S([]);N(async()=>{let f=await axios.get("/api/posts-caroussel/"+localStorage.lang);v.value=f.data.data});const k=[P];return(f,M)=>{const z=L("router-link");return a(),n("div",He,[s("div",Oe,[s("h1",null,o(p(w)),1),s("h1",null,[s("span",Ye,o(f.$t("lastest"))+" :",1),l(p(K),{class:"inline-flex h-5","space-between":0,"slides-per-view":1,direction:"vertical",autoplay:{delay:3500,disableOnInteraction:!1},modules:k},{default:m(()=>[(a(!0),n(J,null,R(v.value,b=>(a(),j(p(G),{class:"relative",key:b.id},{default:m(()=>[l(z,{to:{name:"show.post",params:{id:b.id,slug:b.slug}},class:"text-primary-blue"},{default:m(()=>[c(o(b.title.substring(0,29)+"..."),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})])]),qe,l(Fe)])}}};export{Pe as default};
