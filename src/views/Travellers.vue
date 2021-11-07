<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Előadók</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <refresher />
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Előadók</ion-title>
                </ion-toolbar>
            </ion-header>
            <!-- <ExploreContainer name="Tab 2 page" /> -->
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
} from '@ionic/vue'

export default {
    name: 'Travellers',
    components: {
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonPage,
        Refresher,
    },
}
</script>
