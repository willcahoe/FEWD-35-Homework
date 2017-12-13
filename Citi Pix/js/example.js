<form id="wine-form">
    <select id="wino">
      <option>Select Your Favorite Wine:</option>
      <option value="chardonnay" id="1">Chardonnay</option>
      <option value="pinot-noir" id="2">Pinot Noir</option>
      <option value="red" id="3">Red</option>
      <option value="40" id="4">Old E</option>
      <option value="nighttrain" id="5">Nighttrain</option>
    </select>
    <input type="submit"></input>
    <p id="feedback">Let us know what you like to drink to earn 10% your next purchase.</p>
  </form>

  // Anonymous function, scope is only in the moment it is used
$('#wine-form').submit(function(event) {
  // Prevent default form submission
  event.preventDefault();

  // Store the captured value
  var wineCapture = $("#wino").val();

  // Send out messages depending on the selection in the form
  if ( wineCapture === 'pinot-noir' ) {
    $('#feedback').text('Glad you have some taste! Pinot Noir, if you buy 3 get one 10% off.').show();
  } else if ( wineCapture === 'red' ) {
    $('#feedback').text('You must drink beer, no coupon for you!').show();
  } else if ( wineCapture === "chardonnay") {
    $('#feedback').text('Chardonnay gives me a headache, ow!').show();
  } else if ( Number(wineCapture) === 40) {
    var idFeedback = $("#4").text();
    $('#feedback').text(idFeedback).show();
  }

  // Check the variable
  console.log(wineCapture);
});