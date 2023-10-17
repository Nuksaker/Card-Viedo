const video_thumbs = document.querySelectorAll(".thum-video");
video_thumbs.forEach((video_thumb) => {
    video_thumb.addEventListener("mouseover", function () {
        this.style.opacity = 1;
        this.play();
        this.playbackRate = 1;
    });
});

video_thumbs.forEach((video_thumb) => {
    video_thumb.addEventListener("mouseleave", function () {
        this.style.opacity = 0;
        this.pause();
    });
});

$(".video-card-title").each(function () {
    if ($(this).text().length > 50) {
        $(this).html($(this).text().substring(0, 80) + "...");
    }
});

const video_modalScreens = document.querySelectorAll(
    ".video-modal-screen"
);
const video_card = document.querySelectorAll(".video-card-body");
const modal_closeBtns = document.querySelectorAll(".vid-modal-close-btn");

var videoModal = function (modalClick) {
    video_modalScreens[modalClick].classList.add("active");
};
video_card.forEach((video_card, i) => {
    video_card.addEventListener("click", () => {
        videoModal(i);
    });
});

modal_closeBtns.forEach((modal_closeBtn) => {
    modal_closeBtn.addEventListener("click", () => {
        video_modalScreens.forEach((video_modalScreens) => {
            video_modalScreens.classList.remove("active");
        });
    });
});