const tour = new Shepherd.Tour({
    useModalOverlay: true,
    defaultStepOptions: {
      classes: 'shadow-md bg-purple-dark',
      scrollTo: true
    }
  });
  tour.addStep({
    id: 'login-submit',
    arrow: false,
    text: "<b>Bonjour!</b><br><b>Let's Try MyCloud</b><br><br>Hit the Login button to explore",
    attachTo: {
      element: '#login-submit',
      on: 'bottom',
      highlightClass: 'highlight-layer'
    },
    highlightClass: 'highlight-layer',
    classes: 'example-step-extra-class',
    modalOverlayOpeningPadding: 0

  });
  tour.start();