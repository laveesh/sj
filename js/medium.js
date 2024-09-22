$(function() {
  var $content = $('#blog-content');
  var data = {
    rss_url: 'https://medium.com/feed/@sunil.jangir07'
  };

  $.get('https://api.rss2json.com/v1/api.json', data, function(response) {
    if (response.status == 'ok') {
      const months = [
        'JAN',
        'FEB',
        'MAR',
        'APR',
        'MAY',
        'JUN',
        'JUL',
        'AUG',
        'SEP',
        'OCT',
        'NOV',
        'DEC'
      ];
      var output = '';
      for (var i = 0; i < 3; i++) {
        var item = response.items[i];
        output +=
          '<div class="col s12 m12 l4"><div class="card">';
        output += '<div class="card-content">';
        output += '<span class="card-title">';
        output += item.title;
        output += '</span><p>';
        var indexOfFirstPTag = item.description.indexOf('<p>');
        var indexOfLastAlpha =
          item.description.indexOf('</p>') > 100
            ? indexOfFirstPTag + 100
            : item.description.indexOf('</p>');

        output += item.description.substring(indexOfFirstPTag, indexOfLastAlpha);
        output += '...</p></div>';
        output += '<div class="card-action"><div class="badges">';

        for (var index = 0; index < 2; index++) {
          output +=
            '<span class="new badge red" data-badge-caption="">' +
            item.categories[index] +
            '</span>';
        }

        output += '</div><div class="date">';
        var pubDate = new Date(item.pubDate);
        output += months[pubDate.getMonth()] + ', ' + pubDate.getFullYear();
        output += '<a href="';
        output += item.link;
        output +=
          '" target="_blank">';
        output += '<i class="material-icons right">more_vert</i></a></div> <div class="clearfix"></div>';
        
        output += '</div></div></div>';
      }
      $content.html(output);
    }
  });
});
