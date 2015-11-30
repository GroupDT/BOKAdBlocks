function() {

  // Find and return SIS (Shop-in-Shop) Video Advert ID...

  var ci = jQuery('#SISVideoContainer').attr('addid').match(/\d+/);
  if (ci.length == 1) {
    return ci[0];
  }
}
