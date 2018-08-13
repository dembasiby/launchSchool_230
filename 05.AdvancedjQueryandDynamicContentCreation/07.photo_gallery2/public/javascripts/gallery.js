$(function() {
  var templates = {};
  var photos;

  $('script[type="text/x-handlebars"]').each(function() {
    var $template = $(this);
    templates[$template.attr('id')] = Handlebars.compile($template.html()); 
  });

  $('[data-type=partial]').each(function() {
    var $partial = $(this);
    Handlebars.registerPartial($partial.attr('id'), $partial.html());
  });

  var slideshow = {
    $el: $('#slideshow'),
    duration: 500,
    nextSlide: function(e) {
      e.preventDefault();
      var $current = this.$el.find('figure:visible');
      var $next = $current.next();

      if (!$next.length) {
        $next = this.$el.find('figure').first();
      }
      
      $current.fadeOut(this.duration);
      $next.fadeIn(this.duration);
      this.renderPhotoContent($next.attr('data-id'));
    },
    prevSlide: function(e) {
      e.preventDefault();
      $current = this.$el.find('figure:visible');
      $prev = $current.prev();

      if (!$prev.length) {
        $prev = this.$el.find('figure').last();
      }
      
      $current.fadeOut(this.duration);
      $prev.fadeIn(this.duration);
      this.renderPhotoContent($prev.attr('data-id'));
    },
    renderPhotoContent: function(idx) {
      $('[name=photo_id]').val(idx);
      renderPhotoInformation(+idx);
      getCommentsFor(+idx);
    },
    bindEvents: function() {
      this.$el.find('a.next').on('click', $.proxy(this.nextSlide, this));
      this.$el.find('a.prev').on('click', $.proxy(this.prevSlide, this));
    },
    init: function() {
      this.bindEvents();
    }
  }

  $('section > header').on('click', '.actions a', function(e) {
    e.preventDefault();
    var $e = $(e.target);

    $.ajax({
      url: $e.attr('href'),
      type: 'post',
      data: 'photo_id=' + $e.attr('data-id'),
      success: function(json) {
        $e.text(function(i, txt) {
          return txt.replace(/\d+/, json.total);
        })
      }
    })
  });

  $.ajax({
    url: '/photos',
    success: function(json) {
      photos = json;
      renderPhotos();
      renderPhotoInformation(photos[0].id);
      slideshow.init();
      getCommentsFor(photos[0].id);
    }
  });

  $('form').on('submit', function(e) {
    e.preventDefault();
    $f = $(this);

    $.ajax({
      url: $f.attr('action'),
      type: $f.attr('method'),
      data: $f.serialize(),
      success: function(json) {
        $('#comments ul').append(templates.comment(json));
      }
    });
  })

  function renderPhotos() {
    return $('#slides').html(templates.photos({ photos: photos }));
  }

  function renderPhotoInformation(idx) {
    var photo = photos.filter(function(photo){
      return photo.id === idx;
    })[0];

    $('section > header').html(templates.photo_information(photo));
  }

  function getCommentsFor(idx) {
    $.ajax({
      url: '/comments',
      data: 'photo_id=' + idx,
      success: function(commentJson) {
        $('#comments ul').html(templates.comments({ comments: commentJson }));
      }
    });
  }

  
});
  











