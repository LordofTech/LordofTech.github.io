import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Or your preferred HTTP library
import './FarmRegistrationForm.scss';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

// ... other component styles

const FarmRegistrationForm = () => {
  // ... component logic

  return (
    <Container>
      <label htmlFor="farmName">Farm Name:</label>
      <InputField type="text" id="farmName" name="farmName" value={farmData.farmName} onChange={handleChange} required />
      {errors.farmName && <ErrorMsg>{errors.farmName}</ErrorMsg>}

      <label>Farm Coordinates (Optional):</label>
      <div>
        <label htmlFor="latitude">Latitude:</label>
        <InputField type="text" id="latitude" name="farmCoordinates.latitude" value={farmData.farmCoordinates.latitude} onChange={handleChange} />
        {errors.farmCoordinates?.latitude && <ErrorMsg>{errors.farmCoordinates.latitude}</ErrorMsg>}
      </div>
      <div>
        <label htmlFor="longitude">Longitude:</label>
        <InputField type="text" id="longitude" name="farmCoordinates.longitude" value={farmData.farmCoordinates.longitude} onChange={handleChange} />
        {errors.farmCoordinates?.longitude && <ErrorMsg>{errors.farmCoordinates.longitude}</ErrorMsg>}
      </div>

      <h2>Crops Cultivated and Planting Season</h2>
      {farmData.crops.map((crop, index) => (
        <div key={index}>
          <SelectField name={`crops[${index}].cropType`} value={crop.cropType} onChange={(e) => handleCropChange(index, 'cropType', e.target.value)}>
            <Option value="">Select Crop</Option>
            {cropTypes.map((cropType) => (
              <Option key={cropType} value={cropType}>
                {cropType}
              </Option>
            ))}
          </SelectField>
          {errors.crops?.[index]?.cropType && <ErrorMsg>{errors.crops[index].cropType}</ErrorMsg>}

          <SelectField name={`crops[${index}].startMonth`} value={crop.startMonth} onChange={(e) => handleCropChange(index, 'startMonth', e.target.value)}>
            <Option value="">Select Start Month</Option>
            {months.map((month) => (
              <Option key={month} value={month}>
                {month}
              </Option>
            ))}
          </SelectField>
          {errors.crops?.[index]?.startMonth && <ErrorMsg>{errors.crops[index]?.startMonth}</ErrorMsg>}

          <SelectField name={`crops[${index}].endMonth`} value={crop.endMonth} onChange={(e) => handleCropChange(index, 'endMonth', e.target.value)}>
            <Option value="">Select End Month</Option>
            {months.map((month) => (
              <Option key={month} value={month}>
                {month}
              </Option>
            ))}
          </SelectField>
          {errors.crops?.[index]?.endMonth && <ErrorMsg>{errors.crops[index]?.endMonth}</ErrorMsg>}

          <button type="button" onClick={() => handleRemoveCrop(index)}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={handleAddCrop}>Add Another Crop</button>

      <label htmlFor="farmDocuments">Upload Farm Documents:</label>
      <input type="file" id="farmDocuments" name="farmDocuments" multiple onChange={handleDocumentUpload} />
      {errors.farmDocuments && <ErrorMsg>{errors.farmDocuments}</ErrorMsg>}

      {submissionError && <ErrorMsg>{submissionError}</ErrorMsg>}
      {submissionSuccess && <SuccessMsg>Farm added successfully!</SuccessMsg>}
      <button type="submit" disabled={isSubmitting} onClick={handleSubmit}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </Container>
  );
};

export default FarmRegistrationForm;