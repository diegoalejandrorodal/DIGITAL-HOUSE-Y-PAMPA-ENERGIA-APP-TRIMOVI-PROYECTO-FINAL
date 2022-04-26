console.log("inputTittle");

// FUNCION PARA EVITAR REPETIR document.querySelector
function qs(element) {
  return document.querySelector(element);
}
//VALIDACIONES DEL FORMULARIO

//VARIABLES PARA OBTENER TODOS LOS ELEMENTOS A VALIDAR
window.onload = () => {
  let $inputTitle = qs("#inputTitle"),
    $titleErrors = qs("#error-title");
  console.log($inputTitle),
    ($inputDirection = qs("#inputDirection")),
    ($errorDirection = qs("#error-Direction")),
    ($inputDuration = qs("#input-duration")),
    ($errorDuration = qs("#error-Duration")),
    ($inputYear = qs("#input-year")),
    ($errorYear = qs("#error-year")),
    ($inputTriler = qs("#input-triler")),
    ($errorTriler = qs("#error-triler")),
    ($inputPrice = qs("#input-price")),
    ($errorPrice = qs("#error-price")),
    ($inputImage = qs("#formFile")),
    ($imageErrors = qs("#fileErrors")),
    ($inputSinopsis = qs("#input-sinopsis")),
    ($sinopsisErrors = qs("#error-sinopsis")),
    ($inputGenres = qs("#inputgenres")),
    ($errorGenres = qs("#errorgenres")),
    ($genreName = qs("#genre.name")),
    ($form = qs("#form-front"));
  $errorform = qs("#errorform");
  $imgPreview = qs("#img-preview");
  let regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/;

  let validationsErrors = false;

  $inputTitle.addEventListener("blur", function (e) {
    console.log(e.target.value);
    switch (true) {
      case !$inputTitle.value.trim():
        $titleErrors.innerHTML = "El campo nombre es obligatorio";
        $inputTitle.classList.add("is-invalid");
        validationsErrors = true;
        break;
      case !regExAlpha.test($inputTitle.value):
        $titleErrors.innerHTML = "Ingrese un nombre válido";
        $inputTitle.classList.add("is-invalid");
        validationsErrors = true;
        break;
      default:
        $inputTitle.classList.remove("is-invalid");
        $inputTitle.classList.add("is-valid");
        $titleErrors.innerHTML = "";
        validationsErrors = false;
        break;
    }
  });

  $inputDirection.addEventListener("blur", function (e) {
    console.log(e.target.value);
    switch (true) {
      case !$inputDirection.value.trim():
        $errorDirection.innerHTML = "El campo dirección es obligatorio";
        $inputDirection.classList.add("is-invalid");
        validationsErrors = true;
        break;
      case !regExAlpha.test($inputSinopsis.value):
        $inputDirection.innerHTML = "Ingrese una sinopsis válido";
        $inputDirection.classList.add("is-invalid");
        validationsErrors = true;
        break;
      default:
        $inputDirection.classList.remove("is-invalid");
        $inputDirection.classList.add("is-valid");
        $errorDirection.innerHTML = "";
        validationsErrors = false;
        break;
    }
  });

  
  $inputGenres.addEventListener("blur", function (e) {
    console.log(e.target.value);
    switch (true) {
      case !$inputGenres.value.trim():
        $errorGenres.innerHTML = "El campo nombre es obligatorio";
        $inputGenres.classList.add("is-invalid");
        validationsErrors = true;
        break;
      case !regExAlpha.test($inputGenres.value):
        $errorGenres.innerHTML = "Ingrese un nombre válido";
        $inputGenres.classList.add("is-invalid");
        validationsErrors = true;
        break;
      default:
        $inputGenres.classList.remove("is-invalid");
        $inputGenres.classList.add("is-valid");
        $errorGenres.innerHTML = "";
        validationsErrors = false;
        break;
    }
  });

  $inputDuration.addEventListener("blur", function (e) {
    console.log(e.target.value);
    switch (true) {
      case !$inputDuration.value.trim():
        $errorDuration.innerHTML = "El campo duration es obligatorio";
        $inputDuration.classList.add("is-invalid");
        validationsErrors = true;
        break;
      case !regExAlpha.test($inputSinopsis.value):
        $inputDuration.innerHTML = "Ingrese una duración válida";
        $inputDuration.classList.add("is-invalid");
        validationsErrors = true;
        break;
      default:
        $inputDuration.classList.remove("is-invalid");
        $inputDuration.classList.add("is-valid");
        $errorDuration.innerHTML = "";
        validationsErrors = false;
        break;
    }
  });

  $inputYear.addEventListener("blur", function (e) {
    console.log(e.target.value);
    switch (true) {
      case !$inputYear.value.trim():
        $errorYear.innerHTML = "El campo year es obligatorio";
        $inputYear.classList.add("is-invalid");
        validationsErrors = true;
        break;
      case !regExAlpha.test($inputSinopsis.value):
        $inputYear.innerHTML = "Ingrese un año válido";
        $inputYear.classList.add("is-invalid");
        validationsErrors = true;
        break;
      default:
        $inputYear.classList.remove("is-invalid");
        $inputYear.classList.add("is-valid");
        $errorYear.innerHTML = "";
        validationsErrors = false;
        break;
    }
  });

  $inputTriler.addEventListener("blur", function (e) {
    console.log(e.target.value);
    switch (true) {
      case !$inputTriler.value.trim():
        $errorTriler.innerHTML = "El campo triler es obligatorio";
        $inputTriler.classList.add("is-invalid");
        validationsErrors = true;
        break;
      case !regExAlpha.test($inputSinopsis.value):
        $inputTriler.innerHTML = "Ingrese un triler válido";
        $inputTriler.classList.add("is-invalid");
        validationsErrors = true;
        break;
      default:
        $inputTriler.classList.remove("is-invalid");
        $inputTriler.classList.add("is-valid");
        $errorTriler.innerHTML = "";
        validationsErrors = false;
        break;
    }
  });

  $inputPrice.addEventListener("blur", function (e) {
    console.log(e.target.value);
    switch (true) {
      case !$inputPrice.value.trim():
        $errorPrice.innerHTML = "El campo precio es obligatorio";
        $inputPrice.classList.add("is-invalid");
        validationsErrors = true;
        break;
      case !regExAlpha.test($inputSinopsis.value):
        $inputPrice.innerHTML = "Ingrese un precio válido";
        $inputPrice.classList.add("is-invalid");
        validationsErrors = true;
        break;
      default:
        $inputPrice.classList.remove("is-invalid");
        $inputPrice.classList.add("is-valid");
        $errorPrice.innerHTML = "";
        validationsErrors = false;
        break;
    }
  });

  $inputSinopsis.addEventListener("blur", function (e) {
    console.log(e.target.value);
    switch (true) {
      case !$inputSinopsis.value.trim():
        $sinopsisErrors.innerHTML = "El campo sinopsis es obligatorio";
        $inputSinopsis.classList.add("is-invalid");
        validationsErrors = true;
        break;
      case !regExAlpha.test($inputSinopsis.value):
        $inputSinopsis.innerHTML = "Ingrese una sinopsis válida";
        $inputSinopsis.classList.add("is-invalid");
        validationsErrors = true;
        break;
      default:
        $inputSinopsis.classList.remove("is-invalid");
        $inputSinopsis.classList.add("is-valid");
        $sinopsisErrorss.innerHTML = "";
        validationsErrors = false;
        break;
    }
  });

  $form.addEventListener("submit", function (event) {
    event.preventDefault();

    let error = false;
    let elementsForm = this.elements;

    for (let index = 0; index < elementsForm.length - 1; index++) {
      if (
        elementsForm[index].value == "" &&
        elementsForm[index].type !== "file" &&
        elementsForm[index].$inputTitle !== "title"
      ) {
        elementsForm[index].classList.add("is-invalid");
        submitErrors.innerHTML = "Los campos señalados son obligatorios";
        error = true;
        if (!error && !validationsErrors) {
          $form.submit();
        }
      }
    }
  });

  $file.addEventListener("change", function fileValidation() {
    let filePath = $file.value; // Captura el valor del input
    let allowedExtensions = /(.jpg|.jpeg|.png|.gif|.web)$/i;
    if (!allowedExtensions.exec(filePath)) {
      //El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.
      $fileErrors.innerHTML =
        "Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)";
      $file.value = "";
      $imgPreview.innerHTML = "";
      return false;
    } else {
      //Image preview
      console.log($file.files);
      if ($file.files && $file.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
          $imgPreview.innerHTML = `<img src="${e.target.result}" alt="">`;
        };
        reader.readAsDataURL($file.files[0]);
        $fileErrors.innerHTML = "";
        $file.classList.remove("is-invalid");
      }
    }
  });
};

