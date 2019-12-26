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
 * Internal dependencies.
 */
import TOCName from './toc-name';

/**
 * Main.
 */
const TOCButton = ( { block, isTOCBlockSelected } ) => {
	const TOCBlockType = getBlockType( block.name );

	return (
		<Button
			className={ classnames( 'block-editor-block-navigation__item-button', { 'is-selected': isTOCBlockSelected } ) }
			onClick={ () => dispatch( 'core/block-editor' ).selectBlock( block.clientId ) }
		>
			<span className="editor-block-icon block-editor-block-icon has-colors">
				<Icon icon={ TOCBlockType.icon.src } />
			</span>
			<TOCName block={ block } />
			{ isTOCBlockSelected && <span className="screen-reader-text">{ __( '(selected block)' ) }</span> }
		</Button>
	);
};

export default withSelect( ( select, ownProps ) => {
	const { clientId } = ownProps.block;

	return {
		isTOCBlockSelected: select( 'core/block-editor' ).isBlockSelected( clientId ),
	};
} )( TOCButton );
