import{r as m,o as ae,a as se,c as s,d as i,e as r,g as d,k as ie,w as ne,h as w,t as l,P as le,m as x,l as de,j as n,K as y,J as u,F as c,x as p,f as ue,H as ce,b as pe}from"./app.1.1.1.js";import{u as ye}from"./jobOfferServices.1.1.1.js";import{u as ge}from"./currencyServices.1.1.1.js";import{u as be}from"./activityAreaServices.1.1.1.js";import{u as me,a as fe}from"./workDepartmentServices.1.1.1.js";import{u as _e,a as xe,b as ke,c as ve}from"./yearExperienceServices.1.1.1.js";import{u as we}from"./languageServices.1.1.1.js";import{u as he}from"./countryServices.1.1.1.js";import{u as Ce}from"./zoneServices.1.1.1.js";import{u as Ve}from"./continentServices.1.1.1.js";import{u as qe}from"./cityServices.1.1.1.js";const Ue={class:"relative min-h-screen w-full bg-white xl:mt-0 xl:p-4"},ze={class:"z-0 w-full p-4"},Oe=r("div",{class:"flex w-full justify-between bg-white px-8 py-5"},[r("h1",{class:"text-4xl font-bold capitalize text-primary-blue"}," Add JobOffer ")],-1),Se={class:"mx-auto w-full bg-white p-6"},Ae=r("h2",{class:"text-md font-light text-gray-700"}," Add a new JobOffer ",-1),Je={class:""},Le={class:"col-span-2"},Me=r("label",{class:"dark:text-gray-200 text-gray-700"},"Title",-1),je={class:"col-span-2 mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"},De=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Continent",-1),We=["value"],Fe=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Zone",-1),Ne=["value"],$e={key:1,value:"null"},Ee=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Country",-1),Te=["value"],Be={key:1,value:"null"},Re=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"City",-1),Ze=["value"],Pe={key:1,value:"null"},Ye={class:"col-span-2"},He=r("label",{class:"dark:text-gray-200 text-gray-700"},"Location",-1),Ke={class:""},Ge={class:"dark:text-gray-200 text-gray-700"},Ie=r("span",{class:"text-red-500"},"*",-1),Qe={class:"col-span-2 grid grid-cols-1 gap-6 sm:grid-cols-2"},Xe=r("label",{class:"dark:text-gray-200 text-gray-700"},"Company Name",-1),er=r("label",{class:"dark:text-gray-200 text-gray-700"},"Company Email",-1),rr=r("label",{class:"dark:text-gray-200 text-gray-700"},"Company Website",-1),tr=r("label",{class:"dark:text-gray-200 text-gray-700"},"Company logo",-1),or={class:"col-span-2 mt-4 grid grid-cols-1 gap-6 sm:grid-cols-3"},ar=r("label",{class:"dark:text-gray-200 text-gray-700"},"Min Price",-1),sr=r("label",{class:"dark:text-gray-200 text-gray-700"},"Max Price",-1),ir=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Currency",-1),nr=["value"],lr={class:"col-span-2"},dr=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Languages",-1),ur=["value"],cr={class:"col-span-2 mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"},pr=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Size Company",-1),yr=["value"],gr=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Level Study",-1),br=["value"],mr={class:"col-span-2"},fr=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Activity Areas",-1),_r=["value"],xr={class:"col-span-2 mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"},kr=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Work Department",-1),vr=["value"],wr=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Work Mode",-1),hr=["value"],Cr=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Offer Type",-1),Vr=["value"],qr=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Year Experience",-1),Ur=["value"],zr={class:"col-span-2"},Or=r("label",{class:"dark:text-gray-200 text-gray-700",for:"pt"},"Description",-1),Sr={class:"mt-6 flex justify-end"},Ar={key:0,type:"submit",class:"rounded bg-primary-blue px-6 py-2 leading-5 text-white focus:outline-none"},Jr={key:1,type:"submit",disabled:"",class:"rounded bg-blue-300 px-6 py-2 leading-5 text-white focus:outline-none"},Zr={__name:"JobOfferCreate",setup(Lr){const h=ce(),k=m(null),C=JSON.parse(localStorage.user),{currencies:V,getCurrencies:q}=ge(),{languages:U,getLanguages:z}=we(),{activityAreas:O,getActivityAreas:S}=be(),{sizeCompanies:A,getSizeCompanies:J}=me(),{levelStudies:L,getLevelStudies:M}=_e(),{offerTypes:j,getOfferTypes:D}=xe(),{workDepartments:W,getWorkDepartments:F}=fe(),{workModes:N,getWorkModes:$}=ke(),{yearExperiences:E,getYearExperiences:T}=ve(),{countries:B,getCountries:R}=he(),{zones:Z,getZones:P}=Ce(),{continents:Y,getContinents:H}=Ve(),{cities:K,getCities:G}=qe(),f=m([]),b=m([]),g=m([]);ae(async()=>{await q(),await H(),await P(),await T(),await $(),await F(),await M(),await J(),await D(),await S(),await z(),await R(),await G()});const t=se({title:"",description:"",location:"",start_date:"",company_name:"",company_email:"",company_website:"",company_logo:"",min_price:"",max_price:"",user_id:C.id,currency_id:"",year_experience_id:"",work_department_id:"",work_mode_id:"",size_company_id:"",offer_type_id:"",level_study_id:"",city_id:"",zone_id:"",continent_id:"",country_id:"",languages:[],activityAreas:[]}),{createJobOffer:I,errors:_,loading:v}=ye(),Q=()=>{g.value=K.value.filter(a=>a.country_id==t.country_id),t.city_id=""},X=()=>{b.value=B.value.filter(a=>a.zone_id==t.zone_id),t.country_id="",t.city_id="",g.value=[]},ee=()=>{f.value=Z.value.filter(a=>a.continent_id==t.continent_id),t.zone_id="",t.country_id="",t.city_id="",g.value=[],b.value=[]},re=async()=>{let a=new FormData;a.append("title",t.title),a.append("description",t.description),a.append("location",t.location),a.append("company_name",t.company_name),a.append("start_date",t.start_date),a.append("company_email",t.company_email),a.append("company_website",t.company_website),a.append("company_logo",t.company_logo),a.append("min_price",t.min_price),a.append("max_price",t.max_price),a.append("user_id",t.user_id),a.append("currency_id",t.currency_id),a.append("year_experience_id",t.year_experience_id),a.append("work_department_id",t.work_department_id),a.append("work_mode_id",t.work_mode_id),a.append("size_company_id",t.size_company_id),a.append("offer_type_id",t.offer_type_id),a.append("level_study_id",t.level_study_id),a.append("city_id",t.city_id),a.append("zone_id",t.zone_id),a.append("continent_id",t.continent_id),a.append("country_id",t.country_id),a.append("languages",t.languages),a.append("activityAreas",t.activityAreas),await I(a),_.value==""&&h.push({name:"admin.jobOffer.index"})},te=()=>{t.company_logo=k.value.files[0]};return(a,o)=>{const oe=pe("Spin");return s(),i("div",Ue,[r("div",ze,[Oe,r("section",Se,[d(_)!=""?(s(),ie(le,{key:0},{default:ne(()=>[w(l(d(_)),1)]),_:1})):x("",!0),Ae,r("form",{onSubmit:o[23]||(o[23]=de(e=>re(),["prevent"])),id:"jobOfferform",enctype:"multipart/form-data"},[r("div",Je,[r("div",Le,[Me,n(r("input",{required:"","onUpdate:modelValue":o[0]||(o[0]=e=>t.title=e),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[y,t.title]])]),r("div",je,[r("div",null,[De,n(r("select",{required:"",onChange:ee,"onUpdate:modelValue":o[1]||(o[1]=e=>t.continent_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(s(!0),i(c,null,p(d(Y),e=>(s(),i("option",{key:e.id,value:e.id},l(e.name_en),9,We))),128))],544),[[u,t.continent_id]])]),r("div",null,[Fe,n(r("select",{required:"","onUpdate:modelValue":o[2]||(o[2]=e=>t.zone_id=e),onChange:X,class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[f.value.length!=0?(s(!0),i(c,{key:0},p(f.value,e=>(s(),i("option",{key:e.id,value:e.id},l(e.name_en),9,Ne))),128)):(s(),i("option",$e," Requires "+l(a.$t("continent")),1))],544),[[u,t.zone_id]])]),r("div",null,[Ee,n(r("select",{required:"",onChange:Q,"onUpdate:modelValue":o[3]||(o[3]=e=>t.country_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[b.value.length!=0?(s(!0),i(c,{key:0},p(b.value,e=>(s(),i("option",{key:e.id,value:e.id},l(e.name_en),9,Te))),128)):(s(),i("option",Be," Requires "+l(a.$t("zoned")),1))],544),[[u,t.country_id]])]),r("div",null,[Re,n(r("select",{required:"","onUpdate:modelValue":o[4]||(o[4]=e=>t.city_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[g.value.length!=0?(s(!0),i(c,{key:0},p(g.value,e=>(s(),i("option",{key:e.id,value:e.id},l(e.name_en),9,Ze))),128)):(s(),i("option",Pe," Requires "+l(a.$t("country")),1))],512),[[u,t.city_id]])])]),r("div",Ye,[He,n(r("input",{required:"","onUpdate:modelValue":o[5]||(o[5]=e=>t.location=e),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[y,t.location]])]),r("div",Ke,[r("label",Ge,[w(l(a.$t("start-date"))+" ",1),Ie]),n(r("input",{required:"","onUpdate:modelValue":o[6]||(o[6]=e=>t.start_date=e),type:"date",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[y,t.start_date]])]),r("div",Qe,[r("div",null,[Xe,n(r("input",{required:"","onUpdate:modelValue":o[7]||(o[7]=e=>t.company_name=e),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[y,t.company_name]])]),r("div",null,[er,n(r("input",{required:"","onUpdate:modelValue":o[8]||(o[8]=e=>t.company_email=e),type:"email",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[y,t.company_email]])]),r("div",null,[rr,n(r("input",{"onUpdate:modelValue":o[9]||(o[9]=e=>t.company_website=e),type:"url",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[y,t.company_website]])]),r("div",null,[tr,r("input",{ref_key:"file",ref:k,onChange:o[10]||(o[10]=e=>te()),type:"file",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,544)])]),r("div",or,[r("div",null,[ar,n(r("input",{required:"","onUpdate:modelValue":o[11]||(o[11]=e=>t.min_price=e),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[y,t.min_price]])]),r("div",null,[sr,n(r("input",{required:"","onUpdate:modelValue":o[12]||(o[12]=e=>t.max_price=e),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[y,t.max_price]])]),r("div",null,[ir,n(r("select",{required:"","onUpdate:modelValue":o[13]||(o[13]=e=>t.currency_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(s(!0),i(c,null,p(d(V),e=>(s(),i("option",{key:e.id,value:e.id},l(e.symbol+" "+e.name),9,nr))),128))],512),[[u,t.currency_id]])])]),r("div",lr,[dr,n(r("select",{required:"",multiple:"","onUpdate:modelValue":o[14]||(o[14]=e=>t.languages=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(s(!0),i(c,null,p(d(U),e=>(s(),i("option",{key:e.id,value:e.id},l(e.name_en),9,ur))),128))],512),[[u,t.languages]])]),r("div",cr,[r("div",null,[pr,n(r("select",{required:"","onUpdate:modelValue":o[15]||(o[15]=e=>t.size_company_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(s(!0),i(c,null,p(d(A),e=>(s(),i("option",{key:e.id,value:e.id},l(e.name_en),9,yr))),128))],512),[[u,t.size_company_id]])]),r("div",null,[gr,n(r("select",{required:"","onUpdate:modelValue":o[16]||(o[16]=e=>t.level_study_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(s(!0),i(c,null,p(d(L),e=>(s(),i("option",{key:e.id,value:e.id},l(e.name_en),9,br))),128))],512),[[u,t.level_study_id]])])]),r("div",mr,[fr,n(r("select",{required:"",multiple:"","onUpdate:modelValue":o[17]||(o[17]=e=>t.activityAreas=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(s(!0),i(c,null,p(d(O),e=>(s(),i("option",{key:e.id,value:e.id},l(e.name_en),9,_r))),128))],512),[[u,t.activityAreas]])]),r("div",xr,[r("div",null,[kr,n(r("select",{required:"","onUpdate:modelValue":o[18]||(o[18]=e=>t.work_department_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(s(!0),i(c,null,p(d(W),e=>(s(),i("option",{key:e.id,value:e.id},l(e.name_en),9,vr))),128))],512),[[u,t.work_department_id]])]),r("div",null,[wr,n(r("select",{required:"","onUpdate:modelValue":o[19]||(o[19]=e=>t.work_mode_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(s(!0),i(c,null,p(d(N),e=>(s(),i("option",{key:e.id,value:e.id},l(e.name_en),9,hr))),128))],512),[[u,t.work_mode_id]])]),r("div",null,[Cr,n(r("select",{required:"","onUpdate:modelValue":o[20]||(o[20]=e=>t.offer_type_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(s(!0),i(c,null,p(d(j),e=>(s(),i("option",{key:e.id,value:e.id},l(e.name_en),9,Vr))),128))],512),[[u,t.offer_type_id]])]),r("div",null,[qr,n(r("select",{required:"","onUpdate:modelValue":o[21]||(o[21]=e=>t.year_experience_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(s(!0),i(c,null,p(d(E),e=>(s(),i("option",{key:e.id,value:e.id},l(e.name_en),9,Ur))),128))],512),[[u,t.year_experience_id]])])]),r("div",zr,[Or,n(r("textarea",{required:"",type:"text","onUpdate:modelValue":o[22]||(o[22]=e=>t.description=e),id:"pt",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40"},`\r
                            `,512),[[y,t.description]])])]),r("div",Sr,[d(v)==0?(s(),i("button",Ar," Save ")):x("",!0),d(v)==1?(s(),i("button",Jr,[ue(oe,{size:"small"})])):x("",!0)])],32)])])])}}};export{Zr as default};
