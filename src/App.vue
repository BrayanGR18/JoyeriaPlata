<template>
  <ion-menu content-id="main-content">
    <ion-header>
       <ion-toolbar color="primary">
          <ion-title>Joyería</ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-content>
       <ion-list>
          <ion-menu-toggle auto-hide="true" v-for="item in menuItems" :key="item.title">
            <ion-item :router-link="item.url" router-direction="root" lines="none">
              <ion-icon :icon="item.icon" slot="start" />
              <ion-label>{{ item.title }}</ion-label>
            </ion-item>
          </ion-menu-toggle>
        </ion-list>
    </ion-content>
  </ion-menu>

  <ion-page id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding"> Tap the button in the toolbar to open the menu. </ion-content>
  </ion-page>
   <!-- Contenido principal -->
    <ion-router-outlet id="main-content" />
</template>

<script setup>
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonMenuToggle,
  IonRouterOutlet,
  IonIcon
} from '@ionic/vue'

import { home, list, cart, person, logIn, logOut } from 'ionicons/icons'

const menuItems = [
  { title: 'Inicio', url: '/', icon: home },
  { title: 'Catálogo', url: '/catalogo', icon: list },
  { title: 'Carrito', url: '/carrito', icon: cart },
  { title: 'Perfil', url: '/perfil', icon: person },
  { title: 'Iniciar Sesión', url: '/login', icon: logIn },
  { title: 'Registro', url: '/registro', icon: logOut }
]
</script>