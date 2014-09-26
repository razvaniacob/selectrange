$.fn.selectRange = function (options) {

    var $settings = $.extend({min: 0, max: 20}, options),
        $options = '',
        $val = this.val();

    this.empty();
    for(i = $settings.min; i <= $settings.max; i++) {
        $options += '<option value="' + i + '"' + (i == $val ? ' selected="selected"' : '') + '>' + i + '</option>';
    }
    return this.html($options);
};
