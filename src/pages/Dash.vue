<template>
  <q-page>
    <div class="shadow-5">
      <div class="shadow-5 q-pa-md row items-start q-gutter-md">
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
        <div class="col">
          <q-card class="bg-indigo-12 shadow-5 text-white">
            <q-card-section>
            <div class="text-h6"><q-icon name="payments" size="32px" /> PIM</div>
            <div class="text-subtitle2">Presupuesto Institucional modificado</div>
            <q-separator dark inset />
            <div class="text-h5 text-weight-bolder text-center">S/. {{ parseFloat(this.dat_pim).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col">
          <div class="col">
          <q-card class="bg-lime-10 shadow-5 text-white">
            <q-card-section>
            <div class="text-h6"><q-icon name="payments" size="32px" /> CERTIFICADO</div>
            <div class="text-subtitle2">Monto certificado</div>
            <q-separator dark inset />
            <div class="text-h5 text-weight-bolder text-center">S/. {{ parseFloat(this.dat_certif).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</div>
            </q-card-section>
          </q-card>
        </div>
        </div>
        <div class="col">
          <div class="col">
          <q-card class="bg-deep-purple-6 shadow-5 text-white">
            <q-card-section>
            <div class="text-h6"><q-icon name="payments" size="32px" /> DEVENGADO</div>
            <div class="text-subtitle2">Monto devengado</div>
            <q-separator dark inset />
            <div class="text-h5 text-weight-bolder text-center">S/. {{ parseFloat(this.dat_deven).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</div>
            </q-card-section>
          </q-card>
        </div>
        </div>
        <div class="col">
          <div class="col">
          <q-card class="bg-cyan-10 shadow-5 text-white">
            <q-card-section>
            <div class="text-h6"><q-icon name="payments" size="32px" /> SALDO</div>
            <div class="text-subtitle2">Saldo (PIM-Devengado)</div>
            <q-separator dark inset />
            <div class="text-h5 text-weight-bolder text-center">S/. {{ parseFloat(this.dat_saldo).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</div>
            </q-card-section>
          </q-card>
        </div>
        </div>
      </div>

      <div class="shadow-5 q-pa-md row items-start q-gutter-md">
        <!--GRAFICO TOTALES-->
        <div class="col">
          <q-card class="bg-blue-10 shadow-5 text-white">
            <q-card-section>
            <div class="text-h6"><q-icon name="bar_chart" size="32px" /> % de Ejecución Total</div>
            <div class="text-subtitle2">PIM / Devengado</div>
            <q-separator dark inset />
            <div class="text-h5 text-weight-bolder text-center">
              <q-circular-progress
                show-value
                font-size="30px"
                :value="dat_avance"
                size="250px"
                :thickness="0.4"
                color="cyan-13"
                track-color="blue-grey-13"
                class="q-ma-md"
              >
                {{ parseFloat(this.dat_avance).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}} %
              </q-circular-progress>
            </div>
            </q-card-section>
            <q-separator dark inset />
            <q-card-section>
              <div>
              <q-chip color="red-9" text-color="white" icon="payments">PIA: S/. {{ parseFloat(this.dat_pia).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}}</q-chip>
              </div>
              <q-chip color="indigo-12" text-color="white" icon="payments">PIM: S/. {{ parseFloat(this.dat_pim).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}}</q-chip>
              <q-chip color="lime-10" text-color="white" icon="payments">Certif.: S/. {{ parseFloat(this.dat_certif).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}}</q-chip>
              <q-chip color="deep-purple-6" text-color="white" icon="payments">Devengado: S/. {{ parseFloat(this.dat_deven).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}}</q-chip>
              <q-chip color="cyan-10" text-color="white" icon="payments">Saldo: S/. {{ parseFloat(this.dat_saldo).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}}</q-chip>
            </q-card-section>
          </q-card>
          </div>

          <!--GRAFICO RO-->
          <div class="col">
          <q-card class="bg-teal-14 shadow-5 text-white">
            <q-card-section>
            <div class="text-h6"><q-icon name="bar_chart" size="32px" /> % de Ejecución RO</div>
            <div class="text-subtitle2">PIM / Devengado (Recursos Ordionarios)</div>
            <q-separator dark inset />
            <div class="text-h5 text-weight-bolder text-center">
              <q-circular-progress
                show-value
                font-size="30px"
                :value="dat_avance_ro"
                size="250px"
                :thickness="0.4"
                color="teal-12"
                track-color="grey-7"
                class="q-ma-md"
              >
                {{ parseFloat(this.dat_avance_ro).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}} %
              </q-circular-progress>
            </div>
            </q-card-section>
            <q-separator dark inset />
            <q-card-section>
              <div>
              <q-chip color="red-9" text-color="white" icon="payments">PIA: S/. {{ parseFloat(this.dat_pia_ro).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}}</q-chip>
              </div>
              <q-chip color="indigo-12" text-color="white" icon="payments">PIM: S/. {{ parseFloat(this.dat_pim_ro).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}}</q-chip>
              <q-chip color="lime-10" text-color="white" icon="payments">Certif.: S/. {{ parseFloat(this.dat_certif_ro).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}}</q-chip>
              <q-chip color="deep-purple-6" text-color="white" icon="payments">Devengado: S/. {{ parseFloat(this.dat_deven_ro).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}}</q-chip>
              <q-chip color="cyan-10" text-color="white" icon="payments">Saldo: S/. {{ parseFloat(this.dat_saldo_ro).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}}</q-chip>
            </q-card-section>
          </q-card>
          </div>


          <!--GRAFICO DONACIONES-->
          <div class="col">
          <q-card class="bg-blue-grey-9 shadow-5 text-white">
            <q-card-section>
            <div class="text-h6"><q-icon name="bar_chart" size="32px" /> % de Ejecución DT</div>
            <div class="text-subtitle2">PIM / Devengado (Donaciones y Transferencias)</div>
            <q-separator dark inset />
            <div class="text-h5 text-weight-bolder text-center">
              <q-circular-progress
                show-value
                font-size="30px"
                :value="dat_avance_dt"
                size="250px"
                :thickness="0.4"
                color="cyan-13"
                track-color="blue-grey-13"
                class="q-ma-md"
              >
                {{ parseFloat(this.dat_avance_dt).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}} %
              </q-circular-progress>
            </div>
            </q-card-section>
            <q-separator dark inset />
            <q-card-section>
              <div>
              <q-chip color="red-9" text-color="white" icon="payments">PIA: S/. {{ parseFloat(this.dat_pia_dt).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}}</q-chip>
              </div>
              <q-chip color="indigo-12" text-color="white" icon="payments">PIM: S/. {{ parseFloat(this.dat_pim_dt).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}}</q-chip>
              <q-chip color="lime-10" text-color="white" icon="payments">Certif.: S/. {{ parseFloat(this.dat_certif_dt).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}}</q-chip>
              <q-chip color="deep-purple-6" text-color="white" icon="payments">Devengado: S/. {{ parseFloat(this.dat_deven_dt).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}}</q-chip>
              <q-chip color="cyan-10" text-color="white" icon="payments">Saldo: S/. {{ parseFloat(this.dat_saldo_dt).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}}</q-chip>
            </q-card-section>
          </q-card>
          </div>



      </div>


      <div class="shadow-5 q-pa-md row items-start q-gutter-md">
        <!--GRAFICO RDR-->
        <div class="col">
          <q-card class="bg-blue-grey-9 shadow-5 text-white">
            <q-card-section>
            <div class="text-h6"><q-icon name="bar_chart" size="32px" /> % de Ejecución RDR</div>
            <div class="text-subtitle2">PIM / Devengado (Recursos Directamente Recaudados)</div>
            <q-separator dark inset />
            <div class="text-h5 text-weight-bolder text-center">
              <q-circular-progress
                show-value
                font-size="30px"
                :value="dat_avance_rdr"
                size="250px"
                :thickness="0.4"
                color="cyan-13"
                track-color="blue-grey-13"
                class="q-ma-md"
              >
                {{ parseFloat(this.dat_avance_rdr).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}} %
              </q-circular-progress>
            </div>
            </q-card-section>
            <q-separator dark inset />
            <q-card-section>
              <div>
              <q-chip color="red-9" text-color="white" icon="payments">PIA: S/. {{ parseFloat(this.dat_pia_rdr).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}}</q-chip>
              </div>
              <q-chip color="indigo-12" text-color="white" icon="payments">PIM: S/. {{ parseFloat(this.dat_pim_rdr).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}}</q-chip>
              <q-chip color="lime-10" text-color="white" icon="payments">Certif.: S/. {{ parseFloat(this.dat_certif_rdr).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}}</q-chip>
              <q-chip color="deep-purple-6" text-color="white" icon="payments">Devengado: S/. {{ parseFloat(this.dat_deven_rdr).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}}</q-chip>
              <q-chip color="cyan-10" text-color="white" icon="payments">Saldo: S/. {{ parseFloat(this.dat_saldo_rdr).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}}</q-chip>
            </q-card-section>
          </q-card>
          </div>

          <!--GRAFICO RECURSOS DETERMINADOS-->
          <div class="col">
          <q-card class="bg-blue-grey-9 shadow-5 text-white">
            <q-card-section>
            <div class="text-h6"><q-icon name="bar_chart" size="32px" /> % de Ejecución RD</div>
            <div class="text-subtitle2">PIM / Devengado (Recursos Determinados)</div>
            <q-separator dark inset />
            <div class="text-h5 text-weight-bolder text-center">
              <q-circular-progress
                show-value
                font-size="30px"
                :value="dat_avance_det"
                size="250px"
                :thickness="0.4"
                color="cyan-13"
                track-color="blue-grey-13"
                class="q-ma-md"
              >
                {{ parseFloat(this.dat_avance_det).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}} %
              </q-circular-progress>
            </div>
            </q-card-section>
            <q-separator dark inset />
            <q-card-section>
              <div>
              <q-chip color="red-9" text-color="white" icon="payments">PIA: S/. {{ parseFloat(this.dat_pia_det).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}}</q-chip>
              </div>
              <q-chip color="indigo-12" text-color="white" icon="payments">PIM: S/. {{ parseFloat(this.dat_pim_det).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}}</q-chip>
              <q-chip color="lime-10" text-color="white" icon="payments">Certif.: S/. {{ parseFloat(this.dat_certif_det).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}}</q-chip>
              <q-chip color="deep-purple-6" text-color="white" icon="payments">Devengado: S/. {{ parseFloat(this.dat_deven_det).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}}</q-chip>
              <q-chip color="cyan-10" text-color="white" icon="payments">Saldo: S/. {{ parseFloat(this.dat_saldo_det).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}}</q-chip>
            </q-card-section>
          </q-card>
          </div>


          <!--GRAFICO RECURSOS POR OPERACIONES OFICIALES DE CREDITO-->
          <div class="col">
          <q-card class="bg-blue-grey-9 shadow-5 text-white">
            <q-card-section>
            <div class="text-h6"><q-icon name="bar_chart" size="32px" /> % de Ejecución ROOC</div>
            <div class="text-subtitle2">PIM / Devengado (Recursos por Operaciones Oficiales de Credito)</div>
            <q-separator dark inset />
            <div class="text-h5 text-weight-bolder text-center">
              <q-circular-progress
                show-value
                font-size="30px"
                :value="dat_avance_crd"
                size="250px"
                :thickness="0.4"
                color="cyan-13"
                track-color="blue-grey-13"
                class="q-ma-md"
              >
                {{ parseFloat(this.dat_avance_crd).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}} %
              </q-circular-progress>
            </div>
            </q-card-section>
            <q-separator dark inset />
            <q-card-section>
              <div>
              <q-chip color="red-9" text-color="white" icon="payments">PIA: S/. {{ parseFloat(this.dat_pia_crd).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}}</q-chip>
              </div>
              <q-chip color="indigo-12" text-color="white" icon="payments">PIM: S/. {{ parseFloat(this.dat_pim_crd).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}}</q-chip>
              <q-chip color="lime-10" text-color="white" icon="payments">Certif.: S/. {{ parseFloat(this.dat_certif_crd).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}}</q-chip>
              <q-chip color="deep-purple-6" text-color="white" icon="payments">Devengado: S/. {{ parseFloat(this.dat_deven_crd).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}}</q-chip>
              <q-chip color="cyan-10" text-color="white" icon="payments">Saldo: S/. {{ parseFloat(this.dat_saldo_crd).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}}</q-chip>
            </q-card-section>
          </q-card>
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
      ds_eje_ro:[],
      ds_eje_dt:[],
      ds_eje_rdr:[],
      ds_eje_det:[],
      ds_eje_crd:[],
      dat_pia:'',
      dat_pim:'',
      dat_certif:'',
      dat_deven:'',
      dat_saldo:'',
      dat_avance:'',

      dat_pia_ro:'',
      dat_pim_ro:'',
      dat_certif_ro:'',
      dat_deven_ro:'',
      dat_saldo_ro:'',
      dat_avance_ro:'',

      dat_pia_dt:'',
      dat_pim_dt:'',
      dat_certif_dt:'',
      dat_deven_dt:'',
      dat_saldo_dt:'',
      dat_avance_dt:'',

      dat_pia_rdr:'',
      dat_pim_rdr:'',
      dat_certif_rdr:'',
      dat_deven_rdr:'',
      dat_saldo_rdr:'',
      dat_avance_rdr:'',

      dat_pia_det:'',
      dat_pim_det:'',
      dat_certif_det:'',
      dat_deven_det:'',
      dat_saldo_det:'',
      dat_avance_det:'',

      dat_pia_crd:'',
      dat_pim_crd:'',
      dat_certif_crd:'',
      dat_deven_crd:'',
      dat_saldo_crd:'',
      dat_avance_crd:''

    }
  },
  mounted(){
    this.get_totales();
    this.get_ejec_ro();
    this.get_ejec_dt();
    this.get_ejec_rdr();
    this.get_ejec_det();
    this.get_ejec_crd();
  },

  methods:{
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
    },
    async get_ejec_ro(){
        try {
            let datos=await axios.get(url+'ejec_ro')
            this.ds_eje_ro= await datos.data;
            this.dat_pia_ro=this.ds_eje_ro[0].pia;
            this.dat_pim_ro=this.ds_eje_ro[0].pim;
            this.dat_certif_ro=this.ds_eje_ro[0].certificado;
            this.dat_deven_ro=this.ds_eje_ro[0].devengado;
            this.dat_saldo_ro=this.ds_eje_ro[0].saldo;
            this.dat_avance_ro=this.ds_eje_ro[0].avance;
        } catch (error) {
            console.log(error);
        }
    },
    async get_ejec_dt(){
        try {
            let datos=await axios.get(url+'ejec_dt')
            this.ds_eje_dt= await datos.data;
            this.dat_pia_dt=this.ds_eje_dt[0].pia;
            this.dat_pim_dt=this.ds_eje_dt[0].pim;
            this.dat_certif_dt=this.ds_eje_dt[0].certificado;
            this.dat_deven_dt=this.ds_eje_dt[0].devengado;
            this.dat_saldo_dt=this.ds_eje_dt[0].saldo;
            this.dat_avance_dt=this.ds_eje_dt[0].avance;
        } catch (error) {
            console.log(error);
        }
    },
    async get_ejec_rdr(){
        try {
            let datos=await axios.get(url+'ejec_rdr')
            this.ds_eje_rdr= await datos.data;
            this.dat_pia_rdr=this.ds_eje_rdr[0].pia;
            this.dat_pim_rdr=this.ds_eje_rdr[0].pim;
            this.dat_certif_rdr=this.ds_eje_rdr[0].certificado;
            this.dat_deven_rdr=this.ds_eje_rdr[0].devengado;
            this.dat_saldo_rdr=this.ds_eje_rdr[0].saldo;
            this.dat_avance_rdr=this.ds_eje_rdr[0].avance;
        } catch (error) {
            console.log(error);
        }
    },
    async get_ejec_det(){
        try {
            let datos=await axios.get(url+'ejec_det')
            this.ds_eje_det= await datos.data;
            this.dat_pia_det=this.ds_eje_det[0].pia;
            this.dat_pim_det=this.ds_eje_det[0].pim;
            this.dat_certif_det=this.ds_eje_det[0].certificado;
            this.dat_deven_det=this.ds_eje_det[0].devengado;
            this.dat_saldo_det=this.ds_eje_det[0].saldo;
            this.dat_avance_det=this.ds_eje_det[0].avance;
        } catch (error) {
            console.log(error);
        }
    },
    async get_ejec_crd(){
        try {
            let datos=await axios.get(url+'ejec_crd')
            this.ds_eje_crd= await datos.data;
            this.dat_pia_crd=this.ds_eje_crd[0].pia;
            this.dat_pim_crd=this.ds_eje_crd[0].pim;
            this.dat_certif_crd=this.ds_eje_crd[0].certificado;
            this.dat_deven_crd=this.ds_eje_crd[0].devengado;
            this.dat_saldo_crd=this.ds_eje_crd[0].saldo;
            this.dat_avance_crd=this.ds_eje_crd[0].avance;
        } catch (error) {
            console.log(error);
        }
    }




  }




}

</script>


