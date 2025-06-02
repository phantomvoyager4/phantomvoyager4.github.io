import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 class="text-2xl font-bold text-Primary">Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button" class="bg-blue-300 p-4"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))


const response = fetch('https://topfkdmhqcnshmzuwert.supabase.co', {
  headers: {
  apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvcGZrZG1ocWNuc2htenV3ZXJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2NTM2ODgsImV4cCI6MjA2MzIyOTY4OH0.0k6GPQG6khofQKectWdp7JaFZpLVtA5Gxhv7SOeZNls',
  },
  });
  console.log(response);

  const fetchArticles = async () => {
    try {
    const response = await fetch(
    'https://topfkdmhqcnshmzuwert.supabase.co', {
    headers: {
    apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvcGZrZG1ocWNuc2htenV3ZXJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2NTM2ODgsImV4cCI6MjA2MzIyOTY4OH0.0k6GPQG6khofQKectWdp7JaFZpLVtA5Gxhv7SOeZNls',
    },
    });
    const data = await response.json();
    console.log(data);
    return data;
    } catch (error) {
    console.error('Fetch error:', error);
    }
    };

    const createNewArticle = async (title) => {
      try {
      const response = await fetch('https://topfkdmhqcnshmzuwert.supabase.co', {
      method: 'POST',
      headers: {
      apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvcGZrZG1ocWNuc2htenV3ZXJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2NTM2ODgsImV4cCI6MjA2MzIyOTY4OH0.0k6GPQG6khofQKectWdp7JaFZpLVtA5Gxhv7SOeZNls',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title }),
      });
      if (response.status !== 201) {
      throw new Error(`Status: ${response.status}`);
      }
      } catch (error) {
      console.error('Fetch error:', error);
      }
      };
      