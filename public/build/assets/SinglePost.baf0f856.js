import{u as P,a as T,o as q,r as M,c as o,d as r,f as n,e,g as t,m as u,t as a,H as A,w as p,h as _,k as f,F as S,x as E,l as U,j,K as z,b as F}from"./app.8ef239d2.js";import{_ as I}from"./FilterArticle.149439da.js";import{_ as J,r as K}from"./Report.d97432cf.js";import{u as O}from"./postServices.944dd462.js";import{u as R}from"./commentServices.bada1443.js";import{E as G}from"./Error.443ca946.js";import{r as Q}from"./CalendarIcon.c6f77168.js";import{r as W}from"./UserIcon.e892b5a5.js";import{r as X}from"./ChatBubbleOvalLeftEllipsisIcon.576d6f9c.js";import{r as L}from"./UserCircleIcon.abbdd172.js";import{r as Y}from"./PencilSquareIcon.7dd92a9a.js";import{r as Z}from"./FaceFrownIcon.74888c90.js";import"./_plugin-vue_export-helper.cdc0426e.js";const ee={class:"mx-auto flex min-h-screen w-full flex-col bg-white p-4 text-lg md:space-y-2 lg:flex-row lg:space-x-2 xl:w-[90%]"},te={class:"lg:w-[70%]"},se={key:0,class:"py-6 lg:px-4"},oe={class:"dark:bg-gray-800 overflow-hidden rounded-lg bg-white shadow-md"},re=["src"],ae={class:"p-6"},le={class:"dark:text-white mt-2 block transform text-3xl font-semibold text-gray-800 transition-colors duration-200 hover:text-gray-600"},ne={key:0},ie={key:1},ce={key:2},de={key:3},ue={class:"mt-2 flex space-x-2 text-xs text-gray-500"},pe={class:"flex space-x-1"},me={href:"#",class:"hover:text-primary-blue"},he={class:"flex space-x-1"},_e={class:"flex space-x-1"},ye={href:"#",class:"hover:text-primary-blue"},xe=["innerHTML"],fe={class:"mt-4"},ge={class:"flex items-center justify-between"},we=["src"],ve={class:"dark:text-gray-200 mx-2 font-semibold text-gray-700"},be={class:"flex items-center"},ke={class:"hidden lg:block"},Ce={key:0,class:"ml-3"},$e={class:"flex items-center space-x-3 px-2 py-4"},Me=["href"],Se=e("svg",{fill:"#25D366",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",class:"h-6 w-6"},[e("path",{d:"M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z"})],-1),je=[Se],ze={key:1,class:"mt-4 px-8 py-4"},Le={class:"h-10 w-10 overflow-hidden rounded-full shadow md:h-20 md:w-20"},Ve=["src"],Be={class:"mt-2 text-center text-xs font-bold hover:underline lg:text-sm"},De={class:"text-center text-xs font-light lg:text-sm"},He={class:"ml-2 w-full p-2 text-xs lg:text-lg"},Ne={class:"mt-4 px-8 py-4"},Pe=e("label",{class:"dark:text-gray-200 text-gray-700",for:"pt"},[_("Laisser un Commentaire "),e("span",{class:"text-red-500"},"*")],-1),Te={class:"mt-6"},qe={key:0,type:"submit",class:"text-md w-full rounded bg-primary-blue px-6 py-4 leading-5 text-white focus:outline-none"},Ae={key:1,type:"submit",disabled:"",class:"text-md flex w-full items-center justify-center rounded bg-blue-300 px-6 py-4 leading-5 text-white focus:outline-none"},Ee=e("svg",{class:"h-5 w-5 animate-spin text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),e("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),Ue={key:1,class:"p-28"},Fe=e("svg",{class:"mx-auto h-16 w-16 animate-spin",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),e("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),Ie=[Fe],Je={key:2,class:"flex animate-pulse flex-col items-center justify-center p-28 text-gray-500"},Ke={class:"mt-2 text-2xl"},Oe={class:"bg-white lg:w-[30%]"},lt={__name:"SinglePost",props:{id:{required:!0,type:String},slug:{required:!1,type:String}},setup(g){const y=g,{locale:w}=P(),V=window.location.href,{post:s,getPost2:B,loading:D}=O(),{createComment:H,errors:v,comments:b,getCommentsPost:k}=R(),C=localStorage.user?JSON.parse(localStorage.user):"",c=T({user_id:C.id,post_id:"",content:""});q(async()=>{await B(y.id),await k(y.id),c.post_id=s.value.id});const x=M(!1),$=()=>{x.value=!x.value},m=M(0),N=async()=>{m.value=1,await H({...c}),m.value=0,c.content="",await k(y.id)};return(d,i)=>{const h=F("router-link");return o(),r(S,null,[n(J,{open:x.value,toogleModal:$,id:g.id,type:"post"},null,8,["open","id"]),e("div",ee,[e("div",te,[t(s).length!=0?(o(),r("div",se,[e("div",oe,[t(s).type=="article"?(o(),r("img",{key:0,class:"h-96 w-full object-cover",src:t(s).image,alt:""},null,8,re)):u("",!0),e("div",ae,[e("div",null,[e("h1",le,a(t(s).title),1),e("a",{href:"#",class:"my-4 rounded py-1 px-2 text-xs capitalize text-white",style:A("background:"+t(s).ministry.color)},[d.$i18n.locale=="en"?(o(),r("span",ne,a(t(s).ministry.name_en),1)):d.$i18n.locale=="fr"?(o(),r("span",ie,a(t(s).ministry.name_fr),1)):d.$i18n.locale=="es"?(o(),r("span",ce,a(t(s).ministry.name_es),1)):(o(),r("span",de,a(t(s).country.name_pt),1))],4),e("div",ue,[e("div",pe,[n(t(Q),{class:"h-4 w-4"}),e("a",me,a(new Date(t(s).date).toLocaleDateString(t(w),{day:"numeric",year:"numeric",month:"long"})),1)]),e("div",he,[n(t(W),{class:"h-4 w-4"}),n(h,{to:{name:"compte",params:{slug:t(s).user.slug,id:t(s).user.id}},class:"hover:text-primary-blue"},{default:p(()=>[_(a(t(s).user.firstname),1)]),_:1},8,["to"])]),e("div",_e,[n(t(X),{class:"h-4 w-4"}),e("a",ye,a(t(s).comments),1)])]),t(s).type=="article"?(o(),r("p",{key:0,class:"dark:text-gray-400 my-4 mt-2 py-4 text-gray-600",innerHTML:t(s).content},null,8,xe)):u("",!0)]),e("div",fe,[e("div",ge,[n(h,{to:{name:"compte",params:{slug:t(s).user.slug,id:t(s).user.id}},class:"flex items-center"},{default:p(()=>[t(s).user.avatar?(o(),r("img",{key:0,class:"h-16 w-16 rounded-full object-cover shadow",src:t(s).user.avatar},null,8,we)):(o(),f(t(L),{key:1,class:"h-10 w-10 text-gray-700"})),e("span",ve,a(t(s).user.firstname),1)]),_:1},8,["to"]),e("div",be,[e("div",null,[e("button",{onClick:i[0]||(i[0]=l=>$()),class:"flex cursor-pointer items-center space-x-2 rounded-full border border-gray-400 px-2 py-1 text-xs text-gray-400 hover:border-white hover:bg-yellow-300 hover:text-white"},[n(t(K),{class:"h-5 w-5"}),e("span",ke,a(d.$t("report")),1)])]),t(C).id==t(s).user.id?(o(),r("div",Ce,[n(h,{to:{name:"edit.post",params:{id:t(s).id,type:t(s).type}}},{default:p(()=>[n(t(Y),{class:"h-5 w-5 cursor-pointer text-gray-400 hover:text-primary-blue"})]),_:1},8,["to"])])):u("",!0)])])]),e("div",$e,[e("a",{href:"whatsapp://send?text=Hello, I have just published an publication on the AfricaUnity website. please go see, thank you "+t(V)},je,8,Me)])]),t(b).length!=0?(o(),r("div",ze,[(o(!0),r(S,null,E(t(b),l=>(o(),r("div",{class:"flex border-b py-4",key:l.id},[e("div",null,[n(h,{to:{name:"compte",params:{slug:l.user.slug,id:l.user.id}}},{default:p(()=>[e("div",Le,[l.user.avatar?(o(),r("img",{key:0,src:l.user.avatar,class:"h-full w-full bg-cover object-cover",alt:""},null,8,Ve)):(o(),f(t(L),{key:1,class:"h-full w-full text-gray-500"}))]),e("h1",Be,a(l.user.firstname),1)]),_:2},1032,["to"]),e("h3",De,a(new Date(l.date).toLocaleDateString(t(w),{day:"numeric",year:"numeric",month:"long"})),1)]),e("div",He,a(l.content),1)]))),128))])):u("",!0),t(v)!=""?(o(),f(G,{key:2},{default:p(()=>[_(a(t(v)),1)]),_:1})):u("",!0),e("form",{onSubmit:i[3]||(i[3]=U(l=>N(),["prevent"]))},[e("div",Ne,[Pe,j(e("textarea",{"onUpdate:modelValue":i[1]||(i[1]=l=>c.content=l),required:"",type:"text",id:"pt",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block h-60 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40"},`\r
                            `,512),[[z,c.content]]),e("div",Te,[j(e("input",{type:"hidden","onUpdate:modelValue":i[2]||(i[2]=l=>c.post_id=l)},null,512),[[z,c.post_id]]),m.value==0?(o(),r("button",qe,a(d.$t("save")),1)):u("",!0),m.value==1?(o(),r("button",Ae,[_(a(d.$t("save"))+"... ",1),Ee])):u("",!0)])])],32)])])):t(D)==1?(o(),r("div",Ue,Ie)):(o(),r("div",Je,[n(t(Z),{class:"h-16 w-16"}),e("span",Ke,a(d.$t("no-content")),1)]))]),e("div",Oe,[n(I)])])],64)}}};export{lt as default};
