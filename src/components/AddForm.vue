
<template>
    <a-form name="addForm" autocomplete="off" layout="vertical" :model="formState" @finish="onFinish">
        <a-form-item name="url" label="Ingrese una URL" :rules="[{required:true, whitespace: true, pattern: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/, message:'ingresa un email valido'}]">
            <a-input v-model:value="formState.url"></a-input>
        </a-form-item>
        <a-form-item>
            <a-button type="primary" html-type="submit" :loading="databaseStore.loading" :disabled="databaseStore.loading">Agregar Url</a-button>
        </a-form-item>
    </a-form>
</template>

<script setup>
import { reactive } from 'vue';
import { useDatabaseStore } from '../stores/database';
import { message } from "ant-design-vue";

const databaseStore = useDatabaseStore()

const formState = reactive({
    url: ''
})

const onFinish = async (value) => {
    console.log('todo correcto' + value)
    const error =  await databaseStore.addUrl(formState.url)
    if (!error) {
        formState.url = ""
        return message.success('Url Agregada')
    }

    switch(error){
        // Buscar errores
        default:
            message.error('Ocurrio un error en el servidor.')
            break;
    }
}
</script>