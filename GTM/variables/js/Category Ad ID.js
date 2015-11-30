function() {
  var ci = jQuery('.catad img').attr('src').match(/CI=\d+/);
  if (ci.length == 1) {
    return ci[0].slice(3);
  }
}
