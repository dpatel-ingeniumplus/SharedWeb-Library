export const FormDataUtils = {
  safeAppend: (formData, formFields) => {
    formFields.forEach(([name, value, value2]) => {
      if (value || value === false) {
        if (value2 || value2 === false) {
          formData.append(name, value, value2);
        } else {
          formData.append(name, value);
        }
      }
    });
  },
  safeArrayAppend: (formData, formFields) => {
    formFields.forEach(([name, value]) => {
      if (value && value.length === 0) {
        formData.append(name, 0);
      } else {
        value?.map((x) => formData.append(name, x));
      }
    });
  },
};
