/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { getBlockType } from '@wordpress/blocks';
import { Button, Icon } from '@wordpress/components';
import { dispatch, withSelect } from '@wordpress/data';

/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Main.
 */
const TOCBlockButton = ( { block, isTOCBlockSelected } ) => {
	const TOCBlockType = getBlockType( block.name );

	return (
		<Button
			className={ classnames( 'block-editor-block-navigation__item-button', { 'is-selected': isTOCBlockSelected } ) }
			onClick={ () => dispatch( 'core/block-editor' ).selectBlock( block.clientId ) }
		>
			<Icon icon={ TOCBlockType.icon.src } />
			{ TOCBlockType.title }
			{ isTOCBlockSelected && <span className="screen-reader-text">{ __( '(selected block)' ) }</span> }
		</Button>
	);
};

export default withSelect( ( select, ownProps ) => {
	const { clientId } = ownProps.block;

	return {
		isTOCBlockSelected: select( 'core/block-editor' ).isBlockSelected( clientId ),
	};
} )( TOCBlockButton );
