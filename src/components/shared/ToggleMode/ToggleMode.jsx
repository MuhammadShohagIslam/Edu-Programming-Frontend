import React from "react";
import Switch from "react-switch";
import { useTheme } from "../../../contexts/ThemeProvider/ThemeProvider";
import classes from "./ToggleMode.module.css";

const ToggleMode = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <label className="d-flex align-items-center me-lg-3 me-2">
            <Switch
                offColor="#fff"
                onColor="#000"
                width={80}
                uncheckedIcon={
                    <>
                        <span className={classes.lightModel}>Light</span>
                    </>
                }
                checkedIcon={
                    <>
                        <span className={classes.DarkModel}>Dark</span>
                    </>
                }
                offHandleColor="#000"
                onHandleColor="#41e0fd"
                onChange={toggleTheme}
                checked={theme === "dark" ? true : false}
            />
        </label>
    );
};

export default ToggleMode;
