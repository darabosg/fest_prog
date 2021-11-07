<template>
    <ion-modal :is-open="showModal" :swipe-to-close="true"
        ><ion-content>
            <ion-header>
                <ion-toolbar>
                    <ion-title>Ios Install</ion-title>
                    <ion-buttons slot="end">
                        <ion-button @click="dismiss"
                            ><ion-icon
                                slot="icon-only"
                                :icon="closeOutline"
                            ></ion-icon> </ion-button
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
            <div class="instructions">
                <p>
                    <ion-text
                        >Egy pár kattintással telepítheted az aplikációt, hogy
                        később könnyebben és akár internet nélkül is használni
                        tudd!</ion-text
                    >
                </p>
                <p>
                    <ion-text color="primary">
                        <ion-icon :icon="shareOutline"></ion-icon> Válaszd a
                        megosztást.
                    </ion-text>
                </p>
                <p>
                    <ion-text color="primary">
                        <ion-icon :icon="addCircleOutline"></ion-icon> Ez után
                        válaszd a "Főképernyőhöz adás" opciót.
                    </ion-text>
                </p>
                <p>
                    <ion-text color="primary">
                        A hozzáadás után az aplikációt megtalálod a főképernyőn!
                    </ion-text>
                </p>
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
import { closeOutline, shareOutline, addCircleOutline } from 'ionicons/icons'

export default defineComponent({
    name: 'IosInstallModal',
    data() {
        return {
            showModal: false,
            closeOutline,
            shareOutline,
            addCircleOutline,
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
    beforeMount() {
        if (!window.navigator.standalone) {
            this.showModal = true
        }
    },
    methods: {
        dismiss() {
            this.showModal = false
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

.if-facebook {
    padding: 2rem;
    text-align: center;
    font-size: 20px;
}
</style>
