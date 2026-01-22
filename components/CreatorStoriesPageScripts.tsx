'use client'

import { useEffect } from 'react';

export default function CreatorStoriesPageScripts() {
  useEffect(() => {
    // Form submission handling for popup
    const popupForm = document.querySelector('[data-popup-form="form-el"]') as HTMLFormElement;
    if (popupForm) {
      popupForm.addEventListener('submit', function() {
        const buttonText = document.querySelector('[data-popup-form="button-text"]');
        if (buttonText) {
          buttonText.textContent = 'Redirecting...';
        }
      });
    }

    // Fix the intercom banner issue
    const handleBodyMargin = () => {
      const bodyMarginTop = document.body.style.marginTop;
      
      if (!bodyMarginTop || bodyMarginTop === '0px') {
        document.body.classList.remove('intercom-banner-active');
      } else {
        document.body.classList.add('intercom-banner-active');
      }
    };

    // Check initially
    handleBodyMargin();
    
    // Create observer to watch for body style changes
    const observer = new MutationObserver(handleBodyMargin);
    
    // Observe the body element
    observer.observe(document.body, { 
      attributes: true,
      attributeFilter: ['style']
    });

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

    // Cleanup
    return () => {
      observer.disconnect();
      if (popupBack) {
        popupBack.removeEventListener('click', closePopup);
      }
    };
  }, []);

  return null; // This component doesn't render anything itself
}

