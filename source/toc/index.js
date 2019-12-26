/**
 * WordPress dependencies.
 */
import { registerPlugin } from '@wordpress/plugins';
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/edit-post';
import { PanelBody, PanelRow } from '@wordpress/components';

/**
 * Internal dependencies.
 */
import TOCListBlocks from './toc-list-blocks';

/**
 * Main.
 */
const TableOfContents = () => {
	return (
		<Fragment>
			<PluginSidebarMoreMenuItem target="guten-toc-toc">
				{ __( 'Guten TOC!', 'guten-toc' ) }
			</PluginSidebarMoreMenuItem>
			<PluginSidebar name="guten-toc-toc" title={ __( 'Guten TOC!', 'guten-toc' ) }>
				<PanelBody>
					<PanelRow>
						<TOCListBlocks />
					</PanelRow>
				</PanelBody>
			</PluginSidebar>
		</Fragment>
	);
};

registerPlugin(
	'guten-toc-toc', {
		icon: 'list-view',
		render: TableOfContents,
	}
);
