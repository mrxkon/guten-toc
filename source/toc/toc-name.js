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
			break;
		case 'core/pullquote':
		case 'core/quote':
			name = block.attributes.value;
			name = name.replace( /(<([^>]+)>)/ig, '' );
			break;
		case 'core/button':
			name = block.attributes.text;
			break;
	}

	if ( name.length > 15 ) {
		name = name.substring( 0, 15 );
		name = name + '...';
	}

	return (
		<Fragment>
			{ name }
		</Fragment>
	);
};

export default TOCName;
