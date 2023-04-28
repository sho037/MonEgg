import React from "react";
import LocationCode from "./LocationCode.json";
import { Typography, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const Location = () => {
    const [locationCode, setLocationCode] = React.useState("");
    React.useEffect(() => {
        const userLocationCode = localStorage.getItem("userLocationCode");
        if (userLocationCode) {
            setLocationCode(userLocationCode);
        }
    }, []);

    return (
        <>
            <FormControl fullWidth>
                <InputLabel id="locationSelect">Location</InputLabel>
                <Select
                    labelId="locationSelect"
                    id="location"
                    label="Location"
                    defaultValue=""
                    value={locationCode}
                    onChange={(e) => {
                        setLocationCode(e.target.value as string);
                        localStorage.setItem("userLocationCode", e.target.value as string);
                    }}
                >
                    {LocationCode.map((item) => (
                        <MenuItem key={item.spotId} value={item.spotId}>{item.spotName}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            {locationCode === "" && (
                <Typography variant="h6" color="error">Locationを選択してください。</Typography>
            )}
        </>
    );
};

export default Location;