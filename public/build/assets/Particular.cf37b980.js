import{r as $,b as P,M as T,d as N,G as I,o as e,f as t,g as a,t as o,k as x,J as C,l as V,a as u,h as r,F as m,x as y,w as O,c as Q,j as W,m as c,R as X,e as j}from"./app.69871223.js";import{u as Y}from"./userServices.67daf16f.js";import{u as Z}from"./languageServices.23604a82.js";import{u as ee}from"./activityAreaServices.98e4b994.js";import{u as te}from"./countryServices.5e75967f.js";import{_ as M}from"./Profile.3bb91cf1.js";import{r as se}from"./UserCircleIcon.cbd22a39.js";import{r as oe}from"./EmojiSadIcon.e9363817.js";import"./PhotographIcon.424089a0.js";const ne={class:"mx-auto min-h-screen w-full bg-white xl:w-[90%]"},ae={class:"text-5xl text-primary-blue py-2 text-center capitalize font-bold"},le={class:"pb-8 lg:px-16"},ie={class:"grid lg:grid-cols-3 grid-cols-1 gap-2 px-10 pb-8 pt-4 bg-gray-50 shadow mt-4"},re={class:"lg:text-sm text-xs"},de={class:"text-gray-700 dark:text-gray-200"},ce=a("option",{value:""},"--------------",-1),ue={value:"1"},_e={value:"0"},me={class:"lg:text-sm text-xs"},ye={class:"text-gray-700",for:"es"},pe={class:"lg:text-sm text-xs"},he={class:"text-gray-700",for:"es"},fe={class:"lg:text-sm text-xs"},ge={class:"text-gray-700 dark:text-gray-200"},ke=a("option",{value:""},"--------------",-1),ve=["value"],be={key:0},we={key:1},$e={key:2},xe={key:3},Ce={class:"lg:text-sm text-xs"},Ve={class:"text-gray-700"},Ue=a("option",{value:""},"--------------",-1),Se=["value"],Fe={key:0},Le={key:1},Be={key:2},De={key:3},Ne=a("div",{class:"p-2 bg-primary-blue shadow"},null,-1),je={key:0},Me=["src"],Ee={class:"text-gray-700 font-bold capitalize dark:text-gray-300"},He=["onClick"],qe={key:1,class:"text-center border-t w-full py-3 space-y-3 text-xs"},ze={class:"leading-3"},Ge={class:"font-semibold text-sm"},Re={class:"font-light"},Ae={key:0},Je={key:1},Ke={class:"leading-3"},Pe={class:"font-semibold text-sm"},Te={class:"font-light text-primary-blue"},Ie={key:0,class:"leading-3"},Oe={class:"font-semibold text-sm"},Qe={class:"font-light"},We={key:0},Xe={key:1},Ye={key:2},Ze={key:3},et={key:1,class:"leading-3"},tt={class:"font-semibold text-sm"},st={class:"font-light"},ot={key:0},nt={key:1},at={key:2},lt={key:3},it={key:2,class:"leading-3"},rt={class:"font-semibold text-sm"},dt={key:0},ct={key:0},ut={key:1},_t={key:2},mt={key:3},yt={key:3,class:"leading-3"},pt={class:"font-semibold text-sm"},ht={key:0},ft={key:0},gt={key:1},kt={key:2},vt={key:3},bt={key:2},wt={key:3,class:"p-28 flex justify-center text-gray-500 flex-col items-center animate-pulse"},$t={class:"text-2xl mt-2"},jt={__name:"Particular",setup(xt){const{languages:U,getLanguages:E}=Z(),{countries:S,getCountries:H}=te(),{activityAreas:F,getActivityAreas:q}=ee(),{users:z,getUsersType:f,filterUsers:G,page:g,isAll:L,loading:k}=Y(),v=$(null),b=$(!0);P(async()=>{window.addEventListener("scroll",B),await f("particular"),await E(),await H(),await q()}),T(async()=>{g.value=1,window.removeEventListener("scroll",B)});const B=async n=>{v.value&&v.value.getBoundingClientRect().bottom<window.innerHeight&&b.value&&!L.value&&l.native_country==""&&l.status==""&&l.residence_country==""&&l.language==""&&l.activity_area==""&&(b.value=!1,g.value++,await f("particular"),b.value=!0)},R=$(""),l=N({native_country:"",status:"",residence_country:"",language:"",activity_area:"",type:"particular"}),_=N({id:"",state:!1}),A=n=>{_.id=n,_.state=!0},J=()=>{_.id="",_.state=!1},p=async()=>{l.native_country!=""||l.status!=""||l.residence_country!=""||l.language!=""||l.activity_area!=""?await G({...l}):(g.value=1,L.value=!1,await f("particular"))},w=I(()=>z.value.filter(n=>n.firstname.toLowerCase().includes(R.value.toLowerCase())));return(n,i)=>{const D=j("SelectFilter"),K=j("router-link");return e(),t("div",ne,[a("h1",ae,o(n.$t("particular")),1),a("div",le,[a("div",ie,[a("div",re,[a("label",de,o(n.$t("status")),1),x(a("select",{"onUpdate:modelValue":i[0]||(i[0]=s=>l.status=s),onChange:i[1]||(i[1]=V(s=>p(),["prevent"])),class:"form-select block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"},[ce,a("option",ue,o(n.$t("actif")),1),a("option",_e,o(n.$t("no-actif")),1)],544),[[C,l.status]])]),a("div",me,[a("label",ye,o(n.$t("native-country")),1),u(D,{modelValue:l.native_country,"onUpdate:modelValue":i[2]||(i[2]=s=>l.native_country=s),data:r(S),placeholder:"Select Country",required:!1,resetField:!0,handled:!0,onHandle:p,className:"form-select block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"},null,8,["modelValue","data"])]),a("div",pe,[a("label",he,o(n.$t("residence-country")),1),u(D,{modelValue:l.residence_country,"onUpdate:modelValue":i[3]||(i[3]=s=>l.residence_country=s),data:r(S),placeholder:"Select Country",required:!1,resetField:!0,handled:!0,onHandle:p,className:"form-select block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"},null,8,["modelValue","data"])]),a("div",fe,[a("label",ge,o(n.$t("activity-area")),1),x(a("select",{onChange:i[4]||(i[4]=V(s=>p(),["prevent"])),"onUpdate:modelValue":i[5]||(i[5]=s=>l.activity_area=s),class:"form-select block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"},[ke,(e(!0),t(m,null,y(r(F),s=>(e(),t("option",{key:s.id,value:s.id},[n.$i18n.locale=="en"?(e(),t("span",be,o(s.name_en),1)):n.$i18n.locale=="fr"?(e(),t("span",we,o(s.name_fr),1)):n.$i18n.locale=="es"?(e(),t("span",$e,o(s.name_es),1)):(e(),t("span",xe,o(s.name_pt),1))],8,ve))),128))],544),[[C,l.activity_area]])]),a("div",Ce,[a("label",Ve,o(n.$t("speak-language")),1),x(a("select",{"onUpdate:modelValue":i[6]||(i[6]=s=>l.language=s),onChange:i[7]||(i[7]=V(s=>p(),["prevent"])),class:"form-select block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"},[Ue,(e(!0),t(m,null,y(r(U),s=>(e(),t("option",{key:s.id,value:s.id},[n.$i18n.locale=="en"?(e(),t("span",Fe,o(s.name_en),1)):n.$i18n.locale=="fr"?(e(),t("span",Le,o(s.name_fr),1)):n.$i18n.locale=="es"?(e(),t("span",Be,o(s.name_es),1)):(e(),t("span",De,o(s.name_pt),1))],8,Se))),128))],544),[[C,l.language]])])]),Ne,r(k)==3?(e(),t("div",je,[u(M)])):r(w).length!=0?(e(),t("div",{key:1,ref_key:"userContainer",ref:v,class:"grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 px-10 py-8"},[(e(!0),t(m,null,y(r(w),s=>(e(),t("div",{key:s.id,class:"flex flex-col items-center py-2 text-center space-y-5 dark:bg-gray-800 border"},[u(K,{to:{name:"compte",params:{name:s.firstname,id:s.id}},class:"flex justify-center flex-col items-center"},{default:O(()=>[s.avatar?(e(),t("img",{key:0,class:"object-cover lg:h-44 lg:w-44 rounded-full h-36 w-36",src:s.avatar},null,8,Me)):(e(),Q(r(se),{key:1,class:"lg:h-44 lg:w-44 h-36 w-36 text-gray-700"})),a("h4",Ee,o(s.firstname)+" "+o(s.lastname),1)]),_:2},1032,["to"]),_.id!=s.id?(e(),t("button",{key:0,onClick:d=>A(s.id),class:"mt-2"},[u(r(W),{class:"h-8 w-8 text-gray-500"})],8,He)):c("",!0),_.id==s.id&&_.state==!0?(e(),t("div",qe,[a("p",ze,[a("h1",Ge,o(n.$t("status")),1),a("h2",Re,[s.detail.status==1?(e(),t("span",Ae,o(n.$t("actif")),1)):(e(),t("span",Je,o(n.$t("no-actif")),1))])]),a("p",Ke,[a("h1",Pe,o(n.$t("adresse")+" "+n.$t("email")),1),a("h2",Te,o(s.email),1)]),s.detail.native_country?(e(),t("p",Ie,[a("h1",Oe,o(n.$t("native-country")),1),a("h2",Qe,[n.$i18n.locale=="en"?(e(),t("span",We,o(s.detail.country_native.name_en),1)):n.$i18n.locale=="fr"?(e(),t("span",Xe,o(s.detail.country_native.name_fr),1)):n.$i18n.locale=="es"?(e(),t("span",Ye,o(s.detail.country_native.name_es),1)):(e(),t("span",Ze,o(s.detail.country_native.name_pt),1))])])):c("",!0),s.detail.residence_country?(e(),t("p",et,[a("h1",tt,o(n.$t("residence-country")),1),a("h2",st,[n.$i18n.locale=="en"?(e(),t("span",ot,o(s.detail.country_residence.name_en),1)):n.$i18n.locale=="fr"?(e(),t("span",nt,o(s.detail.country_residence.name_fr),1)):n.$i18n.locale=="es"?(e(),t("span",at,o(s.detail.country_residence.name_es),1)):(e(),t("span",lt,o(s.detail.country_residence.name_pt),1))])])):c("",!0),s.detail.languages.length!=0?(e(),t("p",it,[a("h1",rt,o(n.$t("speak-language")),1),(e(!0),t(m,null,y(r(U),d=>(e(),t("h2",{class:"font-light",key:d.id},[(e(!0),t(m,null,y(s.detail.languages,h=>(e(),t("span",{key:h.id},[h.id===d.id?(e(),t("span",dt,[n.$i18n.locale=="en"?(e(),t("span",ct,o(d.name_en),1)):n.$i18n.locale=="fr"?(e(),t("span",ut,o(d.name_fr),1)):n.$i18n.locale=="es"?(e(),t("span",_t,o(d.name_es),1)):(e(),t("span",mt,o(d.name_pt),1))])):c("",!0)]))),128))]))),128))])):c("",!0),s.detail.activity_areas.length!=0?(e(),t("p",yt,[a("h1",pt,o(n.$t("activity-area")),1),(e(!0),t(m,null,y(r(F),d=>(e(),t("h2",{class:"font-light",key:d.id},[(e(!0),t(m,null,y(s.detail.activity_areas,h=>(e(),t("span",{key:h.id},[h.id===d.id?(e(),t("span",ht,[n.$i18n.locale=="en"?(e(),t("span",ft,o(d.name_en),1)):n.$i18n.locale=="fr"?(e(),t("span",gt,o(d.name_fr),1)):n.$i18n.locale=="es"?(e(),t("span",kt,o(d.name_es),1)):(e(),t("span",vt,o(d.name_pt),1))])):c("",!0)]))),128))]))),128))])):c("",!0),a("button",{class:"mt-2",onClick:i[8]||(i[8]=d=>J())},[u(r(X),{class:"h-8 w-8 text-gray-500"})])])):c("",!0)]))),128))],512)):c("",!0),r(k)==1?(e(),t("div",bt,[u(M)])):c("",!0),r(w).length==0&&r(k)!=1?(e(),t("div",wt,[u(r(oe),{class:"h-16 w-16"}),a("span",$t,o(n.$t("no-content")),1)])):c("",!0)])])}}};export{jt as default};
