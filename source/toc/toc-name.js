/**
 * WordPress dependencies.
 */
import { getBlockType } from '@wordpress/blocks';
import { Fragment } from '@wordpress/element';

const TOCName = ( { block } ) => {
	const TOCBlockType = getBlockType( block.name );

	let name = TOCBlockType.title;

	switch ( block.name ) {
		case 'core/paragraph':
		case 'core/heading':
			name = block.attributes.content;
			name = name.replace( /(<([^>]+)>)/ig, '' );
			name = name.substring( 0, 20 );
			name = name + '...';
			break;
		case 'core/pullquote':
		case 'core/quote':
			name = block.attributes.value;
			name = name.replace( /(<([^>]+)>)/ig, '' );
			name = name.substring( 0, 20 );
			name = name + '...';
			break;
		case 'core/button':
			name = block.attributes.text;
			name = name.substring( 0, 20 );
			name = name + '...';
			break;
	}

	return (
		<Fragment>
			{ name }
		</Fragment>
	);
};

export default TOCName;
