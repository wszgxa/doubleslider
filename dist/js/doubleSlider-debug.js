(function(win, $) {
    if (typeof $ === 'undefined') {
        throw new Error('zepto.fullpage\'s script requires Zepto');
    }
    var doubleSlider = null;
    var d = {
        x1: null,
        x2: null,
        xm1: null,
        xm2: null,
        dis: 30, //默认x轴滑动距离30
        back: function() {
            alert('back函数没传入!');
        }
    };

    function DoubleSlider($this, option) {
        this.$this = $this;
        this.init.call(this, option);
    }
    $.extend(DoubleSlider.prototype, {
        init: function(option) {
            var o = $.extend(true, {}, d, option);
            var that = this;
            that.o = o;
            that.initEvent();
        },
        initEvent: function() {
            var that = this,
                targetElement = this.$this;
            targetElement.on('touchstart', function(e) {
                that.o.x1 = e.targetTouches[0].pageX;
                that.o.x2 = e.targetTouches[1] ? e.targetTouches[1].pageX : null;
            });
            targetElement.on('touchmove', function(e) {
                that.o.xm1 = e.targetTouches[0].pageX;
                that.o.xm2 = e.targetTouches[1] ? e.targetTouches[1].pageX : null;
                if (that.o.xm2 !== null) { // 判断是否是两个手指
                    var d = Math.abs(that.o.xm1 - that.o.x1) + Math.abs(that.o.x2 - that.o.xm2);
                    if (d > that.o.dis) {
                        that.o.back();
                    } else {
                        that.o.x2 = null;
                    }
                }
            });

        }
    });
    $.fn.doubleSlider = function(option) {
        if (!doubleSlider) {
            doubleSlider = new DoubleSlider($(this), option);
        }
        return this;
    };
    $.fn.doubleSlider.version = '0.0.1';
}(window, Zepto));
