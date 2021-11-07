<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/presentations">
          <ion-icon :icon="easel" />
          <ion-label>Előadások</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/tabs/travellers">
          <ion-icon :icon="person" />
          <ion-label>Előadók</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" href="/tabs/favourites">
          <ion-icon :icon="star" />
          <ion-label>Kedvencek</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { easel, star, person } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      easel, 
      person, 
      star,
    }
  }
}
</script>