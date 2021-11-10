import { useContext } from "react";
import { TodoList } from "../stores/todo-list";
import { StoreContext } from "./store-provider";

// drts 这里没有很看懂
export const useStore = (): TodoList=> useContext(StoreContext)