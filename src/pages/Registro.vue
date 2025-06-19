<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Registro</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-input label="Nombre" v-model="nombre" />
      <ion-input label="Correo" v-model="correo" type="email" />
      <ion-input label="Contraseña" v-model="clave" type="password" />
      <ion-button expand="block" @click="registrarse">Registrarse</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton } from '@ionic/vue'

const nombre = ref('')
const correo = ref('')
const clave = ref('')

function registrarse() {
  alert('Usuario registrado correctamente')
}
</script>
