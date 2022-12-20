import React from "react";
import { Link } from "react-router-dom";

// Imported Icons ==========>
import { MdChecklist } from "react-icons/md";
import { FiUser } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="siderBar">
      <div className="sidebarItems">
        <ul className="list-items">
          <Link>
            {" "}
            <li className="sidebarItem">
              <MdChecklist />
            </li>
          </Link>
          <Link>
            {" "}
            <li className="sidebarItem">
              <FiUser />
            </li>
          </Link>

        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
