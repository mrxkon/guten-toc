<?php // phpcs:ignore - class- filename.
/**
 *
 * Plugin Name: Guten TOC!
 * Description: Adds an editor sidebar TOC.
 * Version:     1.0
 * Author:      Konstantinos Xenos
 * Author URI:  https://xkon.gr
 * License:     GPLv2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: guten-toc
 * Domain Path: /languages
 *
 * Copyright (C) 2019 Konstantinos Xenos (https://xkon.gr).
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see https://www.gnu.org/licenses/.
 */

namespace Guten_Toc;

// Check that the file is not accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	die( 'We\'re sorry, but you can not directly access this file.' );
}

// Only load if Gutenberg is available.
if ( ! function_exists( 'register_block_type' ) ) {
	return;
}

// Load plugin.
add_action( 'plugins_loaded', array( '\\Guten_Toc\\Setup', 'get_instance' ) );

/**
 * Class Setup.
 */
class Setup {
	/**
	 * Guten_Toc\\Setup instance.
	 *
	 * @var $instance.
	 */
	private static $instance = null;

	/**
	 * Get the class instance.
	 */
	public static function get_instance() {
		if ( ! self::$instance ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Constructor.
	 */
	function __construct() {
		add_action( 'init', array( $this, 'load' ) );
		add_action( 'init', array( $this, 'text_domain' ) );
	}

	/**
	 * Loads the necessary scripts & styles.
	 * Registers the blocks.
	 */
	function load() {
		// Automated dependencies array.
		$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php' );

		// Register Scripts.
		wp_register_script(
			'guten-toc-js',
			plugins_url( 'build/index.js', __FILE__ ),
			$asset_file['dependencies'],
			$asset_file['version']
		);

		// Editor styles.
		wp_register_style(
			'guten-toc-editor-style',
			plugins_url( 'assets/editor.css', __FILE__ ),
			array( 'wp-edit-blocks' ),
			filemtime( plugin_dir_path( __FILE__ ) . '/css/editor.css' )
		);

		// Frontend styles.
		wp_register_style(
			'guten-toc-style',
			plugins_url( 'assets/style.css', __FILE__ ),
			array(),
			filemtime( plugin_dir_path( __FILE__ ) . '/css/style.css' )
		);

		// Register the Addons.
		register_block_type(
			'guten-toc/gaddons',
			array(
				'editor_script' => 'guten-toc-js',
				'editor_style'  => 'guten-toc-editor-style',
				'style'         => 'guten-toc-style',
			)
		);

		if ( function_exists( 'wp_set_script_translations' ) ) {
			wp_set_script_translations( 'guten-toc-js', 'guten-toc' );
		}
	}

	/**
	 * Load plugin text-domain.
	 */
	function text_domain() {
		load_plugin_textdomain( 'guten-toc', false, basename( __DIR__ ) . '/languages' );
	}
}
