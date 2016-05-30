$(document).ready(function() {

  function loadPageFromHash() {
    var hash = getHashOfWindow();
    var page;

    if(hash !== '') {
      if(pageExists(hash)) {
        page = hash;
      }
    }

    if(page){ navigateTo(page); }
  };

  $('.link').click(function(){
    switchPage(this);
    return false;
  });

  loadPageFromHash();

});

function getHashOfWindow() {
  return window.location.hash.substr(1);
}

function pageExists(pageName) {
  if(pageName) {
    for (var i = 0; i < pages.length; i++) {
      if(pageName === pages[i]) {
        return true;
      }
    }
    return findChapterByCode(pageName);
  } else {
    return false;
  }
}

function findChapterByCode(chapterCode) {
  var chapterNum;
  var pageNum;
  chapterNum = parseInt( chapterCode.substr(2, 4) );
  pageNum = parseInt( chapterCode.substr(chapterCode.length - 2, chapterCode.length) );

  return ( chapters[chapterNum] && chapters[chapterNum].endPage <= pageNum );
}

function switchPage(context) {
  var codeOfClicked = $(context).attr('href').substr(0,$(context).attr('href').length-4);

  hash = getHashOfWindow();
  if(hash !== codeOfClicked) {
    navigateTo(codeOfClicked);
  }

  scrollToTop();
};

function navigateTo(codeClicked) {
  window.location.hash = codeClicked;
  $('#footer-bar').hide();
  $('#content').fadeOut('slow', function() {
    $('#content').load("pages/" + codeClicked + ".php", function() {
      $('#content').fadeIn('slow');
      $('#footer-bar').fadeIn('slow');
    });
  });
};

function scrollToTop() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
};
