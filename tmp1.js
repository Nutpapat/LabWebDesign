(function () {
  var a = 100;

  setInterval((function () {
    var p = document.getElementById("log1");
    p.append(`script1 a is ` + (++a) + '\n');
  }), 1000);
})();