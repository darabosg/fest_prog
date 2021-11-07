<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Kedvencek</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Kedvencek</ion-title>
                </ion-toolbar>
            </ion-header>
            <!-- <ExploreContainer name="Tab 3 page" /> -->
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
    name: 'Favourites',
    components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
}
</script>
