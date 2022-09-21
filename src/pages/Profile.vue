<template>
  <q-page padding>
    <q-card style="max-width: 500px" class="row q-mx-auto">
      <q-card-section
        class="q-pa-none col-12 col-sm-4 flex justify-center items-center"
      >
        <!--   <form >
          <p>{{form}}</p>
           <q-file v-model="form" name="Archivo" label="Imagen perfil" outlined />
           <q-btn @click.prevent="submitForm" type="submit" label="enviar" color="primary" class=" q-mx-auto" />
        </form> -->
        <div class="colum-flex">
          <q-img :src="imgSrc" v-if="imgSrc" class="img-style" />
          <form>
            <label class="hover-pointer text-primary text-bold" for="imgInput"
              ><span class="material-icons"> file_upload </span>
              Imagen de perfil
            </label>
            <input
              style="display: none"
              id="imgInput"
              class="file-input"
              ref="file"
              type="file"
              @change="getImage"
            />
          </form>
        </div>
      </q-card-section>
      <q-card-section class="q-pa-none col-12 col-sm-8">
        <h5 class="q-ma-sm">Guillermo Mazzari</h5>
        <p class="q-ma-sm">MazzCode</p>
        <p class="q-ma-sm">
          Esta es la seccion donde debe ir la biografia del usuario, bla bla bla
          bla Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <div class="flex items-center justify-between q-pa-sm">
          <q-btn></q-btn>
          <q-btn></q-btn>
          <q-btn></q-btn>
          <q-btn></q-btn>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { LogReg } from "src/stores/LogReg";
import axios from "axios";
const storeLogreg = LogReg();

const imgSrc = ref('../src/assets/avatar.jpg');
const getImage = (e) => {
  console.log(e.target.files[0].name);
  let formData = new FormData();
  formData.append("Archivo", e.target.files[0]);
  storeLogreg.imgPrefil(formData);
  const files = e.target.files;
  if (!files.length) return;

  const reader = new FileReader();
  reader.readAsDataURL(files[0]);
  reader.onload = () => (imgSrc.value = reader.result);
};
/*const form = ref('')

function fromImg(){
   console.log(form.value.name);
}

function makeForm(file) {
   const data = new FormData()
   data.append('Archivo', file.value.name)
   return data
}

async function submitForm () {
   const file = form.value.name
   const url = 'https://localhost:7158/api/Usuario/CargarArchivo'

   await axios.post(url, file)

   console.log(axios.request(Response))
}
*/
</script>


