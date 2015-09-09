var primeSifting = function(userNumber) {
  var list = [];
  for (var i = 2; i <= userNumber; i++) {
    list.push(i);
  }
  var prime = 2;
  while (prime <= userNumber) {
    list.forEach(function(numberToCheck) {
      if (numberToCheck % prime === 0) {
        if (prime != numberToCheck) {
          var removeThisNumber = list.indexOf(numberToCheck);
          debugger;
          list.splice(removeThisNumber, 1);
        }
      }
    });
    prime = prime + 1;
  }

  return list;
}

$(document).ready(function() {
  $("form#prime_sift").submit(function(event) {
    var user_number_form = $("input#user_number").val();
    var result = primeSifting(user_number_form);
    result.forEach(function(prime) {
      $("ul").append("<li>" + prime + "</li>");
    });

    event.preventDefault();
  });
});
