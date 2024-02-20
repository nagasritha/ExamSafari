export interface Input {
    id: number;
    label: string;
    type: string;
    placeholder: string;
  }
  
  export const userInputs: Input[] = [
    {
      id: 1,
      label: "Username",
      type: "text",
      placeholder: "cristiano_ronaldo",
    },
    {
      id: 2,
      label: "Name and Surname",
      type: "text",
      placeholder: "Cristiano Ronaldo",
    },
    {
      id: 3,
      label: "Email",
      type: "text",
      placeholder: "cirstianoronaldo@gmail.com",
    },
    {
      id: 4,
      label: "Phone",
      type: "tel",
      placeholder: "1234567890",
    },
    {
      id: 5,
      label: "Password",
      type: "password",
      placeholder: "password",
    },
    {
      id: 6,
      label: "Address",
      type: "text",
      placeholder: "Arbour House, Sebastian ST. Road",
    },
    {
      id: 7,
      label: "Country",
      type: "text",
      placeholder: "India",
    },
  ];
  
  export const serviceInputs: Input[] = [
    {
      id: 1,
      label: "Title",
      type: "text",
      placeholder: "Travel/Accomodation/Travel+Accomodation Service",
    },
    {
      id: 2,
      label: "Title",
      type: "text",
      placeholder: "your service description",
    },
    {
      id: 3,
      label: "Country",
      type: "text",
      placeholder: "India",
    },
  ];
  
  export const examcityInputs: Input[] = [
    {
      id: 1,
      label: "Title",
      type: "text",
      placeholder: "Enter your exam city name",
    },
    {
      id: 2,
      label: "Country",
      type: "text",
      placeholder: "Enter country of exam city",
    },
  ];
  
  export const examcitycenterInputs: Input[] = [
    {
      id: 1,
      label: "Title",
      type: "text",
      placeholder: "Enter your exam city center name",
    },
    {
      id: 2,
      label: "Distance from city center",
      type: "number",
      placeholder: "Enter distance from city center",
    },
    {
      id: 3,
      label: "Description",
      type: "text",
      placeholder: "Enter its description",
    },
    {
      id: 4,
      label: "Anemities",
      type: "text",
      placeholder: "Enter amenities required",
    },
    {
      id: 5,
      label: "Rooms",
      type: "text",
      placeholder: "Enter your rooms",
    },
    {
      id: 6,
      label: "Options",
      type: "text",
      placeholder: "Enter your options",
    },
    {
      id: 7,
      label: "Cost and Duration",
      type: "text",
      placeholder: "Enter cost, duration",
    },
  ];
  