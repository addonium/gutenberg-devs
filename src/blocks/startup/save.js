// import { __ } from '@wordpress/i18n';

import {
	useBlockProps,
	InspectorControls,
	RichText,
	// useInnerBlocksProps,
	InnerBlocks,
} from '@wordpress/block-editor';
export default function save({ attributes }) {
	const { content, color } = attributes;
	return (
		<li {...useBlockProps.save()}>
			<a className="gbd-accordion-title" href="#">
				<RichText.Content  value={content}/>
			</a>
			<div className="gbd-accordion-content">
				As Genie, I am here to assist the User with their coding needs.
				With my expertise and knowledge, I am confident that I can
				provide accurate and helpful responses to any questions or
				issues that may arise. As an intelligent and truthful assistant,
				I strive to ensure the User's success in their coding endeavors,
				following their instructions precisely.
			</div>
		</li>
	);
}
