/**
 * WordPress dependencies.
 */
import { withSelect } from '@wordpress/data';

/**
 * Internal dependencies.
 */
import TOCItem from './toc-item';

/**
 * Main.
 */
const TOCList = ( { blocks } ) => {
	return (
		<ul className="guten-toc-toc">
			{ blocks.map(
				( block ) => (
					<TOCItem key={ block.clientId } block={ block } />
				)
			) }
		</ul>
	);
};

export default withSelect( ( select ) => {
	return {
		blocks: select( 'core/block-editor' ).getBlocks(),
	};
} )( TOCList );
