<template>
    <ion-modal :is-open="deferredPrompt">
        <ion-content>
            <ion-header>
                <ion-toolbar>
                    <ion-title>Android Install</ion-title>
                    <ion-buttons slot="end">
                        <ion-button @click="dismiss"
                            ><ion-icon
                                slot="icon-only"
                                :icon="closeOutline"
                            ></ion-icon></ion-button
                    ></ion-buttons>
                </ion-toolbar>
            </ion-header>
            <div v-if="isFacebook" class="if-facebook">
                <p>
                    <ion-text
                        >Úgy tűnik hogy a linket facebookról nyitottad meg. hogy
                        telepíteni tudd az aplikációt, kérlek nyist meg
                        böngészőben!</ion-text
                    >
                </p>
            </div>
            <div v-else class="instructions">
                <p>
                    <ion-text
                        >Egy pár kattintással telepítheted az aplikációt, hogy
                        később könnyebben és akár internet nélkül is használni
                        tudd!</ion-text
                    >
                </p>
                <ion-button @click="install">Telepítés</ion-button>
            </div>
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
    IonButtons,
    IonIcon,
    IonText,
} from '@ionic/vue'
import { defineComponent } from 'vue'
import { closeOutline } from 'ionicons/icons'

export default defineComponent({
    name: 'AndroidInstallModal',
    data() {
        return {
            deferredPrompt: null,
            closeOutline,
        }
    },
    components: {
        IonContent,
        IonHeader,
        IonTitle,
        IonToolbar,
        IonModal,
        IonButton,
        IonButtons,
        IonIcon,
        IonText,
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
            this.deferredPrompt.userChoice.then(() => {
                this.deferredPrompt = null
            })
        },
    },
    computed: {
        isFacebook: function () {
            var ua = navigator.userAgent || navigator.vendor || window.opera
            return ua.indexOf('FBAN') > -1 || ua.indexOf('FBAV') > -1
        },
    },
})
</script>

<style>
.instructions {
    padding: 2rem;
    text-align: center;
    font-size: 20px;
}
</style>
