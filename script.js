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
        p1: "I started playing the piano in Naples when I was 9, and I perfected my technique through classical music studies in Italy, before moving to France to study modern harmony and jazz. In Paris I completed a master’s degree in music and philosophy at the École Normale Supérieure de Paris, with a dissertation on the aesthetics of music and French structuralism. In the meantime, I focused my playing on jazz and started my career as a professional pianist amidst the intoxicating rhythms of the City of Light, where I performed regularly at the heart of Montmartre’s legendary cabarets and animated its intimate cafes nestled within the Latin Quarter. ",
        p2: "Embracing a harmonious blend of musical traditions, my style evolved to be a unique fusion of Italian and French music legacies, interwoven with a deep appreciation for the rhythmic richness of African-American and Latin-American music. This international approach to music performance, combined with a deep-seated interest in ethnomusicology, eventually led me to direct the first World Music workshop at the renowned Cité Internationale Universitaire de Paris, Europe’s largest international student campus, where my diverse influences culminated into a celebration of global musical diversity."
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
        p1: "J'ai commencé à jouer du piano à Naples à l'âge de 9 ans et j'ai perfectionné ma technique grâce à des études de musique classique en Italie, avant de déménager en France pour étudier l'harmonie moderne et le jazz. À Paris, j'ai obtenu un master en musique et en philosophie à l'École Normale Supérieure de Paris, avec une thèse sur l'esthétique de la musique et le structuralisme français. Pendant ce temps, j'ai axé ma pratique sur le jazz et j'ai commencé ma carrière de pianiste professionnel au milieu des rythmes enivrants de la Ville Lumière, où je me produisais régulièrement au cœur des cabarets légendaires de Montmartre et animais ses cafés intimes nichés dans le Quartier Latin.",
        p2: "En embrassant un mélange harmonieux de traditions musicales, mon style a évolué pour devenir une fusion unique des héritages musicaux italien et français, entrelacée d'une profonde appréciation pour la richesse rythmique de la musique afro-américaine et latino-américaine. Cette approche internationale de la performance musicale, associée à un intérêt profond pour l'ethnomusicologie, m'a finalement conduit à diriger le premier atelier de musique du monde à la célèbre Cité Internationale Universitaire de Paris, le plus grand campus étudiant international d'Europe, où mes influences diverses ont abouti à une célébration de la diversité musicale mondiale.",
      },
      lessons: {
        h1: "Cours",
        p1: "Résultant de la combinaison de mon éducation musicale avec mes études académiques en philosophie, ma démarche pédagogique unique repose sur la traduction des principes du structuralisme linguistique-anthropologique dans le domaine de la pédagogie musicale. En contraste marqué avec l'approche traditionnelle axée sur la perfection technique, mon style d'enseignement vise à exploiter directement les compétences inhérentes à chaque être humain, qui, lorsqu'elles sont correctement nourries, nous permettent de communiquer musicalement, en utilisant la musique comme un langage.",
        p2: "En adaptant le plan pédagogique au niveau initial de chaque élève, mes leçons proposent des méthodes de formation visant à cultiver des capacités clés qui facilitent une expression musicale authentique, à savoir :",
        p3: "En combinant l'enseignement anthropologique de Claude Lévi-Strauss avec les pratiques pédagogiques de maîtres tels que Kenny Werner et Jerry Bergonzi, mes leçons placent au cœur du processus d'apprentissage le développement des compétences permettant au musicien caché en chaque être humain de se révéler. Car l'objectif plus large est non seulement de comprendre comment la musique fonctionne, mais aussi d'acquérir une compréhension plus profonde et empathique de comment nous fonctionnons. À travers la musique.",
        li1: "La capacité Harmonico-Imaginative, impliquant la capacité de reconnaître par l'oreille ou d'envisager une progression harmonique et de la transformer librement grâce à des exercices de réharmonisation.",
        li2: "La capacité Rhythmo-Corporelle, englobant la capacité de ressentir physiquement une pulsation rythmique et de la transférer à l'accompagnement au piano, en mettant particulièrement l'accent sur les rythmes afro-américains et latino-américains.",
        li3: "La capacité Créative-Improvisatrice, signifiant la capacité à créer une ligne mélodique qui peut s'adapter et interagir avec une progression harmonique sous-jacente.",
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
        p1: "Ho iniziato a suonare il pianoforte a Napoli quando avevo 9 anni e ho perfezionato la mia tecnica attraverso gli studi di musica classica in Italia, prima di trasferirmi in Francia per studiare l'armonia moderna e il jazz. A Parigi ho completato un master in musica e filosofia presso l'École Normale Supérieure de Paris, con una tesi sull'estetica della musica e il structuralismo francese. Nel frattempo, ho concentrato la mia esecuzione sul jazz e ho avviato la mia carriera come pianista professionista tra i ritmi avvolgenti della Città della Luce, dove mi sono esibito regolarmente nel cuore dei leggendari cabaret di Montmartre e ho animato i suoi caffè intimi nel Quartiere Latino.",
        p2: "Abbracciando un armonioso miscuglio di tradizioni musicali, il mio stile si è evoluto in una fusione unica delle eredità musicali italiane e francesi, intrecciata con una profonda apprezzamento per la ricchezza ritmica della musica afroamericana e latinoamericana. Questo approccio internazionale alla performance musicale, combinato con un profondo interesse per l'etnomusicologia, mi ha infine portato a dirigere il primo workshop di musica del mondo presso la rinomata Cité Internationale Universitaire de Paris, il più grande campus studentesco internazionale d'Europa, dove le mie influenze diverse hanno culminato in una celebrazione della diversità musicale globale."
      },
      lessons: {
        h1: "Lezioni",
        p1: "Risultante dalla combinazione della mia formazione musicale con i miei studi accademici in filosofia, il mio approccio unico all'insegnamento si basa sulla traduzione dei principi del structuralismo linguistico-antropologico nel campo della pedagogia musicale. In netto contrasto con l'approccio tradizionale focalizzato sulla perfezione tecnica, il mio stile di insegnamento mira a attingere direttamente alle abilità innate in ciascun essere umano, le quali, quando coltivate adeguatamente, ci consentono di comunicare musicalmente, utilizzando la musica come un linguaggio.",
        p2: "Adattando il piano pedagogico al livello iniziale di ciascuno studente, le mie lezioni offrono metodi di allenamento per coltivare le capacità chiave che facilitano un'autentica espressione musicale, ovvero:",
        p3: "Unendo l'insegnamento antropologico di Claude Lévi-Strauss alle pratiche pedagogiche di maestri come Kenny Werner e Jerry Bergonzi, le mie lezioni pongono al centro del processo di apprendimento lo sviluppo delle abilità che permettono al musicista nascosto in ogni essere umano di emergere. Perché l'obiettivo più ampio non è solo comprendere come funziona la musica, ma anche acquisire una comprensione più profonda ed empatica di come funzioniamo. Attraverso la musica.",
        li1: "La capacità Armonico-Immaginativa, che coinvolge la capacità di riconoscere per orecchio o immaginare una progressione armonica e trasformarla liberamente attraverso esercizi di riarmonizzazione.",
        li2: "La capacità Ritmico-Corporea, che comprende la capacità di percepire fisicamente un impulso ritmico e trasferirlo all'accompagnamento al pianoforte, con un focus specifico sui ritmi afroamericani e latinoamericani.",
        li3: "La capacità Creativo-Improvisativa, che significa la capacità di creare una linea melodica in grado di adattarsi e interagire con una progressione armonica sottostante.",
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
      .sendForm("service_cm2dnwk", "template_s9h32mu", contactForm)
      .then(
        function(response) {
          console.log("Email sent successfully", response);
          successMessage.style.display = "block";
        },
        function(error) {
          console.log("Email sending failed", error);
          console.error(error);

          // Additional debugging information:
          if (error.response) {
            console.log("Response data:", error.response.data);
            console.log("HTTP status:", error.response.status);
            console.log("Headers:", error.response.headers);
          }
          errorMessage.style.display = "block";
        }
      );
  });
});