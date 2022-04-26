function qs(element) {
    return document.querySelector(element)
};

window.addEventListener('load', () => {
    /*TITLE*/
    const $title = document.querySelector('#title');
    const $titleError = document.querySelector('#titleErrors');
    /*DIRECTOR*/
    const $director = document.querySelector('#director');
    const $directorErrors = document.querySelector('#directorErrors');
    /*DURATION*/
    const $duration = document.querySelector('#duration');
    const $durationErrors = document.querySelector('#durationErrors');
    /*YEAR*/
    const $year = document.querySelector('#year');
    const $yearError = document.querySelector('#yearError');
    /*TRAILER*/
    const $trailer = document.querySelector('#trailer');
    const $trailerErrors = document.querySelector('#trailerErrors');
    /*PRICE*/
    const $price = document.querySelector('#price');
    const $priceErrors = document.querySelector('#priceErrors');
    /*IMAGE*/
    const $image = document.querySelector('#image');
    const $imageErrors = document.querySelector('#imageErrors');
    /*SINOPSIS*/
    const $sinopsis = document.querySelector('#sinopsis');
    const $sinopsisErrors = document.querySelector('#sinopsisErrors');
    /*GENRES*/
    const $genres = document.querySelector('#genres');
    const $genresErrors = document.querySelector('#genresErrors');

    const regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/;



    /Title/
    $title.addEventListener('blur', function () {
        switch (true) {
            case !$title.value.trim():
                $titleErrors.innerHTML = 'El campo titulo es obligatorio';
                break;
            case !regExAlpha.test($title.value):
                $titleError.innerHTML = 'Ingrese un titulo';
                break
            default:
                $titleErrors.innerHTML = ""
                break;
        }
    })

        / genres /
        $genres.addEventListener('change', function () {

            switch (true) {
                case $genres.value == 0:
                    $genresErrors.innerHTML = 'El genero es obligatorio';
                    break;

                default:
                    $genderErrors.innerHTML = '';
                    break;
            }
        })

        / price /
        $price.addEventListener('blur', function () {
            switch (true) {
                case $price.value == 0:
                    $priceErrors.innerHTML = 'debe colocar un precio'
                    break;
                default:
                    $priceErrors.innerHTML = ""
                    break;
            }
        })

        / Sinopsis /
        $sinopsis.addEventListener('blur', function () {
            if (!$sinopsis.value.trim()) {
                $sinopsisErrors.innerHTML = 'Campo requerido';
                $sinopsis.classList.add('is-invalid')
                sinopsisErrors = true
            } else {
                $sinopsis.classList.remove('is-invalid');
                $sinopsis.classList.add('is-valid');
                $sinopsisErrors.innerHTML = ''
                sinopsisErrors = false
            }
            /image/
            $image.addEventListener('change', function fileValidation() {
                let filePath = $image.value;
                let allowedExtensions = /(.jpg|.jpeg|.png|.gif|.web)$/i;
                if (!allowedExtensions.exec(filePath)) {
                    $imageError.innerHTML = 'Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)'
                    $photo.value = '';
                    $imgPreview.innerHTML = '';
                    return false;
                } else {
                    console.log($image.files)
                    if ($image.files && $image.files[0]) {
                        let reader = new FileReader();
                        reader.onload = function (e) {
                            $imgPreview.innerHTML = `<img src="${e.target.result}" alt="">`
                        };
                        reader.readAsDataURL($image.files[0]);
                        $imageError.innerHTML = '';
                        $image.classList.remove('is-invalid')
                    }
                }
            })

        })
})