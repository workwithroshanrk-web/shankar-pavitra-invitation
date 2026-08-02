import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { CalendarDays, Clock3, Heart, MapPin, Music2, Volume2, VolumeX } from 'lucide-react';
import './styles.css';

const copy = {
  en: {
    lang: 'தமிழ்', eyebrow: 'Two lives. One beautiful destiny.', invite: 'Together with our families, we invite you to celebrate',
    and: '&', date: '23 · 08 · 2026', scroll: 'Scroll into our story', storyKicker: 'Written in the stars',
    storyTitle: 'Our story began before we knew it', bornTitle: 'The very first coincidence',
    bornBody: 'Born in the same hospital, our paths crossed before either of us could remember. Perhaps destiny had already introduced us.',
    loveTitle: 'A love that grew with us', loveBody: 'Through more than ten years, countless conversations and every season of life, we kept choosing each other.',
    foreverTitle: 'Now, our forever begins', foreverBody: 'With full hearts and the blessings of our families, we are turning our long-loved story into a lifetime.',
    celebrate: 'Come celebrate with us', reception: 'Reception', wedding: 'Wedding', receptionTime: 'Saturday · 6:00 PM onwards', weddingTime: 'Sunday · 10:30 AM to 12:00 PM',
    venue: 'Vijay Krishna Mahal', venueCity: 'Madurai, Tamil Nadu', directions: 'Get directions', countdown: 'Counting down to forever', days: 'Days', hours: 'Hours', mins: 'Minutes', secs: 'Seconds',
    closing: 'A decade of love. A lifetime to go.', closingNote: 'Your presence will make the beginning of our forever even more beautiful.', save: 'Save the date', footer: 'With love, Pavitra & Shankaradinesh'
  },
  ta: {
    lang: 'English', eyebrow: 'இரு உயிர்கள். ஓர் அழகிய விதி.', invite: 'எங்கள் குடும்பத்தினருடன் இணைந்து உங்களை அன்புடன் அழைக்கிறோம்',
    and: '&', date: '23 · 08 · 2026', scroll: 'எங்கள் கதைக்குள் வாருங்கள்', storyKicker: 'விதி எழுதிய கதை',
    storyTitle: 'நாங்கள் அறியும் முன்பே தொடங்கிய கதை', bornTitle: 'முதல் அழகிய ஒற்றுமை',
    bornBody: 'ஒரே மருத்துவமனையில் பிறந்தோம். நினைவுகள் உருவாகும் முன்பே எங்கள் பாதைகள் சந்தித்தன. அன்றே விதி எங்களை அறிமுகப்படுத்தியிருக்கலாம்.',
    loveTitle: 'எங்களுடன் வளர்ந்த காதல்', loveBody: 'பத்து ஆண்டுகளுக்கும் மேலாக, எண்ணற்ற உரையாடல்களிலும் வாழ்க்கையின் ஒவ்வொரு பருவத்திலும், ஒருவரை ஒருவர் தேர்ந்தெடுத்தோம்.',
    foreverTitle: 'இன்று எங்கள் என்றும் தொடங்குகிறது', foreverBody: 'குடும்பங்களின் ஆசிகளோடும் நிறைந்த இதயங்களோடும், எங்கள் காதல் கதையை வாழ்நாள் பயணமாக மாற்றுகிறோம்.',
    celebrate: 'எங்களுடன் கொண்டாட வாருங்கள்', reception: 'வரவேற்பு', wedding: 'திருமணம்', receptionTime: 'சனிக்கிழமை · மாலை 6:00 மணி முதல்', weddingTime: 'ஞாயிற்றுக்கிழமை · காலை 10:30 மணி முதல் மதியம் 12:00 மணி வரை',
    venue: 'விஜய் கிருஷ்ணா மஹால்', venueCity: 'மதுரை, தமிழ்நாடு', directions: 'வழிகாட்டி', countdown: 'எங்கள் என்றென்றும் தொடங்க இன்னும்', days: 'நாட்கள்', hours: 'மணி', mins: 'நிமிடம்', secs: 'வினாடி',
    closing: 'பத்தாண்டு காதல். இனி வாழ்நாள் முழுவதும்.', closingNote: 'எங்கள் புதிய பயணத்தின் தொடக்கத்தில் உங்கள் வருகை மேலும் அழகு சேர்க்கும்.', save: 'தேதியைச் சேமிக்க', footer: 'அன்புடன், பவித்ரா & சங்கரதினேஷ்'
  }
};

const mapUrl = 'https://www.google.com/maps/place/Vijay+Krishna+Mahal/@9.9701854,78.1606238,17z/data=!4m9!3m8!1s0x3b00c730d517064d:0x7214d9f9ec9d803f!5m2!4m1!1i2!8m2!3d9.9701854!4d78.1631987!16s%2Fg%2F11h3wtzn1z';

function App() {
  const [lang, setLang] = useState('en');
  const [muted, setMuted] = useState(true);
  const [remaining, setRemaining] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });
  const t = copy[lang];

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, new Date('2026-08-23T06:00:00+05:30') - new Date());
      setRemaining({ days: Math.floor(diff / 86400000), hours: Math.floor(diff / 3600000) % 24, mins: Math.floor(diff / 60000) % 60, secs: Math.floor(diff / 1000) % 60 });
    };
    tick(); const id = setInterval(tick, 1000); return () => clearInterval(id);
  }, []);

  const calendarUrl = useMemo(() => {
    const title = encodeURIComponent('Pavitra & Shankaradinesh Wedding');
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20260823/20260824&location=${encodeURIComponent('Vijay Krishna Mahal, Madurai')}`;
  }, []);

  return <main className={lang === 'ta' ? 'tamil' : ''}>
    <div className="grain" />
    <nav className="nav">
      <span className="monogram">P <i>♥</i> S</span>
      <div className="nav-actions">
        <button className="icon-button" aria-label="Toggle music" onClick={() => setMuted(!muted)}>{muted ? <VolumeX size={18}/> : <Volume2 size={18}/>}</button>
        <button className="language" onClick={() => setLang(lang === 'en' ? 'ta' : 'en')}>{t.lang}</button>
      </div>
    </nav>

    <section className="hero">
      <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
      <p className="eyebrow reveal">{t.eyebrow}</p>
      <p className="invite reveal delay-1">{t.invite}</p>
      <div className="names reveal delay-2"><h1>Pavi</h1><span>{t.and}</span><h1>Shankar</h1></div>
      <div className="hero-date reveal delay-3"><span/> {t.date} <span/></div>
      <a href="#story" className="scroll-cue">{t.scroll}<b>↓</b></a>
    </section>

    <section className="story section" id="story">
      <p className="kicker">{t.storyKicker}</p><h2>{t.storyTitle}</h2>
      <div className="timeline">
        <article><div className="story-number">01</div><div className="photo-placeholder first"><img src="/photos/childhood.jpeg" alt="Pavitra and Shankaradinesh as children" loading="lazy"/><span>Same place<br/>Same beginning</span></div><div className="story-copy"><h3>{t.bornTitle}</h3><p>{t.bornBody}</p></div></article>
        <article className="reverse"><div className="story-number">02</div><div className="photo-placeholder second"><img src="/photos/blue-portrait.jpeg" alt="Pavitra and Shankaradinesh together" loading="lazy"/><span>10+ years<br/>One love</span></div><div className="story-copy"><h3>{t.loveTitle}</h3><p>{t.loveBody}</p></div></article>
        <article><div className="story-number">03</div><div className="photo-placeholder third"><img src="/photos/couple-smile.jpeg" alt="Pavitra and Shankaradinesh smiling together" loading="lazy"/><span>Forever<br/>starts here</span></div><div className="story-copy"><h3>{t.foreverTitle}</h3><p>{t.foreverBody}</p></div></article>
      </div>
    </section>

    <section className="events section">
      <p className="kicker">Save the weekend</p><h2>{t.celebrate}</h2>
      <div className="event-grid">
        <article className="event-card"><span className="event-day">22</span><div><p>AUG · 2026</p><h3>{t.reception}</h3><p><Clock3 size={16}/>{t.receptionTime}</p></div></article>
        <article className="event-card featured"><span className="event-day">23</span><div><p>AUG · 2026</p><h3>{t.wedding}</h3><p><Clock3 size={16}/>{t.weddingTime}</p></div></article>
      </div>
      <div className="venue-card"><MapPin/><div><h3>{t.venue}</h3><p>{t.venueCity}</p></div><a href={mapUrl} target="_blank" rel="noreferrer">{t.directions} ↗</a></div>
    </section>

    <section className="countdown section"><p className="kicker">23 · 08 · 2026</p><h2>{t.countdown}</h2><div className="count-grid">
      {[[remaining.days,t.days],[remaining.hours,t.hours],[remaining.mins,t.mins],[remaining.secs,t.secs]].map(([n,label]) => <div key={label}><strong>{String(n).padStart(2,'0')}</strong><span>{label}</span></div>)}
    </div></section>

    <section className="closing section"><div className="family-portrait"><img src="/photos/family-portrait.png" alt="A joyful portrait of Pavitra and Shankaradinesh" loading="lazy"/></div><div className="infinity-rings" aria-label="Two diamond rings forming infinity">
      <svg viewBox="0 0 210 100" role="img" aria-hidden="true">
        <defs><linearGradient id="ringGold" x1="0" x2="1"><stop stopColor="#8f642e"/><stop offset=".48" stopColor="#e0bd7e"/><stop offset="1" stopColor="#9b6c32"/></linearGradient></defs>
        <path d="M105 50C82 17 61 8 39 14C14 21 8 50 21 70C34 91 65 91 85 72L105 50C128 17 149 8 171 14C196 21 202 50 189 70C176 91 145 91 125 72L105 50Z"/>
        <g className="diamond"><path d="M40 12 34 4h12z"/><path d="M34 4l6-3 6 3-6 8z"/></g>
        <g className="diamond"><path d="M170 12 164 4h12z"/><path d="M164 4l6-3 6 3-6 8z"/></g>
      </svg>
    </div><h2>{t.closing}</h2><p>{t.closingNote}</p><a href={calendarUrl} target="_blank" rel="noreferrer" className="primary"><CalendarDays size={18}/>{t.save}</a></section>
    <footer><span className="monogram">P <i>♥</i> S</span><div className="footer-copy"><p>{t.footer}</p><p className="designer-credit">Designed with <Heart size={12} fill="currentColor" /> by <strong>Roshan</strong></p></div></footer>
  </main>;
}

createRoot(document.getElementById('root')).render(<App />);
