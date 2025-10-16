import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [followersCount] = useState(247856);
  const [friendsCount] = useState(328);
  const [isFollowing, setIsFollowing] = useState(false);

  const friends = [
    { name: "Иван Тургенев", role: "Писатель", avatar: "IT" },
    { name: "Антон Чехов", role: "Драматург", avatar: "АЧ" },
    { name: "Фёдор Достоевский", role: "Романист", avatar: "ФД" },
    { name: "Афанасий Фет", role: "Поэт", avatar: "АФ" },
    { name: "Николай Некрасов", role: "Поэт-публицист", avatar: "НН" },
    { name: "Максим Горький", role: "Прозаик", avatar: "МГ" },
  ];

  const subscribers = [
    { name: "Махатма Ганди", location: "Индия", avatar: "МГ" },
    { name: "Ромен Роллан", location: "Франция", avatar: "РР" },
    { name: "Томас Манн", location: "Германия", avatar: "ТМ" },
    { name: "Бернард Шоу", location: "Великобритания", avatar: "БШ" },
    { name: "Рабиндранат Тагор", location: "Индия", avatar: "РТ" },
  ];

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

  const timeline = [
    { year: 1828, event: "Рождение в Ясной Поляне", icon: "Baby" },
    { year: 1844, event: "Поступление в Казанский университет", icon: "GraduationCap" },
    { year: 1851, event: "Начало военной службы на Кавказе", icon: "Shield" },
    { year: 1862, event: "Женитьба на Софье Андреевне Берс", icon: "Heart" },
    { year: 1869, event: "Публикация «Войны и мира»", icon: "BookOpen" },
    { year: 1877, event: "Публикация «Анны Карениной»", icon: "Book" },
    { year: 1880, event: "Духовный перелом, отказ от богатства", icon: "Sparkles" },
    { year: 1899, event: "Публикация «Воскресения»", icon: "BookMarked" },
    { year: 1910, event: "Уход из Ясной Поляны и смерть", icon: "MapPin" },
  ];

  const philosophy = [
    { 
      title: "Ненасилие", 
      description: "Толстой проповедовал абсолютное ненасилие и отказ от сопротивления злу силой. Эти идеи вдохновили Махатму Ганди.",
      icon: "Heart"
    },
    { 
      title: "Простая жизнь", 
      description: "Призывал к опрощению, отказу от роскоши и возвращению к земледельческому труду как основе жизни.",
      icon: "Leaf"
    },
    { 
      title: "Духовное самосовершенствование", 
      description: "Верил в необходимость постоянной работы над собой, нравственного роста и поиска истины.",
      icon: "Lightbulb"
    },
    { 
      title: "Всеобщая любовь", 
      description: "Проповедовал любовь ко всем людям независимо от их положения, национальности и вероисповедания.",
      icon: "Users"
    },
  ];

  const wallPosts = [
    {
      date: "15 октября 1910",
      time: "Вечер",
      text: "Закончил правку статьи о смысле жизни. Душа полна противоречий, но истина где-то рядом. Завтра поеду к сестре Марии.",
      likes: 1247,
      comments: 89,
      icon: "Feather"
    },
    {
      date: "3 сентября 1910",
      time: "Утро",
      text: "Работал в поле с крестьянами. Физический труд очищает разум и приближает к истинной жизни. Вечером читал письма от читателей со всего мира.",
      likes: 2156,
      comments: 134,
      icon: "Leaf"
    },
    {
      date: "12 июля 1910",
      time: "День",
      text: "Беседовал с молодым студентом о вере и смысле существования. Как важно передавать опыт новому поколению!",
      likes: 1893,
      comments: 67,
      icon: "MessageCircle"
    },
    {
      date: "28 мая 1910",
      time: "Вечер",
      text: "Сегодня завершил новую главу. Писательство — это не профессия, а потребность души говорить правду.",
      likes: 3421,
      comments: 201,
      icon: "BookOpen"
    },
  ];

  const upcomingEvents = [
    { date: "20 ноября", event: "Литературный вечер в Москве", icon: "Calendar" },
    { date: "5 декабря", event: "Встреча с крестьянами Ясной Поляны", icon: "Users" },
    { date: "15 декабря", event: "Публикация новой статьи", icon: "FileText" },
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
                
                <div className="flex gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Icon name="Users" size={20} className="text-[#8B4513]" />
                    <span className="text-lg text-[#2C1810]">
                      <strong>{friendsCount}</strong> друзей
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="UserPlus" size={20} className="text-[#8B4513]" />
                    <span className="text-lg text-[#2C1810]">
                      <strong>{followersCount.toLocaleString()}</strong> подписчиков
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setIsFollowing(!isFollowing)}
                  className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2 justify-center ${
                    isFollowing
                      ? 'bg-[#E8D5BC] text-[#2C1810] border-2 border-[#8B4513] hover:bg-[#D4C4A8]'
                      : 'bg-[#8B4513] text-[#FAF5EE] hover:bg-[#654321]'
                  }`}
                >
                  <Icon name={isFollowing ? "UserCheck" : "UserPlus"} size={20} />
                  {isFollowing ? 'Вы подписаны' : 'Подписаться'}
                </button>
                
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

        <Card className="bg-[#FAF5EE] border-2 border-[#8B4513] p-8 mb-12 shadow-lg">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-[#8B4513] rounded-full flex items-center justify-center">
              <Icon name="ScrollText" size={24} className="text-[#FAF5EE]" />
            </div>
            <h2 className="text-3xl font-bold text-[#2C1810]">Записи на стене</h2>
          </div>
          <div className="space-y-6">
            {wallPosts.map((post, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#F5E6D3] to-[#E8D5BC] p-6 rounded-lg border-l-4 border-[#8B4513] hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#8B4513] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#DAA520] transition-colors">
                    <Icon name={post.icon as any} size={24} className="text-[#FAF5EE] group-hover:text-[#2C1810] transition-colors" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge className="bg-[#DAA520] text-[#2C1810]">{post.date}</Badge>
                      <span className="text-sm text-[#5D4E37]">{post.time}</span>
                    </div>
                    <p className="text-lg text-[#2C1810] leading-relaxed">{post.text}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 pt-4 border-t border-[#8B4513]/20">
                  <button className="flex items-center gap-2 text-[#8B4513] hover:text-[#654321] transition-colors">
                    <Icon name="Heart" size={18} />
                    <span className="font-semibold">{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 text-[#8B4513] hover:text-[#654321] transition-colors">
                    <Icon name="MessageCircle" size={18} />
                    <span className="font-semibold">{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-2 text-[#8B4513] hover:text-[#654321] transition-colors ml-auto">
                    <Icon name="Share2" size={18} />
                    <span className="font-semibold">Поделиться</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <Card className="bg-[#FAF5EE] border-2 border-[#8B4513] p-8 shadow-lg h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-[#8B4513] rounded-full flex items-center justify-center">
                  <Icon name="Clock" size={24} className="text-[#FAF5EE]" />
                </div>
                <h2 className="text-3xl font-bold text-[#2C1810]">Хронология жизни</h2>
              </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#DAA520] via-[#8B4513] to-[#DAA520]"></div>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  onClick={() => setSelectedYear(selectedYear === item.year ? null : item.year)}
                  className={`relative pl-20 cursor-pointer group transition-all duration-300 ${
                    selectedYear === item.year ? 'scale-105' : ''
                  }`}
                >
                  <div className={`absolute left-0 w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
                    selectedYear === item.year 
                      ? 'bg-[#DAA520] border-[#8B4513] scale-110' 
                      : 'bg-[#FAF5EE] border-[#DAA520] group-hover:bg-[#DAA520]'
                  }`}>
                    <Icon 
                      name={item.icon as any} 
                      size={28} 
                      className={`transition-colors duration-300 ${
                        selectedYear === item.year ? 'text-[#2C1810]' : 'text-[#8B4513] group-hover:text-[#2C1810]'
                      }`}
                    />
                  </div>
                  <div className={`bg-gradient-to-br from-[#F5E6D3] to-[#E8D5BC] p-6 rounded-lg border-l-4 transition-all duration-300 ${
                    selectedYear === item.year 
                      ? 'border-[#8B4513] shadow-xl' 
                      : 'border-[#DAA520] shadow-md hover:shadow-lg'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-[#8B4513] text-[#FAF5EE] text-base px-3 py-1">
                        {item.year}
                      </Badge>
                      <Icon 
                        name={selectedYear === item.year ? "ChevronUp" : "ChevronDown"} 
                        size={20} 
                        className="text-[#8B4513]"
                      />
                    </div>
                    <p className={`text-lg font-semibold transition-all duration-300 ${
                      selectedYear === item.year ? 'text-[#2C1810] text-xl' : 'text-[#4A3C28]'
                    }`}>
                      {item.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
            </Card>
          </div>

          <Card className="bg-[#FAF5EE] border-2 border-[#8B4513] p-8 shadow-lg h-full">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-[#DAA520] rounded-full flex items-center justify-center">
                <Icon name="Calendar" size={24} className="text-[#2C1810]" />
              </div>
              <h2 className="text-3xl font-bold text-[#2C1810]">Календарь</h2>
            </div>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div 
                  key={index}
                  className="p-4 bg-gradient-to-r from-[#F5E6D3] to-[#E8D5BC] rounded-lg border-l-4 border-[#DAA520] hover:border-[#8B4513] hover:shadow-lg transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-[#DAA520] rounded-full flex items-center justify-center group-hover:bg-[#8B4513] transition-colors">
                      <Icon name={event.icon as any} size={20} className="text-[#2C1810] group-hover:text-[#FAF5EE] transition-colors" />
                    </div>
                    <Badge className="bg-[#8B4513] text-[#FAF5EE]">{event.date}</Badge>
                  </div>
                  <p className="text-[#2C1810] font-semibold leading-relaxed ml-13">{event.event}</p>
                </div>
              ))}
              <div className="pt-4 border-t border-[#8B4513]/20">
                <button className="w-full py-3 bg-[#8B4513] text-[#FAF5EE] rounded-lg hover:bg-[#654321] transition-colors font-semibold flex items-center justify-center gap-2">
                  <Icon name="Plus" size={20} />
                  Добавить событие
                </button>
              </div>
            </div>
          </Card>
        </div>

        <Card className="bg-[#FAF5EE] border-2 border-[#8B4513] p-8 mb-12 shadow-lg">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-[#DAA520] rounded-full flex items-center justify-center">
              <Icon name="Brain" size={24} className="text-[#2C1810]" />
            </div>
            <h2 className="text-3xl font-bold text-[#2C1810]">Философские взгляды</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {philosophy.map((item, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#F5E6D3] to-[#E8D5BC] p-6 rounded-lg border-2 border-[#DAA520] hover:border-[#8B4513] transition-all duration-300 hover:shadow-lg group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 bg-[#8B4513] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon name={item.icon as any} size={28} className="text-[#DAA520]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2C1810]">{item.title}</h3>
                </div>
                <p className="text-lg text-[#4A3C28] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Card>

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

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-[#FAF5EE] border-2 border-[#8B4513] p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#8B4513] rounded-full flex items-center justify-center">
                <Icon name="Users" size={24} className="text-[#FAF5EE]" />
              </div>
              <h2 className="text-3xl font-bold text-[#2C1810]">Друзья</h2>
              <Badge className="ml-auto bg-[#DAA520] text-[#2C1810]">{friends.length}</Badge>
            </div>
            <div className="space-y-4">
              {friends.map((friend, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#F5E6D3] to-[#E8D5BC] rounded-lg hover:shadow-md transition-all duration-300 cursor-pointer group"
                >
                  <div className="w-14 h-14 bg-[#8B4513] rounded-full flex items-center justify-center text-[#FAF5EE] font-bold text-lg group-hover:bg-[#DAA520] group-hover:text-[#2C1810] transition-all duration-300">
                    {friend.avatar}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#2C1810] group-hover:text-[#8B4513] transition-colors">{friend.name}</h3>
                    <p className="text-[#5D4E37] text-sm">{friend.role}</p>
                  </div>
                  <Icon name="ChevronRight" size={20} className="text-[#8B4513] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </Card>

          <Card className="bg-[#FAF5EE] border-2 border-[#8B4513] p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#DAA520] rounded-full flex items-center justify-center">
                <Icon name="UserPlus" size={24} className="text-[#2C1810]" />
              </div>
              <h2 className="text-3xl font-bold text-[#2C1810]">Подписчики</h2>
              <Badge className="ml-auto bg-[#8B4513] text-[#FAF5EE]">{followersCount.toLocaleString()}</Badge>
            </div>
            <div className="space-y-4">
              {subscribers.map((subscriber, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#F5E6D3] to-[#E8D5BC] rounded-lg hover:shadow-md transition-all duration-300 cursor-pointer group"
                >
                  <div className="w-14 h-14 bg-[#DAA520] rounded-full flex items-center justify-center text-[#2C1810] font-bold text-lg group-hover:bg-[#8B4513] group-hover:text-[#FAF5EE] transition-all duration-300">
                    {subscriber.avatar}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#2C1810] group-hover:text-[#8B4513] transition-colors">{subscriber.name}</h3>
                    <p className="text-[#5D4E37] text-sm flex items-center gap-1">
                      <Icon name="MapPin" size={14} />
                      {subscriber.location}
                    </p>
                  </div>
                  <Icon name="ChevronRight" size={20} className="text-[#8B4513] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
              <div className="text-center pt-4">
                <button className="text-[#8B4513] hover:text-[#654321] font-semibold flex items-center gap-2 mx-auto group">
                  Показать всех подписчиков
                  <Icon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </Card>
        </div>

        <Card className="bg-[#FAF5EE] border-2 border-[#8B4513] p-8 mb-12 shadow-lg">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-[#8B4513] rounded-full flex items-center justify-center">
              <Icon name="Mail" size={24} className="text-[#FAF5EE]" />
            </div>
            <h2 className="text-3xl font-bold text-[#2C1810]">Контакты</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-[#F5E6D3] to-[#E8D5BC] rounded-lg hover:shadow-md transition-all duration-300 group">
                <div className="w-12 h-12 bg-[#8B4513] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#DAA520] transition-colors">
                  <Icon name="MapPin" size={24} className="text-[#FAF5EE] group-hover:text-[#2C1810] transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2C1810] mb-1">Адрес</h3>
                  <p className="text-[#5D4E37] leading-relaxed">Ясная Поляна, Тульская губерния, Российская империя</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-[#F5E6D3] to-[#E8D5BC] rounded-lg hover:shadow-md transition-all duration-300 group cursor-pointer">
                <div className="w-12 h-12 bg-[#DAA520] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#8B4513] transition-colors">
                  <Icon name="Mail" size={24} className="text-[#2C1810] group-hover:text-[#FAF5EE] transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2C1810] mb-1">Почтовый адрес</h3>
                  <p className="text-[#5D4E37] leading-relaxed">Имение Ясная Поляна<br />Крапивенский уезд</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-[#F5E6D3] to-[#E8D5BC] rounded-lg hover:shadow-md transition-all duration-300 group">
                <div className="w-12 h-12 bg-[#8B4513] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#DAA520] transition-colors">
                  <Icon name="Users" size={24} className="text-[#FAF5EE] group-hover:text-[#2C1810] transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2C1810] mb-1">Семья</h3>
                  <p className="text-[#5D4E37] leading-relaxed">Софья Андреевна Толстая (супруга)<br />13 детей</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-[#F5E6D3] to-[#E8D5BC] rounded-lg hover:shadow-md transition-all duration-300 group cursor-pointer">
                <div className="w-12 h-12 bg-[#DAA520] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#8B4513] transition-colors">
                  <Icon name="BookOpen" size={24} className="text-[#2C1810] group-hover:text-[#FAF5EE] transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2C1810] mb-1">Издательство</h3>
                  <p className="text-[#5D4E37] leading-relaxed">«Посредник»<br />Народные издания</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-[#F5E6D3] to-[#E8D5BC] rounded-lg hover:shadow-md transition-all duration-300 group">
                <div className="w-12 h-12 bg-[#8B4513] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#DAA520] transition-colors">
                  <Icon name="School" size={24} className="text-[#FAF5EE] group-hover:text-[#2C1810] transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2C1810] mb-1">Школа в Ясной Поляне</h3>
                  <p className="text-[#5D4E37] leading-relaxed">Для крестьянских детей<br />Открыта в 1859 году</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-[#F5E6D3] to-[#E8D5BC] rounded-lg hover:shadow-md transition-all duration-300 group cursor-pointer">
                <div className="w-12 h-12 bg-[#DAA520] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#8B4513] transition-colors">
                  <Icon name="Globe" size={24} className="text-[#2C1810] group-hover:text-[#FAF5EE] transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2C1810] mb-1">Международные связи</h3>
                  <p className="text-[#5D4E37] leading-relaxed">Переписка с писателями и мыслителями по всему миру</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-[#8B4513] to-[#654321] rounded-lg text-center">
            <p className="text-[#FAF5EE] text-lg leading-relaxed italic">
              «Все приходите в Ясную Поляну. Двери всегда открыты для искренних душ.»
            </p>
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