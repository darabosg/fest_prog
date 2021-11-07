<template>
    <ion-modal :is-open="showModal" :swipe-to-close="true"
        ><ion-content>
            <ion-header>
                <ion-toolbar>
                    <ion-title>Ios Install</ion-title>
                    <ion-button @click="dismiss" size="medium" slot="end"
                        >XX</ion-button
                    >
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
} from '@ionic/vue'
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'IosInstallModal',
    data() {
        return {
            showModal: false,
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
