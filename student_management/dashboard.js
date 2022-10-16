
function displayData() {
    let data=JSON.parse(localStorage.getItem("information")) || [];
   
    
    let container=document.getElementById("container");
    container.innerHTML=null

    data.forEach(function(elem,index){
        let box=document.createElement("div")
        let img=document.createElement("img")
        img.src=elem.image;
        let name=document.createElement("p")
        name.innerText=`Name: ${elem.name}`;
        let unit=document.createElement("p")
        unit.innerText=`Unit: ${elem.unit}`;
        let course=document.createElement("p")
        course.innerText=`Course: ${elem.course}`;
        let batch=document.createElement("p")
        batch.innerText=`Batch: ${elem.batch}`;

        let button=document.createElement("button")
        button.innerText="Delete"
        button.addEventListener("click", function(){
            remove(index);
        });
        box.append(img,name,unit,course,batch,button)
        container.append(box);
    });
    
}
displayData();


function remove(index) {
    console.log(index)
    let data=JSON.parse(localStorage.getItem("information")) || [];

    let newData=data.filter(function (elem,i){
        if(i===index){
            let trash=JSON.parse(localStorage.getItem("trash")) || [];
            trash.push(elem)
            localStorage.setItem("trash",JSON.stringify(trash));
        }else{
            return i !== index;
        }
    });
    localStorage.setItem("information",JSON.stringify(newData));
    window.location.reload();
    displayData();
    calculate();
    showingbatch();
    console.log(newData)
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
        obj[data[i].batch]++;
       
    }
   localStorage.setItem("batches",JSON.stringify(obj));
    console.log(obj);
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



