<template>
        <main-view title="Előadások">
            <template v-slot:content>
                <ion-item>
                <ion-img src='https://www.jaratlanutakon.hu/wp-content/uploads/2021/09/Balint-F.-Gyula-kmtd-expedicio-2.jpg'>
                </ion-img >

                </ion-item>
                <ion-item>
                <a href='https://www.jaratlanutakon.hu/'>
                linklink
                </a>
                </ion-item>
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
        </main-view>
</template>

<script>
import MainView from './MainView'
import {
    IonItem,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonImg
    
} from '@ionic/vue'
import { presentationRooms, days } from '../data/configData'

export default {
    name: 'Presentations',
    components: {
        IonItem,
        IonSegment,
        IonSegmentButton,
        IonLabel,
        MainView,
        IonImg
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
