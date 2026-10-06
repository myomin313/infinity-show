export default function EvolutionMTDRSection({heading}) {
  return (
    <section className="container px-16 mx-auto my-30">
      <h1 className="bg-gradient-to-r from-[#F98D11] to-[#199AE2] bg-clip-text text-transparent font-bold text-5xl" dangerouslySetInnerHTML={{ __html: heading }}></h1>
      <div className="w-full mt-15">
        <img
          src="/assets/images/evo-mtdr.png"
          alt="VIXA Platforms Workflow"
          className="block w-full h-auto"
        />
      </div>
    </section>
  )
}
