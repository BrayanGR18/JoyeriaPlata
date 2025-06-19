<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Carrito</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-list>
        <ion-item v-for="item in carrito" :key="item.id">
          <ion-label>{{ item.nombre }} - ${{ item.precio }}</ion-label>
        </ion-item>
      </ion-list>
      <ion-button expand="block" color="success">Finalizar Compra</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButton } from '@ionic/vue'

const carrito = ref([
  { id: 1, nombre: 'Anillo Plata', precio: 500 }
])
</script>
