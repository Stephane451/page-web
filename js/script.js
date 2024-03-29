const carouselSlide = document.querySelector('.carousel-container');
const carouselImages = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () => {
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = 'transform 0.5s ease-in-out';
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = 'transform 0.5s ease-in-out';
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
  if (carouselImages[counter].id === 'last-clone') {
    carouselSlide.style.transition = 'none';
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  if (carouselImages[counter].id === 'first-clone') {
    carouselSlide.style.transition = 'none';
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});

setInterval(() => {
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = 'transform 0.5s ease-in-out';
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}, 5000);

carouselSlide.addEventListener('mouseover', () => {
  clearInterval(intervalId);
});

carouselSlide.addEventListener('mouseout', () => {
  intervalId = setInterval(() => {
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = 'transform 0.5s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }, 5000);
});

document.getElementById('entryForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Récupérer les valeurs des champs du formulaire
  var name = document.getElementById('name').value;
  var surname = document.getElementById('surname').value;
  var date = document.getElementById('date').value;
  var time = document.getElementById('time').value;
  var contacts = document.getElementById('contacts').value;
  var location = document.getElementById('location').value;
  var reason = document.getElementById('reason').value;
  var directives = document.getElementById('directives').value;

  // Créer un objet pour stocker les données du formulaire
  var formData = {
      name: name,
      surname: surname,
      date: date,
      time: time,
      contacts: contacts,
      location: location,
      reason: reason,
      directives: directives
  };

  // Convertir l'objet en format JSON
  var formDataJson = JSON.stringify(formData);

  // Envoyer les données à votre backend ou faire d'autres opérations nécessaires
  // Par exemple, vous pouvez utiliser fetch() pour envoyer les données à un serveur
  // fetch('url_de_votre_backend', {
  //     method: 'POST',
  //     headers: {
  //         'Content-Type': 'application/json',
  //     },
  //     body: formDataJson,
  // })
  // .then(response => {
  //     // Traiter la réponse du serveur si nécessaire
  // })
  // .catch(error => {
  //     console.error('Erreur lors de l\'envoi des données:', error);
  // });

  // Réinitialiser le formulaire après avoir soumis les données
  document.getElementById('entryForm').reset();

  // Afficher un message de confirmation ou effectuer d'autres actions nécessaires
  alert('Les données ont été enregistrées avec succès!');
});