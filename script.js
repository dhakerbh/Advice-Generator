const request = new XMLHttpRequest();
request.open("GET", "https://api.adviceslip.com/advice");
request.send();
request.responseType = "json";
var id, advice;
request.onload = () => {
  res = request.response;
  var id = res["slip"]["id"];
  var advice = res["slip"]["advice"];
  title = document.getElementById("number");
  title.innerHTML = id;
  adv = document.getElementById("advice");
  adv.innerHTML = advice;
};

function GetAdvice() {
  const request = new XMLHttpRequest();
  request.open("GET", "https://api.adviceslip.com/advice");
  request.send();
  request.responseType = "json";
  var id, advice;
  request.onload = () => {
    res = request.response;
    var id = res["slip"]["id"];
    var advice = res["slip"]["advice"];
    title = document.getElementById("number");
    title.innerHTML = id;
    adv = document.getElementById("advice");
    adv.innerHTML = advice;
  };
}
