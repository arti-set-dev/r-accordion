export default class Accordion {
  constructor(selector, options) {
    let defaultOptions = {
      isOpen: () => { },
      isClose: () => { },
      isAutoClose: () => { },
      speed: 300,
      autoClose: false,

      classNames: {
        accordionItem: 'accordion-item',
        accordionBtn: 'accordion-btn',
        accordionContent: 'accordion-content',
        showContent: 'show',
        arrowIcon: 'arrow-icon',
        arrrowIconActive: 'icon-active',
        btnItemActive: 'accordion-btn-active',
      }
    };

    this.options = Object.assign(defaultOptions, options);
    this.accordionList = document?.querySelector(selector);
    this.accordionBtnList = this.accordionList?.querySelectorAll(`.${this.options.classNames.accordionBtn}`);
    this.accordionsContents = this.accordionList?.querySelectorAll(`.accordion-content`);
    this.previusActiveAccordion = null;
    this.currentActiveAccordion = null;

    this.events();
  }

  events() {
    document.addEventListener('DOMContentLoaded', () => {
      if (this.accordionList) {
        document.addEventListener('click', (e) => {
          this.accordionBtnList.forEach(btnItem => {
            if (e.target == btnItem) {
              const accordionContent = btnItem.closest(`.${this.options.classNames.accordionItem}`).querySelector(`.${this.options.classNames.accordionContent}`);
              this.autoCloseAccordion(accordionContent);
              accordionContent?.classList.toggle(this.options.classNames.showContent);
              if (accordionContent?.classList.contains(this.options.classNames.showContent)) {
                this.openAccordion(btnItem, accordionContent);
              } else {
                this.closeAccordion(btnItem, accordionContent);
              }
            }
          });
        })
      }
    })
  }

  openAccordion(btnItem, accordionContent) {
    const arrrowIcon = btnItem?.querySelector(`.${this.options.classNames.arrowIcon}`);
    arrrowIcon?.classList.add(this.options.classNames.arrrowIconActive);
    arrrowIcon?.style.setProperty('--accordion-time', `${this.options.speed / 1000}s`);
    accordionContent?.style.setProperty('--accordion-time', `${this.options.speed / 1000}s`);

    if (accordionContent) {
      btnItem.setAttribute('aria-expanded', true);
      btnItem.setAttribute('aria-hidden', false);
      btnItem.classList.add(this.options.classNames.btnItemActive);
      btnItem.style.setProperty('--accordion-time', `${this.options.speed / 1000}s`);
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    }
    this.options.isOpen(this);
  }

  closeAccordion(btnItem, accordionContent) {
    const arrrowIcon = btnItem?.querySelector(`.${this.options.classNames.arrowIcon}`);
    arrrowIcon?.classList.remove(this.options.classNames.arrrowIconActive);

    if (accordionContent) {
      btnItem.setAttribute('aria-expanded', false);
      btnItem.setAttribute('aria-hidden', true);
      btnItem.classList.remove(this.options.classNames.btnItemActive);
      accordionContent.style.maxHeight = null;
    }
    this.options.isClose(this);
  }

  autoCloseAccordion(accordionContent) {
    if (this.options.autoClose) {
      const previusActiveAccordion = this.accordionList?.querySelector(`.${this.options.classNames.showContent}`);
      const previusActiveBtn = this.accordionList?.querySelector(`.${this.options.classNames.btnItemActive}`);
      const previusActiveArrowIcon = this.accordionList?.querySelector(`.${this.options.classNames.arrrowIconActive}`);
      const currentActiveAccordion = accordionContent;

      if (previusActiveAccordion && currentActiveAccordion != previusActiveAccordion) {
        previusActiveAccordion.classList.remove(this.options.classNames.showContent);
        previusActiveBtn?.classList.remove(this.options.classNames.btnItemActive);
        previusActiveArrowIcon?.classList.remove(this.options.classNames.arrrowIconActive);
        previusActiveAccordion.style.maxHeight = '0px';
      }
      this.options.isAutoClose(this);
    }
  }
}