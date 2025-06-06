<template>
  <div class="Padre">
    <div class="hijo1">
      <div class="nieto1">
        <q-select
          outlined
          v-model="seleccionDepartamento"
          :options="opcionesDepartamento"
          label="Seleccione Departamento"
          class="q-mr-md"
          style="width: 22%"
          @update:model-value="actualizarOpcionesCampus"
        />
        <q-select
          outlined
          v-model="seleccionCampo"
          :options="opcionesCampo"
          label="Seleccione Campus"
          class="q-mr-md"
          style="width: 22%"
          @update:model-value="actualizarOpcionesBloques"
        />
        <q-select
          outlined
          v-model="seleccion1"
          :options="opcionesCombo1"
          label="Seleccione Bloque"
          class="q-mr-md"
          style="width: 25%"
          @update:model-value="actualizarOpcionesPisos"
        />
        <q-select
          outlined
          v-model="seleccion2"
          :options="opcionesCombo2"
          label="Seleccione Piso"
          class="q-mr-md"
          style="width: 25%"
        />
      </div>
      <div class="nieto2">
        <q-btn outline style="color: goldenrod" label="Buscar" @click="buscar" />
      </div>
    </div>
    <div class="hijo2">
      <component v-if="componenteActivo" :is="componenteActivo" />
    </div>
  </div>
</template>
<script>
import { markRaw } from 'vue'
import Bloque_A_Piso_1 from './Bloques/Bloque A/Bloque_A_Piso_1.vue'
import Bloque_A_Piso_Biblioteca from './Bloques/Bloque A/Bloque_A_Piso_Biblioteca.vue'
import Bloque_A_Piso_PlantaBaja from './Bloques/Bloque A/Bloque_A_Piso_PlantaBaja.vue'
import Bloque_B_Piso_1 from './Bloques/Bloque B/Bloque_B_Piso_1.vue'
import Bloque_C_Piso_1 from './Bloques/Bloque C/Bloque_C_Piso_1.vue'
import Bloque_C_Piso_2 from './Bloques/Bloque C/Bloque_C_Piso_2.vue'
import Bloque_C_Piso_5 from './Bloques/Bloque C/Bloque_C_Piso_5.vue'

export default {
  components: {
    Bloque_A_Piso_1,
    Bloque_A_Piso_Biblioteca,
    Bloque_A_Piso_PlantaBaja,
    Bloque_B_Piso_1,
    Bloque_C_Piso_1,
    Bloque_C_Piso_2,
    Bloque_C_Piso_5,
  },
  data() {
    return {
      componenteActivo: null,
      // Departamento
      seleccionDepartamento: null,
      opcionesDepartamento: [],
      // Campus
      seleccionCampo: null,
      opcionesCampo: [],
      // Bloque y Piso
      seleccion1: null,
      opcionesCombo1: [],
      seleccion2: null,
      opcionesCombo2: [],
    }
  },
  mounted() {
    // Cargar departamentos
    fetch('http://127.0.0.1:8000/api/ciudads')
      .then((response) => response.json())
      .then((data) => {
        this.opcionesDepartamento = data.map((ciudad) => ({
          label: ciudad, // Ajusta según la estructura de tu API
          value: ciudad,
        }))
      })
      .catch(() => {
        this.opcionesDepartamento = []
      })
  },
  methods: {
    actualizarOpcionesCampus(ciudadSeleccionada) {
      // Obtener el nombre de la ciudad seleccionada
      const ciudad =
        typeof ciudadSeleccionada === 'object' && ciudadSeleccionada !== null
          ? ciudadSeleccionada.label
          : ciudadSeleccionada

      // Realizar el POST para obtener los campus
      fetch('http://127.0.0.1:8000/api/campuses/filtrar-por-ciudad', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ciudad }),
      })
        .then((response) => response.json())
        .then((data) => {
          // data.data es el array de campus
          this.opcionesCampo = (data.data || []).map((campus) => ({
            label: campus,
            value: campus,
          }))
        })
        .catch(() => {
          this.opcionesCampo = []
        })
      // Limpiar selección anterior
      this.seleccionCampo = null
    },

    actualizarOpcionesBloques(campusSeleccionado) {
      // Obtener ciudad y campus seleccionados
      const ciudad =
        typeof this.seleccionDepartamento === 'object' && this.seleccionDepartamento !== null
          ? this.seleccionDepartamento.label
          : this.seleccionDepartamento

      const campus =
        typeof campusSeleccionado === 'object' && campusSeleccionado !== null
          ? campusSeleccionado.label
          : campusSeleccionado

      // Realizar el POST para obtener los bloques
      fetch('http://127.0.0.1:8000/api/bloques/filtrar-por-ciudad-campus', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ciudad, campus }),
      })
        .then((response) => response.json())
        .then((data) => {
          // data.data es el array de bloques
          this.opcionesCombo1 = (data.data || []).map((bloque) => ({
            label: bloque,
            value: bloque.replace('Bloque ', ''),
          }))
        })
        .catch(() => {
          this.opcionesCombo1 = []
        })
      // Limpiar selección anterior
      this.seleccion1 = null
    },
    actualizarOpcionesPisos(bloqueSeleccionado) {
      // Obtener ciudad, campus y bloque seleccionados
      const ciudad =
        typeof this.seleccionDepartamento === 'object' && this.seleccionDepartamento !== null
          ? this.seleccionDepartamento.label
          : this.seleccionDepartamento

      const campus =
        typeof this.seleccionCampo === 'object' && this.seleccionCampo !== null
          ? this.seleccionCampo.label
          : this.seleccionCampo

      const bloque =
        typeof bloqueSeleccionado === 'object' && bloqueSeleccionado !== null
          ? bloqueSeleccionado.label
          : bloqueSeleccionado

      // Realizar el POST para obtener los pisos
      fetch('http://127.0.0.1:8000/api/pisos/filtrar-por-ciudad-campus-bloque', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ciudad, campus, bloque }),
      })
        .then((response) => response.json())
        .then((data) => {
          // data.data es el array de pisos
          this.opcionesCombo2 = (data.data || []).map((piso) => ({
            label: piso,
            value: piso,
          }))
        })
        .catch(() => {
          this.opcionesCombo2 = []
        })
      // Limpiar selección anterior
      this.seleccion2 = null
    },
    buscar() {
      if (!this.seleccion1 || !this.seleccion2) {
        console.warn('Debe seleccionar un bloque y un piso')
        return
      }

      // Captura los textos de los combobox
      const ciudad =
        typeof this.seleccionDepartamento === 'object' && this.seleccionDepartamento !== null
          ? this.seleccionDepartamento.label
          : this.seleccionDepartamento
      const campus =
        typeof this.seleccionCampo === 'object' && this.seleccionCampo !== null
          ? this.seleccionCampo.label
          : this.seleccionCampo
      const bloqueCompleto =
        typeof this.seleccion1 === 'object' && this.seleccion1 !== null
          ? this.seleccion1.label
          : this.seleccion1
      const pisoCompleto =
        typeof this.seleccion2 === 'object' && this.seleccion2 !== null
          ? this.seleccion2.label
          : this.seleccion2

      // Extraer solo la letra del bloque (A, B, C)
      const bloque = bloqueCompleto.replace('Bloque ', '')

      // Extraer solo el número/nombre del piso
      const piso = pisoCompleto.replace('Piso ', '').toLowerCase()

      console.log('Bloque:', bloque, 'Piso:', piso) // Para debugging

      // Mostrar componente basado en bloque y piso
      let componente = null

      if (bloque === 'A' && piso === '0') {
        componente = markRaw(Bloque_A_Piso_PlantaBaja)
      } else if (bloque === 'A' && ['1', '2', '3', '4'].includes(piso)) {
        componente = markRaw(Bloque_A_Piso_1)
      } else if (bloque === 'A' && piso === 'biblioteca') {
        componente = markRaw(Bloque_A_Piso_Biblioteca)
      } else if (bloque === 'B' && ['0', '1', '2'].includes(piso)) {
        componente = markRaw(Bloque_B_Piso_1)
      } else if (bloque === 'C' && piso === '1') {
        componente = markRaw(Bloque_C_Piso_1)
      } else if (bloque === 'C' && ['2', '3', '4'].includes(piso)) {
        componente = markRaw(Bloque_C_Piso_2)
      } else if (bloque === 'C' && piso === '5') {
        componente = markRaw(Bloque_C_Piso_5)
      }

      this.componenteActivo = componente

      // Fetch para mostrar aulas en los botones
      fetch('http://127.0.0.1:8000/api/aulas/filtrar-por-ciudad-campus-bloque-piso', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ciudad,
          campus,
          bloque: bloqueCompleto, // Usar el nombre completo para la API
          piso: pisoCompleto, // Usar el nombre completo para la API
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          const nombres = data.data || []
          this.$nextTick(() => {
            const botones = [
              document.querySelector('.Boton1'),
              document.querySelector('.Boton2'),
              document.querySelector('.Boton3'),
              document.querySelector('.Boton4'),
              document.querySelector('.Boton5'),
              document.querySelector('.Boton6'),
            ]
            botones.forEach((boton, index) => {
              if (boton) {
                boton.textContent = nombres[index] || 'NO'
              }
            })
          })
        })
        .catch(() => {
          this.$nextTick(() => {
            const botones = [
              document.querySelector('.Boton1'),
              document.querySelector('.Boton2'),
              document.querySelector('.Boton3'),
              document.querySelector('.Boton4'),
              document.querySelector('.Boton5'),
              document.querySelector('.Boton6'),
            ]
            botones.forEach((boton) => {
              if (boton) {
                boton.textContent = 'NO'
              }
            })
          })
        })
    },
  },
}
</script>
<style>
body {
  background-color: rgb(255, 255, 255);
}
.Padre {
  background-color: transparent;
  position: absolute;
  left: 30%;
  width: 62.6%;
  height: 92.5%;
  display: flex;
  flex-direction: column;
}
.hijo1 {
  background-color: transparent;
  border-top: 0.1cm solid black;
  border-right: 0.1cm solid black;
  border-bottom: 0.05cm solid black;
  border-left: 0.1cm solid black;
  height: 25%;
  display: flex;
  flex-direction: column;
}

.nieto1 {
  background-color: transparent;
  height: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
.nieto2 {
  background-color: transparent;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hijo2 {
  background-color: transparent;
  border: 0.1cm solid black;
  height: 75%;
}
</style>
