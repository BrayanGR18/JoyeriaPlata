<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Mi Perfil</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <p>Nombre: Brayan</p>
      <p>Correo: brayan@joyeria.com</p>
      <ion-button expand="block" color="danger">Cerrar Sesión</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue'
</script>
