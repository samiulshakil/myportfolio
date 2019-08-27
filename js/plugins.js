// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

//barfiller plugin

var skillsTopOffset = $('#skill').offset().top;
$(window).scroll(function(){
    if(window.pageYOffset > skillsTopOffset - $(window).height()+300){
        $('#bar1').barfiller({barColor: '#2f2f2f'});
        $('#bar2').barfiller({barColor: '#2f2f2f'});
        $('#bar3').barfiller({ barColor: '#2f2f2f' });
        $('#bar4').barfiller({ barColor: '#2f2f2f',});
        $('#bar5').barfiller({ barColor: '#2f2f2f', });
        $('#bar6').barfiller({ barColor: '#2f2f2f', });
        $('#bar7').barfiller({ barColor: '#2f2f2f', });
        $('#bar8').barfiller({ barColor: '#2f2f2f', });
    }
});

//timeline slider 

        $(document).ready(function(){

            var events = [
                {
                    date: '01-01-2019',
                    content: '<i class="fas fa-university"></i></i>Daffodil Internation University<small>Daffodil International University is a private university located in Dhanmondi, Dhaka, Bangladesh. It was established on 24 January 2002 under the Private University Act By IUBAT, 1992. Wikipedia</small>'
                },
                {
                    date: '01-04-2019',
                    content: '<i class="fas fa-desktop"></i>Web App Develop PHP<small>BASIS Institute of Technology and Management.IT Sector in Bangladesh by creating a pool of qualified IT professionals and quality certified IT companies.</small>'
                },
                {
                    date: '02-02-2018',
                    content: '<i class="fas fa-desktop"></i>Professional Web Development<small>Creative IT is an institution where empowering the community for excellent standard of learning is what we desire. We endeavor for the continuous improvement </small>'
                },
                {
                    date: '01-01-2018',
                    content: '<i class="fas fa-graduation-cap"></i>Comilla Polytechnic Institute<small>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</small>'
                },
            ];

            $('#my-timeline').roadmap(events, {
                eventsPerSlide: 5,
                slide: 1,
                orientation: 'vertical',

            });
        });



