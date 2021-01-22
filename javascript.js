//Load Character Info
var charCount = 0;
var quoteCount = 0;

function loadInfo() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://breakingbadapi.com/api/characters', true);

  xhr.onload = function() {
    if(this.status == 200) {
      var charInfo = JSON.parse(this.responseText);
      renderInfo(charInfo, charCount);
    }
  }
  xhr.send();
}

function renderInfo(data, x) {
  document.getElementById('name').innerHTML = data[x].name;
  document.getElementById('charImg').innerHTML = '<img src="'+ data[x].img +'"/>'

  var para = 'Born: ' + data[x].birthday + '<br>Occupation: ';
  for(var i=0; i < data[x].occupation.length; i++) {
    if(i==0) {
      para += data[x].occupation[i];
    } else {
      para += ", " + data[x].occupation[i];
    }
  }
  para += '<br>Nickname: ' + data[x].nickname + '<br>Apperance: Season ';
  for(var i=0; i < data[x].appearance.length; i++) {
    if(i==0) {
      para += data[x].appearance[i]
    } else {
      para += ", " + data[x].appearance[i];
    }
  }
  document.getElementById('info').innerHTML = para;

  charCount++;
  if(charCount == 117) { 
    charCount = 0;
    document.getElementById('charBtn').innerHTML = "Back to Start";
  }
}

document.getElementById('charBtn').addEventListener('click', loadInfo);

//Load Quote Info
function loadQuote() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://breakingbadapi.com/api/quotes', true);

  xhr.onload = function() {
    if(this.status == 200) {
      var quoteInfo = JSON.parse(this.responseText);
      renderQuote(quoteInfo, quoteCount);
    }
  }
  xhr.send();
}

function renderQuote(data, x) {
  document.getElementById('quoteNum').innerHTML = 'Quote ' + data[x].quote_id;
  document.getElementById('quote').innerHTML = '<q>' + data[x].quote + '</q><br><blockquote><cite>' + data[x].author + '</cite><blockquote>';

  quoteCount++;
  if(quoteCount == 102) { 
    quoteCount = 0;
    document.getElementById('quoteBtn').innerHTML = "Back to Start";
  }
}
document.getElementById('quoteBtn').addEventListener('click', loadQuote);