# 📧 Sistema Email Marketing Professionale

Un sistema completo, sicuro e facile da usare per l'invio di email professionali e newsletter.
Progettato per essere semplice ("Zero Configurazione" per l'uso quotidiano) ma potente.

## 🚀 Caratteristiche Principali

*   **Interfaccia Intuitiva**: Editor visivo semplice e pulito.
*   **Anteprima Live**: Vedi esattamente come apparirà l'email mentre la scrivi.
*   **Invio Singolo**: Invia email personalizzate a singoli clienti rapidamente.
*   **Invio Massivo (BULK)**:
    *   Importazione destinatari da **CSV**.
    *   Personalizzazione dinamica (es. "Ciao {{nome}}").
    *   Invio sequenziale con intervallo di sicurezza (anti-spam).
    *   Log dettagliati degli invii.
*   **Template Professionale**: Design responsive compatibile con Gmail, Outlook, Apple Mail, ecc.
*   **Sicurezza**: Credenziali separate dal codice.

---

## 📂 Struttura del Progetto

Il workspace è stato riorganizzato per garantire ordine e manutenibilità:

*   `START.bat`: **Doppio click qui per avviare il sistema.**
*   `config/`: Contiene i file di configurazione.
    *   `config.json`: Le tue credenziali (NON condividere questo file).
    *   `config.example.json`: Esempio di configurazione.
*   `public/`: File del sito web (HTML, CSS, JS).
*   `src/`: Codice del server (Backend).
*   `scripts/`: Script di avvio e utilità.
*   `docs/`: Vecchia documentazione e guide.

---

## 🛠️ Installazione e Configurazione

### 1. Requisiti
*   **Node.js** installato sul computer.

### 2. Prima Configurazione (Solo la prima volta)
1.  Vai nella cartella `config`.
2.  Copia il file `config.example.json` e rinominalo in `config.json`.
3.  Apri `config.json` con un editor di testo (es. Blocco Note).
4.  Inserisci le tue credenziali email:
    ```json
    "user": "tua@email.com",
    "pass": "tua-password-app"
    ```
    > **NOTA**: Se usi Gmail, devi usare una "Password per le app" (App Password), non la tua password normale.

### 3. Avvio
1.  Fai doppio click su **`START.bat`**.
2.  Il browser si aprirà automaticamente su `http://localhost:3000`.

---

## 📖 Guida all'Uso

### Invio Singolo
1.  Compila i campi (Oggetto, Contenuto, ecc.).
2.  Inserisci l'email del destinatario.
3.  Clicca su **"📤 Invia Email"**.

### Invio Massivo (BULK)
1.  Clicca sul pulsante **"📤 Bulk"** in alto a sinistra.
2.  **Importa Destinatari**:
    *   Trascina un file CSV nell'area dedicata.
    *   Formato CSV richiesto: `email,nome,azienda,cognome`.
3.  **Personalizza il Messaggio**:
    *   Usa i tag `{{nome}}`, `{{azienda}}` nel testo. Verranno sostituiti automaticamente.
4.  **Invia**:
    *   Clicca **"🚀 Inizia Invio BULK"**.
    *   Il sistema invierà le email una alla volta rispettando l'intervallo scelto.

---

## 🔒 Sicurezza
*   Le password non sono più nel codice sorgente ma nel file `config/config.json`.
*   Questo file è escluso dalla condivisione (se si usa git, aggiungerlo al .gitignore).

## ❓ Risoluzione Problemi
*   **Server Offline?**: Assicurati di aver avviato `START.bat` e non chiudere la finestra nera che appare.
*   **Errore Login?**: Controlla user e password in `config/config.json`.
*   **Email non arrivano?**: Controlla la cartella Spam.

---

**Sistema Generalizzato v2.0**
