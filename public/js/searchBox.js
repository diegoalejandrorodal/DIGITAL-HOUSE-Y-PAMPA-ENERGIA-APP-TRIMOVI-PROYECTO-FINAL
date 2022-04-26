const $searchBox = document.querySelector('header .search-box');

const $form = $searchBox.querySelector('form'),
    $button = $searchBox.querySelector('.btn-search');

$button.addEventListener('focus', (event) => {
    $form.classList.add('active');
    $searchBox.classList.add('active');
    $form.querySelector('.input-search').focus();
    event.target.style.display = "none";
    document.querySelector('header .container-logo').style.display = 'none';
    document.querySelector('header .right-container').style.display = 'none';
})


$form.querySelector('.input-search').addEventListener('blur', (event) => {
    $button.style.display = 'block';
    $form.classList.remove('active');
    $searchBox.classList.remove('active');
    document.querySelector('header .container-logo').style.display = 'flex';
    document.querySelector('header .right-container').style.display = 'flex';
})