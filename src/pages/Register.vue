<template>
   <q-page padding>
    <div class="row">
      <div class="col-12 col-md-6">
        <q-img
          src='src/assets/register.png'
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
           <q-input type="text" name="Nombre" label="Nombre completo">
            <template v-slot:prepend>
              <q-icon class="text-primary" name="account_circle" />
            </template>
          </q-input>
           <q-input type="text" name="UserName" label="Nombre de usuario">
            <template v-slot:prepend>
              <q-icon class="text-primary" name="account_circle" />
            </template>
          </q-input>
          <q-input type="textarea" name="Bio" label="Biografia">
             <template v-slot:prepend>
              <q-icon class="text-primary" name="feed" />
            </template>
          </q-input>
          <q-input type="password" name="Password" label="Contraseña">
            <template v-slot:prepend>
              <q-icon class="text-primary" name="key" />
            </template>
          </q-input>
           <q-input type="password" name="Password" label="Confirmar contraseña">
            <template v-slot:prepend>
              <q-icon class="text-primary" name="key" />
            </template>
          </q-input>
          <div class=" column justify-around items-center">
             <q-btn
               outline
               rounded
               color="primary"
               label="Crear usuario"
               to="/feed"
               class="q-mt-sm"
             />
             <p class=" q-ma-none q-mt-sm text-primary">¿Ya tines una cuenta? <router-link class=" decoration-none text-bold text-primary" to="/">¡INICIA SESION AQUI!</router-link></p>
          </div>
        </q-form>
      </div>
    </div>
  </q-page>
</template>