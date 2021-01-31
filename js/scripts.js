$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
  });

$('.navlinks li').click(function () {
  const navigationTrigger = document.querySelector("#navigationTrigger");
  if (navigationTrigger.classList.contains("active")) {
    $("#navigationTrigger").toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
  }
});