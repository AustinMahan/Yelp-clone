console.log("restaurants.js sanity check");
  (function() {
    'use strict';
    const ratingsArray = []
    $( ".starsDiv" ).each( function(e) {
      var starsDivID = "#" + $(this).attr("id");
      fillStars(starsDivID);
    });
  }());

  function fillStars(starsDivID) {
    var starsFromDB = $(starsDivID + ' #starRating').html()
    var firstStar = $(starsDivID + ' :nth-child(1)')
    var secondStar = $(starsDivID + ' :nth-child(2)')
    var thirdStar = $(starsDivID + ' :nth-child(3)')
    var fourthStar = $(starsDivID + ' :nth-child(4)')
    var fifthStar = $(starsDivID + ' :nth-child(5)')
    if (starsFromDB >= 1 && starsFromDB < 2) {
      firstStar.toggleClass("glyphicon glyphicon-star-empty glyphicon glyphicon-star");

    }
    else if (starsFromDB >= 2 && starsFromDB < 3) {
      firstStar.toggleClass("glyphicon glyphicon-star-empty glyphicon glyphicon-star");
      secondStar.toggleClass("glyphicon glyphicon-star-empty glyphicon glyphicon-star");

    }
    else if (starsFromDB >= 3 && starsFromDB < 4) {
      firstStar.toggleClass("glyphicon glyphicon-star-empty glyphicon glyphicon-star");
      secondStar.toggleClass("glyphicon glyphicon-star-empty glyphicon glyphicon-star");
      thirdStar.toggleClass("glyphicon glyphicon-star-empty glyphicon glyphicon-star");

    }
    else if (starsFromDB > 4 && starsFromDB < 5) {
      firstStar.toggleClass("glyphicon glyphicon-star-empty glyphicon glyphicon-star");
      secondStar.toggleClass("glyphicon glyphicon-star-empty glyphicon glyphicon-star");
      thirdStar.toggleClass("glyphicon glyphicon-star-empty glyphicon glyphicon-star");
      fourthStar.toggleClass("glyphicon glyphicon-star-empty glyphicon glyphicon-star");
    }
    else if (starsFromDB === 5) {
      firstStar.toggleClass("glyphicon glyphicon-star-empty glyphicon glyphicon-star");
      secondStar.toggleClass("glyphicon glyphicon-star-empty glyphicon glyphicon-star");
      thirdStar.toggleClass("glyphicon glyphicon-star-empty glyphicon glyphicon-star");
      fourthStar.toggleClass("glyphicon glyphicon-star-empty glyphicon glyphicon-star");
      fifthStar.toggleClass("glyphicon glyphicon-star-empty glyphicon glyphicon-star");
    }
  }
