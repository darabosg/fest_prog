<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <ion-header>
                <ion-toolbar
                    ><ion-title>YYY</ion-title>
                    <ion-button v-if="deferredPrompt" @click="dismiss"
                        >Dismiss</ion-button
                    >
                    <ion-button v-if="deferredPrompt" @click="install"
                        >Install</ion-button
                    ></ion-toolbar
                >
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
            <ExploreContainer name="555" />
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
    IonButton,
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
        IonButton,
        IonList,
        IonItem,
        IonLabel,
        IonToggle,
    },

    data() {
        return {
            deferredPrompt: null,
        }
    },
    created() {
        window.addEventListener('beforeinstallprompt', e => {
            e.preventDefault()
            // Stash the event so it can be triggered later.
            this.deferredPrompt = e
        })
        window.addEventListener('appinstalled', () => {
            this.deferredPrompt = null
        })
    },
    methods: {
        async dismiss() {
            this.deferredPrompt = null
        },
        async install() {
            this.deferredPrompt.prompt()
        },
    },
}
</script>
