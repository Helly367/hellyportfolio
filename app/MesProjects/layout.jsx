export default function MesProjectsLayout({ children }) {
  return (
    <div className="mes-projects-layout">
      <h1>Portfolio - Mes Projets</h1>
      <nav>
        <a href="/">Accueil</a>
        <a href="/MesProjects">Tous les projets</a>
      </nav>
      <section className="projects-content">
        {children} {/* Contenu de la page MesProjects */}
      </section>
    </div>
  );
}