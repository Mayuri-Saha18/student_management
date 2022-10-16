function info(n,c,u,i,b){
    this.name=n;
    this.course=c;
    this.unit=u;
    this.image=i;
    this.batch=`FT-web${b}`;

}

function storing(event) {
    event.preventDefault();
    let form=document.getElementById("students_data");
    let name=form.name.value;
    let course=form.course.value;
    let unit=form.unit.value;
    let image=form.image.value;
    let batch=form.batch.value;

    console.log(name,course,unit,image,batch)
    let student= new info(name,course,unit,image,batch);
    let data=JSON.parse(localStorage.getItem("information")) || [];
    data.push(student);
    localStorage.setItem("information",JSON.stringify(data));
    console.log(student)

}
function calculate(){
    let data=JSON.parse(localStorage.getItem("information")) || [];
    let obj={};
     
    for(let i=0;i<data.length;i++){
        if(!obj[data[i].batch]){
            obj[data[i].batch]=0;
           
        }
        
    }

    for(let i=0;i<data.length;i++){
        // document.querySelector("p").innerText=obj[data[i].batch];
        obj[data[i].batch]++;
       
    }
    localStorage.setItem("batches",JSON.stringify(obj));
    // localStorage.setItem("information",JSON.stringify(data));
    // document.querySelector("p").innerText=obj[data[i].batch];
    console.log(obj);
//    for(let key in obj){
//     console.log(key,obj[key])
//     document.querySelector("h4").innerText=(key);
//     document.querySelector("p").innerText=(obj[key]);
//    }

}
calculate();
function showingbatch(){
    let navbar=document.querySelector("#navbar")
    let batchesLS=JSON.parse(localStorage.getItem("batches")) || [];
    for(let key in batchesLS){
        let web=document.createElement("p")
        web.innerText=`${key}-${batchesLS[key]}`;
        navbar.append(web);
    }
}
    showingbatch();