<template>
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
          to="/feed"
          class="row justify-center items-center"
        >
          <q-icon name="home" />
          <q-item-section @click="leftDrawerOpen = false" class="q-ml-xs">
            Inicio
          </q-item-section>
        </q-item>
        <q-item
          clickable
          v-ripple
          to="/profile"
          class="row justify-center items-center"
        >
          <q-icon name="person" />
          <q-item-section @click="leftDrawerOpen = false" class="q-ml-xs">
            Perfil
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
</template>

<script setup>
const leftDrawerOpen = ref(true);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>