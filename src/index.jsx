{projects.map(project => (
  <article key={project.id}>
    {project.image && <img src={project.image} alt={project.title} />}
    <h3>{project.title}</h3>
    {/* other fields */}
  </article>
))}
