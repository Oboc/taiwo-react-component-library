import Button from "../Components/Button/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes : {
    variant : {
        control : "select",
        options: ["primary", "secondary","outline"],

    },
    children: { control: "text"},
  },
};

export const Primary = (args) => <Button {...args} />
Primary.args = {
    variant: "primary",
    children: "primary Button",
}



export const Secondary = (args) => <Button {...args} />
Secondary.args = {
    variant: "secondary",
    children: "secondary Button",
}

export const Outline = (args) => <Button {...args} />
Outline.args = {
    variant: "outline",
    children: "outline Button",
}

