!function(t){function e(a){if(n[a])return n[a].exports;var i=n[a]={exports:{},id:a,loaded:!1};return t[a].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e){function n(t){var e="",n="",a=t.data.list;return a.map(function(t,a){if(t.replyUrl)var i='<button data-url="'+t.replyUrl+'">更多评论...</button>';if(0!==t.replyList.length){var r=o(t.replyList);n='<ul class="replyList">'+r+"</ul>"+i}e+='<section data-pid="'+t.pid+'">\t                         <img src="'+t.ava+'">\t                         <span>'+t.author+'</span>\t                         <span class="floor">'+t.floor+"</span>\t                         <time>"+t.time+"</time>\t                         <p>"+t.comment+"</p>\t                         "+n+"\t                     </section>"}),e}function a(t){var e="",a=t.data.list;0!==a.length?e=n(t):h.attr("placeholder","暂无评论 快抢沙发"),$("#reply").fadeIn(),b.append(e),b.on("click","section",function(t){"button"==t.target.nodeName.toLowerCase()?i.call(this):r.call(this)})}function i(){var t=this,e=this.querySelector("button"),n=e.getAttribute("data-url"),a=p(n);a.then(function(n){var a=o(n.list);$(t).find(".replyList").append(a),e.setAttribute("data-url",n.replyUrl)},function(t){e.textContent="没有更多评论咯~~"})}function o(t){var e="";return t.map(function(t,n){e+='<li data-pid="'+t.pid+'">\t                   <section>\t                       <img src="'+t.ava+'">\t                       <span><em>'+t.author+"</em> 回复 "+t.replyName+"</span>\t                       <p>"+t.comment+"</p>\t                   </section>\t               </li>"}),e}function r(){f=!1,c=$(this);var t=c.find("span")[0];u=0!==$(t).find("em").length?$(t).find("em").text().trim():$(t).text().trim(),d="回复: "+u+" ",h.focus().val(d),h.on("keydown",function(t){8==t.keyCode&&$(this).val()==d&&(f=!0,h.val(""))}),s()}function s(){var t=h.val().trim(),e=h.val().replace(new RegExp(d,"gi"),"");if(""!=t&&""!=e){if(0!==b.find("section").length)if(f){var n='<section>\t                             <img src="cache/ava.png">\t                             <span>king</span>\t                             <span class="floor">55楼</span>\t                             <time>'+Date.parse(new Date)+"</time>\t                             <p>"+t+"</p>\t                         </section>";b.prepend(n),l(y,500)}else{if(c.parent().parent().hasClass("replyList")){var a='<li>\t                                <section>\t                                    <img src="cache/ava.png">\t                                    <span><em>king</em> 回复 '+u+"</span>\t                                    <p>"+e+"</p>\t                                </section>\t                            </li>";c.parent().parent().append(a)}else if(c.hasClass("replyList")||0!==c.find(".replyList").length){if(0!==c.find(".replyList").length){var a='<li>\t                                <section>\t                                    <img src="cache/ava.png">\t                                    <span><em>king</em> 回复 '+u+"</span>\t                                    <p>"+e+"</p>\t                                </section>\t                            </li>";c.find(".replyList").append(a)}}else{var i='<ul class="replyList">\t                                     <li>\t                                         <section>\t                                             <img src="cache/ava.png">\t                                             <span><em>king</em> 回复 '+u+"</span>\t                                             <p>"+e+"</p>\t                                         </div>\t                                         </section>\t                                     </li>\t                                 </ul>";c.append(i)}f=!0}else{var o='<section>\t                     <img src="cache/ava.png">\t                     <span>king</span>\t                     <time>1分钟前</time>\t                     <p>'+t+"</p>\t                 </section>";b.append(o),l($(document).height(),500),h.attr("placeholder","我也要评论")}h.val(""),h.blur(),w.text(+w.text()+1)}}function p(t,e){var n=null==e?"GET":"POST",a=new XMLHttpRequest;return new Promise(function(i,o){a.open(n,t,!0),a.responseType="json",a.onload=function(){200===a.status?i(a.response):o(a.status)},a.send(e)})}function l(t,e){var n=parseInt(document.body.scrollTop),a=0,i=15;t=parseInt(t),e/=i;var o=setInterval(function(){a++,document.body.scrollTop=(t-n)/e*a+n,a>=e&&clearInterval(o)},i)}var c,d,u,f=!0,m=!0,h=$("#reply").find("input"),v=$("section").data("url"),y=$("section").height(),w=$("#comment"),b=$("#replyArea");g=parseInt(getComputedStyle(document.querySelector("section")).getPropertyValue("height")),$("#praise").on("tap",function(){if(!$(this).hasClass("praise")){var t=$("#heart");$(this).addClass("praise").text(+$(this).text()+1),t.text(+t.text()+1)}}),$("#rep").on("tap",s),h.on("keydown",function(t){13==t.keyCode&&s()}),window.addEventListener("touchmove",function(){if(document.body.scrollTop>=g/1.5&&m){m=!1;var t=p(v);t.then(function(t){a(t),v&&(b.dropload({scrollArea:window,loadDownFn:function(t){if(v){var e=p(v);e.then(function(e){var a=n(e);$(".dropload-down").before(a),v=e.data.url,t.resetload()},function(t){alert(t)})}else t.noData(),t.lock(),t.resetload()}}),v=t.data.url)},function(t){alert(t)}),b.fadeIn()}},!1);var x=$(".pay"),k=$(".mask"),L=x.height();x.hide(),$("#payFor").on("tap",function(){var t=window.screen.height*dpr-L+$(window).scrollTop()-120*dpr;x.fadeIn(),k.css({width:document.body.clientWidth,height:document.body.clientHeight}),k.fadeIn(),x.css("position","absolute"),x.animate({top:t})}),x.find("em").on("tap",function(){x.fadeOut(),k.fadeOut()}),x.find("input").on("blur",function(){var t=window.screen.height*dpr-L+$(window).scrollTop()-120*dpr;x.animate({top:t})}),$(".mask,.pay").on("touchmove",function(){return!1})}]);