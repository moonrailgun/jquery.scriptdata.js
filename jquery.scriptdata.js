// author: moonrailgun
(function($) {
  $.extend({
    script: {
      parseQueryString: function(qs) {
        var result = {};
        var temp = qs.split('&');
        for (var i = 0; i < temp.length; i++) {
          var temp2 = temp[i].split('=');
          result[temp2[0]] = temp2[1];
        }
        return result;
      },
      getData: function(attrName) {
        var scripts = document.getElementsByTagName('script');
        var currentScript = scripts[scripts.length - 1];
        if (!attrName) {
          attrName = 'data'
        }
        if($(currentScript).attr(attrName) === undefined) {
          currentScript = $('script['+attrName+']').last();
        }

        var attr = $(currentScript).attr(attrName);
        if(!attr) {
          return;
        }
        var obj;
        try {
          obj = JSON.parse(attr);
        } catch (e) {
          obj = this.parseQueryString(attr);
        } finally {
          return obj;
        }
      }
    }
  });
})(jQuery);
