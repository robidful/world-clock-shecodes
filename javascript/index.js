function updateTime() {
  // Rome
  let romeElement = document.querySelector("#rome");
  let romeDateElement = romeElement.querySelector(".date");
  let romeTimeElement = romeElement.querySelector(".time");
  let romeTimeNow = moment().tz("Europe/Rome");

  romeDateElement.innerHTML = romeTimeNow.format("MMMM Do, YYYY");
  romeTimeElement.innerHTML = `${romeTimeNow.format(
    "h:mm:ss"
  )} <small>${romeTimeNow.format("A")}</small>`;

  //Brasilia

  let brasiliaElement = document.querySelector("#brasilia");
  let brasiliaDateElement = brasiliaElement.querySelector(".date");
  let brasiliaTimeElement = brasiliaElement.querySelector(".time");
  let brasiliaTimeNow = moment().tz("Brazil/East");

  brasiliaDateElement.innerHTML = brasiliaTimeNow.format("MMMM Do, YYYY");
  brasiliaTimeElement.innerHTML = `${brasiliaTimeNow.format(
    "h:mm:ss"
  )} <small>${brasiliaTimeNow.format("A")}</small>`;

  //Toronto

  let torontoElement = document.querySelector("#toronto");
  let torontoDateElement = torontoElement.querySelector(".date");
  let torontoTimeElement = torontoElement.querySelector(".time");
  let torontoTimeNow = moment().tz("America/Toronto");

  torontoDateElement.innerHTML = torontoTimeNow.format("MMMM Do, YYYY");
  torontoTimeElement.innerHTML = `${torontoTimeNow.format(
    "h:mm:ss"
  )} <small>${torontoTimeNow.format("A")}</small>`;
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector(".cities");
  citiesElement.innerHTML = `<div class="city-block">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:mm:ss")}
          <small>${cityTime.format("A")}</small></div>
        </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", updateCity);
