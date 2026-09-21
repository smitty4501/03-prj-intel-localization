const rtlToggle = document.querySelector('.rtl-toggle');
const root = document.documentElement;

if (rtlToggle) {
  rtlToggle.addEventListener('click', () => {
    const isRtl = root.getAttribute('dir') === 'rtl';
    root.setAttribute('dir', isRtl ? 'ltr' : 'rtl');
    rtlToggle.textContent = isRtl ? 'RTL View' : 'LTR View';
  });
}
