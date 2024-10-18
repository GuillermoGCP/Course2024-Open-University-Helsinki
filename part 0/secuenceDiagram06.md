sequenceDiagram
participant browser
participant server

    Note right of browser: The user creates and submits a new note using the form. The event handler function is triggered, creates the new note element in DOM with the input data, executes redrawNotes() to updastes the notes list and send the new note data to server.

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: success message from the back (or error, if fetch fails)
    deactivate server
