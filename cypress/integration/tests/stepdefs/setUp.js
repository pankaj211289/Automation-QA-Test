beforeEach(() => {
    // Supress Uncaught exception
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
});