import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from ".";
export default {
    title: "Example/Button",
    component: Button,
    argTypes: {
        backgroundColor: { control: "color" }
    }
};
const Template = (args) => _jsx(Button, Object.assign({}, args), void 0);
export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: "Button"
};
export const Secondary = Template.bind({});
Secondary.args = {
    label: "Button"
};
export const Large = Template.bind({});
Large.args = {
    size: "large",
    label: "Button"
};
export const Small = Template.bind({});
Small.args = {
    size: "small",
    label: "Button"
};
