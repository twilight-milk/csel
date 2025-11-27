"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import LandingPage from "@/components/landing-page"
import AssessmentForm from "@/components/assessment-form"
import ResultsPage from "@/components/results-page"

export default function Home() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState<"landing" | "assessment" | "results">("landing")
  const [formData, setFormData] = useState<any>(null)
  const [riskResult, setRiskResult] = useState<any>(null)

  const handleStartAssessment = () => {
    setCurrentStep("assessment")
  }

  const handleSubmitAssessment = async (data: any) => {
    setFormData(data)

    // Call API to get risk assessment
    try {
      const response = await fetch("/api/assess-risk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      const result = await response.json()
      setRiskResult(result)
      setCurrentStep("results")
    } catch (error) {
      console.error("Error assessing risk:", error)
    }
  }

  const handleRetakeAssessment = () => {
    setCurrentStep("assessment")
    setRiskResult(null)
  }

  const handleReturn = () => {
    setCurrentStep("landing")
    setFormData(null)
    setRiskResult(null)
  }

  if (currentStep === "landing") {
    return <LandingPage onStart={handleStartAssessment} />
  }

  if (currentStep === "results") {
    return <ResultsPage riskResult={riskResult} onRetake={handleRetakeAssessment} onReturn={handleReturn} />
  }

  return <AssessmentForm onSubmit={handleSubmitAssessment} onReturn={handleReturn} />
}
