import React, { useState } from "react";
import "./commonDropdown.scss";
import PropTypes from "prop-types";
import { BsFilter } from "react-icons/bs";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Progress } from "antd";

import { Link, useLocation } from "react-router-dom";

export const CommonDropDownComp = ({
  options,
  backgroundColor,
  size,
  label,
  onChange,
  onBlur,
  values,
  value,
  name,
  Icon,
  img,
  className,
  progress,
  ...props
}) => {
  // const [isActive, setIsactive] = useState(false);
  const location = useLocation();
  return (
    <Dropdown className="custom-dropdown">
      <Dropdown.Toggle variant="default" id="dropdown-basic">
        {img ? (
          <img src={img} />
        ) : Icon ? (
          progress ? (
            <Progress type="circle" percent={50} format={() => <Icon />} />
          ) : (
            <Icon />
          )
        ) : (
          ""
        )}{" "}
        {name}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {options.map((item, i) => {
         
            
            return (
              item.onClick ?
               <Dropdown.Item key={i} className="dropdown-item" onClick={item.onClick}>
             {item.Icon ? <item.Icon /> :""} {item.name}
             </Dropdown.Item>:<Link
              
             className={`${
               location.pathname === item.path && "sidebar-active "
             } dropdown-item`}
             key={i}
             exact="true"
             to={item.path}
             onClick={item.onClick && item.onClick }
           >
            {item.Icon ? <item.Icon /> :""} {item.name}
           </Link>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};
CommonDropDownComp.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  // SingleSelectDropdown: PropTypes.bool,
  /**
   * What background color to use
   */
  // backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};
CommonDropDownComp.defaultProps = {
  backgroundColor: null,
  size: "medium",
  onClick: undefined,
  label: "Profile",
  options: [{ name: "Settings" }, { name: "Home" }],
};
