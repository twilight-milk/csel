"use client"

import type React from "react"
import { useState } from "react"

interface AssessmentFormProps {
  onSubmit: (data: any) => void
  onReturn: () => void
}

export default function AssessmentForm({ onSubmit, onReturn }: AssessmentFormProps) {
  const [formData, setFormData] = useState({
    sex: "",
    age: "",
    genHlth: "5",
    mentHlth: "0",
    physHlth: "0",
    physActivity: "no",
    highBP: "no",
    highChol: "no",
    cholCheck: "no",
    bmi: "",
    smoker: "no",
    stroke: "no",
    heartDiseaseorAttack: "no",
    hvyAlcoholConsump: "no",
    diffWalk: "no",
    fruits: "no",
    veggies: "no",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const ageCategories = [
    "18–24",
    "25–29",
    "30–34",
    "35–39",
    "40–44",
    "45–49",
    "50–54",
    "55–59",
    "60–64",
    "65–69",
    "70–74",
    "75–79",
    "80–99",
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.sex) newErrors.sex = "Sex is required"
    if (!formData.age) newErrors.age = "Age category is required"
    if (!formData.bmi) newErrors.bmi = "BMI is required"
    else if (Number.parseFloat(formData.bmi) < 10 || Number.parseFloat(formData.bmi) > 80) {
      newErrors.bmi = "Please enter a valid BMI (10-80)"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      onSubmit(formData)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onReturn}
            className="px-4 py-2 text-slate-600 hover:text-slate-900 font-medium transition-colors"
          >
            ← Return
          </button>
          <div className="flex-1"></div>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Health Information Form</h1>
          <p className="text-slate-600">Please provide your health information for risk assessment</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
          <div className="space-y-6">
            {/* Row 1: Sex and Age */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">Sex *</label>
                <select name="sex" value={formData.sex} onChange={handleChange} className="form-input">
                  <option value="">Select sex</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                {errors.sex && <p className="text-red-600 text-sm mt-1">{errors.sex}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">Age Category *</label>
                <select name="age" value={formData.age} onChange={handleChange} className="form-input">
                  <option value="">Select age category</option>
                  {ageCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                {errors.age && <p className="text-red-600 text-sm mt-1">{errors.age}</p>}
              </div>
            </div>

            {/* Row 2: General Health and BMI */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">
                  General Health (1=Poor, 5=Excellent)
                </label>
                <select name="genHlth" value={formData.genHlth} onChange={handleChange} className="form-input">
                  <option value="1">1 - Poor</option>
                  <option value="2">2 - Fair</option>
                  <option value="3">3 - Good</option>
                  <option value="4">4 - Very Good</option>
                  <option value="5">5 - Excellent</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">BMI (Body Mass Index) *</label>
                <input
                  type="number"
                  name="bmi"
                  value={formData.bmi}
                  onChange={handleChange}
                  placeholder="Enter your BMI"
                  className="form-input"
                  step="0.1"
                  min="10"
                  max="80"
                />
                {errors.bmi && <p className="text-red-600 text-sm mt-1">{errors.bmi}</p>}
              </div>
            </div>

            {/* Row 3: Mental and Physical Health */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">
                  Mental Health (days in past 30 days)
                </label>
                <input
                  type="number"
                  name="mentHlth"
                  value={formData.mentHlth}
                  onChange={handleChange}
                  placeholder="0-30 days"
                  className="form-input"
                  min="0"
                  max="30"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">
                  Physical Health (days in past 30 days)
                </label>
                <input
                  type="number"
                  name="physHlth"
                  value={formData.physHlth}
                  onChange={handleChange}
                  placeholder="0-30 days"
                  className="form-input"
                  min="0"
                  max="30"
                />
              </div>
            </div>

            {/* Yes/No Questions */}
            <div className="pt-4 border-t border-slate-200">
              <h3 className="text-sm font-semibold text-slate-900 mb-4">Health Conditions</h3>
              <div className="space-y-3">
                {[
                  { name: "highBP", label: "Do you have high blood pressure?" },
                  { name: "highChol", label: "Do you have high cholesterol?" },
                  { name: "cholCheck", label: "Have you had your cholesterol checked in the past 5 years?" },
                  { name: "smoker", label: "Are you a smoker?" },
                  { name: "stroke", label: "Have you ever had a stroke?" },
                  { name: "heartDiseaseorAttack", label: "Have you had heart disease or myocardial infarction?" },
                  { name: "hvyAlcoholConsump", label: "Do you consume alcohol heavily?" },
                  { name: "diffWalk", label: "Do you have difficulty walking or climbing stairs?" },
                  { name: "physActivity", label: "Do you engage in regular physical activity?" },
                  { name: "fruits", label: "Do you consume fruits regularly?" },
                  { name: "veggies", label: "Do you consume vegetables regularly?" },
                ].map(({ name, label }) => (
                  <div key={name} className="flex items-center justify-between bg-slate-50 p-3 rounded-lg">
                    <label className="text-sm text-slate-700">{label}</label>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setFormData((prev) => ({ ...prev, [name]: "yes" }))}
                        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                          formData[name as keyof typeof formData] === "yes"
                            ? "bg-blue-600 text-white"
                            : "bg-white border border-slate-300 text-slate-700 hover:border-blue-600"
                        }`}
                      >
                        Yes
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData((prev) => ({ ...prev, [name]: "no" }))}
                        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                          formData[name as keyof typeof formData] === "no"
                            ? "bg-slate-600 text-white"
                            : "bg-white border border-slate-300 text-slate-700 hover:border-slate-600"
                        }`}
                      >
                        No
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-xs text-slate-700">
                <strong>Disclaimer:</strong> This screening tool provides risk estimation only and is not a medical
                diagnosis. Please consult with a healthcare provider for professional medical advice.
              </p>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
              Get Risk Assessment →
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
