import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"
import {
  Integration,
  Sales,
  Services,
  Spares,
  CRM,
  Account,
} from "../assets/Icons.jsx";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


export const cardData = [
  {
    id: 1,
    title: "Sales",
    icon: Sales,
    listItem: [
      "Sales Order Management",
      "Vehicle Sales & Billing",
      "Vehicle Inventory Management",
      "Vehicle Purchase",
      "Achieve Targets",
    ],
  },
  {
    id: 2,
    title: "Services",
    icon: Services,
    listItem: [
      "Campaigns",
      "Appointments",
      "Quotations",
      "Job Order",
      "Warranty/Coupon Claims",
    ],
  },
  {
    id: 3,
    title: "Spares",
    icon: Spares,
    listItem: [
      "Spare Parts Orders",
      "Parts Purchase",
      "Parts Sales",
      "Acquire Inventory",
      "Manage Inventory",
    ],
  },
  {
    id: 4,
    title: "CRM",
    icon: CRM,
    listItem: [
      "Lead Generation",
      "Lead Management & follow-up",
      "Enquiry Management",
      "Customer Satisfaction Index",
    ],
  },
  {
    id: 5,
    title: "Accounting",
    icon: Account,
    listItem: [
      "Bank/Cash",
      "Debit/Credit Notes, JVs",
      "Vehicle Inventory",
      "Trial Balance/BS",
    ],
  },
  {
    id: 6,
    title: "Integration",
    icon: Integration,
    listItem: ["Interface with OEM Systems & 3rd", "Party Accounting Systems"],
  },
];