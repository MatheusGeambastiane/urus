import Image from "next/image"

const barbers = [
  { name: "Gustavo", role: "Barbeiro Profissional", image: "/gustavo_barbeiro_urus_barbearia_salvador.jpg", imageClassName: "object-cover" },
  { name: "Henrique", role: "Barbeiro Profissional", image: "/henrique_barbeiro_resizephoto.jpeg", imageClassName: "object-contain" },
  { name: "Janice", role: "Massoterapeuta", image: "/janice_gonçalves_massoterapeuta_urus_barbearia_salvador.jpg", imageClassName: "object-cover" },
]

export default function Team() {
  return (
    <section id="equipe" className="py-20 bg-[#EBEBEB]">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold mb-10 text-center text-gray-900">Nossa Equipe</h3>

        <div className="flex flex-wrap justify-center gap-8">
          {barbers.map((barber) => (
            <div key={barber.name} className="flex flex-col items-center gap-3">
              <div className="relative h-72 w-72 overflow-hidden rounded-full bg-gray-200">
                <Image src={barber.image} alt={barber.name} fill className={barber.imageClassName} />
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold text-gray-900">{barber.name}</p>
                <p className="text-sm text-gray-600">{barber.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
