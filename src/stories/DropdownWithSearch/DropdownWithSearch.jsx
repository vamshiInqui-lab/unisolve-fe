import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./searchDropdown.scss";

//react-dropdown-select package installed
import Select from "react-dropdown-select";

export const DropDownWithSearch = ({
  options,
  backgroundColor,
  size,
  label,
  value,
  onBlur,
  onChange,
  name,
  ...props
}) => {
  return (
    <div className="searchDropdown">
      <Select
        className="dropdown-toggle"
        options={options}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={label}
        name={name}
        value={value}
      />
    </div>
  );
};

DropDownWithSearch.propTypes = {
  label: PropTypes.string.isRequired,

  onClick: PropTypes.func,
};

//The default props of search components are listed here
//label, options and onClick functions need to be passed.
DropDownWithSearch.defaultProps = {
  onClick: undefined,
  label: "Dropdown",
  options: [
    { id: 1, value: "Don Bosco School, Mapusa" },
    { id: 2, value: "Don Bosco School, Vasco" },
    { id: 3, value: "Don Bosco School, Mumbai" },
  ],
};