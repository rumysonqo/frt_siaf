<template>
  <q-page>
    <div class="row">
      <div class="col">
        <q-card class="my-card">
          <q-card-section>
            {{ ds_tot['pia'] }}
          </q-card-section>
        </q-card>
      </div>
      <div class="col">
        .col
      </div>
      <div class="col">
        .col
      </div>
      <div class="col">
        .col
      </div>
      <div class="col">
        .col
      </div>
    </div>

  </q-page>

</template>

<script>





import axios from "axios";
let url='http://localhost:3001/api/';
export default{
  setup () {
  },
  mounted(){
    this.get_totales();
  },
  data(){
    return{
      ds_tot:[]
    }
  },

  methods:{
    async get_totales(){
        try {
            let datos=await axios.get(url+'totales')
            this.ds_tot= await datos.data;
        } catch (error) {
            console.log(error);
        }
    }



  }



}

</script>


