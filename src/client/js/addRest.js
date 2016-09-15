(function () {
  var i = 0;
  $('#addEmpl').click(function() {
    i++
    $(` <div class="oneEmp">
    <br>
    <br>
        <h3>Employee</h3>
        <div class="col-md-6">
          <label for="first_name">First Name</label>
          <input class="form-control" type="text" name="first_name-${i}">
        </div>
        <div class="col-md-6">
          <label for="last_name">Last Name</label>
          <input class="form-control" type="text" name="last_name-${i}">
        </div>
        <div class="col-md-12">
          <label for="role">Role</label>
          <input class="form-control" type="text" name="role-${i}">
        </div>
      </div>`).insertBefore('#addEmpl')
  })

})();
