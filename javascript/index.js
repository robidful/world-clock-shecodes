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

setInterval(updateTime, 1000);
