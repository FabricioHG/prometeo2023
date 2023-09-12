/**
 * @file
 * Prometeo2023 behaviors.
 */
(function ($,Drupal) {

  'use strict';

  Drupal.behaviors.prometeo2023 = {
    attach: function (context, settings) {

    	new WOW().init();
      
      console.log('It works!');

     
		
		//Agrega el comportamiento de desplegable al elemento de menú con clase "dropdown" en dispositivos móviles
		$('li.nav-item.dropdown').on('click', function(e) {
		  if ($(window).width() <= 767) { // Cambia el valor según tus necesidades de pantalla
		    if ($(e.target).is('.dropdown-toggle')) {
          e.preventDefault(); // Evita que el enlace se active
          $(this).find('.dropdown-menu').toggleClass('show');
        }
		  }
		});







    }
  };

  //Animate
  $('h2, h1.preguntas_f').addClass('wow animate__animated animate__slideInDown');
  $('h3').addClass('wow animate__animated animate__slideInDown');
  $('.div_lema img').addClass('wow animate__animated animate__fadeInUp');
  $('div.text-align-center.div_lema').addClass('wow animate__animated animate__fadeInLeft');
  $('#block-prometeo2023-departamentos .departamentos .itm_img img').addClass('wow animate__animated animate__flipInX');
  $('#block-prometeo2023-departamentos .servicios .itm_img img, .offset_item_img img').addClass('wow animate__animated animate__flipInY');
  $('.cont_img_txt.container-fluid.servicios_img_text .itm_img.itm_flex img, .cont_img_txt_flex .int_img img').addClass('wow animate__animated animate__slideInLeft');

  



} (jQuery, Drupal));
