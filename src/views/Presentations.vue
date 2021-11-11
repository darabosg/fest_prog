<template>
<ion-page>
    <main-view title="Előadások">
        <template v-slot:content>
            <ion-item></ion-item>
            <ion-item></ion-item>
            <ion-item></ion-item>
            <ion-item></ion-item>
            <ion-item></ion-item>
            <ion-item></ion-item>
            <ion-item></ion-item>
            <ion-item></ion-item>
            <ion-item></ion-item>
            <ion-item></ion-item>
            <ion-item></ion-item>
            <ion-item></ion-item>
            <ion-item></ion-item>
            <ion-item></ion-item>
            <ion-item></ion-item>
            <ion-item></ion-item>
            <ion-item></ion-item>
            <ion-item></ion-item>
            <ion-item></ion-item>
            <ion-item></ion-item>
            <ion-item></ion-item>
            <ion-item></ion-item>
            <ion-item>last</ion-item>
        </template>

        <template v-slot:options>
            <div class="options">
                <ion-segment :value="selectedRoom" mode="ios">
                    <ion-segment-button
                        v-for="room in presentationRooms"
                        :key="room.name"
                        :value="room.value"
                    >
                        <ion-label>{{ room.name }}</ion-label>
                    </ion-segment-button>
                </ion-segment>
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
    </main-view></ion-page>
</template>

<script>
import MainView from './MainView.vue'
import { IonItem, IonSegment, IonSegmentButton, IonLabel, IonPage } from '@ionic/vue'
import { presentationRooms, days } from '../data/configData'

export default {
    name: 'Presentations',
    components: {
        IonItem,
        IonSegment,
        IonSegmentButton,
        IonLabel,
        MainView,
        IonPage
    },
    data() {
        return {
            presentationRooms,
            days,
            selectedDay: 'sat',
            selectedRoom: '0',
        }
    },
}
</script>
