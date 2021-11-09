<template>
    <main-view title="Előadók">
        <template v-slot:content>
        </template>
    </main-view>
</template>

<script>
import MainView from './MainView.vue'
// import { IonItem, IonSegment, IonSegmentButton, IonLabel } from '@ionic/vue'

export default {
    name: 'Presentations',
    components: {
        MainView,
    },
}
</script>
