/* =====================================================
   HERO TYPING ANIMATION (SMOOTH & PROFESSIONAL)
===================================================== */
const titleText = "Hi, I’m Ganesh Boddupally";
const subtitleText =
  "AI & Full-Stack Engineer building intelligent, scalable digital systems.";

const titleElement = document.getElementById("heroTitle");
const subtitleElement = document.getElementById("heroSubtitle");

let titleIndex = 0;
let subtitleIndex = 0;

function typeTitle() {
  if (!titleElement) return;

  if (titleIndex < titleText.length) {
    titleElement.textContent += titleText.charAt(titleIndex);
    titleIndex++;
    setTimeout(typeTitle, 60);
  } else {
    setTimeout(typeSubtitle, 400);
  }
}

function typeSubtitle() {
  if (!subtitleElement) return;

  if (subtitleIndex < subtitleText.length) {
    subtitleElement.textContent += subtitleText.charAt(subtitleIndex);
    subtitleIndex++;
    setTimeout(typeSubtitle, 22);
  }
}

/* Start typing on load */
window.addEventListener("DOMContentLoaded", () => {
  if (titleElement && subtitleElement) {
    titleElement.textContent = "";
    subtitleElement.textContent = "";
    typeTitle();
  }
});

/* =====================================================
   LOTTIE AVATAR (WELCOME ROBOT)
===================================================== */
const avatarContainer = document.getElementById("avatar");

if (avatarContainer && window.lottie) {
  lottie.loadAnimation({
    container: avatarContainer,
    renderer: "svg",
    loop: true,
    autoplay: true,

    /* Friendly professional avatar */
    path: "https://assets9.lottiefiles.com/packages/lf20_1pxqjqps.json"
  });
}

/* =====================================================
   SCROLL PROGRESS INDICATOR (TOP BAR)
===================================================== */
const progressBar = document.getElementById("scrollProgress");

if (progressBar) {
  window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = progress + "%";
  });
}

/* =====================================================
   ROADMAP PIN CLICK → EXPAND DETAILS
===================================================== */
function toggleProject(pin) {
  if (!pin) return;

  /* Close other open pins */
  document.querySelectorAll(".pin.active").forEach((activePin) => {
    if (activePin !== pin) {
      activePin.classList.remove("active");
    }
  });

  /* Toggle current pin */
  pin.classList.toggle("active");
}

/* =====================================================
   OPTIONAL: SMOOTH SCROLL FOR NAV LINKS
===================================================== */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});
