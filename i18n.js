// Multilingual Support System
const translations = {
    en: {
        // Header
        title: 'Computer Engineering Student & Software Developer',
        emailLabel: 'Email:',
        githubLabel: 'GitHub:',
        locationLabel: 'Location:',
        bornLabel: 'Born:',

        // Sections
        aboutTitle: 'About Me',
        educationTitle: 'Education',
        skillsTitle: 'Technical Skills',
        languagesTitle: 'Languages',
        certificationsTitle: 'Certifications & Achievements',
        experienceTitle: 'Experience & Expertise',

        // About
        aboutText: 'Dynamic Computer Engineering student with a strong foundation in software development and a passion for emerging technologies. Adept at leveraging AI tools and modern development practices to build efficient solutions. Multilingual professional with excellent communication skills and a proven track record of academic excellence.',

        // Education
        eduYtuTitle: 'B.S. in Computer Engineering',
        eduYtuInstitution: 'Yildiz Technical University • Istanbul, Turkey',
        eduYtuStatus: 'Status:',
        eduYtuStatusValue: '2nd Year, 2nd Semester',
        eduYtuProgram: 'Program:',
        eduYtuProgramValue: 'Computer Engineering (4-year Bachelor\'s program)',
        eduYtuHighlight: 'One of Istanbul\'s premier technical universities, renowned for its engineering programs and consistently ranked among Turkey\'s top institutions for Computer Science and Engineering education.',
        eduYtuNote: 'Admitted through ACT certification with near-maximum score',

        eduStepTitle: 'Software Development Certificate',
        eduStepInstitution: 'Step IT Academy',
        eduStepBadge: 'Completed',
        eduStepDesc: 'Comprehensive software development training program covering modern programming practices and technologies',

        eduSchoolTitle: 'Secondary School Diploma',
        eduSchoolInstitution: 'School #100 • Baku, Azerbaijan',
        eduSchoolDesc: 'Completed comprehensive secondary education with strong focus on mathematics and sciences',

        // Skills
        skillsCoreTitle: 'Core Languages',
        skillsFrameworksTitle: 'Frameworks & Technologies',
        skillsModernTitle: 'Modern Development',

        // Languages
        langNative: 'Native',
        langFluent: 'Fluent',
        langProficient: 'Proficient',
        langDuolingoNote: 'Duolingo Certified',

        // Certifications
        certStepTitle: 'Step IT Academy Certificate',
        certStepDesc: 'Comprehensive software development training',
        certDuolingoTitle: 'Duolingo English Certificate',
        certDuolingoDesc: 'Professional English language proficiency',
        certActTitle: 'ACT Certification',
        certActDesc: 'Near-maximum score for university admission',

        // Experience
        expAiTitle: 'AI-Augmented Development',
        expAi1: 'Professional prompt engineering for code generation and optimization',
        expAi2: 'Advanced debugging and code review of AI-generated solutions',
        expAi3: 'Efficient integration and customization of AI-assisted code',
        expAi4: 'Rapid prototyping using contemporary AI development tools',

        expDotnetTitle: '.NET Ecosystem Development',
        expDotnet1: 'Desktop application development using WPF and WinForms',
        expDotnet2: 'Database integration with ADO.NET',
        expDotnet3: 'Cross-platform mobile development with Xamarin',
        expDotnet4: 'Modern web services using .NET Core',

        expLearningTitle: 'Continuous Learning & Technology Exploration',
        expLearning1: 'Experimental work with various programming languages and frameworks',
        expLearning2: 'Adaptation to rapidly evolving AI-driven development landscape',
        expLearning3: 'Self-directed learning and technology evaluation',

        // Footer
        footer: '© 2026 Omar Nuriyev'
    },

    ru: {
        // Header
        title: 'Студент компьютерной инженерии и разработчик ПО',
        emailLabel: 'Email:',
        githubLabel: 'GitHub:',
        locationLabel: 'Местоположение:',
        bornLabel: 'Дата рождения:',

        // Sections
        aboutTitle: 'Обо мне',
        educationTitle: 'Образование',
        skillsTitle: 'Технические навыки',
        languagesTitle: 'Языки',
        certificationsTitle: 'Сертификаты и достижения',
        experienceTitle: 'Опыт и экспертиза',

        // About
        aboutText: 'Динамичный студент компьютерной инженерии с прочной основой в разработке программного обеспечения и страстью к новым технологиям. Умею использовать инструменты ИИ и современные методы разработки для создания эффективных решений. Многоязычный профессионал с отличными коммуникативными навыками и доказанным успехом в учебе.',

        // Education
        eduYtuTitle: 'Бакалавр компьютерной инженерии',
        eduYtuInstitution: 'Йылдыз Технический Университет • Стамбул, Турция',
        eduYtuStatus: 'Статус:',
        eduYtuStatusValue: '2 курс, 2 семестр',
        eduYtuProgram: 'Программа:',
        eduYtuProgramValue: 'Компьютерная инженерия (4-летняя программа бакалавриата)',
        eduYtuHighlight: 'Один из ведущих технических университетов Стамбула, известный своими инженерными программами и стабильно входящий в число лучших учебных заведений Турции по компьютерным наукам и инженерии.',
        eduYtuNote: 'Поступил через сертификацию ACT с почти максимальным баллом',

        eduStepTitle: 'Сертификат разработчика ПО',
        eduStepInstitution: 'Step IT Academy',
        eduStepBadge: 'Завершено',
        eduStepDesc: 'Всестороннее обучение разработке ПО с изучением современных методов программирования и технологий',

        eduSchoolTitle: 'Аттестат средней школы',
        eduSchoolInstitution: 'Школа №100 • Баку, Азербайджан',
        eduSchoolDesc: 'Полное среднее образование с акцентом на математику и естественные науки',

        // Skills
        skillsCoreTitle: 'Основные языки',
        skillsFrameworksTitle: 'Фреймворки и технологии',
        skillsModernTitle: 'Современная разработка',

        // Languages
        langNative: 'Родной',
        langFluent: 'Свободно',
        langProficient: 'Владею',
        langDuolingoNote: 'Сертификат Duolingo',

        // Certifications
        certStepTitle: 'Сертификат Step IT Academy',
        certStepDesc: 'Всестороннее обучение разработке ПО',
        certDuolingoTitle: 'Сертификат английского Duolingo',
        certDuolingoDesc: 'Профессиональное владение английским языком',
        certActTitle: 'Сертификация ACT',
        certActDesc: 'Почти максимальный балл для поступления в университет',

        // Experience
        expAiTitle: 'Разработка с использованием ИИ',
        expAi1: 'Профессиональная промпт-инженерия для генерации и оптимизации кода',
        expAi2: 'Продвинутая отладка и код-ревью ИИ-сгенерированных решений',
        expAi3: 'Эффективная интеграция и кастомизация ИИ-ассистированного кода',
        expAi4: 'Быстрое прототипирование с использованием современных ИИ-инструментов',

        expDotnetTitle: 'Разработка в экосистеме .NET',
        expDotnet1: 'Разработка десктопных приложений на WPF и WinForms',
        expDotnet2: 'Интеграция баз данных с ADO.NET',
        expDotnet3: 'Кросс-платформенная мобильная разработка на Xamarin',
        expDotnet4: 'Современные веб-сервисы на .NET Core',

        expLearningTitle: 'Непрерывное обучение и исследование технологий',
        expLearning1: 'Экспериментальная работа с различными языками программирования и фреймворками',
        expLearning2: 'Адаптация к быстро развивающемуся ландшафту разработки на основе ИИ',
        expLearning3: 'Самостоятельное обучение и оценка технологий',

        // Footer
        footer: '© 2026 Омар Нуриев'
    },

    tr: {
        // Header
        title: 'Bilgisayar Mühendisliği Öğrencisi ve Yazılım Geliştirici',
        emailLabel: 'E-posta:',
        githubLabel: 'GitHub:',
        locationLabel: 'Konum:',
        bornLabel: 'Doğum:',

        // Sections
        aboutTitle: 'Hakkımda',
        educationTitle: 'Eğitim',
        skillsTitle: 'Teknik Yetenekler',
        languagesTitle: 'Diller',
        certificationsTitle: 'Sertifikalar ve Başarılar',
        experienceTitle: 'Deneyim ve Uzmanlık',

        // About
        aboutText: 'Yazılım geliştirmede güçlü temellere ve gelişen teknolojilere tutkuyla sahip dinamik Bilgisayar Mühendisliği öğrencisi. Verimli çözümler oluşturmak için yapay zeka araçlarını ve modern geliştirme uygulamalarını kullanmada yetenekli. Mükemmel iletişim becerileri ve kanıtlanmış akademik başarı geçmişi olan çok dilli profesyonel.',

        // Education
        eduYtuTitle: 'Bilgisayar Mühendisliği Lisans',
        eduYtuInstitution: 'Yıldız Teknik Üniversitesi • İstanbul, Türkiye',
        eduYtuStatus: 'Durum:',
        eduYtuStatusValue: '2. Sınıf, 2. Dönem',
        eduYtuProgram: 'Program:',
        eduYtuProgramValue: 'Bilgisayar Mühendisliği (4 yıllık lisans programı)',
        eduYtuHighlight: 'İstanbul\'un önde gelen teknik üniversitelerinden biri, mühendislik programları ile ünlü ve Bilgisayar Bilimi ve Mühendislik eğitiminde Türkiye\'nin en iyi kurumları arasında sürekli olarak yer alıyor.',
        eduYtuNote: 'Neredeyse maksimum puanla ACT sertifikası ile kabul edildi',

        eduStepTitle: 'Yazılım Geliştirme Sertifikası',
        eduStepInstitution: 'Step IT Academy',
        eduStepBadge: 'Tamamlandı',
        eduStepDesc: 'Modern programlama uygulamaları ve teknolojilerini kapsayan kapsamlı yazılım geliştirme eğitim programı',

        eduSchoolTitle: 'Lise Diploması',
        eduSchoolInstitution: '100 Numaralı Okul • Bakü, Azerbaycan',
        eduSchoolDesc: 'Matematik ve fen bilimlerine güçlü odaklanarak kapsamlı lise eğitimi tamamlandı',

        // Skills
        skillsCoreTitle: 'Temel Diller',
        skillsFrameworksTitle: 'Framework\'ler ve Teknolojiler',
        skillsModernTitle: 'Modern Geliştirme',

        // Languages
        langNative: 'Ana Dil',
        langFluent: 'Akıcı',
        langProficient: 'Yeterli',
        langDuolingoNote: 'Duolingo Sertifikalı',

        // Certifications
        certStepTitle: 'Step IT Academy Sertifikası',
        certStepDesc: 'Kapsamlı yazılım geliştirme eğitimi',
        certDuolingoTitle: 'Duolingo İngilizce Sertifikası',
        certDuolingoDesc: 'Profesyonel İngilizce dil yeterliği',
        certActTitle: 'ACT Sertifikasyonu',
        certActDesc: 'Üniversiteye giriş için neredeyse maksimum puan',

        // Experience
        expAiTitle: 'Yapay Zeka Destekli Geliştirme',
        expAi1: 'Kod üretimi ve optimizasyonu için profesyonel prompt mühendisliği',
        expAi2: 'Yapay zeka tarafından üretilen çözümlerin gelişmiş hata ayıklama ve kod incelemesi',
        expAi3: 'Yapay zeka destekli kodun verimli entegrasyonu ve özelleştirmesi',
        expAi4: 'Çağdaş yapay zeka geliştirme araçları kullanarak hızlı prototipleme',

        expDotnetTitle: '.NET Ekosistemi Geliştirme',
        expDotnet1: 'WPF ve WinForms kullanarak masaüstü uygulama geliştirme',
        expDotnet2: 'ADO.NET ile veritabanı entegrasyonu',
        expDotnet3: 'Xamarin ile çapraz platform mobil geliştirme',
        expDotnet4: '.NET Core kullanarak modern web servisleri',

        expLearningTitle: 'Sürekli Öğrenme ve Teknoloji Keşfi',
        expLearning1: 'Çeşitli programlama dilleri ve framework\'ler ile deneysel çalışmalar',
        expLearning2: 'Hızla gelişen yapay zeka tabanlı geliştirme ortamına adaptasyon',
        expLearning3: 'Kendi kendine öğrenme ve teknoloji değerlendirmesi',

        // Footer
        footer: '© 2026 Omar Nuriyev'
    }
};

// Language detection and management
class I18n {
    constructor() {
        this.currentLang = this.detectLanguage();
        this.init();
    }

    detectLanguage() {
        // Check localStorage first
        const saved = localStorage.getItem('preferredLanguage');
        if (saved && translations[saved]) {
            return saved;
        }

        // Detect from browser
        const browserLang = navigator.language.toLowerCase();
        if (browserLang.startsWith('tr')) return 'tr';
        if (browserLang.startsWith('ru')) return 'ru';
        return 'en'; // Default to English
    }

    init() {
        this.translate();
        this.attachEventListeners();
        this.updateLanguageSelector();
    }

    translate() {
        const t = translations[this.currentLang];

        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (t[key]) {
                element.textContent = t[key];
            }
        });

        // Update HTML lang attribute
        document.documentElement.lang = this.currentLang;
    }

    setLanguage(lang) {
        if (translations[lang]) {
            this.currentLang = lang;
            localStorage.setItem('preferredLanguage', lang);
            this.translate();
            this.updateLanguageSelector();
        }
    }

    updateLanguageSelector() {
        // Update active state in language selector
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === this.currentLang);
        });
    }

    attachEventListeners() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.setLanguage(btn.dataset.lang);
            });
        });
    }
}

// Initialize i18n when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.i18n = new I18n();
});
