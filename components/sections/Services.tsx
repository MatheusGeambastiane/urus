"use client"

import { useState } from "react"
import { Scissors, Palette, BeakerIcon as Beard, Sparkles, Droplets, Ruler, Package, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
export default function Services() {
  const [activeTab, setActiveTab] = useState("services")

  const regularServices = [
    {
      title: "Corte de Cabelo",
      description: "Cortes modernos e clássicos realizados com técnicas precisas.",
      price: 25,
      icon: <Scissors className="w-8 h-8" />,
    },
    {
      title: "Barba",
      description: "Modelagem e acabamento perfeito para sua barba.",
      price: 15,
      icon: <Beard className="w-8 h-8" />,
    },
    {
      title: "Pé de Cabelo",
      description: "Acabamento na nuca e laterais para manter o visual por mais tempo.",
      price: 10,
      icon: <Ruler className="w-8 h-8" />,
    },
    {
      title: "Pigmentação",
      description: "Técnica que disfarça falhas e dá mais volume à barba ou cabelo.",
      price: 15,
      icon: <Palette className="w-8 h-8" />,
    },
    {
      title: "Progressiva",
      description: "Alisamento que proporciona cabelos lisos e bem cuidados.",
      price: 100,
      icon: <Sparkles className="w-8 h-8" />,
    },
    {
      title: "Luzes",
      description: "Mechas que dão dimensão e movimento ao seu cabelo.",
      price: 70,
      icon: <Droplets className="w-8 h-8" />,
    },
    {
      title: "Descolorização",
      description: "Processo para clarear os fios e preparar para coloração.",
      price: 70,
      icon: <Zap className="w-8 h-8" />,
    },
  ]

  const comboServices = [
    {
      title: "Cabelo + Barba",
      description: "Combo completo para renovar seu visual.",
      originalPrice: 40,
      price: 35,
      savings: 5,
      icon: <Package className="w-8 h-8" />,
    },
    {
      title: "Cabelo + Pigmentação",
      description: "Corte perfeito com acabamento que disfarça falhas.",
      originalPrice: 40,
      price: 35,
      savings: 5,
      icon: <Package className="w-8 h-8" />,
    },
    {
      title: "Luzes + Corte",
      description: "Transformação completa com mechas e corte moderno.",
      originalPrice: 95,
      price: 90,
      savings: 5,
      icon: <Package className="w-8 h-8" />,
    },
  ]

  return (
    <section id="servicos" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Nossos Serviços</h2>

        <div className="flex justify-center mb-10">
          <Tabs defaultValue="services" className="w-full max-w-4xl">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger
                value="services"
                className="text-lg py-3 font-medium"
                onClick={() => setActiveTab("services")}
              >
                Serviços Individuais
              </TabsTrigger>
              <TabsTrigger value="combos" className="text-lg py-3 font-medium" onClick={() => setActiveTab("combos")}>
                Combos Promocionais
              </TabsTrigger>
            </TabsList>

            <TabsContent value="services">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularServices.map((service, index) => (
                  <Card
                    key={index}
                    className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:shadow-xl transition overflow-hidden h-full"
                  >
                    <CardContent className="p-6 flex flex-col items-center text-center h-full">
                      <div className="mb-4 text-blue-400 bg-blue-900/20 p-3 rounded-full">{service.icon}</div>
                      <h3 className="text-xl mb-2 text-white font-semibold">{service.title}</h3>
                      <p className="text-ddcece mb-4 flex-grow">{service.description}</p>
                      <div className="mt-auto">
                        <Badge className="bg-blue-600 hover:bg-blue-700 text-white text-lg py-1.5 px-4">
                          R$ {service.price.toFixed(2).replace(".", ",")}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="combos">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {comboServices.map((combo, index) => (
                  <Card
                    key={index}
                    className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:shadow-xl transition overflow-hidden h-full relative"
                  >
                    <div className="absolute top-0 right-0 bg-green-600 text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
                      Economize R$ {combo.savings.toFixed(2).replace(".", ",")}
                    </div>
                    <CardContent className="p-6 pt-10 flex flex-col items-center text-center h-full">
                      <div className="mb-4 text-amber-500 bg-amber-900/20 p-3 rounded-full">{combo.icon}</div>
                      <h3 className="text-xl mb-2 text-white font-semibold">{combo.title}</h3>
                      <p className="text-ddcece mb-4 flex-grow">{combo.description}</p>
                      <div className="mt-auto flex flex-col items-center">
                        <span className="text-gray-400 line-through text-sm mb-1">
                          R$ {combo.originalPrice.toFixed(2).replace(".", ",")}
                        </span>
                        <Badge className="bg-blue-600 hover:bg-blue-700 text-white text-lg py-1.5 px-4">
                          R$ {combo.price.toFixed(2).replace(".", ",")}
                        </Badge>
                        <Badge/>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="text-center mt-12 max-w-2xl mx-auto">
          <div className="bg-blue-900/20 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-blue-300">Por que escolher nossos serviços?</h3>
            <p className="text-ddcece">
              Todos os serviços incluem finalização com produtos de alta qualidade e são realizados por profissionais
              experientes. Nossos combos foram criados para oferecer a melhor relação custo-benefício, garantindo
              economia sem abrir mão da qualidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
