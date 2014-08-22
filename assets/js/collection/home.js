define(
    [
        'jquery',
        'stapes',
        './collection'
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
				$('.collrel').mouseenter(function () {
					$(this).children('.ars_collTool').show();
				});
				$('.collrel').mouseleave(function () {
					$(this).children('.ars_collTool').hide();
				});

				$('.viewit').click(function (){
					$(this).children('ul').slideToggle();
				});
				
				$('.ars_CollMainbox #img_div').mouseover(function (){
					$('div.ars_popClose').hide();
					if($(this).children('img').hasClass('dragimg')){
						$(this).children('div.ars_popClose').show();
					}
					else{
						$(this).children('div.ars_popClose').hide();
					}
				});
				$('.ars_CollMainbox #img_div').mouseleave(function (){		 
					$(this).children('div.ars_popClose').hide();
				});
				$(window.document).on('click','#img_div .ars_popClose',function (){
					if(confirm('Are you sure you want to delete?')){
						$(this).parent('#img_div').children('input[type="hidden"]').val("");
						$(this).parent('#img_div').removeClass('draggedimage');
						$(this).parent('#img_div').find('img.dragimg,.ars_popClose').remove();
					}
				});
				
				
                
            }

        });

        return new Mediator();
    }
);
