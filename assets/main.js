const greetings =()=>{
    const inputValue = document.querySelector('input').value
    const generatedElement = document.createElement('p');
      generatedElement.innerHTML = `<p>Hello ${inputValue}, welcome to the bootcamp </p>`
      document.body.appendChild(generatedElement)
    if(inputValue === '' || inputValue == null){
      generatedElement.innerHTML = `<p>Please enter your name</p>`
    }
    }