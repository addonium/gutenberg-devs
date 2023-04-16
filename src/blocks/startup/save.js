// import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';


export default function save({ attributes }) {
	const { content, color } = attributes;
	// var NewComponent = React.createClass({
	// 	render: function () {
	// 		return (
	// 			<ul gbd-accordion>
	// 				<li className="gbd-open">
	// 					<a className="gbd-accordion-title" href="#">
	// 						Item 1
	// 					</a>
	// 					<div className="gbd-accordion-content">
	// 						<p>
	// 							Lorem ipsum dolor sit amet, consectetur
	// 							adipiscing elit, sed do eiusmod tempor
	// 							incididunt ut labore et dolore magna aliqua.
	// 						</p>
	// 					</div>
	// 				</li>
	// 				<li>
	// 					<a className="gbd-accordion-title" href="#">
	// 						Item 2
	// 					</a>
	// 					<div className="gbd-accordion-content">
	// 						<p>
	// 							Ut enim ad minim veniam, quis nostrud
	// 							exercitation ullamco laboris nisi ut aliquip ex
	// 							ea commodo consequat. Duis aute irure dolor
	// 							reprehenderit.
	// 						</p>
	// 					</div>
	// 				</li>
	// 				<li>
	// 					<a className="gbd-accordion-title" href="#">
	// 						Item 3
	// 					</a>
	// 					<div className="gbd-accordion-content">
	// 						<p>
	// 							Duis aute irure dolor in reprehenderit in
	// 							voluptate velit esse cillum dolore eu fugiat
	// 							nulla pariatur. Excepteur sint occaecat
	// 							cupidatat proident.
	// 						</p>
	// 					</div>
	// 				</li>
	// 			</ul>
	// 		);
	// 	},
	// });
	return (
		<div {...useBlockProps.save()}>
			<ul data-gbd-accordion>
				<li className="gbd-open">
					<a className="gbd-accordion-title" href="#">
						Item 1
					</a>
					<div className="gbd-accordion-content">
						<InnerBlocks.Content />
					</div>
				</li>
			</ul>
		</div>
	);
}
