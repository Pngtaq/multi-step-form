import React from 'react';
import { useFormContext } from '@/context/FormContext';

export const EducationInfoForm: React.FC = () => {
  const { formData, updateFormData } = useFormContext();
  const { educationInfo } = formData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    updateFormData('educationInfo', { [name]: value });
  };

  // Generate graduation year options
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 60 }, (_, i) => currentYear - i);

  return (
    <div className="max-w-3xl mx-auto w-full space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Education Information</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Share your educational background and qualifications.
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="institution" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Institution Name
          </label>
          <input
            type="text"
            id="institution"
            name="institution"
            value={educationInfo.institution}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
            placeholder="Stanford University"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="degree" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Degree
          </label>
          <select
            id="degree"
            name="degree"
            value={educationInfo.degree}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
            required
          >
            <option value="">Select a degree</option>
            <option value="High School Diploma">High School Diploma</option>
            <option value="Associate&apos;s Degree">Associate&apos;s Degree</option>
            <option value="Bachelor&apos;s Degree">Bachelor&apos;s Degree</option>
            <option value="Master&apos;s Degree">Master&apos;s Degree</option>
            <option value="Doctorate">Doctorate</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="fieldOfStudy" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Field of Study
          </label>
          <input
            type="text"
            id="fieldOfStudy"
            name="fieldOfStudy"
            value={educationInfo.fieldOfStudy}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
            placeholder="Computer Science"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="graduationYear" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Graduation Year
          </label>
          <select
            id="graduationYear"
            name="graduationYear"
            value={educationInfo.graduationYear}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
            required
          >
            <option value="">Select year</option>
            {years.map((year) => (
              <option key={year} value={year.toString()}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
