# Portfolio Website (React + TypeScript + Vite)

Een persoonlijk portfolio gebouwd met React en Vite. De inhoud wordt beheerd via simpele tekstbestanden.

**Live Website:** [https://KarelTestSpecial.github.io/portfolio-vite-1](https://KarelTestSpecial.github.io/portfolio-vite-1)

---

## Workflow: Je Projecten Bijwerken

Dit is de complete workflow, van het lokaal opzetten tot het publiceren van je wijzigingen. De focus ligt op het handmatig aanpassen van de projectenlijst.

### Stap 1: Lokaal Opzetten en Draaien

Voordat je begint, moet je de website lokaal kunnen draaien om je wijzigingen te zien.

1.  **Installeer de dependencies** (eenmalig):
    ```bash
    pnpm install
    ```

2.  **Start de development server:**
    ```bash
    pnpm dev
    ```
    De website is nu lokaal beschikbaar, meestal op `http://localhost:5173`.

### Stap 2: Projecten Handmatig Aanpassen

De data voor je projecten staat in de `/public` map.

1.  **Open het juiste bestand:**
    -   Voor Engelse projecten: `public/projects.en.tsv`
    -   Voor Nederlandse projecten: `public/projects.nl.tsv`

2.  **Pas het bestand aan:** Dit zijn **Tab-Separated Values** (TSV) bestanden. Elke regel is een project en de kolommen worden gescheiden door een **Tab**.

    **Kolommen:**
    `Type` `Naam` `Beschrijving` `GitHub Link` `Live Link` `Status`

    **Voorbeeld:**
    ```tsv
    websites	Mijn Portfolio	Dit is de website die je nu bekijkt.	https://github.com/user/repo		active
    githubProjects	Een cool script	Een script dat iets geweldigs doet.	https://github.com/user/script	https://demo.link/script	active
    ```

3.  **Controleer je wijzigingen:** Sla het bestand op en herlaad de pagina in je browser (`http://localhost:5173`) om te controleren of alles er goed uitziet.

### Stap 3: Wijzigingen Publiceren

Als je tevreden bent met je aanpassingen, kun je ze live zetten op je website.

1.  **Voeg je wijzigingen toe aan Git:**
    ```bash
    git add .
    ```

2.  **Maak een commit** (een "snapshot" van je wijzigingen):
    ```bash
    git commit -m "Projectenlijst bijgewerkt"
    ```

3.  **Push je commits naar GitHub:**
    ```bash
    git push origin main
    ```

4.  **Draai het deploy-script:**
    ```bash
    pnpm run deploy
    ```
    Dit commando doet alles voor je: het bouwt de website opnieuw en publiceert de nieuwste versie naar GitHub Pages. Na een minuut of twee zijn je wijzigingen live.

---

## Alternatieve Methode: De Ingebouwde Editor

Als je liever niet direct in de bestanden werkt, is er een simpele web-editor beschikbaar. Deze kan zowel de projectbestanden (`.tsv`) als de CV-bestanden (`.md`) aanpassen.

1.  **Start de servers:** Je hebt twee terminals nodig.
    -   Terminal 1: `pnpm dev` (de hoofdwebsite)
    -   Terminal 2: `pnpm run edit-cv` (de editor-backend)

2.  **Open de editor:** Navigeer in je browser naar `http://localhost:4000`.

3.  **Gebruik:** Kies een bestand, pas de inhoud aan en klik op "Save". Vergeet niet om na het opslaan ook de stappen onder "Stap 3: Wijzigingen Publiceren" te volgen om je aanpassingen live te zetten.
