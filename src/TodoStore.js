import { writable } from "svelte/store";

export  const TodoStore = writable([
    {
    id: 1,
    title: "eating",
    date: new Date()},
    {
    id: 2,
    title: "sleeping",
    date: new Date()},
])