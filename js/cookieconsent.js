/*
    Cookie consent
*/

var COOKIE_NAME = 'COOKIE_CONSENT';

$(document).ready(function() {

    if (document.cookie.indexOf(COOKIE_NAME) !== -1) {
        return;
    }

    var ccBanner = $('<div></div>');
    var ccMsg = $('<div></div>');
    var ccBtns = $('<div></div>');
    var ccBtnOne = $('<button></button>');
    var ccBtnTwo = $('<a></a>');

    ccBanner.css({
        padding: '20px',
        background: '#FFFDE7',
        color: '#616161',
        textAlign: 'center'
    });

    ccBtns.css({
        marginTop: '15px'
    });

    ccBtnOne.css({
        display: 'inline-block',
        verticalAlign: 'middle',
        margin: '0 5px',
        padding: '6px 12px',
        textAlign: 'center',
        fontSize: '14px',
        border: '1px solid #209333',
        boxShadow: 'inset 0 1px 0 #72c880',
        borderRadius: '3px',
        color: 'white',
        background: '#28b840',
        textDecoration: 'none'
    });

    ccBtnTwo.css({
        display: 'inline-block',
        verticalAlign: 'middle',
        margin: '0 5px',
        padding: '6px 12px',
        textAlign: 'center',
        fontSize: '14px',
        border: '1px solid #a10d0f',
        boxShadow: 'inset 0 1px 0 #cf6062',
        borderRadius: '3px',
        color: 'white',
        background: '#c91013',
        textDecoration: 'none'
    });

    ccMsg.html('This site uses cookies. By continuing to browse the site you are agreeing to our use of cookies.');
    ccBtnOne.html('I accept cookies');
    ccBtnTwo.html('Tell me more');
    ccBtnTwo.attr('href', 'http://example.com');

    ccBanner.append(ccMsg).append(ccBtns);
    ccBtns.append(ccBtnOne).append(ccBtnTwo);
    $('body').prepend(ccBanner);

    ccBtnOne.click(function(e) {
        e.preventDefault();
        document.cookie = COOKIE_NAME + '=true;max-age=' + (60*60*24*365); // 60*60*24*365 for a year
        ccBanner.fadeOut('slow');
    });
});
