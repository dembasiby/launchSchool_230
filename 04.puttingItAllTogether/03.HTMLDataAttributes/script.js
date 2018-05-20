$(function() {
  $('a[data-block]').on('click', function(e) {
    e.preventDefault();

    // var $element = $(this).get(0).dataset.block;
    var $element = $(this).attr('data-block');
    var $article = $('article[data-block='+$element+']');
    $('article[data-block]').css('display', 'none').not($article);
    $article.css('display', 'block');
  });
});