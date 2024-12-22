import { createContext, useContext, useState, ReactNode } from "react";

// Define the types for form data
interface FormData {
  name: string;
  email: string;
  password: string;
}

// Define the context value type
interface FormContextType {
  formData: FormData;
  updateFormData: (newData: Partial<FormData>) => void; // Update function with partial data
}

// Create a Context with a default value
const FormContext = createContext<FormContextType>({
  formData: {
    name: "",
    email: "",
    password: "",
  },
  updateFormData: () => {}, // Default empty function for update
});

// Custom hook to use the FormContext
export const useFormContext = () => {
  return useContext(FormContext);
};

// FormProvider component to wrap around the app and provide context values
interface FormProviderProps {
  children: ReactNode; // Ensure children is of type ReactNode
}

export const FormProvider = ({ children }: FormProviderProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  // Function to update the form data
  const updateFormData = (newData: Partial<FormData>) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};
