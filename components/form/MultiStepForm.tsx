"use client";

import React from 'react';
import { useFormContext } from '@/context/FormContext';
import { Stepper } from '@/components/ui/Stepper';
import { PersonalInfoForm } from '@/components/form/PersonalInfoForm';
import { AddressInfoForm } from '@/components/form/AddressInfoForm';
import { EducationInfoForm } from '@/components/form/EducationInfoForm';
import { ProfessionalInfoForm } from '@/components/form/ProfessionalInfoForm';

export const MultiStepForm: React.FC = () => {
  const { 
    currentStep, 
    goToNextStep, 
    goToPreviousStep, 
    goToStep,
    isFirstStep, 
    isLastStep,
    submitForm
  } = useFormContext();

  const steps = [
    'Personal',
    'Address',
    'Education',
    'Professional'
  ];

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfoForm />;
      case 2:
        return <AddressInfoForm />;
      case 3:
        return <EducationInfoForm />;
      case 4:
        return <ProfessionalInfoForm />;
      default:
        return <PersonalInfoForm />;
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-10">
      <div className="bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-8 transition-all border border-gray-200 dark:border-gray-800">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">
            User Registration
          </h1>
          <p className="text-center text-gray-500 dark:text-gray-400">
            Complete the form below to create your profile
          </p>
        </div>
        
        <Stepper 
          steps={steps} 
          currentStep={currentStep} 
          onStepClick={goToStep} 
        />
        
        <div className="py-4">
          {renderStepContent()}
        </div>
        
        <div className="mt-8 flex justify-between">
          <button
            type="button"
            onClick={goToPreviousStep}
            disabled={isFirstStep()}
            className={`px-6 py-3 rounded-lg font-medium transition-all
              ${isFirstStep() 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-gray-800 dark:text-gray-600' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'}`}
          >
            Previous
          </button>
          
          {isLastStep() ? (
            <button
              type="button"
              onClick={submitForm}
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
            >
              Submit
            </button>
          ) : (
            <button
              type="button"
              onClick={goToNextStep}
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
