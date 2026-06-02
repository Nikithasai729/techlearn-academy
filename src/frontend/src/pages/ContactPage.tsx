import { createActor } from "@/backend";
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useActor } from "@caffeineai/core-infrastructure";
import { CheckCircle2, Mail, MessageSquare, Send, User } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function ContactPage() {
  const { actor } = useActor(createActor);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const e: typeof errors = {};
    if (!name.trim()) e.name = "Name is required.";
    if (!email.trim()) e.email = "Email is required.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
      e.email = "Enter a valid email.";
    if (!message.trim()) e.message = "Message is required.";
    else if (message.trim().length < 10)
      e.message = "Message must be at least 10 characters.";
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      if (actor) {
        const result = await actor.submitContact(
          name.trim(),
          email.trim(),
          message.trim(),
        );
        if (result.__kind__ === "ok") {
          setSubmitted(true);
          setName("");
          setEmail("");
          setMessage("");
        } else {
          toast.error(result.err ?? "Submission failed. Please try again.");
        }
      } else {
        // No actor yet — still show success for demo
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Layout>
      <div className="bg-background min-h-screen">
        {/* Page Header */}
        <div className="bg-card border-b border-border py-14">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <Badge
              variant="outline"
              className="mb-4 border-primary/40 text-primary bg-primary/10 text-xs"
            >
              Get in Touch
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-muted-foreground text-lg">
              Have a question or feedback? We'd love to hear from you.
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
          {submitted ? (
            <div
              className="bg-card border border-chart-3/40 rounded-xl p-10 text-center flex flex-col items-center gap-4"
              data-ocid="contact.success_state"
            >
              <div className="w-16 h-16 rounded-full bg-chart-3/15 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-chart-3" />
              </div>
              <h2 className="text-xl font-bold text-foreground">
                Message Sent!
              </h2>
              <p className="text-muted-foreground text-sm max-w-sm">
                Thanks for reaching out. We'll get back to you within 24–48
                hours.
              </p>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="mt-2 border-border text-muted-foreground hover:text-foreground"
                onClick={() => setSubmitted(false)}
                data-ocid="contact.send_another_button"
              >
                Send another message
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-card border border-border rounded-xl p-8 flex flex-col gap-6"
              data-ocid="contact.form"
            >
              <div className="flex flex-col gap-1.5">
                <Label
                  htmlFor="contact-name"
                  className="flex items-center gap-2 text-sm font-medium"
                >
                  <User className="w-4 h-4 text-primary" />
                  Your Name
                </Label>
                <Input
                  id="contact-name"
                  type="text"
                  placeholder="Jane Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={() => {
                    const e = validate();
                    setErrors((prev) => ({ ...prev, name: e.name }));
                  }}
                  aria-describedby={
                    errors.name ? "contact-name-error" : undefined
                  }
                  aria-invalid={!!errors.name}
                  className="bg-background border-input"
                  data-ocid="contact.name_input"
                />
                {errors.name && (
                  <span
                    id="contact-name-error"
                    className="text-xs text-destructive"
                    role="alert"
                    data-ocid="contact.name.field_error"
                  >
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <Label
                  htmlFor="contact-email"
                  className="flex items-center gap-2 text-sm font-medium"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  Email Address
                </Label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="jane@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => {
                    const e = validate();
                    setErrors((prev) => ({ ...prev, email: e.email }));
                  }}
                  aria-describedby={
                    errors.email ? "contact-email-error" : undefined
                  }
                  aria-invalid={!!errors.email}
                  className="bg-background border-input"
                  data-ocid="contact.email_input"
                />
                {errors.email && (
                  <span
                    id="contact-email-error"
                    className="text-xs text-destructive"
                    role="alert"
                    data-ocid="contact.email.field_error"
                  >
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <Label
                  htmlFor="contact-message"
                  className="flex items-center gap-2 text-sm font-medium"
                >
                  <MessageSquare className="w-4 h-4 text-primary" />
                  Message
                </Label>
                <Textarea
                  id="contact-message"
                  placeholder="Tell us how we can help..."
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onBlur={() => {
                    const e = validate();
                    setErrors((prev) => ({ ...prev, message: e.message }));
                  }}
                  aria-describedby={
                    errors.message ? "contact-message-error" : undefined
                  }
                  aria-invalid={!!errors.message}
                  className="bg-background border-input resize-none"
                  data-ocid="contact.message_textarea"
                />
                {errors.message && (
                  <span
                    id="contact-message-error"
                    className="text-xs text-destructive"
                    role="alert"
                    data-ocid="contact.message.field_error"
                  >
                    {errors.message}
                  </span>
                )}
              </div>

              <Button
                type="submit"
                disabled={submitting}
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full font-semibold transition-all duration-200 mt-2"
                data-ocid="contact.submit_button"
              >
                {submitting ? (
                  <span data-ocid="contact.loading_state">Sending…</span>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </Layout>
  );
}
