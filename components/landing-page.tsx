"use client"

import { Button } from "@/components/ui/button"

interface LandingPageProps {
  onStart: () => void
}

export default function LandingPage({ onStart }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              ❤️
            </div>
            <h1 className="text-2xl font-bold text-slate-900">Diabetes Risk Screener</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Know Your Diabetes Risk</h2>
            <p className="text-lg text-slate-600 mb-4">
              Diabetes is a growing health challenge in the Philippines. Early detection and intervention can prevent
              serious complications.
            </p>
            <p className="text-lg text-slate-600 mb-8">
              This screening tool uses evidence-based health indicators to estimate your risk level and help you make
              informed decisions about medical testing.
            </p>

            {/* Key Points */}
            <div className="space-y-4 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white font-bold text-lg">
                    📈
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Evidence-Based</h3>
                  <p className="text-slate-600">Built on medical research and validated health factors</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white font-bold text-lg">
                    👥
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">For Everyone</h3>
                  <p className="text-slate-600">Accessible screening for Filipino adults of all backgrounds</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white font-bold text-lg">
                    ❤️
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Screening, Not Diagnosis</h3>
                  <p className="text-slate-600">Results guide you to seek professional medical evaluation</p>
                </div>
              </div>
            </div>

            <Button onClick={onStart} className="btn-primary text-lg">
              Start Assessment
            </Button>
          </div>

          {/* Right Column - Visual */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-600 rounded-full mb-4 text-5xl">
                  ❤️
                </div>
                <p className="text-slate-700 font-medium">Health Assessment</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-slate-700 mb-2">
                <strong>Important:</strong> This tool provides screening recommendations only and should not be used for
                self-diagnosis.
              </p>
              <p className="text-xs text-slate-600">
                Always consult with a qualified healthcare provider for medical advice.
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="mt-16 bg-slate-50 rounded-lg p-6 border border-slate-200">
          <h3 className="font-semibold text-slate-900 mb-3">About This Assessment</h3>
          <p className="text-slate-700 mb-2">
            This diabetes risk screening tool is based on validated health factors and is designed to identify
            individuals who may benefit from laboratory testing. It is not a diagnostic tool and cannot replace
            professional medical evaluation.
          </p>
          <p className="text-slate-600 text-sm">
            For more information, visit the referenced research:{" "}
            <a
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5685052/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              NIH Study on Diabetes Screening
            </a>
          </p>
        </div>
      </main>
    </div>
  )
}
