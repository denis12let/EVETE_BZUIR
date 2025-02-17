const justifyContent = document.querySelector('.grid__justifyContent');
const autoFlow = document.querySelector('.grid__gridAutoFlow');
const alignItems = document.querySelector('.grid__alignItems');

const gridHandler = (gridSection, gridProperty) => {
  const buttonsList = gridSection.querySelectorAll('.buttons__item');
  const gridBox = gridSection.querySelector(`.${gridProperty}__box`);

  buttonsList.forEach((button) => {
    button.addEventListener('click', () => {
      buttonsList.forEach((btn) => btn.classList.remove('button-active'));
      button.classList.add('button-active');

      gridBox.style[gridProperty] = button.textContent.toLowerCase();
    });
  });
};

gridHandler(justifyContent, 'justifyContent');
gridHandler(autoFlow, 'gridAutoFlow');
gridHandler(alignItems, 'alignItems');
