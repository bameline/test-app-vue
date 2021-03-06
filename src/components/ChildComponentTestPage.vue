<template>
    <div>
        <p>This is a child component</p>
        <button v-on:click="sendMessage"> Send message to parent</button>
    </div>
</template>
<style scoped>

</style>
<script lang="ts">
    import Vue from 'vue'
    export default Vue.extend({
        data() {
            return {}},
        methods:{
            sendMessage(){
                this.$emit('custom-event-name', { message: 'Mon message personnalisé' })
            }
        }
    })
</script>
