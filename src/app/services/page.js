export default function ServicesPage() {
    const services = [
      { title: 'Snow Plowing', description: 'Keep your driveway and roads clear of snow.' },
      { title: 'Salting Services', description: 'Prevent ice formation with our salting services.' },
      { title: 'Sidewalk Clearing', description: 'Safe pathways for pedestrians.' },
    ];
  
    return (
      <section className="py-16 px-6">
        <h1 className="text-4xl font-bold text-purple-600 mb-6">Our Services</h1>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-blue-900 text-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold">{service.title}</h2>
              <p className="mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  