import Image from "next/image";
import styles from "./page.module.css";
import connectMongoDB from "../../libs/connect";
import Todo from "../../models/todoModel";
import PlusIcon from "@/app/components/PlusIcon";
import EditIcon from "@/app/components/EditIcon";
import Link from "next/link";

async function getTodos() {
  try {
    connectMongoDB();
    const todos = await Todo.find({});
    if (!todos) {
      throw new Error("Couldn't fetch the todos.");
    }
    return todos;
  } catch (error) {
    console.log("Error while fetch the todos.");
  }
}

export default async function Home() {
  const data = await getTodos();
  return (
    <div className="wrapper">
      <div className="container">
        <h1>Todo App</h1>
        <span className="plusbtn">
          <Link href="addTodo">
            <PlusIcon className="icon plus" />
          </Link>
        </span>
        {data.length > 0 && (
          <div className="todo-list">
            {data.map((todo) => {
              <div className="list" key={todo._id}>
                <li>{todo.description}</li>
                <div className="iconWrapper">
                  <Delete id={todo._id.toString()} />
                  <span>
                    <Link
                      href={{
                        pathname: `/update/${todo._id}`,
                        query: { description: todo.description },
                      }}
                    >
                      <EditIcon className="icon" />
                    </Link>
                  </span>
                </div>
              </div>;
            })}
          </div>
        )}
      </div>
    </div>
  );
}
