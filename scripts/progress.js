function buildProgressTable() {
  var path = window.location.pathname;
  var currentLoc = path.substr(path.indexOf("i.") + 2, 5).split(".");
  var currentChapter = chapters[ parseInt(currentLoc[0]) ];
  var currentPage = parseInt(currentLoc[1]) ;

  var progressTable = document.getElementById("progress-table");
  var titleBox = document.getElementById("title-box");
  titleBox.innerHTML = "Chapter " + currentChapter.chapterNum.toString() + "<br />" + currentChapter.title;

  var pagesInChapter = ( currentChapter.endPage - currentChapter.startPage ) + 1;

  var progressContent = "";
  var cursorHighlight;
  var gameHighlight;

  for (var i = 0; i < pagesInChapter; i++) {

    gameHighlight   = currentChapter.games.indexOf(i) !== -1 ? " game" : "" ;
    cursorHighlight = currentPage === i ? " cursor" : "" ;

    progressContent += "<tr><td class=\"chapter-cell" + gameHighlight + cursorHighlight + "\">";
    progressContent += linkToPage( currentChapter.chapterNum, i + currentChapter.startPage ) + "</td></tr>";
  };

  progressTable.innerHTML = progressContent;
}

function linkToPage(chapter, page) {  return "<a href=\"i." + chapter.pad() + "." + page.pad() + ".html\">" + page + "</a>"; }

Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {s = "0" + s;}
  return s;
}

function progressScroll(){
  var vPosition = window.pageYOffset,
    contentHeight = 1200;
  var progressObj = document.getElementById("progress-wrapper");
  if(vPosition < contentHeight) {
    progressObj.style.marginTop = vPosition + 50 + 'px';
  }
}

buildProgressTable();

window.requestAnimationFrame = window.requestAnimationFrame
 || window.mozRequestAnimationFrame
 || window.webkitRequestAnimationFrame
 || window.msRequestAnimationFrame
 || function(f){setTimeout(f, 1000/60)};

window.addEventListener('scroll', function(){
  if (typeof progressScroll === 'function') {
    requestAnimationFrame(progressScroll);
  }
}, false)
