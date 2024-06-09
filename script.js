document.querySelector("button").addEventListener("click",result)

var container = document.createElement("div");
container.className = "container";

var row = document.createElement("div");
row.className = "row";

var div = document.createElement("div");
div.className = "main";

async function result()
{
    div.innerHTML = " ";
    try{
        var ask = document.getElementById("breed").value;

        var data = await fetch(`https://dog.ceo/api/breed/${ask}/images/random`)
        var res = await data.json();
        console.log(res);

        var up = ask.toUpperCase();
        
        var col = document.createElement("div");  
        col.className = "col-lg-8";
        col.innerHTML = 
        `<div class="card" style="background-color: black;">
            <img src = "${res.message}" alt="image" class="image">
            <div class="card-body">
                <h5 class="card-title">BREED NAME : ${up}</h5>
             </div>
        </div>`
        
        div.append(col);
        row.append(div);
        container.append(row)
        document.body.append(container)
    }
    catch{
        console.log("error");
    }
}