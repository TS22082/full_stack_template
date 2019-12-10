$(document).ready(() => {
  console.log("hello");

  $.ajax({
    method: "GET",
    url: "/api"
  }).then(res => {
    console.log(res);
  });
});
