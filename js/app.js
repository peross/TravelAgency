//Search bar
function findText(keyword){
    if(keyword){
        var content = $("body").text();
        var searchText = new RegExp(keyword, "i");
        var matches = content.match(searchText);

        if(matches){
            $("body").html(content.replace(searchText, function(match){
                return "<span class='highlight'>"+match+"</span>";
        }));
        } else{
            $(".highlight").removeClass("highlight");
        }
    } else {
        $(".highlight").removeClass("highlight");
    }
}

jQuery(document).ready(function($) {
    $('#search-btn').on('keyup', function () {
        findText($(this).val());
    })
});


//Show search bar
const searchBtn = document.getElementById('search-btn');
const searchBar = document.querySelector('.search-bar-container');

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

//On scroll remove active class
window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navBar.classList.remove('active');
    loginForm.classList.remove('active');
}

//Show login form on click
const loginBtn = document.getElementById('login-btn');
const loginForm = document.querySelector('.login-form-container');
const closeForm = document.getElementById('close-form');

loginBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
});

closeForm.addEventListener('click', () => {
    loginForm.classList.remove('active');
});

//Hamburger menu
const menu = document.getElementById('hamburger');
const navBar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navBar.classList.toggle('active');
});

//Slideshow 
const videoBtn = document.querySelectorAll('.slide-btn');

videoBtn.forEach(btn => {
    btn.addEventListener('click', () =>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');

        let src = btn.getAttribute('data-src');
        document.getElementById('video-slider').src = src;
    })
});