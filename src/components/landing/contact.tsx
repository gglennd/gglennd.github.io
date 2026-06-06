"use client";

import { RiGithubFill, RiLinkedinFill, RiMailLine, RiSendPlaneFill } from "@remixicon/react";
import { useState } from "react";

import { AnimatedGroup } from "@/components/motions/animated-group";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const subjectOptions = [
  { value: "job", label: "Job Opportunity" },
  { value: "freelance", label: "Freelance Project" },
  { value: "collaboration", label: "Collaboration" },
  { value: "inquiry", label: "General Inquiry" },
  { value: "other", label: "Other" },
] as const;

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name || formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email || !formData.email.includes("@")) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject) {
      newErrors.subject = "Please select a subject";
    }

    if (!formData.message || formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm())
      return;

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after successful submission
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, name: e.target.value }));
    if (errors.name) {
      setErrors(prev => ({ ...prev, name: undefined }));
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, email: e.target.value }));
    if (errors.email) {
      setErrors(prev => ({ ...prev, email: undefined }));
    }
  };

  const handleSubjectChange = (value: string) => {
    setFormData(prev => ({ ...prev, subject: value }));
    if (errors.subject) {
      setErrors(prev => ({ ...prev, subject: undefined }));
    }
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, message: e.target.value }));
    if (errors.message) {
      setErrors(prev => ({ ...prev, message: undefined }));
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4 bg-muted/30 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.03] dark:opacity-[0.02] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-64 h-64 blob-primary opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 blob-accent opacity-20 blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <AnimatedGroup preset="slide">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Get In Touch</h2>
        </AnimatedGroup>
        <AnimatedGroup preset="fade">
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </AnimatedGroup>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact Info */}
          <AnimatedGroup preset="slide" className="md:col-span-2 space-y-6">
            <div>
              <h3 className="font-semibold mb-2 text-lg">Let's Connect</h3>
              <p className="text-sm text-muted-foreground">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:hello@example.com"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <RiMailLine size={16} className="text-primary" />
                </div>
                hello@example.com
              </a>

              <div className="flex gap-2">
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <RiGithubFill size={16} />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <RiLinkedinFill size={16} />
                  </a>
                </Button>
              </div>
            </div>

            <p className="text-xs text-muted-foreground">
              Typically responds within 24-48 hours
            </p>
          </AnimatedGroup>

          {/* Contact Form */}
          <AnimatedGroup preset="slide" className="md:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              {isSubmitted
                ? (
                    <div className="p-4 rounded-lg bg-green-500/10 text-green-500 text-sm text-center">
                      Thank you for your message! I'll get back to you soon.
                    </div>
                  )
                : (
                    <>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <Field>
                          <FieldLabel>Name</FieldLabel>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleNameChange}
                            placeholder="Your name"
                            aria-invalid={!!errors.name}
                          />
                          <FieldError errors={errors.name ? [{ message: errors.name }] : []} />
                        </Field>

                        <Field>
                          <FieldLabel>Email</FieldLabel>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleEmailChange}
                            placeholder="your@email.com"
                            aria-invalid={!!errors.email}
                          />
                          <FieldError errors={errors.email ? [{ message: errors.email }] : []} />
                        </Field>
                      </div>

                      <Field>
                        <FieldLabel>Subject</FieldLabel>
                        <Select value={formData.subject} onValueChange={handleSubjectChange}>
                          <SelectTrigger id="subject" aria-invalid={!!errors.subject}>
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent>
                            {subjectOptions.map(option => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FieldError errors={errors.subject ? [{ message: errors.subject }] : []} />
                      </Field>

                      <Field>
                        <FieldLabel>Message</FieldLabel>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleMessageChange}
                          placeholder="Tell me about your project..."
                          rows={5}
                          aria-invalid={!!errors.message}
                        />
                        <FieldError errors={errors.message ? [{ message: errors.message }] : []} />
                      </Field>

                      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                        {isSubmitting
                          ? <>Sending...</>
                          : (
                              <>
                                <RiSendPlaneFill size={20} className="mr-2" />
                                Send Message
                              </>
                            )}
                      </Button>
                    </>
                  )}
            </form>
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
}
