var previous_position = 0;

function switch_mode() {
  const mode_status = document.getElementsByClassName("switch");
  if (mode_status.length === 0) {
    document.getElementsByClassName("main_root")[0].classList.add("switch");
  } else {
    document.getElementsByClassName("main_root")[0].classList.remove("switch");
  }
}

function animated_scroll() {
  console.log(document.body, document.scrollTop);
  if (
    document.body.scrollTop > 350 ||
    document.documentElement.scrollTop > 350
  ) {
    document.getElementById("myImg").className = "slideUp";
  }
}

const main_feed_scroller = document.querySelector(".main_root");
const tab_header = document.querySelector(".mobile_header_two");
document.addEventListener("scroll", (event) => {
  if (window.scrollY && window.scrollY > previous_position) {
    // tab_header.style.display = "none";
    tab_header.classList.add("tab_header_transition_hide");
    tab_header.classList.remove("tab_header_transition_show");
  } else if (window.scrollY < previous_position) {
    tab_header.classList.add("tab_header_transition_show");
    tab_header.classList.remove("tab_header_transition_hide");
  }
  previous_position = window.scrollY;
});
