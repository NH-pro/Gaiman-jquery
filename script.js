console.log('In script.js');

$( document ).ready(onReady);

function onReady() {
    console.log('so ready');

    let titleHeader = $('h1')
    // let titleHeader = <h1>...</h1>
    console.log(titleHeader);
    // console.log('titleHeader',<h1>...</h1>)

    let allListItems = $('li');
    console.log('li elements', allListItems);


    // css selectors are the same with jQuery

    let justThatOneItem = $('#madame-li-element');
    // in this case, we select by id with '#'

    justThatOneItem
        .text('DOM Manipulation')
        .css('font-weight', 'bold')
        .css('transform', 'rotate(-90deg)');

    //DOM manipulation

    $('.first-and-last').css('color', 'blue');
    // we select by class with '.'


    $('ul').append('<li>Forms<button>🍕</button></li>');

    $('#theButton').on('click', whenIClickTheButton);
    //                              no () needed after the called function
} 

function whenIClickTheButton() {
    console.log('someone clicked me!');
    $('li').last().remove();
    //when the button is clicked, it removes the last li
}