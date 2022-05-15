const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer({ event, button, drawer });
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer({ event, button, drawer });
    });
  },

  _toggleDrawer({ event, button, drawer }) {
    button.classList.toggle('active');
    drawer.classList.toggle('active');
    event.stopPropagation();
  },

  _closeDrawer({ event, button, drawer }) {
    button.classList.remove('active');
    drawer.classList.remove('active');
    event.stopPropagation();
  },
};

export default DrawerInitiator;
