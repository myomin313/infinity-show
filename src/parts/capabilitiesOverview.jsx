export default function CapabilitiesOverview({diagramSrc}) {
  return (
    <section className="mt-10">
        <div className="relative">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,_#12145E_0%,_#0448AD_100%)] z-0" />
            <div className="container relative z-10 px-6 mx-auto md:px-16">
                <h1 className="text-2xl text-[#F98D11] py-6">Explore More About ViXa Platform Capability</h1>
            </div>
        </div>
        <div className="container px-6 py-8 mx-auto text-lg md:px-16">
            <p className="mb-5 font-bold">Cyber Threat Intelligence (CTI) Platform Powered by ML Algorithms</p>
            <p><strong>A Cyber Threat Intelligence (CTI) Platform</strong> is a system that collects, analyses, and disseminates threat data to help organizations detect, prevent, and respond to cyber threats. When powered by Machine Learning (ML) algorithms, the platform enhances its ability to process vast amounts of threat data, identify patterns, and predict emerging threats with greater accuracy.</p>
            <div className="w-full mt-8 overflow-hidden">
                <img
                    src={`/assets/images/${diagramSrc}`}
                    alt="VIXA Platforms Workflow"
                    className="block w-full h-auto"
                />
            </div>
        </div>
    </section>
  )
}