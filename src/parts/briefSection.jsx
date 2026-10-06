import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'

export default function BriefSection({title}) {
  return (
    <section>
      <div className="container px-4 mx-auto md:px-16">
        <div className="flex justify-center">
            <Link
                href="#learn-more"
                className="inline-flex items-center p-5 px-6 py-3 font-medium bg-gradient-to-r from-[#F98D11] to-[#199AE2] hover:opacity-90"
            >
                <span>HOW IT WORKS</span>
                <span className="ml-15">
                <ArrowRight className="w-4 h-8" />
                </span>
            </Link>
        </div>

        <div className="relative w-full max-w-4xl mx-auto mt-8">
          <div className="w-full aspect-video rounded-lg overflow-hidden bg-[#0D0F49]">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/VIDEO_ID?rel=0"
              title="ViXa Platform Overview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <Link
            href="https://www.youtube.com/watch?v=VIDEO_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute p-2 bg-black rounded bottom-4 right-4 bg-opacity-60 hover:bg-opacity-80"
          >
            <ExternalLink className="w-4 h-4 text-white" />
          </Link>
        </div>

        <h2 className="mt-8 text-5xl font-bold text-center text-white md:text-4xl">
          {title} Overview
        </h2>
      </div>
    </section>
  )
}
