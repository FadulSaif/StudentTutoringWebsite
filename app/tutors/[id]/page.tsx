import { TutorProfilePage } from "@/components/tutors/tutor-profile-page"

interface TutorPageProps {
  params: {
    id: string
  }
}

export default function TutorPage({ params }: TutorPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <TutorProfilePage tutorId={params.id} />
      </main>
    </div>
  )
}
