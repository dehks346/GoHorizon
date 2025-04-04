if (window.location.pathname.endsWith('.html')) {
    // Remove .html from the URL without reloading the page
    history.replaceState(null, document.title, window.location.pathname.replace('.html', ''));
  }