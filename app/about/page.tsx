import Image from 'next/image'

export default function About() {
  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-8 text-center">About Wan Video Productions</h1>
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <Image
            src="/about-image.jpg"
            alt="Wan Video Productions team"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="md:w-1/2">
          <p className="text-lg mb-6">
            At Wan Video Productions, we are passionate about capturing the most beautiful and emotional moments of your wedding day. Our team of experienced videographers combines artistic vision with technical expertise to create stunning wedding films that you'll cherish for a lifetime.
          </p>
          <p className="text-lg mb-6">
            We believe that every couple has a unique story to tell, and we're dedicated to bringing that story to life through our cinematic approach to wedding videography. From the nervous excitement of getting ready to the joyous celebration on the dance floor, we'll be there to document every special moment.
          </p>
          <p className="text-lg">
            Let us help you relive your wedding day over and over again with a beautifully crafted wedding film that captures the essence of your love story.
          </p>
        </div>
      </div>
    </div>
  )
}

