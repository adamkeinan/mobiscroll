(function () {

    var ms =  mobiscroll,
        $ = ms.$;

    ms.themes.frame.jqm = {
        jqmBorder: 'a',
        jqmHeader: 'b',
        jqmWheel: 'd',
        jqmLine: 'b',
        jqmClickPick: 'c',
        jqmSet: 'b',
        jqmCancel: 'c',
        disabledClass: 'ui-disabled',
        activeClass: 'ui-btn-active',
        activeTabInnerClass: 'ui-btn-active',
        btnCalPrevClass: '',
        btnCalNextClass: '',
        selectedLineHeight: true,
        selectedLineBorder: 1,
        onThemeLoad: function (lang, s) {
            var cal = s.jqmBody || 'c',
                txt = s.jqmEventText || 'b',
                bubble = s.jqmEventBubble || 'a';

            ver = $.mobile && $.mobile.version && $.mobile.version.match(/1\.4/);

            if (!s.jqmBody) {
                s.jqmBody = ver ? 'a' : 'c';
            }

            s.dayClass = 'ui-body-a ui-body-' + cal;
            s.innerDayClass = 'ui-state-default ui-btn ui-btn-up-' + cal;
            s.calendarClass = 'ui-body-a ui-body-' + cal;
            s.weekNrClass = 'ui-body-a ui-body-' + cal;
            s.eventTextClass = 'ui-btn-up-' + txt;
            s.eventBubbleClass = 'ui-body-' + bubble;
        },
        onEventBubbleShow: function (evd, evc) {
            $('.mbsc-cal-event-list', evc).attr('data-role', 'listview');
            evc.page().trigger('create');
        },
        onMarkupInserted: function (elm, inst) {
            var s = inst.settings;

            if (ver) {
                elm.addClass('mbsc-jqm14');
                $('.mbsc-np-btn, .dwwb, .mbsc-cal-sc-m-cell .mbsc-i', elm).addClass('ui-btn');
                $('.dwbc .dwb, .mbsc-dr', elm).addClass('ui-btn ui-mini ui-corner-all');
                $('.mbsc-cal-prev .mbsc-cal-btn-txt', elm).addClass('ui-btn ui-icon-arrow-l ui-btn-icon-notext ui-shadow ui-corner-all');
                $('.mbsc-cal-next .mbsc-cal-btn-txt', elm).addClass('ui-btn ui-icon-arrow-r ui-btn-icon-notext ui-shadow ui-corner-all');
            }

            $('.dw', elm).removeClass('dwbg').addClass('ui-selectmenu ui-overlay-shadow ui-corner-all ui-body-' + s.jqmBorder);
            $('.dwbc .dwb', elm).attr('data-role', 'button').attr('data-mini', 'true').attr('data-theme', s.jqmCancel);
            $('.dwb-s .dwb', elm).addClass('ui-btn-' + s.jqmSet).attr('data-theme', s.jqmSet);
            $('.dwwb', elm).attr('data-role', 'button').attr('data-theme', s.jqmClickPick);
            $('.dwv', elm).addClass('ui-header ui-bar-' + s.jqmHeader);
            $('.dwwr', elm).addClass('ui-corner-all ui-body-' + s.jqmBody);
            $('.dwwl', elm).addClass('ui-body-' + s.jqmWheel);
            $('.dwwol', elm).addClass('ui-body-' + s.jqmLine);
            $('.dwl', elm).addClass('ui-body-' + s.jqmBody);
            // Calendar base
            $('.mbsc-cal-tabs', elm).attr('data-role', 'navbar');
            $('.mbsc-cal-prev .mbsc-cal-btn-txt', elm).attr('data-role', 'button').attr('data-icon', 'arrow-l').attr('data-iconpos', 'notext');
            $('.mbsc-cal-next .mbsc-cal-btn-txt', elm).attr('data-role', 'button').attr('data-icon', 'arrow-r').attr('data-iconpos', 'notext');
            // Calendar events
            $('.mbsc-cal-events', elm).attr('data-role', 'page');
            // Rangepicker
            $('.mbsc-dr', elm).attr('data-role', 'button').attr('data-mini', 'true');
            // Numpad
            $('.mbsc-np-btn', elm).attr('data-role', 'button').attr('data-corners', 'false');
            elm.trigger('create');
        }
    };

})();
