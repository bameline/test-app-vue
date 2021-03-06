<template>
    <div >
        <slot name="top"></slot>
        <div>inbetween slots</div>
        <slot name="bottom"></slot>
        <slot name="defqult">this is defqult slot</slot>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>