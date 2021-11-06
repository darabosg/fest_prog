<template>
    <ion-modal :is-open="deferredPrompt" @didDismiss="setOpen(false)">
        <ion-header>
            <ion-toolbar>
                <ion-title>Android Install</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <ion-button  @click="dismiss"
                >Dismiss</ion-button
            >
            <ion-button  @click="install"
                >Install</ion-button
            >
        </ion-content></ion-modal
    >
</template>

<script>
import {
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonModal,
    isPlatform,
    IonButton,
} from '@ionic/vue'
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'AndroidInstallModal',
    data() {
        return {
            deferredPrompt: null,
        }
    },
    components: {
        IonContent,
        IonHeader,
        IonTitle,
        IonToolbar,
        IonModal,
        IonButton,
    },
    computed: {
        isAndroid: function () {
            return isPlatform('android')
        },
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
            this.deferredPrompt.userChoice.then(choiceResult => {
                if (choiceResult.outcome === 'accepted') {
                    alert('User accepted the prompt')
                } else {
                    alert('User dismissed the prompt')
                }
                this.deferredPrompt = null
            })
        },
    },
})
</script>
