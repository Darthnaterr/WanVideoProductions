import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">Capturing Your Perfect Moments</h1>
          <p className="text-xl mb-8">Wedding videography that tells your unique story</p>
          <Link href="/contact" className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300">
            Book Now
          </Link>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="relative aspect-video cursor-pointer group">
                <Image
                  src={`/featured-${item}.jpg`}
                  alt={`Featured video ${item}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="text-white text-xl">Play Video</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>
          <blockquote className="text-xl italic">
            "wan video productions captured our wedding day perfectly. The attention to detail and storytelling in our video was beyond our expectations."
          </blockquote>
          <p className="mt-4 font-semibold">- Sarah & John</p>
        </div>
      </section>
    </div>
  )
}

