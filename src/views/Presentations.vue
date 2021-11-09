<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Előadások</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content forceOverscroll="false">
            <!-- <ion-content> -->
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
                <ion-item>last</ion-item>
            </ion-list>
        </ion-content>
        <!-- <ion-footer slot="fixed"> -->
        <!-- <ion-toolbar> -->
            <!-- <ion-content slot='bottom'>  -->
                <div class="asd">
            <ion-segment :value="room" mode="ios">
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
            <!-- </ion-toolbar> -->
            <!-- <ion-toolbar> -->
            <ion-segment :value="day" mode="ios">
                <ion-segment-button value="sat">
                    <ion-label>Szombat</ion-label>
                </ion-segment-button>
                <ion-segment-button value="sun">
                    <ion-label>Vasárnap</ion-label>
                </ion-segment-button>
            </ion-segment></div>
        <!-- </ion-content> -->
       

        <!-- </ion-toolbar> -->

        <!-- </ion-footer> -->

        <!-- </ion-content> -->
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
    // IonFooter
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
        // IonFooter
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

.ios .asd {
    background-color:var(--ion-background-color);
    z-index: 23;
    padding: 0 1rem;
}

.md .asd {
    background-color:var(--ion-color-step-50);
    z-index: 23;
    padding: 0 1rem;
}

ion-segment {
    z-index: 23;
    --background: var(--ion-color-step-100);
    margin:2px 0;
}
</style>
