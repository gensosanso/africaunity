import{o as E,G as U,c as n,d as a,e,g as o,k as B,w as M,h as N,t as u,P as Z,m as i,l as j,j as d,K as l,J as f,F as m,x,f as q,b as F}from"./app.1.1.1.js";import{u as D}from"./countryServices.1.1.1.js";import{u as P}from"./continentServices.1.1.1.js";import{u as T}from"./zoneServices.1.1.1.js";const G={class:"relative min-h-screen w-full bg-white xl:mt-0 xl:p-4"},J={class:"z-0 h-full w-full p-4"},K=e("div",{class:"flex justify-between bg-white px-8 py-5"},[e("h1",{class:"text-4xl font-bold text-primary-blue"}," Edit Country ")],-1),L={class:"mx-auto bg-white p-6"},$=e("h2",{class:"text-md font-light text-gray-700"},"Edit a country",-1),A={class:"mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"},H={class:"col-span-2"},I=e("label",{class:"dark:text-gray-200 text-gray-700",for:"fr"},"Country Code",-1),O=e("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Continent ",-1),Q=["value"],R={class:""},W=e("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Zone ",-1),X=["value"],Y={key:1,value:"null"},ee=e("label",{class:"dark:text-gray-200 text-gray-700",for:"fr"},"French",-1),te=e("label",{class:"dark:text-gray-200 text-gray-700",for:"en"},"English",-1),oe=e("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Espa\xF1ol",-1),re=e("label",{class:"dark:text-gray-200 text-gray-700",for:"pt"},"Portugu\xEAs",-1),se={class:"mt-6 flex justify-end"},ne={key:0,type:"submit",class:"rounded bg-primary-blue px-6 py-2 leading-5 text-white focus:outline-none"},ae={key:1,type:"submit",disabled:"",class:"rounded bg-blue-300 px-6 py-2 leading-5 text-white focus:outline-none"},ce={__name:"CountryEdit",props:{id:{required:!0,type:String}},setup(_){const c=_,{continents:k,getContinents:h}=P(),{zones:w,getZones:v}=T(),{updateCountry:C,getCountry:V,errors:g,loading:b,country:s}=D();E(async()=>{await V(c.id),await h(),await v()});const S=async()=>{await C(c.id)},y=U(()=>w.value.filter(p=>{var r;return p.continent_id==((r=s==null?void 0:s.value.zone)==null?void 0:r.continent_id)}));return(p,r)=>{const z=F("Spin");return n(),a("div",G,[e("div",J,[K,e("section",L,[o(g)!=""?(n(),B(Z,{key:0},{default:M(()=>[N(u(o(g)),1)]),_:1})):i("",!0),$,e("form",{onSubmit:r[7]||(r[7]=j(t=>S(),["prevent"]))},[e("div",A,[e("div",H,[I,d(e("input",{id:"fr","onUpdate:modelValue":r[0]||(r[0]=t=>o(s).code_iso=t),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[l,o(s).code_iso]])]),e("div",null,[O,o(s).zone?d((n(),a("select",{key:0,required:"","onUpdate:modelValue":r[1]||(r[1]=t=>o(s).zone.continent_id=t),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(n(!0),a(m,null,x(o(k),t=>(n(),a("option",{key:t.id,value:t.id},u(t.name_en),9,Q))),128))],512)),[[f,o(s).zone.continent_id]]):i("",!0)]),e("div",R,[W,d(e("select",{required:"","onUpdate:modelValue":r[2]||(r[2]=t=>o(s).zone_id=t),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[o(y).length!=0?(n(!0),a(m,{key:0},x(o(y),t=>(n(),a("option",{key:t.id,value:t.id},u(t.name_en),9,X))),128)):(n(),a("option",Y," Select continent "))],512),[[f,o(s).zone_id]])]),e("div",null,[ee,d(e("input",{id:"fr","onUpdate:modelValue":r[3]||(r[3]=t=>o(s).name_fr=t),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[l,o(s).name_fr]])]),e("div",null,[te,d(e("input",{id:"en","onUpdate:modelValue":r[4]||(r[4]=t=>o(s).name_en=t),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[l,o(s).name_en]])]),e("div",null,[oe,d(e("input",{id:"es","onUpdate:modelValue":r[5]||(r[5]=t=>o(s).name_es=t),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[l,o(s).name_es]])]),e("div",null,[re,d(e("input",{type:"text","onUpdate:modelValue":r[6]||(r[6]=t=>o(s).name_pt=t),id:"pt",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[l,o(s).name_pt]])])]),e("div",se,[o(b)==0?(n(),a("button",ne," Save ")):i("",!0),o(b)==1?(n(),a("button",ae,[q(z,{size:"small"})])):i("",!0)])],32)])])])}}};export{ce as default};
