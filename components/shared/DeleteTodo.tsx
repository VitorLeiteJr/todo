"use client"

 import { deleteTodo } from "@/app/actions/todoActions";
import { todoType } from "@/types/todoType";
import Button from "../ui/button";
import Form from "../ui/form";
import Input from "../ui/input";
import { BsFillTrashFill } from "react-icons/bs";

const DeleTodo = ({todo}: {todo: todoType}) => {
    return (
        <Form action={deleteTodo}>
            <Input type="hidden"
            name="inputId"
            value={todo.id}/>
            <Button
            actionButton
            text={<BsFillTrashFill/>}
            type="submit"/>
        </Form> 
    );
}
 
export default DeleTodo;