import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.jsx
configure(require.context('../stories', true, /\.stories\.jsx$/), module);
