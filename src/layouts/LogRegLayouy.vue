<template>
    <q-layout view="lHh lpR lFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>    

        <q-toolbar-title>            
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          InstaMazz
        </q-toolbar-title>
        <q-space />
        <p>v5.0</p>
      </q-toolbar>
    </q-header> 

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>





