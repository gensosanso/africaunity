import{r as n,n as s}from"./app.69871223.js";function k(){const u=n([]),i=n([]),a=n(""),e=n(0);return{sizeCompanies:u,sizeCompany:i,errorsSC:a,loading:e,getSizeCompanies:async()=>{a.value="",e.value=!0;let t=await s.get("/api/sizeCompanies",{headers:{Authorization:`Bearer ${localStorage.token}`}});u.value=t.data.data,e.value=!1},getSizeCompany:async t=>{a.value="",e.value=!0;let r=await s.get("/api/sizeCompanies/"+t,{headers:{Authorization:`Bearer ${localStorage.token}`}});e.value=0,i.value=r.data.data},createSizeCompany:async t=>{a.value="";try{e.value=!0,await s.post("/api/sizeCompanies",t,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1}catch(r){if(r.response.status==422){e.value=0;for(const o in r.response.data.errorsSC)a.value+=r.response.data.errorsSC[o][0]+`
`}}},updateSizeCompany:async(t,r)=>{a.value="";try{e.value=!0,await s.put("/api/sizeCompanies/"+t,r,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1}catch(o){if(e.value=0,o.response.status==422)for(const l in o.response.data.errorsSC)a.value+=o.response.data.errorsSC[l][0]+`	
`}},destroySizeCompany:async t=>{a.value="";try{e.value=!0,await s.delete("/api/sizeCompanies/"+t,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1}catch(r){e.value=0,r.response.status=="500"&&(a.value="Impossible de supprimer ce pays")}}}}function z(){const u=n([]),i=n([]),a=n(""),e=n(0);return{workDepartments:u,workDepartment:i,errorsWD:a,loading:e,getWorkDepartments:async()=>{a.value="",e.value=!0;let t=await s.get("/api/workDepartments",{headers:{Authorization:`Bearer ${localStorage.token}`}});u.value=t.data.data,e.value=!1},getWorkDepartment:async t=>{a.value="",e.value=!0;let r=await s.get("/api/workDepartments/"+t,{headers:{Authorization:`Bearer ${localStorage.token}`}});e.value=0,i.value=r.data.data},createWorkDepartment:async t=>{a.value="";try{e.value=!0,await s.post("/api/workDepartments",t,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1}catch(r){if(r.response.status==422){e.value=0;for(const o in r.response.data.errorsWD)a.value+=r.response.data.errorsWD[o][0]+`
`}}},updateWorkDepartment:async(t,r)=>{a.value="";try{e.value=!0,await s.put("/api/workDepartments/"+t,r,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1}catch(o){if(e.value=0,o.response.status==422)for(const l in o.response.data.errorsWD)a.value+=o.response.data.errorsWD[l][0]+`	
`}},destroyWorkDepartment:async t=>{a.value="";try{return e.value=!0,await s.delete("/api/workDepartments/"+t,{headers:{Authorization:`Bearer ${localStorage.token}`}}),e.value=!1,!0}catch{e.value=0,a.value="Impossible de supprimer ce workDepartment"}}}}export{z as a,k as u};
