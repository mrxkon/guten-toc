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
			{ childBlocks && <ul><li>{ childBlocks }</li></ul> }
		</li>
	);
};

export default TOCBlockItem;
