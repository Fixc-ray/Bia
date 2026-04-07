// src/components/Projects.jsx
export default function Projects() {
  const projects = [
    "Energy Infrastructure",
    "Affordable Housing",
    "Transport Systems",
    "Water & Sanitation",
    "Telecommunications",
    "Agriculture Projects",
  ];

  return (
    <section className="px-8 py-16 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">
        Projects & Experience
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <div key={i} className="border p-6 rounded-xl hover:shadow-md">
            <h3 className="font-semibold">{project}</h3>
            <p className="text-sm text-gray-500 mt-2">
              Supporting development and financing of impactful infrastructure
              projects.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}