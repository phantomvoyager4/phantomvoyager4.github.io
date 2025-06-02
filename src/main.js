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



const SUPABASE_URL = 'https://topfkdmhqcnshmzuwert.supabase.co'; 
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvcGZrZG1ocWNuc2htenV3ZXJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2NTM2ODgsImV4cCI6MjA2MzIyOTY4OH0.0k6GPQG6khofQKectWdp7JaFZpLVtA5Gxhv7SOeZNls'; 

const articlesDiv = document.getElementById('articles');
const articleForm = document.getElementById('article-form');


async function fetchArticles() {
    console.log('Rozpoczynam pobieranie artykułów...');
    articlesDiv.innerHTML = '<p class="loading">Ładowanie artykułów</p>'; 

    try {
        const response = await fetch(`${SUPABASE_URL}/rest/v1/article?select=*&order=created_at.desc`, { 
            method: 'GET',
            headers: {
                'apikey': API_KEY,
                'Authorization': `Bearer ${API_KEY}`,
            }
        });

        console.log('Odpowiedź z serwera (fetchArticles):', response.status, response.statusText);
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({ message: 'Nieznany błąd serwera' }));
            throw new Error(`Błąd HTTP: ${response.status} ${response.statusText}. Szczegóły: ${errorData.message || JSON.stringify(errorData)}`);
        }

        const data = await response.json();
        console.log('Otrzymane dane (artykuły):', data);

        articlesDiv.innerHTML = ''; 

        if (data.length === 0) {
            articlesDiv.innerHTML = '<p>Brak artykułów do wyświetlenia. Dodaj pierwszy!</p>';
            return;
        }

        data.forEach(article => {
            const articleElement = document.createElement('div');
            articleElement.classList.add('article');

            
            articleElement.innerHTML = `
                <h3>${article.title}</h3>
                <h4>${article.subtitle || '<em>Brak podtytułu</em>'}</h4>
                <p class="meta">
                    <strong>Autor:</strong> ${article.author}<br>
                    <em>Data utworzenia:</em> ${new Date(article.created_at).toLocaleString('pl-PL')}
                </p>
                <div>${article.content.replace(/\n/g, '<br>')}</div>
            `;
            articlesDiv.appendChild(articleElement);
        });

    } catch (error) {
        console.error('Błąd podczas pobierania artykułów:', error);
        articlesDiv.innerHTML = `<p class="error-message">Nie udało się załadować artykułów. Błąd: ${error.message}</p>`;
    }
}

// === DODAJ NOWY ARTYKUŁ (Asynchronicznie) ===
articleForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    console.log('Formularz wysłany, rozpoczynam dodawanie artykułu...');

    const titleInput = document.getElementById('title');
    const subtitleInput = document.getElementById('subtitle');
    const authorInput = document.getElementById('author');
    const contentInput = document.getElementById('content');

    const newArticle = {
        title: titleInput.value.trim(),
        subtitle: subtitleInput.value.trim(),
        author: authorInput.value.trim(),
        content: contentInput.value.trim(),
    };

    if (!newArticle.title || !newArticle.author || !newArticle.content) {
        alert('Pola "Tytuł", "Autor" i "Treść" są wymagane!');
        return;
    }

    try {
        const response = await fetch(`${SUPABASE_URL}/rest/v1/article`, {
            method: 'POST',
            headers: {
                'apikey': API_KEY,
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json',
                'Prefer': 'return=representation'
            },
            body: JSON.stringify(newArticle)
        });

        console.log('Odpowiedź z serwera (addArticle):', response.status, response.statusText);
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({ message: 'Nieznany błąd serwera podczas dodawania' }));
            throw new Error(`Błąd HTTP podczas dodawania: ${response.status} ${response.statusText}. Szczegóły: ${errorData.message || JSON.stringify(errorData)}`);
        }

        const addedArticleData = await response.json();
        console.log('Artykuł dodany pomyślnie:', addedArticleData);

        articleForm.reset();
        alert('Artykuł został dodany pomyślnie!');

        await fetchArticles();

    } catch (error) {
        console.error('Błąd podczas dodawania artykułu:', error);
        alert(`Nie udało się dodać artykułu. Błąd: ${error.message}`);
    }
});


fetchArticles();