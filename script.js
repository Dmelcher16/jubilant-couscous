var openModal = $(".modal");
var openBtn = $("#burrito");
var closeModal = $(".modal-close");

closeModal.on("click", function () {
    openModal.removeClass("modal is-active").addClass("modal");
  });

openBtn.on("click", function () {
  openModal.removeClass("modal").addClass("modal is-active");
});
