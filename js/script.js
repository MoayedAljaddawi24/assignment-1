// Basic client-side validation for the contact form
(function () {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');

  function setError(el, msg) {
    el.textContent = msg || '';
  }

  function isEmail(v) {
    return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v);
  }

  // Validate on submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let ok = true;

    setError(nameError);
    setError(emailError);
    setError(messageError);

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (!name) {
      setError(nameError, 'Please enter your name.');
      ok = false;
    }

    if (!email || !isEmail(email)) {
      setError(emailError, 'Enter a valid email address.');
      ok = false;
    }

    if (!message || message.length < 10) {
      setError(messageError, 'Message should be at least 10 characters.');
      ok = false;
    }

    if (ok) {
      alert('Thanks! This form is a demo only.');
      form.reset();
    }
  });

  // Optional: inline validation on blur
  [nameInput, emailInput, messageInput].forEach((input) => {
    input.addEventListener('blur', () => {
      if (input === nameInput && !nameInput.value.trim()) {
        setError(nameError, 'Please enter your name.');
      } else if (input === emailInput && !isEmail(emailInput.value.trim())) {
        setError(emailError, 'Enter a valid email address.');
      } else if (input === messageInput && messageInput.value.trim().length < 10) {
        setError(messageError, 'Message should be at least 10 characters.');
      }
    });

    // Clear error while typing
    input.addEventListener('input', () => {
      if (input === nameInput) setError(nameError);
      if (input === emailInput) setError(emailError);
      if (input === messageInput) setError(messageError);
    });
  });
})();

