/**
 *	mateCard (HTML)
 *	Copyright © mateCard by beshleyua. All Rights Reserved.
 **/

$(function() {
  'use strict';

  var width = $(window).width();
  var height = $(window).height();

  /***
   **** Preloader
   ***/
  $(window).on('load', function() {
    $('.preloader .spinner').fadeOut(function() {
      $('.preloader').fadeOut();
      $('body').addClass('ready');
    });
  });

  /***
   **** Portfolio Filter
   ***/
  $('.filter').on('click', 'a', function() {
    var filter = $(this).attr('data-filter');

    $('.work-item').hide();
    $(filter).fadeIn();

    return false;
  });

  /***
   **** Initialize collapse button
   ***/
  $('.menu-btn').sideNav();
  if (width < 1080) {
    $('.side-nav').css({ transform: 'translateX(-100%)' });
  }

  /***
   **** SideNav Menu Scroll
   ***/
  if ($('#home-section').length) {
    $(window).on('scroll', function() {
      var scrollPos = $(window).scrollTop();
      $('.side-nav li > a').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr('href'));
        if (refElement.offset().top - 30 <= scrollPos) {
          $('.side-nav li').removeClass('active');
          currLink.closest('li').addClass('active');
        }
      });
    });
  }

  $('.scrollspy').scrollSpy({
    scrollOffset: 0
  });

  /***
   **** Validate contact form
   ***/
  /*
  $('#gform').validate({
    rules: {
      name: {
        required: true
      },
      message: {
        required: true
      },
      subject: {
        required: true
      },
      email: {
        required: true,
        email: true
      }
    },
    highlight: function(element) {
      $(element).addClass('invalid');
      $(element).removeClass('valid');
    },
    unhighlight: function(element) {
      $(element).removeClass('invalid');
      $(element).addClass('valid');
    },
    success: 'valid',
    submitHandler: function(form) {
      $.ajax({
        url: form.action,
        type: 'post',
        dataType: 'json',
        data: $('#gform').serialize(),
        beforeSend: function() {},
        complete: function() {},
        success: function(data) {
          $('#gform').fadeOut();
          $('.alert-success')
            .delay(1000)
            .fadeIn();
        }
      });
    }
  });
  */
  /***
   **** Validate comments form
   ***/
  $('#blog-form').validate({
    rules: {
      name: {
        required: true
      },
      message: {
        required: true
      },
      email: {
        required: true,
        email: true
      }
    },
    highlight: function(element) {
      $(element).addClass('invalid');
      $(element).removeClass('valid');
    },
    unhighlight: function(element) {
      $(element).removeClass('invalid');
      $(element).addClass('valid');
    },
    success: 'valid',
    submitHandler: function() {
      $('#blog-form').fadeOut();
      $('.alert-success')
        .delay(1000)
        .fadeIn();
    }
  });

  /***
   **** Portfolio magnific popup
   ***/
  $('.card.work-item .activator').magnificPopup({
    type: 'inline',
    overflowY: 'auto',
    closeBtnInside: true,
    mainClass: 'mfp-fade'
  });

  /***
   **** Gallery
   ***/
  $('.post-lightbox').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });
});

/***
 **** Here Map Options
 ***/
function initMap() {
  var platform = new H.service.Platform({
    app_id: 'g293Y9wAsc9LB5PAiTd4',
    app_code: '0PvAcfQ1xQIRA9DSZr88hw',
    useHTTPS: true
  });

  var maptypes = platform.createDefaultLayers();

  var map = new H.Map(document.getElementById('map'), maptypes.normal.map, {
    zoom: 9,
    center: { lng: 75.7873, lat: 26.9124 }
  });

  var icon = new H.map.Icon('images/marker.png'),
    coords = { lat: 26.9124, lng: 75.7873 },
    marker = new H.map.Marker(coords, { icon: icon });
  map.addObject(marker);
  map.setCenter(coords);

  var defaultLayers = platform.createDefaultLayers();

  var ui = H.ui.UI.createDefault(map, defaultLayers);
}
if ($('#map').length) {
  initMap();
}

var age = new Date(new Date() - new Date('1987-10-09')).getFullYear() - 1970;
$('#age').html(age + ' years');

$('#copyright-date').html(new Date().getFullYear());
