import { LearningRoom } from "@/components/learning/learning-room"

interface SessionPageProps {
  params: {
    sessionId: string
  }
}

export default function SessionPage({ params }: SessionPageProps) {
  return <LearningRoom sessionId={params.sessionId} />
}
