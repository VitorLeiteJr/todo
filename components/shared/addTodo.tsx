
import { create } from "@/app/actions/todoActions";
import Button from "../ui/button"
import Form from "../ui/form"
import Input from "../ui/input"

const AddTodo = () => {
  return (
   <Form action={create}className="w-1/2 m-auto">
    <div className="flex">
      <Input 
        name="input"
        type="text"
      placeholder="add todo" />
        <Button type="submit" text="Add"></Button>
    </div>
   </Form>
  );
};

export default AddTodo