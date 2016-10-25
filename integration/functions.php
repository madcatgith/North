<?php
function enqueue_styles() {
	wp_enqueue_style( 'whitesquare-style', get_stylesheet_uri());
	wp_register_style('bootstrap.css', get_template_directory_uri().'/css/bootstrap.min.css');
	wp_enqueue_style( 'bootstrap.css');
	wp_register_style('bootstrap-theme.css', get_template_directory_uri().'/css/bootstrap-theme.min.css');
	wp_enqueue_style( 'bootstrap-theme.css');


}
add_action('wp_enqueue_scripts', 'enqueue_styles');

function enqueue_scripts () {
	wp_register_script('html5-shim', 'http://html5shim.googlecode.com/svn/trunk/html5.js');
	wp_enqueue_script('html5-shim');
	wp_register_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js');
	wp_enqueue_script('jquery');
	wp_register_script('bootstrap.js', get_template_directory_uri().'/js/bootstrap.min.js');
	wp_enqueue_script('bootstrap.js');
	wp_register_script('main.js', get_template_directory_uri().'/js/main.js');
	wp_enqueue_script('main.js');
}
add_action('wp_enqueue_scripts', 'enqueue_scripts');