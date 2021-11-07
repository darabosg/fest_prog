<template>
    <!-- <ion-content> -->
    <!-- <ion-refresher
            slot="fixed"
            pull-factor="0.5"
            pull-min="100"
            pull-max="200"
        >
            <ion-refresher-content></ion-refresher-content>
        </ion-refresher> -->

    <ion-refresher slot="fixed" @ionRefresh="doRefresh">
        <ion-refresher-content
            :pulling-icon="chevronDownCircleOutline"
            pulling-text="Pull to refresh"
            refreshing-spinner="circles"
            refreshing-text="Refreshing..."
        >
        </ion-refresher-content>
    </ion-refresher>
    <!-- </ion-content> -->
    <ion-toast
        :is-open="updateExists"
        message="New content! Pull down to refresh."
        @didDismiss="setOpen(false)"
    >
    </ion-toast>
</template>

<script>
import { IonRefresher, IonRefresherContent, IonToast } from '@ionic/vue'
import { chevronDownCircleOutline } from 'ionicons/icons'
export default {
    components: { IonRefresher, IonRefresherContent, IonToast },
    data() {
        return {
            chevronDownCircleOutline,
            // refresh variables
            refreshing: false,
            registration: null,
            updateExists: false,
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
                window.location.reload()
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
