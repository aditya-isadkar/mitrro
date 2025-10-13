-- Create business_registrations table
CREATE TABLE public.business_registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  company_name TEXT NOT NULL,
  contact_person TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  business_type TEXT NOT NULL,
  business_size TEXT NOT NULL,
  annual_revenue TEXT NOT NULL,
  website TEXT,
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  zip_code TEXT NOT NULL,
  description TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.business_registrations ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert business registrations
CREATE POLICY "Anyone can submit business registrations"
ON public.business_registrations
FOR INSERT
WITH CHECK (true);

-- Allow admins to view all business registrations
CREATE POLICY "Admins can view all business registrations"
ON public.business_registrations
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));