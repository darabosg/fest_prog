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
                            ></ion-icon></ion-button
                    ></ion-buttons>
                </ion-toolbar>
            </ion-header>
            <h1>asd</h1>
            <ion-button>asd</ion-button></ion-content
        >
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
} from '@ionic/vue'
import { defineComponent } from 'vue'
import { closeOutline } from 'ionicons/icons'

export default defineComponent({
    name: 'IosInstallModal',
    data() {
        return {
            showModal: false,
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
