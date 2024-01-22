<script setup>
import CollapseDiv from '@/components/CollapseDiv.vue';

const skillsHeader = 'Skills';
const aboutHeader = "About";
</script>

<template>
  <div class="container">
    <div class="about-section">
      <div class="left-section">
        <h2>Jonathan Humphrey</h2>
        <CollapseDiv :header="skillsHeader">
          <ul>
              <li>one</li>
              <li>two</li>
              <li>three</li>
          </ul>
        </CollapseDiv>
        <CollapseDiv :header="aboutHeader">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia auctor eros. Cras ut massa a ex fermentum condimentum sit amet a urna. Sed turpis mi, condimentum non enim vitae, ullamcorper luctus nibh. Vivamus nisl nibh, pellentesque vel hendrerit id, molestie nec risus. Proin risus elit, fringilla quis massa ac, auctor tristique ex.</p>
        </CollapseDiv>
      </div>
      <div class="right-section">
        <img src="https://placebear.com/g/200/300" alt="bear image">
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-section{
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: .5rem;
  height: auto;
  min-height: 45rem;
  background-color: #3C6E71;
  margin: 1rem;
  box-shadow: 2px 3px 16px -4px rgba(0,0,0,0.75);


}
.left-section{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.right-section{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
}
img{
  width: 200px;
  height: 300px;
  border-radius: .5rem;
  margin-top: 1rem;
}
h2{
  color: #EAF6FF;
  margin: 1rem;
}
</style>
