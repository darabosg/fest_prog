<template>
    <ion-app>
        <ion-content>
            <refresher />
            <ios-install-modal v-if="isIos" />
            <android-install-modal v-if="isAndroid" />
            <ion-router-outlet
        /></ion-content>
    </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet, isPlatform, IonContent } from '@ionic/vue'
import { defineComponent } from 'vue'
import IosInstallModal from './IosInstall.vue'
import AndroidInstallModal from './AndroidInstall.vue'
import Refresher from './Refresher.vue'

export default defineComponent({
    name: 'App',
    components: {
        IonApp,
        IonRouterOutlet,
        IosInstallModal,
        AndroidInstallModal,
        Refresher,
        IonContent,
    },
    computed: {
        isAndroid: function () {
            return isPlatform('android')
        },
        isIos: function () {
            return isPlatform('ios')
        },
    },
})
</script>
