import{r as n,n as s,p as i}from"./app.69871223.js";function k(){const o=n([]),u=n([]),r=n(""),a=n(0),c=n(!1),v=n(1);return{filterUniversities:async e=>{r.value="";try{a.value=3;let t=await s.post("/api/universities-filter",e,{headers:{Authorization:`Bearer ${localStorage.token}`}});o.value=t.data.data,a.value=!1}catch(t){t.response.status==401&&(i.push({name:"login",params:{redirect:"not-login"}}),window.localStorage.removeItem("token"),window.localStorage.removeItem("user"))}},isAll:c,page:v,universities:o,university:u,errors:r,loading:a,getUniversities:async()=>{r.value="";try{a.value=!0;let e=await s.get("/api/universities?page="+v.value,{headers:{Authorization:`Bearer ${localStorage.token}`}});v.value==1?o.value=e.data.data:o.value=o.value.concat(e.data.data),a.value=!1,e.data.data.length==0&&(c.value=!0)}catch(e){e.response.status==401&&(i.push({name:"login",params:{redirect:"not-login"}}),window.localStorage.removeItem("token"),window.localStorage.removeItem("user"))}},getAllUniversities:async()=>{r.value="";try{a.value=!0;let e=await s.get("/api/university/all",{headers:{Authorization:`Bearer ${localStorage.token}`}});o.value=e.data.data,a.value=!1}catch(e){e.response.status==401&&(i.push({name:"login",params:{redirect:"not-login"}}),window.localStorage.removeItem("token"),window.localStorage.removeItem("user"))}},getUniversity:async e=>{r.value="";try{a.value=!0;let t=await s.get("/api/universities/"+e,{headers:{Authorization:`Bearer ${localStorage.token}`}});a.value=0,u.value=t.data.data}catch(t){t.response.status==401&&(i.push({name:"login",params:{redirect:"not-login"}}),window.localStorage.removeItem("token"),window.localStorage.removeItem("user"))}},createUniversity:async e=>{r.value="";try{a.value=!0,await s.post("/api/universities",e,{headers:{Authorization:`Bearer ${localStorage.token}`}}),a.value=!1,i.push({name:"admin.university.index"})}catch(t){if(t.response.status==422){a.value=0;for(const l in t.response.data.errors)r.value+=t.response.data.errors[l][0]+`
`}}},updateUniversity:async(e,t)=>{r.value="";try{a.value=!0,await s.post("/api/universities/"+t,e,{headers:{Authorization:`Bearer ${localStorage.token}`}}),a.value=!1,i.push({name:"admin.university.index"})}catch(l){if(a.value=0,l.response.status==422)for(const d in l.response.data.errors)r.value+=l.response.data.errors[d][0]+`	
`}},destroyUniversity:async e=>{r.value="";try{a.value=!0,await s.delete("/api/universities/"+e,{headers:{Authorization:`Bearer ${localStorage.token}`}}),a.value=!1}catch(t){a.value=0,t.response.status=="500"&&(r.value="Impossible de supprimer ce pays")}},getUniversity2:async e=>{r.value="";try{a.value=!0;let t=await s.get("/api/universities2/"+e,{headers:{Authorization:`Bearer ${localStorage.token}`}});a.value=0,u.value=t.data.data}catch(t){t.response.status==401&&(i.push({name:"login",params:{redirect:"not-login"}}),window.localStorage.removeItem("token"),window.localStorage.removeItem("user"))}}}}export{k as u};
