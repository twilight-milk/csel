import { type NextRequest, NextResponse } from "next/server"

// Placeholder logistic regression model prediction function
// This will be replaced with actual ML model integration
function predictDiabetesRisk(data: any): number {
  // For now, we'll use a simple scoring system based on risk factors
  // In production, this would call the actual logistic regression model

  let riskScore = 0.5 // Base risk score

  // Age factor (diabetes risk increases with age)
  const age = Number.parseInt(data.age)
  if (age > 45) riskScore += 0.15
  if (age > 60) riskScore += 0.1

  // BMI factor
  const bmi = Number.parseFloat(data.bmi)
  if (bmi >= 25 && bmi < 30) riskScore += 0.1
  if (bmi >= 30) riskScore += 0.2

  // Health conditions
  if (data.highBP === "yes") riskScore += 0.15
  if (data.highChol === "yes") riskScore += 0.1
  if (data.stroke === "yes") riskScore += 0.2
  if (data.heartDiseaseorAttack === "yes") riskScore += 0.2
  if (data.diffWalk === "yes") riskScore += 0.15

  // Lifestyle factors (protective)
  if (data.physActivity === "yes") riskScore -= 0.1
  if (data.fruits === "yes") riskScore -= 0.05
  if (data.veggies === "yes") riskScore -= 0.05

  // Negative lifestyle factors
  if (data.smoker === "yes") riskScore += 0.1
  if (data.hvyAlcoholConsump === "yes") riskScore += 0.1

  // Mental and physical health
  const mentHlth = Number.parseInt(data.mentHlth)
  const physHlth = Number.parseInt(data.physHlth)
  if (mentHlth > 14) riskScore += 0.05
  if (physHlth > 14) riskScore += 0.1

  // General health assessment
  const genHlth = Number.parseInt(data.genHlth)
  if (genHlth >= 4) riskScore -= 0.05
  if (genHlth === 1 || genHlth === 2) riskScore += 0.1

  // Clamp risk score between 0 and 1
  return Math.max(0, Math.min(1, riskScore))
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.age || !data.bmi) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Calculate risk probability
    const riskProbability = predictDiabetesRisk(data)

    // Determine risk level
    let riskLevel = "Low"
    if (riskProbability > 0.5) {
      riskLevel = "High"
    } else if (riskProbability > 0.35) {
      riskLevel = "Moderate"
    }

    return NextResponse.json({
      riskProbability,
      riskLevel,
      message: `Based on your health information, your estimated diabetes screening recommendation is: ${riskLevel} Risk`,
      disclaimer:
        "This is a screening tool only and not a medical diagnosis. Please consult with a healthcare provider.",
    })
  } catch (error) {
    console.error("Error assessing risk:", error)
    return NextResponse.json({ error: "Error processing assessment" }, { status: 500 })
  }
}
