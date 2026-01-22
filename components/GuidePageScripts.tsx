'use client'

import { useEffect } from 'react';

export default function GuidePageScripts() {
  useEffect(() => {
    // Initialize Finsweet CMS Filter if available
    // The fs-cmsfilter attributes are preserved in the JSX for compatibility
    // with the Finsweet Attributes library when loaded

    // Pop-up handling
    const popupWrapper = document.getElementById('pop-up-wrapper');
    const popupBack = document.querySelector('.pop-up-back');
    const popupExitButton = document.querySelector('.pop-up-exit-button');

    const closePopup = () => {
      if (popupWrapper) {
        popupWrapper.style.display = 'none';
      }
    };

    if (popupBack) {
      popupBack.addEventListener('click', closePopup);
    }

    if (popupExitButton) {
      popupExitButton.addEventListener('click', (e) => {
        e.preventDefault();
        closePopup();
      });
    }

    // Handle "The Guides" link click to open popup
    const guidesLink = document.querySelector('[data-w-id="9514747d-8c1e-3edc-fdf8-c81f137dd83d"]');
    if (guidesLink) {
      guidesLink.addEventListener('click', (e) => {
        e.preventDefault();
        if (popupWrapper) {
          popupWrapper.style.display = 'flex';
        }
      });
    }

    // Form submission handling
    const pricingGuideForm = document.getElementById('wf-form-Pricing-Guide-Access') as HTMLFormElement;
    if (pricingGuideForm) {
      pricingGuideForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(pricingGuideForm);
        const email = formData.get('email_address');
        const role = formData.get('Role');

        if (email && role) {
          // Show success message
          const successEl = pricingGuideForm.parentElement?.querySelector('.w-form-done');
          if (successEl) {
            (successEl as HTMLElement).style.display = 'block';
          }
          pricingGuideForm.style.display = 'none';

          // Redirect to PDF after a short delay
          setTimeout(() => {
            window.open('https://files.tryflowdrive.com/jnzcJMARx_Supreme-Coach-Pricing-Guide---2.0.pdf', '_blank');
          }, 1500);
        }
      });
    }

    // Cleanup
    return () => {
      if (popupBack) {
        popupBack.removeEventListener('click', closePopup);
      }
    };
  }, []);

  return null; // This component doesn't render anything itself
}

