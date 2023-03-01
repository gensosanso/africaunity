import{o as h,a as y,r as p,c as o,d as l,e as s,t as r,k as w,w as x,h as m,P as v,m as c,l as _,f as b,g as k,j as $,K as M,H as S,n as V}from"./app.19df3b2f.js";import{r as B}from"./EnvelopeIcon.c3d35d76.js";const C={class:"mx-auto w-full items-center justify-center bg-white px-2 py-8 md:space-x-6 md:px-12 lg:flex xl:w-[90%]"},N={class:"p-6"},j={class:"shadow"},F={class:"px-6 py-6"},z={class:"text-center text-3xl font-bold text-[#242A56]"},A={key:1,class:"mx-8 mt-2 bg-green-50 py-4 px-2 text-green-700"},D={class:"text-sm font-light"},E={class:"relative"},H=["placeholder"],P={key:0,type:"submit",class:"mt-6 w-full bg-primary-blue px-8 py-2 text-lg text-white"},T={key:1,disabled:"",type:"submit",class:"mt-6 inline-flex w-full cursor-wait items-center justify-center bg-blue-300 px-8 py-2 text-lg text-white"},q=s("svg",{class:"mr-3 h-5 w-5 animate-spin text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[s("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),s("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),R={__name:"ForgotPassword",setup(J){const f=S(),u=localStorage.user?JSON.parse(localStorage.user):"";h(async()=>{localStorage.token&&f.push({name:"compte",params:{slug:u.slug,id:u.id}})});const n=y({email:""}),i=p(""),t=p(0),g=async()=>{try{i.value="",t.value=1,await V.post("/api/forgot-password",n),t.value=2}catch(e){if(t.value=0,e.response.status==422)for(const a in e.response.data.errors)errorsWM.value+=e.response.data.errors[a][0]+`
`;else e.response.status==401&&(i.value=e.response.data.message)}};return(e,a)=>(o(),l("div",C,[s("div",N,[s("div",j,[s("div",F,[s("h1",z,r(e.$t("password-forgot")),1),i.value!=""?(o(),w(v,{key:0},{default:x(()=>[m(r(i.value),1)]),_:1})):c("",!0),t.value==2?(o(),l("div",A,[s("p",null,r(e.$t("msg-sucess-send-Fp")),1)])):(o(),l("form",{key:2,onSubmit:a[1]||(a[1]=_(d=>g(),["prevent"])),class:"py-7"},[s("p",D,r(e.$t("write-email")),1),s("div",E,[s("span",null,[b(k(B),{class:"absolute mt-2 ml-2 h-6 w-6 text-gray-400"})]),$(s("input",{type:"email",required:"","onUpdate:modelValue":a[0]||(a[0]=d=>n.email=d),placeholder:e.$t("adresse")+" "+e.$t("email"),class:"form-input mt-2 block w-full border-gray-400 px-3 pr-2 pl-10 placeholder:text-gray-400 focus:border-primary-blue focus:ring-primary-blue"},null,8,H),[[M,n.email]])]),s("div",null,[t.value==0?(o(),l("button",P,r(e.$t("send")),1)):c("",!0),t.value==1?(o(),l("button",T,[q,m(" "+r(e.$t("send"))+"... ",1)])):c("",!0)])],32))])])])]))}};export{R as default};