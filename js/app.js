async function buscaApi() {

    const response = await fetch("https://swapi.info/api/people");
    const data = await response.json();
    const tabela = document.getElementById("tabela-linhas");
    
    data.forEach((item) => {
        const tr= document.createElement("tr");

        const td1 = document.createElement("td");
        const name = item.name;
        td1.innerHTML = name;
        tr.appendChild(td1);
       
        const td2 = document.createElement("td");
        const birthYear = item.birth_year;
        td2.innerHTML = birthYear;
        tr.appendChild(td2); 

        const td3 = document.createElement("td");
        const gender = item.gender;
        td3.innerHTML = gender;
        tr.appendChild(td3);

        const td4 = document.createElement("td");
        const hairColor = item.hair_color;
        td4.innerHTML = hairColor;
        tr.appendChild(td4);

        const td5 = document.createElement("td");
        const eyeColor = item.eye_color;
        td5.innerHTML = eyeColor;
        tr.appendChild(td5);
          
        tabela.appendChild(tr);
    });
}
document.addEventListener("DOMContentLoader", buscaApi());
