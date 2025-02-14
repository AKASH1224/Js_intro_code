const clock = document.getElementById('clock');
// The setInterval() method of the Window interface repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
