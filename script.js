<<<<<<< HEAD
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


// Function to manage language translation

document.addEventListener('DOMContentLoaded', function() {
  const translations = {
    english: {
      about: {
        h1: "Hello, I'm Paolo",
        p1: "I started playing the piano in Naples when I was 9, and I perfected my technique through classical music studies in Italy, before moving to France to study modern harmony and jazz. In Paris, I obtained a master's degree in music and philosophy at the École Normale Supérieure de Paris, where I launched a research project on the aesthetics of music and French structuralism in partnership with the École des Hautes Études en Sciences Sociales and the Conservatory of Paris. In the meantime, I focused my playing on jazz and started my career as a professional pianist amidst the intoxicating rhythms of the City of Light, where I performed regularly at the heart of Montmartre’s legendary cabarets and enlivened the charming cafes nestled within the Latin Quarter.",
        p2: "Embracing a harmonious blend of musical traditions, my style evolved to be a unique fusion of Italian and French music legacies, interwoven with a deep appreciation for the rhythmic richness of Southern American music. This international approach to music performance, combined with a deep-seated interest in ethnomusicology, eventually led me to direct the first World Music workshop at the renowned Cité Internationale Universitaire de Paris, Europe’s largest international student campus, where my diverse influences culminated into a celebration of global musical diversity."
      },
      lessons: {
        h1: "Lessons",
        p1: "Resulting from the combination of my musical education with my academic studies in philosophy, my unique teaching approach is based on the translation of principles from linguistic-anthropological structuralism into the realm of music pedagogy. In stark contrast to the traditional approach focused on technical perfection, my teaching style aims to directly tap into the inherent skills within each human being, which, when properly nurtured, enable each of us to communicate musically, using music as a language.",
        p2: "Tailoring the pedagogical plan to each student's initial level, my lessons offer training methods to cultivate key capacities that facilitate authentic musical expression, namely:",
        p3: "By combining Claude Lévi-Strauss's anthropological teaching with the pedagogy practices of masters like Kenny Werner and Jerry Bergonzi, my lessons place at the core of the learning process the development of the skills allowing the hidden musician within every human being to come to light. Because the broader goal is not only to understand how music works, but to gain a deeper and empathetic comprehension of how we work. Through music.",
        li1: "Harmonic-Imaginative capacity, involving the ability to recognize by ear or envision a harmonic progression and freely transform it through reharmonization exercises.",
        li2: "Rhythmic-Corporeal capacity, encompassing the ability to physically sense a rhythmic pulse and transfer it to piano accompaniment, with a specific focus on African-American and Latin-American rhythms.",
        li3: "Creative-Improvisational capacity, which means the ability to craft a melodic line that can adapt and interact with an underlying harmonic progression.",
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
        h1: "Salut, je m'appelle Paolo",
        p1: "J'ai commencé à jouer du piano à Naples à l'âge de 9 ans, et j'ai perfectionné ma technique en suivant des études de musique classique en Italie, avant de partir en France pour étudier l'harmonie moderne et le jazz. À Paris, j'ai obtenu un master en musique et philosophie à l'École Normale Supérieure de Paris, où j’ai lancé un projet de recherche portant sur l'esthétique de la musique et le structuralisme français en partenariat avec l’École des Hautes Études en Sciences Sociales et le Conservatoire National Supérieur de Musique et de Danse de Paris. Entre-temps, je me suis orienté vers le jazz et j'ai commencé ma carrière de pianiste professionnel dans les rythmes enivrants de la Ville Lumière, où je me produisais régulièrement au cœur des légendaires cabarets de Montmartre et animais les cafés intimes nichés dans le Quartier Latin.",
        p2: "Mon style a évolué pour devenir un mélange harmonieux de traditions musicales, une fusion unique d'héritages musicaux italiens et français, entrelacés avec une profonde appréciation de la richesse rythmique de la musique de l’Amérique du Sud. Cette approche internationale de la musique, associée à un intérêt profond pour l'ethnomusicologie, m'a finalement conduit à diriger le premier atelier de Musiques du Monde à la célèbre Cité Internationale Universitaire de Paris, le plus grand campus d'étudiants étrangers d'Europe, où mes diverses influences ont culminé dans une célébration de la diversité musicale mondiale.",
      },
      lessons: {
        h1: "Cours",
        p1: "Résultant de la combinaison de ma formation musicale et de mes études académiques en philosophie, mon approche pédagogique unique est basée sur la traduction des principes du structuralisme linguistique-anthropologique dans le domaine de la pédagogie musicale. Contrairement à l'approche traditionnelle axée sur la perfection technique, mon style d'enseignement vise à exploiter directement les compétences inhérentes à chaque être humain qui, lorsqu'elles sont correctement entretenues, permettent à chacun d'entre nous de communiquer musicalement, en utilisant la musique comme un langage.",
        p2: "En adaptant le plan pédagogique au niveau de chaque élève, mes cours proposent des méthodes d'entraînement pour cultiver les capacités clés qui facilitent l'expression musicale authentique, à savoir:",
        p3: "En combinant l'enseignement anthropologique de Claude Lévi-Strauss avec les pratiques pédagogiques de maîtres tels que Kenny Werner et Jerry Bergonzi, mes cours placent au cœur du processus d'apprentissage le développement des compétences permettant au musicien caché dans chaque être humain de se révéler. Car l'objectif général n'est pas seulement de comprendre comment fonctionne la musique, mais d'acquérir une compréhension plus profonde et empathique de la façon dont nous fonctionnons. À travers la musique.",
        li1: "La capacité harmonique-imaginative, qui implique l'aptitude à reconnaître à l'oreille ou à imaginer une progression harmonique et à la transformer librement par des exercices de réharmonisation.",
        li2: "La capacité rythmique-corporelle, englobant la capacité à percevoir physiquement une pulsation rythmique et à la transférer sur l'accompagnement au piano, avec un accent particulier sur les rythmes latino-américains.",
        li3: "La capacité de création et d'improvisation, c'est-à-dire la capacité de créer une ligne mélodique capable de s'adapter et d'interagir avec une progression harmonique sous-jacente.",
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
        p1: "Ho iniziato a suonare il pianoforte a 9 anni a Napoli, dove ho perfezionato la mia tecnica dedicandomi a studi classici prima di trasferirmi in Francia per studiare armonia moderna e jazz. A Parigi, ho ottenuto una laurea magistrale in filosofia e musica all’École Normale Supérieure, dando avvio ad un progetto di ricerca dedicato all’estetica musicale e allo strutturalismo francese condotto in partenariato con l’École des Hautes Études en Sciences Sociales ed il Conservatoire National Supérieur de Musique et de Danse de Paris. Parallelamente, mi sono concentrato sul jazz ed ho cominciato la mia carriera di pianista professionista nella vibrante scena musicale della capitale francese, esibendomi regolarmente negli iconici cabaret di Montmartre ed animando i caffè-concerto del Quartiere Latino.",
        p2: "Sviluppatosi al crocevia di differenti fonti d’ispirazione, il mio stile si è presto trasformato in un’originale fusione delle tradizioni musicali d’Italia e Francia, saldamente intrecciate con una profonda passione per la ricchezza del patrimonio ritmico dell’America Latina. Tale apertura internazionale, combinata con il mio interesse per l’etnomusicologia, ha così trovato coronamento nella mia attività didattica, portandomi a dirigere il primo laboratorio dedicato alle tradizioni musicali del mondo alla Cité Internationale Universitaire de Paris. Ospitata nel campus internazionale più grande d’Europa nel confronto diretto con più di 10 mila studenti di oltre 150 nazionalità differenti, la mia missione didattica è nata sotto il segno della diversità musicale globale."
      },
      lessons: {
        h1: "Lezioni",
        p1: "Risultato della combinazione della mia formazione musicale con i miei studi accademici in filosofia, il mio originale approccio all’insegnamento si fonda sulla traslazione dei principi dello strutturalismo linguistico-antropologico nel campo della pedagogia musicale. In aperto contrasto con l’approccio tradizionale focalizzato sullo sviluppo di una perfezione tecnica, il mio stile di insegnamento si propone di agire in modo diretto sulle capacità già presenti in ciascun essere umano, che se sviluppate adeguatamente permettono a ciascuno di noi di comunicare musicalmente, servendosi della musica come linguaggio.",
        p2: "Adattando il piano pedagogico al livello di partenza di ciascuno studente, nelle mie lezioni propongo delle procedure di allenamento per sviluppare le capacità chiave che permettono di esprimersi musicalmente in modo originale, ossia:",
        p3: "Combinando l’insegnamento antropologico di Claude Lévi-Strauss con le pratiche della pedagogia musicale dei maestri Kenny Werner e Jerry Bergonzi, le mie lezioni mettono dunque al centro del processo di apprendimento lo sviluppo di quelle capacità che permettono al musicista nascosto dentro di noi di venire alla luce. Perché l’obiettivo più vasto non è semplicemente comprendere come funziona la musica, ma acquisire una consapevolezza sempre più chiara di come funzioniamo noi. Attraverso la musica.",
        li1: "Capacità armonico-immaginativa, ossia la capacità di riconoscere ad orecchio o immaginare una progressione armonica e trasformarla liberamente attraverso l’esercizio della riarmonizzazione.",
        li2: "Capacità ritmico-corporea, ossia la capacità di sentire corporeamente una pulsione ritmica da trasferire sul pianoforte nell’accompagnamento, con particolare attenzione alle ritmiche swing e latino-americane.",
        li3: "Capacità creativo-improvvisativa, ossia la capacità di creare una linea melodica che sappia adattarsi e dialogare con una progressione armonica soggiacente.",
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
    } else if (section === 'about') {
      updateAboutContent(sectionData);
    } else if (section === 'lessons') {
      updateLessonsContent(sectionData);
    } else if (section === 'contact') {
      updateContactFormContent(sectionData);
    }
  }

  // Function to update content of the "About" section
  function updateAboutContent(aboutData) {
    const aboutParagraph = document.getElementById('about-paragraph');
    const h1 = aboutParagraph.querySelector('h1');
    const p1 = aboutParagraph.querySelector('p');
    const p2 = aboutParagraph.querySelectorAll('p')[1]; // Select the second paragraph using querySelectorAll and index 1
  
    h1.textContent = aboutData.h1;
    p1.textContent = aboutData.p1;
    p2.textContent = aboutData.p2;
  }

  // Function to update content of the "Lessons" section
  function updateLessonsContent(lessonsData) {
    const lessonsParagraph = document.getElementById('lessons-paragraph');
    const h1 = lessonsParagraph.querySelector('h1');
    const p1 = lessonsParagraph.querySelector('p');
    const p2 = lessonsParagraph.querySelectorAll('p')[1];
    const p3 = lessonsParagraph.querySelectorAll('p')[2];
    const ul = lessonsParagraph.querySelector('ul');
    const liElements = ul.querySelectorAll('li');

    // Update the content of the list items
    for (let i = 0; i < liElements.length; i++) {
      liElements[i].textContent = lessonsData["li" + (i + 1)];
    }
  
    h1.textContent = lessonsData.h1;
    p1.textContent = lessonsData.p1;
    p2.textContent = lessonsData.p2;
    p3.textContent = lessonsData.p3;
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
    // Testimonials data
    const englishTestimonials = [
        { text: "Paolo is a great teacher! Highly recommended.", name: "John Doe" },
        { text: "Outstanding lessons. I enjoy every moment!", name: "Jane Smith" },
        { text: "Paolo's teaching style is both patient and encouraging, and I look forward to every lesson.", name: "Vincent M" },
        { text: "Paolo's piano lessons have not only improved my playing skills but also my overall understanding of music.", name: "Pauline K." },
        { text: "I'm thrilled with my progress!", name: "David R." },
    ];

    const frenchTestimonials = [
        { text: "J'ai suivi des cours de piano pendant six mois, et je suis émerveillé par les progrès que j'ai réalisés.", name: "Georgie D." },
        { text: "La passion de Paolo pour la musique est contagieuse", name: "Sarah L" },
        { text: "En tant qu'apprenant adulte, j'étais un peu anxieux à l'idée de commencer des cours de piano mais je suis ravi!", name: "Maurice" },
        { text: "Ses cours de piano sont un équilibre parfait entre théorie et pratique.", name: "Lucille" },
        { text: "Paolo est non seulement un pianiste talentueux, mais aussi fantastique avec les enfants.", name: "Laura" },
    ];

    const italianTestimonials = [
        { text: "Altamente raccomandato!", name: "Giovanni M" },
        { text: "La passione del Paolo per la musica è contagiosa", name: "Emilia" },
        { text: "Tuttavia, l'esperienza e l'approccio personalizzato del Paolo mi hanno fatto sentire a mio agio e fiducioso.", name: "Marco R." },
        { text: "Adoro ogni momento!", name: "Davide S." },
        { text: "Mio figlio attende con ansia ogni lezione.", name: "Lucia" },
    ];

    const testimonials = [englishTestimonials, frenchTestimonials, italianTestimonials];
    const testimonialLanguages = ["English", "French", "Italian"];

    let currentLanguageIndex = -1;
    let currentIndexs = [-1, -1, -1];

    function getRandomIndex(array) {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * array.length);
        } while (currentIndexs.includes(newIndex));
        currentIndexs[currentLanguageIndex] = newIndex;
        return newIndex;
    }

    function displayRandomTestimonials() {
        for (let i = 1; i <= 3; i++) {
            currentLanguageIndex = (currentLanguageIndex + 1) % 3;
            const languageTestimonials = testimonials[currentLanguageIndex];
            const index = getRandomIndex(languageTestimonials);
            const testimonialText = languageTestimonials[index].text;
            const testimonialName = languageTestimonials[index].name;
            const language = testimonialLanguages[currentLanguageIndex];

            const textElement = document.getElementById(`testimonial-text-${i}`);
            const nameElement = document.getElementById(`testimonial-name-${i}`);

            textElement.textContent = `"${testimonialText}"`;
            nameElement.textContent = testimonialName;
        }
    }

    window.addEventListener("load", displayRandomTestimonials);
=======
document.addEventListener('DOMContentLoaded', function() {
    const requestQuoteButtons = document.querySelectorAll('.request-quote-button');

    requestQuoteButtons.forEach(button => {
        button.addEventListener('click', () => {
            // You can implement a custom form or link to a contact form for requesting a quote
            // Example: window.location.href = 'contact.html';
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");

    burger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Add this event listener to close the mobile menu when a navigation link is clicked
    const navLinksList = document.querySelectorAll(".nav-links li");
    navLinksList.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            document.querySelector(".navbar").classList.add("active");
            document.querySelector(".nav-links").classList.add("active-bg");
        } else {
            document.querySelector(".navbar").classList.remove("active");
            document.querySelector(".nav-links").classList.remove("active-bg");
        }
    });
>>>>>>> aaa46d3 (initial commit)
});

const audio = document.getElementById('audio');
const playButton = document.getElementById('play-button');
const waveform = document.getElementById('waveform');
const soundcloudLink = document.getElementById('soundcloud-link');

// Add an event listener to the play button
playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playButton.textContent = 'Pause';
    } else {
        audio.pause();
        playButton.textContent = 'Play';
    }
});

// You can use additional libraries to visualize the waveform.

// You can embed a SoundCloud link as shown in the HTML.
