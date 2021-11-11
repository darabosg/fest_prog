<template>
<ion-page>
    <main-view title="Előadók">
        <template v-slot:content>
        </template>
    </main-view></ion-page>
</template>

<script>
import MainView from './MainView.vue'
import {IonPage } from '@ionic/vue'

export default {
    name: 'Presentations',
    components: {
        MainView,
        IonPage
    },
}
</script>
