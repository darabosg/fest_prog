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
    },
}
</script>
