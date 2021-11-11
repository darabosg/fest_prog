<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>{{ title }}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <refresher />
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">{{ title }}</ion-title>
                </ion-toolbar>
            </ion-header>
            <slot name="content"></slot>
        </ion-content>

        <slot name="options"></slot>
        <div class="flex">
            <button class="but" @click="navto1">asd</button>
            <button class="but" @click="navto2">asd</button>
            <button class="but" @click="navto3">asd</button>
            <button class="but" @click="navto4">asd</button>
            </div>
    </ion-page>
</template>

<script>
import Refresher from '../components/refresh/Refresher.vue'
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
} from '@ionic/vue'
export default {
    name: 'MainView',
    props: ['title'],
    components: {
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonPage,
        Refresher,
    },
    methods: {
        navto1: function() {
this.$router.replace('/tabs/presentations')
        },
        navto2: function() {
this.$router.replace('/tabs/roundtables')
        },
        navto3: function() {
this.$router.replace('/tabs/travellers')
        },
        navto4: function() {
this.$router.replace('/tabs/favorites')
        },
    }
}
</script>

<style>
.ios .options {
    background-color: var(--ion-background-color);
    z-index: 23;
    padding: 0 1rem;
}

.md .options {
    background-color: var(--ion-color-step-50);
    z-index: 23;
    padding: 0 1rem;
}

ion-segment {
    z-index: 23;
    --background: var(--ion-color-step-100);
    margin: 2px 0;
}


.but {
    height:40px;
    width:60px;
}

.flex {
    display: flex;
    justify-content: space-evenly;
}
</style>
