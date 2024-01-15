// dark bg effect

document.addEventListener("DOMContentLoaded", function() {
  const burger = document.querySelector(".menu-icon");
  const navLinks = document.querySelector(".navbar");

  burger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
  });

  const navLinksList = document.querySelectorAll(".navbar");
  navLinksList.forEach(link => {
      link.addEventListener("click", () => {
          navLinks.classList.remove("active");
      });
  });

  window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
          document.querySelector(".navbar").classList.add("active");
          navLinks.classList.add("active-bg");
      } else {
          document.querySelector(".navbar").classList.remove("active");
          navLinks.classList.remove("active-bg");
      }
  });

    // Get references to the menu icon and navbar
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.getElementById("navbar");

    // Add a click event listener to toggle the menu
    menuIcon.addEventListener("click", function () {
    navbar.classList.toggle("show-mobile-links");
    logo.classList.toggle("hide-logo");
    toggleMenuIcon();
    });

    // Function to toggle the menu icon
    function toggleMenuIcon() {
      const menuIcon = document.getElementById("menu-icon");
      if (navbar.classList.contains("show-mobile-links")) {
          // The menu is open, so display the 'x'
          menuIcon.textContent = "✕";
      } else {
          // The menu is closed, so display the '≡'
          menuIcon.textContent = "≡";
      }
    }
});
  
// Function for audio player

document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audio-player');
    const playPauseButton = document.getElementById('play-pause');
    const stopButton = document.getElementById('stop');
    const startOverButton = document.getElementById('start-over');
    const playlist = document.getElementById('playlist');
    const playlistItems = playlist.getElementsByTagName('li');

    let isPlaying = false;
    let currentSongIndex = 0;

    // Pause the audio player initially
    audioPlayer.pause();

    function playSong(index) {
        const song = playlistItems[index];
        const songSrc = song.getAttribute('data-src');

        // Remove active class from the previously active song
        for (let i = 0; i < playlistItems.length; i++) {
            playlistItems[i].classList.remove('active');
        }

        // Add active class to the currently playing song
        song.classList.add('active');

        audioPlayer.src = songSrc;
        audioPlayer.play();
        isPlaying = true;
        playPauseButton.textContent = '❚❚';
        currentSongIndex = index;
    }

    playPauseButton.addEventListener('click', () => {
        if (isPlaying) {
            audioPlayer.pause();
            playPauseButton.textContent = '▶';
        } else {
            audioPlayer.play();
            playPauseButton.textContent = '❚❚';
        }
        isPlaying = !isPlaying;
    });

    stopButton.addEventListener('click', () => {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
        playPauseButton.textContent = '▶';
        isPlaying = false;
    });

    startOverButton.addEventListener('click', () => {
        audioPlayer.currentTime = 0;
    });

    for (let i = 0; i < playlistItems.length; i++) {
        playlistItems[i].addEventListener('click', (event) => {
            playSong(i);
        });
    }

    audioPlayer.addEventListener('ended', () => {
        currentSongIndex = (currentSongIndex + 1) % playlistItems.length;
        playSong(currentSongIndex);
    });

    // Play the first song initially
    playSong(currentSongIndex);
});

// // Email configuration

// document.addEventListener('DOMContentLoaded', function() {
//   emailjs.init("public key");

//   console.log("DOMContentLoaded event fired");
//   const contactForm = document.getElementById("contact-form");
//   const successMessage = document.getElementById("success-message");
//   const errorMessage = document.getElementById("error-message");

//   // Add a submit event listener to the form
//   contactForm.addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent the default form submission

//       // Get form data
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const message = document.getElementById("message").value;

//     console.log("Form submitted");

//     // Use the emailjs.sendForm method to send the form
//     emailjs
      // .sendForm("service_id", "template_id", contactForm)
      // .then(
      //   function(response) {
      //     console.log("Email sent successfully", response);
      //     successMessage.style.display = "block";
      //   },
      //   function(error) {
      //     console.log("Email sending failed", error);
      //     console.error(error);

      //     // Additional debugging information:
      //     if (error.response) {
      //       console.log("Response data:", error.response.data);
      //       console.log("HTTP status:", error.response.status);
      //       console.log("Headers:", error.response.headers);
      //     }
      //     errorMessage.style.display = "block";
      //   }
      // );
//   });
// });

document.addEventListener('DOMContentLoaded', function() {
  const testimonials = document.querySelectorAll('.testimonial');
  let currentIndex = 0;

  function showTestimonial(index) {
      testimonials[currentIndex].style.display = 'none';
      currentIndex = index;
      testimonials[currentIndex].style.display = 'block';
  }

  document.getElementById('prevBtn').addEventListener('click', () => {
      if (currentIndex > 0) {
          showTestimonial(currentIndex - 1);
      }
  });

  document.getElementById('nextBtn').addEventListener('click', () => {
      if (currentIndex < testimonials.length - 1) {
          showTestimonial(currentIndex + 1);
      }
  });

  // Show the first testimonial initially
  showTestimonial(currentIndex);
});

document.addEventListener('DOMContentLoaded', function() {
  const video = document.querySelector('iframe');

  function playVideo() {
      video.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
  }

  function pauseVideo() {
      video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
  }
});