<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Catálogo</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-list>
        <ion-item v-for="producto in productos" :key="producto.id" :router-link="`/detalle/${producto.id}`">
          <ion-label>
            {{ producto.nombre }} - ${{ producto.precio }}
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel } from '@ionic/vue'

const productos = [
  { id: 1, nombre: 'Anillo Plata', precio: 500 },
  { id: 2, nombre: 'Collar Plata', precio: 1200 }
]
</script>
