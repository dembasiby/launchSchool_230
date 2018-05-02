$(function () {
  var $content = $('#content');
  
  // $content.css('font-size', '1.1em');
  // console.log($content.css('font-size'));
  // $content.width('56.5%');
  // console.log($content.width());
  $content.css({
    fontSize: '1.1em',
    width: '56.5%',
  });

  // console.log($('li.even').each(function () {
  //   console.log(this);
  // }));

  $('li').filter(':even').each(function () {
    console.log(this);
  });
  console.log('------------');
  console.log($('li').filter(':nth-of-type(3)'));
  console.log($('li:nth-of-type(3)'));
  console.log('------------');
  console.log($('li').filter('[data-id]'));
});

console.log('Hello, world!');