<template>
  <q-page>

    <div class="q-pa-md shadow-5">
        <div class="row">
          <div class="col">
            <q-select
             outlined
             v-model="cod_fte"
             :options="ds_fuentes"
             option-label="fuente"
             option-value="codigo"
             label="Fuentes"
             style="min-width: 450px; max-width: 600px"
             @change="get_rep_prg_fte()" />
          </div>
        </div>
    </div>

    <div class="q-pa-md shadow-5">

    <q-table
      title="Ejecución presupuestal 2022"
      :rows="ds_datos"
      :columns="ds_titulo"
      row-key="name"
      :separator="sepa"
      bordered
      square
      title-class="text-bold text-blue-9"
      table-class="bg-grey-2 text-blue-10"
      table-style="border: 1px solid text-blue-10;"
      table-header-style="height: 65px;"
      table-header-class="bg-blue-9 text-white"
      :pagination="initialPagination"
    />
    </div>

  </q-page>

</template>


<script>
import axios from "axios";
let url='http://localhost:3001/api/';
export default{
  setup () {
    return {
      initialPagination: {
        sortBy: 'desc',
        descending: false,
        page: 1,
        rowsPerPage: 10
      },
    }
  },
  mounted(){
    this.get_rep_prg_fte();
    this.get_fuentes();
  },
  data(){
    return{
      sepa:'cell',
      cod_fte:'',
      ds_fuentes:[],
      ds_datos:[],
      ds_titulo: [
      { name: 'programa', align: 'left', label: 'PROGRAMA', field: 'programa', sortable: true, headerStyle: {fontSize: '1.2em'},style: {fontSize: '1em'}},
      { name: 'fuente', align: 'left', label: 'FUENTE', field: 'fuente', sortable: true,headerStyle: {fontSize: '1.2em'},style: {fontSize: '1em'} },
      { name: 'pia', align: 'right', label: 'PIA', field: 'pia', format:val=>parseFloat(val).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),headerStyle: {fontSize: '1.2em'}, style: {fontSize: '1em'}},
      { name: 'pim', align: 'right', label: 'PIM', field: 'pim',format:val=>parseFloat(val).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),headerStyle: {fontSize: '1.2em'},style: {fontSize: '1em'} },
      { name: 'certificado',align: 'right', label: 'CERTIFICADO', field: 'certificado',format:val=>parseFloat(val).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),headerStyle: {fontSize: '1.2em'},style: {fontSize: '1em'} },
      { name: 'devengado', align: 'right', label: 'DEVENGADO', field: 'devengado', sortable: true,format:val=>parseFloat(val).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),headerStyle: {fontSize: '1.2em'}, style: {fontSize: '1em'}},
      { name: 'saldo', align: 'right', label: 'SALDO', field: 'saldo', sortable: true,format:val=>parseFloat(val).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),headerStyle: {fontSize: '1.2em'}, style: {fontSize: '1em'}},
      { name: 'avance', align: 'right', label: '% EJEC.', field: 'avance', sortable: true,format:val=>parseFloat(val).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),headerStyle: {fontSize: '1.2em'}, style: {fontSize: '1.2em'}},
    ]
    }
  },

  methods:{
    async get_rep_prg_fte(){
        try {
            let datos=await axios.get(url+'rep_prog_fte/'+this.cod_fte)
            this.ds_datos= await datos.data;
            console.log(this.cod_fte);
        } catch (error) {
            console.log(error);
        }
    },
    async get_fuentes(){
        try {
            let datos=await axios.get(url+'fuentes')
            this.ds_fuentes= await datos.data;
        } catch (error) {
            console.log(error);
        }
    }



  }



}

</script>


