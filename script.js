var x_award = 0;
var x_about = 0;
var sp = 25;
var divide = 1.5;

window.onload = function() {
  document.getElementById('award_scr_l').onclick = function() {
    var con_outer = document.getElementById('award_scr_c');
    var con_inner = document.getElementById('award_scr_in');
    var x_scrollable = con_inner.clientWidth - con_outer.clientWidth;
    
    x_award -= 240;
    if( x_award < -x_scrollable ){ x_award = -x_scrollable; }
    setTimeout( "scroll_award()", sp );
  }
  
  document.getElementById('award_scr_r').onclick = function() {
    x_award += 240;
    if( x_award > 0 ) x_award = 0;
    setTimeout( "scroll_award()", sp );
  }
  
  document.getElementById('about_scr_l').onclick = function() {
    var con_outer = document.getElementById('about_scr_c');
    var con_inner = document.getElementById('about_scr_in');
    var x_scrollable = con_inner.clientWidth - con_outer.clientWidth;
    
    x_about -= 320;
    if( x_about < -x_scrollable ){ x_about = -x_scrollable; }
    setTimeout( "scroll_about()", sp );
  }
  
  document.getElementById('about_scr_r').onclick = function() {
    x_about += 320;
    if( x_about > 0 ) x_about = 0;
    setTimeout( "scroll_about()", sp );
  }
};

function scroll_award() {
  var x_award_div = document.getElementById('award_scr_in').offsetLeft;
  
  if( x_award_div == x_award ) return;
  
  if( x_award_div != x_award ){
    var dif = x_award - x_award_div;
    dif /= divide;
    if(Math.abs(dif)<1){
      document.getElementById('award_scr_in').style.left = x_award+'px';
    } else {
      document.getElementById('award_scr_in').style.left = (x_award-dif)+'px';
    }
  }
  
  setTimeout( "scroll_award()", sp );
}

function scroll_about() {
  var x_about_div = document.getElementById('about_scr_in').offsetLeft;
  
  if(x_about_div == x_about ) return;
  
  if( x_about_div != x_about ){
    var dif = x_about - x_about_div;
    dif /= divide;
    if(Math.abs(dif)<1){
      document.getElementById('about_scr_in').style.left = x_about+'px';
    } else {
      document.getElementById('about_scr_in').style.left = (x_about-dif)+'px';
    }
  }
  
  setTimeout( "scroll_about()", sp );
}



