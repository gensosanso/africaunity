import{r as u,o as K,c as i,d as n,e as t,g as a,k as L,w as V,h as O,t as l,P as A,m as f,l as G,j as y,K as Q,J as m,F as g,x as _,f as S,T as W,H as X,b as Y}from"./app.1.1.1.js";import{u as ee}from"./universityServices.1.1.1.js";import{u as te}from"./continentServices.1.1.1.js";import{u as oe}from"./countryServices.1.1.1.js";import{u as re}from"./zoneServices.1.1.1.js";import{u as ie}from"./cityServices.1.1.1.js";const ne={class:"relative min-h-screen w-full bg-white xl:mt-0 xl:p-4"},ae={class:"z-0 w-full p-4"},se=t("div",{class:"flex w-full justify-between bg-white px-8 py-5"},[t("h1",{class:"text-4xl font-bold capitalize text-primary-blue"}," Edit University ")],-1),le={class:"mx-auto w-full bg-white p-6"},ue=t("h2",{class:"text-md font-light text-gray-700"}," Edit University ",-1),de={class:"mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"},ce={class:"col-span-2"},ye=t("label",{class:"dark:text-gray-200 text-gray-700"},"Name",-1),pe=t("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Continent",-1),ve=["value"],fe=t("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Zone",-1),me=["value"],ge={key:1,value:"null"},_e=t("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Country",-1),be=["value"],xe={key:1,value:"null"},he=t("label",{class:"dark:text-gray-200 text-gray-700",for:"pt"},"City",-1),ke=["value"],we={key:1,value:"null"},Ce={class:"col-span-2"},ze=t("label",{class:"dark:text-gray-200 text-gray-700",for:"fr"},"Image",-1),Ue={class:"col-span-2"},qe=t("label",{class:"dark:text-gray-200 text-gray-700",for:"pt"},"Description",-1),Ve={class:"mt-6 flex flex-col items-end justify-end"},Se={key:0,type:"submit",class:"rounded bg-primary-blue px-6 py-2 leading-5 text-white focus:outline-none"},Ee={key:1,type:"submit",disabled:"",class:"rounded bg-blue-300 px-6 py-2 leading-5 text-white focus:outline-none"},Fe={key:0,class:"text-xs font-light italic"},Me={__name:"UniversityEdit",props:{id:{required:!0,type:String}},setup(E){const k=E,F=X(),p=u(""),b=u(""),x=u(0),{updateUniversity:j,getUniversity:D,university:e,errors:h,loading:w}=ee(),{continents:N,getContinents:T}=te(),{countries:C,getCountries:$}=oe(),{cities:z,getCities:B}=ie(),{zones:U,getZones:M}=re(),q=u(null),v=u([]),c=u([]),d=u([]),R=()=>{d.value=z.value.filter(r=>r.country_id==e.value.country_id),e.value.city_id=""},Z=()=>{c.value=C.value.filter(r=>r.zone_id==e.value.zone_id),e.value.country_id="",e.value.city_id="",d.value=[]},P=()=>{v.value=U.value.filter(r=>r.continent_id==e.value.continent_id),e.value.zone_id="",e.value.country_id="",e.value.city_id="",d.value=[],c.value=[]};K(async()=>{await D(k.id),p.value.value=e.value.description,sceditor.create(p.value,{format:"bbcode",style:"https://cdn.jsdelivr.net/npm/sceditor@3/minified/themes/content/default.min.css",height:400,toolbarExclude:"indent,outdent,email,date,time,ltr,rtl,print,subscript,superscript,table,code,quote,emoticon",icons:"material"}),x.value++,await T(),await $(),await B(),await M(),v.value=U.value.filter(r=>r.continent_id==e.value.continent_id),c.value=C.value.filter(r=>r.zone_id==e.value.zone_id),d.value=z.value.filter(r=>r.country_id==e.value.country_id),e.value.image=""});const H=async()=>{if(e.value.description=p.value.value,x.value==1){x.value++,b.value="please click again";return}let r=new FormData;r.append("image",e.value.image),r.append("name",e.value.name),r.append("description",e.value.description),r.append("continent_id",e.value.continent_id),r.append("country_id",e.value.country_id),r.append("city_id",e.value.city_id),r.append("zone_id",e.value.zone_id),r.append("_method","PUT"),await j(r,k.id),h.value==""&&F.push({name:"admin.university.index"})},I=async()=>{e.value.image=q.value.files[0]};return(r,s)=>{const J=Y("Spin");return i(),n("div",ne,[t("div",ae,[se,t("section",le,[a(h)!=""?(i(),L(A,{key:0},{default:V(()=>[O(l(a(h)),1)]),_:1})):f("",!0),ue,t("form",{onSubmit:s[6]||(s[6]=G(o=>H(),["prevent"])),id:"universityform",enctype:"multipart/form-data"},[t("div",de,[t("div",ce,[ye,y(t("input",{required:"","onUpdate:modelValue":s[0]||(s[0]=o=>a(e).name=o),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[Q,a(e).name]])]),t("div",null,[pe,y(t("select",{required:"",onChange:P,"onUpdate:modelValue":s[1]||(s[1]=o=>a(e).continent_id=o),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(i(!0),n(g,null,_(a(N),o=>(i(),n("option",{key:o.id,value:o.id},l(o.name_en),9,ve))),128))],544),[[m,a(e).continent_id]])]),t("div",null,[fe,y(t("select",{required:"",onChange:Z,"onUpdate:modelValue":s[2]||(s[2]=o=>a(e).zone_id=o),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[v.value.length!=0?(i(!0),n(g,{key:0},_(v.value,o=>(i(),n("option",{key:o.id,value:o.id},l(o.name_en),9,me))),128)):(i(),n("option",ge," Requires "+l(r.$t("continent")),1))],544),[[m,a(e).zone_id]])]),t("div",null,[_e,y(t("select",{required:"",onChange:R,"onUpdate:modelValue":s[3]||(s[3]=o=>a(e).country_id=o),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[c.value.length!=0?(i(!0),n(g,{key:0},_(c.value,o=>(i(),n("option",{key:o.id,value:o.id},l(o.name_en),9,be))),128)):(i(),n("option",xe," Requires "+l(r.$t("zoned")),1))],544),[[m,a(e).country_id]])]),t("div",null,[he,y(t("select",{required:"","onUpdate:modelValue":s[4]||(s[4]=o=>a(e).city_id=o),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[d.value.length!=0?(i(!0),n(g,{key:0},_(d.value,o=>(i(),n("option",{key:o.id,value:o.id},l(o.name_en),9,ke))),128)):(i(),n("option",we," Requires "+l(r.$t("country")),1))],512),[[m,a(e).city_id]])]),t("div",Ce,[ze,t("input",{ref_key:"file",ref:q,onChange:s[5]||(s[5]=o=>I()),type:"file",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,544)]),t("div",Ue,[qe,t("textarea",{required:"",ref_key:"textarea",ref:p,class:"h-96 w-full"},`\r
                            `,512)])]),t("div",Ve,[a(w)==0?(i(),n("button",Se," Save ")):f("",!0),a(w)==1?(i(),n("button",Ee,[S(J,{size:"small"})])):f("",!0),S(W,{"enter-active-class":" transition-all  ","enter-from-class":" opacity-0  -translate-y-10","enter-to-class":"  opacity-1 translate-y-0","leave-active-class":"","leave-from-class":"","leave-to-class":""},{default:V(()=>[b.value!=""?(i(),n("span",Fe,l(b.value),1)):f("",!0)]),_:1})])],32)])])])}}};export{Me as default};
