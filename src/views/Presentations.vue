<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Előadások</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Előadások</ion-title>
                </ion-toolbar>
            </ion-header>
            <!-- <ExploreContainer name="222" /> -->
        </ion-content>
    </ion-page>
</template>

<script>
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
} from '@ionic/vue'

export default {
    name: 'Presentations',
    components: {
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonPage,
    },
}
</script>
