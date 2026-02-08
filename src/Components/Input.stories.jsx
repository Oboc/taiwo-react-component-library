import Input from "../Components/Input/Input";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    placeholder: { control: "text" },
    type: { control: "select", options: ["text", "password", "email"] },
    value: { control: "text" }
  },
};

export const Default = (args) => <Input {...args} />;
Default.args = { placeholder: "Enter text", type: "text", value: "" };

export const Password = (args) => <Input {...args} />;
Password.args = { placeholder: "Enter password", type: "password", value: "" };

