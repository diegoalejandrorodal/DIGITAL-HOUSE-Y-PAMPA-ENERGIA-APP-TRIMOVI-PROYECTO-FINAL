function $(elem) {
    return document.querySelector(elem)
}

window.addEventListener('load', function() {
    let $form = $('#form')
    let $submitErrors = $('#submitErrors')
    let $name = $('#name');
    let $nameErrors = $('#nameErrors')
    let $lastname = $('#lastname');
    let $lastnameErrors = $('#lastnameErrors')
   // let $email = $('#email');
   // let $emailErrors = $('#emailErrors')
    let $phone = $('#phone');
    let $phoneErrors = $('#phoneErrors')
    let $date = $('#date');
    let $dateErrors = $('#dateErrors')
    
    let regExAlpha = /^[a-zA-Z\sñáéíóúü]*$/
  //  let regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    let regExphone=/^[0-9]{10}$/
    regExDate=/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/
    let validationErrors = false;

    $name.addEventListener('blur', function(){
        switch (true) {
            case !$name.value.trim():
                $nameErrors.innerHTML = 'El nombre es obligatorio'
                $name.style.color = 'red'
                $name.style.fontSize = '10px';
                $check[0].style.display = 'none'
                validationErrors = true
                break;
            case !regExAlpha.test($name.value) || $name.value.length < 3:
                $nameErrors.innerHTML = 'Debe tener al menos 3 letras'
                $name.style.color = 'red'
                $name.style.fontSize = '10px';
                $check[0].style.display = 'none'
                validationErrors = true
                break;
            default:
                $nameErrors.innerHTML = ''
                $name.style.color = '#2940D3'
                $name.style.backgroundColor = '#d8c371'
                $name.style.border = 'none'
                $check[0].style.display = 'block'
                validationErrors = false
                break;
        }
    })

    $lastname.addEventListener('blur', function(){
        switch (true) {
            case !$lastname.value.trim():
                $lastnameErrors.innerHTML = 'El apellido es obligatorio'
                $lastname.style.color = 'red'
                $lastname.style.fontSize = '10px';
                $check[1].style.display = 'none'
                validationErrors = true
                break;
            case !regExAlpha.test($lastname.value) || $lastname.value.length < 3:
                $lastnameErrors.innerHTML = 'Debe tener al menos 3 letras'
                $lastname.style.color = 'red'
                $lastname.style.fontSize = '10px';

                $check[1].style.display = 'none'
                validationErrors = true
                break;
            default:
                $lastnameErrors.innerHTML = ''
                $lastname.style.color = '#2940D3'
                $lastname.style.backgroundColor = '#d8c371'
                $lastname.style.border = 'none'
                $check[1].style.display = 'block'
                validationErrors = false
                break;
        }
    })

    
    
    $phone.addEventListener('blur', function(){
        switch (true) {
            case !regExPhone.test($phone.value):
                $phoneErrors.innerHTML = 'Igrese un teléfono válido';
                $phone.style.color = 'red';
                $phone.style.fontSize = '10px';

                validationErrors = true;
                break;
            default:
                $phoneErrors.innerHTML = '';
                $phone.style.color = 'red';
                $phone.style.border = 'none';
                validationErrors = false;
                break;
        }
    })

    $date.addEventListener('blur', function(){
        let dateUser = new Date($date.value);
        let yearUser = dateUser.getFullYear();
        switch (true) {
            case !regExDate.test($date.value):
                $dateErrors.innerHTML = 'Esta fecha no es válida';
                $date.style.color = 'red';
                validationErrors = true;
                break;
            case yearUser > actualYear:
                $dateErrors.innerHTML = 'La fecha no puede ser posterior al ';
                $date.style.color = 'red';
                validationErrors = true;
                break;    
            default:
                $dateErrors.innerHTML = '';
                $date.style.color = '#2940D3';
                $date.style.backgroundColor = '#d8c371';
                $date.style.border = 'none';
                validationErrors = false;
                break;
        }
    })
    

    $form.addEventListener('submit', function(e) {
        let error = false;
        e.preventDefault()

        let elementsForm = this.elements;

        for (let i = 0; i < elementsForm.length - 1; i++) {
            if(elementsForm[i].value == '' && elementsForm[i].type !== 'file'){
                elementsForm[i].style.backgroundColor = 'rgba(255, 0, 0, 0.2)'
                $submitErrors.style.color = 'red'
                $submitErrors.innerHTML = 'Los campos indicados son obligatorios'
                error = true
            }
        }

        if(!$terms.checked) {
            $terms.style.border = '3px solid red'
            $termsErrors.innerHTML = 'Debes aceptar los terminos y condiciones'
            error = true
        }

        if(!error && !validationErrors) {
            $form.submit()
        }
    })

})