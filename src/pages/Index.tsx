import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [generatedText, setGeneratedText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setGeneratedText('Это пример сгенерированного текста. В реальном приложении здесь будет результат работы AI-модели, которая создаст уникальный контент по вашему запросу с учётом всех ключевых слов и параметров.');
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-cyan-50">
      <nav className="glassmorphism sticky top-0 z-50 border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <Icon name="Sparkles" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent">
                Klukva AI
              </span>
            </div>
            <div className="hidden md:flex gap-6">
              {[
                { id: 'home', label: 'Главная', icon: 'Home' },
                { id: 'generator', label: 'Генератор', icon: 'Wand2' },
                { id: 'pricing', label: 'Тарифы', icon: 'CreditCard' },
                { id: 'rewrite', label: 'Пересказ', icon: 'FileEdit' },
                { id: 'translate', label: 'Перевод', icon: 'Languages' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-white/50'
                  }`}
                >
                  <Icon name={item.icon as any} size={18} />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12">
        {activeSection === 'home' && (
          <div className="animate-fade-in">
            <div className="text-center mb-16">
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Klukva AI
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Создавайте уникальный контент за секунды с помощью искусственного интеллекта
              </p>
              <Button
                onClick={() => setActiveSection('generator')}
                size="lg"
                className="mt-8 gradient-primary text-white border-0 shadow-xl hover:shadow-2xl transition-all text-lg px-8 py-6"
              >
                <Icon name="Sparkles" size={20} className="mr-2" />
                Начать создавать
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {[
                {
                  icon: 'Wand2',
                  title: 'Генерация текста',
                  description: 'Создавайте статьи, посты и блоги по ключевым словам',
                  gradient: 'from-violet-500 to-purple-500',
                },
                {
                  icon: 'FileEdit',
                  title: 'Пересказ контента',
                  description: 'Перефразируйте тексты, сохраняя смысл и улучшая стиль',
                  gradient: 'from-purple-500 to-pink-500',
                },
                {
                  icon: 'Languages',
                  title: 'Перевод текстов',
                  description: 'Переводите контент на разные языки с высоким качеством',
                  gradient: 'from-cyan-500 to-blue-500',
                },
              ].map((feature, idx) => (
                <Card
                  key={idx}
                  className="border-0 shadow-lg hover:shadow-2xl transition-all animate-scale-in glassmorphism"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4`}>
                      <Icon name={feature.icon as any} className="text-white" size={24} />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-4 gap-4 text-center">
              {[
                { value: '50K+', label: 'Пользователей' },
                { value: '1M+', label: 'Текстов создано' },
                { value: '99.9%', label: 'Уникальность' },
                { value: '24/7', label: 'Доступность' },
              ].map((stat, idx) => (
                <div key={idx} className="p-6 rounded-2xl glassmorphism">
                  <div className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'generator' && (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Генератор контента
            </h2>
            <Tabs defaultValue="article" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8 p-1 bg-white/70 rounded-xl">
                <TabsTrigger value="article" className="rounded-lg data-[state=active]:gradient-primary data-[state=active]:text-white">
                  <Icon name="FileText" size={18} className="mr-2" />
                  Статья
                </TabsTrigger>
                <TabsTrigger value="post" className="rounded-lg data-[state=active]:gradient-primary data-[state=active]:text-white">
                  <Icon name="MessageSquare" size={18} className="mr-2" />
                  Пост
                </TabsTrigger>
                <TabsTrigger value="blog" className="rounded-lg data-[state=active]:gradient-primary data-[state=active]:text-white">
                  <Icon name="BookOpen" size={18} className="mr-2" />
                  Блог
                </TabsTrigger>
              </TabsList>

              {['article', 'post', 'blog'].map((type) => (
                <TabsContent key={type} value={type}>
                  <Card className="border-0 shadow-xl glassmorphism">
                    <CardHeader>
                      <CardTitle>Создать {type === 'article' ? 'статью' : type === 'post' ? 'пост' : 'блог'}</CardTitle>
                      <CardDescription>Введите ключевые слова и параметры для генерации</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Ключевые слова</label>
                        <Input
                          placeholder="Например: искусственный интеллект, нейросети, будущее"
                          className="border-purple-200 focus:border-purple-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Тема или заголовок</label>
                        <Input
                          placeholder="Введите тему или заголовок текста"
                          className="border-purple-200 focus:border-purple-500"
                        />
                      </div>
                      <div className="flex gap-4">
                        <div className="flex-1">
                          <label className="block text-sm font-medium mb-2">Объём слов</label>
                          <Input type="number" placeholder="500" className="border-purple-200 focus:border-purple-500" />
                        </div>
                        <div className="flex-1">
                          <label className="block text-sm font-medium mb-2">Тон текста</label>
                          <Input placeholder="Профессиональный" className="border-purple-200 focus:border-purple-500" />
                        </div>
                      </div>
                      <Button
                        onClick={handleGenerate}
                        disabled={isGenerating}
                        className="w-full gradient-primary text-white border-0 shadow-lg hover:shadow-xl transition-all text-lg py-6"
                      >
                        {isGenerating ? (
                          <>
                            <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                            Генерирую...
                          </>
                        ) : (
                          <>
                            <Icon name="Sparkles" size={20} className="mr-2" />
                            Сгенерировать текст
                          </>
                        )}
                      </Button>
                      {generatedText && (
                        <div className="mt-6 p-6 rounded-xl bg-gradient-to-br from-violet-50 to-purple-50 border-2 border-purple-200 animate-scale-in">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="font-semibold text-lg">Результат</h3>
                            <Button variant="outline" size="sm">
                              <Icon name="Copy" size={16} className="mr-2" />
                              Копировать
                            </Button>
                          </div>
                          <p className="text-gray-700 leading-relaxed">{generatedText}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        )}

        {activeSection === 'pricing' && (
          <div className="max-w-6xl mx-auto animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent">
                Выберите тариф
              </h2>
              <p className="text-xl text-gray-600">Подберите план, который подходит именно вам</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Starter',
                  price: '₽990',
                  period: 'месяц',
                  features: ['10,000 слов/месяц', 'Все типы контента', 'Базовая поддержка', 'История генераций'],
                  gradient: 'from-violet-500 to-purple-500',
                  popular: false,
                },
                {
                  name: 'Pro',
                  price: '₽2,490',
                  period: 'месяц',
                  features: [
                    '50,000 слов/месяц',
                    'Все типы контента',
                    'Приоритетная поддержка',
                    'История генераций',
                    'API доступ',
                    'Командная работа',
                  ],
                  gradient: 'from-purple-500 to-pink-500',
                  popular: true,
                },
                {
                  name: 'Enterprise',
                  price: '₽4,990',
                  period: 'месяц',
                  features: [
                    'Безлимитные генерации',
                    'Все типы контента',
                    'VIP поддержка 24/7',
                    'История генераций',
                    'API доступ',
                    'Командная работа',
                    'Кастомные модели',
                  ],
                  gradient: 'from-cyan-500 to-blue-500',
                  popular: false,
                },
              ].map((plan, idx) => (
                <Card
                  key={idx}
                  className={`border-0 shadow-lg hover:shadow-2xl transition-all animate-scale-in relative ${
                    plan.popular ? 'ring-4 ring-purple-500' : ''
                  }`}
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-accent text-white border-0 px-4 py-1">
                      Популярный
                    </Badge>
                  )}
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-4`}>
                      <Icon name="Zap" className="text-white" size={24} />
                    </div>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-5xl font-bold bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent">
                        {plan.price}
                      </span>
                      <span className="text-gray-500 ml-2">/ {plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Icon name="Check" size={18} className="text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${
                        plan.popular ? 'gradient-primary text-white' : 'bg-white border-2 border-purple-200 text-purple-600'
                      } hover:shadow-lg transition-all`}
                    >
                      Выбрать план
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'rewrite' && (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Пересказ текста
            </h2>
            <Card className="border-0 shadow-xl glassmorphism">
              <CardHeader>
                <CardTitle>Перефразировать текст</CardTitle>
                <CardDescription>Введите текст, который нужно переписать</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Исходный текст</label>
                  <Textarea
                    placeholder="Вставьте текст, который нужно переписать..."
                    className="min-h-[200px] border-purple-200 focus:border-purple-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Степень изменения</label>
                    <Input placeholder="Средняя" className="border-purple-200 focus:border-purple-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Стиль текста</label>
                    <Input placeholder="Сохранить оригинальный" className="border-purple-200 focus:border-purple-500" />
                  </div>
                </div>
                <Button className="w-full gradient-secondary text-white border-0 shadow-lg hover:shadow-xl transition-all text-lg py-6">
                  <Icon name="RefreshCw" size={20} className="mr-2" />
                  Пересказать текст
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'translate' && (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Перевод текста
            </h2>
            <Card className="border-0 shadow-xl glassmorphism">
              <CardHeader>
                <CardTitle>Перевести контент</CardTitle>
                <CardDescription>Переведите текст на другой язык с сохранением смысла</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">С языка</label>
                    <Input placeholder="Русский" className="border-cyan-200 focus:border-cyan-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">На язык</label>
                    <Input placeholder="Английский" className="border-cyan-200 focus:border-cyan-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Текст для перевода</label>
                  <Textarea
                    placeholder="Введите текст для перевода..."
                    className="min-h-[200px] border-cyan-200 focus:border-cyan-500"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0 shadow-lg hover:shadow-xl transition-all text-lg py-6">
                  <Icon name="Languages" size={20} className="mr-2" />
                  Перевести текст
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <footer className="mt-20 py-12 glassmorphism border-t">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                  <Icon name="Sparkles" className="text-white" size={18} />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent">
                  Klukva AI
                </span>
              </div>
              <p className="text-gray-600 text-sm">Создавайте уникальный контент с помощью искусственного интеллекта</p>
            </div>
            {[
              {
                title: 'Продукт',
                links: ['Генератор', 'Пересказ', 'Перевод', 'API'],
              },
              {
                title: 'Компания',
                links: ['О нас', 'Блог', 'Карьера', 'Контакты'],
              },
              {
                title: 'Поддержка',
                links: ['Помощь', 'Документация', 'FAQ', 'Статус'],
              },
            ].map((section, idx) => (
              <div key={idx}>
                <h3 className="font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600 text-sm">
            © 2024 Klukva AI. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}