Sentry.init({
  dsn: 'https://************************@sentry.io/********',
  release: '1.2.3',
  environment: 'development'
});

document.getElementById("color").focus();

$(document).keydown(function(evt) {

  if (evt.keyCode == 13) {
    $("body").css("background-color", $("#color").val());
  }
  try {
    throw new Error("I'm an error!");
    } catch (e) {
        console.log('I\'m doing a thing!');
        Sentry.captureException(e);
  }
});