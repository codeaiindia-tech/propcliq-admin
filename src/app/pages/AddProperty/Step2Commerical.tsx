import React, { FC, useState, useEffect } from "react";
import { TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import {
  SaveStep2,
  getPropertyDetailById,
} from "../../Apis/AddPropertyApiList";
import { getProjectList } from "../../Apis/ProjectAPIList";
import RadioButtonBox from "../../../app/modules/wizards/components/RadioBox/RadioBox.tsx";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";

const Step2Commerical: FC<any> = (props: any) => {
  // const propertyCategory = ["retail"]; //office, showroom, plot, warehouse, retail  -> property_category
  console.log("props::::::;", props);

  const [city, setCity] = useState<string>("");
  const [building, setBuilding] = useState<string | null>("");
  const [newProjectVal, setNewProjectVal] = useState<string>("");
  const [locality, setLocality] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [stateValue, setStateValue] = useState<string>("");
  const [flatNo, setFlatNo] = useState<string>("");
  const [floorNo, setFloorNo] = useState<string>("");
  const [totalFloors, setTotalFloors] = useState<string>("");
  const [localityError, setLocalityError] = useState<string>("");
  const [stateError, setStateError] = useState<string>("");
  const [countryError, setCountryError] = useState<string>("");
  const [floorNoError, setFloorNoError] = useState<string>("");
  const [totalFloorsError, setTotalFloorsError] = useState<string>("");
  const [cityError, setCityErrorr] = useState<string>("");
  const [newProjectError, setNewProjectError] = useState<string>("");
  const [inputValue, setInputValue] = React.useState("");
  const [projectDetail, setProjectDetail] = React.useState<any>();
  const [projectOption, setProjectOption] = React.useState<any>([]);
  const [isProjectFlag, setIsProjectFlag] = React.useState<boolean>(false);
  const [isEdit, setIsEdit] = useState(false);
  const [propertyCategory, setPropertyCategory] = useState(["retail"]); //office, showroom, plot, warehouse, retail  -> property_category

  const handleSubmit = () => {
    // Validate form fields
    let isValid = true;
    if (!locality) {
      setLocalityError("Please select a valid locality");
      isValid = false;
    } else {
      setLocalityError("");
    }

    // if (!floorNo) {
    //     setFloorNoError('Please enter the floor no.111111');
    //     isValid = false;
    // } else {
    //     setFloorNoError('');
    // }

    if (!stateValue) {
      setStateError("Please enter State");
      isValid = false;
    } else {
      setStateError("");
    }

    if (!country) {
      setCountry("Please enter Country");
      isValid = false;
    } else {
      setCountry("");
    }

    if (!city) {
      setCityErrorr("Please enter City");
      isValid = false;
    } else {
      setCityErrorr("");
    }

    if (building === "No Project found, add New Project" && !newProjectVal) {
      setNewProjectError("Please enter Project");
      isValid = false;
    } else {
      setNewProjectError("");
    }

    if (totalFloors && isNaN(Number(totalFloors))) {
      setTotalFloorsError("Please enter valid total floors");
      isValid = false;
    } else {
      setTotalFloorsError("");
    }

    // Proceed with form submission if valid
    if (isValid) {
      // Perform form submission logic here
      const url: URL = new URL(window.location.href);
      const params: URLSearchParams = url.searchParams;
      const propertyId: any = params.get("id");
      let projectValue = building;
      if (building === "No Project found, add New Project") {
        projectValue = newProjectVal;
      }
      const data = {
        property_id: propertyId,
        address_details: {
          area: city,
          project: projectValue,
          locality: locality,
          flat_no: flatNo,
          floor_no: floorNo,
          total_floors: totalFloors,
        },
      };

      SaveStep2(data);
      props.handleSubmitStep2();
      console.log("Form submitted successfully");
    }
  };

  const getPropertyDetail = async () => {
    const url: URL = new URL(window.location.href);
    const params: URLSearchParams = url.searchParams;
    const propertyId: any = params.get("id");
    const fetchPropertyDetail = await getPropertyDetailById({ id: propertyId });
    if(fetchPropertyDetail?.fetchPropertyCategory){
      setPropertyCategory(fetchPropertyDetail?.propertyCategory)
    }
    if (fetchPropertyDetail?.address_details) {
      const { project, flat_no, floor_no, total_floors } =
        fetchPropertyDetail?.address_details;
      setInputValue(project);
      setBuilding(project);
      setTotalFloors(total_floors);
      setFloorNo(floor_no);
      setFlatNo(flat_no);
      setIsEdit(true);
      
    }
  };

  useEffect(() => {
    const url: URL = new URL(window.location.href);
    const params: URLSearchParams = url.searchParams;
    const propertyId: any = params.get("id");

    if (propertyId) {
      getPropertyDetail();
    }
  }, []);

  const getProjectDetailList = async () => {
    const fetchProjectDetail = await getProjectList();
    setProjectDetail(fetchProjectDetail);
    const projectNameList: any[] = [];
    projectNameList.push("No Project found, add New Project");
    fetchProjectDetail.map((x: any) => {
      projectNameList.push(x.name);
    });
    setProjectOption(projectNameList);
  };

  useEffect(() => {
    getProjectDetailList();
  }, []);

  useEffect(() => {
    if (inputValue === "No Project found, add New Project") {
      setIsProjectFlag(false);
      setCity("");
      setLocality("");
      setCountry("");
      setStateValue("");
    } else {
      const projectByName = projectDetail?.find(
        (x: any) => x.name === inputValue
      );
      if (projectByName) {
        const { city, country, locality, state }: any = projectByName;
        setIsProjectFlag(true);
        setCity(city);
        setLocality(locality);
        setCountry(country);
        setStateValue(state);
      }
    }
  }, [inputValue]);

  return (
    <div className="w-100">
      <h2 className="fw-bolder d-flex align-items-center text-gray-900">
        {isEdit ? "Edit Address Details" : "Add Property Details"}
      </h2>

      <div style={{ marginTop: "30px" }}>
        <div className="label_for_label">
          Building <span className="mandatoryMarker">*</span>
        </div>

        <div className="d-flex" style={{ gap: "16px" }}>
          <TextField
            label="Building/Project/Society (Optional)"
            placeholder="Building/Project/Society (Optional)"
            variant="outlined"
            fullWidth
            required
            error={!!stateError}
            helperText={stateError}
            value={stateValue}
            onChange={(e) => setStateValue(e.target.value)}
          />
        </div>
      </div>

      <div style={{ marginTop: "30px" }}>
        <div className="label_for_label">
          Locality <span className="mandatoryMarker">*</span>
        </div>

        <div className="d-flex" style={{ gap: "16px" }}>
          <TextField
            label="Locality"
            placeholder="Locality"
            variant="outlined"
            fullWidth
            required
            error={!!stateError}
            helperText={stateError}
            value={stateValue}
            onChange={(e) => setStateValue(e.target.value)}
          />
        </div>
      </div>

      <div className="add_property-group" style={{ marginTop: "30px" }}>
        <div className="label_for_label">
          Possession Info <span className="mandatoryMarker">*</span>
        </div>

        {!propertyCategory.includes("plot") ? (
          <div style={{ marginTop: "30px" }}>
            <div className="label_for_label">
              Possession Status <span className="mandatoryMarker">*</span>
            </div>

            <div className="d-flex" style={{ gap: "16px" }}>
              {["Ready to Move", "Under Construction"].map((val, index) => {
                return (
                  <RadioButtonBox
                    key={index}
                    label={val}
                    handleClick={() => {}}
                  />
                );
              })}
            </div>
          </div>
        ) : null}

        <div className="add_property-group" style={{ marginTop: "30px" }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                label="Available From"
                className="data_container-component"
                onChange={() => {}}
                slotProps={{
                  textField: {
                    error: false,
                  },
                }}
              />
            </DemoContainer>
          </LocalizationProvider>
        </div>

        {propertyCategory.includes("warehouse") ? (
          <>
            <TextField
              label="Age of Property (in years)"
              placeholder="Age of Property (in years)"
              variant="outlined"
              fullWidth
              required
              error={!!stateError}
              helperText={stateError}
              value={stateValue}
              onChange={(e) => setStateValue(e.target.value)}
            />
          </>
        ) : null}

        <div className="label_for_label">
          About the Property <span className="mandatoryMarker">*</span>
        </div>

        {propertyCategory.includes("warehouse") ||
        propertyCategory.includes("warehouse") ||
        propertyCategory.includes("plot") ||
        propertyCategory.includes("office") ? (
          <>
            <div style={{ marginTop: "30px" }}>
              <div className="label_for_label">
                Zone Type <span className="mandatoryMarker">*</span>
              </div>
              <div className="d-flex" style={{ gap: "16px", flexWrap:'wrap' }}>
                {[
                  "Industrial",
                  "Commerical",
                  "Residential",
                  "Special Economic Zone",
                  "Open Space",
                  "Agricultural Zone",
                  "Others",
                ].map((val, index) => {
                  return (
                    <RadioButtonBox
                      key={index}
                      label={val}
                      handleClick={() => {}}
                    />
                  );
                })}
              </div>
            </div>
          </>
        ) : <>
        <div style={{ marginTop: "30px" }}>
          <div className="label_for_label">
            Suitable for <span className="mandatoryMarker">*</span>
          </div>

          <div className="d-flex" style={{ gap: "16px" , flexWrap:'wrap'}}>
            {[
              "Jewellery",
              "Gym",
              "Grocery",
              "Clinic",
              "Footwear",
              "Electronics",
              "Clothing",
              "Others",
            ].map((val, index) => {
              return (
                <RadioButtonBox
                  key={index}
                  label={val}
                  handleClick={() => {}}
                />
              );
            })}
          </div>
        </div>
      </>}

        {propertyCategory.includes("warehouse") || propertyCategory.includes("retail") || propertyCategory.includes("showroom") ? (
          <>
            <div style={{ marginTop: "30px" }}>
              <div className="label_for_label">
                Location Hub <span className="mandatoryMarker">*</span>
              </div>

              <div className="d-flex" style={{ gap: "16px" , flexWrap:'wrap'}}>
                {[
                  "Mall",
                  "Commercial Project",
                  "Residential Project",
                  "Retail Complex/Building",
                  "Market/High Street",
                  "Others",
                ].map((val, index) => {
                  return (
                    <RadioButtonBox
                      key={index}
                      label={val}
                      handleClick={() => {}}
                    />
                  );
                })}
              </div>
            </div>
          </>
        ) : null}
        
        {propertyCategory.includes("office") ? (
          <>
        <div style={{ marginTop: "30px" }}>
          <div className="label_for_label">
            Location Hub <span className="mandatoryMarker">*</span>
          </div>

          <div className="d-flex" style={{ gap: "16px" }}>
            {["IT Park", "Business Park", "Others"].map((val, index) => {
              return (
                <RadioButtonBox
                  key={index}
                  label={val}
                  handleClick={() => {}}
                />
              );
            })}
          </div>
        </div>
      </>
        ) : null}

        {/* {propertyCategory.includes("warehouse") ||
        propertyCategory.includes("warehouse") ||
        !propertyCategory.includes("plot") ? (
          
        ) : null} */}

        {/* {propertyCategory.includes("warehouse") ||
        propertyCategory.includes("warehouse") ||
        !propertyCategory.includes("plot") ? (
          <>
            <div style={{ marginTop: "30px" }}>
              <div className="label_for_label">
                Location Hub <span className="mandatoryMarker">*</span>
              </div>

              <div className="d-flex" style={{ gap: "16px" }}>
                {["IT Park", "Business Park", "Others"].map((val, index) => {
                  return (
                    <RadioButtonBox
                      key={index}
                      label={val}
                      handleClick={() => {}}
                    />
                  );
                })}
              </div>
            </div>
          </>
        ) : null} */}

        <div style={{ marginTop: "30px" }}>
          <div className="label_for_label" style={{ gap: "16px" }}>
            Build Up Area <span className="mandatoryMarker">*</span>
          </div>

          <div className="d-flex" style={{ gap: "16px" }}>
            <TextField
              label="Build Up Area"
              placeholder="Build Up Area"
              variant="outlined"
              fullWidth
              required
              error={!!stateError}
              helperText={stateError}
              value={stateValue}
              onChange={(e) => setStateValue(e.target.value)}
            />
          </div>
        </div>

        {propertyCategory.includes("warehouse") || propertyCategory.includes("retail") || propertyCategory.includes("showroom") ? (
          <div style={{ marginTop: "30px" }}>
            <div className="label_for_label" style={{ gap: "16px" }}>
              Carpet Area <span className="mandatoryMarker">*</span>
            </div>

            <div className="d-flex" style={{ gap: "16px" }}>
              <TextField
                label="Carpet Area"
                placeholder="Carpet Area"
                variant="outlined"
                fullWidth
                required
                error={!!stateError}
                helperText={stateError}
                value={stateValue}
                onChange={(e) => setStateValue(e.target.value)}
              />
            </div>
          </div>
        ) : null}

        {propertyCategory.includes("retail") || propertyCategory.includes("showroom") ? (
          <>
            <div style={{ marginTop: "30px" }}>
              <div className="label_for_label" style={{ gap: "16px" }}>
                Entrance width in feet{" "}
                <span className="mandatoryMarker">*</span>
              </div>

              <div className="d-flex" style={{ gap: "16px" }}>
                <TextField
                  label="Entrance width in feet"
                  placeholder="Entrance width in feet"
                  variant="outlined"
                  fullWidth
                  required
                  error={!!stateError}
                  helperText={stateError}
                  value={stateValue}
                  onChange={(e) => setStateValue(e.target.value)}
                />
              </div>
            </div>

            <div style={{ marginTop: "30px" }}>
              <div className="label_for_label" style={{ gap: "16px" }}>
                Ceiling height in feet{" "}
                <span className="mandatoryMarker">*</span>
              </div>

              <div className="d-flex" style={{ gap: "16px" }}>
                <TextField
                  label="Ceiling height in feet"
                  placeholder="Ceiling height in feet"
                  variant="outlined"
                  fullWidth
                  required
                  error={!!stateError}
                  helperText={stateError}
                  value={stateValue}
                  onChange={(e) => setStateValue(e.target.value)}
                />
              </div>
            </div>
          </>
        ) : null}

        {propertyCategory.includes("office") ? (
          <div style={{ marginTop: "30px" }}>
            <div className="label_for_label">
              Property Condition <span className="mandatoryMarker">*</span>
            </div>

            <div className="d-flex" style={{ gap: "16px" }}>
              {["Ready to Use", "Bare Shell"].map((val, index) => {
                return (
                  <RadioButtonBox
                    key={index}
                    label={val}
                    handleClick={() => {}}
                  />
                );
              })}
            </div>
          </div>
        ) : null}

        {propertyCategory.includes("retail") || propertyCategory.includes("showroom") ? (
          <>
            <div style={{ marginTop: "30px" }}>
              <div className="label_for_label">
                Located Near <span className="mandatoryMarker">*</span>
              </div>

              <div className="d-flex" style={{ gap: "16px" }}>
                {["Entrance", "Elevator", "Stairs"].map((val, index) => {
                  return (
                    <RadioButtonBox
                      key={index}
                      label={val}
                      handleClick={() => {}}
                    />
                  );
                })}
              </div>
            </div>
          </>
        ) : null}

        <div style={{ marginTop: "30px" }}>
          <div className="label_for_label">
            OwnerShip <span className="mandatoryMarker">*</span>
          </div>

          <div className="d-flex" style={{ gap: "16px" }}>
            {[
              "Freehold",
              "Leasehold",
              "Cooperative Society",
              "Power of attorney",
            ].map((val, index) => {
              return (
                <RadioButtonBox
                  key={index}
                  label={val}
                  handleClick={() => {}}
                />
              );
            })}
          </div>
        </div>

        {/* --- */}

        <div style={{ marginTop: "30px" }}>
          <div className="label_for_label">
            Financials <span className="mandatoryMarker">*</span>
          </div>

          <div className="d-flex" style={{ gap: "16px" }}>
            <TextField
              label="Expected Rent"
              placeholder="Expected Rent"
              variant="outlined"
              fullWidth
              required
              error={!!stateError}
              helperText={stateError}
              value={stateValue}
              onChange={(e) => setStateValue(e.target.value)}
            />
            <TextField
              label="Security Deposit"
              placeholder="Security Deposit"
              variant="outlined"
              fullWidth
              required
              error={!!stateError}
              helperText={stateError}
              value={stateValue}
              onChange={(e) => setStateValue(e.target.value)}
            />
          </div>

        

          <div style={{ marginTop: "30px" }}>
            <div className="label_for_label">
              Negotiable <span className="mandatoryMarker">*</span>
            </div>

            <div className="d-flex" style={{ gap: "16px" }}>
              {["Yes", "No"].map((val, index) => {
                return (
                  <RadioButtonBox
                    key={index}
                    label={val}
                    handleClick={() => {}}
                  />
                );
              })}
            </div>
          </div>

          {propertyCategory.includes("office") ? (
            <div style={{ marginTop: "30px" }}>
              <div className="label_for_label">
                DG & UPS Charge included?{" "}
                <span className="mandatoryMarker">*</span>
              </div>

              <div className="d-flex" style={{ gap: "16px" }}>
                {["Yes", "No"].map((val, index) => {
                  return (
                    <RadioButtonBox
                      key={index}
                      label={val}
                      handleClick={() => {}}
                    />
                  );
                })}
              </div>
            </div>
          ) : null}

          {propertyCategory.includes("office") ? (
            <div style={{ marginTop: "30px" }}>
              <div className="label_for_label">
                Water Charges included{" "}
                <span className="mandatoryMarker">*</span>
              </div>

              <div className="d-flex" style={{ gap: "16px" }}>
                {["Yes", "No"].map((val, index) => {
                  return (
                    <RadioButtonBox
                      key={index}
                      label={val}
                      handleClick={() => {}}
                    />
                  );
                })}
              </div>
            </div>
          ) : null}

          {propertyCategory.includes("retail")  || propertyCategory.includes("showroom")? (
            <div style={{ marginTop: "30px" }}>
              <div className="label_for_label">
                Tax & Govt. Charge included?{" "}
                <span className="mandatoryMarker">*</span>
              </div>

              <div className="d-flex" style={{ gap: "16px" }}>
                {["Yes", "No"].map((val, index) => {
                  return (
                    <RadioButtonBox
                      key={index}
                      label={val}
                      handleClick={() => {}}
                    />
                  );
                })}
              </div>
            </div>
          ) : null}

          <div style={{ marginTop: "30px" }}>
            <div className="label_for_label">
              Electricity charges included?{" "}
              <span className="mandatoryMarker">*</span>
            </div>

            <div className="d-flex" style={{ gap: "16px" }}>
              {["Yes", "No"].map((val, index) => {
                return (
                  <RadioButtonBox
                    key={index}
                    label={val}
                    handleClick={() => {}}
                  />
                );
              })}
            </div>
          </div>
          
          <div className="d-flex" style={{ marginTop: "30px" , gap: "16px"}}>
            <TextField
              label="Lock in Period"
              placeholder="Lock in Period"
              variant="outlined"
              fullWidth
              required
              error={!!stateError}
              helperText={stateError}
              value={stateValue}
              onChange={(e) => setStateValue(e.target.value)}
            />

            <TextField
              label="Expected Rent Increase"
              placeholder="Expected Rent Increase"
              variant="outlined"
              fullWidth
              required
              error={!!stateError}
              helperText={stateError}
              value={stateValue}
              onChange={(e) => setStateValue(e.target.value)}
            />
          </div>

          {propertyCategory.includes("office") || propertyCategory.includes("retail") || propertyCategory.includes("warehouse")  || propertyCategory.includes("showroom") ? (
            <div style={{ marginTop: "30px" }}>
              <div className="label_for_label">
                Floors Available <span className="mandatoryMarker">*</span>
              </div>
              <div className="d-flex" style={{ gap: "16px" }}>
              <TextField
                label="Total Floor"
                placeholder="Total Floor"
                variant="outlined"
                fullWidth
                required
                error={!!stateError}
                helperText={stateError}
                value={stateValue}
                onChange={(e) => setStateValue(e.target.value)}
              />

              <TextField
                label="Your Floor"
                placeholder="Your Floor"
                variant="outlined"
                fullWidth
                required
                error={!!stateError}
                helperText={stateError}
                value={stateValue}
                onChange={(e) => setStateValue(e.target.value)}
              />
              </div>
            </div>
          ) : null}

          {propertyCategory.includes("office") ? (
            <>
              <div style={{ marginTop: "30px" }}>
                <div className="label_for_label">
                  Fifts and Starcases <span className="mandatoryMarker">*</span>
                </div>
                <div className="d-flex" style={{gap: "16px"}}>
                <TextField
                  label="Number of Staircases"
                  placeholder="Number of Staircases"
                  variant="outlined"
                  fullWidth
                  required
                  error={!!stateError}
                  helperText={stateError}
                  value={stateValue}
                  onChange={(e) => setStateValue(e.target.value)}
                />

                <TextField
                  label="Passengers Lifts"
                  placeholder="Passengers Lifts"
                  variant="outlined"
                  fullWidth
                  required
                  error={!!stateError}
                  helperText={stateError}
                  value={stateValue}
                  onChange={(e) => setStateValue(e.target.value)}
                />

                <TextField
                  label="Service Lifts"
                  placeholder="Service Lifts"
                  variant="outlined"
                  fullWidth
                  required
                  error={!!stateError}
                  helperText={stateError}
                  value={stateValue}
                  onChange={(e) => setStateValue(e.target.value)}
                />
                </div>
              </div>
            </>
          ) : null}

          {propertyCategory.includes("retail") || propertyCategory.includes("warehouse") || propertyCategory.includes("showroom") ? (
            <>
              <div style={{ marginTop: "30px" }}>
                <div className="label_for_label">
                  Facilities <span className="mandatoryMarker">*</span>
                </div>
                <div className="d-flex" style={{gap: "16px"}}>
                <TextField
                  label="Private Washrooms"
                  placeholder="Private Washrooms"
                  variant="outlined"
                  fullWidth
                  required
                  error={!!stateError}
                  helperText={stateError}
                  value={stateValue}
                  onChange={(e) => setStateValue(e.target.value)}
                />

                <TextField
                  label="Public Washrooms"
                  placeholder="Public Washrooms"
                  variant="outlined"
                  fullWidth
                  required
                  error={!!stateError}
                  helperText={stateError}
                  value={stateValue}
                  onChange={(e) => setStateValue(e.target.value)}
                />

              </div>
              </div>
            </>
          ) : null}

          {propertyCategory.includes("office") || propertyCategory.includes("retail") || propertyCategory.includes("showroom") ? (
            <>
              <div style={{ marginTop: "30px" }}>
                <div className="label_for_label">
                  Parking <span className="mandatoryMarker">*</span>
                </div>
                <div className="d-flex" style={{gap: "16px"}}>
                <TextField
                  label="Private Parking"
                  placeholder="Private Parking"
                  variant="outlined"
                  fullWidth
                  required
                  error={!!stateError}
                  helperText={stateError}
                  value={stateValue}
                  onChange={(e) => setStateValue(e.target.value)}
                />

                <TextField
                  label="Public Parking"
                  placeholder="Public Parking"
                  variant="outlined"
                  fullWidth
                  required
                  error={!!stateError}
                  helperText={stateError}
                  value={stateValue}
                  onChange={(e) => setStateValue(e.target.value)}
                />
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export { Step2Commerical };
