import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const works = [
    { title: "Война и мир", year: "1869", genre: "Роман-эпопея" },
    { title: "Анна Каренина", year: "1877", genre: "Роман" },
    { title: "Воскресение", year: "1899", genre: "Роман" },
    { title: "Смерть Ивана Ильича", year: "1886", genre: "Повесть" },
  ];

  const quotes = [
    "Все счастливые семьи похожи друг на друга, каждая несчастливая семья несчастлива по-своему.",
    "Величайшие истины — самые простые.",
    "Человек есть дробь. Числитель — это сравнительно с другими — достоинства человека; знаменатель — это оценка человеком самого себя.",
  ];

  const photos = [
    "https://cdn.poehali.dev/projects/c99c776c-5c49-4da0-89ac-d66cd1bdfeee/files/3449db66-ec36-451a-b7ef-bea306dbc512.jpg",
    "https://cdn.poehali.dev/projects/c99c776c-5c49-4da0-89ac-d66cd1bdfeee/files/3449db66-ec36-451a-b7ef-bea306dbc512.jpg",
    "https://cdn.poehali.dev/projects/c99c776c-5c49-4da0-89ac-d66cd1bdfeee/files/3449db66-ec36-451a-b7ef-bea306dbc512.jpg",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5E6D3] via-[#E8D5BC] to-[#D4C4A8]">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="relative mb-16">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0wIDQwTDQwIDBNNDAgNDBMMCAwIiBzdHJva2U9IiM4QjQ1MTMiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3N2Zz4=')] opacity-20"></div>
          
          <Card className="relative bg-[#FAF5EE] border-4 border-[#8B4513] shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#8B4513] via-[#DAA520] to-[#8B4513]"></div>
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#8B4513] via-[#DAA520] to-[#8B4513]"></div>
            
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-widest text-[#8B4513] font-light">Цвета палетт</p>
                  <h1 className="text-6xl md:text-7xl font-bold text-[#2C1810] leading-tight">
                    Великий<br />Лев Толстой
                  </h1>
                  <p className="text-2xl text-[#5D4E37] font-light italic">Великий русский писатель</p>
                </div>
                
                <div className="space-y-3 text-lg text-[#4A3C28] leading-relaxed">
                  <p>28 августа 1828 — 20 ноября 1910</p>
                  <p className="font-light">Граф, прозаик, мыслитель, просветитель</p>
                </div>
                
                <div className="flex gap-3 flex-wrap">
                  <Badge className="bg-[#8B4513] text-[#FAF5EE] hover:bg-[#654321] px-4 py-2 text-base">
                    <Icon name="BookOpen" size={16} className="mr-2" />
                    90 томов
                  </Badge>
                  <Badge className="bg-[#DAA520] text-[#2C1810] hover:bg-[#B8860B] px-4 py-2 text-base">
                    <Icon name="Award" size={16} className="mr-2" />
                    Классик
                  </Badge>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#DAA520] to-[#8B4513] rounded-full blur-2xl opacity-30"></div>
                  <div className="relative border-8 border-[#DAA520] rounded-full p-2 bg-[#FAF5EE] shadow-xl">
                    <img 
                      src="https://cdn.poehali.dev/projects/c99c776c-5c49-4da0-89ac-d66cd1bdfeee/files/3449db66-ec36-451a-b7ef-bea306dbc512.jpg"
                      alt="Лев Николаевич Толстой"
                      className="w-72 h-72 object-cover rounded-full"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#8B4513] rounded-full flex items-center justify-center border-4 border-[#FAF5EE]">
                    <Icon name="Feather" size={40} className="text-[#DAA520]" />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-[#FAF5EE] border-2 border-[#8B4513] p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#8B4513] rounded-full flex items-center justify-center">
                <Icon name="User" size={24} className="text-[#FAF5EE]" />
              </div>
              <h2 className="text-3xl font-bold text-[#2C1810]">Биография</h2>
            </div>
            <div className="space-y-4 text-lg text-[#4A3C28] leading-relaxed">
              <p>Родился в аристократической семье в Ясной Поляне. Рано потерял родителей, воспитывался родственниками.</p>
              <p>Участвовал в Крымской войне. Эти события легли в основу «Севастопольских рассказов».</p>
              <p>Создал школу для крестьянских детей в Ясной Поляне, разработал собственную педагогическую систему.</p>
              <p>В последние годы жизни пережил духовный кризис, отказался от авторских прав на поздние произведения.</p>
            </div>
          </Card>

          <Card className="bg-[#FAF5EE] border-2 border-[#8B4513] p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#DAA520] rounded-full flex items-center justify-center">
                <Icon name="Heart" size={24} className="text-[#2C1810]" />
              </div>
              <h2 className="text-3xl font-bold text-[#2C1810]">Наследие</h2>
            </div>
            <div className="space-y-4 text-lg text-[#4A3C28] leading-relaxed">
              <p>Толстой считается одним из величайших писателей мира. Его произведения переведены на все основные языки.</p>
              <p>Философские взгляды Толстого оказали влияние на Махатму Ганди, Мартина Лютера Кинга и других мыслителей.</p>
              <p>Ясная Поляна превращена в музей-усадьбу, где сохраняется память о великом писателе.</p>
              <p>Его произведения входят в обязательную школьную программу по всему миру.</p>
            </div>
          </Card>
        </div>

        <Card className="bg-[#FAF5EE] border-2 border-[#8B4513] p-8 mb-12 shadow-lg">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-[#8B4513] rounded-full flex items-center justify-center">
              <Icon name="BookOpen" size={24} className="text-[#FAF5EE]" />
            </div>
            <h2 className="text-3xl font-bold text-[#2C1810]">Произведения</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {works.map((work, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#F5E6D3] to-[#E8D5BC] p-6 rounded-lg border-l-4 border-[#DAA520] hover:border-[#8B4513] transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-[#2C1810] flex-1">{work.title}</h3>
                  <Badge className="bg-[#8B4513] text-[#FAF5EE] ml-2">{work.year}</Badge>
                </div>
                <p className="text-[#5D4E37] italic text-lg">{work.genre}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="bg-[#FAF5EE] border-2 border-[#8B4513] p-8 mb-12 shadow-lg">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-[#DAA520] rounded-full flex items-center justify-center">
              <Icon name="Quote" size={24} className="text-[#2C1810]" />
            </div>
            <h2 className="text-3xl font-bold text-[#2C1810]">Цитаты</h2>
          </div>
          <div className="space-y-6">
            {quotes.map((quote, index) => (
              <div 
                key={index}
                className="relative pl-8 py-4 border-l-4 border-[#DAA520] hover:border-[#8B4513] transition-all duration-300"
              >
                <Icon name="Quote" size={32} className="absolute left-2 top-3 text-[#DAA520] opacity-50" />
                <p className="text-xl text-[#2C1810] leading-relaxed italic">{quote}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="bg-[#FAF5EE] border-2 border-[#8B4513] p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-[#8B4513] rounded-full flex items-center justify-center">
              <Icon name="Camera" size={24} className="text-[#FAF5EE]" />
            </div>
            <h2 className="text-3xl font-bold text-[#2C1810]">Фотографии</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <div 
                key={index}
                className="relative group overflow-hidden rounded-lg border-4 border-[#DAA520] hover:border-[#8B4513] transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                <img 
                  src={photo}
                  alt={`Фотография ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <p className="text-[#FAF5EE] font-light text-lg">Историческая фотография</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <footer className="mt-12 text-center py-6 border-t-2 border-[#8B4513]/30">
          <p className="text-[#5D4E37] text-lg">
            «Чтобы жить честно, надо рваться, путаться, биться, ошибаться...»
          </p>
          <p className="text-[#8B4513] mt-2 font-light">— Лев Николаевич Толстой</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
