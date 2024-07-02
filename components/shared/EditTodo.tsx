"use client"

import { edit } from "@/app/actions/todoActions";
import Form from "../ui/form";
import Input from "../ui/input";
import Button from "../ui/button";
import { useState } from "react";
import { todoType } from "@/types/todoType";
import { BiEdit } from "react-icons/bi";

const EditTodo = ({todo}: todoType) => {
    const [editTodo, setEditTodo] = useState(false)
    const handleEdit = ()=>{
        setEditTodo(!editTodo);
    }
    const handleSubmit =()=>{
        setEditTodo(false)
    }

    return ( <div className="flex gap-5 items-center">
        <Button 
        onClick={handleEdit}
        text={<BiEdit/>}
        actionButton
        />
        {editTodo? (<Form 
            action={edit} 
            onSubmit={handleSubmit}>
            <Input
            name="inputId"
            value={todo.id}
            type="hidden"></Input>
            <div className="flex justify-center">
            <Input type="text"
            name="newTitle"
            placeholder="Edit todo"></Input>
            <Button type="submit" text="Save"/>
            </div>
            </Form>): null}


    </div> );
}
 
export default EditTodo;