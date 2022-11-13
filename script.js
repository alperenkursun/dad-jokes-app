$(function () {
  $(joke).load("https://icanhazdadjoke.com/ p.subtitle");
  $("button").click(function () {
    $(joke).load("https://icanhazdadjoke.com/ p.subtitle");
  });
});
