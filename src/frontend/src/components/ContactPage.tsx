import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation } from "@tanstack/react-query";
import { CheckCircle, Clock, Loader2, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { createActor } from "../backend";

interface FormFields {
  name: string;
  email: string;
  message: string;
}

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validate(fields: FormFields): FieldErrors {
  const errors: FieldErrors = {};
  if (!fields.name.trim()) errors.name = "Full name is required.";
  if (!fields.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!fields.message.trim()) errors.message = "Message is required.";
  return errors;
}

export function ContactPage() {
  const { actor } = useActor(createActor);
  const [fields, setFields] = useState<FormFields>({
    name: "",
    email: "",
    message: "",
  });
  const [touched, setTouched] = useState<Record<keyof FormFields, boolean>>({
    name: false,
    email: false,
    message: false,
  });
  const [submitError, setSubmitError] = useState<string | null>(null);

  const fieldErrors = validate(fields);

  const mutation = useMutation({
    mutationFn: async (data: FormFields) => {
      if (!actor) throw new Error("Connection not ready. Please try again.");
      const result = await actor.submitContact(
        data.name,
        data.email,
        data.message,
      );
      if (result.__kind__ === "err") throw new Error(result.err);
      return result;
    },
    onError: (err: Error) => {
      setSubmitError(err.message ?? "Something went wrong. Please try again.");
    },
    onSuccess: () => {
      setSubmitError(null);
    },
  });

  function handleBlur(field: keyof FormFields) {
    setTouched((prev) => ({ ...prev, [field]: true }));
  }

  function handleChange(field: keyof FormFields, value: string) {
    setFields((prev) => ({ ...prev, [field]: value }));
    if (submitError) setSubmitError(null);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (Object.keys(validate(fields)).length > 0) return;
    mutation.mutate(fields);
  }

  return (
    <section
      className="min-h-screen py-20 px-4"
      style={{ background: "var(--background)" }}
      data-ocid="contact.page"
    >
      <div className="max-w-5xl mx-auto">
        {/* Page Heading */}
        <div className="text-center mb-14">
          <h1
            className="text-4xl font-bold tracking-tight mb-3"
            style={{ color: "var(--foreground)" }}
          >
            Get in Touch
          </h1>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ color: "var(--muted-foreground)" }}
          >
            Have questions about our courses? We would love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Contact Info — left column */}
          <aside
            className="lg:col-span-2 rounded-2xl p-8 space-y-8"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
            }}
            data-ocid="contact.info_panel"
          >
            <div>
              <h2
                className="text-xl font-semibold mb-6"
                style={{ color: "var(--foreground)" }}
              >
                Contact Information
              </h2>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span
                    className="mt-0.5 flex-shrink-0 p-2 rounded-lg"
                    style={{
                      background: "rgba(14,165,233,0.12)",
                      color: "var(--primary)",
                    }}
                  >
                    <Mail size={18} />
                  </span>
                  <div className="min-w-0">
                    <p
                      className="text-xs font-medium uppercase tracking-wider mb-0.5"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      Email
                    </p>
                    <a
                      href="mailto:info@techlearn.academy"
                      className="text-sm font-medium transition-colors duration-200 hover:underline"
                      style={{ color: "var(--primary)" }}
                    >
                      info@techlearn.academy
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span
                    className="mt-0.5 flex-shrink-0 p-2 rounded-lg"
                    style={{
                      background: "rgba(14,165,233,0.12)",
                      color: "var(--primary)",
                    }}
                  >
                    <MapPin size={18} />
                  </span>
                  <div className="min-w-0">
                    <p
                      className="text-xs font-medium uppercase tracking-wider mb-0.5"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      Location
                    </p>
                    <p
                      className="text-sm font-medium"
                      style={{ color: "var(--foreground)" }}
                    >
                      Remote / Global
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span
                    className="mt-0.5 flex-shrink-0 p-2 rounded-lg"
                    style={{
                      background: "rgba(14,165,233,0.12)",
                      color: "var(--primary)",
                    }}
                  >
                    <Clock size={18} />
                  </span>
                  <div className="min-w-0">
                    <p
                      className="text-xs font-medium uppercase tracking-wider mb-0.5"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      Response Time
                    </p>
                    <p
                      className="text-sm font-medium"
                      style={{ color: "var(--foreground)" }}
                    >
                      We typically respond within 24 hours
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Decorative accent bar */}
            <div
              className="h-1 w-16 rounded-full"
              style={{ background: "var(--primary)" }}
            />
          </aside>

          {/* Contact Form — right column */}
          <div
            className="lg:col-span-3 rounded-2xl p-8"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
            }}
          >
            {mutation.isSuccess ? (
              /* Success state */
              <div
                className="flex flex-col items-center justify-center py-12 text-center gap-4"
                data-ocid="contact.success_state"
              >
                <CheckCircle
                  size={56}
                  style={{ color: "#10b981" }}
                  strokeWidth={1.5}
                />
                <h3
                  className="text-xl font-semibold"
                  style={{ color: "var(--foreground)" }}
                >
                  Message Sent!
                </h3>
                <p
                  className="max-w-sm text-sm leading-relaxed"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Thank you! We received your message and will be in touch soon.
                </p>
              </div>
            ) : (
              /* Form */
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
                data-ocid="contact.form"
              >
                <h2
                  className="text-xl font-semibold mb-6"
                  style={{ color: "var(--foreground)" }}
                >
                  Send Us a Message
                </h2>

                <div className="space-y-5">
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium mb-1.5"
                      style={{ color: "var(--foreground)" }}
                    >
                      Full Name{" "}
                      <span style={{ color: "var(--primary)" }}>*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      aria-label="Full name"
                      aria-required="true"
                      aria-describedby={
                        touched.name && fieldErrors.name
                          ? "contact-name-error"
                          : undefined
                      }
                      aria-invalid={
                        touched.name && !!fieldErrors.name ? "true" : "false"
                      }
                      placeholder="Your full name"
                      value={fields.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      onBlur={() => handleBlur("name")}
                      className="w-full px-4 py-2.5 rounded-lg text-sm transition-colors duration-200 outline-none"
                      style={{
                        background: "var(--input)",
                        color: "var(--foreground)",
                        border:
                          touched.name && fieldErrors.name
                            ? "1px solid var(--destructive)"
                            : "1px solid var(--border)",
                        boxShadow:
                          touched.name && !fieldErrors.name
                            ? "0 0 0 2px rgba(14,165,233,0.25)"
                            : undefined,
                      }}
                      data-ocid="contact.input"
                    />
                    {touched.name && fieldErrors.name && (
                      <p
                        id="contact-name-error"
                        className="mt-1.5 text-xs"
                        style={{ color: "var(--destructive)" }}
                        role="alert"
                        data-ocid="contact.name.field_error"
                      >
                        {fieldErrors.name}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium mb-1.5"
                      style={{ color: "var(--foreground)" }}
                    >
                      Email Address{" "}
                      <span style={{ color: "var(--primary)" }}>*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      aria-label="Email address"
                      aria-required="true"
                      aria-describedby={
                        touched.email && fieldErrors.email
                          ? "contact-email-error"
                          : undefined
                      }
                      aria-invalid={
                        touched.email && !!fieldErrors.email ? "true" : "false"
                      }
                      placeholder="you@example.com"
                      value={fields.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      onBlur={() => handleBlur("email")}
                      className="w-full px-4 py-2.5 rounded-lg text-sm transition-colors duration-200 outline-none"
                      style={{
                        background: "var(--input)",
                        color: "var(--foreground)",
                        border:
                          touched.email && fieldErrors.email
                            ? "1px solid var(--destructive)"
                            : "1px solid var(--border)",
                        boxShadow:
                          touched.email && !fieldErrors.email
                            ? "0 0 0 2px rgba(14,165,233,0.25)"
                            : undefined,
                      }}
                      data-ocid="contact.email_input"
                    />
                    {touched.email && fieldErrors.email && (
                      <p
                        id="contact-email-error"
                        className="mt-1.5 text-xs"
                        style={{ color: "var(--destructive)" }}
                        role="alert"
                        data-ocid="contact.email.field_error"
                      >
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>

                  {/* Message field */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium mb-1.5"
                      style={{ color: "var(--foreground)" }}
                    >
                      Message <span style={{ color: "var(--primary)" }}>*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      aria-label="Message"
                      aria-required="true"
                      aria-describedby={
                        touched.message && fieldErrors.message
                          ? "contact-message-error"
                          : undefined
                      }
                      aria-invalid={
                        touched.message && !!fieldErrors.message
                          ? "true"
                          : "false"
                      }
                      placeholder="How can we help you?"
                      rows={5}
                      value={fields.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      onBlur={() => handleBlur("message")}
                      className="w-full px-4 py-2.5 rounded-lg text-sm transition-colors duration-200 outline-none resize-none"
                      style={{
                        background: "var(--input)",
                        color: "var(--foreground)",
                        border:
                          touched.message && fieldErrors.message
                            ? "1px solid var(--destructive)"
                            : "1px solid var(--border)",
                        boxShadow:
                          touched.message && !fieldErrors.message
                            ? "0 0 0 2px rgba(14,165,233,0.25)"
                            : undefined,
                      }}
                      data-ocid="contact.textarea"
                    />
                    {touched.message && fieldErrors.message && (
                      <p
                        id="contact-message-error"
                        className="mt-1.5 text-xs"
                        style={{ color: "var(--destructive)" }}
                        role="alert"
                        data-ocid="contact.message.field_error"
                      >
                        {fieldErrors.message}
                      </p>
                    )}
                  </div>

                  {/* Server/mutation error */}
                  {submitError && (
                    <p
                      className="text-xs rounded-lg px-4 py-3"
                      style={{
                        color: "var(--destructive-foreground)",
                        background: "rgba(239,68,68,0.12)",
                        border: "1px solid rgba(239,68,68,0.3)",
                      }}
                      role="alert"
                      data-ocid="contact.error_state"
                    >
                      {submitError}
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={mutation.isPending}
                    aria-busy={mutation.isPending}
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{
                      background: mutation.isPending
                        ? "rgba(14,165,233,0.7)"
                        : "var(--primary)",
                      color: "var(--primary-foreground)",
                      // @ts-expect-error CSS custom property
                      "--tw-ring-color": "var(--ring)",
                      "--tw-ring-offset-color": "var(--background)",
                    }}
                    data-ocid="contact.submit_button"
                  >
                    {mutation.isPending && (
                      <Loader2
                        size={16}
                        className="animate-spin"
                        aria-hidden="true"
                      />
                    )}
                    {mutation.isPending ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
