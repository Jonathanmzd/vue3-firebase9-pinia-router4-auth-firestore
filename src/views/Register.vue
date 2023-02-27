<template>
    <div>
        <h1>Register</h1>
        <form @submit.prevent="handleSubmit">
            <input type="email" name="" id="" placeholder="Ingrese Email" v-model="email">
            <input type="password" name="" id="" placeholder="Ingrese Contraseña" v-model="password">
            <button type="submit" :disabled="userStore.loadingUser">Crear Usuario</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '../stores/user'
// import { useRouter } from 'vue-router'


const userStore = useUserStore()

// const router = useRouter()

const email = ref('a@gmail.com')
const password = ref('123123')

const handleSubmit = async() => {
    if(!email.value || !password.value.length > 6){
        return alert('completar campos')
    }
    await userStore.registerUser(email.value, password.value)
    // router.push('/')
}
</script>