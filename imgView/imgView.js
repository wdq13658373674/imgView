/**
 大图移动插件
 */
(function($) {
    jQuery.fn.imageView = function(settings) {
        //Find Elements
        var $container = this;
        var $img = $('img', $container);
        if ($container.length == 0) return false;
        $img.data('mousedown', false);

        // Settings
        settings = jQuery.extend({
            width: 500,
            height: 400,
            cursor:'move',
            imgwidth:$img.width(),
            imgheight:$img.height()
        },settings);

        // CSS
        $container.width(settings['width']);
        $container.height(settings['height']);
        $container.css('overflow', 'hidden');
        $container.css('position', 'relative');

        $img.css('position', 'absolute');

        //img compelete
        if(settings['imgwidth'] && settings['imgheight']){
            loaded();
        }

        function loaded(){

            //img init
            $img.css('left', settings['width'] / 2 - settings['imgwidth'] / 2);
            $img.css('top', settings['height'] / 2 - settings['imgheight'] / 2);

            // Events
            $img.mousedown(function (event) {
                $container.css('cursor', settings.cursor);
                $img.data('mousedown', true);
                settings['pageX'] = event.pageX;
                settings['pageY'] = event.pageY;
                return false;
            });

            $(document).mouseup(function () {
                $container.css('cursor', 'default');
                $img.data('mousedown', false);
                return false;
            });

            $(document).mousemove(function (event) {
                if ($img.data('mousedown')) {
                    var dx = event.pageX - settings['pageX'];
                    var dy = event.pageY - settings['pageY'];
                    if ((dx == 0) && (dy == 0)) {
                        return false;
                    }

                    var newX = parseInt($img.css('left')) + dx;
                    if (newX > 0) newX = 0;
                    if (newX < settings['width'] - settings['imgwidth'])
                        newX = settings['width'] - settings['imgwidth'] + 1;
                    var newY = parseInt($img.css('top')) + dy;
                    if (newY > 0) newY = 0;
                    if (newY < settings['height'] - settings['imgheight'])
                        newY = settings['height'] - settings['imgheight'] + 1;

                    if (settings['width'] >= settings['imgwidth']) {
                        newX = settings['width'] / 2 - settings['imgwidth'] / 2;
                    }
                    if (settings['height'] >= settings['imgheight']) {
                        newY = settings['height'] / 2 - settings['imgheight'] / 2;
                    }

                    $img.css('left', newX + 'px');
                    $img.css('top', newY + 'px');

                    settings['pageX'] = event.pageX;
                    settings['pageY'] = event.pageY;
                }
                return false;
            });
        }
    };
})(jQuery);
