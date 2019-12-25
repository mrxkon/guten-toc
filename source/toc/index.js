/**
 * WordPress dependencies.
 */
import { registerPlugin } from '@wordpress/plugins';

/**
 * Internal dependencies.
 */
import TableOfContents from './TableOfContents';

/**
 * Main.
 */
registerPlugin(
	'guten-toc-toc', {
		icon: 'list-view',
		render: TableOfContents,
	}
);
