"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwvdggaz";

const ContactForm = () => {
  const [fields, setFields] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const set = (key) => (e) => setFields((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(fields),
      });
      if (res.ok) {
        setStatus("success");
        setFields({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-3xl bg-muted p-8 text-center space-y-3 shadow-sm">
        <div className="text-3xl">✓</div>
        <h2 className="text-lg font-semibold">Message sent</h2>
        <p className="text-sm text-muted-foreground max-w-sm mx-auto">
          Thanks for reaching out. We'll get back to you within 24–48 hours.
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setStatus("idle")}
          className="mt-2 rounded-full border-0 bg-card shadow-sm cursor-pointer"
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            value={fields.name}
            onChange={set("name")}
            placeholder="Your name"
            className="w-full rounded-2xl bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-1"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            value={fields.email}
            onChange={set("email")}
            placeholder="you@example.com"
            className="w-full rounded-2xl bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-1"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={fields.message}
          onChange={set("message")}
          placeholder="Describe your question, bug, or tool suggestion…"
          className="w-full resize-none rounded-2xl bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-1"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-500">
          Something went wrong. Please try again or email us directly at{" "}
          <a href="mailto:support@toolzmint.com" className="underline">
            support@toolzmint.com
          </a>
          .
        </p>
      )}

      <div className="flex justify-end">
        <Button
          type="submit"
          disabled={status === "loading"}
          className="rounded-full shadow-sm cursor-pointer transition-all hover:shadow-md active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed px-6"
        >
          {status === "loading" ? "Sending…" : "Send message"}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
