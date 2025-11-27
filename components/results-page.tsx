"use client"

import { Button } from "@/components/ui/button"

interface ResultsPageProps {
  riskResult: any
  onRetake: () => void
  onReturn: () => void
}

export default function ResultsPage({ riskResult, onRetake, onReturn }: ResultsPageProps) {
  if (!riskResult) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
        <div className="text-center">
          <p className="text-slate-600">Loading results...</p>
        </div>
      </div>
    )
  }

  const riskPercentage = (riskResult.riskProbability * 100).toFixed(1)
  const isHighRisk = riskResult.riskProbability > 0.5

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
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Your Risk Assessment Results</h1>
          <p className="text-slate-600">Based on your health information</p>
        </div>

        {/* Results Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200 mb-6">
          {/* Risk Score */}
          <div
            className={`text-center p-8 rounded-xl mb-6 ${
              isHighRisk ? "bg-red-50 border border-red-200" : "bg-green-50 border border-green-200"
            }`}
          >
            <div className="flex justify-center mb-4 text-5xl">{isHighRisk ? "⚠️" : "✅"}</div>

            <h2 className={`text-4xl font-bold mb-2 ${isHighRisk ? "text-red-600" : "text-green-600"}`}>
              {riskPercentage}%
            </h2>

            <p className="text-lg font-semibold text-slate-900 mb-2">
              {isHighRisk ? "Higher Risk Detected" : "Lower Risk Assessment"}
            </p>

            <p className={`text-sm ${isHighRisk ? "text-red-700" : "text-green-700"}`}>
              {isHighRisk
                ? "Based on your responses, we recommend consulting with a healthcare provider for laboratory testing."
                : "Based on your responses, your current risk profile appears lower. Continue healthy lifestyle practices."}
            </p>
          </div>

          {/* Recommendations */}
          <div className="bg-slate-50 rounded-lg p-6 mb-6 border border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-4">📊 Recommendations</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">1.</span>
                <span className="text-slate-700">
                  {isHighRisk
                    ? "Consult a healthcare provider to discuss laboratory testing such as HbA1c or fasting blood glucose."
                    : "Schedule regular health check-ups with your doctor to monitor your health metrics."}
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">2.</span>
                <span className="text-slate-700">
                  Maintain a healthy lifestyle with regular physical activity (at least 150 minutes/week).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">3.</span>
                <span className="text-slate-700">
                  Eat a balanced diet rich in fruits, vegetables, and whole grains.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">4.</span>
                <span className="text-slate-700">
                  Monitor and maintain a healthy weight appropriate for your height.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">5.</span>
                <span className="text-slate-700">Reduce stress and get adequate sleep (7-9 hours per night).</span>
              </li>
            </ul>
          </div>

          {/* Important Notice */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-slate-800">
              <strong>Important:</strong> This assessment is a screening tool only and does not constitute a medical
              diagnosis. Results should be discussed with a qualified healthcare provider. Only medical professionals
              can diagnose diabetes or recommend treatment.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button onClick={onRetake} className="btn-primary w-full">
              Retake Assessment
            </Button>
            <a
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5685052/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full btn-secondary text-center"
            >
              Read Research Study
            </a>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-white rounded-lg p-6 border border-slate-200">
          <h3 className="font-semibold text-slate-900 mb-3">About This Assessment</h3>
          <p className="text-sm text-slate-600">
            This tool uses a logistic regression model trained on health factors associated with diabetes risk. It
            estimates the probability that you may benefit from laboratory testing but cannot diagnose diabetes. Always
            consult healthcare professionals for accurate diagnosis and treatment.
          </p>
        </div>
      </div>
    </div>
  )
}
