$.fn.selectRange = function (options) {

    var $settings = $.extend({min: 0, max: 20}, options),
        $options = '',
        $val = this.val();

    this.empty();
    for(i = $settings.min; i <= $settings.max; i++) {
        $options += '<oprion value="' + i + '">' + i + '</option>';
    }
    return this.html($options).val($val);
};
