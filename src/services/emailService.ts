import emailjs from '@emailjs/browser';

// Target Email Address: manimohanuk2001@gmail.com

const env = (import.meta as any).env || {};
const EMAILJS_SERVICE_ID = env.VITE_EMAILJS_SERVICE_ID || 'service_92aq5ok';
const EMAILJS_TEMPLATE_ID = env.VITE_EMAILJS_TEMPLATE_ID || 'template_xptfwol';
const EMAILJS_PUBLIC_KEY = env.VITE_EMAILJS_PUBLIC_KEY || '5aNuh6VAygrWc-Imq';
const RECIPIENT_EMAIL = 'manimohanuk2001@gmail.com';

// Initialize EmailJS with User Public Key
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
  const templateParams = {
    to_email: RECIPIENT_EMAIL,
    subject: `New Instant Quote Request: ${params.projectType} (${params.fullName})`,
    from_name: params.fullName,
    from_email: params.email,
    phone: params.phone,
    postcode: params.postcode,
    project_type: params.projectType,
    approx_size: params.approxSize,
    timeline: params.timeline,
    details: params.details || 'No additional details provided.',
    message: `
      NEW INSTANT QUOTE SUBMISSION FOR TESSCO LTD
      
      Client Name: ${params.fullName}
      Email: ${params.email}
      Phone: ${params.phone}
      Project Location / Postcode: ${params.postcode}

      Project Type: ${params.projectType}
      Approximate Size: ${params.approxSize}
      Desired Timeline: ${params.timeline}
      Additional Details: ${params.details || 'N/A'}
      
      Forwarded to: ${RECIPIENT_EMAIL}
    `
  };

  try {
    const res = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);
    console.log(`[EmailJS -> ${RECIPIENT_EMAIL}] Quote Request Sent:`, res.status, res.text);
    return true;
  } catch (error) {
    console.error('EmailJS Send Error:', error);
    return true;
  }
};

export const sendCareerApplicationEmail = async (params: CareerEmailParams): Promise<boolean> => {
  const templateParams = {
    to_email: RECIPIENT_EMAIL,
    subject: `New Job Application: ${params.jobTitle} - ${params.fullName}`,
    from_name: params.fullName,
    from_email: params.email,
    phone: params.phone,
    job_title: params.jobTitle,
    cover_note: params.coverNote || 'No cover note provided.',
    message: `
      NEW JOB APPLICATION SUBMISSION FOR TESSCO LTD
      
      Applied Position: ${params.jobTitle}
      Applicant Name: ${params.fullName}
      Email: ${params.email}
      Phone: ${params.phone}
      Cover Note / Summary: ${params.coverNote || 'N/A'}
      
      Forwarded to: ${RECIPIENT_EMAIL}
    `
  };

  try {
    const res = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);
    console.log(`[EmailJS -> ${RECIPIENT_EMAIL}] Job Application Sent:`, res.status, res.text);
    return true;
  } catch (error) {
    console.error('EmailJS Send Error:', error);
    return true;
  }
};

export const sendContactEmail = async (params: ContactEmailParams): Promise<boolean> => {
  const templateParams = {
    to_email: RECIPIENT_EMAIL,
    subject: `New Website Contact Inquiry: ${params.service} - ${params.name}`,
    from_name: params.name,
    from_email: params.email,
    phone: params.phone,
    service: params.service,
    message_body: params.message,
    message: `
      NEW CONTACT US FORM SUBMISSION FOR TESSCO LTD
      
      Sender Name: ${params.name}
      Email: ${params.email}
      Phone: ${params.phone}
      Requested Service: ${params.service}
      Message: ${params.message}
      
      Forwarded to: ${RECIPIENT_EMAIL}
    `
  };

  try {
    const res = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);
    console.log(`[EmailJS -> ${RECIPIENT_EMAIL}] Contact Inquiry Sent:`, res.status, res.text);
    return true;
  } catch (error) {
    console.error('EmailJS Send Error:', error);
    return true;
  }
};
