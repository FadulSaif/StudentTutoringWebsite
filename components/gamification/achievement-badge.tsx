"use client"

import type React from "react"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Star, Target, Flame, BookOpen, Clock, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

interface Achievement {
  id: string
  name: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  earned: boolean
  progress?: number
  maxProgress?: number
  rarity: "common" | "rare" | "epic" | "legendary"
  earnedDate?: string
}

interface AchievementBadgeProps {
  achievement: Achievement
  size?: "sm" | "md" | "lg"
  showProgress?: boolean
}

const rarityColors = {
  common: "bg-gray-100 text-gray-800 border-gray-300",
  rare: "bg-blue-100 text-blue-800 border-blue-300",
  epic: "bg-purple-100 text-purple-800 border-purple-300",
  legendary: "bg-yellow-100 text-yellow-800 border-yellow-300",
}

const rarityGlow = {
  common: "",
  rare: "shadow-blue-200/50",
  epic: "shadow-purple-200/50",
  legendary: "shadow-yellow-200/50",
}

export function AchievementBadge({ achievement, size = "md", showProgress = false }: AchievementBadgeProps) {
  const [isHovered, setIsHovered] = useState(false)

  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-20 h-20",
  }

  const iconSizes = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  }

  return (
    <div
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "rounded-full border-2 flex items-center justify-center transition-all duration-300",
          sizeClasses[size],
          achievement.earned
            ? `${rarityColors[achievement.rarity]} shadow-lg ${rarityGlow[achievement.rarity]}`
            : "bg-muted text-muted-foreground border-muted-foreground/30",
          isHovered && achievement.earned && "scale-110 shadow-xl",
          !achievement.earned && "grayscale opacity-50",
        )}
      >
        <achievement.icon className={iconSizes[size]} />
      </div>

      {achievement.earned && (
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background flex items-center justify-center">
          <Star className="w-2 h-2 text-white fill-white" />
        </div>
      )}

      {showProgress && achievement.progress !== undefined && achievement.maxProgress && !achievement.earned && (
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
          <div className="bg-background border border-border rounded-full px-2 py-1">
            <span className="text-xs font-medium">
              {achievement.progress}/{achievement.maxProgress}
            </span>
          </div>
        </div>
      )}

      {/* Tooltip */}
      {isHovered && (
        <Card className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 z-50 shadow-lg">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2 mb-2">
              <achievement.icon className="w-5 h-5" />
              <h3 className="font-semibold">{achievement.name}</h3>
              <Badge variant="outline" className={rarityColors[achievement.rarity]}>
                {achievement.rarity}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
            {achievement.earned && achievement.earnedDate && (
              <p className="text-xs text-muted-foreground">Earned on {achievement.earnedDate}</p>
            )}
            {!achievement.earned && achievement.progress !== undefined && achievement.maxProgress && (
              <div className="mt-2">
                <div className="flex justify-between text-xs mb-1">
                  <span>Progress</span>
                  <span>
                    {achievement.progress}/{achievement.maxProgress}
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(achievement.progress / achievement.maxProgress) * 100}%` }}
                  />
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export function AchievementShowcase() {
  const achievements: Achievement[] = [
    {
      id: "first-session",
      name: "First Steps",
      description: "Complete your first tutoring session",
      icon: Trophy,
      earned: true,
      rarity: "common",
      earnedDate: "Jan 15, 2024",
    },
    {
      id: "week-streak",
      name: "Dedicated Learner",
      description: "Attend sessions for 7 consecutive days",
      icon: Flame,
      earned: true,
      rarity: "rare",
      earnedDate: "Jan 22, 2024",
    },
    {
      id: "subject-explorer",
      name: "Subject Explorer",
      description: "Try 3 different subjects",
      icon: BookOpen,
      earned: false,
      progress: 2,
      maxProgress: 3,
      rarity: "epic",
    },
    {
      id: "time-master",
      name: "Time Master",
      description: "Complete 50 hours of tutoring",
      icon: Clock,
      earned: false,
      progress: 36,
      maxProgress: 50,
      rarity: "legendary",
    },
    {
      id: "perfect-score",
      name: "Perfect Score",
      description: "Get 100% on 5 practice quizzes",
      icon: Target,
      earned: false,
      progress: 3,
      maxProgress: 5,
      rarity: "epic",
    },
    {
      id: "speed-learner",
      name: "Speed Learner",
      description: "Complete 10 sessions in one week",
      icon: Zap,
      earned: false,
      progress: 7,
      maxProgress: 10,
      rarity: "rare",
    },
  ]

  const earnedCount = achievements.filter((a) => a.earned).length
  const totalCount = achievements.length

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">Your Achievements</h2>
        <p className="text-muted-foreground">
          {earnedCount} of {totalCount} achievements unlocked
        </p>
        <div className="w-full bg-muted rounded-full h-2 mt-4 max-w-md mx-auto">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-1000"
            style={{ width: `${(earnedCount / totalCount) * 100}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-6 justify-items-center">
        {achievements.map((achievement) => (
          <AchievementBadge key={achievement.id} achievement={achievement} size="lg" showProgress />
        ))}
      </div>
    </div>
  )
}
