<template>
  <q-page padding>
    <div class="row">
      <div class="col-12 col-md-6">
        <q-img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          spinner-color="primary"
          style="height: 100%; max-width: 100%"
        />
      </div>
      <div class="col-12 col-md-6 q-px-md q-my-auto">
        <q-form>
          <q-input type="email" name="Email" label="E-Mail">
            <template v-slot:prepend>
              <q-icon class="text-primary" name="email" />
            </template>
          </q-input>
          <q-input type="password" name="Password" label="Contraseña">
            <template v-slot:prepend>
              <q-icon class="text-primary" name="key" />
            </template>
          </q-input>
          <div class=" column justify-around items-center">
             <q-btn
               outline
               rounded
               color="primary"
               label="Iniciar Sesion"
               to="/feed"
               class="q-mt-sm"
             />
             <p class=" q-ma-none q-mt-sm text-primary">¿Aun no tinees una cuenta? <router-link class=" decoration-none text-bold text-primary" to="/register">¡CREA UNA AQUI!</router-link></p>
          </div>
        </q-form>
      </div>
    </div>
  </q-page>
</template>