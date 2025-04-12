import React from 'react';

interface StepperProps {
  steps: string[];
  currentStep: number;
  onStepClick?: (step: number) => void;
}

export const Stepper: React.FC<StepperProps> = ({ steps, currentStep, onStepClick }) => {
  return (
    <div className="w-full mb-12">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;
          const isClickable = onStepClick !== undefined;
          
          return (
            <div key={index} className="flex flex-col items-center relative w-full">
              {/* Step connector line */}
              {index < steps.length - 1 && (
                <div 
                  className={`absolute h-1 top-4 left-[55%] right-[45%] transform -translate-y-1/2 z-0 
                  ${isCompleted ? 'bg-blue-600 dark:bg-blue-500' : 'bg-gray-200 dark:bg-gray-700'}`}
                />
              )}
              
              {/* Step circle */}
              <button
                onClick={() => isClickable && onStepClick?.(stepNumber)}
                disabled={!isClickable}
                className={`w-8 h-8 flex items-center justify-center rounded-full z-10 font-semibold text-sm border-2
                  transition-all duration-300 ease-in-out
                  ${isActive 
                    ? 'bg-blue-600 text-white border-blue-600 dark:bg-blue-500 dark:border-blue-500 ring-4 ring-blue-100 dark:ring-blue-900/30' 
                    : isCompleted 
                      ? 'bg-blue-600 text-white border-blue-600 dark:bg-blue-500 dark:border-blue-500' 
                      : 'bg-white text-gray-400 border-gray-200 dark:bg-gray-800 dark:border-gray-700'}
                  ${isClickable ? 'cursor-pointer hover:scale-110' : 'cursor-default'}
                `}
              >
                {isCompleted ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  stepNumber
                )}
              </button>
              
              {/* Step label */}
              <p className={`mt-2 text-sm font-medium tracking-wide
                ${isActive 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : isCompleted 
                    ? 'text-gray-700 dark:text-gray-300' 
                    : 'text-gray-400 dark:text-gray-600'}`}
              >
                {step}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
