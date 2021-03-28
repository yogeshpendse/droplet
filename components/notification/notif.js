$("button").click((e) => {
  let list = $(".fileList");
  if (list.hasClass("closed")) {
    list.addClass("showing");
    list.removeClass("closed");
  } else if (list.hasClass("showing")) {
    list.addClass("closed");
    list.removeClass("showing");
  } else {
    list.toggleClass("closed");
  }
});
