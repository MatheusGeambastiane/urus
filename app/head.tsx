export default function Head() {
    return (
      <>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HairSalon",
              name: "URUS Barbearia",
              image: "https://urusbarbearia.com.br/barbearia_fachada.jpg",
              url: "https://urusbarbearia.com.br",
              telephone: "+557192109189",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Rua Rio de São Pedro, 26",
                addressLocality: "Salvador",
                addressRegion: "BA",
                postalCode: "40445-000",
                addressCountry: "BR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -12.940947800000002,
                longitude: -38.5005144,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "16:00",
                },
              ],
              priceRange: "$$",
            }),
          }}
        />
      </>
    )
  }
  
  