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

let monster = document.querySelector("#monster");
let monsterEyeL = document.querySelector("#eye-L");
let monsterEyeR = document.querySelector("#eye-R");
let monsterMouth = document.querySelector("#mouth");

let shotOne = document.querySelector("#shotOne");
let shotTwo = document.querySelector("#shotTwo");
let shotThree = document.querySelector("#shotThree");

let kills = document.querySelector("#kills");
let killsCount = kills.textContent;
killsCount = parseInt(killsCount);

let score = document.querySelector("#score");
let scoreCount = score.textContent;
scoreCount = parseInt(scoreCount);

let lives = document.querySelector("#lives");
let livesCount = lives.textContent;
livesCount = parseInt(livesCount);

const monsterAttack = () =>{
    let monsterPosition = monster.getBoundingClientRect();
    let topMonster = monsterPosition.top;
    let XMonster = monsterPosition.right;
    monster.style.transition = "right 3s linear";
    monster.style.right = "800px";
    if (XMonster >= 780) {
        console.log(XMonster);
        alert("perdite")
    };
};
monsterAttack();
const shot = (time) =>{
    let visible = ammo.getAttribute("hidden");
    if(visible === null){
        ammo.style.width = "150%";
        ammo.style.height = "100%";
        ammo.style.left ="1100px";
        ammo.style.transition ="width .2s linear, height .2s linear, left .5s ease-out";
        setTimeout(() => {
            ammo.setAttribute("hidden", "");
        }, 510);

        killMonster(time);
    } else{
        if (time === 1) {
            shotOne.style.backgroundColor = "#000";
            shotOne.style.border = "1px solid #fff";
            shotOne.style.color = "#eee";
        } else if (time === 2){
            shotTwo.style.backgroundColor = "#000";
            shotTwo.style.border = "1px solid #fff";
            shotTwo.style.color = "#eee";
        } else if (time === 3){
            shotThree.style.backgroundColor = "#000";
            shotThree.style.border = "1px solid #fff";
            shotThree.style.color = "#eee";
        };
    };
};
const reload =() =>{
    shotOne.style.backgroundColor = "#fff";
    shotOne.style.border = "1px solid #000";
    shotOne.style.color = "#000";

    shotTwo.style.backgroundColor = "#fff";
    shotTwo.style.border = "1px solid #000";
    shotTwo.style.color = "#000";

    shotThree.style.backgroundColor = "#fff";
    shotThree.style.border = "1px solid #000";
    shotThree.style.color = "#000";

    ammo.style.transition ="none";
    ammo.style.width = "50%";
    ammo.style.height = "50%";
    ammo.style.left ="0%";

    ammo.removeAttribute("hidden");
};
const killMonster = (time) =>{
    let gunPosition = gun.getBoundingClientRect();
    let monsterPosition = monster.getBoundingClientRect();
    let topGun = gunPosition.top;
    let topMonster = monsterPosition.top;
    let XMonster = monsterPosition.right;
    if(topGun == topMonster && time == 1){    
        monster.style.right = `${1440 - XMonster}px`;

        monster.style.backgroundColor = "#660";
        monster.style.top = "55%";
        monster.style.borderBottom = "10px solid #aaa";
        monster.style.borderTop="50px solid #000";
        monster.style.borderRadius ="0% 0% 30% 30%";
        monsterMouth.style.borderRadius = "0% 0% 0% 0%";
        monsterMouth.style.backgroundColor = "#400";
        monsterEyeL.style.backgroundColor="#000";
        monsterEyeR.style.backgroundColor="#000";
   
        shotOne.style.display = "none";
        shotTwo.style.display = "inline-block";

        monsterAttack();
    } else if(topGun == topMonster && time == 2){        
        monster.style.right = `${1440 - XMonster}px`;

        monster.style.backgroundColor = "#600";
        monster.style.borderBottom = "10px solid #333";
        monster.style.borderTop="50px solid #444";
        monster.style.borderRadius ="0% 0% 30% 30%";
        monsterMouth.style.borderRadius = "50% 50% 0% 0%";
        monsterMouth.style.backgroundColor = "#100";
        monsterEyeL.style.backgroundColor="#000";
        monsterEyeR.style.backgroundColor="#000";
        monster.style.top = "10%";

        shotTwo.style.display = "none";
        shotThree.style.display = "inline-block";

        monsterAttack();
    } else if(topGun == topMonster && time == 3){
        monster.style.right = `${1440 - XMonster}px`;

        monster.style.backgroundColor = "#fff";
        monster.style.borderRadius = "50% 50% 0% 0%";
        monster.style.borderBottom = "none";
        monster.style.borderTop = "none";
        monsterMouth.style.borderRadius = "50% 50% 0% 0%";
        monsterMouth.style.height ="25px";
        monsterMouth.style.backgroundColor = "#aaa";
        monsterEyeL.style.backgroundColor="#aaa";
        monsterEyeR.style.backgroundColor="#aaa";

        monster.style.transition = "right 1s linear, top 1s linear, width 1s linear, height 1s linear";
        
        setTimeout(() => {
            monster.style.top = "450px";
            monster.style.right = "640px";
            monster.style.width = "100px";
            monster.style.height = "40px";

            monsterEyeL.style.display = "none";
            monsterEyeR.style.display = "none";
            monsterMouth.style.display ="none";  
        }, 1000);

        setTimeout(() => {
            monster.style.display ="none";

            killsCount += 1;
            kills.innerHTML = killsCount;

            scoreCount += 100;
            score.innerHTML = scoreCount;
   
            shotThree.style.display = "none";
            shotOne.style.display = "inline-block";

            anotherOne();
        }, 2000);
    };
}; 
const anotherOne =() =>{
    monster.style.transition ="none";
    monster.style.display = "block";
    monster.style.position = "absolute";
    monster.style.width = "200px";
    monster.style.height = "180px";
    monster.style.backgroundColor = "#070";
    monster.style.borderTop = "50px solid #020";
    monster.style.borderBottom = "10px solid #020";
    monster.style.top = "10%";
    monster.style.right = "10px";
    monster.style.borderRadius = "0% 0% 30% 30%";

    setTimeout(() => {
        monster.style.transition ="top .1s linear, right 3s linear";
        monster.style.right ="800px";
   
        monsterEyeL.style.display = "inline-block";
        monsterEyeL.style.backgroundColor = "#000";
        monsterEyeL.style.borderTop = "5px solid #aaa";
    
        monsterEyeR.style.display = "inline-block";
        monsterEyeR.style.backgroundColor = "#000";
        monsterEyeR.style.borderTop = "5px solid #aaa";
    
        monsterMouth.style.display ="inline-block";  
        monsterMouth.style.backgroundColor = "#700";
        monsterMouth.style.borderRadius = "0% 0% 50% 50%";
    }, 100);
};
const moveGun = (event, position) =>{
    let dir = event.which || event.keyCode;  
    if(dir === 40){
        position += 25; 
        gun.style.top = `${position}%`;
    } else if (dir === 38){
        position -= 20;
        gun.style.top = `${position}%`;
    };
};  