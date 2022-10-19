import{r as l,o as A,a as I,c as s,d as i,e,g as u,k as H,w as C,h as J,t as a,m,l as K,j as c,K as L,J as f,F as _,x as g,f as O,T as R,I as G}from"./app.8ef239d2.js";import{E as P}from"./Error.443ca946.js";import{u as Q}from"./universityServices.f25097d2.js";import{u as W}from"./continentServices.aef8e806.js";import{u as X}from"./countryServices.c36ab858.js";import{u as Y}from"./cityServices.1a4c98f4.js";import{u as ee}from"./zoneServices.a32e81e5.js";import"./_plugin-vue_export-helper.cdc0426e.js";const te={class:"relative min-h-screen w-full bg-white xl:mt-0 xl:p-4"},oe={class:"z-0 w-full p-4"},re=e("div",{class:"flex w-full justify-between bg-white px-8 py-5"},[e("h1",{class:"text-4xl font-bold capitalize text-primary-blue"}," Add University ")],-1),se={class:"mx-auto w-full bg-white p-6"},ie=e("h2",{class:"text-md font-light text-gray-700"}," Add a new University ",-1),ne={class:"mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"},ae={class:"col-span-2"},le=e("label",{class:"dark:text-gray-200 text-gray-700"},"Name",-1),de=e("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Continent",-1),ue=["value"],ce=e("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Zone",-1),ye=["value"],pe={key:1,value:"null"},me=e("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Country",-1),fe=["value"],_e={key:1,value:"null"},ge={class:""},be=e("label",{class:"dark:text-gray-200 text-gray-700",for:"pt"},"City",-1),ve=["value"],xe={key:1,value:"null"},he={class:"col-span-2"},ke=e("label",{class:"dark:text-gray-200 text-gray-700",for:"fr"},"Image",-1),we={class:"col-span-2"},Ce=e("label",{class:"dark:text-gray-200 text-gray-700",for:"pt"},"Description",-1),ze={class:"mt-6 flex flex-col items-end justify-end"},Ue={key:0,type:"submit",class:"rounded bg-primary-blue px-6 py-2 leading-5 text-white focus:outline-none"},Ve={key:1,type:"submit",disabled:"",class:"rounded bg-blue-300 px-6 py-2 leading-5 text-white focus:outline-none"},qe=e("svg",{class:"h-5 w-5 animate-spin text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),e("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),Se=[qe],Fe={key:0,class:"text-xs font-light italic"},Ae={__name:"UniversityCreate",setup(je){const z=G(),{continents:U,getContinents:V}=W(),{countries:q,getCountries:S}=X(),{cities:F,getCities:j}=Y(),{zones:B,getZones:D}=ee(),y=l(""),b=l(""),v=l(0);A(async()=>{sceditor.create(y.value,{format:"xhtml",style:"https://cdn.jsdelivr.net/npm/sceditor@3/minified/themes/content/default.min.css",height:400,toolbarExclude:"indent,outdent,email,date,time,ltr,rtl,print,subscript,superscript,table,code,quote,emoticon",icons:"material"}),y.value.value=="",v.value++,await D(),await V(),await S(),await j()});const t=I({name:"",description:"",image:"",continent_id:"",country_id:"",city_id:"",zone_id:""}),x=l([]),p=l([]),k=l(null),d=l([]),M=()=>{d.value=F.value.filter(r=>r.country_id==t.country_id),t.city_id=""},N=()=>{p.value=q.value.filter(r=>r.zone_id==t.zone_id),t.country_id="",t.city_id="",d.value=[]},$=()=>{x.value=B.value.filter(r=>r.continent_id==t.continent_id),t.zone_id="",t.country_id="",t.city_id="",d.value=[],p.value=[]},{createUniversity:E,errors:h,loading:w}=Q(),T=async()=>{if(t.description=y.value.value,v.value==1){v.value++,b.value="please click again";return}let r=new FormData;r.append("image",t.image),r.append("name",t.name),r.append("description",t.description),r.append("continent_id",t.continent_id),r.append("country_id",t.country_id),r.append("city_id",t.city_id),r.append("zone_id",t.zone_id),await E(r),h.value==""&&z.push({name:"admin.university.index"})},Z=async()=>{t.image=k.value.files[0]};return(r,n)=>(s(),i("div",te,[e("div",oe,[re,e("section",se,[u(h)!=""?(s(),H(P,{key:0},{default:C(()=>[J(a(u(h)),1)]),_:1})):m("",!0),ie,e("form",{onSubmit:n[6]||(n[6]=K(o=>T(),["prevent"])),id:"universityform",enctype:"multipart/form-data"},[e("div",ne,[e("div",ae,[le,c(e("input",{required:"","onUpdate:modelValue":n[0]||(n[0]=o=>t.name=o),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[L,t.name]])]),e("div",null,[de,c(e("select",{required:"",onChange:$,"onUpdate:modelValue":n[1]||(n[1]=o=>t.continent_id=o),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(s(!0),i(_,null,g(u(U),o=>(s(),i("option",{key:o.id,value:o.id},a(o.name_en),9,ue))),128))],544),[[f,t.continent_id]])]),e("div",null,[ce,c(e("select",{required:"","onUpdate:modelValue":n[2]||(n[2]=o=>t.zone_id=o),onChange:N,class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[x.value.length!=0?(s(!0),i(_,{key:0},g(x.value,o=>(s(),i("option",{key:o.id,value:o.id},a(o.name_en),9,ye))),128)):(s(),i("option",pe," Select "+a(r.$t("continent")),1))],544),[[f,t.zone_id]])]),e("div",null,[me,c(e("select",{required:"",onChange:M,"onUpdate:modelValue":n[3]||(n[3]=o=>t.country_id=o),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[p.value.length!=0?(s(!0),i(_,{key:0},g(p.value,o=>(s(),i("option",{key:o.id,value:o.id},a(o.name_en),9,fe))),128)):(s(),i("option",_e," Select "+a(r.$t("zoned")),1))],544),[[f,t.country_id]])]),e("div",ge,[be,c(e("select",{required:"","onUpdate:modelValue":n[4]||(n[4]=o=>t.city_id=o),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[d.value.length!=0?(s(!0),i(_,{key:0},g(d.value,o=>(s(),i("option",{key:o.id,value:o.id},a(o.name_en),9,ve))),128)):(s(),i("option",xe," Select "+a(r.$t("country")),1))],512),[[f,t.city_id]])]),e("div",he,[ke,e("input",{required:"",ref_key:"file",ref:k,onChange:n[5]||(n[5]=o=>Z()),type:"file",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,544)]),e("div",we,[Ce,e("textarea",{required:"",ref_key:"textarea",ref:y,class:"h-96 w-full"},`\r
                            `,512)])]),e("div",ze,[u(w)==0?(s(),i("button",Ue," Save ")):m("",!0),u(w)==1?(s(),i("button",Ve,Se)):m("",!0),O(R,{"enter-active-class":" transition-all  ","enter-from-class":" opacity-0  -translate-y-10","enter-to-class":"  opacity-1 translate-y-0","leave-active-class":"","leave-from-class":"","leave-to-class":""},{default:C(()=>[b.value!=""?(s(),i("span",Fe,a(b.value),1)):m("",!0)]),_:1})])],32)])])]))}};export{Ae as default};
