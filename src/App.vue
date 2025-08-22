<template>
  <v-app id="inspire">
    <!-- App Bar -->
    <v-container id="frame-7">
      <img alt="World Map" class="logo" id="world-map" />
      <img alt="Parrot" class="logo" id="parrot" />
      <h1 id="PollyGlot">PollyGlot</h1>
      <h1 id="slogan">Perfect Translation Every Time</h1>
    </v-container>

    <!-- Main Section -->
    <v-main>
      <div class="rounded-rectangle"></div>

      <v-container fluid>
        <!-- Text Input -->
        <h2 class="first-heading">Text to translate 👇</h2>
        <v-textarea class="textarea-1"
          clear-icon="mdi-close-circle"
          label="How are you?"
          v-model="text"
          clearable
        ></v-textarea>

        <!-- Language + Translate -->
        <div v-if="!translationDone && !isLoading">
          <h2 id="second-heading">Select language 👇</h2>
          <v-radio-group v-model="selectedLanguage" id="radio-group-wrapper">
            <v-radio id="viet" label="🇻🇳 Vietnamese" value="vi"></v-radio>
            <v-radio id="jpn" label="🇯🇵 Japanese" value="ja"></v-radio>
            <v-radio id="rus" label="🇷🇺 Russian" value="ru"></v-radio>
          </v-radio-group>

          <v-btn id="button" @click="translate">Translate</v-btn>
        </div>

        <!-- Spinner -->
        <div v-if="isLoading" class="loading-wrapper">
          <v-progress-circular indeterminate color="primary" size="50"></v-progress-circular>
          <p class="loading-text">Translating...</p>
        </div>

        <!-- Result -->
        <div v-if="translationDone && !isLoading" class="translation-result" style="margin-top: 40px;">
          <h2 id="second-heading">Your translation 👇</h2>
          <v-textarea class="textarea-2"
            v-model="translatedText"
            readonly
            auto-grow
            :rows="3"
            outlined
          ></v-textarea>

          <v-btn id="button" class="mt-4" @click="reset">Start Over</v-btn>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'

const text = ref('')
const selectedLanguage = ref(null)
const translatedText = ref('')
const translationDone = ref(false)
const isLoading = ref(false)

async function translate() {
  if (!text.value || !selectedLanguage.value) {
    alert('Please enter text and select a language.')
    return
  }

  isLoading.value = true

  const messages = [
    {
      role: 'system',
      content: 'You are a translation assistant. Translate the user\'s message to the selected language. Only show the translation part.'
    },
    {
      role: 'user',
      content: `Translate the following to ${languageLabel(selectedLanguage.value)}: ${text.value}`
    }
  ]

  try {
    const res = await fetch('http://localhost:3000/api/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages })
    })

    const data = await res.json()
    translatedText.value = data.reply
    translationDone.value = true
  } catch (err) {
    console.error(err)
    translatedText.value = 'Something went wrong. Please try again.'
    translationDone.value = true
  } finally {
    isLoading.value = false
  }
}

function reset() {
  text.value = ''
  selectedLanguage.value = null
  translatedText.value = ''
  translationDone.value = false
  isLoading.value = false
}

function languageLabel(code) {
  switch (code) {
    case 'vi': return 'Vietnamese'
    case 'ja': return 'Japanese'
    case 'ru': return 'Russian'
    default: return 'English'
  }
}
</script>
