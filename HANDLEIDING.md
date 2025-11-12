# Handleiding Portfolio Website

Welkom bij de handleiding voor je portfolio website. Dit document legt uit hoe het project is gestructureerd, hoe je de data (CV en projecten) kunt aanpassen en hoe je de ingebouwde editor gebruikt.

## Overzicht

Deze website is gebouwd met **React** en **Vite**. De content (teksten voor je CV en projecten) wordt beheerd via eenvoudige tekstbestanden in de `public` map. Dit maakt het mogelijk om de inhoud snel aan te passen zonder direct in de code te hoeven duiken. Er is ook een simpele web-editor ingebouwd om dit proces nog makkelijker te maken.

## Projectstructuur

De belangrijkste mappen en bestanden zijn:

-   `public/`: Hier staan de data-bestanden.
    -   `cv.en.md` / `cv.nl.md`: Bestanden voor je CV in het Engels en Nederlands.
    -   `projects.en.tsv` / `projects.nl.tsv`: Bestanden voor je projectenlijst.
-   `src/`: Bevat de React-broncode van de website.
-   `cv-editor/`: Bevat een kleine web-editor om de bovenstaande data-bestanden eenvoudig aan te passen.
-   `package.json`: Definieert de project-scripts en dependencies.

---

## Data Beheren

Alle content is gescheiden per taal (`en` voor Engels, `nl` voor Nederlands).

### 1. CV Aanpassen (`cv.en.md` & `cv.nl.md`)

Deze bestanden gebruiken een combinatie van **YAML Front Matter** voor gestructureerde data en **Markdown** voor de doorlopende tekst.

De structuur ziet er zo uit:

```yaml
~~~
# Dit is het YAML gedeelte voor gestructureerde data
name: "Jouw Naam"
contact:
  email: "jouw.email@example.com"
  phone: "0612345678"
workExperience:
  - role: "Functie"
    company: "Bedrijf"
    period: "Jaar - Jaar"
    description: "Beschrijving van je werk."
# ... en ga zo maar door voor andere secties zoals 'education', 'skills', etc.
~~~

# Dit is het Markdown gedeelte
Hier komt de vrije tekst van je "Over Mij" sectie. Je kunt hier Markdown gebruiken voor opmaak.

- Een lijstitem
- Nog een item

**Vetgedrukte tekst** is ook mogelijk.
```

-   **YAML-gedeelte (tussen de `~~~` blokken):** Hier definieer je data in een vaste structuur. Bijvoorbeeld, `workExperience` is een lijst van objecten, waarbij elk object een `role`, `company`, `period` en `description` heeft. Dit wordt gebruikt om de gestructureerde lijsten op je site te vullen.
-   **Markdown-gedeelte (na de `~~~`):** Dit is de hoofdtekst voor je "Over Mij" pagina. Alles wat je hier typt, wordt als een normale lap tekst weergegeven, met ondersteuning voor Markdown-opmaak.

### 2. Projecten Aanpassen (`projects.en.tsv` & `projects.nl.tsv`)

Deze bestanden zijn **TSV (Tab-Separated Values)** bestanden. Je kunt ze zien als een simpele spreadsheet. Elke regel is een project en elke kolom is gescheiden door een **Tab**.

**Belangrijk:** Gebruik een teksteditor die tabs duidelijk weergeeft. Gebruik geen spaties om kolommen uit te lijnen.

De kolommen zijn:

`Type` `Naam` `Beschrijving` `GitHub Link` `Live Link` `Status`

**Voorbeeld:**

```tsv
websites	Mijn Portfolio	Dit is de website die je nu bekijkt.	https://github.com/user/repo		active
githubProjects	Een cool script	Een script dat iets geweldigs doet.	https://github.com/user/script	https://demo.link/script	active
```

-   **Type:** Categoriseert het project. De website groepeert projecten op basis van dit type (bijv. `websites`, `githubProjects`, `chromeExtensions`).
-   **Status:** Gebruik `active` als het project live en zichtbaar moet zijn met een link. Elke andere waarde verbergt de "live link" knop.

---

## De Content Editor (`cv-editor`)

Om te voorkomen dat je handmatig in de tekstbestanden moet werken, is er een simpele editor.

### Hoe te gebruiken:

1.  **Start de ontwikkelomgeving:** De editor werkt samen met de hoofdwebsite. Open twee terminals:
    -   In de eerste terminal, start de portfolio-website:
        ```bash
        pnpm dev
        ```
        Deze draait meestal op `http://localhost:5173`.

    -   In de tweede terminal, start de editor-server:
        ```bash
        pnpm run edit-cv
        ```
        Deze draait op `http://localhost:4000`.

2.  **Open de editor:** Open je webbrowser en navigeer naar `http://localhost:4000`.

3.  **Werking:**
    -   Je ziet een dropdown-menu waar je het te bewerken bestand kunt kiezen (bijv. `cv.nl.md`).
    -   De inhoud van het bestand wordt in een tekstveld geladen.
    -   Pas de tekst aan zoals je wilt.
    -   Klik op de **"Save"** knop.
    -   De wijzigingen worden opgeslagen in het juiste bestand in de `public` map.
    -   Herlaad de portfolio-website (`http://localhost:5173`) om je wijzigingen direct te zien.

De editor slaat ook automatisch een back-up van de vorige versie op in de `CV_HISTORY` map, voor het geval je een fout maakt.
