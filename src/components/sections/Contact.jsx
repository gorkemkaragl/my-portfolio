import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="gradient-text">İletişim</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6 animate-slide-in">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl mb-2">Benimle İletişime Geçin</CardTitle>
                <CardDescription className="text-base">
                  Projeleriniz için benimle çalışmak ister misiniz? Hemen iletişime geçin!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>gorkemkaragol0@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+90 555 123 4567</span>
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
              <CardTitle className="text-2xl">Mesaj Gönderin</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Input 
                    placeholder="Adınız" 
                    className="bg-background"
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="E-posta Adresiniz" 
                    className="bg-background"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Mesajınız" 
                    className="min-h-[150px] bg-background"
                  />
                </div>
                <Button className="w-full hover-glow" size="lg">
                  Gönder
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Contact