"use client";
import React, { useState } from 'react';
import { useFormContext } from '@/context/FormContext';

export const ProfessionalInfoForm: React.FC = () => {
  const { formData, updateFormData } = useFormContext();
  const { professionalInfo } = formData;
  const [skillInput, setSkillInput] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    updateFormData('professionalInfo', { [name]: value });
  };

  const handleAddSkill = () => {
    if (skillInput.trim() && !professionalInfo.skills.includes(skillInput.trim())) {
      const updatedSkills = [...professionalInfo.skills, skillInput.trim()];
      updateFormData('professionalInfo', { skills: updatedSkills });
      setSkillInput('');
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    const updatedSkills = professionalInfo.skills.filter(skill => skill !== skillToRemove);
    updateFormData('professionalInfo', { skills: updatedSkills });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddSkill();
    }
  };

  // Generate years of experience options
  const experienceYears = Array.from({ length: 51 }, (_, i) => i.toString());

  return (
    <div className="max-w-3xl mx-auto w-full space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Professional Information</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Tell us about your professional experience and skills.
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="currentPosition" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Current Position
          </label>
          <input
            type="text"
            id="currentPosition"
            name="currentPosition"
            value={professionalInfo.currentPosition}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
            placeholder="Senior Software Engineer"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={professionalInfo.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
            placeholder="Google"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="yearsOfExperience" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Years of Experience
          </label>
          <select
            id="yearsOfExperience"
            name="yearsOfExperience"
            value={professionalInfo.yearsOfExperience}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
            required
          >
            <option value="">Select years</option>
            {experienceYears.map((year) => (
              <option key={year} value={year}>
                {year} {parseInt(year) === 1 ? 'year' : 'years'}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="skills" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Skills
          </label>
          <div className="flex">
            <input
              type="text"
              id="skills"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
              placeholder="e.g. JavaScript, React, Node.js"
            />
            <button
              type="button"
              onClick={handleAddSkill}
              className="px-4 py-3 rounded-r-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
            >
              Add
            </button>
          </div>
          
          {professionalInfo.skills.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {professionalInfo.skills.map((skill, index) => (
                <div
                  key={index}
                  className="inline-flex items-center bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full px-3 py-1 text-sm"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => handleRemoveSkill(skill)}
                    className="ml-1.5 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 focus:outline-none"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
