'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    Swiper: any
  }
}

export default function CreatorsPageScripts() {
  useEffect(() => {
    // Wait for Swiper to be available
    const initSwiper = () => {
      if (typeof window !== 'undefined' && window.Swiper) {
        // Initialize creators slider
        new window.Swiper('#creators-slider', {
          spaceBetween: 24,
          preventClicks: false,
          grabCursor: true,
          a11y: false,
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
              slidesPerView: 'auto',
              spaceBetween: 16,
            },
            767: {
              slidesPerView: 'auto',
              spaceBetween: 16,
            },
            992: {
              slidesPerView: 'auto',
              spaceBetween: 24,
            },
          },
        })
      }
    }

    // Check if Swiper is already loaded
    if (window.Swiper) {
      initSwiper()
    } else {
      // Wait for Swiper to load
      const checkSwiper = setInterval(() => {
        if (window.Swiper) {
          clearInterval(checkSwiper)
          initSwiper()
        }
      }, 100)

      // Clear interval after 10 seconds to prevent infinite loop
      setTimeout(() => clearInterval(checkSwiper), 10000)
    }

    // CTA Slider activation on scroll
    const ctaSlider = document.querySelector('[data-cta-slider="make-active-on-scroll"]')
    
    if (ctaSlider) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
            observer.unobserve(entry.target)
          }
        })
      }, {
        threshold: 0.1,
        rootMargin: '0px'
      })
      
      observer.observe(ctaSlider)
    }

    // Hero animations for creators page
    const animateHeroCards = () => {
      const heroCards = document.querySelectorAll('[data-creators-hero]')
      heroCards.forEach((card, index) => {
        setTimeout(() => {
          (card as HTMLElement).style.opacity = '1';
          (card as HTMLElement).style.transform = 'scale(1)'
        }, 200 * index)
      })
    }

    // Run hero animations after a short delay
    setTimeout(animateHeroCards, 500)

    // FAQ dropdown functionality
    const faqItems = document.querySelectorAll('.faq-p.w-dropdown')
    faqItems.forEach(item => {
      const toggle = item.querySelector('.faq.w-dropdown-toggle')
      const content = item.querySelector('.faq-content.w-dropdown-list')
      
      if (toggle && content) {
        toggle.addEventListener('click', () => {
          const isOpen = item.classList.contains('w--open')
          
          // Close all other FAQs
          faqItems.forEach(otherItem => {
            if (otherItem !== item) {
              otherItem.classList.remove('w--open')
              const otherContent = otherItem.querySelector('.faq-content.w-dropdown-list') as HTMLElement
              if (otherContent) {
                otherContent.style.display = 'none'
              }
            }
          })
          
          // Toggle current FAQ
          if (isOpen) {
            item.classList.remove('w--open');
            (content as HTMLElement).style.display = 'none'
          } else {
            item.classList.add('w--open');
            (content as HTMLElement).style.display = 'block'
          }
        })
      }
    })

    // Popup functionality
    const popupWrapper = document.getElementById('pop-up-wrapper')
    const popupBack = document.querySelector('.pop-up-back')
    const popupExit = document.querySelector('.pop-up-exit-button')
    
    const closePopup = () => {
      if (popupWrapper) {
        popupWrapper.style.display = 'none'
      }
    }
    
    if (popupBack) {
      popupBack.addEventListener('click', closePopup)
    }
    
    if (popupExit) {
      popupExit.addEventListener('click', (e) => {
        e.preventDefault()
        closePopup()
      })
    }

    // Monetize grid scroll trigger animation
    const monetizeGrid = document.querySelector('[data-scrolltrigger="monetize_grid"]')
    if (monetizeGrid) {
      const monetizeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            monetizeObserver.unobserve(entry.target)
          }
        })
      }, {
        threshold: 0.2
      })
      
      monetizeObserver.observe(monetizeGrid)
    }

    // Automated bento hover effect
    const automatedBento = document.querySelector('[data-automated-bento="trigger"]')
    if (automatedBento) {
      const floatingMenu = document.querySelector('[data-automated-bento="floating-menu"]')
      const schedulingDash = document.querySelector('.automated_scheduling-dash')
      
      automatedBento.addEventListener('mouseenter', () => {
        if (schedulingDash) {
          (schedulingDash as HTMLElement).style.opacity = '0.3'
        }
      })
      
      automatedBento.addEventListener('mouseleave', () => {
        if (schedulingDash) {
          (schedulingDash as HTMLElement).style.opacity = '1'
        }
      })
    }

  }, [])

  return null
}

