<template>
  <div class="Bloque_C_Piso">
    <div class="Columna_1">
      <q-btn outline style="color: goldenrod" label="Aula 105" class="Aula105" />
    </div>
    <div class="Pared1">
      <div class="Q1"></div>
    </div>
    <div class="Columna_2">
      <div class="Q2222"></div>
      <div class="Q111"></div>
      <div class="Escalera1">
        <div class="Escalera1_1">
          <div class="Escalera1_1_1"></div>
          <div class="Escalera1_1_2"></div>
          <div class="Escalera1_1_3"></div>
          <div class="Escalera1_1_4"></div>
          <div class="Escalera1_1_5"></div>
          <div class="Escalera1_1_6"></div>
          <div class="Escalera1_1_7"></div>
          <div class="Escalera1_1_8"></div>
          <div class="Escalera1_1_9"></div>
        </div>
        <div class="Escalera1_2">
          <div class="Escalera1_2_1"></div>
          <div class="Escalera1_2_2"></div>
          <div class="Escalera1_2_3"></div>
          <div class="Escalera1_2_4"></div>
          <div class="Escalera1_2_5"></div>
          <div class="Escalera1_2_6"></div>
          <div class="Escalera1_2_7"></div>
          <div class="Escalera1_2_8"></div>
          <div class="Escalera1_2_9"></div>
        </div>
      </div>
      <div class="Q222"></div>
      <div class="PU_OFI2">
        <div class="puer_2"></div>
        <div class="puer_2_1"></div>
      </div>
      <div class="PU_OFI3">
        <div class="puer_3"></div>
        <div class="puer_3_1"></div>
      </div>
    </div>
    <div class="Pared2">
      <div class="Q11"></div>
      <div class="Escalera3">
        <div class="Escalera3_1"></div>
        <div class="Escalera3_2"></div>
      </div>
    </div>
    <div class="Columna_3">
      <div class="Aula3">
        <q-btn outline style="color: goldenrod" label="Aula 105" class="Aula105" />
      </div>
      <div class="Pared_Escalera"></div>
      <div class="Q113"></div>
      <div class="Puerta3">
        <div class="puer_6"></div>
        <div class="puer_6_1"></div>
      </div>
      <div class="Escalera2">
        <div class="Escalera2_1">
          <div class="Escalera2_1_1"></div>
          <div class="Escalera2_1_2"></div>
          <div class="Escalera2_1_3"></div>
          <div class="Escalera2_1_4"></div>
          <div class="Escalera2_1_5"></div>
          <div class="Escalera2_1_6"></div>
          <div class="Escalera2_1_7"></div>
          <div class="Escalera2_1_8"></div>
          <div class="Escalera2_1_9"></div>
        </div>
        <div class="Escalera2_2">
          <div class="Escalera2_2_1"></div>
          <div class="Escalera2_2_2"></div>
          <div class="Escalera2_2_3"></div>
          <div class="Escalera2_2_4"></div>
          <div class="Escalera2_2_5"></div>
          <div class="Escalera2_2_6"></div>
          <div class="Escalera2_2_7"></div>
          <div class="Escalera2_2_8"></div>
          <div class="Escalera2_2_9"></div>
        </div>
      </div>
      <div class="Q224"></div>
      <div class="Puerta4">
        <div class="puer_7"></div>
        <div class="puer_7_1"></div>
      </div>
      <div class="Puerta2">
        <div class="puer_5"></div>
        <div class="puer_5_1"></div>
      </div>
    </div>
    <div class="Pared3">
      <div class="M1"></div>
    </div>
    <div class="Columna_4">
      <div class="Aula5">
        <q-btn outline style="color: goldenrod" label="Aula 107" class="Aula107" />
      </div>
      <div class="F1"></div>
      <div class="Aula7">
        <q-btn outline style="color: goldenrod" label="Aula 103" class="Aula103" />
      </div>
      <div class="F2_2"></div>
      <div class="Aula8">
        <q-btn outline style="color: goldenrod" label="Aula 103" class="Aula103" />
      </div>
      <div class="F3"></div>
      <div class="Puerta5">
        <div class="puer_8"></div>
        <div class="puer_8_1"></div>
      </div>
      <div class="Puerta6">
        <div class="puer_9"></div>
        <div class="puer_9_1"></div>
      </div>
      <div class="Puerta_Baño1">
        <div class="puer_10"></div>
        <div class="puer_10_1"></div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  background-color: rgb(255, 255, 255);
}
.Bloque_C_Piso {
  background-color: rgb(0, 0, 0);
  position: absolute;
  width: 99.2%;
  height: 74%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
}
.Pared1,
.Pared2,
.Pared3 {
  background-color: rgb(255, 255, 255);
  width: 1.2%;
  height: 96.5%;
  margin-top: 1%;
  position: relative;
}
.Q1 {
  background-color: rgb(0, 0, 0);
  width: 100%;
  height: 52%;
  position: absolute;
  top: 49.5%;
}
.Q11 {
  background-color: rgb(0, 0, 0);
  width: 100%;
  position: absolute;
  height: 37%;
}
.Columna_1,
.Columna_2,
.Columna_3,
.Columna_4 {
  background-color: rgb(255, 255, 255);
  width: 23.5%;
  height: 96.5%;
  margin-top: 1%;
  position: relative;
}
.Columna_1 {
  margin-left: 1%;
}
.Columna_4 {
  margin-right: 1%;
}
.Aula3 {
  background-color: rgb(255, 255, 255);
  width: 82.5%;
  height: 16%;
  left: 18%;
  position: absolute;
}
.Q111 {
  background-color: rgb(0, 0, 0);
  width: 45%;
  top: 49.5%;
  height: 2.5%;
  position: absolute;
}
.Q113 {
  background-color: rgb(0, 0, 0);
  width: 100%;
  height: 2.5%;
  position: absolute;
  top: 16%;
  left: 15%;
}

.Puerta2,
.Puerta3,
.Puerta4,
.Puerta5,
.Puerta6,
.PU_OFI2,
.PU_OFI3,
.Puerta_Baño1 {
  background-color: rgb(255, 255, 255);
  width: 10%;
  height: 4.5%;
  position: absolute;
}
.Puerta2 {
  top: 64.5%;
  left: 60%;
  display: flex;
}
.Puerta3 {
  top: 14%;
  left: 87%;
  display: flex;
}
.Puerta4 {
  top: 64.5%;
  left: 50%;
  display: flex;
}
.Puerta5 {
  top: 20.5%;
  left: -5%;
}
.Puerta6 {
  top: 49%;
  left: -5%;
}
.PU_OFI2 {
  top: 38.6%;
  left: 56.5%;
  transform: rotate(45deg);
  transform-origin: left center;
}
.PU_OFI3 {
  top: 41%;
  left: 51%;
  transform: rotate(45deg);
  transform-origin: left center;
}
.Puerta_Baño1 {
  top: 35%;
  left: -5%;
}
.Q222 {
  background-color: rgb(0, 0, 0);
  width: 40%;
  height: 2.5%;
  position: absolute;
  top: 50%;
  left: 43%;
  transform: rotate(-45deg);
  transform-origin: left center;
}
.Q2222 {
  background-color: rgb(0, 0, 0);
  width: 5%;
  height: 40%;
  position: absolute;
  left: 68%;
}
.Pared_Escalera {
  background-color: rgb(0, 0, 0);
  width: 4%;
  height: 69%;
  position: absolute;
  left: 14%;
}
.Q224 {
  background-color: rgb(0, 0, 0);
  width: 88%;
  height: 2.5%;
  position: absolute;
  top: 66.5%;
  left: 14%;
}
.M1 {
  background-color: rgb(0, 0, 0);
  width: 100%;
  height: 69%;
  position: absolute;
}
.Aula5 {
  background-color: transparent;
  width: 100%;
  height: 25%;
  position: absolute;
}

.F1 {
  background-color: rgb(0, 0, 0);
  width: 100%;
  height: 2%;
  position: absolute;
  top: 25%;
}
.F2_2 {
  background-color: rgb(0, 0, 0);
  width: 100%;
  height: 2%;
  position: absolute;
  top: 47%;
}
.F3 {
  background-color: rgb(0, 0, 0);
  width: 100%;
  height: 2%;
  position: absolute;
  top: 67%;
}
.Aula8 {
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 20%;
  position: absolute;
  top: 27%;
}
.Aula7 {
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 20%;
  position: absolute;
  top: 47%;
}
.Escalera1 {
  background-color: rgb(255, 255, 255);
  width: 15%;
  height: 42.4%;
  position: relative;
  left: 85%;
  border-left: 0.1cm solid black;
  display: flex;
}

.Escalera1_1,
.Escalera1_2 {
  background-color: rgb(255, 255, 255);
  width: 50%;
  height: 99.9%;
}
.Escalera1_1 {
  border-right: 0.1cm solid rgb(0, 0, 0);
}
.Escalera1_1_1,
.Escalera1_1_2,
.Escalera1_1_3,
.Escalera1_1_4,
.Escalera1_1_5,
.Escalera1_1_6,
.Escalera1_1_7,
.Escalera1_1_8,
.Escalera1_1_9 {
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 11.1%;
  border-bottom: 0.1cm solid black;
}
.Escalera1_2_1,
.Escalera1_2_2,
.Escalera1_2_3,
.Escalera1_2_4,
.Escalera1_2_5,
.Escalera1_2_6,
.Escalera1_2_7,
.Escalera1_2_8,
.Escalera1_2_9 {
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 11.1%;
  border-bottom: 0.1cm solid black;
}

.Escalera2 {
  background-color: rgb(255, 255, 255);
  width: 15%;
  height: 42.4%;
  position: absolute;
  border-right: 0.1cm solid black;
  display: flex;
}
.Escalera2_1,
.Escalera2_2 {
  background-color: rgb(255, 255, 255);
  width: 50%;
  height: 99.9%;
}
.Escalera2_1 {
  border-left: 0.1cm solid rgb(0, 0, 0);
  border-right: 0.1cm solid rgb(0, 0, 0);
}
.Escalera2_1_1,
.Escalera2_1_2,
.Escalera2_1_3,
.Escalera2_1_4,
.Escalera2_1_5,
.Escalera2_1_6,
.Escalera2_1_7,
.Escalera2_1_8,
.Escalera2_1_9 {
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 11.1%;
  border-bottom: 0.1cm solid black;
}
.Escalera2_2_1,
.Escalera2_2_2,
.Escalera2_2_3,
.Escalera2_2_4,
.Escalera2_2_5,
.Escalera2_2_6,
.Escalera2_2_7,
.Escalera2_2_8,
.Escalera2_2_9 {
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 11.1%;
  border-bottom: 0.1cm solid black;
}
.Escalera3 {
  background-color: rgb(255, 255, 255);
  width: 100%;
  position: absolute;
  height: 5.6%;
  top: 36.7%;
  border-bottom: 0.1cm solid black;
  border-top: 0.1cm solid black;
  display: flex;
}
.Escalera3_1,
.Escalera3_2 {
  background-color: rgb(255, 255, 255);
  width: 50%;
  height: 100%;
}
.Escalera3_1 {
  border-left: 0.1cm solid rgb(0, 0, 0);
}
.Aula103,
.Aula105,
.Aula107 {
  width: 100%;
  height: 100%;
  font-weight: bold;
  font-size: 1.5em;
}
.puer_2_1 {
  background-color: rgb(0, 0, 0);
  width: 100%;
  height: 80%;
  background: linear-gradient(-45deg, white 0% 50%, black 0% 55%, white 0% 100%);
}
.puer_2 {
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 20%;
  border: 0.01cm solid black;
  position: relative;
}
.puer_3 {
  background-color: rgb(19, 19, 19);
  width: 100%;
  height: 80%;
  background: linear-gradient(45deg, white 0% 50%, black 0% 55%, white 0% 100%);
}
.puer_3_1 {
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 20%;
  border: 0.01cm solid black;
  position: relative;
}

.puer_5 {
  background-color: rgb(0, 0, 0);
  width: 80%;
  height: 100%;
  background: linear-gradient(45deg, white 0% 50%, black 0% 55%, white 0% 100%);
}
.puer_5_1 {
  background-color: rgb(255, 255, 255);
  width: 20%;
  height: 100%;
  border: 0.01cm solid black;
  position: relative;
}
.puer_6 {
  background-color: rgb(0, 0, 0);
  width: 80%;
  height: 100%;
  background: linear-gradient(-45deg, white 0% 50%, black 0% 55%, white 0% 100%);
}
.puer_6_1 {
  background-color: rgb(248, 247, 247);
  width: 20%;
  height: 100%;
  border: 0.01cm solid black;
  position: relative;
}
.puer_7_1 {
  background-color: rgb(0, 0, 0);
  width: 80%;
  height: 100%;
  background: linear-gradient(-45deg, white 0% 50%, black 0% 55%, white 0% 100%);
}
.puer_7 {
  background-color: rgb(248, 247, 247);
  width: 20%;
  height: 100%;
  border: 0.01cm solid black;
  position: relative;
}
.puer_8 {
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 80%;
  background: linear-gradient(45deg, white 0% 50%, black 0% 55%, white 0% 100%);
}
.puer_8_1 {
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 20%;
  border: 0.01cm solid black;
  position: relative;
}
.puer_9 {
  background-color: rgb(0, 0, 0);
  width: 100%;
  height: 80%;
  background: linear-gradient(45deg, white 0% 50%, black 0% 55%, white 0% 100%);
}
.puer_9_1 {
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 20%;
  border: 0.01cm solid rgb(0, 0, 0);
  position: relative;
}

.puer_10 {
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 80%;
  background: linear-gradient(45deg, white 0% 50%, black 0% 55%, white 0% 100%);
}
.puer_10_1 {
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 20%;
  border: 0.01cm solid black;
  position: relative;
}
</style>
