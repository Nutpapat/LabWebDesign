(function () {
  var a = 100;

  setTimeout(function () {
    setInterval(function () {
      var p = document.getElementById("log2");
      p.append(`script2 a is ` + (--a) + '\n');
    }, 1000)
  }, 500)
})();