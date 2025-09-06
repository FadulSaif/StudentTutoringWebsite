"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface BookingPageProps {
  tutorId: string
}

const getTutorData = (id: string) => {
  return {
    id: "1",
    name: "Fatimah Nurul",
    subject: "Mathematics",
    rating: 4.9,
    rate: 45,
    avatar: "/tutor-fatimah.jpg",
    specialties: ["Calculus", "Algebra", "Statistics"],
  }
}

export function BookingPage({ tutorId }: BookingPageProps) {
  const [bookingData, setBookingData] = useState({
    subject: "",
    date: "",
    time: "",
    duration: "1",
    notes: "",
    paymentMethod: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [step, setStep] = useState(1) // 1: Booking Details, 2: Payment, 3: Confirmation
  const [showConfirmation, setShowConfirmation] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const tutor = getTutorData(tutorId)
  const totalCost = tutor.rate * Number.parseFloat(bookingData.duration)

  const handleInputChange = (field: string, value: string) => {
    setBookingData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNextStep = () => {
    if (step === 1) {
      if (!bookingData.subject || !bookingData.date || !bookingData.time) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields.",
          variant: "destructive",
        })
        return
      }
      setShowConfirmation(true)
    } else if (step === 2) {
      if (!bookingData.paymentMethod || !bookingData.cardNumber || !bookingData.expiryDate || !bookingData.cvv) {
        toast({
          title: "Missing Payment Information",
          description: "Please fill in all payment details.",
          variant: "destructive",
        })
        return
      }
      setIsLoading(true)
      // Mock payment processing
      setTimeout(() => {
        setIsLoading(false)
        setStep(3)
      }, 2000)
    }
  }

  const handleBookSession = () => {
    setStep(2)
    setShowConfirmation(false)
  }

  const handleBookAnother = () => {
    router.push("/tutors")
  }

  const handleGoToDashboard = () => {
    router.push("/dashboard")
  }

  if (step === 3) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card className="text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Booking Confirmed!</h1>
              <p className="text-muted-foreground mb-6">Your session with {tutor.name} has been successfully booked.</p>

              <div className="bg-secondary/20 rounded-lg p-4 mb-6">
                <h3 className="font-semibold mb-2">Session Details</h3>
                <div className="space-y-1 text-sm">
                  <p>
                    <strong>Tutor:</strong> {tutor.name}
                  </p>
                  <p>
                    <strong>Subject:</strong> {bookingData.subject}
                  </p>
                  <p>
                    <strong>Date:</strong> {bookingData.date}
                  </p>
                  <p>
                    <strong>Time:</strong> {bookingData.time}
                  </p>
                  <p>
                    <strong>Duration:</strong> {bookingData.duration} hour(s)
                  </p>
                  <p>
                    <strong>Total Cost:</strong> RM {totalCost}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <Button onClick={handleGoToDashboard} className="w-full">
                  Go to Dashboard
                </Button>
                <Button onClick={handleBookAnother} variant="outline" className="w-full bg-transparent">
                  Book Another Session
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Booking Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>{step === 1 ? "Book Your Session" : "Payment Details"}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {step === 1 && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Select
                        value={bookingData.subject}
                        onValueChange={(value) => handleInputChange("subject", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          {tutor.specialties.map((specialty) => (
                            <SelectItem key={specialty} value={specialty}>
                              {specialty}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date">Date *</Label>
                        <Input
                          id="date"
                          type="date"
                          value={bookingData.date}
                          onChange={(e) => handleInputChange("date", e.target.value)}
                          min={new Date().toISOString().split("T")[0]}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time">Time *</Label>
                        <Select value={bookingData.time} onValueChange={(value) => handleInputChange("time", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="9:00 AM">9:00 AM</SelectItem>
                            <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                            <SelectItem value="11:00 AM">11:00 AM</SelectItem>
                            <SelectItem value="2:00 PM">2:00 PM</SelectItem>
                            <SelectItem value="3:00 PM">3:00 PM</SelectItem>
                            <SelectItem value="4:00 PM">4:00 PM</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="duration">Duration</Label>
                      <Select
                        value={bookingData.duration}
                        onValueChange={(value) => handleInputChange("duration", value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 hour</SelectItem>
                          <SelectItem value="1.5">1.5 hours</SelectItem>
                          <SelectItem value="2">2 hours</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notes">Additional Notes (Optional)</Label>
                      <Textarea
                        id="notes"
                        placeholder="Any specific topics you'd like to focus on or questions you have..."
                        value={bookingData.notes}
                        onChange={(e) => handleInputChange("notes", e.target.value)}
                        rows={3}
                      />
                    </div>

                    {showConfirmation && (
                      <Card className="border-primary bg-primary/5">
                        <CardContent className="p-4">
                          <h3 className="font-semibold mb-2">Booking Confirmation</h3>
                          <div className="space-y-1 text-sm mb-4">
                            <p>
                              <strong>Subject:</strong> {bookingData.subject}
                            </p>
                            <p>
                              <strong>Date:</strong> {bookingData.date}
                            </p>
                            <p>
                              <strong>Time:</strong> {bookingData.time}
                            </p>
                            <p>
                              <strong>Duration:</strong> {bookingData.duration} hour(s)
                            </p>
                            <p>
                              <strong>Total Cost:</strong> RM {totalCost}
                            </p>
                          </div>
                          <div className="flex space-x-2">
                            <Button onClick={handleBookSession} size="sm">
                              Proceed to Payment
                            </Button>
                            <Button onClick={() => setShowConfirmation(false)} variant="outline" size="sm">
                              Edit Details
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </>
                )}

                {step === 2 && (
                  <>
                    <div className="space-y-2">
                      <Label>Payment Method</Label>
                      <Select
                        value={bookingData.paymentMethod}
                        onValueChange={(value) => handleInputChange("paymentMethod", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select payment method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="credit">Credit Card</SelectItem>
                          <SelectItem value="debit">Debit Card</SelectItem>
                          <SelectItem value="paypal">PayPal</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cardName">Cardholder Name</Label>
                      <Input
                        id="cardName"
                        placeholder="John Doe"
                        value={bookingData.cardName}
                        onChange={(e) => handleInputChange("cardName", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={bookingData.cardNumber}
                        onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiryDate">Expiry Date</Label>
                        <Input
                          id="expiryDate"
                          placeholder="MM/YY"
                          value={bookingData.expiryDate}
                          onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input
                          id="cvv"
                          placeholder="123"
                          value={bookingData.cvv}
                          onChange={(e) => handleInputChange("cvv", e.target.value)}
                        />
                      </div>
                    </div>
                  </>
                )}

                <div className="flex justify-between pt-4">
                  {step === 2 && (
                    <Button variant="outline" onClick={() => setStep(1)}>
                      Back
                    </Button>
                  )}
                  {step === 1 && !showConfirmation && (
                    <Button onClick={handleNextStep} className="ml-auto">
                      Review Booking
                    </Button>
                  )}
                  {step === 2 && (
                    <Button onClick={handleNextStep} disabled={isLoading}>
                      {isLoading ? "Processing..." : "Complete Booking"}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Summary */}
          <div>
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Tutor Info */}
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={tutor.avatar || "/placeholder.svg"} alt={tutor.name} />
                    <AvatarFallback>
                      {tutor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{tutor.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{tutor.rating}</span>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Session Details */}
                <div className="space-y-2">
                  {bookingData.subject && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subject:</span>
                      <Badge variant="secondary">{bookingData.subject}</Badge>
                    </div>
                  )}
                  {bookingData.date && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Date:</span>
                      <span>{bookingData.date}</span>
                    </div>
                  )}
                  {bookingData.time && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Time:</span>
                      <span>{bookingData.time}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration:</span>
                    <span>{bookingData.duration} hour(s)</span>
                  </div>
                </div>

                <Separator />

                {/* Pricing */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Hourly Rate:</span>
                    <span>RM {tutor.rate}/hr</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration:</span>
                    <span>{bookingData.duration} hour(s)</span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total:</span>
                    <span className="text-primary">RM {totalCost}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
