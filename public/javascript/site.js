
// register our service-worker

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/serviceworker.js", {
    scope: "/"
  }).then(function (reg) {
    console.log("service-worker register success", reg);
  }, function (err) {
    console.log("service-worker register fail", err);
  });
}


document.addEventListener("DOMContentLoaded", function (event) {
    document.body.appendChild(document.createTextNode('Javascript loaded'));
});