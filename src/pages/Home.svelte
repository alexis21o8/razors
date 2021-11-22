<script>
    import Hero from "../components/Hero.svelte"
    import {Link} from "svelte-routing";
    // featured products
    import Featured from "../components/Products/Featured.svelte"
    // below is two alternatives for class in Link
    // function getProps(){return {class: "btn btn-primary btn-hero"};}
    // or import {link} from svelte-routing
    // then <a href="/products" class="btn btn-primary btn-hero" use:link>
</script>

<Hero>
    <Link to="/products" class="btn btn-primary btn-hero">shop now</Link>
</Hero>
<Featured title="featured products"></Featured>