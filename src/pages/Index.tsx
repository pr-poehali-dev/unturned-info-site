import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="https://cdn.poehali.dev/files/a5e5cf62-6cd6-48e4-a321-87d5b67926a2.jpeg" 
              alt="Unturned Server Logo" 
              className="w-32 h-32 mx-auto rounded-full border-4 border-primary shadow-2xl shadow-primary/20 object-cover"
            />
          </div>
          
          {/* Title */}
          <h1 className="text-6xl font-black mb-4 text-foreground tracking-tight">
            UNTURNED SERVER
          </h1>
          <h2 className="text-2xl font-semibold mb-6 text-secondary">
            Survival PvP Server
          </h2>
          
          {/* Status Badge */}
          <div className="mb-8">
            <Badge variant="secondary" className="px-4 py-2 text-lg bg-green-500/20 text-green-400 border-green-500/50">
              <Icon name="Circle" size={8} className="mr-2 fill-green-400" />
              ОНЛАЙН • 24/7
            </Badge>
          </div>
          
          {/* Main Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-wide">
              <Icon name="Play" size={20} className="mr-2" />
              ПОДКЛЮЧИТЬСЯ
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-secondary text-secondary hover:bg-secondary/10">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              DISCORD
            </Button>
          </div>
        </div>
      </section>

      {/* Server Info Cards */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Connection Info */}
            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="text-center">
                  <Icon name="Server" size={40} className="mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">Подключение</h3>
                  <div className="text-muted-foreground mb-3">
                    <p className="font-mono text-lg">127.0.0.1:27015</p>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    <Icon name="Copy" size={16} className="mr-2" />
                    Скопировать IP
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Players Online */}
            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="text-center">
                  <Icon name="Users" size={40} className="mx-auto mb-4 text-secondary" />
                  <h3 className="text-xl font-bold mb-2">Игроки онлайн</h3>
                  <div className="text-3xl font-bold text-secondary mb-2">
                    42/100
                  </div>
                  <p className="text-muted-foreground text-sm">Средняя активность</p>
                </div>
              </CardContent>
            </Card>

            {/* Server Type */}
            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="text-center">
                  <Icon name="Zap" size={40} className="mx-auto mb-4 text-accent" />
                  <h3 className="text-xl font-bold mb-2">Режим игры</h3>
                  <Badge variant="secondary" className="mb-2">PvP</Badge>
                  <p className="text-muted-foreground text-sm">Survival режим</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* About Server */}
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">О сервере</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-primary">Особенности сервера:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="mr-2 text-green-400" />
                      Кастомные предметы и оружие
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="mr-2 text-green-400" />
                      Система рангов и достижений
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="mr-2 text-green-400" />
                      Еженедельные ивенты
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="mr-2 text-green-400" />
                      Активная администрация
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-secondary">Информация:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <Icon name="MapPin" size={16} className="mr-2 text-muted-foreground" />
                      Карта: Russia
                    </li>
                    <li className="flex items-center">
                      <Icon name="Clock" size={16} className="mr-2 text-muted-foreground" />
                      Аптайм: 99.9%
                    </li>
                    <li className="flex items-center">
                      <Icon name="Shield" size={16} className="mr-2 text-muted-foreground" />
                      Анти-чит: включен
                    </li>
                    <li className="flex items-center">
                      <Icon name="Wifi" size={16} className="mr-2 text-muted-foreground" />
                      Регион: EU
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                  <Icon name="ExternalLink" size={20} className="mr-2" />
                  Присоединиться к Discord
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Unturned Server. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;