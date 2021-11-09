<template>
    <ion-app>
        <!-- <ion-content :fullscreen="true"> -->
            <!-- <refresher /> -->
        <ion-content forceOverscroll="false">
            <!-- <ion-header>
                <ion-toolbar>
                    <ion-title size="large">JUF</ion-title>
                </ion-toolbar>
            </ion-header> -->
            <ios-install-modal v-if="isIos" />
            <android-install-modal v-if="isAndroid" />
            <ion-router-outlet
        /></ion-content>
        <!-- </ion-content> -->
    </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet, isPlatform, IonContent } from '@ionic/vue'
import { defineComponent } from 'vue'
import IosInstallModal from './components/install/IosInstall.vue'
import AndroidInstallModal from './components/install/AndroidInstall.vue'
// import Refresher from './components/refresh/Refresher.vue'

export default defineComponent({
    name: 'App',
    components: {
        IonApp,
        IonRouterOutlet,
        IosInstallModal,
        AndroidInstallModal,
        // Refresher,
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
