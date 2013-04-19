
jQuery(function(){

jQuery('#collectionslide').carouFredSel({
					scroll: 1,
					prev: '.ars_left',
					next: '.ars_right',
					auto: false
});
jQuery('.collrel').mouseenter(function () {

jQuery(this).children('.ars_collTool').show();
});
jQuery('.collrel').mouseleave(function () {
jQuery(this).children('.ars_collTool').hide();
});

 $('.viewit').click(function ()
 {
 $(this).children('ul').slideToggle();
 });
 
});
jQuery(document).ready(function(){
	    
		$('.ars_CollMainbox').find('#img_div').mouseover(function ()
		{
		$('div.ars_popClose').hide();
			 if($(this).children('img').hasClass('dragimg'))
			 {
			 
			   $(this).children('div.ars_popClose').show();
			    
			 }
			 else
			 {
			  $(this).children('div.ars_popClose').hide();
			 }
		});
		$('#img_div').mouseleave(function ()
		{
		 
		 $(this).children('div.ars_popClose').hide();
		});
		$('#img_div .ars_popClose').live('click',function ()
		{
		    if(confirm('Are you sure you want to delete?')){
			$(this).parent('#img_div').children('input[type="hidden"]').val("");
			$(this).parent('#img_div').removeClass('draggedimage');
			$(this).parent('#img_div').find('img.dragimg,.ars_popClose').remove();
			
			}
		});
	    /* Image swaping */
		$('.ars_CollMainbox div').draggable({revert:'invalid',helper:'clone', opacity: 0.50,start:function(event, ui){			
			drag_img=$(this).html();
			top_pos=$(this).css('top');
			left_pos=$(this).css('left');
			img_width=$(this).css('width');
			img_height=$(this).css('height');			
			drag_obj=$(this);
		}});
		$('.ars_CollMainbox div').droppable({drop:function(ev,ui){			
			drag_obj.addClass('draggedimage');
			drop_img=$(this).html();
			dimg_width=$(this).css('width');
			dimg_height=$(this).css('height');
			$(this).html(drag_img);
			$(this).find('img').css({'width':dimg_width,'height':dimg_height,'display':'none'}).fadeIn(500);
			drop_replace(drop_img);
		}	
		})
		function drop_replace(htm){
			$('.draggedimage img').remove();
			$('.draggedimage').html(htm);
			$('.draggedimage').css({'top':top_pos,'left':left_pos});
			$('.draggedimage').find('img').css({'top':top_pos,'left':left_pos,'width':img_width,'height':img_height,'display':'none'}).fadeIn();
			$('.ars_CollMainbox div').removeClass('draggedimage');
		}
		 /* Image swaping End*/
	});
	var drggableimgsrc=new Array();
	function evalImage(){
		//alert(1);
		var count_div=$('.ars_CollMainbox').find('#img_div').length;
		var name_img;
		for(i=0;i<count_div;i++)
		{
			
			if($('.ars_CollMainbox').find('#img_div').eq(i).children('img').hasClass('dragimg')){
    			
			src_img=$('.ars_CollMainbox').find('#img_div').eq(i).children('img').attr('src').split('/');
			drggableimgsrc[i]=src_img[src_img.length-1];
			
			}
			else{
				drggableimgsrc[i]="NoImage";
			}
			
			
		}
		 alert(drggableimgsrc);
		/*alert(count_div);
		var img_array=$('#img_div img').map(function(){
			src_img=$(this).attr('src').split('/');
			return name_img=src_img[src_img.length-1];
			
		})*/
		
	} 



$(document).ready(function () {
	$('.collection_button').click(function()
	{
	BWidth = $(window).width();   
	BHeight = $(window).height();     	
    PWidth = $('.ars_popBox1').width();
    PHeight = $('.ars_popBox1').height();                
    FTop = (BHeight/2)-(PHeight/2);
    FLeft = (BWidth/2)-(PWidth/2);                
    $('.ars_popBox1.collect').css({'top':FTop,'left':FLeft});
	$('.lightbox').show();
	$('.ars_popBox1.collect').show();
	});
	$('.ars_popBt').find('input').click(function()
	{
	$('.ars_popBox1.collect').hide();
	$('.ars_popBox1.success').show();
	$('.ars_popBox1.my_collect').hide();
	$('.ars_popBox1.success').css({'top':FTop,'left':FLeft});
	});
	$('.mycollection_button').click(function()
	{
	BWidth = $(window).width();   
	BHeight = $(window).height();     	
    PWidth = $('.ars_popBox1').width();
    PHeight = $('.ars_popBox1').height();                
    FTop = (BHeight/2)-(PHeight/2);
    FLeft = (BWidth/2)-(PWidth/2);                
    $('.lightbox').show();
	$('.ars_popBox1.my_collect').show();
	$('.ars_popBox1.my_collect').css({'top':FTop,'left':FLeft});
	});
	$('.ars_popClose a').click(function()
	{
	$('.ars_popBox1').hide();
	$('.lightbox').hide();
	});
});

 


 


	
