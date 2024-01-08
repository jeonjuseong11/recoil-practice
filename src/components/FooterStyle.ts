import tw from 'tailwind-styled-components';

export const FooterContainer = tw.footer`
  bg-white dark:bg-gray-900
`;

export const FooterContent = tw.div`
  mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8
`;

export const FooterSection = tw.div`
  md:flex md:justify-between
`;

export const LogoContainer = tw.div`
  mb-6 md:mb-0
`;

export const GridContainer = tw.div`
  grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3
`;

export const GridItem = tw.div`
`;

export const SectionHeading = tw.h2`
  mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white
`;

export const LinkList = tw.ul`
  text-gray-500 dark:text-gray-400 font-medium
`;

export const ListItem = tw.li`
  mb-4
`;

export const StyledLink = tw.a`
  hover:underline
`;

export const Divider = tw.hr`
  my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8
`;

export const FooterBottom = tw.div`
  sm:flex sm:items-center sm:justify-between
`;

export const CopyRightText = tw.span`
  text-sm text-gray-500 sm:text-center dark:text-gray-400
`;

export const SocialMediaLinks = tw.div`
  flex mt-4 sm:justify-center sm:mt-0
`;

export const SocialLink = tw.a`
  text-gray-500 hover:text-gray-900 dark:hover:text-white
`;
