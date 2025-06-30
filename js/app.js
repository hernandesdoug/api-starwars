async function buscaApi(){
    const tabela = document.getElementById("tabela-linhas");
    try{
        const response = await fetch("https://swapi.info/api/people");
        const data = await response.json();
        
        data.forEach((item) => {
          const row = tabela.insertRow();

          const name = row.insertCell();
          name.textContent = item.name;

          const birthYear = row.insertCell();
          birthYear.textContent = item.birth_year;

          const gender = row.insertCell();
          gender.textContent = item.gender;

          const hairColor = row.insertCell();
          hairColor.textContent = item.hair_color;

          const eyeColor = row.insertCell();
          eyeColor.textContent = item.eye_color;
    
        });
    } catch(erro) {
        console.error("Erro ao retornar dados da API", erro);
    }
}
document.addEventListener("DOMContentLoader", buscaApi());
