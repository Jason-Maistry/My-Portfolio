export default function toggleMenu() {
  const open = document.getElementById("openMenu");
  const close = document.getElementById("closeMenu");
  const tabs = document.getElementById("tabs");

  open.addEventListener('click', () => {
    tabs.style.marginLeft = "0";
  })

  close.addEventListener('click', () => {
    tabs.style.marginLeft = "-100%";
  })

  document.querySelectorAll("#tabs a").forEach(a => {
    a.addEventListener('click', () => {
      tabs.style.marginLeft = "-100%";
    })
  })
}