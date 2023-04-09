<?php

/**
 * Plugin Name: Gutenberg Devs
 * Plugin URI: https://talib.netlify.app
 * Description: Gutenberg Startup plugins for create new blocks
 * Version: 1.0.0
 * Author: TALIB
 * Author URI: https://talib.netlify.app
 * License: GPLv3
 * Text Domain: gutenberg-devs
 * Domain Path: /languages/
 */

// Stop Direct Access
if (!defined('ABSPATH')) {
	exit;
}

/**
 * Blocks Final Class
 */

final class GutenbergDevs {
	public function __construct() {

		// define constants
		$this->gutenberg_Devs_define_constants();

		// block initialization
		add_action('init', [$this, 'gutenberg_Devs_blocks_init']);

		// blocks category
		if (version_compare($GLOBALS['wp_version'], '5.7', '<')) {
			add_filter('block_categories', [$this, 'gutenberg_Devs_register_block_category'], 10, 2);
		} else {
			add_filter('block_categories_all', [$this, 'gutenberg_Devs_register_block_category'], 10, 2);
		}

		// enqueue block assets
		add_action('enqueue_block_assets', [$this, 'gutenberg_Devs_external_libraries']);
		add_action('admin_enqueue_scripts', [$this, 'gutenberg_Devs_admin_assets']);
	}

	/**
	 * Initialize the plugin
	 */

	public static function init() {
		static $instance = false;
		if (!$instance) {
			$instance = new self();
		}
		return $instance;
	}

	/**
	 * Define the plugin constants
	 */
	private function gutenberg_Devs_define_constants() {
		define('GBK_VERSION', '1.0.0');
		define('GBK_URL', plugin_dir_url(__FILE__));
		define('GBK_INC_URL', GBK_URL . 'includes/');
		define('GBK_ASSETS_URL', GBK_URL . 'assets/');
	}

	/**
	 * Blocks Registration
	 */

	public function gutenberg_Devs_register_block($name, $options = array()) {
		register_block_type(__DIR__ . '/build/blocks/' . $name, $options);
	}

	/**
	 * Blocks Initialization
	 */
	public function gutenberg_Devs_blocks_init() {
		// register single block
		$this->gutenberg_Devs_register_block('startup');
	}

	/**
	 * Register Block Category
	 */

	public function gutenberg_Devs_register_block_category($categories, $post) {
		return array_merge(
			array(
				array(
					'slug'  => 'gutenberg-devs',
					'title' => __('Gutenberg Devs', 'gutenberg-devs'),
				),
			),
			$categories,
		);
	}

	/**
	 * Enqueue Block Assets
	 */
	public function gutenberg_Devs_external_libraries() {
		// enqueue JS
		wp_enqueue_style('gbd-uikit', GBK_ASSETS_URL . 'css/gbd-uikit.min.css', [], time());
		wp_enqueue_script('gbd-uikit', GBK_ASSETS_URL . 'js/gbd-uikit.min.js', [], time());
		// wp_enqueue_script('boilerplate-lib', GBK_INC_URL . 'js/plugin.js', array(), GBK_VERSION, true);
	}
	public function gutenberg_Devs_admin_assets() {
		// enqueue JS
		// wp_enqueue_script('boilerplate-lib', GBK_INC_URL . 'js/plugin.js', array(), GBK_VERSION, true);
		wp_enqueue_style('admin-css', GBK_INC_URL . 'css/editor.css', [], time());
		// wp_enqueue_style('gbd-uikit', GBK_ASSETS_URL . 'css/gbd-uikit.min.css', [], time());
		// wp_enqueue_script('gbd-uikit', GBK_ASSETS_URL . 'js/gbd-uikit.min.js', [], time());
	}
}

/**
 * Devs
 */

GutenbergDevs::init();
