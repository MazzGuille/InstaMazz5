<template>
  <q-layout view="lHh lpR lFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-item clickable v-ripple to="/inner/feed">
          <q-item-section>
            <q-toolbar-title class="text-grey-1">
              <q-avatar>
                <img
                  src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
                />
              </q-avatar>
              InstaMazz
            </q-toolbar-title>
          </q-item-section>
        </q-item>
        <q-space />
        <router-link
          class="
            decoration-none
            text-bold text-negative
            flex
            justify-center
            items-center
            text-weight-bold
            text-body1
            text-white
          "
          to="/"
        >
          <q-icon size="md" color="negative" name="meeting_room" />
          Salir
        </router-link>
      </q-toolbar>
    </q-header>

    <q-drawer
      :width="125"
      v-model="leftDrawerOpen"
      side="left"
      elevated
      class="text-primary"
    >
      <q-list padding>
        <q-item
          clickable
          v-ripple
          to="/inner/feed"
          class="row justify-center items-center"
        >
          <q-icon size="sm" left name="home" />
          <q-item-section @click="leftDrawerOpen = false" class="q-ml-xs">
            Inicio
          </q-item-section>
        </q-item>
        <q-item
          clickable
          v-ripple
          to="/inner/profile"
          class="row justify-center items-center"
        >
          <q-icon size="sm" left name="person" />
          <q-item-section @click="leftDrawerOpen = false" class="q-ml-xs">
            Perfil
          </q-item-section>
        </q-item>
        <q-item
          clickable
          v-ripple
          to="/inner/chat"
          class="row justify-center items-center"
        >
          <q-icon size="sm" left name="question_answer" />
          <q-item-section @click="leftDrawerOpen = false" class="q-ml-xs">
            Chat
          </q-item-section>
        </q-item>
        <q-item
          clickable
          v-ripple
          to="/inner/search"
          class="row justify-center items-center"
        >
          <q-icon size="sm" left name="search" />
          <q-item-section @click="leftDrawerOpen = false" class="q-ml-xs">
            Buscar
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
//import Drawer from 'components/Drawer.vue'

const leftDrawerOpen = ref(false);
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>