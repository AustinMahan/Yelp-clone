(function() {
    'use strict';
    console.log('edit owner sanity check');

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
}());
