  // ========================
  // Counter Animation Script 
  // ========================
  document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.counter-number');
    let hasAnimated = false; // Ensure the animation only runs once (optional)

    // Use Intersection Observer so animation starts when counters are in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          animateCounters(counters);
          hasAnimated = true;
        }
      });
    }, { threshold: 0.5 });

    // Observe the first counter (or any single element in the container)
    if (counters.length > 0) {
      observer.observe(counters[0]);
    }

    function animateCounters(counters) {
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'), 10) || 0;
        const suffix = counter.getAttribute('data-suffix') || '';
        
        let current = 0;
        // The higher the divisor, the slower the count
        let increment = Math.max(1, Math.floor(target / 50));

        const timer = setInterval(() => {
          if (current < target) {
            current += increment;
            counter.textContent = current + suffix;
          } else {
            clearInterval(timer);
            counter.textContent = target + suffix;
          }
        }, 50); // updates every 50ms
      });
    }
  });
  
  //  =====LOADING PAGE DYNAMIC=====
   // Wait for the complete page to load
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  // beri delay kecil jika mau efek fade-out terlihat
  setTimeout(() => loader.classList.add('hidden'), 800);
});



//   =====COPY ALERT=====
// Ensure the DOM is fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', () => {
    const copyButton = document.getElementById('copy-btn');
  
    copyButton.addEventListener('click', () => {
      navigator.clipboard.writeText('9jZgvgS2bWtQiYzv48GcWzY4tnkeRSANbTm8Kp1LmSyS')
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Copied!',
            text: 'Copy Addr PAO Success',
            showConfirmButton: false,
            timer: 1500
          });
        })
        .catch(() => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Copy failed!'
          });
        });
    });
  });


// FUNGSI MENUTUP OFFCANVAS SETELAH MEMILIH MENU
document.addEventListener('DOMContentLoaded', () => {
  const offcanvasEl = document.getElementById('offcanvasNavbar');
  const bsOffcanvas = new bootstrap.Offcanvas(offcanvasEl);

  // Tangani klik di semua link/menu dalam offcanvas
  offcanvasEl.querySelectorAll('a.nav-link, a.btn').forEach(el => {
    el.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      e.preventDefault();

      // Pasang listener sekali untuk remove backdrop setelah benar-benar tertutup
      const onHidden = () => {
        // Buang backdrop bawaan Bootstrap
        document.querySelectorAll('.offcanvas-backdrop').forEach(b => b.remove());
        // Scroll ke target
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
        offcanvasEl.removeEventListener('hidden.bs.offcanvas', onHidden);
      };
      offcanvasEl.addEventListener('hidden.bs.offcanvas', onHidden);

      // Tutup offcanvas
      bsOffcanvas.hide();
    });
  });
});

