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
        <h3>Frontend Developer</h3>
        <CollapseDiv :header="skillsHeader">
          <div class="lists">
            <h4>Technical</h4>
            <ul>
              <li>Vue</li>
              <li>React</li>
              <li>MongoDB</li>
              <li>Flask</li>
              <li>Cypress</li>
            </ul>
            <ul>
              <li>Javascript</li>
              <li>Python</li>
              <li>C++</li>
              <li>Java</li>
            </ul>
            <h4>General</h4>
            <ul class="longer-text">
              <li>Problem Solving</li>
              <li>Collaboration</li>
              <li>Critical Thinking</li>
              <li>Detail Oriented</li>
            </ul>
          </div>
        </CollapseDiv>
        <CollapseDiv :header="aboutHeader">
          <p>
            I'm a Frontend Developer with a passion for problem solving and learning how things work.  
            I am currently looking for opportunities to challenge myself to grow as a developer. 
          </p>
          <p>
            
          </p>
        </CollapseDiv>
      </div>
      <div class="right-section">
        <img src="https://placebear.com/g/200/300" alt="bear image">
      </div>
    </div>
  </div>
</template>

<style scoped>

.lists{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
ul{
  width: 30%;
}
.longer-text{
  width: auto;
}
.about-section{
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: .5rem;
  height: 100%;
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
  align-items: flex-end;
  margin-right: .5rem;
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
  font-size: 2rem;
  width: max-content;
}
h3{
  color: #EAF6FF;
  margin-left: 2rem;
  margin-top: -1rem;
}
h4{
  width: 100%;
  display: block;
  margin-bottom: 0rem;
}
p{
  text-indent: 2rem;
}
</style>
