<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Előadások</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
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
                <ion-item></ion-item>F
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
        <ion-toolbar>
            <ion-segment value="4">
                <ion-segment-button value="4">
                    <ion-label>4</ion-label>
                </ion-segment-button>
                <ion-segment-button value="5">
                    <ion-label>5</ion-label></ion-segment-button
                >
                <ion-segment-button value="6">
                    <ion-label>6</ion-label></ion-segment-button
                >
            </ion-segment>
        </ion-toolbar>
        <ion-toolbar>
            <!-- //TODO: it could change to "sun" on sunday for default -->
            <ion-segment value="sat">
                <ion-segment-button value="sat">
                    <ion-label>Szombat</ion-label>
                </ion-segment-button>
                <ion-segment-button value="sun">
                    <ion-label>Vasárnap</ion-label>
                </ion-segment-button>
            </ion-segment>
        </ion-toolbar>
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
    name: 'RoundTables',
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
}
</script>
