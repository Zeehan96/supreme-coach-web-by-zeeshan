'use client'

import { useEffect } from 'react';

declare global {
  interface Window {
    Webflow: any;
  }
}

export default function GuidePostPageScripts() {
  useEffect(() => {
    // Intercom banner issue fix
    const handleBodyMargin = () => {
      const bodyMarginTop = document.body.style.marginTop;
      if (!bodyMarginTop || bodyMarginTop === '0px') {
        document.body.classList.remove('intercom-banner-active');
      } else {
        document.body.classList.add('intercom-banner-active');
      }
    };

    handleBodyMargin();
    const observer = new MutationObserver(handleBodyMargin);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['style']
    });

    // Update #currentYear with the current year
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
      currentYearElement.textContent = new Date().getFullYear().toString();
    }

    // Table of Contents functionality (Finsweet attributes)
    // This would be handled by the Finsweet TOC script loaded in layout.tsx
    const initTOC = () => {
      const tocContainer = document.querySelector('[fs-toc-element="list"]');
      const contentContainer = document.querySelector('[fs-toc-element="contents"]');
      
      if (tocContainer && contentContainer) {
        const headings = contentContainer.querySelectorAll('h2, h3');
        
        headings.forEach((heading, index) => {
          // Add ID to heading if not present
          if (!heading.id) {
            heading.id = `heading-${index}`;
          }
          
          // Create TOC link
          const tocItem = document.createElement('a');
          tocItem.href = `#${heading.id}`;
          tocItem.textContent = heading.textContent;
          tocItem.className = 'toc-link';
          tocItem.style.cssText = `
            display: block;
            padding: 0.5rem 0;
            color: inherit;
            text-decoration: none;
            opacity: 0.7;
            transition: opacity 0.2s ease;
            font-size: 0.875rem;
          `;
          
          tocItem.addEventListener('mouseenter', () => {
            tocItem.style.opacity = '1';
          });
          tocItem.addEventListener('mouseleave', () => {
            tocItem.style.opacity = '0.7';
          });
          
          tocContainer.appendChild(tocItem);
        });
      }
    };

    // Run TOC init after a short delay to ensure content is rendered
    setTimeout(initTOC, 100);

    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.hash) {
        const element = document.querySelector(target.hash);
        if (element) {
          e.preventDefault();
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // Social share functionality
    const initSocialShare = () => {
      const shareButtons = document.querySelectorAll('[data-social-share]');
      shareButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
          e.preventDefault();
          const platform = (button as HTMLElement).dataset.socialShare;
          const url = encodeURIComponent(window.location.href);
          const title = encodeURIComponent(document.title);
          
          let shareUrl = '';
          switch (platform) {
            case 'twitter':
              shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
              break;
            case 'linkedin':
              shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
              break;
            case 'facebook':
              shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
              break;
          }
          
          if (shareUrl) {
            window.open(shareUrl, '_blank', 'width=600,height=400');
          }
        });
      });
    };

    initSocialShare();

    // Cleanup
    return () => {
      observer.disconnect();
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return null; // This component doesn't render anything itself
}

