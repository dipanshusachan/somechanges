<template>
<div>
    <h1 class="asu">ASU CONFIGURATOR</h1>
    <table>
         <thead>
            <tr>
                <th>S.No</th>
                <th>Project Code</th>
                <th>Facility Code</th>
                <th>Project Name</th>
                <th>Client Name</th>
                <th>Facility Name</th>
                <th>Creo Project Code</th>
                <th>Component Library</th>
                <th>Select a Project</th>
            </tr>
        </thead>

         <tbody>
            <tr v-for="product in Form" :key="product.id">
                <td>{{product.id}}</td>
                <td>{{product.projectcode}}</td>
                <td>{{product.facilitycode}}</td>
                <td>{{product.projectname}}</td>
                <td>{{product.clientname}}</td>
                <td>{{product.facilityname}}</td>
                <td>{{product.creoprojectcode}}</td>
                <td>{{product.componentlibrary}}</td>
                <!-- <td class="btn">Edit</td> -->
              <td> <router-link :to="{ name: 'EditQue', params: { id: product.id }}" class="edit">Edit</router-link></td> 
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
// import axios from "axios"
import { onMounted,ref } from 'vue';
export default {
    name: 'FormEdit',
    setup() {
        const Form = ref([]);
        onMounted(async () => {
            const res = await fetch('http://localhost:7000/api/employee/');
            Form.value = await res.json();
            // console.warn(res);
              
        }) 
    //     const del = async (id) => {
    //   await fetch(`http://localhost:3000/Form/${id}`, {
    //     method: 'DELETE'
    //   })
    //   Form.value = Form.value.filter(p => p.id !== id);
    // }
    return { Form }
    }
}
</script>

<style scoped>
table {
    width: 90%;
    max-width: 90%;
    /* background-color: #337ab7; */
    border-collapse: collapse;
    border-top: 1px solid #dee2e6;
    border-left: 1px solid #dee2e6;
    margin-left: auto;
    margin-right: auto;
}
table thead th {
    vertical-align: bottom;
}
th {
    padding: 0.3rem;
    border-bottom: 2px solid #dee2e6;
    border-right: 2px solid #dee2e6;
    color:white;
    background-color: #337ab7;
}
 td{
    padding: 0.3rem;
    border-bottom: 2px solid #dee2e6;
    border-right: 2px solid #dee2e6;
    color:black;
    font-family: 'Open Sans', sans-serif;
}
table td,
table th {
    padding: 0.75rem;
    vertical-align: top;
}
.asu {
    text-align: center;
    font-size: 40px;
    margin: 100px;
}
.list{
    text-align: center;
    font-size: 30px;
    margin: 30px;
}
.edit{
    width: 43%;
    height: 25%;
    margin-left: 21%;
    margin-right: 25%;
    margin-top: 20px;
    padding: 5px 15px;
    font-size: 110%;
    background-color: #2c6779;
    border-radius: 5px;
    text-decoration: none;
    color: black;

}
.edit:hover {
    color: rgb(228, 95, 95);
}
</style>