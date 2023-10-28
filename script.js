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
        const icon = menuIcon.querySelector("i");
        if (navbar.classList.contains("show-mobile-links")) {
            // Change the menu icon to an X
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");
        } else {
            // Change the X back to the menu icon
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }
    }
});


// Function to manage language translation

document.addEventListener('DOMContentLoaded', function() {
  const translations = {
    english: {
      about: {
        h1: "Hello, I'm Paolo",
        p: "I started playing the piano in Naples when I was 9, and I perfected my technique through classical music studies in Italy, before moving to France to study modern harmony and jazz. In Paris I completed a master’s degree in music and philosophy at the École Normale Supérieure de Paris, with a dissertation on the aesthetics of music and French structuralism. In the meantime, I focused my playing on jazz and started my career as a professional pianist amidst the intoxicating rhythms of the City of Light, where I performed regularly at the heart of Montmartre’s legendary cabarets and animated its intimate cafes nestled within the Latin Quarter.Embracing a harmonious blend of musical traditions, my style evolved to be a unique fusion of Italian and French music legacies, interwoven with a deep appreciation for the rhythmic richness of African-American and Latin-American music. This international approach to music performance, combined with a deep-seated interest in ethnomusicology, eventually led me to direct the first World Music workshop at the renowned Cité Internationale Universitaire de Paris, Europe’s largest international student campus, where my diverse influences culminated into a celebration of global musical diversity."
      },
      lessons: {
        h1: "Lessons",
        p: "I started playing the piano in Naples when I was 9, and I perfected my technique through classical music studies in Italy, before moving to France to study modern harmony and jazz. In Paris I completed a master’s degree in music and philosophy at the École Normale Supérieure de Paris, with a dissertation on the aesthetics of music and French structuralism. In the meantime, I focused my playing on jazz and started my career as a professional pianist in Parisian venues."
      },
      navbar: {
        link1: "Home",
        link2: "About",
        link3: "Lessons",
        link4: "Contact",
      },
      contact: {
        labelName: "Name:",
        labelEmail: "Email:",
        labelMessage: "Message:",
        button: "Submit",
        p: "Interested in working together? Fill out the form below, and I'll get back to you as soon as possible!"
      }
    },
    french: {
      about: {
        h1: "Bonjour, ici Paolo",
        p: "J'ai commencé le piano à Naples à l'âge de 9 ans et j'ai perfectionné ma technique en étudiant la musique classique en Italie, avant de m'installer en France pour étudier l'harmonie moderne et le jazz. À Paris, j’ai complété une maîtrise de musique et de philosophie à l’École Normale Supérieure de Paris, avec un mémoire sur l’esthétique de la musique et le structuralisme français. Parallèlement, j'oriente mon jeu vers le jazz et débute ma carrière de pianiste professionnel dans les salles parisiennes. Embrassant un mélange harmonieux de traditions musicales, mon style a évolué pour devenir une fusion unique des héritages musicaux du sud de l'Italie et de la France, entrelacés avec une profonde appréciation de la richesse rythmique de la musique brésilienne. Cette approche internationale de la musique m’a finalement amené à diriger le premier atelier de musique du monde à la célèbre Cité Internationale Universitaire de Paris, le plus grand campus étudiant international d’Europe, où mes diverses influences ont abouti à une célébration de la diversité musicale mondiale."
      },
      lessons: {
        h1: "Cours",
        p: "J'ai commencé le piano à Naples à l'âge de 9 ans et j'ai perfectionné ma technique en étudiant la musique classique en Italie, avant de m'installer en France pour étudier l'harmonie moderne et le jazz. À Paris, j’ai complété une maîtrise de musique et de philosophie à l’École Normale Supérieure de Paris, avec un mémoire sur l’esthétique de la musique et le structuralisme français. Parallèlement, j'oriente mon jeu vers le jazz et débute ma carrière de pianiste professionnel dans les salles parisiennes. Embrassant un mélange harmonieux de traditions musicales, mon style a évolué pour devenir une fusion unique des héritages musicaux du sud de l'Italie et de la France, entrelacés avec une profonde appréciation de la richesse rythmique de la musique brésilienne. Cette approche internationale de la musique m’a finalement amené à diriger le premier atelier de musique du monde à la célèbre Cité Internationale Universitaire de Paris, le plus grand campus étudiant international d’Europe, où mes diverses influences ont abouti à une célébration de la diversité musicale mondiale."
      },
      navbar: {
        link1: "Accueil",
        link2: "À propos",
        link3: "Cours",
        link4: "Contact",
      },
      contact: {
        labelName: "Nom:",
        labelEmail: "Email:",
        labelMessage: "Message:",
        button: "Envoyer",
        p: "Intéressé(e) à travailler ensemble ? Remplissez le formulaire ci-dessous, et je vous répondrai dès que possible!"
      }
    },
    italian: {
      about: {
        h1: "Ciao, sono Paolo",
        p: "Ho iniziato a suonare il pianoforte a Napoli all'età di 9 anni, e ho perfezionato la mia tecnica attraverso gli studi di musica classica in Italia, prima di trasferirmi in Francia per studiare armonia moderna e jazz. A Parigi ho conseguito un master in musica e filosofia presso l’École Normale Supérieure de Paris, con una tesi sull’estetica della musica e sullo strutturalismo francese. Nel frattempo mi sono concentrato sul jazz e ho iniziato la mia carriera come pianista professionista nei locali parigini. Abbracciando un'armoniosa miscela di tradizioni musicali, il mio stile si è evoluto fino a diventare una fusione unica delle eredità musicali dell'Italia meridionale e della Francia, intrecciate con un profondo apprezzamento per la ricchezza ritmica della musica brasiliana. Questo approccio internazionale alla musica mi ha portato alla fine a dirigere il primo workshop di World Music presso la rinomata Cité Internationale Universitaire de Paris, il più grande campus studentesco internazionale d’Europa, dove le mie diverse influenze sono culminate in una celebrazione della diversità musicale globale."
      },
      lessons: {
        h1: "Lezioni",
        p: "Ho iniziato a suonare il pianoforte a Napoli all'età di 9 anni, e ho perfezionato la mia tecnica attraverso gli studi di musica classica in Italia, prima di trasferirmi in Francia per studiare armonia moderna e jazz. A Parigi ho conseguito un master in musica e filosofia presso l’École Normale Supérieure de Paris, con una tesi sull’estetica della musica e sullo strutturalismo francese. Nel frattempo mi sono concentrato sul jazz e ho iniziato la mia carriera come pianista professionista nei locali parigini. Abbracciando un'armoniosa miscela di tradizioni musicali, il mio stile si è evoluto fino a diventare una fusione unica delle eredità musicali dell'Italia meridionale e della Francia, intrecciate con un profondo apprezzamento per la ricchezza ritmica della musica brasiliana. Questo approccio internazionale alla musica mi ha portato alla fine a dirigere il primo workshop di World Music presso la rinomata Cité Internationale Universitaire de Paris, il più grande campus studentesco internazionale d’Europa, dove le mie diverse influenze sono culminate in una celebrazione della diversità musicale globale."
      },
      navbar: {
        link1: "Home",
        link2: "Chi Siamo",
        link3: "Lezioni",
        link4: "Contatti",
      },
      contact: {
        labelName: "Nome:",
        labelEmail: "Email:",
        labelMessage: "Messaggio:",
        button: "Invia",
        p: "Interessato/a a lavorare insieme? Compila il modulo qui sotto, e ti risponderò al più presto!"
      }
    }
  };

  // Function to update content based on the selected language
  function updateContent(language, section) {
    const sectionData = translations[language][section];

    if (section === 'navbar') {
      updateNavbarContent(sectionData);
    } else if (section === 'contact') {
      updateContactFormContent(sectionData);
    } else {
      updateParagraphContent(sectionData, section);
    }
  }

  // Function to update content of a paragraph
  function updateParagraphContent(sectionData, section) {
    const sectionId = section === 'about' ? 'about-paragraph' : 'lessons-paragraph';
    const sectionElement = document.getElementById(sectionId);
    const h1 = sectionElement.querySelector('h1');
    const p = sectionElement.querySelector('p');

    h1.textContent = sectionData.h1;
    p.textContent = sectionData.p;
  }

    // Function to update navbar content
    function updateNavbarContent(navbarData) {
        const navbarLinks = document.querySelectorAll('.navbar-links-left li a, .navbar-links-right li a');
    
        navbarLinks[0].textContent = navbarData.link1; // Update link 1
        navbarLinks[1].textContent = navbarData.link2; // Update link 2
        navbarLinks[2].textContent = navbarData.link3; // Update link 3
        navbarLinks[3].textContent = navbarData.link4; // Update link 4
    }
    

  // Function to update contact form content
  function updateContactFormContent(contactData) {
    const contactForm = document.querySelector('.contact-form');
    const labels = contactForm.querySelectorAll('label');
    const nameInput = contactForm.querySelector('#name');
    const emailInput = contactForm.querySelector('#email');
    const messageTextarea = contactForm.querySelector('#message');
    const submitButton = contactForm.querySelector('button');
    const contactFormP = document.getElementById('contact-form-container').querySelector('p');

    labels[0].textContent = contactData.labelName;
    labels[1].textContent = contactData.labelEmail;
    labels[2].textContent = contactData.labelMessage;
    submitButton.textContent = contactData.button;
    contactFormP.textContent = contactData.p;
  }

  // Call the function with 'english' as the default language for the "About" section
  updateContent('english', 'about');

  // Call the function with 'english' as the default language for the "Lessons" section
  updateContent('english', 'lessons');

  // Call the function with 'english' as the default language for the "Navbar" section
  updateContent('english', 'navbar');

  // Call the function with 'english' as the default language for the "Contact" section
  updateContent('english', 'contact');

  // Event listeners for language buttons
  const translateFrenchButton = document.getElementById('translateFrench');
  translateFrenchButton.addEventListener('click', function() {
    updateContent('french', 'about');
    updateContent('french', 'lessons');
    updateContent('french', 'navbar');
    updateContent('french', 'contact');
  });

  const translateItalianButton = document.getElementById('translateItalian');
  translateItalianButton.addEventListener('click', function() {
    updateContent('italian', 'about');
    updateContent('italian', 'lessons');
    updateContent('italian', 'navbar');
    updateContent('italian', 'contact');
  });

  const revertToEnglishButton = document.getElementById('revertToEnglish');
  revertToEnglishButton.addEventListener('click', function() {
    updateContent('english', 'about');
    updateContent('english', 'lessons');
    updateContent('english', 'navbar');
    updateContent('english', 'contact');
  });
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
        playPauseButton.textContent = '❚❚'; // Pause icon
        currentSongIndex = index;
    }

    playPauseButton.addEventListener('click', () => {
        if (isPlaying) {
            audioPlayer.pause();
            playPauseButton.textContent = '▶'; // Play icon
        } else {
            audioPlayer.play();
            playPauseButton.textContent = '❚❚'; // Pause icon
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

// Email configuration

document.addEventListener('DOMContentLoaded', function() {
  emailjs.init("itnHyNd7JvizqyR1r");

  console.log("DOMContentLoaded event fired");
  const contactForm = document.getElementById("contact-form");
  const successMessage = document.getElementById("success-message");
  const errorMessage = document.getElementById("error-message");

  // Add a submit event listener to the form
  contactForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

      // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log("Form submitted");

    // Use the emailjs.sendForm method to send the form
    emailjs
      .sendForm("service_84td3jj", "template_ug1n9rs", contactForm)
      .then(
        function(response) {
          console.log("Email sent successfully", response);
          successMessage.style.display = "block";
        },
        function(error) {
          console.log("Email sending failed", error);
          console.error(error);
          errorMessage.style.display = "block";
        }
      );
  });
});