console.log('restaurants.js sanity check');

(function() {
  'use strict';
  const ratingsArray = $('.rating').splice(0, $('.rating').length)
  console.log(ratingsArray);
  // console.log(ratingsArray);
  ratingsArray.forEach(function(rating, i) {
    $(`.number${i + 1} .num${parseInt(rating.textContent)}`).toggleClass('glyphicon glyphicon-star-empty glyphicon glyphicon-star')
    $(`.number${i + 1} .num${parseInt(rating.textContent)}`).prevAll().toggleClass('glyphicon glyphicon-star-empty glyphicon glyphicon-star')
  })

  $(`.number0 .num${parseInt($('#starRating')[0].textContent)}`).toggleClass('glyphicon glyphicon-star-empty glyphicon glyphicon-star')
  $(`.number0 .num${parseInt($('#starRating')[0].textContent)}`).prevAll().toggleClass('glyphicon glyphicon-star-empty glyphicon glyphicon-star');

  selectRadioButton();

}());

function fillStars(num) {
  $(`#${num}`).prevAll().css('visibility', 'hidden')
}

function selectRadioButton() {
  var rating = $( ".rating_radio" ).attr('data-id');
  if (rating >= 0 && rating < 1) {
    $('#inlineRadio1').attr('checked', true);
  } else if (rating >= 1 && rating < 2) {
    $('#inlineRadio2').attr('checked', true);
  } else if (rating >= 2 && rating < 3) {
    $('#inlineRadio3').attr('checked', true);
  } else if (rating >= 3 && rating < 4) {
    $('#inlineRadio4').attr('checked', true);
  } else if (rating >= 4 && rating <= 5) {
    $('#inlineRadio5').attr('checked', true);
  }
}
