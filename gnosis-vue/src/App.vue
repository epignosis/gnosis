<template>
  <ThemeProvider>
    <div style="padding: 2rem; font-family: sans-serif">
      <h1 style="margin-bottom: 1.5rem">Gnosis Vue – Button example</h1>

      <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 1rem">
        <Button color="primary" @click="handleClick">Primary</Button>
        <Button color="secondary" @click="handleClick">Secondary</Button>
        <Button color="danger" @click="handleClick">Danger</Button>
        <Button color="success" @click="handleClick">Success</Button>
      </div>

      <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 1rem">
        <Button color="primary" variant="outline" @click="handleClick">Outline</Button>
        <Button color="primary" variant="ghost" @click="handleClick">Ghost</Button>
        <Button color="primary" variant="link" @click="handleClick">Link</Button>
      </div>

      <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 1.5rem">
        <Button color="primary" size="sm" @click="handleClick">Small</Button>
        <Button color="primary" @click="handleClick">Medium</Button>
        <Button color="primary" size="lg" @click="handleClick">Large</Button>
        <Button color="primary" :isLoading="true">Loading</Button>
        <Button color="primary" :disabled="true">Disabled</Button>
      </div>

      <p v-if="lastClicked" style="color: #555">
        Last clicked: <strong>{{ lastClicked }}</strong>
      </p>
    </div>
  </ThemeProvider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ThemeProvider, Button } from './index'

const lastClicked = ref('')

function handleClick(e: MouseEvent) {
  lastClicked.value = (e.currentTarget as HTMLElement).textContent?.trim() ?? ''
}
</script>
