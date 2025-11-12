# Portfolio Website (React + TypeScript + Vite)

Een persoonlijk portfolio gebouwd met React, Vite en TypeScript. De content wordt beheerd via simpele Markdown en TSV-bestanden.

**Live Website:** [https://KarelTestSpecial.github.io/portfolio-vite-1](https://KarelTestSpecial.github.io/portfolio-vite-1)

---

## Inhoudsopgave

- [Lokale Ontwikkeling](#lokale-ontwikkeling)
- [Content Beheren](#content-beheren)
  - [Methode 1: Handmatig Aanpassen](#methode-1-handmatig-aanpassen)
  - [Methode 2: De Ingebouwde Editor](#methode-2-de-ingebouwde-editor)
- [Publiceren (Deployment)](#publiceren-deployment)
- [Beschikbare Scripts](#beschikbare-scripts)

---

## Lokale Ontwikkeling

Volg deze stappen om de website lokaal op te zetten en te draaien.

**Vereisten:**
- Node.js
- pnpm (of een andere package manager zoals npm of yarn)

**Stappen:**

1.  **Installeer de dependencies:**
    ```bash
    pnpm install
    ```

2.  **Start de development server:**
    ```bash
    pnpm dev
    ```
    De website is nu lokaal beschikbaar, meestal op `http://localhost:5173`. De server houdt wijzigingen in de gaten en ververst de site automatisch (Hot Module Replacement).

---

## Content Beheren

De inhoud van de website (CV en projecten) wordt beheerd via bestanden in de `/public` map. Er zijn twee manieren om deze aan te passen.

### Methode 1: Handmatig Aanpassen

Je kunt de bestanden direct in je code-editor aanpassen. Na het opslaan hoef je alleen de browser te verversen om de wijzigingen te zien.

#### CV (`/public/cv.[en|nl].md`)

Deze bestanden combineren YAML en Markdown.

-   **YAML-gedeelte (bovenaan, tussen `~~~`):** Gestructureerde data zoals werkervaring, opleiding en contactgegevens.
-   **Markdown-gedeelte (onderaan):** De doorlopende "Over Mij" tekst, waar je standaard Markdown-opmaak kunt gebruiken.

```yaml
~~~
name: "Jouw Naam"
workExperience:
  - role: "Functie"
    company: "Bedrijf"
    period: "Jaar - Jaar"
    description: "Beschrijving van je werk."
~~~

Hier begint de vrije tekst voor je profiel...
```

#### Projecten (`/public/projects.[en|nl].tsv`)

Dit zijn **Tab-Separated Values** (TSV) bestanden. Elke regel is een project en de kolommen worden gescheiden door een **Tab**.

**Kolommen:**
`Type` `Naam` `Beschrijving` `GitHub Link` `Live Link` `Status`

-   **Type:** Wordt gebruikt om projecten te groeperen (bv. `websites`, `githubProjects`).
-   **Status:** Zet op `active` om een link naar de live-versie te tonen.

### Methode 2: De Ingebouwde Editor

Voor eenvoudigere aanpassingen is er een `cv-editor`.

1.  **Start de servers:** Je hebt twee terminals nodig.
    -   Terminal 1: `pnpm dev` (de hoofdwebsite)
    -   Terminal 2: `pnpm run edit-cv` (de editor-backend)

2.  **Open de editor:** Navigeer in je browser naar `http://localhost:4000`.

3.  **Gebruik:** Kies een bestand, pas de inhoud aan en klik op "Save". De wijzigingen worden direct opgeslagen en zijn zichtbaar na het herladen van de hoofdwebsite.

---

## Publiceren (Deployment)

De website wordt gepubliceerd op GitHub Pages. Het proces wordt beheerd door een script, niet door een `.github/workflows` bestand.

**Stappen om live te zetten:**

1.  **Commit je wijzigingen:**
    ```bash
    git add .
    git commit -m "Content bijgewerkt"
    ```

2.  **Push naar GitHub:**
    ```bash
    git push origin main
    ```

3.  **Draai het deploy-script:**
    ```bash
    pnpm deploy
    ```

**Hoe werkt dit?**
Het `pnpm deploy` commando voert `gh-pages -d dist` uit. Dit script bouwt eerst de site, en pusht vervolgens de inhoud van de `dist` map naar de `gh-pages` branch op GitHub. GitHub Pages is ingesteld om vanaf die branch te publiceren, wat telkens een nieuwe "deployment" triggert.

---

## Beschikbare Scripts

-   `pnpm dev`: Start de lokale development server.
-   `pnpm build`: Maakt een productie-build in de `dist` map.
-   `pnpm edit-cv`: Start de backend voor de content-editor.
-   `pnpm deploy`: Publiceert de website naar GitHub Pages.
-   `pnpm lint`: Controleert de code op stijl- en syntaxfouten.