function cityDropdown(event) {
  event.preventDefault();
  if (event.target.value.length > 0) {
    if (event.target.value === "london") {
      alert(`It is ${londonDate} in Europe/London.`);
    }
    if (event.target.value === "los angeles") {
      alert(`It is ${LosAngelesDate} in America/Los Angeles.`);
    }
    if (event.target.value === "auckland") {
      alert(`It is ${aucklandDate} in Pacific/Auckland.`);
    }
  }
}
let londonDate = moment()
  .tz("Europe/London")
  .format("dddd MMMM Do, YYYY h:mm A");

let londonOption = document.querySelector("#london");

let LosAngelesDate = moment()
  .tz("America/Los_Angeles")
  .format("dddd MMMM Do, YYYY h:mm A");

let losAngelesOption = document.querySelector("#los-angeles");

let aucklandDate = moment()
  .tz("Pacific/Auckland")
  .format("dddd MMMM Do, YYYY h:mm A");
let aucklandOption = document.querySelector("#auckland");

let formElement = document.querySelector("form");
formElement.addEventListener("change", cityDropdown);
