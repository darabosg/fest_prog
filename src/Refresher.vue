<template>
    <ion-content>
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
    </ion-content>
</template>

<script>
import { IonContent, IonRefresher, IonRefresherContent } from '@ionic/vue'
import { chevronDownCircleOutline } from 'ionicons/icons'
export default {
    components: { IonContent, IonRefresher, IonRefresherContent },
    setup() {
        const doRefresh = () => {
            window.location.reload()
        }
        return { chevronDownCircleOutline, doRefresh }
    },
}
</script>
