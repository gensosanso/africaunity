import{b as y,d as g,r as u,o,f as l,g as s,t as r,c as w,w as x,i as m,m as c,l as v,a as _,h as b,k,K as $,I as M,n as S}from"./app.55978ff3.js";import{E as V}from"./Error.0d032b49.js";import{r as B}from"./MailIcon.c91f4f82.js";import"./_plugin-vue_export-helper.cdc0426e.js";const C={class:"mx-auto w-full items-center justify-center bg-white px-2 py-8 md:space-x-6 md:px-12 lg:flex xl:w-[90%]"},N={class:"p-6"},E={class:"shadow"},F={class:"px-6 py-6"},j={class:"text-center text-3xl font-bold text-[#242A56]"},z={key:1,class:"mx-8 mt-2 bg-green-50 py-4 px-2 text-green-700"},A={class:"text-sm font-light"},D={class:"relative"},T=["placeholder"],q={key:0,type:"submit",class:"mt-6 w-full bg-primary-blue px-8 py-2 text-lg text-white"},H={key:1,disabled:"",type:"submit",class:"mt-6 inline-flex w-full cursor-wait items-center justify-center bg-blue-300 px-8 py-2 text-lg text-white"},I=s("svg",{class:"mr-3 h-5 w-5 animate-spin text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[s("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),s("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),U={__name:"ForgotPassword",setup(J){const f=M(),p=localStorage.user?JSON.parse(localStorage.user):"";y(async()=>{localStorage.token&&f.push({name:"compte",params:{name:p.firstname,id:p.id}})});const n=g({email:""}),i=u(""),t=u(0),h=async()=>{try{i.value="",t.value=1;let e=await S.post("/api/send-reset-password/",n);t.value=2}catch(e){if(t.value=0,e.response.status==422)for(const a in e.response.data.errors)errorsWM.value+=e.response.data.errors[a][0]+`
`;else e.response.status==401&&(i.value=e.response.data.message)}};return(e,a)=>(o(),l("div",C,[s("div",N,[s("div",E,[s("div",F,[s("h1",j,r(e.$t("password-forgot")),1),i.value!=""?(o(),w(V,{key:0},{default:x(()=>[m(r(i.value),1)]),_:1})):c("",!0),t.value==2?(o(),l("div",z,[s("p",null,r(e.$t("msg-sucess-send-Fp")),1)])):(o(),l("form",{key:2,onSubmit:a[1]||(a[1]=v(d=>h(),["prevent"])),class:"py-7"},[s("p",A,r(e.$t("write-email")),1),s("div",D,[s("span",null,[_(b(B),{class:"absolute mt-2 ml-2 h-6 w-6 text-gray-400"})]),k(s("input",{type:"email",required:"","onUpdate:modelValue":a[0]||(a[0]=d=>n.email=d),placeholder:e.$t("adresse")+" "+e.$t("email"),class:"form-input mt-2 block w-full border-gray-400 px-3 pr-2 pl-10 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"},null,8,T),[[$,n.email]])]),s("div",null,[t.value==0?(o(),l("button",q,r(e.$t("send")),1)):c("",!0),t.value==1?(o(),l("button",H,[I,m(" "+r(e.$t("send"))+"... ",1)])):c("",!0)])],32))])])])]))}};export{U as default};
