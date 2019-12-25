/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/edit-post';
import { PanelBody, PanelRow } from '@wordpress/components';

/**
 * Internal dependencies.
 */
import TOCBlocksList from './TOCBlocksList.js';

/**
 * Main.
 */
const TableOfContents = () => {
	return (
		<Fragment>
			<PluginSidebarMoreMenuItem target="guten-toc-toc">
				{ __( 'Table of Contents', 'guten-toc' ) }
			</PluginSidebarMoreMenuItem>
			<PluginSidebar name="guten-toc-toc" title={ __( 'Table of Contents', 'guten-toc' ) }>
				<PanelBody>
					<PanelRow>
						<TOCBlocksList />
					</PanelRow>
				</PanelBody>
			</PluginSidebar>
		</Fragment>
	);
};

export default TableOfContents;
