function updateTime() {
  //zurich
  let zurichElement = document.querySelector("#zurich");
  let zurichDateElement = zurichElement.querySelector(".date");
  let zurichTimeElement = zurichElement.querySelector(".time");
  let zurichTime = moment().tz("Europe/Zurich");

  zurichDateElement.innerHTML = zurichTime.format("MMMM Do YYYY");
  zurichTimeElement.innerHTML = zurichTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //dublin
  let dublinElement = document.querySelector("#dublin");
  let dublinDateElement = dublinElement.querySelector(".date");
  let dublinTimeElement = dublinElement.querySelector(".time");
  let dublinTime = moment().tz("Europe/Dublin");

  dublinDateElement.innerHTML = dublinTime.format("MMMM Do YYYY");
  dublinTimeElement.innerHTML = dublinTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //mexico city
  let mexicoCityElement = document.querySelector("#mexico-city");
  let mexicoCityDateElement = mexicoCityElement.querySelector(".date");
  let mexicoCityTimeElement = mexicoCityElement.querySelector(".time");
  let mexicoCityTime = moment().tz("America/Mexico_City");

  mexicoCityDateElement.innerHTML = mexicoCityTime.format("MMMM Do YYYY");
  mexicoCityTimeElement.innerHTML = mexicoCityTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //sydney
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
