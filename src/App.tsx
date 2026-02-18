import './App.css'

function App() {
  return (
    <div className="app">
      <header data-testid="hero">
        <h1>Jane Developer</h1>
        <p>Full-stack developer focused on building fast, accessible web applications.</p>
      </header>

      <section data-testid="about">
        <h2>About Me</h2>
        <p>
          I'm a software engineer with a passion for creating clean, maintainable code and
          delightful user experiences. I enjoy working across the stack, from designing APIs
          to crafting intuitive front-end interfaces.
        </p>
        <p>
          In my free time I contribute to open-source projects, explore new web technologies,
          and write about topics that help others grow as developers.
        </p>
      </section>

      <section data-testid="projects">
        <h2>Projects</h2>

        <article className="project" data-testid="project-1">
          <h3>TaskFlow</h3>
          <p>
            A productivity app that helps teams organize and prioritize work with lightweight
            workflows and real-time collaboration features.
          </p>
        </article>

        <article className="project" data-testid="project-2">
          <h3>FocusNotes</h3>
          <p>
            A minimal note-taking app optimized for distraction-free writing, with sync and
            markdown support across devices.
          </p>
        </article>
      </section>

      <footer data-testid="contact">
        <h2>Contact</h2>
        <p>
          You can reach me via email at <a href="mailto:jane.developer@example.com">jane.developer@example.com</a>
          {' '}or find me on <a href="https://github.com/example" target="_blank" rel="noreferrer">GitHub</a>.
        </p>
      </footer>
    </div>
  )
}

export default App
