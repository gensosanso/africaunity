import{r as m,a as j,o as q,G as I,c as r,d as n,e,g as l,k as v,w as k,h as w,t as h,P as N,m as y,l as F,j as i,K as c,f as E,F as L,x as T,b as $}from"./app.b709c79e.js";import{u as A}from"./demonstrationNicheServices.865d3bc9.js";const K={class:"relative min-h-screen w-full bg-white xl:mt-0 xl:p-4"},P={class:"z-0 h-full w-full p-4"},G=e("div",{class:"flex justify-between bg-white px-8 py-5"},[e("h1",{class:"text-4xl font-bold text-primary-blue"}," Event Niche ")],-1),H={class:"justify-between lg:flex"},J={class:"bg-white px-6 pt-8 lg:w-[40%]"},O={class:"mb-4 text-2xl font-semibold"},Q={key:0,class:"text-primary-blue underline"},R={key:1,class:"text-primary-blue underline"},W=e("span",null,"Event Niche",-1),X={class:""},Y=e("label",{class:"dark:text-gray-200 text-gray-700"},"French Name",-1),Z={class:""},ee=e("label",{class:"dark:text-gray-200 text-gray-700"},"English Name",-1),te={class:""},se=e("label",{class:"dark:text-gray-200 text-gray-700"},"Espanol Name",-1),ae={class:""},re=e("label",{class:"dark:text-gray-200 text-gray-700"},"Portugues Name",-1),oe={class:"mt-6 flex justify-end"},ne={key:0,type:"submit",class:"rounded bg-primary-blue px-6 py-2 leading-5 text-white focus:outline-none"},le={key:1,type:"submit",disabled:"",class:"rounded bg-blue-300 px-6 py-2 leading-5 text-white focus:outline-none"},de={class:"flex flex-col bg-white pt-8 lg:w-[60%]"},ie={class:"overflow-x-auto border"},ce={class:"dark:bg-gray-800 inline-block min-w-full align-middle"},ue={class:"p-4"},ge=e("label",{for:"table-search",class:"sr-only"},"Search",-1),ye={class:"relative mt-1"},be=e("div",{class:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"},[e("svg",{class:"dark:text-gray-400 h-5 w-5 text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"})])],-1),pe={class:"overflow-hidden"},_e={class:"dark:divide-gray-700 min-w-full table-fixed divide-y divide-gray-200"},me=e("thead",{class:"dark:bg-gray-700 bg-gray-100"},[e("tr",null,[e("th",{scope:"col",class:"dark:text-gray-400 py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700"}," Name "),e("th",{scope:"col",class:"p-4"},[e("span",{class:"sr-only"},"Edit")])])],-1),he={key:0,class:"dark:bg-gray-800 dark:divide-gray-700 divide-y divide-gray-200 bg-white"},fe={class:"dark:text-white whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900"},xe={class:"whitespace-nowrap py-4 px-6 text-right text-sm font-medium"},ve=["onClick"],ke=["onClick"],we={key:1,class:"dark:bg-gray-800 dark:divide-gray-700 divide-y divide-gray-200 bg-white"},Ne={class:"dark:hover:bg-gray-700 hover:bg-gray-100"},Ee={colspan:"2",class:"dark:text-white w-full whitespace-nowrap border p-16 text-sm font-medium text-gray-900"},Ce={key:2,class:"dark:bg-gray-800 dark:divide-gray-700 divide-y divide-gray-200 bg-white"},De=e("tr",{class:"dark:hover:bg-gray-700 hover:bg-gray-100"},[e("td",{colspan:"2",class:"dark:text-white whitespace-nowrap py-4 px-6 text-center text-xl font-medium uppercase text-gray-900"}," No Data ")],-1),Ve=[De],Me={__name:"DemonstrationNiche",setup(Se){const{demonstrationNiches:C,updateDemonstrationNiche:D,getDemonstrationNiches:b,createDemonstrationNiche:V,destroyDemonstrationNiche:S,loading:d,errors:u}=A(),p=m(""),g=m(!1),_=m(""),t=j({name_fr:"",name_en:"",name_es:"",name_pt:""});q(async()=>{await b()});const z=async()=>{d.value=1,g.value?(await D({...t},_.value),g.value=!1,_.value=0):await V({...t}),await b(),d.value=0,t.name_fr="",t.name_en="",t.name_es="",t.name_pt=""},B=async o=>{confirm("I you Sure ?")&&(d.value=1,await S(o),await b(),d.value=0)},M=async o=>{g.value=!0,_.value=o.id,t.name_en=o.name_en,t.name_es=o.name_es,t.name_pt=o.name_pt,t.name_fr=o.name_fr},f=I(()=>C.value.filter(o=>o.name_en.toLowerCase().includes(p.value.toLowerCase())));return(o,a)=>{const x=$("Spin");return r(),n("div",K,[e("div",P,[G,e("div",H,[e("div",J,[e("div",null,[e("h1",O,[g.value?(r(),n("span",R,"Edit ")):(r(),n("span",Q,"Add ")),W]),l(u)!=""?(r(),v(N,{key:0},{default:k(()=>[w(h(l(u)),1)]),_:1})):y("",!0),e("form",{class:"px-8",onSubmit:a[4]||(a[4]=F(s=>z(),["prevent"]))},[e("div",X,[Y,i(e("input",{required:"","onUpdate:modelValue":a[0]||(a[0]=s=>t.name_fr=s),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[c,t.name_fr]])]),e("div",Z,[ee,i(e("input",{required:"","onUpdate:modelValue":a[1]||(a[1]=s=>t.name_en=s),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[c,t.name_en]])]),e("div",te,[se,i(e("input",{required:"","onUpdate:modelValue":a[2]||(a[2]=s=>t.name_es=s),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[c,t.name_es]])]),e("div",ae,[re,i(e("input",{required:"","onUpdate:modelValue":a[3]||(a[3]=s=>t.name_pt=s),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[c,t.name_pt]])]),e("div",oe,[l(d)==0?(r(),n("button",ne," Save ")):y("",!0),l(d)==1?(r(),n("button",le,[E(x,{size:"small"})])):y("",!0)])],32)])]),e("div",de,[e("div",ie,[e("div",ce,[e("div",ue,[ge,e("div",ye,[be,i(e("input",{"onUpdate:modelValue":a[5]||(a[5]=s=>p.value=s),type:"text",id:"table-search",class:"dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-primary-blue focus:ring-primary-blue",placeholder:"Search for items"},null,512),[[c,p.value]])])]),l(u)!=""?(r(),v(N,{key:0},{default:k(()=>[w(h(l(u)),1)]),_:1})):y("",!0),e("div",pe,[e("table",_e,[me,l(f).length!=0?(r(),n("tbody",he,[(r(!0),n(L,null,T(l(f),s=>(r(),n("tr",{key:s.id,class:"dark:hover:bg-gray-700 hover:bg-gray-100"},[e("td",fe,h(s.name_en),1),e("td",xe,[e("a",{onClick:U=>M(s),href:"#",class:"dark:text-blue-500 text-primary-blue hover:underline"},"Edit",8,ve),e("a",{onClick:U=>B(s.id),href:"#",class:"dark:text-blue-500 ml-3 text-red-600 hover:underline"},"Delete",8,ke)])]))),128))])):l(d)==1?(r(),n("tbody",we,[e("tr",Ne,[e("td",Ee,[E(x,{size:"big"})])])])):(r(),n("tbody",Ce,Ve))])])])])])])])])}}};export{Me as default};