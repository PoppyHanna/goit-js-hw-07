 function handleFormSubmit(event) {
      event.preventDefault(); 
      const form = event.target;
      const formData = {};

      
      for (const input of form.elements) {
        if (input.tagName === 'INPUT') {
          formData[input.name] = input.value.trim();
        }
      }

      if (Object.values(formData).some(value => value === '')) {
        alert('All form fields must be filled in');
        return;
      }

      console.log(formData);

     
      form.reset();
    }
