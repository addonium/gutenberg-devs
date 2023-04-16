import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	RichText,
InnerBlocks


} from '@wordpress/block-editor';

import {
	TabPanel,
	Panel,
	PanelBody,
	PanelRow,
	BaseControl,
	ButtonGroup,
	Button,
} from '@wordpress/components';
const { Fragment } = wp.element;


// editor style
import './editor.scss';


export default function Edit({ attributes, setAttributes }) {
	const {content} = attributes;

	return (
		<Fragment>
			<InspectorControls keys="controls">
				<div className="gbd-panel-control">
					<TabPanel
						className="gbd-parent-tab-panel"
						activeClass="active-tab"
						// onSelect={onSelect}
						tabs={[
							{
								name: 'general',
								title: __('General', 'gutenebrg-Devs'),
								className: 'gbd-tabs general',
							},
							{
								name: 'styles',
								title: __('Style', 'gutenebrg-Devs'),
								className: 'gbd-tabs styles',
							},
							{
								name: 'advanced',
								title: __('Advanced', 'gutenebrg-Devs'),
								className: 'gbd-tabs advanced',
							},
						]}
					>
						{(tab) => (
							<div className={'gbd-tabs-controls' + tab.name}>
								{tab.name === 'general' && (
									<Fragment>
										<PanelBody
											title="My Block Settings"
											icon="welcome-widgets-menus"
											initialOpen={true}
										>
											<BaseControl
												id="base-controls"
												label={__(
													'Selected Slide',
													'gutenberg-devs'
												)}
												help="Enter some text"
											></BaseControl>
										</PanelBody>
									</Fragment>
								)}
							</div>
						)}
					</TabPanel>
				</div>
			</InspectorControls>

			<div {...useBlockProps()}>
					<InnerBlocks
						allowedBlocks={['gutenberg-devs/startup']}
					></InnerBlocks>

			</div>
		</Fragment>
	);
}
