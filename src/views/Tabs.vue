<template>
<ion-page>
    <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom">
            <ion-tab-button tab="presentations" href="/tabs/presentations">
                <ion-icon :icon="easel" />
                <ion-label>Előadások</ion-label>
            </ion-tab-button>

            <ion-tab-button tab="roundtables" href="/tabs/roundtables">
                <ion-icon :icon="chatbubbles" />
                <ion-label>Kerekasztalok</ion-label>
            </ion-tab-button>

            <ion-tab-button tab="travellers" href="/tabs/travellers">
                <ion-icon :icon="person" />
                <ion-label>Előadók</ion-label>
            </ion-tab-button>

            <ion-tab-button tab="favorites" href="/tabs/favorites">
                <ion-icon :icon="star" />
                <ion-label>Kedvencek</ion-label>
            </ion-tab-button>
        </ion-tab-bar>
    </ion-tabs>
    </ion-page>
</template>

<script>
import {
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonLabel,
    IonIcon,
    IonRouterOutlet,
    IonPage
} from '@ionic/vue'
import { easel, star, person, chatbubbles } from 'ionicons/icons'

export default {
    name: 'Tabs',
    components: {
        IonLabel,
        IonTabs,
        IonTabBar,
        IonTabButton,
        IonIcon,
        IonRouterOutlet,
        IonPage
    setup() {
        return {
            easel,
            person,
            star,
            chatbubbles,
        }
    },
}
</script>
