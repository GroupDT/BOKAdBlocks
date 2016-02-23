function() {

  // Find and return SIS (Shop-in-Shop) Advert ID...

  var ci = jQuery('#SIS_Page_Advert div img').attr('addid').match(/\d+/);
  if (ci.length == 1) {
    return ci[0];
  }
}
