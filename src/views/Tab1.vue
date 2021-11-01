<template>
  <ion-page>
    <ion-header v-if="deferredPrompt">
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
        
        Get our free app. It won't take up space on your phone and also works offline!
        
          <ion-button @click="dismiss">Dismiss</ion-button>
          <ion-button @click="install">Install</ion-button>
      
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">XXX</ion-title>
        </ion-toolbar>
      </ion-header>
     <ion-list>
        <ion-item>
          <ion-label>Blueberry</ion-label>
          <ion-toggle slot="start" name="blueberry" checked></ion-toggle>
        </ion-item>
     </ion-list>
      <ExploreContainer name="Tab 1 page" />
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default  {
  name: 'Tab1',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButton },
  
  data() {
    return {
      deferredPrompt: null
    };
  },
  created() {
    window.addEventListener("beforeinstallprompt", e => {
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.deferredPrompt = e;
    });
window.addEventListener("appinstalled", () => {
      this.deferredPrompt = null;
    });
  },
  methods: {
    async dismiss() {
      this.deferredPrompt = null;
    },
    async install() {
      this.deferredPrompt.prompt();
    }
  }
}
</script>