const butInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
 window.deferredPrompt = event;
 const promptEvent = window.deferredPrompt;

 if (!promptEvent) {
     return;
 }

 promptEvent.prompt();

 window.deferredPrompt = null;

 installBtn.classList.toggle('hidden', true);
});



installBtn.classList.toggle('hidden', false);

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {

});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
 window.deferredPrompt = null;

});