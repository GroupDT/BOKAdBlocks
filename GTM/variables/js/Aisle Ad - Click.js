function() {
  
  // Check whether Search Banner Present
  // If so, then return NULL

  if ($('#SearchAdvertBanner').length > 0 || $('#SF_AisleBannerAnimated').length > 0) {
    return "";
  }
  
  
  // Else get to work....  
  var objAdvert = {{element}};
  var objAdvertAttr = objAdvert.getAttribute("addid");
  
  return objAdvertAttr;
}
