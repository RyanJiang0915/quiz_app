document.addEventListener("DOMContentLoaded", function() {
    const readMoreBtn = document.getElementById("readMoreBtn");
    const animatedElements = document.querySelectorAll("[data-animate]");
  
    // Scroll to the comparison section when "Read More" is clicked
    readMoreBtn.addEventListener("click", function() {
      const comparisonSection = document.getElementById("comparison");
      comparisonSection.scrollIntoView({ behavior: "smooth" });
    });
  
    // Observe elements for scroll-into-view animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add a class of 'active' to trigger the fade-in
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );
  
    animatedElements.forEach((el) => {
      observer.observe(el);
    });
  });