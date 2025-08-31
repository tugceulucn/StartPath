
# VentureDesk
**VentureDesk** — girişimcilerin fikirden ürüne giden yolculuğunu tek bir yerde yöneten, strateji-belge ve ürün-tasarım iş akışlarını birleştiren dashboard.
Kısa: fikir → belge → wireframe → yüksek sadakat UI → geliştirme. Hepsi tek masada. 🚀

> Cesaret verici bir not: Bu repo, MVP’yi hızlıca ayağa kaldırmak ve erken kullanıcı/mentor geri bildirimi alacak şekilde tasarlandı. Hadi başlayalım — küçük adımlarla büyük işler yapılır! 💪

### İçindekiler

* [Proje Tanımı](#proje-tanımı)
* [Özellikler](#özellikler)
* [Hızlı Başlangıç (Quickstart)](#hızlı-başlangıç-quickstart)
* [Örnek Çalıştırma (Yerel)](#örnek-çalıştırma-yerel)
* [Önerilen Teknoloji Yığını](#önerilen-teknoloji-yığını)
* [Proje Yapısı (Örnek)](#proje-yapısı-örnek)
* [Çevresel Değişkenler (örnek)](#çevresel-değişkenler-örnek)
* [Katkıda Bulunma](#katkıda-bulunma)
* [Roadmap & Milestones](#roadmap--milestones)
* [Lisans](#lisans)
* [İletişim & Destek](#iletişim--destek)

### Proje Tanımı

VentureDesk; girişim profili oluşturma, belge stüdyosu (SWOT, BMC vb.), rakip takibi, wireframe stüdyosu, prototipleme, UX/UI dizayn seti, yol haritası ve son olarak yazılıma devretme adımlarını içeren bir ürün. Amaç: kurucuların tüm erken aşama ihtiyaçlarını tek bir iş akışında toplamak.

**Kullanım senaryoları**

* Hızlı girişim kurulum wizard’ı (Aşama 1)
* Stratejik belge oluşturma & versiyonlama
* Lo-fi → hi-fi wireframe / prototip oluşturma
* Designer → Developer handoff süreçleri

---

### Özellikler

* Girişim profili wizard (ad, misyon, hedef kitle, gelir modeli, logo, renk paleti)
* Belgeler Stüdyosu: SWOT, Lean Canvas, Rakip Matrisi (şablonlar)
* Wireframe Stüdyosu: blok kütüphanesi, sayfa listesi, tuval (drag & drop)
* Prototipleme: ekranlar arası linkleme, paylaşılabilir test linki
* UX/UI: tasarım sistemi, component library export (Figma / Tailwind)
* Roadmap, Backlog & RICE önceliklendirme
* Basit finans & birim ekonomi hesaplayıcı
* Data room / doküman izinleri / RBAC

---

### Hızlı Başlangıç (Quickstart)

Aşağıdaki adımlar, repo’yu klonlayıp yerelde çalıştırmak içindir. (Bu README örnek bir full-stack yapı varsayar; kendi projenize göre düzenleyin.)

```bash
# 1. Repo'yu klonla
git clone https://github.com/<kullanici>/venturedesk.git
cd venturedesk

# 2. Backend için örnek (node/express)
cd server
cp .env.example .env
npm install
npm run dev   # veya: npm run start:dev

# 3. Frontend için örnek (react)
cd ../client
cp .env.example .env
npm install
npm run dev   # genellikle http://localhost:3000
```

> Not: Docker kullanıyorsanız `docker-compose up --build` ile tüm servisi ayağa kaldırabilirsiniz (opsiyonel).

### Örnek Çalıştırma (Yerel)

* Backend: `http://localhost:5000` (API)
* Frontend: `http://localhost:3000`
* DB: PostgreSQL / SQLite (örnek .env ile configlenebilir)
* Figma embed: `REACT_APP_FIGMA_KEY` ile prototip embedi

---

### Önerilen Teknoloji Yığını

(Bu bir öneridir — team/skillset’e göre değiştirin.)

* Frontend: React + Vite, TypeScript, TailwindCSS, React Router
* Design: Figma (paylaşılan komponent kütüphanesi)
* Backend: Node.js + Express / NestJS, TypeScript
* DB: PostgreSQL (Prisma ORM önerilir)
* Auth: JWT + Refresh tokens, 2FA opsiyonel
* Storage: AWS S3 / MinIO (logo, dosya yüklemeleri)
* CI/CD: GitHub Actions
* Container: Docker, docker-compose

---

### Proje Yapısı (Örnek)

```
venturedesk/
├─ client/                # React uygulaması (UI + wireframe editor)
│  ├─ src/
│  ├─ public/
│  └─ package.json
├─ server/                # API, auth, db migrations
│  ├─ src/
│  └─ package.json
├─ design/                # Figma export, design tokens
├─ docker-compose.yml
└─ README.md
```

---

### Çevresel Değişkenler (örnek `.env.example`)

```
# Server
PORT=5000
DATABASE_URL=postgres://user:pass@localhost:5432/venturedesk
JWT_SECRET=changeme
NODE_ENV=development

# Storage
S3_ENDPOINT=http://localhost:9000
S3_KEY=key
S3_SECRET=secret
S3_BUCKET=venturedesk

# Frontend
REACT_APP_API_URL=http://localhost:5000
REACT_APP_FIGMA_TOKEN=YOUR_FIGMA_TOKEN
```

---

### Katkıda Bulunma

1. Fork → branch oluştur (`feature/isim` veya `fix/isim`)
2. Kod yaz → test et → commit mesajı temiz tut (`feat: add ...`, `fix: ...`)
3. PR aç → açıklayıcı ol, hangi problemi çözüyorsun yaz
4. Kod inceleme (review) ve merge

**Katkı Kuralları**

* Kod stili: Prettier + ESLint zorunlu (PR öncesi lint ve test çalıştır)
* Feature geliştirirken unit/integration test ekle
* Büyük değişiklikler için issue ile planlama

---

### Roadmap & Milestones

Kısa dönemde hedefler (örnek):

* [x] Aşama 1: Girişim profil wizard
* [x] Aşama 3: Belgeler stüdyosu (SWOT, Canvas)
* [x] Aşama 6: Lo-fi wireframe editor (blok kütüphanesi)
* [ ] Aşama 7: Prototipleme & paylaşılabilir test linki
* [ ] Aşama 9: Hi-fi UI kit ve design system
* [ ] Aşama 10: MVP yazılım teslimi + CI/CD

---

### Screenshot & Demo

(Demo ekran görüntüleri / prototip linkleri buraya eklenecek. Figma prototip veya canlı demo varsa README’ye kısa link koy.)

---

### Lisans

Bu depo için öneri: **MIT License** — isteğe bağlı olarak değiştirin.
`LICENSE` dosyası eklemeyi unutmayın.

---

### İletişim & Destek

Her türlü soru, fikir veya logo/tasarım geribildirimi için:

* PR açabilirsiniz
* Issue açın: `https://github.com/<kullanici>/venturedesk/issues`
* E-posta: `team@venturedesk.example` (yer tutucu)

---

### Son Söz (Cesaret verici)

Harika bir fikre adım attın — VentureDesk, girişimcileri işin en zor kısmında (düzen, öncelik, hız) desteklemek için tasarlandı. README’yi repo’na koy, ilk milestone’u küçük tut ve hızlıca kullanıcıya göster. İstersen README’yi proje yapına göre kişiselleştirip, `package.json` scriptleriyle örnek komutları doldurayım — hazır mısın? 🧭✨
