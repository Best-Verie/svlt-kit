import { writable } from "svelte/store";

export default  TodoStore = writable([
    {
    id: 1,
    title: "eating",
    date: new Date()},
])