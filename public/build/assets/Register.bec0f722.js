import{r as _,o as A,a as D,c as l,d as n,e,h as u,t as s,k as d,w as h,m as y,f as c,g as o,P as R,l as j,j as m,K as f,W as q,V as O,L as E,H as F,b as H}from"./app.5804264a.js";import{u as I}from"./authServices.15727c6d.js";import{r as v}from"./UserIcon.e62a5892.js";import{r as T}from"./EnvelopeIcon.43708db9.js";import{r as B}from"./LockClosedIcon.bef86cf2.js";import{r as U}from"./EyeIcon.248c7c12.js";import{r as S}from"./EyeSlashIcon.2b9c7332.js";const J={class:"mx-auto min-h-screen w-full items-center justify-center bg-white px-2 py-8 md:space-x-6 md:px-12 lg:flex xl:w-[90%]"},K={class:"space-y-6 text-center lg:w-[60%] lg:text-left"},L={class:"text-4xl font-bold text-primary-blue lg:text-5xl"},W={key:0},G={key:1},Q={key:2},X={key:3},Y=E('<svg xmlns="http://www.w3.org/2000/svg" class="inline h-10 w-10" viewBox="0 0 36 36"><circle fill="#FFCC4D" cx="18" cy="18" r="18"></circle><path fill="#664500" d="M10.515 23.621C10.56 23.8 11.683 28 18 28c6.318 0 7.44-4.2 7.485-4.379.055-.217-.043-.442-.237-.554-.195-.111-.439-.078-.6.077C24.629 23.163 22.694 25 18 25s-6.63-1.837-6.648-1.855C11.256 23.05 11.128 23 11 23c-.084 0-.169.021-.246.064-.196.112-.294.339-.239.557z"></path><ellipse fill="#664500" cx="12" cy="13.5" rx="2.5" ry="3.5"></ellipse><ellipse fill="#664500" cx="24" cy="13.5" rx="2.5" ry="3.5"></ellipse></svg>',1),Z={class:"p-6 lg:w-[40%]"},ee={class:"border-t-8 border-primary-blue shadow"},te={class:"md:text-md h-16 p-4 text-center text-sm text-gray-500"},se={class:"px-6 py-2"},re={class:"text-center text-3xl font-bold text-[#242A56]"},le={key:1,class:"py-4"},ae={key:0},oe={class:"relative"},ie=["placeholder"],ne={class:"relative"},pe=["placeholder"],ue={key:1},de={class:"relative"},ce=["placeholder"],me={key:2},ye={class:"relative"},he=["placeholder"],fe={class:"relative"},be=["placeholder"],ge={class:"relative"},we=["type","placeholder"],ve={class:"relative"},xe=["type","placeholder"],ke={class:"mt-10"},$e={class:"text-primary-blue hover:underline"},_e={class:"text-left text-gray-400"},Ve={key:0,type:"submit",class:"mt-6 w-full bg-primary-blue px-8 py-2 text-lg text-white"},Ce={key:1,disabled:"",type:"submit",class:"mt-6 inline-flex w-full cursor-wait items-center justify-center bg-blue-300 px-8 py-2 text-lg text-white"},Pe=e("svg",{class:"mr-3 h-5 w-5 animate-spin text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),e("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),Ae={__name:"Register",props:{type:{required:!0,type:String}},setup(p){const V=p,C=F(),b=_(!1),g=_(!1),P=localStorage.user?JSON.parse(localStorage.user):"";A(async()=>{M.includes(V.type)||C.push({name:"pack"}),localStorage.token&&C.push({name:"compte",params:{slug:P.slug,id:P.id}})});const x=_(!1),M=["particular","ip","business1","business2"],i=D({firstname:"",lastname:"",email:"",password:"",password_confirmation:"",type:V.type}),{createUser:N,errors:k,loading:$}=I(),z=async()=>{x?await N({...i}):k.value="Veillez accepter notre politique de confidentialit\xE9"};return(t,r)=>{const w=H("router-link");return l(),n("div",J,[e("div",K,[e("h1",L,[u(s(t.$t("create-account"))+" ",1),p.type=="particular"?(l(),n("span",W,"PP ("+s(t.$t("pack"))+" "+s(t.$t("particular"))+")",1)):p.type=="business1"?(l(),n("span",G,"PB ("+s(t.$t("pack"))+" PRO)",1)):p.type=="business2"?(l(),n("span",Q,"PB ("+s(t.$t("pack"))+" "+s(t.$t("business"))+")",1)):(l(),n("span",X,"IP ("+s(t.$t("pack"))+" "+s(t.$t("politic"))+")",1)),Y]),e("p",null,s(t.$t("register-free-desc")),1),e("p",null,[u(s(t.$t("create-other-account"))+" ",1),p.type!="ip"?(l(),d(w,{key:0,to:{name:"register",params:{type:"ip"}},class:"text-primary-blue hover:underline"},{default:h(()=>[u(" IP ("+s(t.$t("pack"))+" "+s(t.$t("politic"))+") ? ",1)]),_:1})):y("",!0),p.type!="business1"?(l(),d(w,{key:1,to:{name:"register",params:{type:"business1"}},class:"text-primary-blue hover:underline"},{default:h(()=>[u(" PB ("+s(t.$t("pack"))+" PRO) ? ",1)]),_:1})):y("",!0),p.type!="particular"?(l(),d(w,{key:2,to:{name:"register",params:{type:"particular"}},class:"text-primary-blue hover:underline"},{default:h(()=>[u(" PP ("+s(t.$t("pack"))+" "+s(t.$t("particular"))+") ? ",1)]),_:1})):y("",!0)])]),e("div",Z,[e("div",ee,[e("div",te,[u(s(t.$t("already-signup"))+" ",1),c(w,{class:"text-[#242A56] hover:underline",to:{name:"login"}},{default:h(()=>[u(s(t.$t("login")),1)]),_:1})]),e("div",se,[e("h1",re,s(t.$t("register")),1),o(k)!=""?(l(),d(R,{key:0},{default:h(()=>[u(s(o(k)),1)]),_:1})):y("",!0),o($)==2?(l(),n("div",le,[e("p",null,s(t.$t("msg-a-register")),1)])):(l(),n("form",{key:2,onSubmit:r[10]||(r[10]=j(a=>z(),["prevent"])),class:"py-7"},[p.type=="particular"?(l(),n("span",ae,[e("div",oe,[e("span",null,[c(o(v),{class:"absolute mt-2 ml-2 h-6 w-6 text-gray-400"})]),m(e("input",{type:"text",required:"","onUpdate:modelValue":r[0]||(r[0]=a=>i.firstname=a),placeholder:t.$t("firstname"),class:"form-input mt-2 block w-full border-gray-400 px-3 pr-2 pl-10 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"},null,8,ie),[[f,i.firstname]])]),e("div",ne,[e("span",null,[c(o(v),{class:"absolute mt-2 ml-2 h-6 w-6 text-gray-400"})]),m(e("input",{type:"text",required:"","onUpdate:modelValue":r[1]||(r[1]=a=>i.lastname=a),placeholder:t.$t("lastname"),class:"form-input mt-2 block w-full border-gray-400 px-3 pr-2 pl-10 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"},null,8,pe),[[f,i.lastname]])])])):p.type=="business1"||p.type=="business2"?(l(),n("span",ue,[e("div",de,[e("span",null,[c(o(v),{class:"absolute mt-2 ml-2 h-6 w-6 text-gray-400"})]),m(e("input",{type:"text",required:"","onUpdate:modelValue":r[2]||(r[2]=a=>i.firstname=a),placeholder:t.$t("social-reason"),class:"form-input mt-2 block w-full border-gray-400 px-3 pr-2 pl-10 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"},null,8,ce),[[f,i.firstname]])])])):(l(),n("span",me,[e("div",ye,[e("span",null,[c(o(v),{class:"absolute mt-2 ml-2 h-6 w-6 text-gray-400"})]),m(e("input",{type:"text",required:"","onUpdate:modelValue":r[3]||(r[3]=a=>i.firstname=a),placeholder:t.$t("denomination"),class:"form-input mt-2 block w-full border-gray-400 px-3 pr-2 pl-10 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"},null,8,he),[[f,i.firstname]])])])),e("div",fe,[e("span",null,[c(o(T),{class:"absolute mt-2 ml-2 h-6 w-6 text-gray-400"})]),m(e("input",{type:"email",required:"","onUpdate:modelValue":r[4]||(r[4]=a=>i.email=a),placeholder:t.$t("adresse")+" "+t.$t("email"),class:"form-input mt-2 block w-full border-gray-400 px-3 pr-2 pl-10 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"},null,8,be),[[f,i.email]])]),e("div",ge,[e("span",null,[c(o(B),{class:"absolute mt-2 ml-2 h-6 w-6 text-gray-400"})]),m(e("input",{type:b.value?"text":"password",required:"","onUpdate:modelValue":r[5]||(r[5]=a=>i.password=a),placeholder:t.$t("password"),class:"form-input mt-3 block w-full border-gray-400 px-3 pr-2 pl-10 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"},null,8,we),[[q,i.password]]),e("span",{onClick:r[6]||(r[6]=a=>b.value=!b.value),class:"cursor-pointer"},[b.value?(l(),d(o(S),{key:1,class:"absolute right-2 top-2 h-6 w-6 text-primary-blue"})):(l(),d(o(U),{key:0,class:"absolute right-2 top-2 h-6 w-6 text-gray-400"}))])]),e("div",ve,[e("span",null,[c(o(B),{class:"absolute mt-2 ml-2 h-6 w-6 text-gray-400"})]),m(e("input",{type:g.value?"text":"password",required:"","onUpdate:modelValue":r[7]||(r[7]=a=>i.password_confirmation=a),placeholder:t.$t("confirm-password"),class:"form-input mt-3 block w-full border-gray-400 px-3 pr-2 pl-10 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"},null,8,xe),[[q,i.password_confirmation]]),e("span",{onClick:r[8]||(r[8]=a=>g.value=!g.value),class:"cursor-pointer"},[g.value?(l(),d(o(S),{key:1,class:"absolute right-2 top-2 h-6 w-6 text-primary-blue"})):(l(),d(o(U),{key:0,class:"absolute right-2 top-2 h-6 w-6 text-gray-400"}))])]),e("div",ke,[e("h3",$e,s(t.$t("show-confidentail-politic")),1),e("p",_e,[m(e("input",{type:"checkbox",required:"","onUpdate:modelValue":r[9]||(r[9]=a=>x.value=a),class:"form-checkbox mr-2 text-primary-blue focus:ring-0"},null,512),[[O,x.value]]),u(" "+s(t.$t("confirm-confidentail-politic")),1)])]),e("div",null,[o($)==0?(l(),n("button",Ve,s(t.$t("register")),1)):y("",!0),o($)==1?(l(),n("button",Ce,[Pe,u(" "+s(t.$t("register"))+"... ",1)])):y("",!0)])],32))])])])])}}};export{Ae as default};
