import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../App'

describe('Personal Landing Page', () => {
  it('renders without crashing', () => {
    render(<App />)
  })

  describe('Hero Section', () => {
    it('has a hero section with data-testid="hero"', () => {
      render(<App />)
      const hero = screen.getByTestId('hero')
      expect(hero).toBeInTheDocument()
    })

    it('hero section contains a name or heading', () => {
      render(<App />)
      const hero = screen.getByTestId('hero')
      const heading = hero.querySelector('h1, h2')
      expect(heading).toBeInTheDocument()
      expect(heading?.textContent?.trim().length).toBeGreaterThan(0)
    })
  })

  describe('About Section', () => {
    it('has an about section with data-testid="about"', () => {
      render(<App />)
      const about = screen.getByTestId('about')
      expect(about).toBeInTheDocument()
    })

    it('about section contains descriptive text', () => {
      render(<App />)
      const about = screen.getByTestId('about')
      expect(about.textContent?.length).toBeGreaterThan(50)
    })
  })

  describe('Projects Section', () => {
    it('has a projects section with data-testid="projects"', () => {
      render(<App />)
      const projects = screen.getByTestId('projects')
      expect(projects).toBeInTheDocument()
    })

    it('projects section contains at least 2 project items', () => {
      render(<App />)
      const projects = screen.getByTestId('projects')
      const projectItems = projects.querySelectorAll('article, .project, [data-testid*="project"]')
      
      if (projectItems.length === 0) {
        const headings = projects.querySelectorAll('h2, h3, h4')
        expect(headings.length).toBeGreaterThanOrEqual(2)
      } else {
        expect(projectItems.length).toBeGreaterThanOrEqual(2)
      }
    })
  })

  describe('Contact Section', () => {
    it('has a contact section with data-testid="contact"', () => {
      render(<App />)
      const contact = screen.getByTestId('contact')
      expect(contact).toBeInTheDocument()
    })

    it('contact section contains contact information', () => {
      render(<App />)
      const contact = screen.getByTestId('contact')
      const hasLink = contact.querySelector('a') !== null
      const hasText = (contact.textContent?.length || 0) > 10
      expect(hasLink || hasText).toBe(true)
    })
  })
})