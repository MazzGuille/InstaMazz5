<template>
  <q-page padding>
    <!--    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.storeSearch.Email}}
        {{ item.storeSearch.Nombre}}
        {{ item.storeSearch.UserName}}
      </li>      
    </ul>-->
    <q-btn @click.prevent="storeSearch.listaUsuarios" label="test" />
  </q-page>
</template>

<script setup>
import { ref } from "vue";

import { Search } from "src/stores/Search";
const storeSearch = Search();

import { LogReg } from "src/stores/LogReg";
const storeLogreg = LogReg();
</script>
