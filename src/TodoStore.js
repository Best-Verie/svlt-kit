import { writable } from "svelte/store";

export  const TodoStore = writable([
    {
    id: 1,
    title: "eating",
    date: new Date()},
])