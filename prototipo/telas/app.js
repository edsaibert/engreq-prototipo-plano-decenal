document.addEventListener('click', (event) => {
  const navButton = event.target.closest('[data-nav]');
  if (navButton) {
    window.location.href = navButton.getAttribute('data-nav');
    return;
  }

  const openDialogButton = event.target.closest('[data-open-dialog]');
  if (openDialogButton) {
    const dialogId = openDialogButton.getAttribute('data-open-dialog');
    const dialog = document.getElementById(dialogId);

    if (dialog && typeof dialog.showModal === 'function') {
      dialog.showModal();
    }

    return;
  } 

  const closeDialogButton = event.target.closest('[data-close-dialog]');
  if (closeDialogButton) {
    const dialogId = closeDialogButton.getAttribute('data-close-dialog');
    const dialog = document.getElementById(dialogId);
    if (dialog && typeof dialog.close === 'function') {
      dialog.close();
    }
  }

  const header = event.target.closest('.timeline-header');
  if (!header) return;

  const item = header.closest('.timeline-item');

  document.querySelectorAll('.timeline-item.is-open')
    .forEach(el => {
      if (el !== item) el.classList.remove('is-open');
    });

  item.classList.toggle('is-open');
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') {
    return;
  }

  document.querySelectorAll('dialog[open]').forEach((dialog) => {
    if (typeof dialog.close === 'function') {
      dialog.close();
    }
  });
});