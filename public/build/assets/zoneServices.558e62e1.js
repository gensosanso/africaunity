import{r as s,I as c,n as r}from"./app.a6e0b7af.js";function y(){const l=c(),i=s([]),n=s([]),t=s(""),e=s(0);return{zones:i,zone:n,errors:t,loading:e,getZones:async()=>{t.value="",e.value=!0;let o=await r.get("/api/zones",{headers:{Authorization:`Bearer ${localStorage.token}`}});i.value=o.data.data,e.value=!1},getZone:async o=>{t.value="",e.value=!0;try{let a=await r.get("/api/zones/"+o,{headers:{Authorization:`Bearer ${localStorage.token}`}});e.value=0,n.value=a.data.data}catch{return!1}},createZone:async o=>{t.value="";try{e.value=!0,await r.post("/api/zones",o,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1,l.push({name:"admin.zone.index"})}catch(a){if(a.response.status==422){e.value=0;for(const u in a.response.data.errors)t.value+=a.response.data.errors[u][0]+`
`}}},updateZone:async o=>{t.value="";try{e.value=!0,await r.put("/api/zones/"+o,n.value,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1,l.push({name:"admin.zone.index"})}catch(a){if(e.value=0,a.response.status==422)for(const u in a.response.data.errors)t.value+=a.response.data.errors[u][0]+`	
`}},destroyZone:async o=>{t.value="";try{return e.value=!0,await r.delete(`/api/zones/${JSON.stringify(o)}`,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1,!0}catch(a){e.value=0,a.response.status=="500"&&(t.value="Impossible de supprimer cette zone")}}}}export{y as u};