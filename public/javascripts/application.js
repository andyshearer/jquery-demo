// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults


$(document).ready(function() {
     $(".ajaxLink").click( function() {
	  // show spinner
	  $('#spinner').show();
      $.ajax({
          url: this.href + '.js',
          dataType: "script",
          beforeSend: function(xhr) {xhr.setRequestHeader("Accept", "text/javascript");}
      });
      return false;
 	 });
 });