# Project 2 - PollyGlot

**Laura Le**

**PollyGlot** is an AI-powered translation web app that allows users to input a sentence, select a target language (Vietnamese, Japanese, or Russian), and instantly receive a translated result. The app integrates OpenAI's GPT API to ensure accurate, human-like translations.

---

## Time spent
**8 hours** spent in total

---

## Required Features  
The following required functionality is completed:

- ✅ User can enter a sentence into a text area  
- ✅ User can select one of three target languages  
- ✅ User can submit the request and see the translated output  
- ✅ The language selection and button hide after submission  
- ✅ A loading spinner appears while waiting for the translation  
- ✅ A “Start Over” button allows the user to reset the app  

---

## Optional Features  
The following optional features are implemented:

- 🎨 Custom UI design using **Vuetify**  
- 📦 Backend connection to **OpenAI API** via **Node.js** and **Express**  
- 📁 Environment variable management with `.env`  
- 💡 Responsive layout using CSS + Flexbox  
- 🔄 Loading animation during translation request  

---

## Video Walkthrough  
https://vimeo.com/1112416872?share=copy

---

## Notes  
One challenge was integrating OpenAI's API securely while avoiding pushing secrets to GitHub. I resolved this by using a `.env` file and adding it to `.gitignore`, ensuring the API key remains private.

Another challenge was managing UI transitions between different app states (input → loading → translation). Vue's reactive properties made this smoother.

---

## Tech Stack  
- Vue 3 + Vite  
- Vuetify (Material Design UI)  
- Node.js / Express backend  
- OpenAI GPT API  
- HTML, CSS, JavaScript  

---

## License  
Copyright © 2025 Laura Le  

Licensed under the Apache License, Version 2.0 (the "License");  
you may not use this file except in compliance with the License.  
You may obtain a copy of the License at:  

http://www.apache.org/licenses/LICENSE-2.0
