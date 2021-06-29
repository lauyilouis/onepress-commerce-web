import { Story, Meta } from '@storybook/react';

import {
  Nav,
  NavLeft,
  NavRight,
  NavItem,
  NavProps,
  NavLeftProps,
  NavRightProps,
  NavItemProps,
} from '.';

export default {
  title: 'Components/Nav',
  component: Nav,
  argTypes: {
    shopfrontName: {
      control: 'text',
      description: 'Shopfront display name for storyboard testing only. The real component do not have this argument.'
    },
    children: { control: '' },
  },
} as Meta;

interface StoryArgs {
  shopfrontName: string;
}

const Template: Story<NavProps & NavLeftProps & NavRightProps & NavItemProps & StoryArgs> = (args) => {
  return (
    <Nav {...args}>
      <NavLeft>
        {args.shopfrontName}
      </NavLeft>
      <NavRight>
        <NavItem>item 1</NavItem>
        <NavItem>item 2</NavItem>
      </NavRight>
    </Nav>
  )
};

export const LightTheme = Template.bind({});
LightTheme.args = {
  shopfrontName: 'Onepress Commerce'
};
