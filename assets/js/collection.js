
jQuery(function(){


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
	    
		$('.ars_CollMainbox #img_div').mouseover(function ()
		{
			console.log('over');
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
		$('.ars_CollMainbox #img_div').mouseleave(function ()
		{
		 
		 $(this).children('div.ars_popClose').hide();
		});
		$('#img_div .ars_popClose').on('click',function ()
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
	



 


 


	
