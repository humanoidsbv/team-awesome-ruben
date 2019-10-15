// eslint-disable-next-line import/prefer-default-export
// export { default as wrapRootElement } from './src/redux';

import wrapWithProvider from './src/redux';
export const wrapRootElement = wrapWithProvider;
