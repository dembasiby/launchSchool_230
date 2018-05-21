$(function() {
  $('a[data-block]').on('click', function(e) {
    e.preventDefault();
    var $article = $('article[data-block=' + $(this).attr('data-block') + ']');
    $('article').hide().filter($article).show();

    // var $element = $(this).get(0).dataset.block;
    // $('article[data-block]').css('display', 'none').not($article);
    // $article.css('display', 'block');
  });
});