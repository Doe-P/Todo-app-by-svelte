<script type="ts">
    import Navbar from "./lib/components/Navbar.svelte";
    import {todos} from "./lib/stores";
    import TodoForm from "./lib/components/TodoForm.svelte";
    import TodoItem from "./lib/components/TodoItem.svelte";
</script>
<main>
    <Navbar/>
    <div class="w-full min-h-screen overflow-y-auto bg-gray-100">
        <div class="w-full mt-20 flex flex-col justify-center items-center p-4">
            <TodoForm/>
            <div class="w-full lg:w-6/12 xl:w-4/12 my-4">
                {#each $todos as todo}
                  <TodoItem todo={todo}/>
                {/each}
            </div>
        </div>
    </div>
</main>
