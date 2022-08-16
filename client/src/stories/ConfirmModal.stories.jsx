import React from 'react';

import { ConfirmModal } from '../components';

export default {
  title: 'Modal Window',
  component: ConfirmModal
};

const Template = (args) => <ConfirmModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  open: true,
  title: 'My favourite movies',
  url: 'http://localhost:3000/recommend?title="my movies"&ids=23,56',
  onClose: () => {}
};