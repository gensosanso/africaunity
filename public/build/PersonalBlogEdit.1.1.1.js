import{r as p,o as R,c as l,d as i,e,t as r,g as o,k as T,w as x,h as u,m as d,l as D,j as g,K as v,J as k,F as M,x as O,f as w,T as I,H as z,b as $}from"./app.1.1.1.js";import{u as H}from"./categoryPersonalPostServices.1.1.1.js";import{u as J}from"./personalPostsServices.1.1.1.js";const K={class:"text-center text-2xl font-bold text-gray-500 sm:text-4xl"},A={class:"mx-auto w-full rounded-md bg-white p-6 shadow-xl"},G={class:"mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"},Q={class:"col-span-2"},W={class:"dark:text-gray-200 text-gray-700"},X=e("span",{class:"text-red-500"},"*",-1),Y={key:0,class:"text-xs font-light text-gray-400"},Z={class:"col-span-2"},ee=e("label",{class:"dark:text-gray-200 text-gray-700",for:"en"},"Language",-1),te=e("option",{value:"fr"},"French",-1),se=e("option",{value:"en"},"English",-1),oe=e("option",{value:"es"},"Espanol",-1),ae=e("option",{value:"pt"},"Portugues",-1),re=[te,se,oe,ae],ne={class:"col-span-2"},le={class:"dark:text-gray-200 text-gray-700",for:"es"},ie=e("span",{class:"text-red-500"},"*",-1),de=["value"],ue={key:0},ce={key:1},pe={key:2},ge={key:3},me={class:"col-span-2"},fe={class:"dark:text-gray-200 text-gray-700"},be={key:0,class:"text-xs font-light text-gray-400"},ye={class:"col-span-2"},_e={class:"dark:text-gray-200 text-gray-700",for:"fr"},he=e("span",{class:"text-red-500"},"*",-1),xe={class:"flex items-center space-x-4 py-4"},ve=["src","alt"],ke={class:"col-span-2"},we={class:"dark:text-gray-200 text-gray-700",for:"pt"},$e=e("span",{class:"text-red-500"},"*",-1),Ce={class:"mt-20"},Ue={key:0,type:"submit",class:"text-md w-full rounded bg-primary-blue px-6 py-4 leading-5 text-white focus:outline-none"},Pe={key:1,type:"submit",disabled:"",class:"text-md flex w-full items-center justify-center rounded bg-blue-300 px-6 py-4 leading-5 text-white focus:outline-none"},Ve={key:0,class:"text-xs font-light italic"},qe={__name:"PersonalBlogEdit",props:{id:[String,Number]},emits:["back"],setup(C,{emit:Ee}){const y=C,{getPersonalPost:U,updatePersonalPost:P,errors:m,loading:_,personalPost:t}=J(),{categoryPersonalPosts:V,getCategoryPersonalPosts:E}=H(),f=p(0),c=p(null),b=p(""),h=p(null),L=z();R(async()=>{await U(y.id),c.value.value=t.value.content,sceditor.create(c.value,{format:"xhtml",style:"https://cdn.jsdelivr.net/npm/sceditor@3/minified/themes/content/default.min.css",height:400,toolbarExclude:"indent,outdent,email,date,time,ltr,rtl,print,subscript,superscript,table,code,quote,emoticon",icons:"material"}),f.value++,await E()});const j=async()=>{if(t.value.content=c.value.value,f.value==1){f.value++,b.value="please click again";return}let s=new FormData;s.append("image",t.value.image),s.append("title",t.value.title),s.append("subtheme",t.value.subtheme),s.append("user_id",t.value.user_id),s.append("language",t.value.language),s.append("content",t.value.content),s.append("category_personal_post_id",t.value.category_personal_post_id),s.append("_method","PUT"),await P(s,y.id),m.value==""&&L.push({name:"admin.personal-post.index"})},S=()=>{t.value.image=h.value.files[0]};function q(s){return URL.createObjectURL(s)}function B(s){return URL.revokeObjectURL(s)}return(s,n)=>{const F=$("Error"),N=$("Spin");return l(),i("div",null,[e("h1",K,r(s.$tc("edit",1))+" Post ",1),e("section",A,[o(m)!=""?(l(),T(F,{key:0},{default:x(()=>[u(r(o(m)),1)]),_:1})):d("",!0),e("form",{onSubmit:n[6]||(n[6]=D(a=>j(),["prevent"])),id:"postform",enctype:"multipart/form-data"},[e("div",G,[e("div",Q,[e("label",W,[u(r(s.$t("title"))+" ",1),X]),g(e("input",{required:"","onUpdate:modelValue":n[0]||(n[0]=a=>o(t).title=a),maxlength:"50",type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[v,o(t).title]]),o(t).title?(l(),i("span",Y,r(o(t).title.length)+" of 50 Characters",1)):d("",!0)]),e("div",Z,[ee,g(e("select",{required:"","onUpdate:modelValue":n[1]||(n[1]=a=>o(t).language=a),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},re,512),[[k,o(t).language]])]),e("div",ne,[e("label",le,[u(r(s.$t("theme"))+" ",1),ie]),g(e("select",{required:"","onUpdate:modelValue":n[2]||(n[2]=a=>o(t).category_personal_post_id=a),class:"form-select mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-primary-blue focus:outline-none focus:ring-primary-blue"},[(l(!0),i(M,null,O(o(V),a=>(l(),i("option",{key:a.id,value:a.id},[s.$i18n.locale=="en"?(l(),i("span",ue,r(a.name_en),1)):s.$i18n.locale=="fr"?(l(),i("span",ce,r(a.name_fr),1)):s.$i18n.locale=="es"?(l(),i("span",pe,r(a.name_es),1)):(l(),i("span",ge,r(a.name_pt),1))],8,de))),128))],512),[[k,o(t).category_personal_post_id]])]),e("div",me,[e("label",fe,r(s.$t("subtheme")),1),g(e("input",{"onUpdate:modelValue":n[3]||(n[3]=a=>o(t).subtheme=a),maxlength:"255",type:"text",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[v,o(t).subtheme]]),o(t).subtheme?(l(),i("span",be,r(o(t).subtheme.length)+" of 255 Characters",1)):d("",!0)]),e("div",ye,[e("label",_e,[u(r(s.$t("thumbnails"))+" ",1),he]),e("div",xe,[o(t).image?(l(),i("img",{key:0,src:typeof o(t).image=="string"?o(t).image:q(o(t).image),onLoad:n[4]||(n[4]=a=>typeof o(t).image=="string"?"":B(o(t).image)),class:"h-16 w-16 rounded-full",alt:o(t).title},null,40,ve)):d("",!0),e("input",{ref_key:"file",ref:h,onChange:n[5]||(n[5]=a=>S()),accept:"image/*",type:"file",class:"dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-300 mt-2 block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,544)])]),e("div",ke,[e("label",we,[u(r(s.$t("content"))+" ",1),$e]),e("textarea",{required:"",ref_key:"textarea",ref:c,class:"h-96 w-full"},`\r
                        `,512)])]),e("div",Ce,[o(_)==0?(l(),i("button",Ue,r(s.$t("save")),1)):d("",!0),o(_)==1?(l(),i("button",Pe,[u(r(s.$t("save"))+"... ",1),w(N,{size:"small"})])):d("",!0),w(I,{"enter-active-class":" transition-all  ","enter-from-class":" opacity-0  -translate-y-10","enter-to-class":"  opacity-1 translate-y-0","leave-active-class":"","leave-from-class":"","leave-to-class":""},{default:x(()=>[b.value!=""?(l(),i("span",Ve,r(b.value),1)):d("",!0)]),_:1})])],32)])])}}};export{qe as default};
