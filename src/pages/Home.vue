<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Bienvenido a Joyería Brayan</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h2>Destacados</h2>
      <ion-card>
        <img src="/src/assets/anillo.png" alt="Anillo Plata" class="responsive-img" />
        <ion-card-header>
          <ion-card-title>Anillo Plata</ion-card-title>
        </ion-card-header>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<style scoped>
.responsive-img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}
</style>

<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle } from '@ionic/vue'
</script>
