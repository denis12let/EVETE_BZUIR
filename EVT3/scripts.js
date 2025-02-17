const justifyContentButtons = document.querySelector('.flex__justifyContent');
const flexDirectionButtons = document.querySelector('.flex__flexDirection');
const alignItemsButtons = document.querySelector('.flex__alignItems');

const flexHandler = (flexSection, flexProperty) => {
  const buttonsList = flexSection.querySelectorAll('.buttons__item');
  const flexBox = flexSection.querySelector(`.${flexProperty}__box`);
  console.log(flexBox);

  buttonsList.forEach((button) => {
    button.addEventListener('click', () => {
      buttonsList.forEach((btn) => btn.classList.remove('button-active'));
      button.classList.add('button-active');

      flexBox.style[flexProperty] = button.textContent.toLowerCase();
    });
  });
};

flexHandler(justifyContentButtons, 'justifyContent');
flexHandler(flexDirectionButtons, 'flexDirection');
flexHandler(alignItemsButtons, 'alignItems');
