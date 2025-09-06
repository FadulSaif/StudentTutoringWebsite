"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  Video,
  VideoOff,
  Mic,
  MicOff,
  Phone,
  MessageSquare,
  FileText,
  Pen,
  Eraser,
  Square,
  Circle,
  Send,
  Settings,
  Users,
} from "lucide-react"

interface LearningRoomProps {
  sessionId: string
}

export function LearningRoom({ sessionId }: LearningRoomProps) {
  const [isVideoOn, setIsVideoOn] = useState(true)
  const [isAudioOn, setIsAudioOn] = useState(true)
  const [chatMessage, setChatMessage] = useState("")
  const [notes, setNotes] = useState("")
  const [selectedTool, setSelectedTool] = useState("pen")
  const router = useRouter()

  // Mock session data
  const session = {
    tutor: "Sarah Johnson",
    student: "John Doe",
    subject: "Mathematics",
    topic: "Calculus - Derivatives",
    startTime: "2:00 PM",
    duration: "1 hour",
  }

  const chatMessages = [
    {
      id: 1,
      sender: "Sarah Johnson",
      message: "Hi John! Ready to dive into derivatives?",
      time: "2:01 PM",
      isMe: false,
    },
    { id: 2, sender: "You", message: "Yes, I'm excited to learn!", time: "2:01 PM", isMe: true },
    {
      id: 3,
      sender: "Sarah Johnson",
      message: "Great! Let's start with the basic definition.",
      time: "2:02 PM",
      isMe: false,
    },
  ]

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      // In real app, this would send the message
      setChatMessage("")
    }
  }

  const handleEndSession = () => {
    const confirmEnd = window.confirm("Are you sure you want to end this session? This action cannot be undone.")

    if (confirmEnd) {
      // In a real app, this would make an API call to end the session
      console.log("[v0] Ending session:", sessionId)

      // Show success message and redirect to dashboard
      alert("Session ended successfully. Thank you for learning with us!")
      router.push("/dashboard")
    }
  }

  const tools = [
    { id: "pen", icon: Pen, label: "Pen" },
    { id: "eraser", icon: Eraser, label: "Eraser" },
    { id: "square", icon: Square, label: "Rectangle" },
    { id: "circle", icon: Circle, label: "Circle" },
  ]

  return (
    <div className="h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="bg-card border-b border-border p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div>
              <h1 className="text-xl font-semibold text-foreground">Learning Session</h1>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Badge variant="secondary">{session.subject}</Badge>
                <span>•</span>
                <span>{session.topic}</span>
                <span>•</span>
                <span>
                  {session.startTime} ({session.duration})
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              <Users className="w-4 h-4 mr-2" />2 participants
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Left Side - Video and Whiteboard */}
        <div className="flex-1 flex flex-col">
          {/* Video Section */}
          <div className="h-64 bg-gray-900 relative">
            <div className="absolute inset-0 flex">
              {/* Tutor Video */}
              <div className="flex-1 relative bg-gray-800 flex items-center justify-center">
                {isVideoOn ? (
                  <div className="text-center text-white">
                    <Avatar className="w-24 h-24 mx-auto mb-2">
                      <AvatarImage src="/tutor-sarah.jpg" alt={session.tutor} />
                      <AvatarFallback>SJ</AvatarFallback>
                    </Avatar>
                    <p className="text-sm">{session.tutor}</p>
                  </div>
                ) : (
                  <div className="text-center text-white">
                    <VideoOff className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-sm">{session.tutor} (Video Off)</p>
                  </div>
                )}
              </div>

              {/* Student Video (Picture-in-Picture) */}
              <div className="absolute bottom-4 right-4 w-32 h-24 bg-gray-700 rounded-lg flex items-center justify-center">
                {isVideoOn ? (
                  <div className="text-center text-white">
                    <Avatar className="w-8 h-8 mx-auto mb-1">
                      <AvatarImage src="/student-profile.jpg" alt={session.student} />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <p className="text-xs">You</p>
                  </div>
                ) : (
                  <VideoOff className="w-6 h-6 text-white" />
                )}
              </div>
            </div>

            {/* Video Controls */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
              <Button
                size="sm"
                variant={isVideoOn ? "default" : "destructive"}
                onClick={() => setIsVideoOn(!isVideoOn)}
              >
                {isVideoOn ? <Video className="w-4 h-4" /> : <VideoOff className="w-4 h-4" />}
              </Button>
              <Button
                size="sm"
                variant={isAudioOn ? "default" : "destructive"}
                onClick={() => setIsAudioOn(!isAudioOn)}
              >
                {isAudioOn ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
              </Button>
              <Button size="sm" variant="destructive" onClick={handleEndSession}>
                <Phone className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Whiteboard Section */}
          <div className="flex-1 bg-white border-t border-border">
            {/* Whiteboard Toolbar */}
            <div className="bg-card border-b border-border p-2 flex items-center space-x-2">
              {tools.map((tool) => (
                <Button
                  key={tool.id}
                  size="sm"
                  variant={selectedTool === tool.id ? "default" : "ghost"}
                  onClick={() => setSelectedTool(tool.id)}
                  title={tool.label}
                >
                  <tool.icon className="w-4 h-4" />
                </Button>
              ))}
              <Separator orientation="vertical" className="h-6" />
              <Button size="sm" variant="ghost">
                Clear
              </Button>
              <Button size="sm" variant="ghost">
                Save
              </Button>
            </div>

            {/* Whiteboard Canvas */}
            <div className="flex-1 relative bg-white">
              <div className="absolute inset-4 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Pen className="w-12 h-12 mx-auto mb-2" />
                  <p className="text-lg font-medium">Interactive Whiteboard</p>
                  <p className="text-sm">Draw, write, and collaborate in real-time</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 bg-card border-l border-border flex flex-col">
          {/* Chat Section */}
          <div className="flex-1 flex flex-col">
            <div className="p-4 border-b border-border">
              <h3 className="font-semibold text-foreground flex items-center">
                <MessageSquare className="w-4 h-4 mr-2" />
                Chat
              </h3>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {chatMessages.map((message) => (
                <div key={message.id} className={`flex ${message.isMe ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-xs ${message.isMe ? "bg-primary text-primary-foreground" : "bg-secondary"} rounded-lg p-3`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium">{message.sender}</span>
                      <span className="text-xs opacity-70">{message.time}</span>
                    </div>
                    <p className="text-sm">{message.message}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-border">
              <div className="flex space-x-2">
                <Input
                  placeholder="Type a message..."
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <Button size="sm" onClick={handleSendMessage}>
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Notes Section */}
          <div className="h-64 border-t border-border">
            <div className="p-4 border-b border-border">
              <h3 className="font-semibold text-foreground flex items-center">
                <FileText className="w-4 h-4 mr-2" />
                Session Notes
              </h3>
            </div>
            <div className="p-4">
              <Textarea
                placeholder="Take notes during your session..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="h-32 resize-none"
              />
              <Button size="sm" className="mt-2 w-full">
                Save Notes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
