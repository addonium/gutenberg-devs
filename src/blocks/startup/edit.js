import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	RichText,
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
		resOption,
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
				<div className="eb-panel-control">
					<TabPanel
						className="eb-parent-tab-panel"
						activeClass="active-tab"
						// onSelect={onSelect}
						tabs={[
							{
								name: 'general',
								title: __('General', 'gutenebrg-Devs'),
								className: 'eb-tab general',
							},
							{
								name: 'styles',
								title: __('Style', 'gutenebrg-Devs'),
								className: 'eb-tab styles',
							},
							{
								name: 'advanced',
								title: __('Advanced', 'gutenebrg-Devs'),
								className: 'eb-tab advanced',
							},
						]}
					>
						{(tab) => (
							<div className={'eb-tab-controls' + tab.name}>
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
													'gutenberg-Devs'
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

			<div {...useBlockProps()}>hello</div>
		</Fragment>
	);
}
