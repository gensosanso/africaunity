import{a as V,r as y,o as $,p as C,c as a,d as n,e,t as i,k as q,w as h,h as d,P as B,m as c,f as u,l as N,g as f,j as x,K as v,N as P,b as M}from"./app.a6e0b7af.js";import{r as _}from"./LockClosedIcon.3edb1623.js";const j={class:"mx-auto w-full items-center justify-center bg-white px-2 py-8 md:space-x-6 md:px-12 lg:flex xl:w-[90%]"},A={class:"p-6"},S={class:"shadow"},z={class:"px-6 py-6"},D={class:"text-center text-3xl font-bold text-[#242A56]"},E={key:1,class:"mx-8 mt-2 bg-green-50 py-4 px-2 text-green-700"},R=d(" Password changed successfully "),T={class:"relative"},U=["placeholder"],H={class:"relative"},K=["placeholder"],F={key:0,type:"submit",class:"mt-6 w-full bg-primary-blue px-8 py-2 text-lg text-white"},G={key:1,disabled:"",type:"submit",class:"mt-6 inline-flex w-full cursor-wait items-center justify-center bg-blue-300 px-8 py-2 text-lg text-white"},I=e("svg",{class:"mr-3 h-5 w-5 animate-spin text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),e("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),O={__name:"ResetPassword",props:{token:{required:!0,type:String}},setup(g){const m=g,w=P(),o=V({email:"",password:"",password_confirmation:"",token:m.token}),l=y(""),r=y(0);$(async()=>{m.token&&"email"in w.query?o.email=w.query.email:C.push({name:"home"})});const b=async()=>{try{l.value="",r.value=1,await axios.post("/api/reset-password",o),r.value=2}catch(s){if(r.value=0,s.response.status==422)for(const t in s.response.data.errors)l.value+=s.response.data.errors[t][0]+`
`;else l.value=s.response.data.message}};return(s,t)=>{const k=M("router-link");return a(),n("div",j,[e("div",A,[e("div",S,[e("div",z,[e("h1",D,i(s.$t("change-password")),1),l.value!=""?(a(),q(B,{key:0},{default:h(()=>[d(i(l.value),1)]),_:1})):c("",!0),r.value==2?(a(),n("div",E,[e("p",null,[R,u(k,{class:"text-[#242A56] hover:underline",to:{name:"login"}},{default:h(()=>[d(i(s.$t("login")),1)]),_:1})])])):(a(),n("form",{key:2,onSubmit:t[2]||(t[2]=N(p=>b(),["prevent"])),class:"py-7"},[e("div",T,[e("span",null,[u(f(_),{class:"absolute mt-2 ml-2 h-6 w-6 text-gray-400"})]),x(e("input",{type:"password",required:"","onUpdate:modelValue":t[0]||(t[0]=p=>o.password=p),placeholder:s.$t("new-password"),class:"form-input mt-3 block w-full border-gray-400 px-3 pr-2 pl-10 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"},null,8,U),[[v,o.password]])]),e("div",H,[e("span",null,[u(f(_),{class:"absolute mt-2 ml-2 h-6 w-6 text-gray-400"})]),x(e("input",{type:"password",required:"","onUpdate:modelValue":t[1]||(t[1]=p=>o.password_confirmation=p),placeholder:s.$t("confirm-password"),class:"form-input mt-3 block w-full border-gray-400 px-3 pr-2 pl-10 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"},null,8,K),[[v,o.password_confirmation]])]),e("div",null,[r.value==0?(a(),n("button",F,i(s.$t("update")),1)):c("",!0),r.value==1?(a(),n("button",G,[I,d(" "+i(s.$t("update"))+"... ",1)])):c("",!0)])],32))])])])])}}};export{O as default};
