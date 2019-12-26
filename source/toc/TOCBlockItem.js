/**
 * Internal dependencies.
 */
import TOCBlockButton from './TOCBlockButton.js';

/**
 * Main.
 */
const TOCBlockItem = ( { block } ) => {
	let childBlocks = null;

	if ( block.innerBlocks ) {
		childBlocks = block.innerBlocks.map(
			( innerBlock ) => (
				<TOCBlockItem key={ block.clientId } block={ innerBlock } />
			)
		);
	}

	return (
		<li key={ block.clientId }>
			<TOCBlockButton block={ block } />
			{ childBlocks.length > 0 ? <ul><li>{ childBlocks }</li></ul> : null }
		</li>
	);
};

export default TOCBlockItem;
