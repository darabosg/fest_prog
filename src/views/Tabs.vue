<template>
    <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom">
            <ion-tab-button
                @click="navToPrez"
                tab="presentations"
                href="/tabs/presentations"
            >
                <ion-icon :icon="easel" />
                <ion-label>Előadások</ion-label>
            </ion-tab-button>

            <ion-tab-button
                @click="navToRound"
                tab="roundtables"
                href="/tabs/roundtables"
            >
                <ion-icon :icon="chatbubbles" />
                <ion-label>Kerekasztalok</ion-label>
            </ion-tab-button>

            <ion-tab-button
                @click="navToTrav"
                tab="travellers"
                href="/tabs/travellers"
            >
                <ion-icon :icon="person" />
                <ion-label>Előadók</ion-label>
            </ion-tab-button>

            <ion-tab-button
                @click="navToFav"
                tab="favorites"
                href="/tabs/favorites"
            >
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
    },
    methods: {
        navToPrez: function () {
            this.$router.replace('/tabs/presentations')
        },
        navToRound: function () {
            this.$router.replace('/tabs/roundtables')
        },
        navToTrav: function () {
            this.$router.replace('/tabs/travellers')
        },
        navToFav: function () {
            this.$router.replace('/tabs/favorites')
        },
    },
}
</script>
