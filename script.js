var sections = document.querySelectorAll(".main>div ");
var navLinks = document.querySelectorAll(".bar a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document.querySelector(".bar a[href*=" + id + "]").classList.add("");
      });
    }
  });
};

var tl = gsap.timeline();
tl.to(".loader", {
  rotate: 500,
  duration: 1,
});

tl.to(".loading-page", {
  display: "none",
});

var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x - 8 + "px";
  crsr.style.top = dets.y - 18 + "px";
  blur.style.left = dets.x - 60 + "px";
  blur.style.top = dets.y - 70 + "px";
});

var click = document.querySelectorAll(".nav a");
click.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 2;
    crsr.style.border = "1px solid #0ef";
    crsr.style.backgroundColor = "transparent";
    crsr.style.opacity = "1";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #0ef";
    crsr.style.backgroundColor = "#0ef";
    crsr.style.opacity = "0.8";
  });
});

var typed = new Typed(".home .left h1 span", {
  strings: [
    "Ibrahim Naseef",
    "Programmer",
    "Web Developer",
    "Tech Enthusiast",
    "Problem Solver",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

const paragraphs = document.querySelectorAll(".about-nav p");
const timelines = document.querySelectorAll(".timeline");

paragraphs.forEach((paragraph, index) => {
  paragraph.addEventListener("click", () => {
    // Remove 'active' class from all paragraphs and timelines
    paragraphs.forEach((p) => p.classList.remove("active"));
    timelines.forEach((timeline) => timeline.classList.remove("active"));

    // Add 'active' class to the clicked paragraph and corresponding timeline
    paragraph.classList.add("active");
    timelines[index].classList.add("active");
  });
});

VanillaTilt.init(
  document.querySelectorAll(
    ".service div,.aboutme .left,.port div,.c .right div,.c .left,.home .right img"
  ),
  {
    max: 15,
    speed: 500,
  }
);

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".bar a");

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetClass = this.getAttribute("href").substring(1);
      const targetDiv = document.querySelector(".s." + targetClass);

      if (targetDiv) {
        const offsetTop = targetDiv.offsetTop;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});
document.getElementById("scrollToAbout").addEventListener("click", function () {
  const aboutSection = document.querySelector(".about");
  aboutSection.scrollIntoView({ behavior: "smooth" });
});

document
  .getElementById("scrollToContact")
  .addEventListener("click", function () {
    const contactSection = document.querySelector(".contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  });

document
  .getElementById("scrollToHome")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const homeSection = document.querySelector(".home");
    homeSection.scrollIntoView({ behavior: "smooth" });
  });

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Collect form data
    const formData = {
      Name: document.getElementById("Name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      number: document.getElementById("number").value,
      info: document.getElementById("info").value,
    };

    // Send email using EmailJS
    emailjs.send("service_c7x09qq", "template_vlccthd", formData).then(
      function (response) {
        alert("Your message has been sent successfully!");
      },
      function (error) {
        console.error("Error sending email:", error);
        alert(
          "There was an error sending your message. Please try again later."
        );
      }
    );
  });

window.addEventListener("load", function () {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 0);
});

function lines() {
  let sizeW = Math.random() * 12;
  let duration = Math.random() * 3;
  let e = document.createElement("div");
  e.setAttribute("class", "circle");
  document.body.appendChild(e);
  e.style.width = 2 + sizeW + "px";
  e.style.left = Math.random() * +innerWidth + "px";
  e.style.animationDuration = 2 + duration + "s";
  setTimeout(function () {
    document.body.removeChild(e);
  }, 5000);
}

setInterval(function () {
  lines();
}, 100);

tl.from(".nav>a ", {
  y: -100,

  opacity: 0,
  duration: 0.4,
  stagger: 0.1,
});

tl.from(".bar", {
  opacity: 0,
  duration: 0.2,
  stagger: 0.1,
});

tl.from(".home .left, .home .right", {
  y: 100,
  opacity: 0,
  duration: 0.5,
});

tl.from(".about>h1", {
  y: -100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".about",
    scroll: "body",
    // markers: true,
    scrub: 2,
    start: "top 40%",
    end: "top 0%",
  },
});

tl.from(".aboutme *", {
  y: 100,
  opacity: 0,
  duration: 1,
  // stagger: 0.1,
  scrollTrigger: {
    trigger: ".about",
    scroll: "body",
    // markers: true,
    scrub: 1,
    start: "top 60%",
    end: "top 10%",
  },
});

tl.from(".about-info", {
  y: -100,
  opacity: 0,
  duration: 1,
  stagger: 1,
  scrollTrigger: {
    trigger: ".about-nav",
    scroll: "body",
    // markers: true,
    scrub: 2,
    start: "top 60%",
    end: "top 30%",
  },
});

gsap.from(".services *", {
  y: -100,
  scale: 0,
  opacity: 0,
  duration: 0.4,
  // stagger: 0.1,
  scrollTrigger: {
    trigger: ".services h1",
    scroll: "body",
    // markers: true,
    start: "top 90%",
    end: "top 0%",
    scrub: 2,
  },
});

gsap.from(".portfolio *", {
  y: -100,
  scale: 0,
  opacity: 0,
  duration: 0.1,
  // stagger: 0.1,
  scrollTrigger: {
    trigger: ".portfolio h3",
    scroll: "body",
    // markers: true,
    start: "top 90%",
    end: "top 50%",
    scrub: 2,
  },
});

tl.from(".contact *", {
  opacity: 0,
  duration: 0.1,
  // stagger: 0.1,
  scrollTrigger: {
    trigger: ".contact h3",
    scroll: "body",
    // markers: true,
    start: "top 80%",
    end: "top 0%",
    scrub: 2,
  },
});

const menuIcon = document.getElementById("menu-icon");
const navBar = document.querySelector(".nav .bar");

menuIcon.addEventListener("click", function () {
  navBar.classList.toggle("show-links");
});
