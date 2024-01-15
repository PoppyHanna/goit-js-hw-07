const nameInput = document.getElementById('name-input');
    const nameOutput = document.getElementById('name-output');

    nameInput.addEventListener('input', updateGreeting);

    function updateGreeting() {
      const trimmedValue = nameInput.value.trim();
      const greetingName = trimmedValue || 'Anonymous';
      nameOutput.textContent = greetingName;
    }