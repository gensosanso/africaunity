import{r as g,o as de,c as n,d as s,e as r,g as o,k as ie,w as ue,h as z,t as i,P as ce,m as k,l as pe,j as d,K as y,J as u,F as c,x as p,f as ye,H as be,b as ge}from"./app.4afc0db7.js";import{u as me}from"./jobOfferServices.83450dd3.js";import{u as fe}from"./currencyServices.5db5dffd.js";import{u as _e}from"./activityAreaServices.f5d24500.js";import{u as ve,a as xe}from"./workDepartmentServices.086e1677.js";import{u as ke,a as we,b as he,c as Ce}from"./yearExperienceServices.9a3cf78b.js";import{u as Ve}from"./languageServices.57ad74af.js";import{u as qe}from"./countryServices.e89c773f.js";import{u as Ue}from"./zoneServices.419a04b6.js";import{u as ze}from"./continentServices.5916acc0.js";import{u as Oe}from"./cityServices.7ffa2921.js";const Se={class:"relative min-h-screen w-full bg-white xl:mt-0 xl:p-4"},Ee={class:"z-0 w-full p-4"},Je=r("div",{class:"flex w-full justify-between bg-white px-8 py-5"},[r("h1",{class:"text-4xl font-bold capitalize text-primary-blue"}," Edit JobOffer ")],-1),Le={class:"mx-auto w-full bg-white p-6"},Me=r("h2",{class:"text-md font-light text-gray-700"}," Edit a JobOffer ",-1),je={class:"mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"},Ae={class:"col-span-2"},De=r("label",{class:"dark:text-gray-200 text-gray-700"},"Title",-1),We=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Continent",-1),Fe=["value"],Te=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Zone",-1),$e=["value"],Ne={key:1,value:"null"},Be=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Country",-1),Pe=["value"],Re={key:1,value:"null"},Ze=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"City",-1),Ye=["value"],He={key:1,value:"null"},Ke={class:"col-span-2"},Ge=r("label",{class:"dark:text-gray-200 text-gray-700"},"Location",-1),Ie={class:""},Qe={class:"dark:text-gray-200 text-gray-700"},Xe=r("span",{class:"text-red-500"},"*",-1),er=r("label",{class:"dark:text-gray-200 text-gray-700"},"Company Name",-1),rr=r("label",{class:"dark:text-gray-200 text-gray-700"},"Company Email",-1),tr=r("label",{class:"dark:text-gray-200 text-gray-700"},"Company Website",-1),or=r("label",{class:"dark:text-gray-200 text-gray-700"},"Company logo",-1),ar={class:"col-span-2 grid grid-cols-1 gap-6 sm:grid-cols-3"},lr=r("label",{class:"dark:text-gray-200 text-gray-700"},"Min Price",-1),nr=r("label",{class:"dark:text-gray-200 text-gray-700"},"Max Price",-1),sr=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Currency",-1),dr=["value"],ir={class:"col-span-2"},ur=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Languages",-1),cr=["value"],pr=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Size Company",-1),yr=["value"],br=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Level Study",-1),gr=["value"],mr={class:"col-span-2"},fr=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Activity Areas",-1),_r=["value"],vr=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Work Department",-1),xr=["value"],kr=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Work Mode",-1),wr=["value"],hr=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Offer Type",-1),Cr=["value"],Vr=r("label",{class:"dark:text-gray-200 text-gray-700",for:"es"},"Year Experience",-1),qr=["value"],Ur={class:"col-span-2"},zr=r("label",{class:"dark:text-gray-200 text-gray-700",for:"pt"},"Description",-1),Or={class:"mt-6 flex justify-end"},Sr={key:0,type:"submit",class:"rounded bg-primary-blue px-6 py-2 leading-5 text-white focus:outline-none"},Er={key:1,type:"submit",disabled:"",class:"rounded bg-blue-300 px-6 py-2 leading-5 text-white focus:outline-none"},Br={__name:"JobOfferEdit",props:{id:{required:!0,type:String}},setup(O){const w=O,S=be(),h=g(null),{updateJobOffer:E,getJobOffer2:J,jobOffer:t,errors:_,loading:C}=me(),{currencies:L,getCurrencies:M}=fe(),{languages:j,getLanguages:A}=Ve(),{activityAreas:D,getActivityAreas:W}=_e(),{sizeCompanies:F,getSizeCompanies:T}=ve(),{levelStudies:$,getLevelStudies:N}=ke(),{offerTypes:B,getOfferTypes:P}=we(),{workDepartments:R,getWorkDepartments:Z}=xe(),{workModes:Y,getWorkModes:H}=he(),{yearExperiences:K,getYearExperiences:G}=Ce(),{countries:V,getCountries:I}=qe(),{zones:q,getZones:Q}=Ue(),{continents:X,getContinents:ee}=ze(),{cities:U,getCities:re}=Oe(),f=g([]),m=g([]),b=g([]),te=()=>{b.value=U.value.filter(l=>l.country_id==t.value.country_id),t.value.city.id=""},oe=()=>{m.value=V.value.filter(l=>l.zone_id==t.value.zone_id),t.value.country.id="",t.value.city.id="",b.value=[]},ae=()=>{f.value=q.value.filter(l=>l.continent_id==t.value.continent_id),t.value.zone.id="",t.value.country.id="",t.value.city.id="",b.value=[],m.value=[]};de(async()=>{await J(w.id),M(),await ee(),await Q(),await G(),await H(),await Z(),await N(),await T(),await P(),await W(),await A(),await I(),await re(),f.value=q.value.filter(l=>l.continent_id==t.value.continent_id),m.value=V.value.filter(l=>l.zone_id==t.value.zone_id),b.value=U.value.filter(l=>l.country_id==t.value.country_id),t.value.company_logo=""});const v=g([]),x=g([]),le=async()=>{let l=new FormData;l.append("title",t.value.title),l.append("description",t.value.description),l.append("start_date",t.value.start_date),l.append("location",t.value.location),l.append("company_name",t.value.company_name),l.append("company_email",t.value.company_email),l.append("company_website",t.value.company_website),l.append("company_logo",t.value.company_logo),l.append("min_price",t.value.min_price),l.append("max_price",t.value.max_price),l.append("user_id",t.value.user_id),l.append("currency_id",t.value.currency_id),l.append("year_experience_id",t.value.year_experience_id),l.append("work_department_id",t.value.work_department_id),l.append("work_mode_id",t.value.work_mode_id),l.append("size_company_id",t.value.size_company_id),l.append("offer_type_id",t.value.offer_type_id),l.append("level_study_id",t.value.level_study_id),l.append("city_id",t.value.city_id),l.append("zone_id",t.value.zone_id),l.append("continent_id",t.value.continent_id),l.append("country_id",t.value.country_id),l.append("languages",v.value),l.append("activityAreas",x.value),l.append("_method","PUT"),await E(l,w.id),_.value==""&&S.push({name:"admin.jobOffer.index"})},ne=()=>{t.value.company_logo=h.value.files[0]};return(l,a)=>{const se=ge("Spin");return n(),s("div",Se,[r("div",Ee,[Je,r("section",Le,[o(_)!=""?(n(),ie(ce,{key:0},{default:ue(()=>[z(i(o(_)),1)]),_:1})):k("",!0),Me,r("form",{onSubmit:a[23]||(a[23]=pe(e=>le(),["prevent"])),id:"jobOfferform",enctype:"multipart/form-data"},[r("div",je,[r("div",Ae,[De,d(r("input",{required:"","onUpdate:modelValue":a[0]||(a[0]=e=>o(t).title=e),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[y,o(t).title]])]),r("div",null,[We,d(r("select",{required:"",onChange:ae,"onUpdate:modelValue":a[1]||(a[1]=e=>o(t).continent_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(n(!0),s(c,null,p(o(X),e=>(n(),s("option",{key:e.id,value:e.id},i(e.name_en),9,Fe))),128))],544),[[u,o(t).continent_id]])]),r("div",null,[Te,d(r("select",{required:"",onChange:oe,"onUpdate:modelValue":a[2]||(a[2]=e=>o(t).zone_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[f.value.length!=0?(n(!0),s(c,{key:0},p(f.value,e=>(n(),s("option",{key:e.id,value:e.id},i(e.name_en),9,$e))),128)):(n(),s("option",Ne," Requires "+i(l.$t("continent")),1))],544),[[u,o(t).zone_id]])]),r("div",null,[Be,d(r("select",{required:"",onChange:te,"onUpdate:modelValue":a[3]||(a[3]=e=>o(t).country_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[m.value.length!=0?(n(!0),s(c,{key:0},p(m.value,e=>(n(),s("option",{key:e.id,value:e.id},i(e.name_en),9,Pe))),128)):(n(),s("option",Re," Requires "+i(l.$t("zoned")),1))],544),[[u,o(t).country_id]])]),r("div",null,[Ze,d(r("select",{required:"","onUpdate:modelValue":a[4]||(a[4]=e=>o(t).city_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[b.value.length!=0?(n(!0),s(c,{key:0},p(b.value,e=>(n(),s("option",{key:e.id,value:e.id},i(e.name_en),9,Ye))),128)):(n(),s("option",He," Requires "+i(l.$t("country")),1))],512),[[u,o(t).city_id]])]),r("div",Ke,[Ge,d(r("input",{required:"","onUpdate:modelValue":a[5]||(a[5]=e=>o(t).location=e),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[y,o(t).location]])]),r("div",Ie,[r("label",Qe,[z(i(l.$t("start-date"))+" ",1),Xe]),d(r("input",{required:"","onUpdate:modelValue":a[6]||(a[6]=e=>o(t).start_date=e),type:"date",class:"mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[y,o(t).start_date]])]),r("div",null,[er,d(r("input",{required:"","onUpdate:modelValue":a[7]||(a[7]=e=>o(t).company_name=e),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[y,o(t).company_name]])]),r("div",null,[rr,d(r("input",{required:"","onUpdate:modelValue":a[8]||(a[8]=e=>o(t).company_email=e),type:"email",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[y,o(t).company_email]])]),r("div",null,[tr,d(r("input",{"onUpdate:modelValue":a[9]||(a[9]=e=>o(t).company_website=e),type:"url",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[y,o(t).company_website]])]),r("div",null,[or,r("input",{ref_key:"file",ref:h,onChange:a[10]||(a[10]=e=>ne()),type:"file",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,544)]),r("div",ar,[r("div",null,[lr,d(r("input",{required:"","onUpdate:modelValue":a[11]||(a[11]=e=>o(t).min_price=e),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[y,o(t).min_price]])]),r("div",null,[nr,d(r("input",{required:"","onUpdate:modelValue":a[12]||(a[12]=e=>o(t).max_price=e),type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[y,o(t).max_price]])]),r("div",null,[sr,d(r("select",{required:"","onUpdate:modelValue":a[13]||(a[13]=e=>o(t).currency_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(n(!0),s(c,null,p(o(L),e=>(n(),s("option",{key:e.id,value:e.id},i(e.symbol+" "+e.name),9,dr))),128))],512),[[u,o(t).currency_id]])])]),r("div",ir,[ur,d(r("select",{required:"",multiple:"","onUpdate:modelValue":a[14]||(a[14]=e=>v.value=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(n(!0),s(c,null,p(o(j),e=>(n(),s("option",{key:e.id,value:e.id},i(e.name_en),9,cr))),128))],512),[[u,v.value]])]),r("div",null,[pr,d(r("select",{required:"","onUpdate:modelValue":a[15]||(a[15]=e=>o(t).size_company_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(n(!0),s(c,null,p(o(F),e=>(n(),s("option",{key:e.id,value:e.id},i(e.name_en),9,yr))),128))],512),[[u,o(t).size_company_id]])]),r("div",null,[br,d(r("select",{required:"","onUpdate:modelValue":a[16]||(a[16]=e=>o(t).level_study_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(n(!0),s(c,null,p(o($),e=>(n(),s("option",{key:e.id,value:e.id},i(e.name_en),9,gr))),128))],512),[[u,o(t).level_study_id]])]),r("div",mr,[fr,d(r("select",{required:"",multiple:"","onUpdate:modelValue":a[17]||(a[17]=e=>x.value=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(n(!0),s(c,null,p(o(D),e=>(n(),s("option",{key:e.id,value:e.id},i(e.name_en),9,_r))),128))],512),[[u,x.value]])]),r("div",null,[vr,d(r("select",{required:"","onUpdate:modelValue":a[18]||(a[18]=e=>o(t).work_department_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(n(!0),s(c,null,p(o(R),e=>(n(),s("option",{key:e.id,value:e.id},i(e.name_en),9,xr))),128))],512),[[u,o(t).work_department_id]])]),r("div",null,[kr,d(r("select",{required:"","onUpdate:modelValue":a[19]||(a[19]=e=>o(t).work_mode_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(n(!0),s(c,null,p(o(Y),e=>(n(),s("option",{key:e.id,value:e.id},i(e.name_en),9,wr))),128))],512),[[u,o(t).work_mode_id]])]),r("div",null,[hr,d(r("select",{required:"","onUpdate:modelValue":a[20]||(a[20]=e=>o(t).offer_type_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(n(!0),s(c,null,p(o(B),e=>(n(),s("option",{key:e.id,value:e.id},i(e.name_en),9,Cr))),128))],512),[[u,o(t).offer_type_id]])]),r("div",null,[Vr,d(r("select",{required:"","onUpdate:modelValue":a[21]||(a[21]=e=>o(t).year_experience_id=e),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(n(!0),s(c,null,p(o(K),e=>(n(),s("option",{key:e.id,value:e.id},i(e.name_en),9,qr))),128))],512),[[u,o(t).year_experience_id]])]),r("div",Ur,[zr,d(r("textarea",{required:"",type:"text","onUpdate:modelValue":a[22]||(a[22]=e=>o(t).description=e),id:"pt",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring focus:ring-primary-blue focus:ring-opacity-40"},`\r
                            `,512),[[y,o(t).description]])])]),r("div",Or,[o(C)==0?(n(),s("button",Sr," Save ")):k("",!0),o(C)==1?(n(),s("button",Er,[ye(se,{size:"small"})])):k("",!0)])],32)])])])}}};export{Br as default};