/**
 * Includes all blocks root files
 */

export const CONTENT_POSITION = [
	{ label: __(<Dashicon icon={'editor-alignleft'} />), value: 'left' },
	{ label: __(<Dashicon icon={'editor-aligncenter'} />), value: 'center' },
	{ label: __(<Dashicon icon={'editor-alignright'} />), value: 'right' },
];

import './blocks/startup/index';
import './blocks/accordion/index';
