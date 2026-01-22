"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Swiper: any;
  }
}

export default function CreatorPricingPageScripts() {
  useEffect(() => {
    const Swiper = (window as any).Swiper;

    const popupForm = document.querySelector(
      '[data-popup-form="form-el"]'
    ) as HTMLFormElement;
    if (popupForm) {
      popupForm.addEventListener("submit", function () {
        const buttonText = document.querySelector(
          '[data-popup-form="button-text"]'
        );
        if (buttonText) {
          buttonText.textContent = "Redirecting...";
        }
      });
    }

    const handleBodyMargin = () => {
      const bodyMarginTop = document.body.style.marginTop;

      if (!bodyMarginTop || bodyMarginTop === "0px") {
        document.body.classList.remove("intercom-banner-active");
      } else {
        document.body.classList.add("intercom-banner-active");
      }
    };

    handleBodyMargin();

    const observer = new MutationObserver(handleBodyMargin);

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["style"],
    });

    const dropdownToggle = document.querySelector(
      "[data-open-by-default='toggle']"
    );
    if (dropdownToggle) {
      dropdownToggle.dispatchEvent(new Event("mousedown"));
      setTimeout(() => {
        dropdownToggle.dispatchEvent(new Event("mouseup"));
      }, 10);
    }

    let swiper: any = null;
    if (Swiper) {
      swiper = new Swiper("#creators-slider", {
        spaceBetween: 24,
        preventClicks: false,
        grabCursor: true,
        a11y: false as any,
        freeMode: {
          enabled: true,
          momentum: true,
          momentumRatio: 0.8,
          momentumVelocityRatio: 0.2,
        },
        speed: 30000,
        loopAdditionalSlides: 10,
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
        breakpoints: {
          0: {
            slidesPerView: 1.2,
            spaceBetween: 16,
          },
          480: {
            slidesPerView: "auto",
            spaceBetween: 16,
          },
          767: {
            slidesPerView: "auto",
            spaceBetween: 16,
          },
          992: {
            slidesPerView: "auto",
            spaceBetween: 24,
          },
        },
      });
    }

    const setMaxHeightForFaqP = () => {
      const faqPElements = document.querySelectorAll(".faq-p");

      faqPElements.forEach((faqP) => {
        const children = faqP.children;
        let totalHeight = 0;

        for (let i = 0; i < children.length; i++) {
          totalHeight += (children[i] as HTMLElement).offsetHeight;
        }

        totalHeight += 4;
        (faqP as HTMLElement).style.maxHeight = `${totalHeight}px`;
      });
    };

    setMaxHeightForFaqP();

    const popupWrapper = document.getElementById("pop-up-wrapper");
    const popupBack = document.querySelector(".pop-up-back");
    const popupExitButton = document.querySelector(".pop-up-exit-button");

    const closePopup = () => {
      if (popupWrapper) {
        popupWrapper.style.display = "none";
      }
    };

    if (popupBack) {
      popupBack.addEventListener("click", closePopup);
    }

    if (popupExitButton) {
      popupExitButton.addEventListener("click", (e) => {
        e.preventDefault();
        closePopup();
      });
    }

    return () => {
      observer.disconnect();
      if (swiper) {
        swiper.destroy();
      }
      if (popupBack) {
        popupBack.removeEventListener("click", closePopup);
      }
    };
  }, []);

  return null;
}
