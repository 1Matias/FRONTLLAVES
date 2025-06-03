<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Barra superior -->
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title> Mi Proyecto </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- Barra lateral -->
    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      bordered
      class="bg-light-blue-10 text-white"
    >
      <q-list>
        <q-item-label header class="text-white">Formularios</q-item-label>
        <q-item clickable v-ripple @click="goTo('/Formulario_Vista_Administrador')">
          <q-item-section avatar>
            <q-icon name="article" />
          </q-item-section>
          <q-item-section>Vista Administrador</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="goTo('/Formulario_Bloque_C_Piso_1')">
          <q-item-section avatar>
            <q-icon name="article" />
          </q-item-section>
          <q-item-section>Bloque C Piso 1</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="goTo('/Formulario_Bloque_C_Piso_2')">
          <q-item-section avatar>
            <q-icon name="article" />
          </q-item-section>
          <q-item-section>Bloque C Piso 2</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="goTo('/Formulario_Bloque_C_Piso_3')">
          <q-item-section avatar>
            <q-icon name="article" />
          </q-item-section>
          <q-item-section>Bloque C Piso 3</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="goTo('/Formulario_Bloque_C_Piso_4')">
          <q-item-section avatar>
            <q-icon name="article" />
          </q-item-section>
          <q-item-section>Bloque C Piso 4</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="goTo('/Formulario_Bloque_C_Piso_5')">
          <q-item-section avatar>
            <q-icon name="article" />
          </q-item-section>
          <q-item-section>Bloque C Piso 5</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <!-- Contenido principal -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const leftDrawerOpen = ref(true)
const router = useRouter()

const goTo = (path) => {
  router.push(path)
}
</script>
