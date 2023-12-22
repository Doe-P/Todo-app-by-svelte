<script type="ts">
    import {todos} from "../stores";
    let description = '';
    const addTodo = () => {
        todos.addTodos(description);
        description = '';
    }
</script>
<form class="w-full lg:w-6/12 xl:w-4/12 bg-white rounded-md p-3 shadow-sm">
    <div class="flex flex-col md:flex-row items-center gap-4">
        <input type="text" bind:value="{description}"
               class="px-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:border-blue-500 transition-all w-full text-sm text-gray-900 placeholder-gray-400"
               placeholder="What are you doing?">
        <button type="button" on:click={addTodo}
                class="text-white text-sm px-3 py-2 rounded-md bg-blue-500 w-full md:w-fit">
            add
        </button>
        <button type="button" on:click={todos.resetTodo} class="text-blue-500 text-sm px-3 py-2 rounded-md border border-blue-500 w-full md:w-fit">Reset</button>
    </div>
</form>
