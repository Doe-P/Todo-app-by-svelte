<script lang="ts">
    import {todos} from "../stores";
    export let todo;
</script>
<div class="w-full flex flex-row items-center gap-4 p-4 my-4 bg-white rounded-md shadow-sm">
    <div class="text-md text-gray-700 font-medium w-full overflow-ellipsis {todo.isCompleted? 'text-green-500 italic line-through':''}">
        <h1>{todo.description}</h1>
    </div>
    <label class="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" on:change={todos.updateTodo(todo.id, !todo.isCompleted)} bind:checked={todo.isCompleted} class="sr-only peer">
        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
    </label>
    <button type="button" on:click={todos.removeTodo(todo.id)} class="p-0.5 rounded-full bg-red-500 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
             stroke="currentColor" data-slot="icon" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/>
        </svg>
    </button>
</div>
