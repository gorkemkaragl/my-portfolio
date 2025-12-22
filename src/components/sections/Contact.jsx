"use client";

import { useState } from "react";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { toast } from "sonner";

const Contact = ({ dict }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.warning("Lütfen tüm alanları doldurun");
      return;
    }
    setLoading(true);

    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error);
      }

      toast.success("Mesaj başarıyla gönderildi 🎉");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error("Mail gönderilemedi ❌");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="gradient-text">{dict.contact.title}</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6 animate-slide-in">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl mb-2">
                  {dict.contact.contactMe}
                </CardTitle>
                <CardDescription className="text-base">
                  {dict.contact.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>gorkemkaragol0@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+90 541 273 80 22</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>İstanbul, Türkiye</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-border animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl">
                {dict.contact.messageMe}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <Input
                    placeholder={dict.contact.name}
                    className="bg-background"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder={dict.contact.email}
                    className="bg-background"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                </div>

                <div>
                  <Textarea
                    placeholder={dict.contact.yourMessage}
                    className="min-h-40 bg-background"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                  />
                </div>

                <Button
                  className="w-full hover-glow"
                  size="lg"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Gönderiliyor..." : dict.contact.sendButton}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
