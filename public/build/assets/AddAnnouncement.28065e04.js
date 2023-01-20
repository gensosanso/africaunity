import{r as _,o as B,a as M,c as l,d as i,e,t as n,g as u,k as D,w as F,h as a,P as j,m as p,l as z,j as d,K as c,f as b,Q as E,J as x,F as h,x as w,H as J,b as T}from"./app.5804264a.js";import{u as H}from"./announcementServices.0f751544.js";import{u as K}from"./categoryAnnouncementServices.6202113b.js";import{u as L}from"./currencyServices.91c9797d.js";import{u as O}from"./universityServices.b804dda6.js";import{_ as P}from"./DropZone.0b2b48cf.js";const Q={class:"mx-auto min-h-screen w-full bg-white py-4 lg:px-20 xl:w-[90%]"},R={class:"w-full space-y-4 py-5 text-center"},G={class:"text-4xl font-bold capitalize text-primary-blue"},I={class:"mx-auto w-full rounded-md bg-white p-6 shadow-xl"},W={class:"text-xl font-semibold"},X={class:"text-md font-light text-gray-700"},Y={class:"mt-4"},Z={class:"col-span-2"},ee={class:"text-gray-700"},te=e("span",{class:"text-red-500"},"*",-1),oe={class:"text-xs font-light text-gray-400"},se={class:"divSelect2 col-span-2 mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"},ne={class:"text-gray-700",for:"pt"},re=e("span",{class:"text-red-500"},"*",-1),le={class:"text-gray-700",for:"pt"},ie=e("span",{class:"text-red-500"},"*",-1),ae=["value"],de={class:"text-gray-700"},ue=e("span",{class:"text-red-500"},"*",-1),ce={class:"text-gray-700"},pe=e("span",{class:"text-red-500"},"*",-1),me={key:0},ge={class:"text-gray-700"},be=e("span",{class:"text-red-500"},"*",-1),fe={key:1},ye={class:"text-gray-700",for:"es"},_e=e("span",{class:"text-red-500"},"*",-1),xe=["value"],he={class:"text-gray-700"},we={class:"text-gray-700"},ve={class:"col-span-2 mt-4"},ke={class:"text-gray-700",for:"fr"},$e={class:"flex items-center space-x-4 py-4"},Ve={class:"col-span-2 mt-4"},Ue={class:"text-gray-700",for:"pt"},Se=e("span",{class:"text-red-500"},"*",-1),Ae={class:"mt-6"},Ce={key:0,type:"submit",class:"text-md w-full rounded bg-primary-blue px-6 py-4 leading-5 text-white focus:outline-none"},qe={key:1,type:"submit",disabled:"",class:"text-md flex w-full items-center justify-center rounded bg-blue-300 px-6 py-4 leading-5 text-white focus:outline-none"},Ee={__name:"AddAnnouncement",setup(Ne){const v=J(),f=localStorage.user?JSON.parse(localStorage.user):"",{categoryAnnouncements:k,getCategoryAnnouncements:$}=K(),{currencies:V,getCurrencies:U}=L(),{universities:S,getAllUniversities:A}=O();_(null),B(async()=>{m.value=!0,await $(),await U(),await A(),m.value=!1});const m=_(!1),o=M({title:"",user_id:f.id,description:"",price:"",image:[],adress:"",website:"",email:f.email,phone:"",category_announcement_id:"",currency_id:"",university_id:""}),{createAnnouncement:C,errors:g,loading:y}=H(),q=async()=>{await C({...o}),g.value==""&&v.push({name:"ads"})};return(r,s)=>{const N=T("Spin");return l(),i("div",Q,[e("div",R,[e("h1",G,n(r.$tc("add",2))+" "+n(r.$t("ads")),1)]),e("section",I,[u(g)!=""?(l(),D(j,{key:0},{default:F(()=>[a(n(u(g)),1)]),_:1})):p("",!0),e("h1",W,n(r.$tc("add",2))+" "+n(r.$t("ads")),1),e("h2",X,n(r.$t("good-msg-post"))+" ! ",1),e("form",{onSubmit:s[11]||(s[11]=z(t=>q(),["prevent"])),id:"announcementform",enctype:"multipart/form-data"},[e("div",Y,[e("div",Z,[e("label",ee,[a(n(r.$t("title"))+" ",1),te]),d(e("input",{required:"","onUpdate:modelValue":s[0]||(s[0]=t=>o.title=t),maxlength:"50",type:"text",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[c,o.title]]),e("span",oe,n(o.title?o.title.length:0)+" of 50 Characters",1)]),e("div",se,[e("div",null,[e("label",ne,[a(n(r.$t("university"))+" ",1),re]),b(E,{modelValue:o.university_id,"onUpdate:modelValue":s[1]||(s[1]=t=>o.university_id=t),data:u(S),placeholder:"Select University",required:!1,resetField:!0,loading:m.value,className:"w-full h-full mt-1 block rounded-md border bg-white  border-gray-300 p-2.5 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 text-sm"},null,8,["modelValue","data","loading","className"])]),e("div",null,[e("label",le,[a(n(r.$t("category"))+" ",1),ie]),d(e("select",{required:"","onUpdate:modelValue":s[2]||(s[2]=t=>o.category_announcement_id=t),name:"",id:"",class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(l(!0),i(h,null,w(u(k),t=>(l(),i("option",{key:t.id,value:t.id},n(t.name),9,ae))),128))],512),[[x,o.category_announcement_id]])]),e("div",null,[e("label",de,[a(n(r.$t("contact-phone"))+" ",1),ue]),d(e("input",{required:"","onUpdate:modelValue":s[3]||(s[3]=t=>o.phone=t),type:"text",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[c,o.phone]])]),e("div",null,[e("label",ce,[a(n(r.$t("contact-email"))+" ",1),pe]),d(e("input",{required:"","onUpdate:modelValue":s[4]||(s[4]=t=>o.email=t),type:"email",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[c,o.email]])]),o.category_announcement_id!=10?(l(),i("div",me,[e("label",ge,[a(n(r.$t("price"))+" ",1),be]),d(e("input",{required:"","onUpdate:modelValue":s[5]||(s[5]=t=>o.price=t),type:"text",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[c,o.price]])])):p("",!0),o.category_announcement_id!=10?(l(),i("div",fe,[e("label",ye,[a(n(r.$t("currency"))+" ",1),_e]),d(e("select",{required:"","onUpdate:modelValue":s[6]||(s[6]=t=>o.currency_id=t),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(l(!0),i(h,null,w(u(V),t=>(l(),i("option",{key:t.id,value:t.id},n(t.symbol+" "+t.name),9,xe))),128))],512),[[x,o.currency_id]])])):p("",!0),e("div",null,[e("label",he,n(r.$t("adresse")),1),d(e("input",{"onUpdate:modelValue":s[7]||(s[7]=t=>o.adress=t),type:"text",placeholder:"Douala Cameroon",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[c,o.adress]])]),e("div",null,[e("label",we,n(r.$t("website")),1),d(e("input",{"onUpdate:modelValue":s[8]||(s[8]=t=>o.website=t),type:"text",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[c,o.website]])])]),e("div",ve,[e("label",ke,n(r.$t("thumbnails")),1),e("div",$e,[b(P,{modelValue:o.image,"onUpdate:modelValue":s[9]||(s[9]=t=>o.image=t),multiple:!0},null,8,["modelValue"])])]),e("div",Ve,[e("label",Ue,[a(n(r.$t("description"))+" ",1),Se]),d(e("textarea",{required:"",type:"text","onUpdate:modelValue":s[10]||(s[10]=t=>o.description=t),id:"pt",class:"mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40"},`\r
                        `,512),[[c,o.description]])])]),e("div",Ae,[u(y)==0?(l(),i("button",Ce,n(r.$t("save")),1)):p("",!0),u(y)==1?(l(),i("button",qe,[b(N,{size:"small"})])):p("",!0)])],32)])])}}};export{Ee as default};
