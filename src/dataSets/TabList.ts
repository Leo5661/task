export const TabMenu: string[] = [
  "Basic Info",
  "Files",
  "Mutual Action Plan",
  "Contact",
  "Internal Actions",
];

export const SideTabMenu: string[] = [
  "Overview",
  "Welcome",
  "Product Capabilities",
  "Customer Success Stories",
  "File Sharing",
  "Our Deck",
];

type MenuItem = {
  icon: string;
  name: string;
  isBadge: boolean;
};

export const MobileMenu: MenuItem[] = [
  {
    icon: "./search.svg",
    name: "Search",
    isBadge: false,
  },
  {
    icon: "./inbox.svg",
    name: "Inbox",
    isBadge: false,
  },
  {
    icon: "./notification.svg",
    name: "Notifications",
    isBadge: true,
  },
  {
    icon: "./help.svg",
    name: "Help",
    isBadge: false,
  },
];
