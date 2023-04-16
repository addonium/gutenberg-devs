import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	RichText,
	// useInnerBlocksProps,
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
// const innerBlocksProps = useInnerBlocksProps({
// 	className: 'c-accordion__content',
// });

import {
	BUTTON_STYLES,
	FLIPBOX_SIDES,
	FLIPBOX_TYPE,
	ICON_POSITIONS,
	ICON_TYPE,
	LINK_TYPE,
	FRONT_IMAGE_UNITS,
	CONTENT_POSITION,
} from '../../../constant/index.js';

// editor style
import './editor.scss';

// colors
import colors from '../../utilities/colors-palette';

export default function Edit({ attributes, setAttributes }) {
	const {
		content,
		flipType,
		selectedSide,
		frontIconOrImage,
		frontIcon,
		frontImageUrl,
		frontImageId,
		backIconOrImage,
		backIcon,
		backImageUrl,
		backImageId,
		showFrontTitle,
		frontTitle,
		showFrontContent,
		frontContent,
		showBackTitle,
		backTitle,
		showBackContent,
		backContent,
		linkType,
		buttonText,
		buttonIcon,
		buttonIconPos,
		link,
		frontTitleColor,
		backTitleColor,
		frontContentColor,
		backContentColor,
		frontIconColor,
		backIconColor,
		buttonStyle,
		buttonBackground,
		buttonColor,
		frontIconBackground,
		backIconBackground,
		transitionSpeed,
		displayButtonIcon,
		contentPosition,
		linkOpenNewTab,
	} = attributes;

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
											>
												<ButtonGroup>
													{FLIPBOX_SIDES.map(
														(item, index) => (
															<Button
																key={index}
																isPrimary={
																	selectedSide ===
																	item.value
																}
																isSecondary={
																	selectedSide !==
																	item.value
																}
																onClick={() =>
																	setAttributes(
																		{
																			selectedSide:
																				item.value,
																		}
																	)
																}
															>
																{item.label}
															</Button>
														)
													)}
												</ButtonGroup>
											</BaseControl>
										</PanelBody>
									</Fragment>
								)}
							</div>
						)}
					</TabPanel>
				</div>
			</InspectorControls>

			<ul
				data-gbd-accordion="mode:click"
				href="javascript:self.view.isUserInteractionEnabled = false"
			>
				<li {...useBlockProps('data-gbd-accordion')}>
					<a className="gbd-accordion-title" href="#">
						<RichText
							tagName="h2"
							className="gbd-accorditon"
							value={content}
							onChange={(content) => setAttributes({ content })}
						/>
					</a>
					<div className="gbd-accordion-content">
						As Genie, I am here to assist the User with their coding
						needs. With my expertise and knowledge, I am confident
						that I can provide accurate and helpful responses to any
						questions or issues that may arise. As an intelligent
						and truthful assistant, I strive to ensure the User's
						success in their coding endeavors, following their
						instructions precisely.
					</div>
				</li>
			</ul>
		</Fragment>
	);
}
