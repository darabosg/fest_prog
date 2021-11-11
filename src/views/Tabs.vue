<template>
    <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom">
            <ion-tab-button @click="navto1" tab="presentations"  href="/tabs/presentations">
                <ion-icon :icon="easel" />
                <ion-label>Előadások</ion-label>
            </ion-tab-button>

            <ion-tab-button @click="navto1" tab="roundtables" href="/tabs/roundtables">
                <ion-icon :icon="chatbubbles" />
                <ion-label>Kerekasztalok</ion-label>
            </ion-tab-button>

            <ion-tab-button @click="navto1" tab="travellers" href="/tabs/travellers">
                <ion-icon :icon="person" />
                <ion-label>Előadók</ion-label>
            </ion-tab-button>

            <ion-tab-button @click="navto1" tab="favorites" href="/tabs/favorites">
                <ion-icon :icon="star" />
                <ion-label>Kedvencek</ion-label>
            </ion-tab-button>
        </ion-tab-bar>
    </ion-tabs>
</template>

<script>
import {
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonLabel,
    IonIcon,
    IonRouterOutlet,
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
    },
    data() {
        return {
            easel,
            person,
            star,
            chatbubbles,
        }
    },methods: {
        navto1: function() {
this.$router.replace('/tabs/presentations')
        },
        navto2: function() {
this.$router.replace('/tabs/roundtables')
        },
        navto3: function() {
this.$router.replace('/tabs/travellers')
        },
        navto4: function() {
this.$router.replace('/tabs/favorites')
        },
    }
}
</script>
