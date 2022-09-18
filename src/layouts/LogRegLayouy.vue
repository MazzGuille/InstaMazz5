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
        <div class="flex justify-center items-center" style="height: 32px">
          <p class=" q-ma-none">v5.0</p>
        </div>
      </q-toolbar>
    </q-header> 

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>





