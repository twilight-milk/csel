# Diabetes Risk Prediction Model Documentation

## Overview

This document describes the logistic regression model used for diabetes risk screening in the Filipino population. The model is designed to identify individuals who may benefit from laboratory testing for diabetes.

## Model Purpose

- **Screening Tool**: Estimate the probability of high diabetes risk
- **Not Diagnostic**: This model cannot diagnose diabetes
- **Clinical Guidance**: Help identify who should receive laboratory testing

## Features Used

### Demographics
- **Sex**: Male, Female
- **Age**: Years (integer)

### Health Status
- **General Health**: 1-5 scale (1=Poor, 5=Excellent)
- **Mental Health**: Number of days in past 30 days
- **Physical Health**: Number of days in past 30 days

### Behavioral Factors
- **Physical Activity**: Yes/No
- **Smoker Status**: Yes/No
- **Heavy Alcohol Consumption**: Yes/No
- **Fruit Consumption**: Yes/No
- **Vegetable Consumption**: Yes/No

### Medical Conditions
- **High Blood Pressure**: Yes/No
- **High Cholesterol**: Yes/No
- **Cholesterol Check**: Yes/No (past 5 years)
- **Stroke History**: Yes/No
- **Heart Disease or Heart Attack**: Yes/No
- **Difficulty Walking/Climbing Stairs**: Yes/No

### Biometric
- **BMI**: Body Mass Index (numeric)

## Model Type

**Logistic Regression** - Binary classification model that outputs a probability score (0-1) indicating the likelihood of high diabetes risk.

## Training Procedure

1. **Data Preparation**
   - Handle missing values
   - Encode categorical variables (Yes/No → 1/0, Sex → numeric)
   - Scale numeric features using StandardScaler

2. **Feature Engineering**
   - Select relevant features based on domain knowledge and statistics
   - Consider creating interaction terms if necessary

3. **Model Training**
   - Split data into training (80%) and testing (20%) sets
   - Train logistic regression model on training set
   - Optimize for balanced accuracy (considering class imbalance)

4. **Validation**
   - Perform k-fold cross-validation
   - Evaluate on test set
   - Calculate performance metrics

## Performance Metrics

- **Accuracy**: Overall correctness
- **Precision**: True positives / (True positives + False positives)
- **Recall**: True positives / (True positives + False negatives)
- **F1-Score**: Harmonic mean of precision and recall
- **ROC-AUC**: Area under the receiver operating characteristic curve

## Risk Thresholds

- **Low Risk**: Probability < 0.35
- **Moderate Risk**: Probability 0.35-0.50
- **High Risk**: Probability > 0.50

## Important Limitations

1. **Screening Only**: This model provides screening recommendations, not diagnoses
2. **Population Specific**: Trained on health patterns that may differ across populations
3. **Not Replacement for Clinical Judgment**: Should be used alongside clinical assessment
4. **Requires Professional Consultation**: Any high-risk results must be evaluated by healthcare providers

## Deployment

The model is deployed as:
- **API Endpoint**: `/api/assess-risk` (POST)
- **Input Format**: JSON with all 17 features
- **Output Format**: Risk probability, risk level, and recommendations

## Data References

Based on research:
- NIH Study: https://pmc.ncbi.nlm.nih.gov/articles/PMC5685052/

## Future Improvements

1. Incorporate additional health indicators
2. Train on larger, more diverse datasets
3. Implement ensemble methods for better accuracy
4. Add explainability features (SHAP values)
5. Implement continuous model monitoring and retraining

## Ethical Considerations

- Model does not discriminate based on protected characteristics
- Results are communicated clearly with appropriate disclaimers
- Encourages professional medical consultation
- Data privacy and security are maintained
