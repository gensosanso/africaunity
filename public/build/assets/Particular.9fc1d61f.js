import{r as K,o as P,M as R,a as B,c as t,d as s,e as n,t as a,j as h,K as D,J as w,F as u,x as _,g as r,f as y,w as I,k as O,i as Q,m as c,S as W,U as X,b as L}from"./app.4afc0db7.js";import{u as Y}from"./userServices.cb078a4a.js";import{u as Z}from"./languageServices.57ad74af.js";import{u as ee}from"./activityAreaServices.f5d24500.js";import{u as te}from"./countryServices.e89c773f.js";import{_ as N}from"./Profile.48ff7e55.js";import{u as se}from"./statusServices.7d46c46c.js";import{r as ae}from"./UserCircleIcon.d22f3349.js";import"./PhotoIcon.2f8c8e29.js";const oe={class:"mx-auto min-h-screen w-full bg-white xl:w-[90%]"},ne={class:"text-5xl text-primary-blue py-2 text-center capitalize font-bold"},le={class:"pb-8 lg:px-16"},ie={class:"grid lg:grid-cols-3 grid-cols-1 gap-2 px-10 pb-8 pt-4 bg-gray-50 shadow mt-4"},re={class:"lg:text-sm text-xs"},de={class:"text-gray-700 dark:text-gray-200"},ce={class:"lg:text-sm text-xs"},ue={class:"text-gray-700 dark:text-gray-200"},_e={class:"lg:text-sm text-xs"},ye={class:"text-gray-700 dark:text-gray-200"},me=n("option",{value:""},"--------------",-1),pe=["value"],he={key:0},ge={key:1},fe={key:2},be={key:3},ke={class:"lg:text-sm text-xs"},ve={class:"text-gray-700",for:"es"},xe={class:"lg:text-sm text-xs"},we={class:"text-gray-700",for:"es"},$e={class:"lg:text-sm text-xs"},Ce={class:"text-gray-700 dark:text-gray-200"},Ve=n("option",{value:""},"--------------",-1),Se=["value"],Ue={key:0},Fe={key:1},Ke={key:2},Be={key:3},De={class:"lg:text-sm text-xs"},Le={class:"text-gray-700"},Ne=n("option",{value:""},"--------------",-1),je=["value"],Me={key:0},Ee={key:1},qe={key:2},ze={key:3},Te={class:"text-xs lg:text-sm"},Ae={class:"text-gray-700 opacity-0"},Ge=n("div",{class:"p-2 bg-primary-blue shadow"},null,-1),He={key:0},Je=["src"],Pe={class:"text-gray-700 font-bold capitalize dark:text-gray-300"},Re=["onClick"],Ie={key:1,class:"text-center border-t w-full py-3 space-y-3 text-xs"},Oe={class:"leading-3"},Qe={class:"font-semibold text-sm"},We={key:0,class:"font-light"},Xe={key:0},Ye={key:1},Ze={key:2},et={key:3},tt={key:0,class:"leading-3"},st={class:"font-semibold text-sm"},at={class:"font-light text-primary-blue"},ot={key:1,class:"leading-3"},nt={class:"font-semibold text-sm"},lt={class:"font-light"},it={key:0},rt={key:1},dt={key:2},ct={key:3},ut={key:2,class:"leading-3"},_t={class:"font-semibold text-sm"},yt={class:"font-light"},mt={key:0},pt={key:1},ht={key:2},gt={key:3},ft={key:3,class:"leading-3"},bt={class:"font-semibold text-sm"},kt={key:0},vt={key:0},xt={key:1},wt={key:2},$t={key:3},Ct={key:4,class:"leading-3"},Vt={class:"font-semibold text-sm"},St={key:0},Ut={key:0},Ft={key:1},Kt={key:2},Bt={key:3},Dt={key:2},Lt={key:3,class:"p-28 flex justify-center text-gray-500 flex-col items-center animate-pulse"},Nt={class:"text-2xl mt-2"},Rt={__name:"Particular",setup(jt){const{status:j,getStatus:M,errorsStatus:Mt}=se(),{languages:$,getLanguages:E}=Z(),{countries:C,getCountries:q}=te(),{activityAreas:V,getActivityAreas:z}=ee(),{users:g,getUsersType:f,filterUsers:T,page:b,isAll:S,loading:k}=Y(),v=K(null),x=K(!0);P(async()=>{window.addEventListener("scroll",U),await f("particular"),await M(),await E(),await q(),await z()}),R(async()=>{b.value=1,window.removeEventListener("scroll",U)});const U=async o=>{v.value&&v.value.getBoundingClientRect().bottom<window.innerHeight&&x.value&&!S.value&&l.searchKey==""&&l.email==""&&l.native_country==""&&l.status==""&&l.residence_country==""&&l.language==""&&l.activity_area==""&&(x.value=!1,b.value++,await f("particular"),x.value=!0)},l=B({searchKey:"",email:"",native_country:"",status:"",residence_country:"",language:"",activity_area:"",type:"particular"}),m=B({id:"",state:!1}),A=o=>{m.id=o,m.state=!0},G=()=>{m.id="",m.state=!1},H=async()=>{l.searchKey!=""||l.email!=""||l.native_country!=""||l.status!=""||l.residence_country!=""||l.language!=""||l.activity_area!=""?await T({...l}):(b.value=1,S.value=!1,await f("particular"))};return(o,i)=>{const F=L("SelectFilter"),J=L("router-link");return t(),s("div",oe,[n("h1",ne,a(o.$t("particular")),1),n("div",le,[n("div",ie,[n("div",re,[n("label",de,a(o.$t("firstname")),1),h(n("input",{type:"text","onUpdate:modelValue":i[0]||(i[0]=e=>l.searchKey=e),class:"form-input px-3 pr-2 w-full text-gray-700 bg-white border border-gray-200 rounded-md mt-2 placeholder:text-gray-400 focus:ring-primary-blue focus:border-primary-blue block"},null,512),[[D,l.searchKey]])]),n("div",ce,[n("label",ue,a(o.$t("email")),1),h(n("input",{type:"text","onUpdate:modelValue":i[1]||(i[1]=e=>l.email=e),class:"form-input px-3 pr-2 w-full text-gray-700 bg-white border border-gray-200 rounded-md mt-2 placeholder:text-gray-400 focus:ring-primary-blue focus:border-primary-blue block"},null,512),[[D,l.email]])]),n("div",_e,[n("label",ye,a(o.$t("status")),1),h(n("select",{"onUpdate:modelValue":i[2]||(i[2]=e=>l.status=e),class:"form-select block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"},[me,(t(!0),s(u,null,_(r(j),e=>(t(),s("option",{value:e.id,key:e.id},[o.$i18n.locale=="en"?(t(),s("span",he,a(e.name_en),1)):o.$i18n.locale=="fr"?(t(),s("span",ge,a(e.name_fr),1)):o.$i18n.locale=="es"?(t(),s("span",fe,a(e.name_es),1)):(t(),s("span",be,a(e.name_pt),1))],8,pe))),128))],512),[[w,l.status]])]),n("div",ke,[n("label",ve,a(o.$t("native-country")),1),y(F,{modelValue:l.native_country,"onUpdate:modelValue":i[3]||(i[3]=e=>l.native_country=e),data:r(C),placeholder:"Select Country",required:!1,resetField:!0,className:"form-select block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"},null,8,["modelValue","data"])]),n("div",xe,[n("label",we,a(o.$t("residence-country")),1),y(F,{modelValue:l.residence_country,"onUpdate:modelValue":i[4]||(i[4]=e=>l.residence_country=e),data:r(C),placeholder:"Select Country",required:!1,resetField:!0,className:"form-select block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"},null,8,["modelValue","data"])]),n("div",$e,[n("label",Ce,a(o.$t("activity-area")),1),h(n("select",{"onUpdate:modelValue":i[5]||(i[5]=e=>l.activity_area=e),class:"form-select block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"},[Ve,(t(!0),s(u,null,_(r(V),e=>(t(),s("option",{key:e.id,value:e.id},[o.$i18n.locale=="en"?(t(),s("span",Ue,a(e.name_en),1)):o.$i18n.locale=="fr"?(t(),s("span",Fe,a(e.name_fr),1)):o.$i18n.locale=="es"?(t(),s("span",Ke,a(e.name_es),1)):(t(),s("span",Be,a(e.name_pt),1))],8,Se))),128))],512),[[w,l.activity_area]])]),n("div",De,[n("label",Le,a(o.$t("speak-language")),1),h(n("select",{"onUpdate:modelValue":i[6]||(i[6]=e=>l.language=e),class:"form-select block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"},[Ne,(t(!0),s(u,null,_(r($),e=>(t(),s("option",{key:e.id,value:e.id},[o.$i18n.locale=="en"?(t(),s("span",Me,a(e.name_en),1)):o.$i18n.locale=="fr"?(t(),s("span",Ee,a(e.name_fr),1)):o.$i18n.locale=="es"?(t(),s("span",qe,a(e.name_es),1)):(t(),s("span",ze,a(e.name_pt),1))],8,je))),128))],512),[[w,l.language]])]),n("div",Te,[n("label",Ae,a(o.$t("search")),1),n("button",{type:"button",onClick:i[7]||(i[7]=e=>H()),class:"w-full rounded-md mt-1 bg-primary-blue px-4 py-2.5 text-white"},a(o.$t("search")),1)])]),Ge,r(k)==3?(t(),s("div",He,[y(N)])):r(g).length!=0?(t(),s("div",{key:1,ref_key:"userContainer",ref:v,class:"grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 px-10 py-8"},[(t(!0),s(u,null,_(r(g),e=>(t(),s("div",{key:e.id,class:"flex flex-col items-center py-2 text-center space-y-5 dark:bg-gray-800 border"},[y(J,{to:{name:"compte",params:{slug:e.slug,id:e.id}},class:"flex justify-center flex-col items-center"},{default:I(()=>[e.avatar?(t(),s("img",{key:0,class:"object-cover lg:h-44 lg:w-44 rounded-full h-36 w-36",src:e.avatar},null,8,Je)):(t(),O(r(ae),{key:1,class:"lg:h-44 lg:w-44 h-36 w-36 text-gray-700"})),n("h4",Pe,a(e.firstname)+" "+a(e.lastname),1)]),_:2},1032,["to"]),m.id!=e.id?(t(),s("button",{key:0,onClick:d=>A(e.id),class:"mt-2"},[y(r(Q),{class:"h-8 w-8 text-gray-500"})],8,Re)):c("",!0),m.id==e.id&&m.state==!0?(t(),s("div",Ie,[n("p",Oe,[n("h1",Qe,a(o.$t("status")),1),e.detail.status?(t(),s("h2",We,[o.$i18n.locale=="en"?(t(),s("span",Xe,a(e.detail.status.name_en),1)):o.$i18n.locale=="fr"?(t(),s("span",Ye,a(e.detail.status.name_fr),1)):o.$i18n.locale=="es"?(t(),s("span",Ze,a(e.detail.status.name_es),1)):(t(),s("span",et,a(e.detail.status.name_pt),1))])):c("",!0)]),e.hide_email?c("",!0):(t(),s("p",tt,[n("h1",st,a(o.$t("adresse")+" "+o.$t("email")),1),n("h2",at,a(e.email),1)])),e.detail.native_country?(t(),s("p",ot,[n("h1",nt,a(o.$t("native-country")),1),n("h2",lt,[o.$i18n.locale=="en"?(t(),s("span",it,a(e.detail.country_native.name_en),1)):o.$i18n.locale=="fr"?(t(),s("span",rt,a(e.detail.country_native.name_fr),1)):o.$i18n.locale=="es"?(t(),s("span",dt,a(e.detail.country_native.name_es),1)):(t(),s("span",ct,a(e.detail.country_native.name_pt),1))])])):c("",!0),e.detail.residence_country?(t(),s("p",ut,[n("h1",_t,a(o.$t("residence-country")),1),n("h2",yt,[o.$i18n.locale=="en"?(t(),s("span",mt,a(e.detail.country_residence.name_en),1)):o.$i18n.locale=="fr"?(t(),s("span",pt,a(e.detail.country_residence.name_fr),1)):o.$i18n.locale=="es"?(t(),s("span",ht,a(e.detail.country_residence.name_es),1)):(t(),s("span",gt,a(e.detail.country_residence.name_pt),1))])])):c("",!0),e.detail.languages.length!=0?(t(),s("p",ft,[n("h1",bt,a(o.$t("speak-language")),1),(t(!0),s(u,null,_(r($),d=>(t(),s("h2",{class:"font-light",key:d.id},[(t(!0),s(u,null,_(e.detail.languages,p=>(t(),s("span",{key:p.id},[p.id===d.id?(t(),s("span",kt,[o.$i18n.locale=="en"?(t(),s("span",vt,a(d.name_en),1)):o.$i18n.locale=="fr"?(t(),s("span",xt,a(d.name_fr),1)):o.$i18n.locale=="es"?(t(),s("span",wt,a(d.name_es),1)):(t(),s("span",$t,a(d.name_pt),1))])):c("",!0)]))),128))]))),128))])):c("",!0),e.detail.activity_areas.length!=0?(t(),s("p",Ct,[n("h1",Vt,a(o.$t("activity-area")),1),(t(!0),s(u,null,_(r(V),d=>(t(),s("h2",{class:"font-light",key:d.id},[(t(!0),s(u,null,_(e.detail.activity_areas,p=>(t(),s("span",{key:p.id},[p.id===d.id?(t(),s("span",St,[o.$i18n.locale=="en"?(t(),s("span",Ut,a(d.name_en),1)):o.$i18n.locale=="fr"?(t(),s("span",Ft,a(d.name_fr),1)):o.$i18n.locale=="es"?(t(),s("span",Kt,a(d.name_es),1)):(t(),s("span",Bt,a(d.name_pt),1))])):c("",!0)]))),128))]))),128))])):c("",!0),n("button",{class:"mt-2",onClick:i[8]||(i[8]=d=>G())},[y(r(W),{class:"h-8 w-8 text-gray-500"})])])):c("",!0)]))),128))],512)):c("",!0),r(k)==1?(t(),s("div",Dt,[y(N)])):c("",!0),r(g).length==0&&r(k)!=1?(t(),s("div",Lt,[y(r(X),{class:"h-16 w-16"}),n("span",Nt,a(o.$t("no-content")),1)])):c("",!0)])])}}};export{Rt as default};
