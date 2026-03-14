import React, { FC, useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
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
import { Dayjs } from "dayjs";

const Step2Commerical: FC<any> = (props: any) => {
  const [city, setCity] = useState<string>("");
  const [building, setBuilding] = useState<string | null>("");
  const [newProjectVal, setNewProjectVal] = useState<string>("");
  const [locality, setLocality] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [stateValue, setStateValue] = useState<string>("");
  const [flatNo, setFlatNo] = useState<string>("");
  const [floorNo, setFloorNo] = useState<string>("");
  const [totalFloors, setTotalFloors] = useState<string>("");

  const [possessionStatus, setPossessionStatus] = useState<string>("");
  const [availableFrom, setAvailableFrom] = useState<Dayjs | null>(null);
  const [ageOfProperty, setAgeOfProperty] = useState<string>("");
  const [zoneType, setZoneType] = useState<string>("");
  const [suitableFor, setSuitableFor] = useState<string>("");
  const [locationHub, setLocationHub] = useState<string>("");
  const [buildUpArea, setBuildUpArea] = useState<string>("");
  const [carpetArea, setCarpetArea] = useState<string>("");
  const [entranceWidth, setEntranceWidth] = useState<string>("");
  const [ceilingHeight, setCeilingHeight] = useState<string>("");
  const [propertyCondition, setPropertyCondition] = useState<string>("");
  const [locatedNear, setLocatedNear] = useState<string>("");
  const [ownership, setOwnership] = useState<string>("");
  const [expectedRent, setExpectedRent] = useState<string>("");
  const [securityDeposit, setSecurityDeposit] = useState<string>("");
  const [negotiable, setNegotiable] = useState<string>("");
  const [dgUpsChargeIncluded, setDgUpsChargeIncluded] = useState<string>("");
  const [waterChargesIncluded, setWaterChargesIncluded] = useState<string>("");
  const [taxGovtChargesIncluded, setTaxGovtChargesIncluded] =
    useState<string>("");
  const [electricityChargesIncluded, setElectricityChargesIncluded] =
    useState<string>("");
  const [lockInPeriod, setLockInPeriod] = useState<string>("");
  const [expectedRentIncrease, setExpectedRentIncrease] = useState<string>("");
  const [floorsAvailableTotal, setFloorsAvailableTotal] = useState<string>("");
  const [floorsAvailableYour, setFloorsAvailableYour] = useState<string>("");
  const [numberOfStaircases, setNumberOfStaircases] = useState<string>("");
  const [passengersLifts, setPassengersLifts] = useState<string>("");
  const [serviceLifts, setServiceLifts] = useState<string>("");
  const [privateWashrooms, setPrivateWashrooms] = useState<string>("");
  const [publicWashrooms, setPublicWashrooms] = useState<string>("");
  const [privateParking, setPrivateParking] = useState<string>("");
  const [publicParking, setPublicParking] = useState<string>("");

  const [localityError, setLocalityError] = useState<string>("");
  const [stateError, setStateError] = useState<string>("");
  const [countryError, setCountryError] = useState<string>("");
  const [floorNoError, setFloorNoError] = useState<string>("");
  const [totalFloorsError, setTotalFloorsError] = useState<string>("");
  const [cityError, setCityErrorr] = useState<string>("");
  const [newProjectError, setNewProjectError] = useState<string>("");

  const [inputValue, setInputValue] = useState("");
  const [projectDetail, setProjectDetail] = useState<any>([]);
  const [projectOption, setProjectOption] = useState<any>([]);
  const [isProjectFlag, setIsProjectFlag] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState(false);
  const [propertyCategory, setPropertyCategory] = useState<string[]>(["retail"]);

  const isSelected = (selectedValue: string, currentValue: string) =>
    selectedValue === currentValue;

  const handleSubmit = async () => {
    let isValid = true;

    if (!locality) {
      setLocalityError("Please select a valid locality");
      isValid = false;
    } else {
      setLocalityError("");
    }

    if (!stateValue) {
      setStateError("Please enter State");
      isValid = false;
    } else {
      setStateError("");
    }

    if (!country) {
      setCountryError("Please enter Country");
      isValid = false;
    } else {
      setCountryError("");
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

    if (!floorsAvailableYour) {
      setFloorNoError("Please enter the floor no.");
      isValid = false;
    } else if (isNaN(Number(floorsAvailableYour))) {
      setFloorNoError("Please enter valid floor no.");
      isValid = false;
    } else {
      setFloorNoError("");
    }

    if (!floorsAvailableTotal) {
      setTotalFloorsError("Please enter total floors");
      isValid = false;
    } else if (isNaN(Number(floorsAvailableTotal))) {
      setTotalFloorsError("Please enter valid total floors");
      isValid = false;
    } else {
      setTotalFloorsError("");
    }

    if (!isValid) return;

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
        floor_no: floorsAvailableYour,
        total_floors: floorsAvailableTotal,
      },
      commercial_details: {
        possession_status: possessionStatus,
        available_from: availableFrom ? availableFrom.format("YYYY-MM-DD") : "",
        age_of_property: ageOfProperty,
        zone_type: zoneType,
        suitable_for: suitableFor,
        location_hub: locationHub,
        build_up_area: buildUpArea,
        carpet_area: carpetArea,
        entrance_width: entranceWidth,
        ceiling_height: ceilingHeight,
        property_condition: propertyCondition,
        located_near: locatedNear,
        ownership: ownership,
        expected_rent: expectedRent,
        security_deposit: securityDeposit,
        negotiable: negotiable,
        dg_ups_charge_included: dgUpsChargeIncluded,
        water_charges_included: waterChargesIncluded,
        tax_govt_charges_included: taxGovtChargesIncluded,
        electricity_charges_included: electricityChargesIncluded,
        lock_in_period: lockInPeriod,
        expected_rent_increase: expectedRentIncrease,
        floors_available_total: floorsAvailableTotal,
        floors_available_your: floorsAvailableYour,
        number_of_staircases: numberOfStaircases,
        passengers_lifts: passengersLifts,
        service_lifts: serviceLifts,
        private_washrooms: privateWashrooms,
        public_washrooms: publicWashrooms,
        private_parking: privateParking,
        public_parking: publicParking,
      },
    };

    await SaveStep2(data);
    props.handleSubmitStep2();
  };

  const getPropertyDetail = async () => {
    const url: URL = new URL(window.location.href);
    const params: URLSearchParams = url.searchParams;
    const propertyId: any = params.get("id");
    const fetchPropertyDetail = await getPropertyDetailById({ id: propertyId });

    if (fetchPropertyDetail?.fetchPropertyCategory) {
      setPropertyCategory(fetchPropertyDetail?.propertyCategory || ["retail"]);
    }

    if (fetchPropertyDetail?.address_details) {
      const {
        project,
        flat_no,
        floor_no,
        total_floors,
        locality: fetchedLocality,
        area,
      } = fetchPropertyDetail.address_details;

      setInputValue(project || "");
      setBuilding(project || "");
      setTotalFloors(total_floors || "");
      setFloorNo(floor_no || "");
      setFlatNo(flat_no || "");
      setLocality(fetchedLocality || "");
      setCity(area || "");
      setIsEdit(true);
    }

    if (fetchPropertyDetail?.commercial_details) {
      const cd = fetchPropertyDetail.commercial_details;
      setPossessionStatus(cd?.possession_status || "");
      setAgeOfProperty(cd?.age_of_property || "");
      setZoneType(cd?.zone_type || "");
      setSuitableFor(cd?.suitable_for || "");
      setLocationHub(cd?.location_hub || "");
      setBuildUpArea(cd?.build_up_area || "");
      setCarpetArea(cd?.carpet_area || "");
      setEntranceWidth(cd?.entrance_width || "");
      setCeilingHeight(cd?.ceiling_height || "");
      setPropertyCondition(cd?.property_condition || "");
      setLocatedNear(cd?.located_near || "");
      setOwnership(cd?.ownership || "");
      setExpectedRent(cd?.expected_rent || "");
      setSecurityDeposit(cd?.security_deposit || "");
      setNegotiable(cd?.negotiable || "");
      setDgUpsChargeIncluded(cd?.dg_ups_charge_included || "");
      setWaterChargesIncluded(cd?.water_charges_included || "");
      setTaxGovtChargesIncluded(cd?.tax_govt_charges_included || "");
      setElectricityChargesIncluded(cd?.electricity_charges_included || "");
      setLockInPeriod(cd?.lock_in_period || "");
      setExpectedRentIncrease(cd?.expected_rent_increase || "");
      setFloorsAvailableTotal(cd?.floors_available_total || "");
      setFloorsAvailableYour(cd?.floors_available_your || "");
      setNumberOfStaircases(cd?.number_of_staircases || "");
      setPassengersLifts(cd?.passengers_lifts || "");
      setServiceLifts(cd?.service_lifts || "");
      setPrivateWashrooms(cd?.private_washrooms || "");
      setPublicWashrooms(cd?.public_washrooms || "");
      setPrivateParking(cd?.private_parking || "");
      setPublicParking(cd?.public_parking || "");

      if (cd?.available_from) {
        setAvailableFrom(cd.available_from);
      }
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
    setProjectDetail(fetchProjectDetail || []);
    const projectNameList: any[] = [];
    projectNameList.push("No Project found, add New Project");

    (fetchProjectDetail || []).forEach((x: any) => {
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
        setCity(city || "");
        setLocality(locality || "");
        setCountry(country || "");
        setStateValue(state || "");
        setBuilding(inputValue || "");
      }
    }
  }, [inputValue, projectDetail]);

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
            error={!!newProjectError}
            helperText={newProjectError}
            value={building || ""}
            onChange={(e) => setBuilding(e.target.value)}
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
            error={!!localityError}
            helperText={localityError}
            value={locality}
            onChange={(e) => setLocality(e.target.value)}
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
            <div className="d-flex" style={{ gap: "16px", flexWrap: "wrap" }}>
              {["Ready to Move", "Under Construction"].map((val, index) => (
                <div
                  key={index}
                  style={{
                    border: isSelected(possessionStatus, val)
                      ? "2px solid #1976d2"
                      : "1px solid #ddd",
                    borderRadius: "8px",
                  }}
                >
                  <RadioButtonBox
                    label={val}
                    handleClick={() => setPossessionStatus(val)}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <div className="add_property-group" style={{ marginTop: "30px" }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                label="Available From"
                className="data_container-component"
                value={availableFrom}
                onChange={(newValue) => setAvailableFrom(newValue)}
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
          <TextField
            label="Age of Property (in years)"
            placeholder="Age of Property (in years)"
            variant="outlined"
            fullWidth
            required
            error={false}
            helperText=""
            value={ageOfProperty}
            onChange={(e) => setAgeOfProperty(e.target.value)}
          />
        ) : null}

        <div className="label_for_label">
          About the Property <span className="mandatoryMarker">*</span>
        </div>

        {propertyCategory.includes("warehouse") ||
          propertyCategory.includes("plot") ||
          propertyCategory.includes("office") ? (
          <div style={{ marginTop: "30px" }}>
            <div className="label_for_label">
              Zone Type <span className="mandatoryMarker">*</span>
            </div>
            <div className="d-flex" style={{ gap: "16px", flexWrap: "wrap" }}>
              {[
                "Industrial",
                "Commerical",
                "Residential",
                "Special Economic Zone",
                "Open Space",
                "Agricultural Zone",
                "Others",
              ].map((val, index) => (
                <div
                  key={index}
                  style={{
                    border: isSelected(zoneType, val)
                      ? "2px solid #1976d2"
                      : "1px solid #ddd",
                    borderRadius: "8px",
                  }}
                >
                  <RadioButtonBox label={val} handleClick={() => setZoneType(val)} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div style={{ marginTop: "30px" }}>
            <div className="label_for_label">
              Suitable for <span className="mandatoryMarker">*</span>
            </div>
            <div className="d-flex" style={{ gap: "16px", flexWrap: "wrap" }}>
              {[
                "Jewellery",
                "Gym",
                "Grocery",
                "Clinic",
                "Footwear",
                "Electronics",
                "Clothing",
                "Others",
              ].map((val, index) => (
                <div
                  key={index}
                  style={{
                    border: isSelected(suitableFor, val)
                      ? "2px solid #1976d2"
                      : "1px solid #ddd",
                    borderRadius: "8px",
                  }}
                >
                  <RadioButtonBox
                    label={val}
                    handleClick={() => setSuitableFor(val)}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {propertyCategory.includes("warehouse") ||
          propertyCategory.includes("retail") ||
          propertyCategory.includes("showroom") ? (
          <div style={{ marginTop: "30px" }}>
            <div className="label_for_label">
              Location Hub <span className="mandatoryMarker">*</span>
            </div>
            <div className="d-flex" style={{ gap: "16px", flexWrap: "wrap" }}>
              {[
                "Mall",
                "Commercial Project",
                "Residential Project",
                "Retail Complex/Building",
                "Market/High Street",
                "Others",
              ].map((val, index) => (
                <div
                  key={index}
                  style={{
                    border: isSelected(locationHub, val)
                      ? "2px solid #1976d2"
                      : "1px solid #ddd",
                    borderRadius: "8px",
                  }}
                >
                  <RadioButtonBox
                    label={val}
                    handleClick={() => setLocationHub(val)}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {propertyCategory.includes("office") ? (
          <div style={{ marginTop: "30px" }}>
            <div className="label_for_label">
              Location Hub <span className="mandatoryMarker">*</span>
            </div>
            <div className="d-flex" style={{ gap: "16px", flexWrap: "wrap" }}>
              {["IT Park", "Business Park", "Others"].map((val, index) => (
                <div
                  key={index}
                  style={{
                    border: isSelected(locationHub, val)
                      ? "2px solid #1976d2"
                      : "1px solid #ddd",
                    borderRadius: "8px",
                  }}
                >
                  <RadioButtonBox
                    label={val}
                    handleClick={() => setLocationHub(val)}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : null}

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
              value={buildUpArea}
              onChange={(e) => setBuildUpArea(e.target.value)}
            />
          </div>
        </div>

        {propertyCategory.includes("warehouse") ||
          propertyCategory.includes("retail") ||
          propertyCategory.includes("showroom") ? (
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
                value={carpetArea}
                onChange={(e) => setCarpetArea(e.target.value)}
              />
            </div>
          </div>
        ) : null}

        {propertyCategory.includes("retail") ||
          propertyCategory.includes("showroom") ? (
          <>
            <div style={{ marginTop: "30px" }}>
              <div className="label_for_label" style={{ gap: "16px" }}>
                Entrance width in feet <span className="mandatoryMarker">*</span>
              </div>
              <div className="d-flex" style={{ gap: "16px" }}>
                <TextField
                  label="Entrance width in feet"
                  placeholder="Entrance width in feet"
                  variant="outlined"
                  fullWidth
                  required
                  value={entranceWidth}
                  onChange={(e) => setEntranceWidth(e.target.value)}
                />
              </div>
            </div>

            <div style={{ marginTop: "30px" }}>
              <div className="label_for_label" style={{ gap: "16px" }}>
                Ceiling height in feet <span className="mandatoryMarker">*</span>
              </div>
              <div className="d-flex" style={{ gap: "16px" }}>
                <TextField
                  label="Ceiling height in feet"
                  placeholder="Ceiling height in feet"
                  variant="outlined"
                  fullWidth
                  required
                  value={ceilingHeight}
                  onChange={(e) => setCeilingHeight(e.target.value)}
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
            <div className="d-flex" style={{ gap: "16px", flexWrap: "wrap" }}>
              {["Ready to Use", "Bare Shell"].map((val, index) => (
                <div
                  key={index}
                  style={{
                    border: isSelected(propertyCondition, val)
                      ? "2px solid #1976d2"
                      : "1px solid #ddd",
                    borderRadius: "8px",
                  }}
                >
                  <RadioButtonBox
                    label={val}
                    handleClick={() => setPropertyCondition(val)}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {propertyCategory.includes("retail") ||
          propertyCategory.includes("showroom") ? (
          <div style={{ marginTop: "30px" }}>
            <div className="label_for_label">
              Located Near <span className="mandatoryMarker">*</span>
            </div>
            <div className="d-flex" style={{ gap: "16px", flexWrap: "wrap" }}>
              {["Entrance", "Elevator", "Stairs"].map((val, index) => (
                <div
                  key={index}
                  style={{
                    border: isSelected(locatedNear, val)
                      ? "2px solid #1976d2"
                      : "1px solid #ddd",
                    borderRadius: "8px",
                  }}
                >
                  <RadioButtonBox
                    label={val}
                    handleClick={() => setLocatedNear(val)}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <div style={{ marginTop: "30px" }}>
          <div className="label_for_label">
            OwnerShip <span className="mandatoryMarker">*</span>
          </div>
          <div className="d-flex" style={{ gap: "16px", flexWrap: "wrap" }}>
            {[
              "Freehold",
              "Leasehold",
              "Cooperative Society",
              "Power of attorney",
            ].map((val, index) => (
              <div
                key={index}
                style={{
                  border: isSelected(ownership, val)
                    ? "2px solid #1976d2"
                    : "1px solid #ddd",
                  borderRadius: "8px",
                }}
              >
                <RadioButtonBox
                  label={val}
                  handleClick={() => setOwnership(val)}
                />
              </div>
            ))}
          </div>
        </div>

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
              value={expectedRent}
              onChange={(e) => setExpectedRent(e.target.value)}
            />
            <TextField
              label="Security Deposit"
              placeholder="Security Deposit"
              variant="outlined"
              fullWidth
              required
              value={securityDeposit}
              onChange={(e) => setSecurityDeposit(e.target.value)}
            />
          </div>

          <div style={{ marginTop: "30px" }}>
            <div className="label_for_label">
              Negotiable <span className="mandatoryMarker">*</span>
            </div>
            <div className="d-flex" style={{ gap: "16px", flexWrap: "wrap" }}>
              {["Yes", "No"].map((val, index) => (
                <div
                  key={index}
                  style={{
                    border: isSelected(negotiable, val)
                      ? "2px solid #1976d2"
                      : "1px solid #ddd",
                    borderRadius: "8px",
                  }}
                >
                  <RadioButtonBox
                    label={val}
                    handleClick={() => setNegotiable(val)}
                  />
                </div>
              ))}
            </div>
          </div>

          {propertyCategory.includes("office") ? (
            <div style={{ marginTop: "30px" }}>
              <div className="label_for_label">
                DG & UPS Charge included? <span className="mandatoryMarker">*</span>
              </div>
              <div className="d-flex" style={{ gap: "16px", flexWrap: "wrap" }}>
                {["Yes", "No"].map((val, index) => (
                  <div
                    key={index}
                    style={{
                      border: isSelected(dgUpsChargeIncluded, val)
                        ? "2px solid #1976d2"
                        : "1px solid #ddd",
                      borderRadius: "8px",
                    }}
                  >
                    <RadioButtonBox
                      label={val}
                      handleClick={() => setDgUpsChargeIncluded(val)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {propertyCategory.includes("office") ? (
            <div style={{ marginTop: "30px" }}>
              <div className="label_for_label">
                Water Charges included <span className="mandatoryMarker">*</span>
              </div>
              <div className="d-flex" style={{ gap: "16px", flexWrap: "wrap" }}>
                {["Yes", "No"].map((val, index) => (
                  <div
                    key={index}
                    style={{
                      border: isSelected(waterChargesIncluded, val)
                        ? "2px solid #1976d2"
                        : "1px solid #ddd",
                      borderRadius: "8px",
                    }}
                  >
                    <RadioButtonBox
                      label={val}
                      handleClick={() => setWaterChargesIncluded(val)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {propertyCategory.includes("retail") ||
            propertyCategory.includes("showroom") ? (
            <div style={{ marginTop: "30px" }}>
              <div className="label_for_label">
                Tax & Govt. Charge included? <span className="mandatoryMarker">*</span>
              </div>
              <div className="d-flex" style={{ gap: "16px", flexWrap: "wrap" }}>
                {["Yes", "No"].map((val, index) => (
                  <div
                    key={index}
                    style={{
                      border: isSelected(taxGovtChargesIncluded, val)
                        ? "2px solid #1976d2"
                        : "1px solid #ddd",
                      borderRadius: "8px",
                    }}
                  >
                    <RadioButtonBox
                      label={val}
                      handleClick={() => setTaxGovtChargesIncluded(val)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          <div style={{ marginTop: "30px" }}>
            <div className="label_for_label">
              Electricity charges included? <span className="mandatoryMarker">*</span>
            </div>
            <div className="d-flex" style={{ gap: "16px", flexWrap: "wrap" }}>
              {["Yes", "No"].map((val, index) => (
                <div
                  key={index}
                  style={{
                    border: isSelected(electricityChargesIncluded, val)
                      ? "2px solid #1976d2"
                      : "1px solid #ddd",
                    borderRadius: "8px",
                  }}
                >
                  <RadioButtonBox
                    label={val}
                    handleClick={() => setElectricityChargesIncluded(val)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="d-flex" style={{ marginTop: "30px", gap: "16px" }}>
            <TextField
              label="Lock in Period"
              placeholder="Lock in Period"
              variant="outlined"
              fullWidth
              required
              value={lockInPeriod}
              onChange={(e) => setLockInPeriod(e.target.value)}
            />
            <TextField
              label="Expected Rent Increase"
              placeholder="Expected Rent Increase"
              variant="outlined"
              fullWidth
              required
              value={expectedRentIncrease}
              onChange={(e) => setExpectedRentIncrease(e.target.value)}
            />
          </div>

          {propertyCategory.includes("office") ||
            propertyCategory.includes("retail") ||
            propertyCategory.includes("warehouse") ||
            propertyCategory.includes("showroom") ? (
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
                  error={!!totalFloorsError}
                  helperText={totalFloorsError}
                  value={floorsAvailableTotal}
                  onChange={(e) => setFloorsAvailableTotal(e.target.value)}
                />
                <TextField
                  label="Your Floor"
                  placeholder="Your Floor"
                  variant="outlined"
                  fullWidth
                  required
                  error={!!floorNoError}
                  helperText={floorNoError}
                  value={floorsAvailableYour}
                  onChange={(e) => setFloorsAvailableYour(e.target.value)}
                />
              </div>
            </div>
          ) : null}

          {propertyCategory.includes("office") ? (
            <div style={{ marginTop: "30px" }}>
              <div className="label_for_label">
                Fifts and Starcases <span className="mandatoryMarker">*</span>
              </div>
              <div className="d-flex" style={{ gap: "16px" }}>
                <TextField
                  label="Number of Staircases"
                  placeholder="Number of Staircases"
                  variant="outlined"
                  fullWidth
                  required
                  value={numberOfStaircases}
                  onChange={(e) => setNumberOfStaircases(e.target.value)}
                />
                <TextField
                  label="Passengers Lifts"
                  placeholder="Passengers Lifts"
                  variant="outlined"
                  fullWidth
                  required
                  value={passengersLifts}
                  onChange={(e) => setPassengersLifts(e.target.value)}
                />
                <TextField
                  label="Service Lifts"
                  placeholder="Service Lifts"
                  variant="outlined"
                  fullWidth
                  required
                  value={serviceLifts}
                  onChange={(e) => setServiceLifts(e.target.value)}
                />
              </div>
            </div>
          ) : null}

          {propertyCategory.includes("retail") ||
            propertyCategory.includes("warehouse") ||
            propertyCategory.includes("showroom") ? (
            <div style={{ marginTop: "30px" }}>
              <div className="label_for_label">
                Facilities <span className="mandatoryMarker">*</span>
              </div>
              <div className="d-flex" style={{ gap: "16px" }}>
                <TextField
                  label="Private Washrooms"
                  placeholder="Private Washrooms"
                  variant="outlined"
                  fullWidth
                  required
                  value={privateWashrooms}
                  onChange={(e) => setPrivateWashrooms(e.target.value)}
                />
                <TextField
                  label="Public Washrooms"
                  placeholder="Public Washrooms"
                  variant="outlined"
                  fullWidth
                  required
                  value={publicWashrooms}
                  onChange={(e) => setPublicWashrooms(e.target.value)}
                />
              </div>
            </div>
          ) : null}

          {propertyCategory.includes("office") ||
            propertyCategory.includes("retail") ||
            propertyCategory.includes("showroom") ? (
            <div style={{ marginTop: "30px" }}>
              <div className="label_for_label">
                Parking <span className="mandatoryMarker">*</span>
              </div>
              <div className="d-flex" style={{ gap: "16px" }}>
                <TextField
                  label="Private Parking"
                  placeholder="Private Parking"
                  variant="outlined"
                  fullWidth
                  required
                  value={privateParking}
                  onChange={(e) => setPrivateParking(e.target.value)}
                />
                <TextField
                  label="Public Parking"
                  placeholder="Public Parking"
                  variant="outlined"
                  fullWidth
                  required
                  value={publicParking}
                  onChange={(e) => setPublicParking(e.target.value)}
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <div
        className="d-flex justify-content-end"
        style={{ marginTop: "40px", gap: "16px" }}
      >
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Next
        </Button>
      </div>
    </div>
  );
};

export { Step2Commerical };