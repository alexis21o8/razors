<script>
    import {link} from "svelte-routing";
    import user, {logoutUser} from "../stores/user";
    import globalStore from "../stores/globalStore";
</script>

{#if $user.jwt}
    <a href="/" class="logout-btn" on:click={() => {
        logoutUser();
        globalStore.toggleItem("sidebar",false);
    }}>logout</a>
{:else}
    <a href="/login" use:link on:click={() => {
        globalStore.toggleItem("sidebar",false);
    }}>login</a>
{/if}