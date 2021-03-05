// ./components/HomeLink.vue
<script>
import NavLink from "./NavLink.vue"
export default {
	name: 'HomeLink',
    components:{
        NavLink
    }
}
</script>

<template>
    <div>
        <NavLink url="/" text="Accueil" />
        <NavLink url="/about" text="À propos" />
        <NavLink url="/contact" text="Contact" />
    </div>
</template>

<style>
	a {
		text-decoration: none;
	}
</style>