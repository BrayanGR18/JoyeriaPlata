<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Iniciar Sesión</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-input label="Correo" type="email" v-model="email" />
      <ion-input label="Contraseña" type="password" v-model="password" />
      <ion-button expand="block" @click="iniciarSesion">Entrar</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton } from '@ionic/vue'

const email = ref('')
const password = ref('')

function iniciarSesion() {
  alert(`Iniciando sesión como ${email.value}`)
}
</script>
