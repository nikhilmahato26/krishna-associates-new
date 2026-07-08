import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { Send, User, Phone, Mail, MessageSquare, Briefcase } from 'lucide-react';
import { services } from '@/data/services';
import { buildWhatsAppUrl } from '@/constants/site';
import { fadeUp, viewportOnce } from '@/animations/variants';
import { Button } from '@/components/Button';

/**
 * CONTACT FORM (Req #2)
 * Service dropdown → prefilled WhatsApp message.
 * Static site — no backend. Form fires a WhatsApp intent with the composed message.
 */

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit mobile number'),
  email: z.string().email('Please enter a valid email').or(z.literal('')).optional(),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export const ContactFormSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      service: '',
      message: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    const selectedService = services.find((s) => s.slug === data.service);
    const serviceMessage = selectedService?.whatsappMessage ??
      `Hello Krishna Associates, I need ${data.service} service.`;

    const fullMessage = [
      serviceMessage,
      '',
      `Name: ${data.name}`,
      `Phone: +91 ${data.phone}`,
      data.email ? `Email: ${data.email}` : null,
      data.message ? `Message: ${data.message}` : null,
    ]
      .filter(Boolean)
      .join('\n');

    const waUrl = buildWhatsAppUrl(fullMessage);
    toast.success('Opening WhatsApp with your enquiry...');
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    reset();
  };

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left column — headline + reassurance */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="lg:col-span-2"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold leading-[1.1] text-balance text-ink-900"
            >
              Get in Touch
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl font-medium text-brand-600 mt-3 text-balance"
            >
              Tell us what you need, we&rsquo;ll take it from there.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mt-5 text-lg text-ink-600 leading-relaxed"
            >
              Pick the service you&rsquo;re interested in, share a few details, and
              your enquiry lands directly in our WhatsApp. Typical response time:
              under 2 hours during business hours.
            </motion.p>

            <div className="mt-8 space-y-4">
              {[
                'No obligation, no follow-up spam',
                'Talk directly to a filing expert, not a call centre',
                'Free consultation on your first enquiry',
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-600 shrink-0" />
                  <span className="text-ink-700">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column — the form */}
          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            onSubmit={handleSubmit(onSubmit)}
            className="lg:col-span-3 rounded-2xl bg-white border border-ink-100 shadow-[var(--shadow-lift)] p-6 md:p-8 space-y-5"
            noValidate
          >
            {/* Name */}
            <FormField
              label="Full Name"
              icon={<User size={16} />}
              error={errors.name?.message}
            >
              <input
                type="text"
                placeholder="e.g. Rajesh Patel"
                {...register('name')}
                className="form-input"
              />
            </FormField>

            {/* Phone */}
            <FormField
              label="Mobile Number"
              icon={<Phone size={16} />}
              error={errors.phone?.message}
            >
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-ink-200 bg-ink-50 text-sm text-ink-600 font-medium">
                  +91
                </span>
                <input
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  placeholder="10-digit mobile number"
                  {...register('phone')}
                  className="form-input rounded-l-none"
                />
              </div>
            </FormField>

            {/* Email (optional) */}
            <FormField
              label="Email (optional)"
              icon={<Mail size={16} />}
              error={errors.email?.message}
            >
              <input
                type="email"
                placeholder="you@example.com"
                {...register('email')}
                className="form-input"
              />
            </FormField>

            {/* Service dropdown — Req #2 core */}
            <FormField
              label="Service you need"
              icon={<Briefcase size={16} />}
              error={errors.service?.message}
            >
              <select {...register('service')} className="form-input">
                <option value="">Select a service...</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.slug}>
                    {s.title}
                  </option>
                ))}
              </select>
            </FormField>

            {/* Message */}
            <FormField
              label="Anything else? (optional)"
              icon={<MessageSquare size={16} />}
              error={errors.message?.message}
            >
              <textarea
                rows={4}
                placeholder="Any specific questions or context you'd like to share..."
                {...register('message')}
                className="form-input resize-none"
              />
            </FormField>

            <Button
              type="submit"
              size="lg"
              fullWidth
              disabled={isSubmitting}
            >
              <Send size={16} />
              Send Enquiry via WhatsApp
            </Button>

            <p className="text-xs text-ink-500 text-center">
              Submitting opens WhatsApp with your enquiry pre-filled. Nothing is
              stored on our servers.
            </p>
          </motion.form>
        </div>
      </div>

      <style>{`
        .form-input {
          display: block;
          width: 100%;
          padding: 0.75rem 0.875rem;
          font-size: 15px;
          color: var(--color-ink-900);
          background: white;
          border: 1px solid var(--color-ink-200);
          border-radius: 0.5rem;
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
        }
        .form-input:focus {
          outline: none;
          border-color: var(--color-brand-500);
          box-shadow: 0 0 0 3px rgba(30, 154, 138, 0.15);
        }
        .form-input::placeholder {
          color: var(--color-ink-400);
        }
      `}</style>
    </section>
  );
};

interface FormFieldProps {
  label: string;
  icon: React.ReactNode;
  error?: string;
  children: React.ReactNode;
}

const FormField = ({ label, icon, error, children }: FormFieldProps) => (
  <div>
    <label className="flex items-center gap-2 text-sm font-medium text-ink-800 mb-2">
      <span className="text-brand-600">{icon}</span>
      {label}
    </label>
    {children}
    {error && <p className="mt-1.5 text-sm text-red-600">{error}</p>}
  </div>
);
