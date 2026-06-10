
import { Star, Quote } from 'lucide-react';
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
// Sample client review data
const clientReviews = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "CEO at TechStart",
    company: "TechStart Inc.",
    image: img1,
    review: "The portfolio website exceeded our expectations. The attention to detail and clean frontend structure made the transition seamless.",
    rating: 6, // 6-star rating
  },
  {
    id: 2,
    name: "David Chen",
    role: "Product Manager",
    company: "DevFlow Studio",
    image: img2,
    review: "Incredible communication and quick delivery. Handled complex API integrations efficiently. Highly recommended developer!",
    rating: 5,
  },
  {
    id: 3,
    name: "Elena Rostova",
    role: "Creative Director",
    company: "PixelPerfect",
    image: img3,
    review: "Flawless UI work. Transformed our Figma designs into pixel-perfect, highly responsive React components. A true professional.",
    rating: 6,
  },
];

const Clients = () => {
  return (
    <section className="min-h-screen bg-gray-200 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Client Testimonials
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            See what industry leaders and clients say about working together on development projects.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientReviews.map((client, index) => (
            <div
              key={client.id}
              className="bg-gray-300 rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between relative overflow-hidden hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={200 + (index * 100)}
            >
              {/* Decorative Quote Icon */}
              <Quote className="absolute right-6 top-6 h-12 w-12 text-gray-100 transform rotate-180 pointer-events-none" />

              <div>
                {/* Inline 1 to 6 Star Rating Logic */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(6)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className={`h-5 w-5 ${
                        starIndex < client.rating 
                          ? "text-amber-400 fill-amber-400" 
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-600 italic leading-relaxed mb-6 relative z-10">
                  "{client.review}"
                </p>
              </div>

              {/* Client Profile Info */}
              <div className="flex items-center mt-auto pt-4 border-t border-gray-50">
                <img
                  className="h-20 w-20 rounded-full object-cover border border-gray-200"
                  src={client.image}
                  alt={client.name}
                />
                <div className="ml-4">
                  <h4 className="text-sm font-bold text-gray-900">
                    {client.name}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {client.role} &middot; <span className="text-blue-600">{client.company}</span>
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Clients;
