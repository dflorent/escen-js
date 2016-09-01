/*
    Cookie consent
*/

document.addEventListener('DOMContentLoaded', function() {

    var COOKIE_NAME = 'COOKIE_CONSENT';

    // Stop execution if cookie is set
    if (document.cookie.indexOf(COOKIE_NAME) !== -1) {
        return;
    }

    // Elements
    // Note: cc for Cookie Consent
    var ccBanner = document.createElement('div');
    var ccMsg = document.createElement('div');
    var ccBtns = document.createElement('div');
    var ccBtnOne = document.createElement('button');
    var ccBtnTwo = document.createElement('a');

    // Styles
    // or document.createElement('link') with a CSS file
    ccBanner.style.padding = '20px';
    ccBanner.style.background = '#FFFDE7';
    ccBanner.style.color = '#616161';
    ccBanner.style.textAlign = 'center';

    ccBtns.style.marginTop = '15px';

    ccBtnOne.style.display = 'inline-block';
    ccBtnOne.style.verticalAlign = 'middle',
    ccBtnOne.style.lineHeight = '32px';
    ccBtnOne.style.margin = '0 5px';
    ccBtnOne.style.padding = '0 18px';
    ccBtnOne.style.textAlign = 'center';
    ccBtnOne.style.fontSize = '14px';
    ccBtnOne.style.border = '1px solid #209333';
    ccBtnOne.style.boxShadow = 'inset 0 1px 0 #72c880';
    ccBtnOne.style.borderRadius = '3px';
    ccBtnOne.style.color = 'white';
    ccBtnOne.style.background = '#28b840';
    ccBtnOne.style.textDecoration = 'none';

    ccBtnTwo.style.display = 'inline-block';
    ccBtnTwo.style.verticalAlign = 'middle',
    ccBtnTwo.style.lineHeight = '32px';
    ccBtnTwo.style.margin = '0 5px';
    ccBtnTwo.style.padding = '0 18px';
    ccBtnTwo.style.textAlign = 'center';
    ccBtnTwo.style.fontSize = '14px';
    ccBtnTwo.style.border = '1px solid #a10d0f';
    ccBtnTwo.style.boxShadow = 'inset 0 1px 0 #cf6062';
    ccBtnTwo.style.borderRadius = '3px';
    ccBtnTwo.style.color = 'white';
    ccBtnTwo.style.background = '#c91013';
    ccBtnTwo.style.textDecoration = 'none';

    // Contents
    ccMsg.innerHTML = 'This site uses cookies. By continuing to browse the site you are agreeing to our use of cookies.';
    ccBtnOne.innerHTML = 'I accept cookies'; // or Continue
    ccBtnTwo.innerHTML = 'Tell me more'; // or Learn More
    ccBtnTwo.setAttribute('href', 'http://example.com');

    // Append the elements into the page
    ccBanner.appendChild(ccMsg);
    ccBanner.appendChild(ccBtns);
    ccBtns.appendChild(ccBtnOne);
    ccBtns.appendChild(ccBtnTwo);

    // document.body.innerHTML = ccBanner.outerHTML + document.body.innerHTML; or...
    document.body.insertBefore(ccBanner, document.body.firstChild);

    // Click
    ccBtnOne.addEventListener('click', function(e) {
        e.preventDefault();
        document.body.removeChild(ccBanner);
        document.cookie = COOKIE_NAME + '=true;max-age=' + (60*60*24*365); // 60*60*24*365 for a year
    });
});
