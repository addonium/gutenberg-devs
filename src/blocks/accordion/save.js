import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
	return (
		<div {...useBlockProps.save()}>
			<ul data-gbd-accordion>
				<InnerBlocks.Content />
			</ul>
		</div>
	);
}
