import { BASE_IMAGE_URL } from "@/pages/api/endpoint"
export default function evolutionIncidentResponse({heading}) {
  return (
    <section className="container px-16 mx-auto my-30">
      <div className="w-full mt-15">
        <img
          src={`${BASE_IMAGE_URL}/incident-response/infograph.svg`}
          alt="VIXA Platforms Workflow"
          className="block w-full h-auto"
        />
      </div>
    </section>
  )
}
