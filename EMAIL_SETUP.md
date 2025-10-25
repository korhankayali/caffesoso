# EmailJS Kurulum Rehberi

Bu proje şu anda **Demo Mode**'da çalışıyor. Gerçek email gönderimi için EmailJS servisi kurulması gerekiyor.

## EmailJS Kurulumu

### 1. EmailJS Hesabı Oluşturun
- [EmailJS.com](https://www.emailjs.com/) adresine gidin
- Ücretsiz hesap oluşturun

### 2. Email Servisi Ekleyin
- Dashboard'da "Email Services" bölümüne gidin
- Gmail, Outlook veya istediğiniz email servisini ekleyin
- Service ID'yi not alın

### 3. Email Template Oluşturun
- "Email Templates" bölümüne gidin
- Yeni template oluşturun
- Template ID'yi not alın

### 4. Template İçeriği
```html
Konu: {{subject}}

Yeni İş Başvurusu

İsim: {{from_name}}
E-posta: {{from_email}}
Telefon: {{phone}}
Pozisyon: {{position}}
Deneyim: {{experience}}

Mesaj:
{{message}}

---
Bu mesaj Caffe Soso web sitesinden gönderilmiştir.
```

### 5. Public Key Alın
- Account settings'den Public Key'i kopyalayın

### 6. Kod Güncellemesi
App.jsx dosyasında aşağıdaki değişiklikleri yapın:

```javascript
// 22. satırda:
emailjs.init("YOUR_PUBLIC_KEY_HERE"); // Gerçek public key'i buraya yazın

// 701-705 satırları arasında:
await emailjs.send(
  'YOUR_SERVICE_ID_HERE', // Service ID'yi buraya yazın
  'YOUR_TEMPLATE_ID_HERE', // Template ID'yi buraya yazın
  templateParams
);
```

### 7. Demo Mode'u Kapatın
- 696-697 satırlarındaki demo kodunu silin
- 700-706 satırlarındaki yorum işaretlerini kaldırın
- 708-709 satırlarındaki console.log'u silin
- 711-713 satırlarındaki "(Demo Mode)" yazısını kaldırın

## Test
- Formu doldurup gönderin
- Email'inizin gelmesini kontrol edin
- Console'da hata olup olmadığını kontrol edin

## Güvenlik
- Public Key'i GitHub'a yüklemeyin
- Environment variables kullanın:
  ```javascript
  emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
  ```

## Sorun Giderme
- EmailJS dashboard'da gönderim loglarını kontrol edin
- Browser console'da hata mesajlarını kontrol edin
- CORS hatası alırsanız EmailJS settings'den domain'i ekleyin
