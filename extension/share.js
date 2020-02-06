var b = document.body;
var h = document.querySelector('.pagehead.repohead .pagehead-actions');
var p_d = document.querySelector('.repository-description');

var d = document.querySelector('.text-gray-dark .mr-2')
var s =document.querySelectorAll('a.social-count.js-social-count')
var t = document.querySelectorAll('a.topic-tag.topic-tag-link')

var topics = []

String.prototype.replaceAll = function(str1, str2, ignore) 
{
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
}

var capitalizeFirstLetter = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

var camelCaseHashtag = function(string) {
  string = string.replaceAll('-', ' ').split(' ');
  for (tp = 0; tp < string.length; tp++) {
    string[tp] = capitalizeFirstLetter(string[tp]).replace(/[\n\r]+/g, '');
  }
  var topicStr = '%23'+string.join('')
  return topicStr
}

var unDuplicateArray = function(array) {
  var clean = []
  var encountered = {}
  for (i = 0; i < array.length; i++) {
    if (encountered[array[i]] == true) {
      // Do not add duplicate.
    } else {
      encountered[array[i]] = true
      clean.push(array[i])
    }
  }
  return clean
}

var uri = document.location.pathname;
var uriParts = uri.split('/');

var username = camelCaseHashtag(uriParts[1])
topics.push(username)

var name = camelCaseHashtag(uriParts[2])
topics.push(name)

for (i = 0; i < t.length; i++) {
  var topic = camelCaseHashtag(t[i].text)
  topics.push(topic)
}

topics = unDuplicateArray(topics)

console.log(topics)
console.log(s)

var repoUrl = 'http://github.com'+document.location.pathname;

var d = '%20';
if(p_d){
  var d = p_d.innerText + '%20';
  var d = '%20' + d;
}

var title = document.title.split(':');
var stars = s[1].text
stars = '⭐%20'+stars.trim()

var tweet = title[1] + "%0D" + repoUrl.replace(/[\n\r]+/g, '') + "%20"+ stars +"%0D%0D" + topics.join(' ');

if (tweet.length > 280) {
  tweet = tweet.substr(0, 280)
}

var sh_link_tt = "https://twitter.com/intent/tweet?text=" + tweet;

h.innerHTML += '<li><a href="'+sh_link_tt+'" target="_blank" class="btn btn-sm btn-with-count" style="border-top-right-radius:3px;border-bottom-right-radius:3px;height: 28px;" title="Share this repo on Twitter" aria-label="Share ' + document.title + ' on Twitter">' +
'<span class="octicon" style="margin-left:-2px;"><?xml version="1.0" encoding="utf-8"?><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 32 32"><path fill="#55ACEE" d="M26.667 9.384c-0.785 0.348-1.628 0.583-2.514 0.689 0.904-0.542 1.598-1.399 1.924-2.421-0.846 0.502-1.782 0.866-2.779 1.062-0.798-0.851-1.936-1.382-3.195-1.382-2.417 0-4.377 1.96-4.377 4.377 0 0.343 0.039 0.677 0.113 0.997-3.638-0.182-6.863-1.925-9.021-4.573-0.377 0.646-0.593 1.398-0.593 2.2 0 1.518 0.773 2.858 1.947 3.643-0.717-0.023-1.392-0.22-1.982-0.547-0 0.018-0 0.037-0 0.055 0 2.121 1.509 3.889 3.511 4.292-0.367 0.1-0.754 0.154-1.153 0.154-0.282 0-0.556-0.028-0.823-0.078 0.557 1.739 2.173 3.004 4.089 3.039-1.498 1.174-3.385 1.874-5.436 1.874-0.353 0-0.702-0.021-1.044-0.061 1.937 1.242 4.238 1.967 6.709 1.967 8.050 0 12.453-6.669 12.453-12.453 0-0.19-0.004-0.378-0.013-0.566 0.855-0.617 1.597-1.388 2.184-2.265z"></path></svg></span> Share </a>  </li>';


