<template>
        <main-view title="Kerekasztalok">
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
                            v-for="room in roundTableRooms"
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
        </main-view>
</template>

<script>
import MainView from './MainView'
import {
    IonItem,
    IonSegment,
    IonSegmentButton,
    IonLabel,
} from '@ionic/vue'
import { roundTableRooms, days } from '../data/configData'

export default {
    name: 'RoundTables',
    components: {
        IonItem,
        IonSegment,
        IonSegmentButton,
        IonLabel,
        MainView,
    },
    data() {
        return {
            roundTableRooms,
            days,
            selectedDay: 'sat',
            selectedRoom: '3',
        }
    },
}
</script>
