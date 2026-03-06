jQuery(document).ready(function(){  
// 点击链接时 判断是否是外链，如果是弹出提示框
$(document).undelegate("a")
$(document).delegate("a","click",function(event){
  var iCurrHerf = currHerf = $(this).attr('href')
  //需要过滤的指定链接
  var aFilterArr = ['wjw.sz.gov.cn','61.144.227.212']
  //,'^(?!www\.|[^\.]+?n\.)szjmxxw+?\.gov\.cn$'第一层通用过滤
  if(iCurrHerf.length < 7 || iCurrHerf.substr(0,1) == '.' || iCurrHerf.substr(0,10) == 'javascript' || iCurrHerf.substr(0,7) == 'void(0)' || iCurrHerf.substr(0,5) == 'index' || iCurrHerf.substr(0,1)== '/')return;
  //第二层定制化过滤
  for(var i=0; i<aFilterArr.length; i++){
    if(iCurrHerf.indexOf(aFilterArr[i])>=0)return;
  }
  //第三层外链判断
  if(iCurrHerf.indexOf("http://wjw.sz.gov.cn/szsjjzx")<0 && iCurrHerf.indexOf("wjw.sz.gov.cn/szsjjzx")){
    event.preventDefault();
    if(iCurrHerf.indexOf("mp.weixin.qq.com")>0 || window.location.href.indexOf("http://wjw.sz.gov.cn/jyzx")>=0){
      var iPs = '您访问的链接即将离开“银湾研究院”门户网站 是否继续？'
    }else{
      var iPs = '您访问的链接即将离开“深圳市健康委员会网站”门户网站 是否继续？'
    }
    // var iPs = iCurrHerf.indexOf("mp.weixin.qq.com")>0? '您访问的链接即将离开“银湾研究院”门户网站 是否继续？' : '您访问的链接即将离开“深圳市健康委员会网站”门户网站 是否继续？'
    $('body').append('<div class="otherlink-bg"></div><div class="otherlink-pop"><a href="javascript:;" class="closeBtn offBtn">×</a><h2>'+iPs+'</h2><p class="btns"><a href="javascript:;" class="closeBtn">放弃</a><a href="javascript:;" class="toOtherLink" tag="'+$(this).attr('href')+'">继续访问</a></p></div>')
      
    setTimeout(function(){
		$('.otherlink-bg').addClass('in');
		$('.otherlink-pop').addClass('in');
    },300)

    $('.otherlink-pop a.closeBtn').click(function(){
		$('.otherlink-bg').removeClass('in')
		$('.otherlink-pop').removeClass('in');
        setTimeout(function(){
          $('.otherlink-bg').remove();
          $('.otherlink-pop').remove();
        },300)
    })
    $('.otherlink-pop a.toOtherLink').click(function(){
      $('.otherlink-bg').remove();
      $('.otherlink-pop').remove();
      window.open($(this).attr('tag'))
    })
	console.log("iCurrHerf.substr(0,3)");
  }
})
// 点击链接时 判断是否是外链，如果是弹出提示框
            });  
