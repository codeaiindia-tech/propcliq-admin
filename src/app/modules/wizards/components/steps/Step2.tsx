import React, { FC, useState, useCallback } from 'react';
import { TextField, Button, InputAdornment, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

type Step2FormState = {
  city: string;
  building: string;
  locality: string;
  flatNo: string;
  floorNo: string;
  totalFloors: string;
};

type Step2FormErrors = {
  city: string;
  building: string;
  locality: string;
  flatNo: string;
  floorNo: string;
  totalFloors: string;
};

const initialFormState: Step2FormState = {
  city: '',
  building: '',
  locality: '',
  flatNo: '',
  floorNo: '',
  totalFloors: '',
};

const initialErrorState: Step2FormErrors = {
  city: '',
  building: '',
  locality: '',
  flatNo: '',
  floorNo: '',
  totalFloors: '',
};

const Step2: FC = () => {
  const [formData, setFormData] = useState<Step2FormState>(initialFormState);
  const [errors, setErrors] = useState<Step2FormErrors>(initialErrorState);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;

      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));

      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    },
    []
  );

  const validateForm = useCallback(() => {
    const newErrors: Step2FormErrors = { ...initialErrorState };
    let isValid = true;

    if (!formData.locality.trim()) {
      newErrors.locality = 'Please select a valid locality';
      isValid = false;
    }

    if (!formData.floorNo.trim()) {
      newErrors.floorNo = 'Please enter the floor no.';
      isValid = false;
    } else if (isNaN(Number(formData.floorNo))) {
      newErrors.floorNo = 'Please enter a valid floor no.';
      isValid = false;
    }

    if (formData.totalFloors.trim() && isNaN(Number(formData.totalFloors))) {
      newErrors.totalFloors = 'Please enter valid total floors';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }, [formData]);

  const handleSubmit = useCallback(() => {
    const isValid = validateForm();

    if (!isValid) return;

    console.log('Form submitted successfully', formData);
    // Add your API submission logic here
  }, [formData, validateForm]);

  return (
    <Box className="w-100">
      <TextField
        id="search-city"
        name="city"
        label="Search City"
        placeholder="Search City"
        variant="outlined"
        fullWidth
        value={formData.city}
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      <TextField
        id="building-project-society"
        name="building"
        label="Building/Project/Society"
        placeholder="Building/Project/Society"
        variant="outlined"
        fullWidth
        value={formData.building}
        onChange={handleChange}
        sx={{ mt: 2.5 }}
      />

      <TextField
        id="locality"
        name="locality"
        label="Locality"
        placeholder="Locality"
        variant="outlined"
        fullWidth
        required
        error={!!errors.locality}
        helperText={errors.locality}
        value={formData.locality}
        onChange={handleChange}
        sx={{ mt: 2.5 }}
      />

      <TextField
        id="flat-number"
        name="flatNo"
        label="Flat No."
        placeholder="Flat No."
        variant="outlined"
        fullWidth
        value={formData.flatNo}
        onChange={handleChange}
        sx={{ mt: 2.5 }}
      />

      <TextField
        id="floor-number"
        name="floorNo"
        label="Floor No."
        placeholder="Floor No."
        variant="outlined"
        fullWidth
        required
        type="number"
        error={!!errors.floorNo}
        helperText={errors.floorNo}
        value={formData.floorNo}
        onChange={handleChange}
        sx={{ mt: 2.5 }}
      />

      <TextField
        id="total-floors"
        name="totalFloors"
        label="Total Floors"
        placeholder="Total Floors"
        variant="outlined"
        fullWidth
        required
        type="number"
        error={!!errors.totalFloors}
        helperText={errors.totalFloors}
        value={formData.totalFloors}
        onChange={handleChange}
        sx={{ mt: 2.5 }}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        sx={{ mt: 2.5 }}
      >
        Post Property
      </Button>
    </Box>
  );
};

export { Step2 };