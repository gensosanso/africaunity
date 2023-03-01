import{u as K,o as U,a as V,G as M,c as o,d as i,e as t,g as s,t as r,f as n,k as y,w as u,m as g,j as b,K as z,J as B,F as v,x as w,h as T,b as h}from"./app.19df3b2f.js";import{u as q}from"./universityServices.2fe70fe8.js";import{u as D}from"./announcementServices.e54b5a2f.js";import{u as F}from"./categoryAnnouncementServices.6e0a1c61.js";import{r as H}from"./PlusCircleIcon.50a23a3c.js";import{r as J}from"./MegaphoneIcon.e4d7640a.js";import{r as E}from"./UserIcon.8356fbb1.js";const G={class:"mx-auto min-h-screen w-full bg-white px-20 text-lg xl:w-[90%]"},I={key:0,class:"py-6 px-4"},O={class:"overflow-hidden rounded-lg bg-white shadow-md"},P=["src"],Q={class:"p-6"},R={href:"#",class:"rounded bg-primary-blue py-1 px-2 text-xs capitalize text-white"},W={key:0},X={key:1},Y={key:2},Z={key:3},ee={class:"mt-2 block transform text-3xl font-semibold text-gray-800 transition-colors duration-200 hover:text-gray-600"},te=["innerHTML"],se={key:1,class:"p-28"},oe={class:"py-2 text-center text-3xl font-bold text-primary-blue"},re={class:"flex justify-end px-6"},ie={class:"text-base leading-4"},le={class:"mt-4 grid grid-cols-1 gap-2 bg-gray-50 px-10 pb-8 pt-4 shadow lg:grid-cols-3"},ae={class:"text-xs lg:text-sm"},de={class:"text-gray-700"},ce={class:"text-xs lg:text-sm"},ne={class:"text-gray-700",for:"es"},pe=t("option",{value:""},"--------------",-1),ue=["value"],ye=t("div",{class:"bg-primary-blue p-2 shadow"},null,-1),ge={class:"py-8"},he={key:0,class:"grid grid-cols-1 gap-8 py-8 md:grid-cols-2 lg:grid-cols-3 lg:px-10"},_e={class:"relative"},me={key:0,class:"absolute top-5 right-5 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 p-2 text-center text-sm text-white"},xe=["src","alt"],fe={key:2,class:"h-48 w-full overflow-hidden rounded-t-lg bg-gray-50 py-10"},be={class:"space-y-2 px-4 py-2"},ve={href:"#",class:"mt-2 rounded bg-primary-blue py-1 px-2 text-xs capitalize text-white"},we={class:"text-2xl font-bold capitalize text-gray-800 hover:underline"},ke={class:"mt-2 text-sm text-gray-600"},Ce={class:"flex h-10 items-center justify-between bg-gray-900 px-4 py-2"},Se={key:0,class:"text-lg font-bold text-white"},$e={class:"flex items-center space-x-2 text-xs text-white"},je={class:"flex space-x-1"},ze={__name:"SingleUniversity",props:{id:{required:!0,type:String},slug:{required:!1,type:String}},setup(k){const _=k;K();const{university:l,getUniversity2:C,loading:S}=q(),{categoryAnnouncements:$,getCategoryAnnouncements:j}=F(),m=localStorage.user?JSON.parse(localStorage.user):"",{announcements:A,getAnnouncementsUniversity:L}=D();U(async()=>{await C(_.id),await L(_.id),await j()});const d=V({searchKey:"",category:""}),x=M(()=>A.value.filter(a=>{let c="";return d.category!=""?c=a.title.toLowerCase().includes(d.searchKey.toLowerCase())&&a.category.id==d.category:c=a.title.toLowerCase().includes(d.searchKey.toLowerCase()),c}));return(a,c)=>{const N=h("Spin"),f=h("NoContent"),p=h("router-link");return o(),i("div",G,[t("div",null,[s(l).length!=0?(o(),i("div",I,[t("div",O,[t("img",{class:"h-96 w-full object-cover",src:s(l).image,alt:""},null,8,P),t("div",Q,[t("div",null,[t("a",R,[a.$i18n.locale=="en"?(o(),i("span",W,r(s(l).city.name_en+"-"+s(l).country.code_iso),1)):a.$i18n.locale=="fr"?(o(),i("span",X,r(s(l).city.name_fr+"-"+s(l).country.code_iso),1)):a.$i18n.locale=="es"?(o(),i("span",Y,r(s(l).city.name_es+"-"+s(l).country.code_iso),1)):(o(),i("span",Z,r(s(l).country.name_pt+"-"+s(l).country.code_iso),1))]),t("h1",ee,r(s(l).name),1),t("p",{class:"my-4 mt-2 py-4 text-gray-600",innerHTML:s(l).description},null,8,te)])])])])):s(S)==1?(o(),i("div",se,[n(N)])):(o(),y(f,{key:2})),t("h1",oe,r(a.$t("ads-university"))+" "+r(s(l).name),1),t("div",re,[s(m).type=="particular"||s(m).type=="admin"?(o(),y(p,{key:0,to:{name:"add.ads"},class:"flex items-center justify-start space-x-3 rounded bg-primary-blue px-3 py-2 text-white"},{default:u(()=>[n(s(H),{class:"h-6 w-6"}),t("p",ie,r(a.$tc("add",2))+" "+r(a.$t("ads")),1)]),_:1},8,["to"])):g("",!0)]),t("div",le,[t("div",ae,[t("label",de,r(a.$t("key-words")),1),b(t("input",{type:"text","onUpdate:modelValue":c[0]||(c[0]=e=>d.searchKey=e),class:"form-input mt-2 block w-full rounded-md border border-gray-200 bg-white px-3 pr-2 text-gray-700 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"},null,512),[[z,d.searchKey]])]),t("div",ce,[t("label",ne,r(a.$t("category")),1),b(t("select",{"onUpdate:modelValue":c[1]||(c[1]=e=>d.category=e),class:"form-select mt-1 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[pe,(o(!0),i(v,null,w(s($),e=>(o(),i("option",{key:e.id,value:e.id},r(e.name),9,ue))),128))],512),[[B,d.category]])])]),ye,t("div",ge,[s(x).length!=0?(o(),i("div",he,[(o(!0),i(v,null,w(s(x),e=>(o(),i("div",{class:"relative overflow-hidden rounded-lg shadow-lg",key:e.id},[n(p,{to:{name:"show.ads",params:{id:e.id,slug:e.slug}}},{default:u(()=>[t("div",_e,[e.image[0]?(o(),i("div",me,[t("span",null,r(e.image.length),1)])):g("",!0),e.image[0]?(o(),i("img",{key:1,class:"h-48 w-full rounded-t-lg object-cover",src:e.image[0],alt:e.title},null,8,xe)):(o(),i("div",fe,[n(s(J),{class:"h-full w-full text-gray-500"})]))])]),_:2},1032,["to"]),t("div",be,[t("a",ve,r(e.category.name.length<=30?e.category.name:e.category.name.substring(0,25)+"..."),1),n(p,{to:{name:"show.ads",params:{id:e.id,slug:e.slug}}},{default:u(()=>[t("h1",we,r(e.title.length<=20?e.title:e.title.substring(0,19)+"..."),1)]),_:2},1032,["to"]),t("p",ke,r(e.description.substring(0,19)+"..."),1)]),t("div",Ce,[e.price&&e.price!="null"?(o(),i("h1",Se,r(e.price)+" "+r(e.currency.symbol),1)):g("",!0),t("div",$e,[t("div",je,[n(s(E),{class:"h-4 w-4"}),n(p,{to:{name:"compte",params:{slug:e.user.slug,id:e.user.id}},class:"hover:text-primary-blue"},{default:u(()=>[T(r(e.user.firstname),1)]),_:2},1032,["to"])])])])]))),128))])):(o(),y(f,{key:1}))])])])}}};export{ze as default};
