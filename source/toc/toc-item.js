/**
 * Internal dependencies.
 */
import Button from './toc-button';

/**
 * Main.
 */
const TOCItem = ( { block } ) => {
	let childBlocks = null;

	if ( block.innerBlocks ) {
		childBlocks = block.innerBlocks.map(
			( innerBlock ) => (
				<TOCItem key={ block.clientId } block={ innerBlock } />
			)
		);
	}

	return (
		<li key={ block.clientId }>
			<Button block={ block } />
			{ childBlocks.length > 0 ? <ul><li>{ childBlocks }</li></ul> : null }
		</li>
	);
};

export default TOCItem;
