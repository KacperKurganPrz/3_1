import { key } from "./api.js"

(function () {
  let text = "";
  document.getElementById("confirm").addEventListener("click", function () {
    text = document.getElementById("search").value;
    const response = fetch(
      'https://api.restcountries.com/countries/v5/capitals/' + text,
      { headers: { 'Authorization': 'Bearer ' + key } }
    ).then(function (response) {return response.json(); }).then(function (data) {
      const country = data.data.objects[0];
      const element = document.createElement("tr");
      element.innerHTML = `<td>${country.names.common}</td> <td>${country.capitals[0].name}</td> <td>${country.population}</td> <td>${country.region}</td> <td>${country.subregion}</td>`
      document.getElementById("tabela").appendChild(element);
    })
  })
  
})();

