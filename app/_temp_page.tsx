import { FormProvider } from "@/context/FormContext";
import { MultiStepForm } from "@/components/form/MultiStepForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-8">
      <div className="max-w-7xl mx-auto">
        <FormProvider>
          <MultiStepForm />
        </FormProvider>
      </div>
    </div>
  );
}
