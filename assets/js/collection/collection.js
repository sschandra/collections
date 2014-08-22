define(
    [
        'jquery',
        'stapes',
        'jquery-ui-core'
    ],  
    function( 
        $,
        Stapes
    ) {
            
        'use strict';

        /**
         * Page-level Mediator
         * @module Boilerplate
         * @implements {Stapes}
         */
        var Mediator = Stapes.subclass({

            /**
             * Mediator Constructor
             * @return {void}
             */
            constructor: function (){

                var self = this;

                self.initEvents();

                $(function(){
                    self.emit('domready');
                });
            },

            /**
             * Initialize events
             * @return {void}
             */
            initEvents: function(){

                var self = this;

                self.on('domready', self.onDomReady);
            },

            /**
             * DomReady Callback
             * @return {void}
             */
            onDomReady: function(){				
                /* Image swaping */
				var drag_img,top_pos,left_pos,img_width,img_height,drag_obj,drop_img,dimg_width,dimg_height;
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
            }

        });

        return new Mediator();
    }
);

	



 


 


	
