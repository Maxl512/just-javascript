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
addName();*/
// Simple funcion para agregar nobmres
let people = [];
const addPerson = () =>{
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

    index = document.createTextNode(people.length);


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
};
const displayPerson =()=>{
    let option = document.querySelector("#options").value;
    
    let index = people[option][0]
    let name = people[option][1];
    let age = people[option][2];
    let weight = people[option][3];

    document.querySelector("#table-container-display__tr-ht--index").innerHTML = index;
    document.querySelector("#table-container-display__tr-ht--name").innerHTML = name;
    document.querySelector("#table-container-display__tr-ht--age").innerHTML = age;
    document.querySelector("#table-container-display__tr-ht--weight").innerHTML = weight;

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
        option.setAttribute("value", i);
        select.appendChild(option);
        i++;
    };
    displayPerson();
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

    let tBtn = btn.parentNode;
    let rTBtn = tBtn.parentNode;

    let ind = rTBtn.firstChild;
    let name = ind.nextSibling;
    let age = name.nextSibling;
    let weight = age.nextSibling;

    ind.setAttribute("contentEditable", "true");
    name.setAttribute("contentEditable", "true");
    age.setAttribute("contentEditable", "true");
    weight.setAttribute("contentEditable", "true");


    let newBtn = document.createElement("BUTTON");
    let newBtnText = document.createTextNode("Guardar");
    newBtn.appendChild(newBtnText);
    newBtn.setAttribute("id" , `${"newButton" + index}`)
    newBtn.setAttribute("onclick", `saveValues(${index});`);
    tBtn.appendChild(newBtn);

};
function saveValues(index) {
    let newBtn = document.querySelector(`#${"newButton" + index}`);
    let btn = document.querySelector(`#${"button" + index}`);
    btn.style.display = "block";

    let tBtn = btn.parentNode;
    let rTBtn = tBtn.parentNode;

    tBtn.removeChild(newBtn);

    let ind = rTBtn.firstChild;
    let name = ind.nextSibling;
    let age = name.nextSibling;
    let weight = age.nextSibling;

    ind.setAttribute("contentEditable", "false");
    name.setAttribute("contentEditable", "false");
    age.setAttribute("contentEditable", "false");
    weight.setAttribute("contentEditable", "false");
};
function deleteValues(index) {
    let btn = document.querySelector(`#${"deleteButton" + index}`);
    btn.style.display = "block";

    let tBtn = btn.parentNode;
    let rTBtn = tBtn.parentNode;
    rTBtn.removeChild(tBtn);
 
};
