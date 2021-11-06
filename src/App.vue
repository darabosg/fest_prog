<template>
    <ion-app>
        <ios-install-modal v-show="isIos" />
        <android-install-modal v-show="isAndroid" />
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
    },
})
</script>
