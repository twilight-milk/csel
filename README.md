# Diabetes Risk Screening Tool

A professional healthcare screening application for identifying individuals at high risk of diabetes in the Filipino population. This tool uses evidence-based health factors and logistic regression modeling to provide non-diagnostic risk assessments.

## Features

✨ **Professional Healthcare Design**
- Clinical-grade interface with accessible UI/UX
- Mobile-responsive for accessibility in low-resource settings
- Clear medical disclaimers and guidance

📋 **Comprehensive Health Assessment**
- 17 health factors including demographics, lifestyle, and medical conditions
- Intuitive form with validation
- Real-time feedback on inputs

🔬 **Machine Learning Integration**
- Logistic regression model for risk prediction
- Evidence-based feature selection
- Probabilistic risk scoring (0-100%)

🏥 **Professional Recommendations**
- Risk-based guidance on laboratory testing
- Lifestyle recommendations
- Link to validated research studies

## Project Structure

\`\`\`
├── app/
│   ├── layout.tsx                 # Root layout with healthcare theme
│   ├── page.tsx                   # Main app orchestrator
│   ├── globals.css                # Healthcare color scheme & design tokens
│   └── api/
│       └── assess-risk/route.ts   # Risk assessment API endpoint
├── components/
│   ├── landing-page.tsx           # Educational introduction page
│   ├── assessment-form.tsx        # 17-field health assessment form
│   └── results-page.tsx           # Risk results and recommendations
├── scripts/
│   ├── logreg_model_empty.py      # Placeholder for trained model
│   └── model_training_empty.ipynb # Jupyter notebook for model development
└── docs/
    ├── MODEL_DOCUMENTATION.md     # Complete model documentation
    └── README.md                  # This file
\`\`\`

## Getting Started

### Prerequisites
- Node.js 18+ (for running the app)
- Python 3.8+ (for ML model development)

### Installation

1. Clone the repository
2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Using the Application

1. **Landing Page**: Read educational information about diabetes risk screening
2. **Assessment Form**: Answer 17 health questions honestly
3. **Results Page**: Receive risk probability and personalized recommendations

## Technology Stack

- **Frontend**: Next.js 16, React 19, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **ML Framework**: scikit-learn (for model training)
- **Deployment**: Ready for Vercel, GitHub Pages, or self-hosted servers

## Model Information

The screening uses a **Logistic Regression** model that predicts diabetes risk based on:
- Demographics (age, sex)
- Health status (general, mental, physical health)
- Lifestyle factors (physical activity, smoking, alcohol, diet)
- Medical conditions (blood pressure, cholesterol, stroke, heart disease)
- Biometrics (BMI)

### Model Development

The placeholder files for ML development are provided:
- `scripts/logreg_model_empty.py` - Python class for model implementation
- `scripts/model_training_empty.ipynb` - Jupyter notebook for training pipeline

To develop the model:
1. Prepare your diabetes screening dataset
2. Update the Python scripts with actual training code
3. Export the trained model
4. Integrate into the API endpoint

## Important Disclaimers

⚠️ **This is a SCREENING TOOL only**
- Not intended for self-diagnosis
- Cannot replace professional medical evaluation
- Results must be discussed with healthcare providers
- Always consult qualified healthcare professionals

## Key References

- NIH Research on Diabetes Screening: https://pmc.ncbi.nlm.nih.gov/articles/PMC5685052/
- Philippine Health System resources
- WHO Diabetes Guidelines

## Accessibility

- Keyboard navigation support
- Screen reader compatible (ARIA labels)
- Responsive design for mobile devices
- Clear language and instructions
- High contrast color scheme

## Performance Metrics (To Be Updated)

After model training, update with:
- Accuracy: TBD
- Precision: TBD
- Recall: TBD
- F1-Score: TBD
- ROC-AUC: TBD

## Future Enhancements

- Multi-language support (English, Tagalog, Cebuano)
- Integration with healthcare provider systems
- User accounts for tracking screening history
- Expanded feature set with additional health factors
- Real-time model performance monitoring

## Contributing

Contributions are welcome! Areas for improvement:
- ML model enhancement and optimization
- UI/UX refinements
- Additional health factor integration
- Localization for different regions

## License

This project is provided as-is for educational and healthcare screening purposes.

## Support

For issues or questions:
1. Check the documentation in `/docs`
2. Review the model documentation
3. Consult the referenced research papers

## Credits

Developed as a comprehensive diabetes risk screening tool for accessible healthcare in the Philippines.
"# csel" 
