<template>
  <div class="K_Bloque_A_Piso">
    <div class="K_Columna_1">
      <div class="k_Escalera1">
        <div class="k_Escalera1_1">
          <div class="k_Escalera1_1_1"></div>
          <div class="k_Escalera1_1_2"></div>
          <div class="k_Escalera1_1_3"></div>
          <div class="k_Escalera1_1_4"></div>
          <div class="k_Escalera1_1_5"></div>
          <div class="k_Escalera1_1_6"></div>
          <div class="k_Escalera1_1_7"></div>
          <div class="k_Escalera1_1_8"></div>
          <div class="k_Escalera1_1_9"></div>
        </div>
        <div class="k_Escalera1_2">
          <div class="k_Escalera1_2_1"></div>
          <div class="k_Escalera1_2_2"></div>
          <div class="k_Escalera1_2_3"></div>
          <div class="k_Escalera1_2_4"></div>
          <div class="k_Escalera1_2_5"></div>
          <div class="k_Escalera1_2_6"></div>
          <div class="k_Escalera1_2_7"></div>
          <div class="k_Escalera1_2_8"></div>
          <div class="k_Escalera1_2_9"></div>
        </div>
      </div>
      <div class="k_Escalera2">
        <div class="k_Escalera2_1">
          <div class="k_Escalera2_1_1"></div>
          <div class="k_Escalera2_1_2"></div>
          <div class="k_Escalera2_1_3"></div>
          <div class="k_Escalera2_1_4"></div>
          <div class="k_Escalera2_1_5"></div>
          <div class="k_Escalera2_1_6"></div>
          <div class="k_Escalera2_1_7"></div>
          <div class="k_Escalera2_1_8"></div>
          <div class="k_Escalera2_1_9"></div>
        </div>
        <div class="k_Escalera2_2">
          <div class="k_Escalera2_2_1"></div>
          <div class="k_Escalera2_2_2"></div>
          <div class="k_Escalera2_2_3"></div>
          <div class="k_Escalera2_2_4"></div>
          <div class="k_Escalera2_2_5"></div>
          <div class="k_Escalera2_2_6"></div>
          <div class="k_Escalera2_2_7"></div>
          <div class="k_Escalera2_2_8"></div>
          <div class="k_Escalera2_2_9"></div>
        </div>
      </div>
      <div class="K_Separador_Escalera"></div>
    </div>
    <div class="K_Pared1">
      <div class="K_Q1"></div>
    </div>
    <div class="K_Columna_3">
      <div class="K_Aula1_1_1_3">Baño</div>
      <div class="K_Q113"></div>
      <div class="K_Puerta3_Baño_Hombre">
        <div class="K_puer_6"></div>
        <div class="K_puer_6_1"></div>
      </div>

      <div class="K_Q224"></div>
      <div class="K_Baño_Mujeres_1">
        <q-btn outline style="color: goldenrod" label="Aula 107" class="Aula107" />
      </div>
    </div>
    <div class="K_Pared3">
      <div class="K_M1"></div>
    </div>
    <div class="K_Columna_4">
      <div class="K_Aula5">
        <q-btn outline style="color: goldenrod" label="Aula 107" class="Aula107" />
      </div>
      <div class="K_Puerta5">
        <div class="K_puer_8"></div>
        <div class="K_puer_8_1"></div>
      </div>
      <div class="K_Puerta2">
        <div class="K_puer_5"></div>
        <div class="K_puer_5_1"></div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  background-color: rgb(255, 255, 255);
}

.K_Bloque_A_Piso {
  background-color: rgb(0, 0, 0);
  position: absolute;
  width: 99.2%;
  height: 74%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
}

.K_Columna_1,
.K_Columna_3,
.K_Columna_4 {
  background-color: rgb(255, 255, 255);
  width: 31.8%;
  height: 96.5%;
  margin-top: 1%;
  position: relative;
}

.K_Columna_1 {
  margin-left: 1%;
}

.K_Columna_4 {
  margin-right: 1%;
}

.K_Pared1,
.K_Pared3 {
  background-color: rgb(255, 255, 255);
  width: 1.2%;
  height: 96.5%;
  margin-top: 1%;
  position: relative;
}

.K_Q1 {
  background-color: rgb(0, 0, 0);
  width: 100%;
  height: 32.5%;
  position: absolute;
}

.K_Aula1_1_1_3 {
  width: 100%;
  height: 30%;
  background-color: rgb(255, 255, 255);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 2em;
  color: blue;
}

.K_Q113 {
  background-color: rgb(0, 0, 0);
  width: 100%;
  height: 2.5%;
  position: absolute;
  top: 30%;
}

.K_Puerta3_Baño_Hombre {
  background-color: rgb(190, 25, 25);
  width: 10%;
  height: 4.5%;
  position: absolute;
  top: 28%;
  left: 45%;
  display: flex;
  flex-direction: row;
}

.K_puer_6 {
  background-color: rgb(129, 40, 40);
  width: 80%;
  height: 100%;
  background: linear-gradient(-45deg, white 0% 50%, black 0% 55%, white 0% 100%);
}

.K_puer_6_1 {
  background-color: rgb(255, 255, 255);
  width: 20%;
  height: 100%;
  border: 0.01cm solid black;
}

.K_Q224 {
  background-color: rgb(0, 0, 0);
  width: 205%;
  height: 2.5%;
  position: absolute;
  top: 70%;
  left: -105%;
}

.K_Baño_Mujeres_1 {
  background-color: rgb(255, 255, 255);
  width: 205%;
  height: 27.5%;
  position: absolute;
  top: 72.5%;
  left: -105%;
}

.K_M1 {
  background-color: rgb(0, 0, 0);
  width: 100%;
  height: 100%;
  position: absolute;
}

.K_Aula5 {
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 100%;
  position: absolute;
}

.K_Puerta5 {
  background-color: rgb(253, 253, 253);
  width: 10%;
  height: 4.5%;
  position: absolute;
  top: 35%;
  left: -4.5%;
}

.K_puer_8 {
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 80%;
  background: linear-gradient(45deg, white 0% 50%, black 0% 55%, white 0% 100%);
}

.K_puer_8_1 {
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 20%;
  border: 0.01cm solid black;
  position: relative;
}

.K_Puerta2 {
  background-color: rgb(253, 253, 253);
  width: 10%;
  height: 4.5%;
  position: absolute;
  top: 70%;
  left: -25%;
  display: flex;
}

.K_puer_5 {
  background-color: rgb(255, 255, 255);
  width: 20%;
  height: 100%;
  border: 0.01cm solid black;
  position: relative;
}

.K_puer_5_1 {
  background-color: rgb(150, 116, 116);
  width: 80%;
  height: 100%;
  background: linear-gradient(-45deg, white 0% 50%, black 0% 55%, white 0% 100%);
}
.k_Escalera1 {
  background-color: rgb(255, 255, 255);
  width: 48%;
  height: 32.5%;
  position: absolute;
  border-left: 0.1cm solid black;
  border-right: 0.1cm solid black;
  display: flex;
}

.k_Escalera1_1,
.k_Escalera1_2 {
  background-color: rgb(255, 255, 255);
  width: 50%;
  height: 99.9%;
}

.k_Escalera1_1 {
  border-right: 0.1cm solid rgb(0, 0, 0);
}

.k_Escalera1_1_1,
.k_Escalera1_1_2,
.k_Escalera1_1_3,
.k_Escalera1_1_4,
.k_Escalera1_1_5,
.k_Escalera1_1_6,
.k_Escalera1_1_7,
.k_Escalera1_1_8,
.k_Escalera1_1_9 {
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 11.1%;
  border-bottom: 0.1cm solid black;
}

.k_Escalera1_2_1,
.k_Escalera1_2_2,
.k_Escalera1_2_3,
.k_Escalera1_2_4,
.k_Escalera1_2_5,
.k_Escalera1_2_6,
.k_Escalera1_2_7,
.k_Escalera1_2_8,
.k_Escalera1_2_9 {
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 11.1%;
  border-bottom: 0.1cm solid black;
}
.k_Escalera2 {
  background-color: rgb(255, 255, 255);
  width: 48%;
  height: 32.5%;
  position: absolute;
  border-right: 0.1cm solid black;
  display: flex;
  left: 55%;
}
.k_Escalera2_1,
.k_Escalera2_2 {
  background-color: rgb(255, 255, 255);
  width: 50%;
  height: 99.9%;
}
.k_Escalera2_1 {
  border-left: 0.1cm solid rgb(0, 0, 0);
  border-right: 0.1cm solid rgb(0, 0, 0);
}
.k_Escalera2_1_1,
.k_Escalera2_1_2,
.k_Escalera2_1_3,
.k_Escalera2_1_4,
.k_Escalera2_1_5,
.k_Escalera2_1_6,
.k_Escalera2_1_7,
.k_Escalera2_1_8,
.k_Escalera2_1_9 {
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 11.1%;
  border-bottom: 0.1cm solid black;
}
.k_Escalera2_2_1,
.k_Escalera2_2_2,
.k_Escalera2_2_3,
.k_Escalera2_2_4,
.k_Escalera2_2_5,
.k_Escalera2_2_6,
.k_Escalera2_2_7,
.k_Escalera2_2_8,
.k_Escalera2_2_9 {
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 11.1%;
  border-bottom: 0.1cm solid black;
}
.K_Separador_Escalera {
  background-color: rgb(255, 255, 255);
  width: 7%;
  height: 4.2%;
  position: absolute;
  border-top: 0.1cm solid black;
  border-bottom: 0.1cm solid black;
  display: flex;
  left: 48%;
  top: 3%;
}
</style>
