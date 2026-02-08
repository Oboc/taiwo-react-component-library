import Form from "../Components/Form/Form";
import Input from "../Components/Input/Input";
import Button from "../Components/Button/Button";

export default {
  title: "Components/Form",
  component: Form,
};

export const BasicForm = () => (
  <Form>
    <Input placeholder="Username" type="text" />
    <Input placeholder="Password" type="password" />
    <Button variant="primary">Submit</Button>
  </Form>
);
