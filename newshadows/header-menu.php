<div class="header-select">
  <div  class="menuitem-container">
   <a class="menuitem link" href="news.php">
     <div class="menuitem-label" onmouseover="$('.submenu').fadeOut();">
       <p>Main</p>
     </div>
   </a>
  </div>

  <div class="menuitem-container">
    <a class="menuitem menuitem-with-submenu link" href="archive.php">
      <div class="menuitem-label read-hover" onmouseover="$('.submenu').fadeIn();">
        <p>Read</p>
      </div>
    </a>
  </div>

  <div class="submenu" style="display:none;">
    <ul class="submenu-view">

      <li class="menuitem-container submenu-item">
        <a class="menuitem link" href="i-00-01.php">
          <div class="menuitem-label">
            <p>First Page</p>
          </div>
        </a>
      </li>

      <li class="menuitem-container submenu-item">
        <a class="menuitem link" href="i-04-01.php">
          <div class="menuitem-label">
            <p>Latest Update</p>
          </div>
        </a>
      </li>

      <li class="menuitem-container submenu-item">
        <a class="menuitem link" href="archive.php">
          <div class="menuitem-label">
            <p>Archive</p>
          </div>
        </a>
      </li>

      <li class="menuitem-container submenu-item">
        <div class="menuitem link">
          <div class="menuitem-label">
            <p>Book 1: Mind</p>
          </div>
        </div>
      </li>

    </ul>
  </div>

  <div class="menuitem-container">
    <a class="menuitem link" href="about.php">
      <div class="menuitem-label" onmouseover="$('.submenu').fadeOut();">
        <p>About</p>
      </div>
    </a>
  </div>

  <div class="menuitem-container">
    <a class="menuitem" href="http://playerprophet.storenvy.com/">
      <div class="menuitem-label" onmouseover="$('.submenu').fadeOut();">
        <p>Shop</p>
      </div>
    </a>
  </div>
</div>

<script type="text/javascript">
  $('.link').click(function(){
    switchPage(this);
    return false;
  });
</script>
