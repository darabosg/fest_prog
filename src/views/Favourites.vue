<template>
    <main-view title="Kedvencek">
        <template v-slot:content> </template>
        <template v-slot:options>
            <div class="options">
                <ion-segment :value="selectedDay" mode="ios">
                    <ion-segment-button
                        v-for="day in days"
                        :key="day.name"
                        :value="day.value"
                    >
                        <ion-label>{{ day.name }}</ion-label>
                    </ion-segment-button>
                </ion-segment>
            </div>
        </template>
    </main-view>
</template>

<script>
import MainView from './MainView'
import { days } from '../data/configData'
import { IonSegment, IonSegmentButton, IonLabel } from '@ionic/vue'

export default {
    name: 'Favorites',
    components: {
        MainView,
        IonSegmentButton,
        IonSegment,
        IonLabel,
    },
    data() {
        return {
            selectedDay:'sat',
            days,
        }
    },
}
</script>
