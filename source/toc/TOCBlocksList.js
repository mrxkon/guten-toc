/**
 * WordPress dependencies.
 */
import { withSelect } from '@wordpress/data';

/**
 * Internal dependencies.
 */
import TOCBlockItem from './TOCBlockItem.js';

/**
 * Main.
 */
const TOCBlocksList = ( { blocks } ) => {
	return (
		<ul className="guten-toc-toc">
			{ blocks.map(
				( block ) => (
					<TOCBlockItem key={ block.clientId } block={ block } />
				)
			) }
		</ul>
	);
};

export default withSelect( ( select ) => {
	return {
		blocks: select( 'core/block-editor' ).getBlocks(),
	};
} )( TOCBlocksList );
