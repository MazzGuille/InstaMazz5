<template>
  <q-page padding>
    <div class="row">
      <q-dialog
        no-esc-dismiss
        no-backdrop-dismiss
        v-model="storeLogreg.created"
      >
        <q-card>
          <q-toolbar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg" />
            </q-avatar>

            <q-toolbar-title
              ><span class="text-weight-bold">Insta-Mazz</span>
            </q-toolbar-title>
          </q-toolbar>

          <q-card-section>
            <h5 class="text-primary text-bold q-ma-none">
              ¡USUARIO REGISTRADO CON EXITO!
            </h5>
          </q-card-section>
          <q-card-section class="flex justify-center items-center">
            <q-btn
              @click="moveToLogin()"
              outline
              rounded
              color="primary"
              label="Confirmar"
              class="q-mt-sm"
              to="/"
            />
          </q-card-section>
        </q-card>
      </q-dialog>
      <div class="col-12 col-md-6">
        <q-img
          src="src/assets/register.png"
          spinner-color="primary"
          style="height: 100%; max-width: 100%"
        />
      </div>
      <div class="col-12 col-md-6 q-px-md q-my-auto">
        <q-form>
          <q-input
            v-model="storeLogreg.Email"
            type="email"
            name="Email"
            label="E-Mail"
          >
            <template v-slot:prepend>
              <q-icon class="text-primary" name="email" />
            </template>
          </q-input>
          <q-input
            v-model="storeLogreg.Nombre"
            type="text"
            name="Nombre"
            label="Nombre completo"
          >
            <template v-slot:prepend>
              <q-icon class="text-primary" name="account_circle" />
            </template>
          </q-input>
          <q-input
            v-model="storeLogreg.UserName"
            type="text"
            name="UserName"
            label="Nombre de usuario"
          >
            <template v-slot:prepend>
              <q-icon class="text-primary" name="account_circle" />
            </template>
          </q-input>
          <q-input
            v-model="storeLogreg.BioUsuario"
            type="textarea"
            name="Bio"
            label="Biografia (Opcional)"
          >
            <template v-slot:prepend>
              <q-icon class="text-primary" name="feed" />
            </template>
          </q-input>
          <q-input
            v-model="storeLogreg.Contraseña"
            type="password"
            name="Password"
            label="Contraseña"
          >
            <template v-slot:prepend>
              <q-icon class="text-primary" name="key" />
            </template>
          </q-input>
          <q-input
            v-model="storeLogreg.ConfirmarClave"
            type="password"
            name="ConPassword"
            label="Confirmar contraseña"
          >
            <template v-slot:prepend>
              <q-icon class="text-primary" name="key" />
            </template>
          </q-input>
          <div class="column justify-around items-center">
            <q-btn
              @click.prevent="storeLogreg.CrearUsuario"
              outline
              rounded
              color="primary"
              label="Crear usuario"
              class="q-mt-sm"
            />
            <p class="q-ma-none q-mt-sm text-primary">
              ¿Ya tines una cuenta?
              <router-link class="decoration-none text-bold text-primary" to="/"
                >¡INICIA SESION AQUI!</router-link
              >
            </p>
          </div>
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { LogReg } from "src/stores/LogReg";
const storeLogreg = LogReg();

const moveToLogin = () => {
  storeLogreg.created = false;
  storeLogreg.Email = "";
  storeLogreg.Nombre = "";
  storeLogreg.UserName = "";
  storeLogreg.Contraseña = "";
  storeLogreg.ConfirmarClave = "";
  storeLogreg.BioUsuario = "";
};
</script>

