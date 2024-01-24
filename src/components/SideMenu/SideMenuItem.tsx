import React, { useState } from 'react';
import { IoChevronForward } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import tw from 'tailwind-styled-components';

interface SubMenuProps extends React.HTMLAttributes<HTMLUListElement> {
  'data-isopen'?: string;
}

const SubMenu = tw.ul<SubMenuProps>`
  overflow-hidden transition-all ease-in-out duration-300
  ${(p) => (p['data-isopen'] === 'true' ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0')}
`;

interface SideMenuItemProps {
  name: string;
  to: string;
  Icon: React.ElementType;
  subMenuItems?: Array<{ name: string; to: string }>;
}

const SideMenuitem: React.FC<SideMenuItemProps> = ({
  name,
  to,
  Icon,
  subMenuItems,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      {subMenuItems && subMenuItems.length > 0 ? (
        <>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          >
            <Icon className="flex-shrink-0 w-7 h-7 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span className="flex-1 ms-6 text-left rtl:text-right whitespace-nowrap">
              {name}
            </span>
            <IoChevronForward
              className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
            />
          </button>
          <SubMenu data-isopen={isOpen ? 'true' : 'false'}>
            {subMenuItems.map((subItem) => (
              <li key={subItem.name}>
                <NavLink
                  to={subItem.to}
                  className="flex items-center w-full p-2 text-gray-900 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  {subItem.name}
                </NavLink>
              </li>
            ))}
          </SubMenu>
        </>
      ) : (
        <NavLink
          to={to}
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <Icon className="flex-shrink-0 w-7 h-7 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          <span className="flex-1 ms-6 whitespace-nowrap">{name}</span>
        </NavLink>
      )}
    </li>
  );
};

SideMenuitem.defaultProps = {
  subMenuItems: [],
};

export default SideMenuitem;
