import{a as f,c as n,d,e,g as l,k as p,w as m,h as x,t as _,P as k,m as i,l as h,j as s,K as a,f as w,b as v}from"./app.1.1.2.js";import{u as V}from"./ministryServices.1.1.2.js";const M={class:"relative min-h-screen w-full bg-white xl:mt-0 xl:p-4"},C={class:"z-0 h-full w-full p-4"},S=e("div",{class:"flex justify-between bg-white px-8 py-5"},[e("h1",{class:"text-4xl font-bold text-primary-blue"}," Add Ministry ")],-1),U={class:"mx-auto bg-white p-6"},B=e("h2",{class:"text-md font-light text-gray-700"}," Add a new ministry for the 04 languages of the website ",-1),E={class:"mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"},F={class:"col-span-2"},N=e("label",{class:"dark:text-gray-200 text-gray-700",for:"fr"},"Color Code",-1),j=e("label",{class:"dark:text-gray-200 text-gray-700",for:"fr"},"French",-1),z=e("label",{class:"dark:text-gray-200 text-gray-700",for:"en"},"English",-1),A=e("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Espa\xF1ol",-1),D=e("label",{class:"dark:text-gray-200 text-gray-700",for:"pt"},"Portugu\xEAs",-1),P={class:"mt-6 flex justify-end"},T={key:0,type:"submit",class:"rounded bg-primary-blue px-6 py-2 leading-5 text-white focus:outline-none"},K={key:1,type:"submit",disabled:"",class:"rounded bg-blue-300 px-6 py-2 leading-5 text-white focus:outline-none"},I={__name:"MinistryCreate",setup($){const r=f({color:"",name_fr:"",name_en:"",name_es:"",name_pt:""}),{createMinistry:g,errors:u,loading:c}=V(),b=async()=>{await g({...r})};return(q,t)=>{const y=v("Spin");return n(),d("div",M,[e("div",C,[S,e("section",U,[l(u)!=""?(n(),p(k,{key:0},{default:m(()=>[x(_(l(u)),1)]),_:1})):i("",!0),B,e("form",{onSubmit:t[5]||(t[5]=h(o=>b(),["prevent"]))},[e("div",E,[e("div",F,[N,s(e("input",{id:"fr",placeholder:"#F5F5F5","onUpdate:modelValue":t[0]||(t[0]=o=>r.color=o),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[a,r.color]])]),e("div",null,[j,s(e("input",{id:"fr","onUpdate:modelValue":t[1]||(t[1]=o=>r.name_fr=o),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[a,r.name_fr]])]),e("div",null,[z,s(e("input",{id:"en","onUpdate:modelValue":t[2]||(t[2]=o=>r.name_en=o),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[a,r.name_en]])]),e("div",null,[A,s(e("input",{id:"es","onUpdate:modelValue":t[3]||(t[3]=o=>r.name_es=o),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[a,r.name_es]])]),e("div",null,[D,s(e("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=o=>r.name_pt=o),id:"pt",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[a,r.name_pt]])])]),e("div",P,[l(c)==0?(n(),d("button",T," Save ")):i("",!0),l(c)==1?(n(),d("button",K,[w(y,{size:"small"})])):i("",!0)])],32)])])])}}};export{I as default};