import{b as B,r as S,d as U,o as a,f as i,g as e,i as u,t as s,c as b,w as f,m as y,h as n,l as M,a as d,k as c,K as m,S as N,L as z,I as A,e as R}from"./app.4c9b42c1.js";import{E as D}from"./Error.ff1a47a1.js";import{u as E}from"./authServices.dfa0cdc1.js";import{r as g}from"./UserIcon.194dacef.js";import{r as I}from"./MailIcon.f613b76e.js";import{r as V}from"./LockClosedIcon.353a40d2.js";import"./_plugin-vue_export-helper.cdc0426e.js";const O={class:"mx-auto min-h-screen w-full items-center justify-center bg-white px-2 py-8 md:space-x-6 md:px-12 lg:flex xl:w-[90%]"},j={class:"space-y-6 text-center lg:w-[60%] lg:text-left"},F={class:"text-4xl font-bold text-primary-blue lg:text-5xl"},T={key:0},H={key:1},J={key:2},K={key:3},L=z('<svg xmlns="http://www.w3.org/2000/svg" class="inline h-10 w-10" viewBox="0 0 36 36"><circle fill="#FFCC4D" cx="18" cy="18" r="18"></circle><path fill="#664500" d="M10.515 23.621C10.56 23.8 11.683 28 18 28c6.318 0 7.44-4.2 7.485-4.379.055-.217-.043-.442-.237-.554-.195-.111-.439-.078-.6.077C24.629 23.163 22.694 25 18 25s-6.63-1.837-6.648-1.855C11.256 23.05 11.128 23 11 23c-.084 0-.169.021-.246.064-.196.112-.294.339-.239.557z"></path><ellipse fill="#664500" cx="12" cy="13.5" rx="2.5" ry="3.5"></ellipse><ellipse fill="#664500" cx="24" cy="13.5" rx="2.5" ry="3.5"></ellipse></svg>',1),G={class:"p-6 lg:w-[40%]"},Q={class:"border-t-8 border-primary-blue shadow"},W={class:"px-6 py-6"},X={class:"text-center text-3xl font-bold text-[#242A56]"},Y={key:1,class:"py-4"},Z={key:0},ee={class:"relative"},te=["placeholder"],se={class:"relative"},re=["placeholder"],le={key:1},ae={class:"relative"},oe=["placeholder"],ie={key:2},ne={class:"relative"},pe=["placeholder"],ue={class:"relative"},de=["placeholder"],ce={class:"relative"},me=["placeholder"],ye={class:"relative"},fe=["placeholder"],he={class:"mt-10"},be={class:"text-primary-blue hover:underline"},ge={class:"text-left text-gray-400"},we={key:0,type:"submit",class:"mt-6 w-full bg-primary-blue px-8 py-2 text-lg text-white"},xe={key:1,disabled:"",type:"submit",class:"mt-6 inline-flex w-full cursor-wait items-center justify-center bg-blue-300 px-8 py-2 text-lg text-white"},ve=e("svg",{class:"mr-3 h-5 w-5 animate-spin text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),e("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),ke={class:"md:text-md h-16 bg-primary-blue p-4 text-center text-sm text-white"},Se={__name:"Register",props:{type:{required:!0,type:String}},setup(p){const k=p,$=A(),_=localStorage.user?JSON.parse(localStorage.user):"";B(async()=>{C.includes(k.type)||$.push({name:"pack"}),localStorage.token&&$.push({name:"compte",params:{name:_.firstname,id:_.id}})});const w=S(!1),C=["particular","ip","business1","business2"],o=U({firstname:"",lastname:"",email:"",password:"",password_confirmation:"",type:k.type}),{createUser:P,errors:x,loading:v}=E(),q=async()=>{w?await P({...o}):x.value="Veillez accepter notre politique de confidentialit\xE9"};return(t,r)=>{const h=R("router-link");return a(),i("div",O,[e("div",j,[e("h1",F,[u(s(t.$t("create-account"))+" ",1),p.type=="particular"?(a(),i("span",T,"PP ("+s(t.$t("pack"))+" "+s(t.$t("particular"))+")",1)):p.type=="business1"?(a(),i("span",H,"PB ("+s(t.$t("pack"))+" PRO)",1)):p.type=="business2"?(a(),i("span",J,"PB ("+s(t.$t("pack"))+" "+s(t.$t("business"))+")",1)):(a(),i("span",K,"IP ("+s(t.$t("pack"))+" "+s(t.$t("politic"))+")",1)),L]),e("p",null,s(t.$t("register-free-desc")),1),e("p",null,[u(s(t.$t("create-other-account"))+" ",1),p.type!="ip"?(a(),b(h,{key:0,to:{name:"register",params:{type:"ip"}},class:"text-primary-blue hover:underline"},{default:f(()=>[u(" IP ("+s(t.$t("pack"))+" "+s(t.$t("politic"))+") ? ",1)]),_:1})):y("",!0),p.type!="business1"?(a(),b(h,{key:1,to:{name:"register",params:{type:"business1"}},class:"text-primary-blue hover:underline"},{default:f(()=>[u(" PB ("+s(t.$t("pack"))+" PRO) ? ",1)]),_:1})):y("",!0),p.type!="particular"?(a(),b(h,{key:2,to:{name:"register",params:{type:"particular"}},class:"text-primary-blue hover:underline"},{default:f(()=>[u(" PP ("+s(t.$t("pack"))+" "+s(t.$t("particular"))+") ? ",1)]),_:1})):y("",!0)])]),e("div",G,[e("div",Q,[e("div",W,[e("h1",X,s(t.$t("register")),1),n(x)!=""?(a(),b(D,{key:0},{default:f(()=>[u(s(n(x)),1)]),_:1})):y("",!0),n(v)==2?(a(),i("div",Y,[e("p",null,s(t.$t("msg-a-register")),1)])):(a(),i("form",{key:2,onSubmit:r[8]||(r[8]=M(l=>q(),["prevent"])),class:"py-7"},[p.type=="particular"?(a(),i("span",Z,[e("div",ee,[e("span",null,[d(n(g),{class:"absolute mt-2 ml-2 h-6 w-6 text-gray-400"})]),c(e("input",{type:"text",required:"","onUpdate:modelValue":r[0]||(r[0]=l=>o.firstname=l),placeholder:t.$t("firstname"),class:"form-input mt-2 block w-full border-gray-400 px-3 pr-2 pl-10 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"},null,8,te),[[m,o.firstname]])]),e("div",se,[e("span",null,[d(n(g),{class:"absolute mt-2 ml-2 h-6 w-6 text-gray-400"})]),c(e("input",{type:"text",required:"","onUpdate:modelValue":r[1]||(r[1]=l=>o.lastname=l),placeholder:t.$t("lastname"),class:"form-input mt-2 block w-full border-gray-400 px-3 pr-2 pl-10 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"},null,8,re),[[m,o.lastname]])])])):p.type=="business1"||p.type=="business2"?(a(),i("span",le,[e("div",ae,[e("span",null,[d(n(g),{class:"absolute mt-2 ml-2 h-6 w-6 text-gray-400"})]),c(e("input",{type:"text",required:"","onUpdate:modelValue":r[2]||(r[2]=l=>o.firstname=l),placeholder:t.$t("social-reason"),class:"form-input mt-2 block w-full border-gray-400 px-3 pr-2 pl-10 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"},null,8,oe),[[m,o.firstname]])])])):(a(),i("span",ie,[e("div",ne,[e("span",null,[d(n(g),{class:"absolute mt-2 ml-2 h-6 w-6 text-gray-400"})]),c(e("input",{type:"text",required:"","onUpdate:modelValue":r[3]||(r[3]=l=>o.firstname=l),placeholder:t.$t("denomination"),class:"form-input mt-2 block w-full border-gray-400 px-3 pr-2 pl-10 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"},null,8,pe),[[m,o.firstname]])])])),e("div",ue,[e("span",null,[d(n(I),{class:"absolute mt-2 ml-2 h-6 w-6 text-gray-400"})]),c(e("input",{type:"email",required:"","onUpdate:modelValue":r[4]||(r[4]=l=>o.email=l),placeholder:t.$t("adresse")+" "+t.$t("email"),class:"form-input mt-2 block w-full border-gray-400 px-3 pr-2 pl-10 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"},null,8,de),[[m,o.email]])]),e("div",ce,[e("span",null,[d(n(V),{class:"absolute mt-2 ml-2 h-6 w-6 text-gray-400"})]),c(e("input",{type:"password",required:"","onUpdate:modelValue":r[5]||(r[5]=l=>o.password=l),placeholder:t.$t("password"),class:"form-input mt-3 block w-full border-gray-400 px-3 pr-2 pl-10 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"},null,8,me),[[m,o.password]])]),e("div",ye,[e("span",null,[d(n(V),{class:"absolute mt-2 ml-2 h-6 w-6 text-gray-400"})]),c(e("input",{type:"password",required:"","onUpdate:modelValue":r[6]||(r[6]=l=>o.password_confirmation=l),placeholder:t.$t("confirm-password"),class:"form-input mt-3 block w-full border-gray-400 px-3 pr-2 pl-10 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"},null,8,fe),[[m,o.password_confirmation]])]),e("div",he,[e("h3",be,s(t.$t("show-confidentail-politic")),1),e("p",ge,[c(e("input",{type:"checkbox",required:"","onUpdate:modelValue":r[7]||(r[7]=l=>w.value=l),class:"form-checkbox mr-2 text-primary-blue focus:ring-0"},null,512),[[N,w.value]]),u(" "+s(t.$t("confirm-confidentail-politic")),1)])]),e("div",null,[n(v)==0?(a(),i("button",we,s(t.$t("register")),1)):y("",!0),n(v)==1?(a(),i("button",xe,[ve,u(" "+s(t.$t("register"))+"... ",1)])):y("",!0)])],32))]),e("div",ke,[u(s(t.$t("already-signup"))+" ",1),d(h,{class:"text-[#242A56] hover:underline",to:{name:"login"}},{default:f(()=>[u(s(t.$t("login")),1)]),_:1})])])])])}}};export{Se as default};