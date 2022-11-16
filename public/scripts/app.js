// Client facing scripts here

// allow document to load before content
$(document).ready(function () {

// create new password
const createNewPasswordBox = function (password) {
  const $password = $(`
    <div class="passwords-box">
      <div>
        <h6>Website name: ${password.websitename}</h6>
      </div>
      <div>
        <h6>Category: ${password.category}</h6>
      </div>
      <div>
        <h6>URL: ${password.urlname}</h6>
      </div>
      <div>
        <h6>UserName: ${password.username}</h6>
      </div>
      <div>
        <h6>Password:</h6>
        <h6 id="${password.password_id}">${password.password}</h6>
      </div>
      <div class="button-container">
        <button onclick="copyToClipboard('#${password.password_id}')" class="btn btn-outline-info copy_password">Copy</button>
        <button class="btn btn-outline-danger delete_password" id="user id"
          type="submit">Delete</button>
        <button class="btn btn-outline-primary edit_password" id="user id" type="submit"
          style="display:block">Edit</button>
        <script> function copyToClipboard(element) {
          let $temp = $("<input>");
          $("body").append($temp);
          $temp.val($(element).text()).select();
          document.execCommand("copy");
          $temp.remove();
          }
        </script>
      </div>
  </div>
  `);
  return $password;
};


//function responsible for taking in an array of password objects
// and then appending each one to the .passwords element
const renderPasswords = function (passwords) {
  // loops through the passwords obj
  passwords.forEach(password => {
    //calls createNewPasswordBox on each password obj
    const passwordObj = createNewPasswordBox(password);
    //add the returned value to the end of the selected ele using its class
    $('.passwords').append(passwordObj);
  });
};

  //function that is responsible for fetching passwords
  // from http://localhost:8080/passwords page
  const loadPasswords = function () {
    $.ajax({
      datatype: "json",
      type: "GET",
      url: "http://localhost:8080/api/users/passwords",
      success: (data) => {
        renderPasswords(data);
      }
    });
  }
  loadPasswords();
});

