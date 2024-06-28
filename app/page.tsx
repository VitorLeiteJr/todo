import AddTodo from "@/components/shared/addTodo"



const Home = () => {
  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <span className="text-3xl font-extrabold uppercase">Todo app</span>
      <h1 className="text-3xl font-semibold uppercase mb-5">
        Server Actions
        </h1>
        <div className="flex justify-center flex-col items-center w-[1000px]">
         <AddTodo/>
        </div>


    </div>
  )
}

export default Home