<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Előadások</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <refresher />
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Előadások</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-list>
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
                <ion-item></ion-item>
            </ion-list>
        </ion-content>
        <ion-segment :value="room">
            <ion-segment-button value="1">
                <ion-label>1</ion-label>
            </ion-segment-button>
            <ion-segment-button value="2">
                <ion-label>2</ion-label></ion-segment-button
            >
            <ion-segment-button value="3">
                <ion-label>3</ion-label></ion-segment-button
            >
        </ion-segment>
        <ion-segment :value="day">
            <ion-segment-button value="sat">
                <ion-label>Szombat</ion-label>
            </ion-segment-button>
            <ion-segment-button value="sun">
                <ion-label>Vasárnap</ion-label>
            </ion-segment-button>
        </ion-segment>
    </ion-page>
</template>

<script>
import Refresher from '../components/refresh/Refresher.vue'
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonSegment,
    IonSegmentButton,
    IonLabel,
} from '@ionic/vue'

export default {
    name: 'Presentations',
    components: {
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonPage,
        IonList,
        IonItem,
        Refresher,
        IonSegment,
        IonSegmentButton,
        IonLabel,
    },
    data() {
        return {
            day: 'sat',
            room: '1',
        }
    },
}
</script>

<style>
ion-segment {
    --background: var(--ion-background-color);
}
</style>
