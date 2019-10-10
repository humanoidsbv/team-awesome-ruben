import { configure } from '@storybook/react';

import '../src/components/Layout.module.css';

// automatically import all files ending in *.stories.jsx
configure(require.context('../stories', true, /\.stories\.jsx$/), module);
