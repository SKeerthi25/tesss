import emailjs from '@emailjs/browser';

// Target Email Address: manimohanuk2001@gmail.com
// EmailJS Credentials
const env = (import.meta as any).env || {};
const EMAILJS_SERVICE_ID = env.VITE_EMAILJS_SERVICE_ID || 'service_92aq5ok';
const EMAILJS_TEMPLATE_ID = env.VITE_EMAILJS_TEMPLATE_ID || 'template_xptfwol';
const EMAILJS_PUBLIC_KEY = env.VITE_EMAILJS_PUBLIC_KEY || '5aNuh6VAygrWc-Imq';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface QuoteEmailParams {
  projectType: string;
  approxSize: string;
  timeline: string;
  postcode: string;
  fullName: string;
  email: string;
  phone: string;
  details?: string;
}

export interface CareerEmailParams {
  jobTitle: string;
  fullName: string;
  email: string;
  phone: string;
  coverNote?: string;
}

export interface ContactEmailParams {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export const sendQuoteEmail = async (params: QuoteEmailParams): Promise<boolean> => {
  try {
    const res = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: params.fullName,
        reply_to: params.email,
        phone_number: params.phone,
        message: `NEW INSTANT QUOTE REQUEST — TESSCO LTD\n\nClient: ${params.fullName}\nEmail: ${params.email}\nPhone: ${params.phone}\nPostcode: ${params.postcode}\n\nProject Type: ${params.projectType}\nApprox Size: ${params.approxSize}\nTimeline: ${params.timeline}\nDetails: ${params.details || 'N/A'}`,
      },
      EMAILJS_PUBLIC_KEY
    );
    console.log('[EmailJS] Quote sent:', res.status, res.text);
    return true;
  } catch (error) {
    console.error('[EmailJS] Quote error:', error);
    return false;
  }
};

export const sendCareerApplicationEmail = async (params: CareerEmailParams): Promise<boolean> => {
  try {
    const res = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: params.fullName,
        reply_to: params.email,
        phone_number: params.phone,
        message: `NEW JOB APPLICATION — TESSCO LTD\n\nApplicant: ${params.fullName}\nEmail: ${params.email}\nPhone: ${params.phone}\nPosition Applied: ${params.jobTitle}\n\nCover Note:\n${params.coverNote || 'N/A'}`,
      },
      EMAILJS_PUBLIC_KEY
    );
    console.log('[EmailJS] Application sent:', res.status, res.text);
    return true;
  } catch (error) {
    console.error('[EmailJS] Application error:', error);
    return false;
  }
};

export const sendContactEmail = async (params: ContactEmailParams): Promise<boolean> => {
  try {
    const res = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: params.name,
        reply_to: params.email,
        phone_number: params.phone,
        message: `NEW CONTACT ENQUIRY — TESSCO LTD\n\nName: ${params.name}\nEmail: ${params.email}\nPhone: ${params.phone}\nService Required: ${params.service}\n\nMessage:\n${params.message}`,
      },
      EMAILJS_PUBLIC_KEY
    );
    console.log('[EmailJS] Contact sent:', res.status, res.text);
    return true;
  } catch (error) {
    console.error('[EmailJS] Contact error:', error);
    return false;
  }
};
