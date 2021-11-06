<template>
    <ion-app>
        <ios-install-modal v-if="isIos" />
        <android-install-modal v-if="isAndroid" />
        <ion-router-outlet />
    </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet, isPlatform } from '@ionic/vue'
import { defineComponent } from 'vue'
import IosInstallModal from './IosInstall.vue'
import AndroidInstallModal from './AndroidInstall.vue'

export default defineComponent({
    name: 'App',
    components: {
        IonApp,
        IonRouterOutlet,
        IosInstallModal,
        AndroidInstallModal,
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
