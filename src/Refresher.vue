<template>
    <ion-refresher
        slot="fixed"
        @ionRefresh="doRefresh"
        pull-factor="0.5"
        pull-min="100"
        pull-max="500"
        close-duration="300ms"
    >
        <ion-refresher-content
            :pulling-icon="chevronDownCircleOutline"
            pulling-text="Pull to refresh"
            refreshing-spinner="circles"
            refreshing-text="Refreshing..."
        >
        </ion-refresher-content>
    </ion-refresher>
    <ion-toast
        :is-open="updateExists"
        message="Friss tartalom érkezett, húzd lefele, vagy nyomj a frissítésre!"
        :buttons="button"
    >
        <ion-icon slot="icon-only" :icon="refreshOutline"></ion-icon>
    </ion-toast>
</template>

<script>
import {
    IonRefresher,
    IonRefresherContent,
    IonToast,
    IonIcon,
} from '@ionic/vue'
import { chevronDownCircleOutline, refreshOutline } from 'ionicons/icons'
export default {
    components: {
        IonRefresher,
        IonRefresherContent,
        IonToast,
        IonIcon,
    },
    data() {
        return {
            chevronDownCircleOutline,
            refreshOutline,
            // refresh variables
            refreshing: false,
            registration: null,
            updateExists: false,

            button: [{side: 'end',
              icon: refreshOutline,
              text: '',
              handler: this.doRefresh}]
        }
    },
    created() {
        // Listen for our custom event from the SW registration
        document.addEventListener('swUpdated', this.updateAvailable, {
            once: true,
        })

        // Prevent multiple refreshes
        navigator.serviceWorker.addEventListener('controllerchange', () => {
            if (this.refreshing) return
            this.refreshing = true
            // Here the actual reload of the page occurs
            window.location.reload()
        })
    },
    methods: {
        updateAvailable(event) {
            this.registration = event.detail
            this.updateExists = true
        },
        doRefresh() {
            if (!this.updateExists) {
                setTimeout(() => {
                    window.location.reload()
                }, 300)
            }
            this.updateExists = false
            // Make sure we only send a 'skip waiting' message if the SW is waiting
            if (!this.registration || !this.registration.waiting) return
            // send message to SW to skip the waiting and activate the new SW
            this.registration.waiting.postMessage({ type: 'SKIP_WAITING' })
        },
    },
}
</script>
