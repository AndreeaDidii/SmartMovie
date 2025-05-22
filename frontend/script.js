// Smooth Scroll Animation (optional if using scroll-behavior in CSS)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Fade-in on scroll
  const revealSections = document.querySelectorAll('.section');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  
  revealSections.forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
  });
  
  function showMockRecommendations() {
    const genre = document.getElementById('genreSelect').value;
  const initialTitle = document.getElementById('initial-title');
  const initialResults = document.getElementById('initial-results');
  const finalTitle = document.getElementById('final-title');
  const finalResults = document.getElementById('final-results');

  initialResults.innerHTML = '';
  finalResults.innerHTML = '';
  finalTitle.textContent = '';
  
    const mockData = {
      'sci-fi': [
        {
          title: "Interstellar",
          desc: "A journey through space and time.",
          recommends: [
            { title: "Arrival", desc: "Linguistics meets aliens." },
            { title: "Gravity", desc: "Survival in space." }
          ]
        },
        {
          title: "The Matrix",
          desc: "Reality is a simulation.",
          recommends: [
            { title: "Inception", desc: "Dream within a dream." },
            { title: "Blade Runner 2049", desc: "AI and humanity blur." }
          ]
        }
      ],
      'drama': [
        {
          title: "The Shawshank Redemption",
          desc: "Hope and friendship in prison.",
          recommends: [
            { title: "The Green Mile", desc: "Miracles behind bars." },
            { title: "A Beautiful Mind", desc: "Genius and schizophrenia." }
          ]
        },
        {
          title: "Forrest Gump",
          desc: "Life is like a box of chocolates.",
          recommends: [
            { title: "The Pursuit of Happyness", desc: "Overcoming all odds." },
            { title: "Cast Away", desc: "Survival after a crash." }
          ]
        }
      ],
      'comedy': [
        {
          title: "Superbad",
          desc: "Teen misadventures before college.",
          recommends: [
            { title: "Booksmart", desc: "Smart girls go wild." },
            { title: "21 Jump Street", desc: "Cops undercover in high school." }
          ]
        },
        {
          title: "The Hangover",
          desc: "Bachelor party gone wrong.",
          recommends: [
            { title: "Due Date", desc: "Chaotic road trip." },
            { title: "Horrible Bosses", desc: "Revenge on bad managers." }
          ]
        }
      ],
      'action': [
        {
          title: "Mad Max: Fury Road",
          desc: "High-octane car battles in the desert.",
          recommends: [
            { title: "Snowpiercer", desc: "Revolution on a train." },
            { title: "Edge of Tomorrow", desc: "Time loop warfare." }
          ]
        },
        {
          title: "John Wick",
          desc: "Revenge of an ex-hitman.",
          recommends: [
            { title: "Nobody", desc: "A man with a violent past." },
            { title: "The Equalizer", desc: "Justice served silently." }
          ]
        }
      ]
    };
  
    if (!genre || !mockData[genre]) {
      initialResults.innerHTML = '<p class="text-warning">Please select a genre.</p>';
      return;
    }
  
    initialTitle.textContent = '🎥 Initial Recommendations';
  
    mockData[genre].forEach(movie => {
      const card = document.createElement('div');
      card.className = 'card-demo';
      card.innerHTML = `<h5>${movie.title}</h5><p>${movie.desc}</p><small>Click if you watched it</small>`;
      card.style.cursor = 'pointer';
      card.onclick = () => showFinalRecommendations(movie.recommends);
      initialResults.appendChild(card);
    });
  }
  
  function showFinalRecommendations(movies) {
    // Completely remove the initial recommendations section
    const initialTitle = document.getElementById('initial-title');
    const initialResults = document.getElementById('initial-results');
  
    if (initialTitle) initialTitle.remove();
    if (initialResults) initialResults.remove();
  
    // Final recommendation section
    const finalTitle = document.getElementById('final-title');
    const finalResults = document.getElementById('final-results');
  
    finalTitle.textContent = '🎯 Final Recommendations Based on Your Selection';
    finalResults.innerHTML = '';
  
    movies.forEach(movie => {
      const card = document.createElement('div');
      card.className = 'card-demo';
      card.innerHTML = `<h5>${movie.title}</h5><p>${movie.desc}</p>`;
      finalResults.appendChild(card);
    });
  }
  

  function resetDemo() {
    // Clear all generated content
    const initialTitle = document.getElementById('initial-title');
    const initialResults = document.getElementById('initial-results');
    const finalTitle = document.getElementById('final-title');
    const finalResults = document.getElementById('final-results');
  
    if (initialTitle) {
      initialTitle.textContent = '';
      initialTitle.style.display = 'block';
    }
  
    if (initialResults) {
      initialResults.innerHTML = '';
      initialResults.style.display = 'flex';
    }
  
    if (finalTitle) finalTitle.textContent = '';
    if (finalResults) finalResults.innerHTML = '';
  
    // Optionally reset dropdown to default
    const genreSelect = document.getElementById('genreSelect');
    if (genreSelect) genreSelect.selectedIndex = 0;
  }
  
  
  
  
  