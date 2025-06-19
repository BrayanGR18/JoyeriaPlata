<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Detalle del Producto</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h2>{{ producto.nombre }}</h2>
      <p>Precio: ${{ producto.precio }}</p>
      <ion-button @click="agregarAlCarrito">Agregar al carrito</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue'

const route = useRoute()
const producto = ref({ nombre: 'Producto', precio: 0 })

// Aquí puedes conectar con API o usar mock
if (route.params.id === '1') producto.value = { nombre: 'Anillo Plata', precio: 500 }
if (route.params.id === '2') producto.value = { nombre: 'Collar Plata', precio: 1200 }

function agregarAlCarrito() {
  alert('Producto agregado al carrito!')
}
</script>
