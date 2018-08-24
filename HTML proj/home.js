jQuery(document).ready(function() {
jQuery('.tabs .tab-links a').on('click', function(e)  {
var currentAttrValue = jQuery(this).attr('href');
// Show/Hide Tabs
jQuery('.tabs ' + currentAttrValue).show().siblings().hide();
// Change/remove current tab to active
jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
e.preventDefault();



// animate slide effect no effect
//jQuery('.tabs ' + currentAttrValue).slideDown(800).siblings().slideUp(800);
});

/* from https://codepen.io/DotFreelance/pen/aGbRby?page=1&  */
function openMag() {
  $('.container').toggleClass('open');
}
/* ends here */
});



