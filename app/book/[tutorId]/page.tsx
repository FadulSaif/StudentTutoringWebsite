import { BookingPage } from "@/components/booking/booking-page"

interface BookingPageProps {
  params: {
    tutorId: string
  }
}

export default function BookTutorPage({ params }: BookingPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <BookingPage tutorId={params.tutorId} />
      </main>
    </div>
  )
}
