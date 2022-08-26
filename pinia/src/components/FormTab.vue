<template>
<div>
    <h1 class="asu">ASU CONFIGURATOR</h1>
    <h5 class="pr">List of all Projects</h5>
    <table>
        <thead class="head">
            <tr>
                <th>S.No</th>
                <th>Project Code</th>
                <th>Facility Code</th>
                <th>Project Name</th>
                <th>Client Name</th>
                <th>Facility Name</th>
                <th>Creo Project Code</th>
                <th>Component Library</th>
                <th>Project Status</th>
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
                <td>{{product.projectstatus}}</td>
            </tr>
        </tbody>
    </table>
    <!-- {{product.clientname}} -->
</div>
</template>

<script>
// import axios from "axios"
import { onMounted,ref } from 'vue';
export default {
    name: 'FormTab',
    setup() {
        const Form = ref([]);
        onMounted(async () => {
            const res = await fetch('http://localhost:7000/api/employee/');
            Form.value = await res.json();
            console.warn(res);
        })
        return { Form }
    }
};
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
    background-color: #337ab7;
    color: white;
    font-family: 'Open Sans', sans-serif;
}
td{
    padding: 0.3rem;
    border-bottom: 2px solid #dee2e6;
    border-right: 2px solid #dee2e6;
    color: black;  
    
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

.pr {
    text-align: center;
    font-size: 30px;
    margin: 30px;
    color: black;
}

</style>
