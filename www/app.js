'use strict';
/*arrow animation*/
$('.arrow').hide().delay(5000).show(0);
$('.arrow').animate({ marginTop: '23vh' }, 1000);

/*projets title*/
var title = $('#projects-title').text();
var $num = title.length + 4; //num of columns
var property = 'repeat(' + $num + ', 1fr)'
var titleArr = title.toUpperCase().split('');

$('.new-title').css({
  'grid-template-columns': property,
  'grid-template-rows': 'repeat(1, 1fr)'
});
function insertChar(titleArr) {
  for (var i = 0; i < titleArr.length; i ++) {
    var colNum = i + 3;
    $('<span>' + titleArr[i] + '</span>').appendTo('.new-title')
    .css({
      'grid-column': String(colNum),
      'grid-row': '1',
      'text-align': 'center'
    });
  };
};
insertChar(titleArr);

/*summary shrink*/
// $(document).scroll(function() {
//   $('.summary').css({
//     'height': ''
//   });
// });
