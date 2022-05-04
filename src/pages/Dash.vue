<template>
  <q-page>
  <div class="q-pa-md shadow-5 q-gutter-sm">
    <div class="row">
      <div class="col">
        <q-card class="bg-red-9 shadow-5 text-white">
          <q-card-section>

          <div class="text-h6"> <q-icon name="payments" size="32px" /> PIA  </div>
          <div class="text-subtitle2">Presupuesto Institucional de apertura</div>
          <q-separator dark inset />
          <div class="text-h5 text-weight-bolder text-center">S/. {{ parseFloat(this.dat_pia).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col q-gutter-sm">
        <q-card class="bg-indigo-12 shadow-5 text-white">
          <q-card-section>
          <div class="text-h6"><q-icon name="payments" size="32px" />PIM</div>
          <div class="text-subtitle2">Presupuesto Institucional modificado</div>
          <q-separator dark inset />
          <div class="text-h5 text-weight-bolder text-center">S/. {{ parseFloat(this.dat_pim).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col">
        <div class="col q-gutter-sm">
        <q-card class="bg-lime-10 shadow-5 text-white">
          <q-card-section>
          <div class="text-h6"><q-icon name="payments" size="32px" />CERTIFICADO</div>
          <div class="text-subtitle2">Monto certificado</div>
          <q-separator dark inset />
          <div class="text-h5 text-weight-bolder text-center">S/. {{ parseFloat(this.dat_certif).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</div>
          </q-card-section>
        </q-card>
      </div>
      </div>
      <div class="col">
        <div class="col q-gutter-sm">
        <q-card class="bg-deep-purple-6 shadow-5 text-white">
          <q-card-section>
          <div class="text-h6"><q-icon name="payments" size="32px" />DEVENGADO</div>
          <div class="text-subtitle2">Monto devengado</div>
          <q-separator dark inset />
          <div class="text-h5 text-weight-bolder text-center">S/. {{ parseFloat(this.dat_deven).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</div>
          </q-card-section>
        </q-card>
      </div>
      </div>
      <div class="col">
        <div class="col q-gutter-sm">
        <q-card class="bg-cyan-10 shadow-5 text-white">
          <q-card-section>
          <div class="text-h6"><q-icon name="payments" size="32px" />SALDO</div>
          <div class="text-subtitle2">Saldo (PIM-Devengado)</div>
          <q-separator dark inset />
          <div class="text-h5 text-weight-bolder text-center">S/. {{ parseFloat(this.dat_saldo).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</div>
          </q-card-section>
        </q-card>
      </div>
      </div>

      <div class="col">
        <div class="col q-gutter-sm">
        <q-card class="bg-deep-orange-14 shadow-5 text-white">
          <q-card-section>
          <div class="text-h6">% EJECUCION</div>
          <div class="text-subtitle2">% de ejecución</div>
          <q-separator dark inset />
          <div class="text-h5 text-weight-bolder text-center">{{ parseFloat(this.dat_avance).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }} %</div>
          </q-card-section>
        </q-card>
      </div>
      </div>

    </div>
    </div>
  </q-page>

</template>

<script>
import axios from "axios";
let url='http://localhost:3001/api/';
export default{
  data(){
    return{
      ds_tot:[],
      ds_fuentes:[],
      dat_pia:'',
      dat_pim:'',
      dat_certif:'',
      dat_deven:'',
      dat_saldo:'',
      dat_avance:''
    }
  },
  mounted(){
    this.get_totales();
    this.get_fuentes();
  },

  methods:{
    async get_fuentes(){
        try {
            let datos=await axios.get(url+'fuentes')
            this.ds_fuentes= await datos.data;
            console.log("fuentes:"+this.ds_fuentes);
        } catch (error) {
            console.log(error);
        }
    },
    async get_totales(){
        try {
            let datos=await axios.get(url+'totales')
            this.ds_tot= await datos.data;
            this.dat_pia=this.ds_tot[0].pia;
            this.dat_pim=this.ds_tot[0].pim;
            this.dat_certif=this.ds_tot[0].certificado;
            this.dat_deven=this.ds_tot[0].devengado;
            this.dat_saldo=this.ds_tot[0].saldo;
            this.dat_avance=this.ds_tot[0].avance;
        } catch (error) {
            console.log(error);
        }
    }

  }




}

</script>


