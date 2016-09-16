(function() {
  'use strict';
  console.log('edit owner sanity check');

  //Delete Restaurant out of Database
  $(document).on('click', '.delete-btn', function() {
    const answer = confirm('Are you sure you want to remove this restaurant?');
    if (answer) {
        const $this = $(this);
        const restaurantsID = $this.parent().parent().attr("data-id");
        $.ajax({
                type: 'DELETE',
                url: `/restaurants/${restaurantsID}/delete/`
            })
            .done((data) => {
                alert("Restaurant Deleted!");
                location.reload();
                console.log(data);
            })
            .fail((err) => {
                console.log(err);
            });
    }
  });
  //get
  $(document).on('click', '.update-btn', function() {
  const $this = $(this);
  const restaurantID = $this.attr('data-id');
  const restaurantName = $this.attr('data-restaurantName');
  const restaurantIMG = $this.attr('data-restaurantIMG');
  const location = $this.attr('data-location');
  const cuisineType = $this.attr('data-cuisineType');
  const restaurantDescription = $this.attr('data-restaurantDescription');

  $('#input-id').val(restaurantID);
  $('#input-restaurantName').val(restaurantName);
  $('#input-restaurantIMG').val(restaurantIMG);
  $('#input-location').val(location);
  $('#input-cuisineType').val(cuisineType);
  $('#input-restaurantDescription').val(restaurantDescription);
});
//submit updates
  $(document).on('submit', '#modal-form', function(e) {
      e.preventDefault();
      const $restaurantID = $('#input-id').val();
      const $updatedrestaurantName = $('#restaurantName').val();
      const $updatedRestaurantIMG = $('#restaurantIMG').val();
      const $updatedLocation = $('#location').val();
      const $updatedCuisineType = $('#cuisineType').val();
      const $updatedRestaurantDescription = $('#restaurantDescription').val();
      const payload = {
        name: $updatedrestaurantName,
        url: $updatedRestaurantIMG,
        location: $updatedLocation,
        type: $updatedCuisineType,
        description: $updatedRestaurantDescription
      };
      console.log(payload);
      $.ajax({
        type: 'PUT',
        url: `/restaurants/${$restaurantID}/edit`,
        data: payload
      })
      .done((data) => {
        $('#myModal').modal('toggle');
        location.reload();
        console.log(data);
      })
      .fail((err) => {
        console.log(err);
      });
});
}());
