function() {
  var ci = jQuery('#SearchAdvertBanner a').attr('addid').match(/\d+/);
  if (ci.length == 1) {
    return ci[0];
  }
}
