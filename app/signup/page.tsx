import { SignupForm } from "@/components/auth/signup-form"

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Join X-Tutor</h1>
            <p className="text-muted-foreground">Create your account and start learning</p>
          </div>
          <SignupForm />
        </div>
      </main>
    </div>
  )
}
