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
      seleccion1: null,
      opcionesCombo1: [],
      seleccion2: null,
      opcionesCombo2: [],
    }
  },
  mounted() {
    // Cargar bloques
    fetch('http://127.0.0.1:8000/api/bloques')
      .then((response) => response.json())
      .then((data) => {
        this.opcionesCombo1 = data.map((bloque) => ({
          label: bloque,
          value: bloque.replace('Bloque ', ''),
        }))
      })
      .catch(() => {
        this.opcionesCombo1 = []
      })

    // Cargar departamentos
    fetch('http://127.0.0.1:8000/api/departamentos')
      .then((response) => response.json())
      .then((data) => {
        this.opcionesDepartamento = data.map((dep) => ({
          label: dep.nombre, // Ajusta según la estructura de tu API
          value: dep.id, // Ajusta según la estructura de tu API
        }))
      })
      .catch(() => {
        this.opcionesDepartamento = []
      })

    fetch('http://127.0.0.1:8000/api/campus')
      .then((response) => response.json())
      .then((data) => {
        this.opcionesCampo = data.map((campus) => ({
          label: campus.nombre, // Ajusta según la estructura de tu API
          value: campus.id, // Ajusta según la estructura de tu API
        }))
      })
      .catch(() => {
        this.opcionesCampo = []
      })
  },

  /*
  data() {
    return {
      componenteActivo: null,
      seleccion1: null,
      opcionesCombo1: [
        { label: 'Bloque A', value: 'A' },
        { label: 'Bloque B', value: 'B' },
        { label: 'Bloque C', value: 'C' },
      ],
      seleccion2: null,
      opcionesCombo2: [],
    }
  },
*/
  methods: {
    actualizarOpcionesPisos(bloqueSeleccionado) {
      const bloque =
        typeof bloqueSeleccionado === 'object' && bloqueSeleccionado !== null
          ? bloqueSeleccionado.value
          : bloqueSeleccionado

      if (bloque === 'A') {
        this.opcionesCombo2 = [
          { label: 'Planta Baja', value: '0' },
          { label: 'Piso 1', value: '1' },
          { label: 'Piso 2', value: '2' },
          { label: 'Piso 3', value: '3' },
          { label: 'Piso 4', value: '4' },
          { label: 'Biblioteca', value: 'biblioteca' },
        ]
      } else if (bloque === 'B') {
        this.opcionesCombo2 = [
          { label: 'Planta Baja', value: '0' },
          { label: 'Piso 1', value: '1' },
          { label: 'Piso 2', value: '2' },
        ]
      } else if (bloque === 'C') {
        this.opcionesCombo2 = [
          { label: 'Piso 1', value: '1' },
          { label: 'Piso 2', value: '2' },
          { label: 'Piso 3', value: '3' },
          { label: 'Piso 4', value: '4' },
          { label: 'Piso 5', value: '5' },
        ]
      } else {
        this.opcionesCombo2 = []
      }
      this.seleccion2 = null
    },
    actualizarOpcionesCampus(departamentoSeleccionado) {
      // Si el departamento seleccionado es Cochabamba, muestra los campus
      const nombreDepartamento =
        typeof departamentoSeleccionado === 'object' && departamentoSeleccionado !== null
          ? departamentoSeleccionado.label
          : departamentoSeleccionado

      if (nombreDepartamento === 'Cochabamba') {
        this.opcionesCampo = [
          { label: 'Colonial', value: 'colonial' },
          { label: 'Juan Pablo 2', value: 'juanpablo2' },
          { label: 'German', value: 'german' },
        ]
      } else {
        this.opcionesCampo = []
        this.seleccionCampo = null
      }
    },
    buscar() {
      if (!this.seleccion1 || !this.seleccion2) {
        console.warn('Debe seleccionar un bloque y un piso')
        return
      }
      const bloque = typeof this.seleccion1 === 'object' ? this.seleccion1.value : this.seleccion1
      const piso = typeof this.seleccion2 === 'object' ? this.seleccion2.value : this.seleccion2

      let componente = null

      if (bloque === 'A' && piso === '0') {
        componente = markRaw(Bloque_A_Piso_PlantaBaja)
      } else if (bloque === 'A' && ['1', '2', '3', '4'].includes(piso)) {
        componente = markRaw(Bloque_A_Piso_1)
      } else if (bloque === 'A' && piso === 'biblioteca') {
        componente = markRaw(Bloque_A_Piso_Biblioteca)
      } else if (bloque === 'B' && ['0', '1', '2'].includes(piso)) {
        componente = markRaw(Bloque_B_Piso_1)
      } else if (bloque === 'C' && ['2', '3', '4'].includes(piso)) {
        componente = markRaw(Bloque_C_Piso_2)
      } else {
        const componentMap = {
          C_1: markRaw(Bloque_C_Piso_1),
          C_5: markRaw(Bloque_C_Piso_5),
        }
        const clave = `${bloque}_${piso}`
        componente = componentMap[clave]
      }

      this.componenteActivo = componente

      if (bloque === 'C' && piso === '1') {
        this.$nextTick(async () => {
          const boton1 = document.querySelector('.Boton1')
          const boton2 = document.querySelector('.Boton2')
          const boton3 = document.querySelector('.Boton3')
          const boton4 = document.querySelector('.Boton4')
          const boton5 = document.querySelector('.Boton5')
          const boton6 = document.querySelector('.Boton6')
          const botones = [boton1, boton2, boton3, boton4, boton5, boton6]

          try {
            const response = await fetch('http://127.0.0.1:8000/api/aulas')
            const data = await response.json()

            // Obtiene las claves del objeto data (los nombres de las aulas)
            const nombres = Object.keys(data)

            // Asigna cada nombre al botón correspondiente:
            botones.forEach((boton, index) => {
              boton.textContent = nombres[index] || 'NO'
            })
          } catch {
            // En caso de error, asigna 'NO' a todos los botones.
            botones.forEach((boton) => {
              boton.textContent = 'NO'
            })
          }
        })
      }
      // Reinicia las selecciones y opciones del segundo combo
      this.seleccion1 = null
      this.seleccion2 = null
      this.opcionesCombo2 = []
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
