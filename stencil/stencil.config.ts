import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'mycomponent',
  srcDir: `./src/${process.env.SRC_DIR}`,
  excludeSrc: ['/test/', '**/*.spec.*', '**/*.solution.*'],
  outputTargets: [
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ],
};
