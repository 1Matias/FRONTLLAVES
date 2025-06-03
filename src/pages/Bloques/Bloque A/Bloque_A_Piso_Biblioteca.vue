<template>
  <div class="Bloque_A_Piso">
    <div class="W_Columna_1">
      <div class="W_Aula1_1">
        <button style="color: goldenrod" class="Aula107">Aula 107</button>
      </div>
      <div class="W_separador_1"></div>
      <div class="W_Aula1_2">
        <button style="color: goldenrod" class="Aula107">Aula 107</button>
      </div>
    </div>
    <div class="W_Pared1">
      <div class="W_Q1"></div>
    </div>
    <div class="W_Columna_2">
      <div class="W_Escalera1">
        <div class="W_Escalera1_1">
          <div class="W_Escalera1_1_1"></div>
          <div class="W_Escalera1_1_2"></div>
          <div class="W_Escalera1_1_3"></div>
          <div class="W_Escalera1_1_4"></div>
          <div class="W_Escalera1_1_5"></div>
          <div class="W_Escalera1_1_6"></div>
          <div class="W_Escalera1_1_7"></div>
          <div class="W_Escalera1_1_8"></div>
          <div class="W_Escalera1_1_9"></div>
        </div>
        <div class="W_Escalera1_2">
          <div class="W_Escalera1_2_1"></div>
          <div class="W_Escalera1_2_2"></div>
          <div class="W_Escalera1_2_3"></div>
          <div class="W_Escalera1_2_4"></div>
          <div class="W_Escalera1_2_5"></div>
          <div class="W_Escalera1_2_6"></div>
          <div class="W_Escalera1_2_7"></div>
          <div class="W_Escalera1_2_8"></div>
          <div class="W_Escalera1_2_9"></div>
        </div>
      </div>
      <div class="W_Escalera2">
        <div class="W_Escalera2_1">
          <div class="W_Escalera2_1_1"></div>
          <div class="W_Escalera2_1_2"></div>
          <div class="W_Escalera2_1_3"></div>
          <div class="W_Escalera2_1_4"></div>
          <div class="W_Escalera2_1_5"></div>
          <div class="W_Escalera2_1_6"></div>
          <div class="W_Escalera2_1_7"></div>
          <div class="W_Escalera2_1_8"></div>
          <div class="W_Escalera2_1_9"></div>
        </div>
        <div class="W_Escalera2_2">
          <div class="W_Escalera2_2_1"></div>
          <div class="W_Escalera2_2_2"></div>
          <div class="W_Escalera2_2_3"></div>
          <div class="W_Escalera2_2_4"></div>
          <div class="W_Escalera2_2_5"></div>
          <div class="W_Escalera2_2_6"></div>
          <div class="W_Escalera2_2_7"></div>
          <div class="W_Escalera2_2_8"></div>
          <div class="W_Escalera2_2_9"></div>
        </div>
      </div>
      <div class="W_PU_OFI3">
        <div class="W_puer_3"></div>
        <div class="W_puer_3_1"></div>
      </div>
      <div class="W_PU_OFI4">
        <div class="W_puer_4"></div>
        <div class="W_puer_4_1"></div>
      </div>
    </div>
    <div class="W_Pared2"></div>
    <div class="W_Columna_3">
      <div class="W_Pared_Acensor1"></div>
      <div class="W_Pared_Acensor2"></div>
      <div class="W_Columna_Ascensor"></div>
      <div class="W_Ascensor">ASCENSOR</div>
    </div>
    <div class="W_Pared3"></div>
    <div class="W_Columna_4"></div>
  </div>
</template>
<style>
body {
  background-color: rgb(255, 255, 255);
}

.Bloque_A_Piso {
  background-color: rgb(0, 0, 0);
  position: absolute;
  width: 99.2%;
  height: 74%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
}

.W_Columna_1,
.W_Columna_2,
.W_Columna_3,
.W_Columna_4 {
  background-color: rgb(255, 255, 255);
  width: 23.5%;
  height: 96.5%;
  margin-top: 1%;
  position: relative;
}

.W_Columna_1 {
  margin-left: 1%;
}

.W_Columna_4 {
  margin-right: 1%;
}

.W_Aula1_1 {
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 49.5%;
  position: relative;
}

.W_separador_1 {
  background-color: rgb(0, 0, 0);
  width: 100%;
  height: 2.5%;
  position: relative;
}

.W_Aula1_2 {
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 48%;
  position: relative;
}

.W_Pared1,
.W_Pared2,
.W_Pared3 {
  background-color: rgb(255, 255, 255);
  width: 1.2%;
  height: 96.5%;
  margin-top: 1%;
  position: relative;
}

.W_Q1 {
  background-color: rgb(0, 0, 0);
  width: 100%;
  height: 100%;
  position: absolute;
}

.W_Escalera1 {
  background-color: rgb(255, 255, 255);
  width: 80%;
  height: 13%;
  position: relative;
  border-left: 0.1cm solid rgb(0, 0, 0);
  top: 72%;
}

.W_Escalera1_1,
.W_Escalera1_2 {
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
}

.W_Escalera1_1_1,
.W_Escalera1_1_2,
.W_Escalera1_1_3,
.W_Escalera1_1_4,
.W_Escalera1_1_5,
.W_Escalera1_1_6,
.W_Escalera1_1_7,
.W_Escalera1_1_8,
.W_Escalera1_1_9 {
  background-color: rgb(255, 255, 255);
  width: 11.1%;
  height: 100%;
  border-top: 0.1cm solid black;
  border-bottom: 0.1cm solid black;
  border-right: 0.05cm solid #000000;
  box-sizing: border-box;
}

.W_Escalera1_2_1,
.W_Escalera1_2_2,
.W_Escalera1_2_3,
.W_Escalera1_2_4,
.W_Escalera1_2_5,
.W_Escalera1_2_6,
.W_Escalera1_2_7,
.W_Escalera1_2_8,
.W_Escalera1_2_9 {
  background-color: rgb(255, 255, 255);
  width: 11.1%;
  height: 100%;
  border-bottom: 0.1cm solid black;
  border-right: 0.05cm solid #000000;
  box-sizing: border-box;
}

.W_Escalera2 {
  background-color: rgb(247, 247, 247);
  width: 80%;
  height: 13%;
  position: relative;
  border-left: 0.1cm solid rgb(0, 0, 0);
  top: 74%;
}

.W_Escalera2_1,
.W_Escalera2_2 {
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
}

.W_Escalera2_1_1,
.W_Escalera2_1_2,
.W_Escalera2_1_3,
.W_Escalera2_1_4,
.W_Escalera2_1_5,
.W_Escalera2_1_6,
.W_Escalera2_1_7,
.W_Escalera2_1_8,
.W_Escalera2_1_9 {
  background-color: rgb(255, 255, 255);
  width: 11.1%;
  height: 100%;
  border-top: 0.1cm solid black;
  border-bottom: 0.1cm solid black;
  border-right: 0.05cm solid #000000;
  box-sizing: border-box;
}

.W_Escalera2_2_1,
.W_Escalera2_2_2,
.W_Escalera2_2_3,
.W_Escalera2_2_4,
.W_Escalera2_2_5,
.W_Escalera2_2_6,
.W_Escalera2_2_7,
.W_Escalera2_2_8,
.W_Escalera2_2_9 {
  background-color: rgb(255, 255, 255);
  width: 11.1%;
  height: 100%;
  border-bottom: 0.1cm solid black;
  border-right: 0.05cm solid #000000;
  box-sizing: border-box;
}

.W_PU_OFI3,
.W_PU_OFI4 {
  background-color: rgb(255, 255, 255);
  width: 10%;
  height: 4.5%;
  position: absolute;
}

.W_PU_OFI3 {
  top: 59%;
  left: -10%;
}

.W_PU_OFI4 {
  top: 10%;
  left: -10%;
}

.W_puer_3 {
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 20%;
  border: 0.01cm solid black;
  position: relative;
}

.W_puer_3_1 {
  background-color: rgb(19, 19, 19);
  width: 100%;
  height: 80%;
  background: linear-gradient(45deg, white 0% 50%, black 0% 55%, white 0% 100%);
}

.W_puer_4 {
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 20%;
  border: 0.01cm solid black;
  position: relative;
}

.W_puer_4_1 {
  background-color: rgb(19, 19, 19);
  width: 100%;
  height: 80%;
  background: linear-gradient(45deg, white 0% 50%, black 0% 55%, white 0% 100%);
}

.W_Pared_Acensor1 {
  background-color: rgb(0, 0, 0);
  width: 5%;
  height: 30%;
  position: absolute;
  top: 70%;
}

.W_Pared_Acensor2 {
  background-color: rgb(0, 0, 0);
  width: 5%;
  height: 30%;
  position: absolute;
  top: 70%;
  left: 65%;
}

.W_Columna_Ascensor {
  background-color: rgb(255, 255, 255);
  border: 0.05cm solid rgb(0, 0, 0);
  width: 65.5%;
  height: 1%;
  top: 70%;
  position: relative;
}

.W_Ascensor {
  background-color: rgb(255, 255, 255);
  border: 0.05cm solid rgb(0, 0, 0);
  border-radius: 1em;
  width: 45%;
  height: 20%;
  top: 75%;
  left: 12%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 8px;
  text-align: center;
  font-size: 1em;
  color: blue;
}
</style>
