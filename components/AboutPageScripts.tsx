'use client'

import { useEffect } from 'react'

export default function AboutPageScripts() {
  useEffect(() => {
    // Team member card hover effects
    const teamCards = document.querySelectorAll('.team-collection_card')
    teamCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.classList.add('is-hovered')
      })
      card.addEventListener('mouseleave', () => {
        card.classList.remove('is-hovered')
      })
    })

    // Modal functionality for team member details (if needed)
    const teamItems = document.querySelectorAll('.team-collection_item')
    teamItems.forEach(item => {
      const card = item.querySelector('.team-collection_card')
      const modal = item.querySelector('.profile-component')
      const exitButton = item.querySelector('.modal_exit-modal')
      const background = item.querySelector('.modal_background')
      
      if (card && modal) {
        card.addEventListener('click', () => {
          (modal as HTMLElement).style.display = 'flex';
          (modal as HTMLElement).style.opacity = '1'
        })
      }
      
      if (exitButton && modal) {
        exitButton.addEventListener('click', () => {
          (modal as HTMLElement).style.display = 'none';
          (modal as HTMLElement).style.opacity = '0'
        })
      }
      
      if (background && modal) {
        background.addEventListener('click', () => {
          (modal as HTMLElement).style.display = 'none';
          (modal as HTMLElement).style.opacity = '0'
        })
      }
    })

    // Investor slider (if exists)
    const investorSlider = document.getElementById('investorSlider')
    if (investorSlider) {
      // Basic slider functionality can be added here if needed
    }

    // About animation trigger
    const aboutAnimation = document.querySelector('.about-sc-animation')
    if (aboutAnimation) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-playing')
            observer.unobserve(entry.target)
          }
        })
      }, {
        threshold: 0.5
      })
      
      observer.observe(aboutAnimation)
    }

    // Scroll animations for sections
    const sections = document.querySelectorAll('section')
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })

    sections.forEach(section => {
      sectionObserver.observe(section)
    })

    // Cleanup
    return () => {
      sectionObserver.disconnect()
    }
  }, [])

  return null
}

