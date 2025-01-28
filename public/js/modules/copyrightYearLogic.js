// modules/copyrightYearLogic.js
export function setCopyrightYear() {
      const copyrightDate = document.querySelector('.copyrightDate');
  
      if (copyrightDate) {
          const currentYear = new Date().getFullYear();
          copyrightDate.textContent = currentYear;
      } else {
          console.error('Element with class "copyrightDate" not found.');
      }
  }
  