<template>
  <div id="button-panel">
    <set-button-panel v-show="buttonControl.setMode && !buttonControl.initialMode"></set-button-panel>
    <function-button-panel v-show="!buttonControl.setMode && buttonControl.initialMode"></function-button-panel>
  </div>
</template>

<script lang="ts" setup>
import FunctionButtonPanel from './functionButton/FunctionButtonPanel.vue';
import SetButtonPanel from "./setButton/SetButtonPanel.vue";
import { useStore } from '../store'
import { computed } from 'vue';
const store = useStore()
const buttonControl = computed(() => store.getButtonControl);
</script>

<style>
#button-panel
{
  --button-border-size: 0.5rem;
  --button-width: 5.5rem;
  --button-height: 4.8rem;
  --button-margin-top: 0.8rem;
  --button-margin-left: 0.25rem;
  --button-border-radius: 6%;
}

.color-button-clr
{
  background-color: #c72f2e;
  box-shadow: 0rem var(--button-border-size) hsl(0, 62%, 41%);
}

.color-button-blue
{
  background-color: #8b7cd6;
  box-shadow: 0rem var(--button-border-size) hsl(250, 52%, 59%);
}

.color-button-grey
{
  background-color: #424a4c;
  box-shadow: 0rem var(--button-border-size) hsl(192, 7%, 21%);
}

.color-button-green
{
  background-color: greenyellow;
  box-shadow: 0rem var(--button-border-size) greenyellow;
}

.color-button-orange
{
  background-color: #ea6c18;
  box-shadow: 0rem var(--button-border-size) hsl(24, 83%, 44%);
}

.color-button-purple
{
  background-color: #5c215b;
  box-shadow: 0rem var(--button-border-size) hsl(301, 47%, 18%);
}

/* 设置按钮的颜色 */
.color-button-yeelow
{
  background-color: rgb(202, 202, 44);
  box-shadow: 0rem var(--button-border-size) hsl(60, 50%, 40%);
}

.button
{
  width: var(--button-width);
  height: var(--button-height);
  border: none;
  font-size: 1.25rem;
  color: white;
  padding: 0;
  border-radius: var(--button-border-radius);
  margin-top: var(--button-margin-top);
  margin-left: var(--button-margin-left);
  margin-right: var(--button-margin-left);
}

.button:active
{
  border: none;
}

@media screen and (max-width: 768px)
{
  #button-panel
  {
    --button-border-size: 4vw;
    --button-width: 28vw;
    --button-height: calc(28vw - 5vw);
    --button-margin-top: 5.5vw;
    --button-margin-left: 1vw;
    --button-border-radius: 6%;
  }

  .button
  {
    font-size: 1.5rem;
  }
}
</style>