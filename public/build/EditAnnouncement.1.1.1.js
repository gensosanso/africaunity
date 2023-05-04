import{r as b,o as T,c as i,d as a,e,t as n,g as o,k as h,w as H,h as d,P as I,m,l as J,j as u,K as c,f as y,J as w,F as k,x as V,H as K,b as $}from"./app.1.1.1.js";import{u as L}from"./announcementServices.1.1.1.js";import{u as P}from"./categoryAnnouncementServices.1.1.1.js";import{u as R}from"./currencyServices.1.1.1.js";import{u as G}from"./universityServices.1.1.1.js";import{_ as O}from"./DropZone.1.1.1.js";import{_ as Q}from"./RichText.1.1.1.js";const W={class:"mx-auto min-h-screen w-full bg-white py-4 lg:px-20 xl:w-[90%]"},X={class:"w-full space-y-4 py-5 text-center"},Y={class:"text-4xl font-bold capitalize text-primary-blue"},Z={class:"mx-auto w-full rounded-md bg-white p-6 shadow-xl"},ee={class:"text-xl font-semibold"},te={class:"text-md font-light text-gray-700"},oe={class:"mt-4"},se={class:"col-span-2"},le={class:"text-gray-700"},ne=e("span",{class:"text-red-500"},"*",-1),re={class:"text-xs font-light text-gray-400"},ie={class:"divSelect2 col-span-2 mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"},ae={class:"text-gray-700",for:"pt"},de=e("span",{class:"text-red-500"},"*",-1),ue={class:"text-gray-700",for:"pt"},ce=e("span",{class:"text-red-500"},"*",-1),me=["value"],pe={class:"text-gray-700"},ge=e("span",{class:"text-red-500"},"*",-1),fe={class:"text-gray-700"},be=e("span",{class:"text-red-500"},"*",-1),ye={key:0},_e={class:"text-gray-700"},ve=e("span",{class:"text-red-500"},"*",-1),xe={key:1},he={class:"text-gray-700",for:"es"},we=e("span",{class:"text-red-500"},"*",-1),ke=["value"],Ve={class:"text-gray-700"},$e={class:"text-gray-700"},Ue={class:"col-span-2 mt-4"},Ce={class:"text-gray-700",for:"fr"},Se={class:"flex items-center space-x-4 py-4"},Ae={class:"col-span-2 mt-4"},qe={class:"text-gray-700",for:"pt"},Ne=e("span",{class:"text-red-500"},"*",-1),Fe={class:"mt-6"},Be={key:0,type:"submit",class:"text-md w-full rounded bg-primary-blue px-6 py-4 leading-5 text-white focus:outline-none"},Me={key:1,type:"submit",disabled:"",class:"text-md flex w-full items-center justify-center rounded bg-blue-300 px-6 py-4 leading-5 text-white focus:outline-none"},Je={__name:"EditAnnouncement",props:{id:{required:!0,type:String}},setup(U){const _=U,C=K(),p=b([]),v=b(0),{updateAnnouncement:S,getAnnouncement:A,announcement:s,errors:g,loading:x}=L(),{categoryAnnouncements:q,getCategoryAnnouncements:N}=P(),{currencies:F,getCurrencies:B}=R(),{universities:M,getAllUniversities:D}=G(),f=b(!1);T(async()=>{f.value=!0,await A(_.id),v.value++,p.value=s.value.image,await B(),await N();let r=s.value.university_id;await D(),s.value.university_id="0",s.value.university_id=r,f.value=!1}),s.value.image="";const E=async()=>{await S({...s.value},_.id),g.value==""&&C.push({name:"ads"})};return(r,l)=>{const j=$("SelectFilter"),z=$("Spin");return i(),a("div",W,[e("div",X,[e("h1",Y,n(r.$t("edit"))+" "+n(r.$t("ads")),1)]),e("section",Z,[o(g)!=""?(i(),h(I,{key:0},{default:H(()=>[d(n(o(g)),1)]),_:1})):m("",!0),e("h1",ee,n(r.$t("edit"))+" "+n(r.$t("ads")),1),e("h2",te,n(r.$t("good-msg-post"))+" ! ",1),e("form",{onSubmit:l[11]||(l[11]=J(t=>E(),["prevent"])),id:"announcementform",enctype:"multipart/form-data"},[e("div",oe,[e("div",se,[e("label",le,[d(n(r.$t("title"))+" ",1),ne]),u(e("input",{required:"","onUpdate:modelValue":l[0]||(l[0]=t=>o(s).title=t),maxlength:"50",type:"text",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[c,o(s).title]]),e("span",re,n(o(s).title?o(s).title.length:0)+" of 50 Characters",1)]),e("div",ie,[e("div",null,[e("label",ae,[d(n(r.$t("university"))+" ",1),de]),y(j,{modelValue:o(s).university_id,"onUpdate:modelValue":l[1]||(l[1]=t=>o(s).university_id=t),data:o(M),placeholder:"Select University",required:!1,resetField:!0,loading:f.value,className:"w-full h-full mt-1 block rounded-md border bg-white  border-gray-300 p-2.5 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 text-sm"},null,8,["modelValue","data","loading","className"])]),e("div",null,[e("label",ue,[d(n(r.$t("category"))+" ",1),ce]),u(e("select",{required:"","onUpdate:modelValue":l[2]||(l[2]=t=>o(s).category_announcement_id=t),name:"",id:"",class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(i(!0),a(k,null,V(o(q),t=>(i(),a("option",{key:t.id,value:t.id},n(t.name),9,me))),128))],512),[[w,o(s).category_announcement_id]])]),e("div",null,[e("label",pe,[d(n(r.$t("contact-phone"))+" ",1),ge]),u(e("input",{required:"","onUpdate:modelValue":l[3]||(l[3]=t=>o(s).phone=t),type:"text",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[c,o(s).phone]])]),e("div",null,[e("label",fe,[d(n(r.$t("contact-email"))+" ",1),be]),u(e("input",{required:"","onUpdate:modelValue":l[4]||(l[4]=t=>o(s).email=t),type:"email",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[c,o(s).email]])]),o(s).category_announcement_id!=10?(i(),a("div",ye,[e("label",_e,[d(n(r.$t("price"))+" ",1),ve]),u(e("input",{required:"","onUpdate:modelValue":l[5]||(l[5]=t=>o(s).price=t),type:"text",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[c,o(s).price]])])):m("",!0),o(s).category_announcement_id!=10?(i(),a("div",xe,[e("label",he,[d(n(r.$t("currency"))+" ",1),we]),u(e("select",{required:"","onUpdate:modelValue":l[6]||(l[6]=t=>o(s).currency_id=t),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(i(!0),a(k,null,V(o(F),t=>(i(),a("option",{key:t.id,value:t.id},n(t.symbol+" "+t.name),9,ke))),128))],512),[[w,o(s).currency_id]])])):m("",!0),e("div",null,[e("label",Ve,n(r.$t("adresse")),1),u(e("input",{"onUpdate:modelValue":l[7]||(l[7]=t=>o(s).adress=t),placeholder:"Douala Cameroon",type:"text",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[c,o(s).adress]])]),e("div",null,[e("label",$e,n(r.$t("website")),1),u(e("input",{"onUpdate:modelValue":l[8]||(l[8]=t=>o(s).website=t),type:"text",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[c,o(s).website]])])]),e("div",Ue,[e("label",Ce,n(r.$t("thumbnails")),1),e("div",Se,[y(O,{modelValue:p.value,"onUpdate:modelValue":l[9]||(l[9]=t=>p.value=t),multiple:!0},null,8,["modelValue"])])]),e("div",Ae,[e("label",qe,[d(n(r.$t("description"))+" ",1),Ne]),(i(),h(Q,{key:v.value,modelValue:o(s).description,"onUpdate:modelValue":l[10]||(l[10]=t=>o(s).description=t)},null,8,["modelValue"]))])]),e("div",Fe,[o(x)==0?(i(),a("button",Be,n(r.$t("save")),1)):m("",!0),o(x)==1?(i(),a("button",Me,[y(z,{size:"small"})])):m("",!0)])],32)])])}}};export{Je as default};
