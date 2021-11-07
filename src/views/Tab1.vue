<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <ion-header>
                <ion-toolbar><ion-title>XXX</ion-title> </ion-toolbar>
            </ion-header>
            <ion-list>
                <ion-item>
                    <ion-label>Blueberry</ion-label>
                    <ion-toggle
                        slot="start"
                        name="blueberry"
                        checked
                    ></ion-toggle>
                </ion-item>
            </ion-list>
            <ExploreContainer name="XXX" />
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
    IonList,
    IonItem,
    IonLabel,
    IonToggle,
} from '@ionic/vue'
import ExploreContainer from '@/components/ExploreContainer.vue'

export default {
    name: 'Tab1',
    components: {
        ExploreContainer,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonPage,
        IonList,
        IonItem,
        IonLabel,
        IonToggle,
    },
}
</script>
