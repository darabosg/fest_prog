<template>
    <ion-modal :is-open="isInstallable" @didDismiss="setOpen(false)">
        <ion-header>
            <ion-toolbar>
                <ion-title>Ios Install</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            {{ content }}
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
} from '@ionic/vue'
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'IosInstallModal',
    data() {
        return {
            showModal: this.isInstallable
        }
    },
    components: { IonContent, IonHeader, IonTitle, IonToolbar, IonModal },
    computed: {
        isInstallable: function () {
            return !window.navigator.standalone
        },
    },
})
</script>
