/*const addName = () =>{
    let quantity = prompt("Cuantas personas quieres agregar?");
    quantity = parseInt(quantity) + 1;
    let personas = [];
    if (quantity !== undefined) {
        const setName =() =>{
            for ( i = 1; i < quantity; i++) {
                let name = prompt("Cual es tu nombre?");
                let edad = prompt("Cual es tu edad?");
                let peso = prompt("Cuanto pesas?");
                if (name != undefined && edad != undefined && peso != undefined) {
                    let persona = [name, edad, peso];      
                    personas.push(persona);
                } else{
                    alert("Te falto agreegar un dato");
                    let decide = prompt("quieres intentar de nuevo? S-SI, N-NO");
                    if (decide == "S") {
                        setName();
                    } else{
                        alert("ok");
                    };
                };
                console.log(personas);     
            };
        };
        setName();
    } else{
        alert("no ingresaste ningun valor");
        let decide = prompt("quieres intentar de nuevo? S-SI, N-NO");
        if (decide == "S") {
            addName();
        } else{
            alert("ok");
        };
    };
};
addName();
// Simple funcion para agregar nobmres
let people = [];
const addPerson = () =>{
    if (people.length == 0) {
        let index = people.length + 1;
        let name = document.querySelector("#name").value;
        let age = document.querySelector("#age").value;
        let weight = document.querySelector("#weight").value;
        let person = [index, name, age, weight + "kg"];  
        people.push(person);
        localStorage.setItem("Personas", people);
        
        let list = document.querySelector("#table-container-list");
        let row = document.createElement("TR");
        
        let tdi = document.createElement("TD");
        let tdn = document.createElement("TD");
        let tda = document.createElement("TD");
        let tdw = document.createElement("TD");
        let tbtn = document.createElement("TD");
        let tbtnT = document.createElement("TD");;
        let btn = document.createElement("BUTTON");
        let btnTwo = document.createElement("BUTTON");
         
        name = document.createTextNode(name);
        age = document.createTextNode(age);
        weight = document.createTextNode(weight + "kg");
        
        let btnText = document.createTextNode("Editar");
        btn.appendChild(btnText);
        index.toString();
        btn.setAttribute("onclick", `changeValues(${index});`);
        btn.setAttribute("id", `${"button" + index}`);
    
        let btnTwoText = document.createTextNode("Delete");
        btnTwo.appendChild(btnTwoText);
        btnTwo.setAttribute("onclick", `deletePerson(${index});`);
        btnTwo.setAttribute("id", `${"deleteButton" + index}`);
    
        row.setAttribute("id", `${"row" +  index}`);
    
        let i = people.length - 1;
        i++;
        index = document.createTextNode(i);
    
    
        tdi.appendChild(index);
        tdn.appendChild(name);
        tda.appendChild(age);
        tdw.appendChild(weight);
        tbtn.appendChild(btn);
        tbtnT.appendChild(btnTwo);
        
        row.appendChild(tdi);
        row.appendChild(tdn);
        row.appendChild(tda);
        row.appendChild(tdw);
        row.appendChild(tbtn);
        row.appendChild(tbtnT);
    
        list.appendChild(row);
    
    
        createOptions();
    } else if(people.length > 0){

        let previousRow = document.querySelector(`#${"row" + people.length}`);
        let previousRowTd = previousRow.firstElementChild;
        let index = previousRowTd.textContent;
        parseInt(index);
        index++;
        
        let name = document.querySelector("#name").value;
        let age = document.querySelector("#age").value;
        let weight = document.querySelector("#weight").value;
        let person = [index, name, age, weight + "kg"];  
        people.push(person);
        localStorage.setItem("Personas", people);
        
        let list = document.querySelector("#table-container-list");
        let row = document.createElement("TR");
        
        let tdi = document.createElement("TD");
        let tdn = document.createElement("TD");
        let tda = document.createElement("TD");
        let tdw = document.createElement("TD");
        let tbtn = document.createElement("TD");
        let tbtnT = document.createElement("TD");;
        let btn = document.createElement("BUTTON");
        let btnTwo = document.createElement("BUTTON");
         
        name = document.createTextNode(name);
        age = document.createTextNode(age);
        weight = document.createTextNode(weight + "kg");
        
        let btnText = document.createTextNode("Editar");
        btn.appendChild(btnText);

        btn.setAttribute("onclick", `changeValues(${index});`);
        btn.setAttribute("id", `${"button" + index}`);
    
        let btnTwoText = document.createTextNode("Delete");
        btnTwo.appendChild(btnTwoText);
        btnTwo.setAttribute("onclick", `deletePerson(${index});`);
        btnTwo.setAttribute("id", `${"deleteButton" + index}`);
    
        row.setAttribute("id", `${"row" +  index}`);
    
        
        index = document.createTextNode(index);
    
    
        tdi.appendChild(index);
        tdn.appendChild(name);
        tda.appendChild(age);
        tdw.appendChild(weight);
        tbtn.appendChild(btn);
        tbtnT.appendChild(btnTwo);
        
        row.appendChild(tdi);
        row.appendChild(tdn);
        row.appendChild(tda);
        row.appendChild(tdw);
        row.appendChild(tbtn);
        row.appendChild(tbtnT);
    
        list.appendChild(row);
    
    
        createOptions();

    }
};
const displayPerson =(i)=>{
    let row = document.querySelector(`#${"row" + i}`);

    let index = row.firstChild;
    let name = index.nextSibling;
    let age = name.nextSibling;
    let weight = age.nextSibling;

    document.querySelector("#table-container-display__tr-td--index").innerHTML = index.textContent;
    document.querySelector("#table-container-display__tr-td--name").innerHTML = name.textContent;
    document.querySelector("#table-container-display__tr-td--age").innerHTML = age.textContent;
    document.querySelector("#table-container-display__tr-td--weight").innerHTML = weight.textContent;

};
const createOptions = () =>{
    let quantityOfPeople = people.length;
    parseInt(quantityOfPeople);
    let i =  quantityOfPeople - 1;
    while (i < quantityOfPeople) {
        let name = people[i][1];
        let select = document.querySelector("#options");
        let option = document.createElement("OPTION");
        let optionText = document.createTextNode(name);
        option.appendChild(optionText);
        option.setAttribute("value", i + 1);
        option.setAttribute("id", `${"option"+(quantityOfPeople)}`);
        select.appendChild(option);

        i++;
    };
    displayPerson(i);
};
const showList = () => {
    let list = document.querySelector("#list");
    list.style.display= "block";
};
const hideList = () => {
    let list = document.querySelector("#list");
    list.style.display= "none";
};
function changeValues(index){
    let btn = document.querySelector(`#${"button" + index}`);
    btn.style.display = "none";

    let td = btn.parentNode;

    let row = document.querySelector(`#${"row" + index}`);

    let ind = row.firstChild;
    let name = ind.nextSibling;
    let age = name.nextSibling;
    let weight = age.nextSibling;

    name.setAttribute("contentEditable", "true");
    age.setAttribute("contentEditable", "true");
    weight.setAttribute("contentEditable", "true");


    let newBtn = document.createElement("BUTTON");
    let newBtnText = document.createTextNode("Guardar");
    newBtn.appendChild(newBtnText);
    newBtn.setAttribute("id" , `${"newButton" + index}`)
    newBtn.setAttribute("onclick", `saveValues(${index});`);
    td.appendChild(newBtn);

};
function saveValues(index) {
    let newBtn = document.querySelector(`#${"newButton" + index}`);
    let btn = document.querySelector(`#${"button" + index}`);
    btn.style.display = "block";
    
    let td = newBtn.parentNode;
    td.removeChild(newBtn);

    let row = document.querySelector(`#${"row" + index}`);

    let ind = row.firstChild;
    let name = ind.nextSibling;
    let age = name.nextSibling;
    let weight = age.nextSibling;

    name.setAttribute("contentEditable", "false");
    age.setAttribute("contentEditable", "false");
    weight.setAttribute("contentEditable", "false");

    let nameV = name.textContent;
    let ageV = age.textContent;
    let weightV = weight.textContent;

    people[index - 1].splice(1, 3, nameV, ageV, weightV);

    document.querySelector(`#${"option" + index}`).innerHTML = nameV;

    displayPerson(index);

};
function deletePerson(index) {
    let btn = document.querySelector(`#${"deleteButton" + index}`);
    btn.style.display = "block";

    let row = document.querySelector(`#${"row" + index}`);

    let table = row.parentNode;
    table.removeChild(row);

    people.splice(index - 1);
   
    let select = document.querySelector("#options");
    let option = document.querySelector(`#${"option" + index}`);
    select.removeChild(option);
};

*/
let gun = document.querySelector("#gun");
let ammo = document.querySelector("#ammo");
const shot = () =>{
    ammo.style.width = "150%";
    ammo.style.height = "100%";
    ammo.style.left ="730%";
    ammo.style.visibility ="hidden";
    ammo.style.transition ="width .2s linear, height .2s linear, left .4s ease-out, visibility .7s linear";
};
const reload =() =>{
    ammo.style.transition ="none";
    ammo.style.width = "50%";
    ammo.style.height = "50%";
    ammo.style.left ="0%";
    ammo.style.visibility ="visible";
    
};
function moveGun(event, position){
    let dir = event.which || event.keyCode;
    
    if(dir === 40){
        position += 15; 
        gun.style.top = `${position}%`;
    } else if (dir === 38){
        position -= 15;
        gun.style.top = `${position}%`;
    };

};