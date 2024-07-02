import { AiOutlineAlipayCircle } from "react-icons/ai";
import Button from "../ui/button";
import Form from "../ui/form";
import Input from "../ui/input";
import { changeStatus } from "@/app/actions/todoActions";
import { todoType } from "@/types/todoType";

const ChangeTodo = ({todo}: todoType) => {

  
    return ( 
        <Form action={changeStatus}>
            <Input name="inputId"
            value={todo.id}
            type="hidden"></Input>
            <Button actionButton 
            type="submit"  
            text={<AiOutlineAlipayCircle/>}></Button>

        </Form>

    );
}
 
export default ChangeTodo;