function() {

  // Check whether Search Banner Present
  // If so, then return NULL

  if ($('#SearchAdvertBanner').length > 0) {
    return "PRESENT";
  }


  // Else find and return Aisle banner...

  var ci = jQuery('#CategoryAdvert a').attr('addid').match(/\d+/);
  if (ci.length == 1) {
    return ci[0];
  }
}
