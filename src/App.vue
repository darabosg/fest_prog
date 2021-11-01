<template>
  <ion-app>
    <ion-header
        v-if="deferredPrompt"
      >
        Get our free app. It won't take up space on your phone and also works offline!
        
        <template v-slot:actions>
          <ion-button text @click="dismiss">Dismiss</ion-button>
          <ion-button text @click="install">Install</ion-button>
        </template>
      </ion-header>
    <ion-router-outlet />
  </ion-app>
</template>

<script>
import { IonApp, IonButton, IonRouterOutlet, IonHeader } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    IonButton,
    IonHeader
  },
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
});
</script>