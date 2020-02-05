var b = document.body;
var h = document.querySelector('.pagehead.repohead .pagehead-actions');
var p_d = document.querySelector('.repository-description');

var d = document.querySelector('.text-gray-dark .mr-2')
var s =document.querySelectorAll('a.social-count.js-social-count')
var t = document.querySelectorAll('a.topic-tag.topic-tag-link')

//#js-repo-pjax-container > div.pagehead.repohead.readability-menu.bg-gray-light.pb-0.pt-3.pb-0 > div > ul > li:nth-child(2) > div > form.starred.js-social-form > a
// #js-repo-pjax-container > div.container-lg.clearfix.new-discussion-timeline.px-3 > div > div.repository-topics-container.mt-2.mb-3.js-topics-list-container > div > a:nth-child(3)
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

var topics = []
for (i = 0; i < t.length; i++) {
  var topic = t[i].text
  topic = topic.replace('-', ' ').split(' ');
  for (tp = 0; tp < topic.length; tp++) {
    topic[tp] = capitalizeFirstLetter(topic[tp]).replace(/[\n\r]+/g, '');
  }
  topics.push('%23'+topic.join(''))
}

console.log(topics)
console.log(s)

var repoUrl = 'http://github.com'+document.location.pathname;

// var fbSDK = "<script> </script>";
// var initSdk = document.createElement('script');
// initSdk.innerHTML = "window.fbAsyncInit = function() { FB.init({ appId : '1510342319283371', xfbml : true, version : 'v2.5' }); }; (function(d, s, id){ var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) {return;} js = d.createElement(s); js.id = id; js.src = \"https://connect.facebook.net/en_US/sdk.js\"; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'facebook-jssdk'));";

var d = '%20';
if(p_d){
  var d = p_d.innerText + '%20';
  var d = '%20' + d;
}

var title = document.title.split(':');
var stars = s[1].text
stars = '⭐%20'+stars.trim()


var sh_link_tt = "https://twitter.com/intent/tweet?text=" + title[1] + "%0D" + repoUrl.replace(/[\n\r]+/g, '') + "%20"+ stars +"%0D%0D" + topics.join(' ');

h.innerHTML += '<li><a href="'+sh_link_tt+'" target="_blank" class="btn btn-sm btn-with-count" style="border-top-right-radius:3px;border-bottom-right-radius:3px;height: 28px;" title="Share this repo on Twitter" aria-label="Share ' + document.title + ' on Twitter">' +
'<span class="octicon" style="margin-left:-2px;"><?xml version="1.0" encoding="utf-8"?><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 32 32"><path fill="#55ACEE" d="M26.667 9.384c-0.785 0.348-1.628 0.583-2.514 0.689 0.904-0.542 1.598-1.399 1.924-2.421-0.846 0.502-1.782 0.866-2.779 1.062-0.798-0.851-1.936-1.382-3.195-1.382-2.417 0-4.377 1.96-4.377 4.377 0 0.343 0.039 0.677 0.113 0.997-3.638-0.182-6.863-1.925-9.021-4.573-0.377 0.646-0.593 1.398-0.593 2.2 0 1.518 0.773 2.858 1.947 3.643-0.717-0.023-1.392-0.22-1.982-0.547-0 0.018-0 0.037-0 0.055 0 2.121 1.509 3.889 3.511 4.292-0.367 0.1-0.754 0.154-1.153 0.154-0.282 0-0.556-0.028-0.823-0.078 0.557 1.739 2.173 3.004 4.089 3.039-1.498 1.174-3.385 1.874-5.436 1.874-0.353 0-0.702-0.021-1.044-0.061 1.937 1.242 4.238 1.967 6.709 1.967 8.050 0 12.453-6.669 12.453-12.453 0-0.19-0.004-0.378-0.013-0.566 0.855-0.617 1.597-1.388 2.184-2.265z"></path></svg></span> Share </a>  </li>';


