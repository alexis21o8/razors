<script>
    export let title ='';
    // import {onMount,onDestroy} from "svelte";
    import products from "../../stores/defaultProducts";
    import Product from "./Product.svelte";
    import Loading from "../Loading.svelte";
</script>

<section class="section">
    <h2 class="section-title">{title}</h2>
    <div class="products-center">
        <!-- onMount(() => {unsubscribe = products.subscribe(value => {localProducts = value;})}) -->
        <!-- onDestroy(() => {unsubscribe();}) -->
        {#each $products as product (product.id)}
            <Product {product}></Product>
        {:else}
            <Loading></Loading>
        {/each}
    </div>
</section>