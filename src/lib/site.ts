/**
 * Escapeways brand + contact constants.
 * The two numbers below are the brand's real contact details — never replace
 * them with placeholders. See also the project memory (mem://escapeways/brand).
 */
export const BRAND_NAME = "Escapeways";
export const TAGLINE = "Escape the Ordinary. Discover More.";
export const INSTAGRAM_URL = "https://www.instagram.com/escapeways__/";

export const PHONE_PRIMARY_DISPLAY = "+91 8129847487";
export const PHONE_SECONDARY_DISPLAY = "+91 7736851656";

export const TEL_PRIMARY = "tel:+918129847487";
export const TEL_SECONDARY = "tel:+917736851656";

export const WHATSAPP_PRIMARY_URL = "https://wa.me/918129847487";

/** Build the primary WhatsApp link with a URL-encoded prefilled message. */
export const waLink = (message?: string) =>
  message
    ? `${WHATSAPP_PRIMARY_URL}?text=${encodeURIComponent(message)}`
    : WHATSAPP_PRIMARY_URL;

/** Standard enquiry message pattern used across the site. */
export const enquiryMessage = (topic: string) =>
  `Hi Escapeways! I'm interested in your ${topic}. Could you share more details?`;

export const SERVICE_OPTIONS = [
  "Camping Experiences",
  "Travel Packages",
  "Resorts & Hotels",
  "Villas & Private Pool Stays",
  "Group Trips & Getaways",
  "Customized Trip Planning",
] as const;
