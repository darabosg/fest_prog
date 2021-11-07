<template>
    <ion-modal :is-open="deferredPrompt">
        <ion-content>
            <ion-header>
                <ion-toolbar>
                    <ion-title>Android Install</ion-title>
                    <ion-button @click="dismiss" size="medium" slot="end"
                        >XX</ion-button
                    >
                </ion-toolbar>
            </ion-header>
                <ion-button @click="install">Install</ion-button>
        </ion-content>
    </ion-modal>
</template>

<script>
import {
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonModal,
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
    created() {
        window.addEventListener('beforeinstallprompt', e => {
            e.preventDefault()
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
    computed: {
        isFacebook: function () {
            var ua = navigator.userAgent || navigator.vendor || window.opera
            return ua.indexOf('FBAN') > -1 || ua.indexOf('FBAV') > -1
        },
    }
})
</script>
