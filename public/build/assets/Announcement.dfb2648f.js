import{c as l,d as r,e as o,F as u,x as c,f as d,g as a,L as ee,r as p,o as te,M as se,a as oe,t as i,j as g,K as le,J as b,Q as re,k as F,w as $,m,h as ie,b as K}from"./app.b709c79e.js";import{u as ne}from"./announcementServices.aa9e2da9.js";import{u as ae}from"./universityServices.f4e322d4.js";import{u as de}from"./categoryAnnouncementServices.789b2158.js";import{u as ue}from"./continentServices.751275a5.js";import{u as ce}from"./countryServices.9535c4f0.js";import{u as ye}from"./cityServices.7adef4e2.js";import{u as pe}from"./zoneServices.93884613.js";import{r as ge}from"./PhotoIcon.bb9b35cc.js";import{r as me}from"./PlusCircleIcon.139de5fe.js";import{r as fe}from"./MegaphoneIcon.57ed0c41.js";import{r as _e}from"./UserIcon.8e0fd818.js";const ve={class:"animate-pulse"},he={class:"grid grid-cols-1 gap-4 py-8 px-10 md:grid-cols-3"},be={class:"mx-auto h-44 w-32 overflow-hidden"},xe=ee('<div class="flex flex-col items-start justify-center p-6"><div class="mb-4 h-5 w-32 rounded-md bg-gray-200"></div><div class="mb-4 h-2.5 w-5/6 rounded-full bg-gray-200"></div><div class="flex w-full items-center justify-between"><div class="mb-4 h-2.5 w-1/5 rounded-full bg-gray-200"></div><div class="mb-4 h-2.5 w-3/5 rounded-full bg-gray-200"></div></div></div>',1),B={__name:"Ads",setup(q){const y=[1,2,3,4];return(U,x)=>(l(),r("div",ve,[o("div",he,[(l(),r(u,null,c(y,f=>o("div",{key:f,class:"rounded bg-gray-100 shadow"},[o("div",be,[d(a(ge),{class:"h-full w-full text-gray-200"})]),xe])),64))])]))}},we={class:"mx-auto min-h-screen w-full bg-white xl:w-[90%]"},ke={class:"py-2 text-center text-5xl font-bold capitalize text-primary-blue"},$e={class:"py-8 lg:px-16"},Ce={class:"mt-4 grid grid-cols-1 gap-2 bg-gray-50 px-10 pb-8 pt-4 shadow lg:grid-cols-3"},ze={class:"text-xs lg:text-sm"},Ae={class:"dark:text-gray-200 text-gray-700"},Ve={class:"text-xs lg:text-sm"},Ue={class:"text-gray-700",for:"es"},Ne=o("option",{value:""},"--------------",-1),Se=["value"],je={class:"text-xs lg:text-sm"},Fe={class:"text-gray-700",for:"es"},Ke=o("option",{value:""},"--------------",-1),Be=["value"],qe={key:0},Le={key:1},Me={key:2},Re={key:3},Ee={class:"text-xs lg:text-sm"},Ze={class:"text-gray-700",for:"es"},De=o("option",{value:""},"--------------",-1),Je=["value"],Te={key:0},Ge={key:1},He={key:2},Oe={key:3},Qe={key:1,value:"null"},Ie={class:"text-xs lg:text-sm"},Pe={class:"text-gray-700",for:"es"},We=o("option",{value:""},"--------------",-1),Xe=["value"],Ye={key:0},et={key:1},tt={key:2},st={key:3},ot={key:1,value:"null"},lt={class:"text-xs lg:text-sm"},rt={class:"text-gray-700",for:"es"},it=o("option",{value:""},"--------------",-1),nt=["value"],at={key:0},dt={key:1},ut={key:2},ct={key:3},yt={key:1,value:"null"},pt={class:"divSelect2 text-xs lg:text-sm"},gt={class:"text-gray-700",for:"es"},mt={class:"flex items-end text-xs lg:text-sm"},ft=o("div",{class:"bg-primary-blue p-2 shadow"},null,-1),_t={class:"flex justify-end py-4"},vt={class:"text-base leading-4"},ht={class:"py-8"},bt={key:0},xt={class:"relative"},wt={key:0,class:"absolute top-5 right-5 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 p-2 text-center text-sm text-white"},kt=["src","alt"],$t={key:2,class:"h-48 w-full overflow-hidden rounded-t-lg bg-gray-50 py-10"},Ct={class:"space-y-2 px-4 py-2 grow"},zt={href:"#",class:"mt-2 rounded bg-primary-blue py-1 px-2 text-xs capitalize text-white"},At={class:"text-2xl font-bold capitalize my-4 text-gray-800 hover:underline"},Vt={class:"flex h-10 items-center justify-between bg-gray-900 px-4 py-2"},Ut={key:0,class:"text-lg font-bold text-white"},Nt={class:"flex items-center space-x-2 text-xs text-white"},St={class:"flex space-x-1"},jt={key:2},Gt={__name:"Announcement",setup(q){const{universities:y,getAllUniversities:U}=ae(),{announcements:x,getAnnouncements:f,loading:_,page:C,isAll:N,filterAnnouncements:L}=ne(),{continents:M,getContinents:R}=ue(),{countries:E,getCountries:Z}=ce(),{categoryAnnouncements:D,getCategoryAnnouncements:J}=de(),{zones:T,getZones:G}=pe(),{cities:H,getCities:O}=ye(),S=localStorage.user?JSON.parse(localStorage.user):"",z=p([]),w=p([]),v=p([]),h=p([]),A=p(null),V=p(!0);te(async()=>{window.addEventListener("scroll",j),await f(),await R(),await G(),await Z(),await J(),await O(),U()}),se(async()=>{C.value=1,window.removeEventListener("scroll",j)});const j=async s=>{A.value&&A.value.getBoundingClientRect().bottom<window.innerHeight&&V.value&&!N.value&&t.searchKey==""&&t.category==""&&t.country==""&&t.continent==""&&t.university==""&&t.city==""&&t.zone==""&&(V.value=!1,C.value++,await f(),V.value=!0)},Q=async()=>{t.searchKey!=""||t.category!=""||t.country!=""||t.continent!=""||t.university!=""||t.city!=""||t.zone!=""?(_.value=1,await L({...t}),_.value=2):(C.value=1,N.value=!1,await f())},t=oe({searchKey:"",category:"",country:"",continent:"",university:"",city:"",zone:""}),I=()=>{h.value=y.value.filter(s=>s.continent.id==t.continent&&s.zone.id==t.zone&&s.country.id==t.country&&s.city.id==t.city)},P=()=>{v.value=H.value.filter(s=>s.country_id==t.country),h.value=y.value.filter(s=>s.continent.id==t.continent&&s.zone.id==t.zone&&s.country.id==t.country),t.city=""},W=()=>{w.value=E.value.filter(s=>s.zone_id==t.zone),h.value=y.value.filter(s=>s.continent.id==t.continent&&s.zone.id==t.zone),t.country="",t.city="",v.value=[]},X=()=>{z.value=T.value.filter(s=>s.continent_id==t.continent),h.value=y.value.filter(s=>s.continent.id==t.continent),t.zone="",t.country="",t.city="",v.value=[],w.value=[]};return(s,n)=>{const k=K("router-link"),Y=K("NoContent");return l(),r("div",we,[o("h1",ke,i(s.$t("ads-s"))+" "+i(s.$tc("student",1)),1),o("div",$e,[o("div",Ce,[o("div",ze,[o("label",Ae,i(s.$t("key-words")),1),g(o("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=e=>t.searchKey=e),class:"form-input mt-2 block w-full rounded-md border border-gray-200 bg-white px-3 pr-2 text-gray-700 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"},null,512),[[le,t.searchKey]])]),o("div",Ve,[o("label",Ue,i(s.$t("category")),1),g(o("select",{"onUpdate:modelValue":n[1]||(n[1]=e=>t.category=e),class:"form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[Ne,(l(!0),r(u,null,c(a(D),e=>(l(),r("option",{key:e.id,value:e.id},i(e.name),9,Se))),128))],512),[[b,t.category]])]),o("div",je,[o("label",Fe,i(s.$t("continent")),1),g(o("select",{"onUpdate:modelValue":n[2]||(n[2]=e=>t.continent=e),onChange:n[3]||(n[3]=e=>X()),class:"form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[Ke,(l(!0),r(u,null,c(a(M),e=>(l(),r("option",{key:e.id,value:e.id},[s.$i18n.locale=="en"?(l(),r("span",qe,i(e.name_en),1)):s.$i18n.locale=="fr"?(l(),r("span",Le,i(e.name_fr),1)):s.$i18n.locale=="es"?(l(),r("span",Me,i(e.name_es),1)):(l(),r("span",Re,i(e.name_pt),1))],8,Be))),128))],544),[[b,t.continent]])]),o("div",Ee,[o("label",Ze,i(s.$t("zoned")),1),g(o("select",{"onUpdate:modelValue":n[4]||(n[4]=e=>t.zone=e),onChange:n[5]||(n[5]=e=>W()),class:"form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[De,z.value.length!=0?(l(!0),r(u,{key:0},c(z.value,e=>(l(),r("option",{key:e.id,value:e.id},[s.$i18n.locale=="en"?(l(),r("span",Te,i(e.name_en),1)):s.$i18n.locale=="fr"?(l(),r("span",Ge,i(e.name_fr),1)):s.$i18n.locale=="es"?(l(),r("span",He,i(e.name_es),1)):(l(),r("span",Oe,i(e.name_pt),1))],8,Je))),128)):(l(),r("option",Qe," Requires "+i(s.$t("continent")),1))],544),[[b,t.zone]])]),o("div",Ie,[o("label",Pe,i(s.$t("country")),1),g(o("select",{"onUpdate:modelValue":n[6]||(n[6]=e=>t.country=e),onChange:n[7]||(n[7]=e=>P()),class:"form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[We,w.value.length!=0?(l(!0),r(u,{key:0},c(w.value,e=>(l(),r("option",{key:e.id,value:e.id},[s.$i18n.locale=="en"?(l(),r("span",Ye,i(e.name_en),1)):s.$i18n.locale=="fr"?(l(),r("span",et,i(e.name_fr),1)):s.$i18n.locale=="es"?(l(),r("span",tt,i(e.name_es),1)):(l(),r("span",st,i(e.name_pt),1))],8,Xe))),128)):(l(),r("option",ot," Requires "+i(s.$t("zoned")),1))],544),[[b,t.country]])]),o("div",lt,[o("label",rt,i(s.$t("city")),1),g(o("select",{"onUpdate:modelValue":n[8]||(n[8]=e=>t.city=e),onChange:n[9]||(n[9]=e=>I()),class:"form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[it,v.value.length!=0?(l(!0),r(u,{key:0},c(v.value,e=>(l(),r("option",{key:e.id,value:e.id},[s.$i18n.locale=="en"?(l(),r("span",at,i(e.name_en),1)):s.$i18n.locale=="fr"?(l(),r("span",dt,i(e.name_fr),1)):s.$i18n.locale=="es"?(l(),r("span",ut,i(e.name_es),1)):(l(),r("span",ct,i(e.name_pt),1))],8,nt))),128)):(l(),r("option",yt," Requires "+i(s.$t("country")),1))],544),[[b,t.city]])]),o("div",pt,[o("label",gt,i(s.$t("university")),1),d(re,{modelValue:t.university,"onUpdate:modelValue":n[10]||(n[10]=e=>t.university=e),data:h.value,placeholder:"Select University",required:!1,resetField:!0,className:"w-full h-full mt-1 block rounded-md border bg-white  border-gray-300 p-2.5 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 text-sm"},null,8,["modelValue","data","className"])]),o("div",mt,[o("button",{type:"button",onClick:n[11]||(n[11]=e=>Q()),class:"w-full rounded-md bg-primary-blue px-4 py-2.5 text-white"},i(s.$t("search")),1)])]),ft,o("div",_t,[a(S).type=="particular"||a(S).type=="admin"?(l(),F(k,{key:0,to:{name:"add.ads"},class:"flex items-center justify-start space-x-3 rounded bg-primary-blue px-3 py-2 text-white"},{default:$(()=>[d(a(me),{class:"h-6 w-6"}),o("p",vt,i(s.$tc("add",2))+" "+i(s.$t("ads")),1)]),_:1},8,["to"])):m("",!0)]),o("div",ht,[a(_)==3?(l(),r("div",bt,[d(B)])):a(x).length!=0?(l(),r("div",{key:1,ref_key:"adsContainer",ref:A,class:"grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"},[(l(!0),r(u,null,c(a(x),e=>(l(),r("div",{class:"dark:bg-gray-800 relative overflow-hidden rounded-lg shadow-lg flex flex-col",key:e.id},[d(k,{to:{name:"show.ads",params:{id:e.id,slug:e.slug}},class:"block"},{default:$(()=>[o("div",xt,[e.image[0]?(l(),r("div",wt,[o("span",null,i(e.image.length),1)])):m("",!0),e.image[0]?(l(),r("img",{key:1,class:"h-48 w-full rounded-t-lg object-cover",src:e.image[0],alt:e.title},null,8,kt)):(l(),r("div",$t,[d(a(fe),{class:"h-full w-full text-gray-500"})]))])]),_:2},1032,["to"]),o("div",Ct,[o("a",zt,i(e.category.name.length<=30?e.category.name:e.category.name.substring(0,25)+"..."),1),d(k,{to:{name:"show.ads",params:{id:e.id,slug:e.slug}},class:"block grow"},{default:$(()=>[o("h1",At,i(e.title),1)]),_:2},1032,["to"])]),o("div",Vt,[e.price&&e.price!="null"?(l(),r("h1",Ut,i(e.price)+" "+i(e.currency.symbol),1)):m("",!0),o("div",Nt,[o("div",St,[d(a(_e),{class:"h-4 w-4"}),d(k,{to:{name:"compte",params:{slug:e.user.slug,id:e.user.id}},class:"hover:text-primary-blue"},{default:$(()=>[ie(i(e.user.firstname),1)]),_:2},1032,["to"])])])])]))),128))],512)):m("",!0),a(_)==1?(l(),r("div",jt,[d(B)])):m("",!0),a(x).length==0&&a(_)!=1?(l(),F(Y,{key:3})):m("",!0)])])])}}};export{Gt as default};
