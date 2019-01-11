<?php 
function metall_scripts() {
	wp_enqueue_style( 'style-css', get_stylesheet_uri() );
	wp_enqueue_style( 'media-css', get_template_directory_uri() . '/media.css' );
	wp_enqueue_style( 'car-css', get_template_directory_uri() . '/car.css' );
	wp_enqueue_style( 'price-css', get_template_directory_uri() . '/price.css' );
	wp_enqueue_style( 'reset-css', get_template_directory_uri() . 'https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css' );
	wp_enqueue_style( 'font-css', get_template_directory_uri() . 'https://fonts.googleapis.com/css?family=Exo+2|Playfair+Display' );
	wp_enqueue_style( 'slick-css', get_template_directory_uri() . 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css' );
	
	wp_enqueue_script( 'main', get_template_directory_uri() . '/main.js');
	wp_enqueue_script( 'car', get_template_directory_uri() . '/car.js');
	wp_enqueue_script( 'jq', get_template_directory_uri() . 'https://code.jquery.com/jquery-1.11.0.min.js');
	if ( !is_admin() ) wp_deregister_script('jquery');
}
add_action( 'wp_enqueue_scripts', 'metall_scripts' );
?>