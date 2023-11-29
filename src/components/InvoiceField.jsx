import React from 'react';
// Define the InvoiceField component.

const InvoiceField = ({ onEditItem, cellData }) => {
// JSX structure for rendering an input field.

  return (
    <input
      className={cellData.className}     /* Apply a custom class if provided */
      type={cellData.type}               /* Specify the input type (e.g., text, number) */
      placeholder={cellData.placeholder} /* Display a placeholder text if provided */
      min={cellData.min}                  /* Specify the minimum value for a number input */
      step={cellData.step}               /* Specify the step value for a number input */
      name={cellData.name}                /* Name attribute for form submission */
      id={cellData.id}                    /* Unique identifier for the input field */
      value={cellData.value}              /* Current value of the input field */
      onChange={onEditItem}               /* Event handler for input changes */
      required                            /* Make the input field required */
    />
  );
};

export default InvoiceField;