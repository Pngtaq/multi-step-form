"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define form data types
export interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
}

export interface AddressInfo {
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface EducationInfo {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  graduationYear: string;
}

export interface ProfessionalInfo {
  currentPosition: string;
  company: string;
  yearsOfExperience: string;
  skills: string[];
}

export interface FormData {
  personalInfo: PersonalInfo;
  addressInfo: AddressInfo;
  educationInfo: EducationInfo;
  professionalInfo: ProfessionalInfo;
}

// Define initial form state
const initialFormData: FormData = {
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
  },
  addressInfo: {
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
  },
  educationInfo: {
    institution: '',
    degree: '',
    fieldOfStudy: '',
    graduationYear: '',
  },
  professionalInfo: {
    currentPosition: '',
    company: '',
    yearsOfExperience: '',
    skills: [],
  },
};

// Define context type
interface FormContextType {
  formData: FormData;
  currentStep: number;
  totalSteps: number;
  updateFormData: (key: keyof FormData, data: Partial<FormData[keyof FormData]>) => void;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
  goToStep: (step: number) => void;
  isLastStep: () => boolean;
  isFirstStep: () => boolean;
  submitForm: () => void;
}

// Create context
const FormContext = createContext<FormContextType | undefined>(undefined);

// Create provider component
export const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4; // Personal, Address, Education, Professional

  const updateFormData = (key: keyof FormData, data: Partial<FormData[keyof FormData]>) => {
    setFormData((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        ...data,
      },
    }));
  };

  const goToNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const goToStep = (step: number) => {
    if (step >= 1 && step <= totalSteps) {
      setCurrentStep(step);
    }
  };

  const isLastStep = () => currentStep === totalSteps;
  const isFirstStep = () => currentStep === 1;

  const submitForm = () => {
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You could send this data to an API endpoint
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        currentStep,
        totalSteps,
        updateFormData,
        goToNextStep,
        goToPreviousStep,
        goToStep,
        isLastStep,
        isFirstStep,
        submitForm,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

// Custom hook to use the form context
export const useFormContext = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};
