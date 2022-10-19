import{r as w,o as I,M as O,a as N,G as Q,c as t,d as s,e as a,t as n,j as x,J as C,l as S,F as u,x as _,g as r,f as m,w as W,k as X,i as Y,m as c,R as Z,b as j}from"./app.8ef239d2.js";import{u as ee}from"./userServices.e6b11fa8.js";import{u as te}from"./languageServices.f598ba54.js";import{u as se}from"./activityAreaServices.03ac334a.js";import{u as ne}from"./countryServices.c36ab858.js";import{_ as M}from"./Profile.6db4e655.js";import{u as oe}from"./statusServices.56f8adea.js";import{r as ae}from"./UserCircleIcon.abbdd172.js";import{r as le}from"./FaceFrownIcon.74888c90.js";import"./PhotoIcon.061808e4.js";const ie={class:"mx-auto min-h-screen w-full bg-white xl:w-[90%]"},re={class:"text-5xl text-primary-blue py-2 text-center capitalize font-bold"},de={class:"pb-8 lg:px-16"},ce={class:"grid lg:grid-cols-3 grid-cols-1 gap-2 px-10 pb-8 pt-4 bg-gray-50 shadow mt-4"},ue={class:"lg:text-sm text-xs"},_e={class:"text-gray-700 dark:text-gray-200"},me=a("option",{value:""},"--------------",-1),ye=["value"],pe={key:0},he={key:1},fe={key:2},ge={key:3},ke={class:"lg:text-sm text-xs"},ve={class:"text-gray-700",for:"es"},be={class:"lg:text-sm text-xs"},$e={class:"text-gray-700",for:"es"},we={class:"lg:text-sm text-xs"},xe={class:"text-gray-700 dark:text-gray-200"},Ce=a("option",{value:""},"--------------",-1),Se=["value"],Ve={key:0},Ue={key:1},Fe={key:2},Le={key:3},Be={class:"lg:text-sm text-xs"},De={class:"text-gray-700"},Ne=a("option",{value:""},"--------------",-1),je=["value"],Me={key:0},Ee={key:1},He={key:2},qe={key:3},ze=a("div",{class:"p-2 bg-primary-blue shadow"},null,-1),Ge={key:0},Re=["src"],Ae={class:"text-gray-700 font-bold capitalize dark:text-gray-300"},Je=["onClick"],Ke={key:1,class:"text-center border-t w-full py-3 space-y-3 text-xs"},Pe={class:"leading-3"},Te={class:"font-semibold text-sm"},Ie={key:0,class:"font-light"},Oe={key:0},Qe={key:1},We={key:2},Xe={key:3},Ye={class:"leading-3"},Ze={class:"font-semibold text-sm"},et={class:"font-light text-primary-blue"},tt={key:0,class:"leading-3"},st={class:"font-semibold text-sm"},nt={class:"font-light"},ot={key:0},at={key:1},lt={key:2},it={key:3},rt={key:1,class:"leading-3"},dt={class:"font-semibold text-sm"},ct={class:"font-light"},ut={key:0},_t={key:1},mt={key:2},yt={key:3},pt={key:2,class:"leading-3"},ht={class:"font-semibold text-sm"},ft={key:0},gt={key:0},kt={key:1},vt={key:2},bt={key:3},$t={key:3,class:"leading-3"},wt={class:"font-semibold text-sm"},xt={key:0},Ct={key:0},St={key:1},Vt={key:2},Ut={key:3},Ft={key:2},Lt={key:3,class:"p-28 flex justify-center text-gray-500 flex-col items-center animate-pulse"},Bt={class:"text-2xl mt-2"},Kt={__name:"Particular",setup(Dt){const{status:E,getStatus:H,errorsStatus:Nt}=oe(),{languages:V,getLanguages:q}=te(),{countries:U,getCountries:z}=ne(),{activityAreas:F,getActivityAreas:G}=se(),{users:R,getUsersType:f,filterUsers:A,page:g,isAll:L,loading:k}=ee(),v=w(null),b=w(!0);I(async()=>{window.addEventListener("scroll",B),await f("particular"),await H(),await q(),await z(),await G()}),O(async()=>{g.value=1,window.removeEventListener("scroll",B)});const B=async o=>{v.value&&v.value.getBoundingClientRect().bottom<window.innerHeight&&b.value&&!L.value&&l.native_country==""&&l.status==""&&l.residence_country==""&&l.language==""&&l.activity_area==""&&(b.value=!1,g.value++,await f("particular"),b.value=!0)},J=w(""),l=N({native_country:"",status:"",residence_country:"",language:"",activity_area:"",type:"particular"}),y=N({id:"",state:!1}),K=o=>{y.id=o,y.state=!0},P=()=>{y.id="",y.state=!1},p=async()=>{l.native_country!=""||l.status!=""||l.residence_country!=""||l.language!=""||l.activity_area!=""?await A({...l}):(g.value=1,L.value=!1,await f("particular"))},$=Q(()=>R.value.filter(o=>o.firstname.toLowerCase().includes(J.value.toLowerCase())));return(o,i)=>{const D=j("SelectFilter"),T=j("router-link");return t(),s("div",ie,[a("h1",re,n(o.$t("particular")),1),a("div",de,[a("div",ce,[a("div",ue,[a("label",_e,n(o.$t("status")),1),x(a("select",{"onUpdate:modelValue":i[0]||(i[0]=e=>l.status=e),onChange:i[1]||(i[1]=S(e=>p(),["prevent"])),class:"form-select block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"},[me,(t(!0),s(u,null,_(r(E),e=>(t(),s("option",{value:e.id,key:e.id},[o.$i18n.locale=="en"?(t(),s("span",pe,n(e.name_en),1)):o.$i18n.locale=="fr"?(t(),s("span",he,n(e.name_fr),1)):o.$i18n.locale=="es"?(t(),s("span",fe,n(e.name_es),1)):(t(),s("span",ge,n(e.name_pt),1))],8,ye))),128))],544),[[C,l.status]])]),a("div",ke,[a("label",ve,n(o.$t("native-country")),1),m(D,{modelValue:l.native_country,"onUpdate:modelValue":i[2]||(i[2]=e=>l.native_country=e),data:r(U),placeholder:"Select Country",required:!1,resetField:!0,handled:!0,onHandle:p,className:"form-select block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"},null,8,["modelValue","data"])]),a("div",be,[a("label",$e,n(o.$t("residence-country")),1),m(D,{modelValue:l.residence_country,"onUpdate:modelValue":i[3]||(i[3]=e=>l.residence_country=e),data:r(U),placeholder:"Select Country",required:!1,resetField:!0,handled:!0,onHandle:p,className:"form-select block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"},null,8,["modelValue","data"])]),a("div",we,[a("label",xe,n(o.$t("activity-area")),1),x(a("select",{onChange:i[4]||(i[4]=S(e=>p(),["prevent"])),"onUpdate:modelValue":i[5]||(i[5]=e=>l.activity_area=e),class:"form-select block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"},[Ce,(t(!0),s(u,null,_(r(F),e=>(t(),s("option",{key:e.id,value:e.id},[o.$i18n.locale=="en"?(t(),s("span",Ve,n(e.name_en),1)):o.$i18n.locale=="fr"?(t(),s("span",Ue,n(e.name_fr),1)):o.$i18n.locale=="es"?(t(),s("span",Fe,n(e.name_es),1)):(t(),s("span",Le,n(e.name_pt),1))],8,Se))),128))],544),[[C,l.activity_area]])]),a("div",Be,[a("label",De,n(o.$t("speak-language")),1),x(a("select",{"onUpdate:modelValue":i[6]||(i[6]=e=>l.language=e),onChange:i[7]||(i[7]=S(e=>p(),["prevent"])),class:"form-select block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"},[Ne,(t(!0),s(u,null,_(r(V),e=>(t(),s("option",{key:e.id,value:e.id},[o.$i18n.locale=="en"?(t(),s("span",Me,n(e.name_en),1)):o.$i18n.locale=="fr"?(t(),s("span",Ee,n(e.name_fr),1)):o.$i18n.locale=="es"?(t(),s("span",He,n(e.name_es),1)):(t(),s("span",qe,n(e.name_pt),1))],8,je))),128))],544),[[C,l.language]])])]),ze,r(k)==3?(t(),s("div",Ge,[m(M)])):r($).length!=0?(t(),s("div",{key:1,ref_key:"userContainer",ref:v,class:"grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 px-10 py-8"},[(t(!0),s(u,null,_(r($),e=>(t(),s("div",{key:e.id,class:"flex flex-col items-center py-2 text-center space-y-5 dark:bg-gray-800 border"},[m(T,{to:{name:"compte",params:{slug:e.slug,id:e.id}},class:"flex justify-center flex-col items-center"},{default:W(()=>[e.avatar?(t(),s("img",{key:0,class:"object-cover lg:h-44 lg:w-44 rounded-full h-36 w-36",src:e.avatar},null,8,Re)):(t(),X(r(ae),{key:1,class:"lg:h-44 lg:w-44 h-36 w-36 text-gray-700"})),a("h4",Ae,n(e.firstname)+" "+n(e.lastname),1)]),_:2},1032,["to"]),y.id!=e.id?(t(),s("button",{key:0,onClick:d=>K(e.id),class:"mt-2"},[m(r(Y),{class:"h-8 w-8 text-gray-500"})],8,Je)):c("",!0),y.id==e.id&&y.state==!0?(t(),s("div",Ke,[a("p",Pe,[a("h1",Te,n(o.$t("status")),1),e.detail.status?(t(),s("h2",Ie,[o.$i18n.locale=="en"?(t(),s("span",Oe,n(e.detail.status.name_en),1)):o.$i18n.locale=="fr"?(t(),s("span",Qe,n(e.detail.status.name_fr),1)):o.$i18n.locale=="es"?(t(),s("span",We,n(e.detail.status.name_es),1)):(t(),s("span",Xe,n(e.detail.status.name_pt),1))])):c("",!0)]),a("p",Ye,[a("h1",Ze,n(o.$t("adresse")+" "+o.$t("email")),1),a("h2",et,n(e.email),1)]),e.detail.native_country?(t(),s("p",tt,[a("h1",st,n(o.$t("native-country")),1),a("h2",nt,[o.$i18n.locale=="en"?(t(),s("span",ot,n(e.detail.country_native.name_en),1)):o.$i18n.locale=="fr"?(t(),s("span",at,n(e.detail.country_native.name_fr),1)):o.$i18n.locale=="es"?(t(),s("span",lt,n(e.detail.country_native.name_es),1)):(t(),s("span",it,n(e.detail.country_native.name_pt),1))])])):c("",!0),e.detail.residence_country?(t(),s("p",rt,[a("h1",dt,n(o.$t("residence-country")),1),a("h2",ct,[o.$i18n.locale=="en"?(t(),s("span",ut,n(e.detail.country_residence.name_en),1)):o.$i18n.locale=="fr"?(t(),s("span",_t,n(e.detail.country_residence.name_fr),1)):o.$i18n.locale=="es"?(t(),s("span",mt,n(e.detail.country_residence.name_es),1)):(t(),s("span",yt,n(e.detail.country_residence.name_pt),1))])])):c("",!0),e.detail.languages.length!=0?(t(),s("p",pt,[a("h1",ht,n(o.$t("speak-language")),1),(t(!0),s(u,null,_(r(V),d=>(t(),s("h2",{class:"font-light",key:d.id},[(t(!0),s(u,null,_(e.detail.languages,h=>(t(),s("span",{key:h.id},[h.id===d.id?(t(),s("span",ft,[o.$i18n.locale=="en"?(t(),s("span",gt,n(d.name_en),1)):o.$i18n.locale=="fr"?(t(),s("span",kt,n(d.name_fr),1)):o.$i18n.locale=="es"?(t(),s("span",vt,n(d.name_es),1)):(t(),s("span",bt,n(d.name_pt),1))])):c("",!0)]))),128))]))),128))])):c("",!0),e.detail.activity_areas.length!=0?(t(),s("p",$t,[a("h1",wt,n(o.$t("activity-area")),1),(t(!0),s(u,null,_(r(F),d=>(t(),s("h2",{class:"font-light",key:d.id},[(t(!0),s(u,null,_(e.detail.activity_areas,h=>(t(),s("span",{key:h.id},[h.id===d.id?(t(),s("span",xt,[o.$i18n.locale=="en"?(t(),s("span",Ct,n(d.name_en),1)):o.$i18n.locale=="fr"?(t(),s("span",St,n(d.name_fr),1)):o.$i18n.locale=="es"?(t(),s("span",Vt,n(d.name_es),1)):(t(),s("span",Ut,n(d.name_pt),1))])):c("",!0)]))),128))]))),128))])):c("",!0),a("button",{class:"mt-2",onClick:i[8]||(i[8]=d=>P())},[m(r(Z),{class:"h-8 w-8 text-gray-500"})])])):c("",!0)]))),128))],512)):c("",!0),r(k)==1?(t(),s("div",Ft,[m(M)])):c("",!0),r($).length==0&&r(k)!=1?(t(),s("div",Lt,[m(r(le),{class:"h-16 w-16"}),a("span",Bt,n(o.$t("no-content")),1)])):c("",!0)])])}}};export{Kt as default};
