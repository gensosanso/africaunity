import{r as x,o as B,a as D,c as n,d,e,t as a,g as u,k as F,w as M,h as l,m as g,l as R,j as i,K as c,f as O,_ as z,J as _,F as k,x as h,I as E}from"./app.04741282.js";import{E as I}from"./Error.74e5730d.js";import{u as J}from"./announcementServices.8a4494af.js";import{u as T}from"./categoryAnnouncementServices.7eacd6da.js";import{u as H}from"./currencyServices.a5320f90.js";import{u as K}from"./universityServices.c75c609b.js";import"./_plugin-vue_export-helper.cdc0426e.js";const G={class:"mx-auto min-h-screen w-full bg-white py-4 lg:px-20 xl:w-[90%]"},P={class:"w-full space-y-4 py-5 text-center"},Q={class:"text-4xl font-bold capitalize text-primary-blue"},W={class:"mx-auto w-full rounded-md bg-white p-6 shadow-xl"},X={class:"text-xl font-semibold"},Y={class:"text-md font-light text-gray-700"},Z={class:"mt-4"},ee={class:"col-span-2"},te={class:"dark:text-gray-200 text-gray-700"},re=e("span",{class:"text-red-500"},"*",-1),oe={class:"text-xs font-light text-gray-400"},se={class:"divSelect2 col-span-2 mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"},ae={class:"dark:text-gray-200 text-gray-700",for:"pt"},ne=e("span",{class:"text-red-500"},"*",-1),de={class:"dark:text-gray-200 text-gray-700",for:"pt"},le=e("span",{class:"text-red-500"},"*",-1),ie=["value"],ue={class:"dark:text-gray-200 text-gray-700"},ce=e("span",{class:"text-red-500"},"*",-1),ge={class:"dark:text-gray-200 text-gray-700"},pe=e("span",{class:"text-red-500"},"*",-1),ye={key:0},be={class:"dark:text-gray-200 text-gray-700"},me=e("span",{class:"text-red-500"},"*",-1),fe={key:1},xe={class:"dark:text-gray-200 text-gray-700",for:"es"},_e=e("span",{class:"text-red-500"},"*",-1),ke=["value"],he={class:"dark:text-gray-200 text-gray-700"},we={class:"dark:text-gray-200 text-gray-700"},ve={class:"col-span-2 mt-4"},$e={class:"dark:text-gray-200 text-gray-700",for:"fr"},Ue={class:"flex items-center space-x-4 py-4"},Ve=["src","alt"],Ce={class:"col-span-2 mt-4"},Ae={class:"dark:text-gray-200 text-gray-700",for:"pt"},qe=e("span",{class:"text-red-500"},"*",-1),Se={class:"mt-6"},Ne={key:0,type:"submit",class:"text-md w-full rounded bg-primary-blue px-6 py-4 leading-5 text-white focus:outline-none"},Le={key:1,type:"submit",disabled:"",class:"text-md flex w-full items-center justify-center rounded bg-blue-300 px-6 py-4 leading-5 text-white focus:outline-none"},je=e("svg",{class:"h-5 w-5 animate-spin text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),e("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),Ie={__name:"AddAnnouncement",setup(Be){const w=E(),b=localStorage.user?JSON.parse(localStorage.user):"",{categoryAnnouncements:v,getCategoryAnnouncements:$}=T(),{currencies:U,getCurrencies:V}=H(),{universities:C,getAllUniversities:A}=K(),m=x(null);B(async()=>{p.value=!0,await $(),await V(),await A(),p.value=!1});const p=x(!1),t=D({title:"",user_id:b.id,description:"",price:"",image:"",adress:"",website:"",email:b.email,phone:"",category_announcement_id:"",currency_id:"",university_id:""}),{createAnnouncement:q,errors:y,loading:f}=J(),S=async()=>{let r=new FormData;r.append("image",t.image),r.append("title",t.title),r.append("description",t.description),r.append("price",t.price),r.append("adress",t.adress),r.append("website",t.website),r.append("email",t.email),r.append("phone",t.phone),r.append("user_id",t.user_id),r.append("category_announcement_id",t.category_announcement_id),r.append("currency_id",t.currency_id),r.append("university_id",t.university_id),await q(r),y.value==""&&w.push({name:"ads"})},N=()=>{t.image=m.value.files[0]};function L(r){return URL.createObjectURL(r)}function j(r){return URL.revokeObjectURL(r)}return(r,s)=>(n(),d("div",G,[e("div",P,[e("h1",Q,a(r.$tc("add",2))+" "+a(r.$t("ads")),1)]),e("section",W,[u(y)!=""?(n(),F(I,{key:0},{default:M(()=>[l(a(u(y)),1)]),_:1})):g("",!0),e("h1",X,a(r.$tc("add",2))+" "+a(r.$t("ads")),1),e("h2",Y,a(r.$t("good-msg-post"))+" ! ",1),e("form",{onSubmit:s[12]||(s[12]=R(o=>S(),["prevent"])),id:"announcementform",enctype:"multipart/form-data"},[e("div",Z,[e("div",ee,[e("label",te,[l(a(r.$t("title"))+" ",1),re]),i(e("input",{required:"","onUpdate:modelValue":s[0]||(s[0]=o=>t.title=o),maxlength:"50",type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[c,t.title]]),e("span",oe,a(t.title?t.title.length:0)+" of 50 Characters",1)]),e("div",se,[e("div",null,[e("label",ae,[l(a(r.$t("university"))+" ",1),ne]),O(z,{modelValue:t.university_id,"onUpdate:modelValue":s[1]||(s[1]=o=>t.university_id=o),data:u(C),placeholder:"Select University",required:!1,resetField:!0,loading:p.value,className:"w-full h-full mt-1 block rounded-md border bg-white  border-gray-300 p-2.5 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 text-sm"},null,8,["modelValue","data","loading","className"])]),e("div",null,[e("label",de,[l(a(r.$t("category"))+" ",1),le]),i(e("select",{required:"","onUpdate:modelValue":s[2]||(s[2]=o=>t.category_announcement_id=o),name:"",id:"",class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(n(!0),d(k,null,h(u(v),o=>(n(),d("option",{key:o.id,value:o.id},a(o.name),9,ie))),128))],512),[[_,t.category_announcement_id]])]),e("div",null,[e("label",ue,[l(a(r.$t("contact-phone"))+" ",1),ce]),i(e("input",{required:"","onUpdate:modelValue":s[3]||(s[3]=o=>t.phone=o),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[c,t.phone]])]),e("div",null,[e("label",ge,[l(a(r.$t("contact-email"))+" ",1),pe]),i(e("input",{required:"","onUpdate:modelValue":s[4]||(s[4]=o=>t.email=o),type:"email",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[c,t.email]])]),t.category_announcement_id!=10?(n(),d("div",ye,[e("label",be,[l(a(r.$t("price"))+" ",1),me]),i(e("input",{required:"","onUpdate:modelValue":s[5]||(s[5]=o=>t.price=o),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[c,t.price]])])):g("",!0),t.category_announcement_id!=10?(n(),d("div",fe,[e("label",xe,[l(a(r.$t("currency"))+" ",1),_e]),i(e("select",{required:"","onUpdate:modelValue":s[6]||(s[6]=o=>t.currency_id=o),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(n(!0),d(k,null,h(u(U),o=>(n(),d("option",{key:o.id,value:o.id},a(o.symbol+" "+o.name),9,ke))),128))],512),[[_,t.currency_id]])])):g("",!0),e("div",null,[e("label",he,a(r.$t("adresse")),1),i(e("input",{"onUpdate:modelValue":s[7]||(s[7]=o=>t.adress=o),type:"text",placeholder:"Douala Cameroon",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[c,t.adress]])]),e("div",null,[e("label",we,a(r.$t("website")),1),i(e("input",{"onUpdate:modelValue":s[8]||(s[8]=o=>t.website=o),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[c,t.website]])])]),e("div",ve,[e("label",$e,a(r.$t("thumbnails")),1),e("div",Ue,[t.image?(n(),d("img",{key:0,src:typeof t.image=="string"?t.image:L(t.image),onLoad:s[9]||(s[9]=o=>typeof t.image=="string"?"":j(t.image)),class:"h-16 w-16 rounded-full",alt:t.title},null,40,Ve)):g("",!0),e("input",{ref_key:"file",ref:m,onChange:s[10]||(s[10]=o=>N()),type:"file",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,544)])]),e("div",Ce,[e("label",Ae,[l(a(r.$t("description"))+" ",1),qe]),i(e("textarea",{required:"",type:"text","onUpdate:modelValue":s[11]||(s[11]=o=>t.description=o),id:"pt",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40"},`\r
                        `,512),[[c,t.description]])])]),e("div",Se,[u(f)==0?(n(),d("button",Ne,a(r.$t("save")),1)):g("",!0),u(f)==1?(n(),d("button",Le,[l(a(r.$t("save"))+"... ",1),je])):g("",!0)])],32)])]))}};export{Ie as default};