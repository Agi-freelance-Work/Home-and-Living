// Validation utilities for the Homiee website

export interface ValidationResult {
  isValid: boolean;
  errorMessage?: string;
}

/**
 * Validates an email address
 * @param email The email address to validate
 * @returns ValidationResult indicating if the email is valid and an optional error message
 */
export const validateEmail = (email: string): ValidationResult => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || email.trim() === '') {
    return { isValid: false, errorMessage: 'Email is required' };
  }
  if (!emailRegex.test(email)) {
    return { isValid: false, errorMessage: 'Please enter a valid email address' };
  }
  return { isValid: true };
};

/**
 * Validates a name field
 * @param name The name to validate
 * @param fieldName The name of the field for error messaging (default: 'Name')
 * @returns ValidationResult indicating if the name is valid and an optional error message
 */
export const validateName = (name: string, fieldName: string = 'Name'): ValidationResult => {
  if (!name || name.trim() === '') {
    return { isValid: false, errorMessage: `${fieldName} is required` };
  }
  if (name.trim().length < 2) {
    return { isValid: false, errorMessage: `${fieldName} must be at least 2 characters` };
  }
  if (name.trim().length > 50) {
    return { isValid: false, errorMessage: `${fieldName} must be less than 50 characters` };
  }
  return { isValid: true };
};

/**
 * Validates a phone number
 * @param phone The phone number to validate
 * @returns ValidationResult indicating if the phone is valid and an optional error message
 */
export const validatePhone = (phone: string): ValidationResult => {
  if (!phone || phone.trim() === '') {
    return { isValid: false, errorMessage: 'Phone number is required' };
  }
  // Remove all non-digit characters to check for 10-15 digit number
  const digitsOnly = phone.replace(/\D/g, '');
  if (digitsOnly.length < 10 || digitsOnly.length > 15) {
    return { isValid: false, errorMessage: 'Please enter a valid phone number (10-15 digits)' };
  }
  return { isValid: true };
};

/**
 * Validates a message field
 * @param message The message to validate
 * @param minLength Minimum length requirement (default: 10)
 * @returns ValidationResult indicating if the message is valid and an optional error message
 */
export const validateMessage = (message: string, minLength: number = 10): ValidationResult => {
  if (!message || message.trim() === '') {
    return { isValid: false, errorMessage: 'Message is required' };
  }
  if (message.trim().length < minLength) {
    return { isValid: false, errorMessage: `Message must be at least ${minLength} characters` };
  }
  if (message.trim().length > 1000) {
    return { isValid: false, errorMessage: 'Message must be less than 1000 characters' };
  }
  return { isValid: true };
};

/**
 * Validates a subject field
 * @param subject The subject to validate
 * @returns ValidationResult indicating if the subject is valid and an optional error message
 */
export const validateSubject = (subject: string): ValidationResult => {
  if (!subject || subject.trim() === '') {
    return { isValid: false, errorMessage: 'Subject is required' };
  }
  if (subject.trim().length < 3) {
    return { isValid: false, errorMessage: 'Subject must be at least 3 characters' };
  }
  if (subject.trim().length > 100) {
    return { isValid: false, errorMessage: 'Subject must be less than 100 characters' };
  }
  return { isValid: true };
};