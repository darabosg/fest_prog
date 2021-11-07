<template>
    <ion-app>
        <refresher />
        <ios-install-modal v-if="isIos" />
        <android-install-modal v-if="isAndroid" />
        <ion-header v-if="isFacebook">facebook</ion-header>
        <ion-router-outlet />
    </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet, isPlatform, IonHeader } from '@ionic/vue'
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
        IonHeader,
        Refresher,
    },
    mounted() {
        this.$nextTick(function () {
            // Code that will run only after the
            // entire view has been rendered
        })
    },
    computed: {
        isAndroid: function () {
            return isPlatform('android')
        },
        isIos: function () {
            return isPlatform('ios')
        },
        isFacebook: function () {
            var ua = navigator.userAgent || navigator.vendor || window.opera
            return ua.indexOf('FBAN') > -1 || ua.indexOf('FBAV') > -1
        },
    },
})
</script>
