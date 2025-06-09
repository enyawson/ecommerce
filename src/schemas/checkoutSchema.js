import { z } from 'zod';

export const checkoutSchema = z.object({
  // Billing Details
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number'),

  // Shipping Info
  address: z.string().min(5, 'Address must be at least 5 characters'),
  city: z.string().min(2, 'City must be at least 2 characters'),
  state: z.string().min(2, 'State must be at least 2 characters'),
  zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, 'Invalid ZIP code'),
  country: z.string().min(2, 'Country must be at least 2 characters'),

  // Payment Details
  paymentMethod: z.enum(['e-money', 'cash']),
  eMoneyNumber: z.string().regex(/^\d{9}$/, 'e-Money number must be 9 digits').optional(),
  eMoneyPin: z.string().regex(/^\d{4}$/, 'e-Money PIN must be 4 digits').optional(),
})
.refine(
  (data) => {
    if (data.paymentMethod === 'e-money') {
      return data.eMoneyNumber && data.eMoneyPin;
    }
    return true;
  },
  {
    message: "e-Money number and PIN are required for e-Money payment",
    path: ["paymentMethod"],
  }
); 