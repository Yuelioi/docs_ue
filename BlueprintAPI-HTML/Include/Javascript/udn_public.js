function sectionOnClick(n,t){$("#"+t).is(":visible")?($("#"+t).hide(),$(n).removeClass("expanded"),$(n).addClass("expandable")):($("#"+t).show(),$(n).removeClass("expandable"),$(n).addClass("expanded"))}function hierarchyOnClick(n){var i=document.getElementById(n+"_button"),t=document.getElementById(n);t.className=="hierarchy-table-collapsed"?(i.className="hierarchy-button-expanded",t.className="hierarchy-table"):(i.className="hierarchy-button-collapsed",t.className="hierarchy-table-collapsed")}function toggleAnimImage(n){var i=document.getElementById(n+"_still"),t=document.getElementById(n+"_anim");t.style.display=="none"?(i.style.display="none",t.style.display="block"):(i.style.display="block",t.style.display="none")}function ToggleTab(n){n=="windows"?($(".tab.windows").addClass("active_tab"),$(".tab.mac").removeClass("active_tab"),$(".tab.linux").removeClass("active_tab"),setTimeout(function(){$(".tab_content.windows").addClass("active_tab_content").hide().delay(1).show()},1),$(".tab_content.mac").hide().removeClass("active_tab_content"),$(".tab_content.linux").hide().removeClass("active_tab_content")):n=="mac"?($(".tab.mac").addClass("active_tab"),$(".tab.windows").removeClass("active_tab"),$(".tab.linux").removeClass("active_tab"),setTimeout(function(){$(".tab_content.mac").addClass("active_tab_content").hide().delay(1).show()},1),$(".tab_content.windows").hide().removeClass("active_tab_content"),$(".tab_content.linux").hide().removeClass("active_tab_content")):n=="linux"&&($(".tab.linux").addClass("active_tab"),$(".tab.mac").removeClass("active_tab"),$(".tab.windows").removeClass("active_tab"),$(".tab_content.linux").hide().delay(1).show().addClass("active_tab_content"),$(".tab_content.mac").hide().removeClass("active_tab_content"),$(".tab_content.windows").hide().removeClass("active_tab_content"))}function ToggleButton(n,t){$(".button").each(function(){$(this).hasClass(n)&&$(this).hasClass(t)?$(this).addClass("active_button"):$(this).hasClass(n)&&$(this).removeClass("active_button")});$(".button_content").each(function(){$(this).hasClass(n)&&$(this).hasClass(t)?setTimeout(function(){$(".button_content."+t).addClass("active_button_content").hide().delay(1).show()},1):$(this).hasClass(n)&&$(this).hide().removeClass("active_button_content")})}function createCookie(n,t,i){var r,u;i?(r=new Date,r.setTime(r.getTime()+i*864e5),u="; expires="+r.toGMTString()):u="";document.cookie=n+"="+t+u+"; path=/"}function readCookie(n){for(var t,r=n+"=",u=document.cookie.split(";"),i=0;i<u.length;i++){for(t=u[i];t.charAt(0)==" ";)t=t.substring(1,t.length);if(t.indexOf(r)==0)return t.substring(r.length,t.length)}return null}function eraseCookie(n){createCookie(n,"",-1)}function setSelector(n,t){eraseCookie("doc_"+n+"_Selector");createCookie("doc_"+n+"_Selector",t,30);ToggleButton(n,t)}function getSelector(n){var t=readCookie("doc_"+n+"_Selector");ToggleButton(n,t==null?defaultSelectors[n]:t)}var bDoIndents=!1,level=0,defaultSelectors;$(document).ready(function(){function t(n){$(n).removeClass("expandable");$(n).addClass("expanded");$(n).parent().siblings(".content").show();$(n).parent().click(function(){i(n)})}function i(n){$(n).removeClass("expanded");$(n).addClass("expandable");$(n).parent().siblings(".content").hide();$(n).parent().click(function(){t(n)})}function f(){}var u;$(".non-localized a:first-child img:first-child + img").each(function(){$(this).css("display","none")});$(".class_icons img").each(function(){var n=$(this).attr("src");$(this).attr("src").indexOf("Shared/Icons/Source")!=-1&&$(this).replaceWith('<div class="class_icon">'+$(this).clone().wrap("<p>").parent().html()+"<\/div>")});$("html").click(function(){$("#sidebar").hide()});$("#jumplink").click(function(n){n.stopPropagation()});$("#sidebar").click(function(n){n.stopPropagation()});getSelector("OS");getSelector("DCC");u=["Learn More","View Now","View More","Visit Page","Show Me More","See Details"];$(".slider").each(function(){var n=$(this).attr("class"),i,r,t;n=n.substring(n.indexOf(" ")+1);i=n.substring(0,n.indexOf(" "));n=n.substring(n.indexOf(" ")+1);r=n.substring(0,n.indexOf(" "));n=n.substring(n.indexOf(" ")+1);t=n;$(this).attr({"class":t+"_slider"});$("p",$(this).prev()).html($("p > img:first-child",$(this).next().next()));$(this).slider({value:1,min:1,max:i,step:1,slide:function(n,i){var u=$("."+t+">p>img").attr("src");u=u.replace(/\\/g,"/");u=u.substring(0,u.lastIndexOf("/")+1);$("."+t+">p>img").attr({src:u+t+"_"+i.value+"."+r})}})});$(".tooltip").each(function(){var r=$(this).attr("class"),t=$(this).attr("class").split(" "),n,i;t[1]!=""&&(n=t[1],i=$("#"+n+"_tipcontent").html(),$(this).qtip({content:i,position:{my:"top left",at:"bottom left",target:$("."+n+"> .role")}}))});$(".topiclinktip").each(function(){var r=$(this).attr("class"),n=$(this).attr("class").split(" "),t,i;n[1]!=""&&(t=n[1],i=$("#"+t+"_tipcontent").html(),$(this).qtip({content:i,position:{my:"left top",at:"right middle"}}))});$("A").each(function(){$(this).attr("title")==""||$(this).hasClass("topiclinktip")||$(this).qtip({content:{attr:"title"},position:{my:"left top",at:"right middle"}})});f();$(".lightbox a").fancybox({overlayColor:"#777",overlayOpacity:.75,titlePosition:"over",padding:0,margin:0,centerOnScroll:!0});$(".expandable").each(function(){$(this).parent().click(function(){t($(this).children(".title"))})});$(".expanded").each(function(){$(this).parent().click(function(){i($(this).children(".title"))})});bDoIndents&&$("#maincol").children().each(function(){var n=$(this).get(0).tagName;n=="H1"?level=1:n=="H2"?level=2:n=="H3"?(level=3,$(this).css("margin-left","13px")):n=="H4"?(level=4,$(this).css("margin-left","28px")):n=="H5"?(level=5,$(this).css("margin-left","43px")):n=="H6"?(level=6,$(this).css("margin-left","58px")):level>2&&$(this).css("margin-left",(level-2)*15+"px")});var n=".crumbs",r=$(n).offset(),e=!1;$(window).scroll(function(){if(e&&r){var t=$(window).scrollTop(),i=r.top-t;i<0?($(n).css("position","absolute"),$(n).css("top",t+2),$("#crumbs_bg").css("opacity",.5),$("#crumbs_bg").height($(n).outerHeight()+6)):($(n).css("position","relative"),$(n).css("top",2),$("#crumbs_bg").css("opacity",0));$(n).width(1172)}})});defaultSelectors={DCC:"maya",OS:"windows"}