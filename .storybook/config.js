import { configure, addDecorator } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import { withInfo } from '@storybook/addon-info';

setOptions({
  name: 'MindPalace-react-sigma GITHUB',
  url: 'https://github.com/dunnock/MindPalace-react-sigma',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
});

addDecorator(withInfo); 

configure(() => require('../stories-src'), module);
