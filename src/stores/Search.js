import { defineStore } from 'pinia'
//import { Validaciones } from "./Validaciones"
import { ref } from 'vue'
import axios from "axios";
import { route } from 'quasar/wrappers';
import { useRouter } from 'vue-router';

export const Search = defineStore('Search', () => {

    const Email = ref('')
    const Nombre = ref('')
    const UserName = ref('')

    const listaUsuarios = () => {
        let jsonDatos = {
            Email: Email.value,
            Nombre: Nombre.value,
            UserName: UserName.value
          }

        axios.get('https://localhost:7054/api/Contacts/ListaDeUsuarios', jsonDatos).then(res => {
            console.log(res);
        }).catch(function (error) {
            console.log(error)
        })
    }


})