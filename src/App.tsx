/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Volume2, 
  VolumeX, 
  HelpCircle, 
  BookOpen, 
  CheckCircle2, 
  Award, 
  Sparkles, 
  AlertTriangle, 
  RefreshCw, 
  Play, 
  Plus, 
  RotateCcw, 
  ShieldCheck, 
  Printer, 
  Download, 
  Check, 
  X, 
  ChevronRight, 
  Scale, 
  BrainCircuit, 
  Compass, 
  CheckCheck,
  Search,
  Star,
  PartyPopper
} from 'lucide-react';

// --- Generated Illustrated Assets ---
const HERO_IMAGE = '/src/assets/images/hero_detective_kids_1790511256925.jpg';
const LEAVES_IMAGE = '/src/assets/images/leaves_organic_case_1790511270372.jpg';
const APPLES_IMAGE = '/src/assets/images/apples_ripeness_case_1790511290102.jpg';
const CATS_IMAGE = '/src/assets/images/cats_biometric_case_1790511307947.jpg';

// --- Sound Synthesizer via Web Audio API (Zero External Assets) ---
class SoundSynthesizer {
  private ctx: AudioContext | null = null;
  public enabled: boolean = true;

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public playClick() {
    if (!this.enabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(650, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(320, this.ctx.currentTime + 0.06);
      gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.06);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.06);
    } catch {}
  }

  public playAddSample() {
    if (!this.enabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523, now);
      osc.frequency.exponentialRampToValueAtTime(980, now + 0.14);
      gain.gain.setValueAtTime(0.22, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.14);
    } catch {}
  }

  public playError() {
    if (!this.enabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.linearRampToValueAtTime(110, now + 0.28);
      gain.gain.setValueAtTime(0.22, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.28);
    } catch {}
  }

  public playTick() {
    if (!this.enabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587, now);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.03);
    } catch {}
  }

  public playFanfare() {
    if (!this.enabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      const start = this.ctx.currentTime;
      notes.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const noteTime = start + idx * 0.11;
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, noteTime);
        gain.gain.setValueAtTime(0.2, noteTime);
        gain.gain.exponentialRampToValueAtTime(0.001, noteTime + 0.3);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(noteTime);
        osc.stop(noteTime + 0.3);
      });
    } catch {}
  }
}

const synth = new SoundSynthesizer();

// --- Case Scenarios Data with Pictures & Bright Kid-Friendly Colors ---
export interface CaseScenario {
  id: string;
  badge: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  image: string;
  subjectTitle: string;
  subjectSubtitle: string;
  categoryA: { name: string; count: number; tag: string; colorClass: string };
  categoryB: { name: string; count: number; tag: string; colorClass: string };
  biasResult: {
    predictedCategory: string;
    confidence: number;
    hallucinationLabel: string;
    explanation: string;
    consequence: string;
  };
  fairResult: {
    predictedCategory: string;
    confidence: number;
    explanation: string;
    adabHighlight: string;
  };
  sampleBank: Array<{
    id: string;
    title: string;
    feature: string;
    tag: string;
    emoji: string;
    badgeBg: string;
  }>;
  stressTests: Array<{
    id: string;
    title: string;
    desc: string;
    accuracy: number;
    tag: string;
  }>;
  adabReflection: {
    pillar: string;
    surah: string;
    quote: string;
    practicalLesson: string;
  };
}

const CASE_SCENARIOS: CaseScenario[] = [
  {
    id: 'case-leaves',
    badge: 'Kasus 1: Lingkungan Sekolah Hijau 🍃',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    title: '🍂 Pemilah Sampah Organik Ceria',
    subtitle: 'Daun Hijau Segar vs Daun Cokelat Kering',
    image: LEAVES_IMAGE,
    subjectTitle: 'Daun Cokelat Gugur di Halaman Sekolah',
    subjectSubtitle: 'Daun pohon rindang yang kering alami setelah gugur di taman Al Azhar',
    categoryA: { name: 'Daun Hijau Segar', count: 18, tag: 'Banyak Sekali (90%)', colorClass: 'bg-emerald-500' },
    categoryB: { name: 'Daun Cokelat Kering', count: 2, tag: 'Hanya Sedikit (10%)', colorClass: 'bg-amber-500' },
    biasResult: {
      predictedCategory: 'Sampah Plastik / Anorganik',
      confidence: 98.4,
      hallucinationLabel: 'Oops! Robot AI Salah Tebak!',
      explanation: 'Robot AI hanya pernah melihat daun hijau. Ketika melihat daun cokelat kering, AI salah mengira ini adalah kantong plastik kotor!',
      consequence: 'Daun kering dibuang ke tong sampah plastik, padahal seharusnya bisa dijadikan pupuk kompos yang menyuburkan tanaman!'
    },
    fairResult: {
      predictedCategory: 'Sampah Organik Alami (Bahan Kompos)',
      confidence: 99.2,
      explanation: 'Hebat! Setelah diajarkan foto-foto daun kering, Robot AI sekarang pintar mengenali daun cokelat sebagai sampah organik yang bermanfaat!',
      adabHighlight: "Prinsip 'Adl (Keadilan): Kita harus adil mengajari robot dengan semua ragam ciptaan Allah tanpa membeda-bedakan warna!"
    },
    sampleBank: [
      { id: 'leaf-1', title: 'Daun Jati Cokelat Rapuh', feature: 'Warna cokelat lebar dan renyah', tag: 'Organik', emoji: '🍂', badgeBg: 'bg-amber-100 text-amber-800' },
      { id: 'leaf-2', title: 'Daun Mangga Kuning Emas', feature: 'Gugur keemasan di rumput', tag: 'Organik', emoji: '🍁', badgeBg: 'bg-yellow-100 text-yellow-800' },
      { id: 'leaf-3', title: 'Serasah Daun Campuran', feature: 'Remukan daun di bawah pohon', tag: 'Organik', emoji: '🌿', badgeBg: 'bg-emerald-100 text-emerald-800' },
      { id: 'leaf-4', title: 'Daun Kering Berembun', feature: 'Cokelat manis terkena udara pagi', tag: 'Organik', emoji: '🍂', badgeBg: 'bg-amber-100 text-amber-800' }
    ],
    stressTests: [
      { id: 'st-1', title: 'Daun Cokelat Basah Kena Hujan', desc: 'Permukaan licin memantulkan cahaya', accuracy: 98.8, tag: 'Lolos Tabayyun ⭐' },
      { id: 'st-2', title: 'Daun Kering di Atas Pasir', desc: 'Latar abu-abu terang kontras', accuracy: 99.1, tag: 'Lolos Tabayyun ⭐' },
      { id: 'st-3', title: 'Ranting Daun Kering Bertangkai', desc: 'Bentuk alami dari pohon sekolah', accuracy: 99.4, tag: 'Lolos Tabayyun ⭐' }
    ],
    adabReflection: {
      pillar: "'Adl (Keadilan) & Tabayyun (Cek Kebenaran)",
      surah: 'QS. An-Nahl: 90 & QS. Al-Hujurat: 6',
      quote: '"Sesungguhnya Allah menyuruh (kamu) berlaku adil dan berbuat kebajikan..."',
      practicalLesson: 'Dalam koding AI, kita harus adil mengumpulkan contoh data agar robot tidak membeda-bedakan atau menuduh salah.'
    }
  },
  {
    id: 'case-apples',
    badge: 'Kasus 2: Kebun Buah Nusantara 🍎',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
    title: '🍎 Deteksi Kematangan Buah Manis',
    subtitle: 'Apel Merah Impor vs Apel Hijau Manalagi Malang',
    image: APPLES_IMAGE,
    subjectTitle: 'Apel Hijau Manalagi Asli Malang',
    subjectSubtitle: 'Buah lokal manis segar dengan bintik alami dan aroma wangi khas Jawa Timur',
    categoryA: { name: 'Apel Merah Impor', count: 19, tag: 'Mayoritas (95%)', colorClass: 'bg-rose-500' },
    categoryB: { name: 'Apel Hijau Malang', count: 1, tag: 'Hanya 1 Foto (5%)', colorClass: 'bg-emerald-500' },
    biasResult: {
      predictedCategory: 'Buah Mentah / Masam Beracun',
      confidence: 96.8,
      hallucinationLabel: 'Waduh! AI Menolak Apel Lokal!',
      explanation: 'Robot AI hanya dilatih foto apel merah dari luar negeri. AI mengira apel hijau pasti mentah dan tidak enak dimakan!',
      consequence: 'Petani apel lokal Malang bisa sedih dan rugi karena apel manis mereka salah dibilang mentah oleh mesin pintar!'
    },
    fairResult: {
      predictedCategory: 'Apel Manalagi Matang Manis (Juara A+)',
      confidence: 99.4,
      explanation: 'Yey! Robot AI sekarang tahu bahwa apel hijau Malang justru sangat manis dan lezat jika sudah matang!',
      adabHighlight: 'Prinsip Siddiq (Kejujuran) & Amanah: Menjaga hak dan rezeki petani lokal dengan algoritma yang jujur dan adil.'
    },
    sampleBank: [
      { id: 'apple-1', title: 'Apel Hijau Malang Matang', feature: 'Bintik manis dan wangi ranum', tag: 'Matang', emoji: '🍏', badgeBg: 'bg-emerald-100 text-emerald-800' },
      { id: 'apple-2', title: 'Apel Rome Beauty Semburat', feature: 'Gradasi hijau dan semburat merah', tag: 'Matang', emoji: '🍎', badgeBg: 'bg-rose-100 text-rose-800' },
      { id: 'apple-3', title: 'Apel Hijau Renyah Manis', feature: 'Kadar manis tinggi 14 Brix', tag: 'Matang', emoji: '🍏', badgeBg: 'bg-emerald-100 text-emerald-800' },
      { id: 'apple-4', title: 'Apel Segar Bersama Daunnya', feature: 'Baru dipetik dari kebun pohon', tag: 'Matang', emoji: '🍏', badgeBg: 'bg-emerald-100 text-emerald-800' }
    ],
    stressTests: [
      { id: 'st-1', title: 'Apel Hijau di Bawah Lampu Toko', desc: 'Pantulan sinar lampu terang', accuracy: 99.2, tag: 'Lolos Tabayyun ⭐' },
      { id: 'st-2', title: 'Apel Berembun Dingin dari Kulkas', desc: 'Tetesan air segar di kulit buah', accuracy: 98.9, tag: 'Lolos Tabayyun ⭐' },
      { id: 'st-3', title: 'Apel dalam Keranjang Anyaman', desc: 'Tekstur bambu tradisional', accuracy: 99.5, tag: 'Lolos Tabayyun ⭐' }
    ],
    adabReflection: {
      pillar: "Siddiq (Kejujuran) & 'Adl (Keadilan)",
      surah: 'QS. Al-Muthaffifin: 1-3 & QS. Ar-Rahman: 9',
      quote: '"Dan tegakkanlah timbangan itu dengan adil dan janganlah kamu mengurangi neraca itu."',
      practicalLesson: 'Jujur dan adil dalam menimbang kualitas buah lokal tanpa terpengaruh rasa kagum berlebih pada produk luar negeri.'
    }
  },
  {
    id: 'case-cats',
    badge: 'Kasus 3: Sahabat Hewan Kesayangan 🐈',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
    title: '🐈 Biometrik Kucing Lucu',
    subtitle: 'Kucing Putih Ceria vs Kucing Hitam Pencahayaan Redup',
    image: CATS_IMAGE,
    subjectTitle: 'Kucing Hitam Manis yang Sedang Santai',
    subjectSubtitle: 'Kucing berbulu hitam lebat yang sehat, menggemaskan, dan suka dielus',
    categoryA: { name: 'Kucing Putih / Belang', count: 17, tag: 'Banyak (85%)', colorClass: 'bg-sky-500' },
    categoryB: { name: 'Kucing Hitam', count: 3, tag: 'Sedikit (15%)', colorClass: 'bg-purple-500' },
    biasResult: {
      predictedCategory: 'Bayangan / Benda Mati Kosong',
      confidence: 94.6,
      hallucinationLabel: 'Kasihan! Kucing Hitam Tak Terlihat!',
      explanation: 'Kamera pintar tidak pernah belajar banyak foto kucing berbulu gelap saat malam hari. Kamera mengiranya hanya bayangan hitam!',
      consequence: 'Pintu otomatis tidak mau membuka dan mangkuk makan otomatis tidak mau mengeluarkan makanan untuk kucing hitam!'
    },
    fairResult: {
      predictedCategory: 'Kucing Domestik Sehat & Lucu (Meow!)',
      confidence: 99.1,
      explanation: 'Hore! Kamera AI sekarang bisa melihat mata bulat berkilau dan telinga lucu si kucing hitam meski di ruangan agak redup!',
      adabHighlight: 'Prinsip Amanah & Sayang Hewan (Rahmah): Rasulullah SAW mengajarkan kasih sayang pada semua kucing tanpa membedakan corak bulu!'
    },
    sampleBank: [
      { id: 'cat-1', title: 'Kucing Hitam Mata Bulat Bersinar', feature: 'Pupil mata bercahaya lucu', tag: 'Kucing', emoji: '🐈‍⬛', badgeBg: 'bg-purple-100 text-purple-800' },
      { id: 'cat-2', title: 'Kucing Hitam Duduk Manis', feature: 'Siluet telinga segitiga dan kumis', tag: 'Kucing', emoji: '🐈‍⬛', badgeBg: 'bg-purple-100 text-purple-800' },
      { id: 'cat-3', title: 'Kucing Hitam Berkalung Lonceng', feature: 'Lonceng emas mengkilap', tag: 'Kucing', emoji: '🐈‍⬛', badgeBg: 'bg-amber-100 text-amber-800' },
      { id: 'cat-4', title: 'Kucing Hitam Tidur Mungil', feature: 'Pose tidur melingkar menggemaskan', tag: 'Kucing', emoji: '🐈‍⬛', badgeBg: 'bg-purple-100 text-purple-800' }
    ],
    stressTests: [
      { id: 'st-1', title: 'Kucing Berlari Cepat Bermain Bola', desc: 'Gerakan lincah ceria', accuracy: 98.6, tag: 'Lolos Tabayyun ⭐' },
      { id: 'st-2', title: 'Kucing di Karpet Beludru Gelap', desc: 'Kontras lembut pencahayaan malam', accuracy: 98.9, tag: 'Lolos Tabayyun ⭐' },
      { id: 'st-3', title: 'Kucing Menatap Kamera CCTV Ceria', desc: 'Sensor malam inframerah', accuracy: 99.6, tag: 'Lolos Tabayyun ⭐' }
    ],
    adabReflection: {
      pillar: 'Amanah & Kasih Sayang (Rahmah)',
      surah: 'QS. Al-Anfal: 27 & Hadits Kasih Sayang Hewan',
      quote: '"Orang-orang yang penyayang niscaya akan disayangi oleh Allah Yang Maha Penyayang..." (HR. Tirmidzi)',
      practicalLesson: 'Teknologi harus dibuat dengan cinta kasih untuk melindungi seluruh makhluk hidup ciptaan Allah.'
    }
  }
];

// --- Quiz Questions Data ---
interface QuizQuestion {
  id: number;
  type: 'multiple-choice' | 'adab-matching' | 'dev-action' | 'classify' | 'case-study';
  title: string;
  question: string;
  options?: string[];
  correctIndex?: number;
  pairs?: Array<{ term: string; match: string }>;
  scenarios?: Array<{ text: string; isEthical: boolean }>;
  explanation: string;
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    title: 'Soal 1: Kenapa Robot AI Bisa Salah Tebak?',
    question: 'Mengapa komputer AI salah menebak daun cokelat kering sebagai "Sampah Plastik"?',
    options: [
      'A. Karena komputernya sedang kepanasan dan lelah',
      'B. Karena data latihnya tidak adil; 90% fotonya hanya daun hijau saja',
      'C. Karena daun cokelat mengandung plastik buatan pabrik',
      'D. Karena kabel monitornya lepas'
    ],
    correctIndex: 1,
    explanation: 'Hebat! AI belajar dari foto-foto yang kita berikan. Jika fotonya cuma daun hijau, AI tidak kenal daun cokelat kering sehingga terjadi bias data!'
  },
  {
    id: 2,
    type: 'adab-matching',
    title: 'Soal 2: Memasangkan 4 Pilar Adab Islami',
    question: 'Pasangkan pilar adab Islam berikut dengan perilaku baik saat kita membuat program AI:',
    pairs: [
      { term: 'Siddiq (Jujur)', match: 'Memasukkan data asli tanpa memanipulasi atau bohong' },
      { term: "'Adl (Adil)", match: 'Menyeimbangkan contoh data untuk semua kelompok' },
      { term: 'Tabayyun (Cek Ulang)', match: 'Menguji kebenaran hasil AI sebelum mempercayainya' },
      { term: 'Amanah (Tanggung Jawab)', match: 'Membuat teknologi yang memberi kebaikan bagi sesama' }
    ],
    explanation: "Masya Allah, tepat sekali! Empat pilar adab ini membuat teknologi AI kita membawa berkah dan manfaat bagi semua orang!"
  },
  {
    id: 3,
    type: 'dev-action',
    title: 'Soal 3: Kebaikan untuk Petani Lokal',
    question: 'Jika pembuat AI hanya memasukkan foto buah apel impor dan mengabaikan apel petani lokal, adab apa yang dilanggar?',
    options: [
      'A. Pelanggaran adab \'Adl (Keadilan), karena merugikan petani lokal yang sudah bekerja keras',
      'B. Pelanggaran cara menyalakan listrik',
      'C. Tidak ada yang salah, bebas saja',
      'D. Komputer jadi lebih cepat menyala'
    ],
    correctIndex: 0,
    explanation: "Benar sekali! Keadilan ('Adl) mengajarkan kita untuk menghargai hasil bumi negeri sendiri dan tidak merugikan orang lain."
  },
  {
    id: 4,
    type: 'classify',
    title: 'Soal 4: Bedakan Tindakan Baik vs Ber-Bias',
    question: 'Tentukan apakah perbuatan di bawah ini termasuk Praktik Baik (Etis) atau Ber-Bias (Timpang):',
    scenarios: [
      { text: 'Mengambil contoh foto dari berbagai macam warna kulit secara seimbang', isEthical: true },
      { text: 'Menghapus foto yang tidak disukai tanpa alasan yang benar', isEthical: false },
      { text: 'Menguji alat pendeteksi dokter pada anak-anak maupun orang tua', isEthical: true },
      { text: 'Hanya melatih robot suara dengan satu dialek bahasa kota saja', isEthical: false }
    ],
    explanation: 'Keren! Kamu sudah paham mana perbuatan yang jujur dan mana yang menimbulkan ketidakadilan dalam teknologi.'
  },
  {
    id: 5,
    type: 'case-study',
    title: 'Soal 5: Sikap Tabayyun (Cek & Teliti)',
    question: 'Jika ada robot kamera bilang seorang teman mencontek padahal ia cuma menoleh mengambil penghapus jatuh, apa yang harus kita lakukan?',
    options: [
      'A. Bertabayyun (menanyakan baik-baik dan memeriksa kenyataannya terlebih dahulu)',
      'B. Langsung memarahi teman itu di depan kelas',
      'C. Membuang kamera robot ke tempat sampah',
      'D. Mengabaikan dan tidak peduli'
    ],
    correctIndex: 0,
    explanation: 'Alhamdulillah, cerdas! Surat Al-Hujurat ayat 6 mengajarkan kita untuk selalu bertabayyun. Robot AI bisa salah, keputusan manusia yang bijak tetap nomor satu!'
  }
];

export default function App() {
  // Global & Scenario State
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [selectedCaseId, setSelectedCaseId] = useState<string>('case-leaves');
  
  // Workspace State
  const [isRetrained, setIsRetrained] = useState<boolean>(false);
  const [isTraining, setIsTraining] = useState<boolean>(false);
  const [trainingEpoch, setTrainingEpoch] = useState<number>(0);
  const [trainingLoss, setTrainingLoss] = useState<number>(0.84);
  const [trainingAccuracy, setTrainingAccuracy] = useState<number>(54);
  const [addedSamples, setAddedSamples] = useState<string[]>([]);
  const [isInferencing, setIsInferencing] = useState<boolean>(false);
  const [stressTested, setStressTested] = useState<boolean>(false);

  // Modals
  const [activeModal, setActiveModal] = useState<'guide' | 'adab' | 'quiz' | 'certificate' | null>(null);

  // Certificate State
  const [studentName, setStudentName] = useState<string>('Ahmad Zaki Pratama');
  const [certId, setCertId] = useState<string>('ALAZHAR-AI-2026-9742');

  // Quiz State
  const [quizAnswers, setQuizAnswers] = useState<Record<number, unknown>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number>(0);

  // Neural Network Canvas Ref
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Active scenario lookup
  const currentCase = useMemo(() => {
    return CASE_SCENARIOS.find((c) => c.id === selectedCaseId) || CASE_SCENARIOS[0];
  }, [selectedCaseId]);

  // Sync sound setting to synth
  useEffect(() => {
    synth.enabled = soundEnabled;
  }, [soundEnabled]);

  // Reset workspace when changing scenario
  const handleSelectCase = (caseId: string) => {
    synth.playClick();
    setSelectedCaseId(caseId);
    setIsRetrained(false);
    setIsTraining(false);
    setTrainingEpoch(0);
    setTrainingLoss(0.84);
    setTrainingAccuracy(54);
    setAddedSamples([]);
    setIsInferencing(false);
    setStressTested(false);
  };

  // Add sample handler
  const handleAddSample = (sampleId: string) => {
    if (addedSamples.includes(sampleId)) return;
    synth.playAddSample();
    setAddedSamples((prev) => [...prev, sampleId]);
  };

  // Reset dataset
  const handleResetDataset = () => {
    synth.playClick();
    setAddedSamples([]);
    setIsRetrained(false);
    setTrainingEpoch(0);
    setTrainingLoss(0.84);
    setTrainingAccuracy(54);
    setStressTested(false);
  };

  // Retrain Simulation
  const handleRetrain = () => {
    if (addedSamples.length < 3 || isTraining) return;
    synth.playClick();
    setIsTraining(true);
    setTrainingEpoch(0);

    let epoch = 0;
    const interval = setInterval(() => {
      epoch += 1;
      setTrainingEpoch(epoch);
      synth.playTick();

      const currentLoss = Math.max(0.019, 0.84 * Math.exp(-epoch * 0.19));
      const currentAcc = Math.min(99.4, 54 + (45.4 * (1 - Math.exp(-epoch * 0.22))));
      setTrainingLoss(Number(currentLoss.toFixed(3)));
      setTrainingAccuracy(Number(currentAcc.toFixed(1)));

      if (epoch >= 20) {
        clearInterval(interval);
        setIsTraining(false);
        setIsRetrained(true);
        synth.playFanfare();
      }
    }, 120);
  };

  // Re-run test inference
  const handleRunInference = () => {
    synth.playClick();
    setIsInferencing(true);
    setTimeout(() => {
      setIsInferencing(false);
      if (isRetrained) {
        synth.playFanfare();
      } else {
        synth.playError();
      }
    }, 650);
  };

  // Run Stress Test
  const handleStressTest = () => {
    synth.playAddSample();
    setStressTested(true);
  };

  // Neural Network HTML5 Canvas Animation (Bright cheerful colors)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let step = 0;

    const layers = [
      { xPct: 0.16, nodes: [0.25, 0.5, 0.75] },
      { xPct: 0.50, nodes: [0.18, 0.38, 0.62, 0.82] },
      { xPct: 0.84, nodes: [0.35, 0.65] }
    ];

    const render = () => {
      step += 0.05;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const isBiased = !isRetrained;

      // Draw Synapses
      for (let l = 0; l < layers.length - 1; l++) {
        const fromLayer = layers[l];
        const toLayer = layers[l + 1];

        fromLayer.nodes.forEach((fromYPct, i) => {
          const x1 = fromLayer.xPct * w;
          const y1 = fromYPct * h;

          toLayer.nodes.forEach((toYPct, j) => {
            const x2 = toLayer.xPct * w;
            const y2 = toYPct * h;

            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);

            if (isBiased) {
              const weightColor = j === 0 ? 'rgba(239, 68, 68, 0.7)' : 'rgba(251, 191, 36, 0.4)';
              ctx.strokeStyle = weightColor;
              ctx.lineWidth = j === 0 ? 3 : 1.5;
            } else {
              ctx.strokeStyle = 'rgba(16, 185, 129, 0.65)';
              ctx.lineWidth = 2.2;
            }
            ctx.stroke();

            // Animated particle pulse along the synapsis
            const pulsePhase = (step + (i + j) * 0.7) % 1;
            const px = x1 + (x2 - x1) * pulsePhase;
            const py = y1 + (y2 - y1) * pulsePhase;

            ctx.beginPath();
            ctx.arc(px, py, isBiased ? 3.5 : 4, 0, Math.PI * 2);
            ctx.fillStyle = isBiased ? '#ef4444' : '#10b981';
            ctx.fill();
          });
        });
      }

      // Draw Nodes
      layers.forEach((layer, layerIdx) => {
        layer.nodes.forEach((yPct, nodeIdx) => {
          const x = layer.xPct * w;
          const y = yPct * h;

          ctx.beginPath();
          ctx.arc(x, y, 9, 0, Math.PI * 2);

          if (layerIdx === layers.length - 1) {
            if (isBiased) {
              ctx.fillStyle = nodeIdx === 0 ? '#f43f5e' : '#94a3b8';
            } else {
              ctx.fillStyle = nodeIdx === 1 ? '#10b981' : '#cbd5e1';
            }
          } else {
            ctx.fillStyle = isBiased ? '#f59e0b' : '#38bdf8';
          }

          ctx.fill();
          ctx.lineWidth = 2.5;
          ctx.strokeStyle = '#ffffff';
          ctx.stroke();
        });
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isRetrained, selectedCaseId]);

  // Compute dataset balance ratios
  const baseCategoryACount = currentCase.categoryA.count;
  const baseCategoryBCount = currentCase.categoryB.count;
  const totalBCount = baseCategoryBCount + addedSamples.length;
  const totalDatasetCount = baseCategoryACount + totalBCount;
  const percentA = Math.round((baseCategoryACount / totalDatasetCount) * 100);
  const percentB = Math.round((totalBCount / totalDatasetCount) * 100);
  const isBalancedEnough = addedSamples.length >= 3;

  // Handle Quiz Submission
  const handleScoreQuiz = () => {
    synth.playFanfare();
    let score = 0;
    if (quizAnswers[1] === 1) score += 20;
    if (quizAnswers[2] === true) score += 20;
    if (quizAnswers[3] === 0) score += 20;
    const q4Ans = quizAnswers[4] as Record<number, boolean> | undefined;
    if (q4Ans && q4Ans[0] && !q4Ans[1] && q4Ans[2] && !q4Ans[3]) {
      score += 20;
    } else if (q4Ans && Object.keys(q4Ans).length === 4) {
      score += 15;
    }
    if (quizAnswers[5] === 0) score += 20;

    setQuizScore(score);
    setQuizSubmitted(true);
  };

  // Generate Standalone HTML File for Offline IFP Download
  const handleDownloadStandaloneHtml = async () => {
    synth.playFanfare();
    try {
      const res = await fetch('/ai-detective-single-file.html');
      if (res.ok) {
        const text = await res.text();
        const blob = new Blob([text], { type: 'text/html;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'AI_Detective_AlAzhar_Offline_IFP.html';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        return;
      }
    } catch {}
    window.open('/ai-detective-single-file.html', '_blank');
  };

  return (
    <div className="min-h-screen bg-polka-kids text-slate-800 flex flex-col font-sans-app selection:bg-amber-300 selection:text-amber-950 pb-12">
      
      {/* ================= HEADER / TOP BAR ================= */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b-4 border-amber-300 px-4 sm:px-6 py-3.5 shadow-md no-print">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Zone 1: Brand Mark with Cheerful Badge */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 via-yellow-400 to-amber-500 flex items-center justify-center text-2xl shadow-[0_4px_0_0_#d97706] border-2 border-white">
              🕵️‍♂️
            </div>
            <div>
              <div className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 flex items-center gap-2">
                <span>AI Detective</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-extrabold border-2 border-emerald-300 shadow-sm">
                  Al Azhar Tech
                </span>
              </div>
              <p className="text-xs font-semibold text-slate-500 hidden sm:block">
                Arena Seru Belajar Data Latih & Bias AI · Fase D SMP
              </p>
            </div>
          </div>

          {/* Zone 2: Navigation Buttons (Cute & Colorful) */}
          <nav className="flex items-center gap-2">
            <button
              onClick={() => { synth.playClick(); setActiveModal('guide'); }}
              className="btn-game-white px-3 py-2 text-xs sm:text-sm rounded-2xl flex items-center gap-1.5"
            >
              <Compass className="w-4 h-4 text-emerald-600" />
              <span className="hidden md:inline">Panduan</span> Detektif
            </button>
            <button
              onClick={() => { synth.playClick(); setActiveModal('adab'); }}
              className="btn-game-white px-3 py-2 text-xs sm:text-sm rounded-2xl flex items-center gap-1.5"
            >
              <BookOpen className="w-4 h-4 text-amber-600" />
              <span className="hidden md:inline">4 Pilar</span> Adab Digital
            </button>
            <button
              onClick={() => { synth.playClick(); setActiveModal('quiz'); }}
              className="btn-game-sky px-3 py-2 text-xs sm:text-sm rounded-2xl flex items-center gap-1.5"
            >
              <HelpCircle className="w-4 h-4 text-white" />
              <span>Kuis Ceria</span>
            </button>
          </nav>

          {/* Zone 3: Actions & Audio Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                const next = !soundEnabled;
                setSoundEnabled(next);
                if (next) synth.playClick();
              }}
              title={soundEnabled ? 'Matikan Suara Audio' : 'Aktifkan Suara Audio'}
              className="w-11 h-11 rounded-2xl bg-white border-2 border-slate-200 shadow-[0_4px_0_0_#cbd5e1] flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-colors text-lg"
            >
              {soundEnabled ? '🔊' : '🔇'}
            </button>

            <button
              onClick={() => { synth.playClick(); setActiveModal('certificate'); }}
              className="btn-game-amber px-4 py-2 text-xs sm:text-sm rounded-2xl flex items-center gap-1.5"
            >
              <Award className="w-4 h-4 text-amber-950" />
              <span className="hidden sm:inline">Sertifikat</span>
            </button>

            <button
              onClick={handleDownloadStandaloneHtml}
              title="Unduh File HTML Mandiri untuk Layar IFP"
              className="w-11 h-11 rounded-2xl bg-white border-2 border-slate-200 shadow-[0_4px_0_0_#cbd5e1] flex items-center justify-center text-cyan-600 hover:bg-slate-50 transition-colors"
            >
              <Download className="w-5 h-5" />
            </button>
          </div>

        </div>
      </header>

      {/* ================= HERO GREETING BANNER WITH PICTURE ================= */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 pt-5 pb-1 no-print">
        <div className="clay-card-bright p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-5 bg-gradient-to-r from-amber-50 via-white to-sky-50 border-3 border-amber-200">
          <div className="flex items-center gap-4 sm:gap-5">
            <img
              src={HERO_IMAGE}
              alt="Detektif AI Cilik Al Azhar"
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-4 border-amber-300 shadow-md shrink-0"
              referrerPolicy="no-referrer"
            />
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-200/80 text-amber-900 text-xs font-black mb-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                <span>Misi Detektif AI Al Azhar</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Ayo Bantu Robot AI Belajar Bersikap Adil! 🌟
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl mt-1">
                Pilih skenario kasus di bawah, cari tahu kenapa robot bisa salah tebak, lalu tambahkan contoh data yang seimbang agar robot menjadi pintar dan beradab!
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-stretch md:self-auto justify-end">
            <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">Status Robot:</span>
            {isRetrained ? (
              <span className="px-3.5 py-1.5 rounded-xl bg-emerald-500 text-white text-xs font-extrabold shadow-md flex items-center gap-1.5 animate-bounce">
                <CheckCircle2 className="w-4 h-4" />
                Model Seimbang & Adil ('Adl)
              </span>
            ) : (
              <span className="px-3.5 py-1.5 rounded-xl bg-rose-500 text-white text-xs font-extrabold shadow-md flex items-center gap-1.5 animate-pulse">
                <AlertTriangle className="w-4 h-4" />
                Ada Halusinasi / Bias!
              </span>
            )}
          </div>
        </div>
      </section>

      {/* ================= CASE SELECTOR BAR ================= */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-4 no-print">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
            <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-300 shadow-sm text-slate-800">
              PILIH KASUS INVESTIGASI:
            </span>
            <span>Sentuh untuk mengganti skenario bergambar</span>
          </div>

          <div className="grid grid-cols-3 gap-2.5 w-full md:w-auto">
            {CASE_SCENARIOS.map((scenario) => {
              const isSelected = scenario.id === selectedCaseId;
              return (
                <button
                  key={scenario.id}
                  onClick={() => handleSelectCase(scenario.id)}
                  className={`px-4 py-3 rounded-2xl text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    isSelected
                      ? 'btn-game-emerald scale-102 ring-4 ring-emerald-200'
                      : 'btn-game-white hover:bg-slate-100'
                  }`}
                >
                  <span className="text-lg">{scenario.title.split(' ')[0]}</span>
                  <span className="truncate">{scenario.title.split(' ').slice(1, 3).join(' ')}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= 3-PANEL INTERACTIVE WORKSPACE ================= */}
      <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 flex-1 flex flex-col gap-6 no-print">
        
        {/* 3-Panel Grid Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">
          
          {/* ================= PANEL 1: DIAGNOSIS BIAS (BERBERGAMBAR) ================= */}
          <div className={`p-5 flex flex-col justify-between transition-all ${
            isRetrained ? 'clay-card-emerald' : 'clay-card-rose'
          }`}>
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b-2 border-slate-200/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-rose-500 text-white flex items-center justify-center font-black text-sm shadow-sm">
                    1
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-slate-900">Tahap 1: Diagnosis Bias</h3>
                    <p className="text-[11px] font-semibold text-slate-500">Melihat Kesalahan Tebakan AI</p>
                  </div>
                </div>
                <span className={`text-[11px] font-extrabold px-2.5 py-1 rounded-full ${
                  isRetrained ? 'bg-emerald-200 text-emerald-900' : 'bg-rose-200 text-rose-900'
                }`}>
                  {isRetrained ? 'STABIL ✓' : 'BIAS ⚠️'}
                </span>
              </div>

              {/* Picture Card for Object Under Test */}
              <div className="mt-4 bg-white rounded-2xl p-3 border-3 border-slate-200 shadow-sm overflow-hidden">
                <div className="relative rounded-xl overflow-hidden aspect-video bg-slate-100 border border-slate-200">
                  <img
                    src={currentCase.image}
                    alt={currentCase.subjectTitle}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 left-2 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-black text-slate-900 shadow">
                    📸 Foto Objek Uji
                  </div>
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-black/60 text-white text-[10px] font-mono">
                    Resolusi Kamera IFP
                  </div>
                </div>

                <div className="mt-2.5">
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 bg-amber-100 px-2 py-0.5 rounded-md">
                    Kasus: {currentCase.subtitle}
                  </span>
                  <h4 className="text-sm font-extrabold text-slate-900 mt-1">
                    {currentCase.subjectTitle}
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {currentCase.subjectSubtitle}
                  </p>
                </div>
              </div>

              {/* Neural Network Mini Canvas (Kid-friendly styled) */}
              <div className="mt-4 bg-white rounded-2xl p-3 border-2 border-slate-200">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-extrabold text-slate-800 flex items-center gap-1.5">
                    <BrainCircuit className="w-4 h-4 text-sky-500" />
                    Jaringan Syaraf Otak AI:
                  </span>
                  <span className={`text-[11px] font-black ${isRetrained ? 'text-emerald-600' : 'text-rose-600'}`}>
                    {isRetrained ? 'Seimbang & Adil' : 'Timpang / Berat Sebelah'}
                  </span>
                </div>
                <div className="rounded-xl bg-slate-900 p-2 overflow-hidden shadow-inner">
                  <canvas
                    ref={canvasRef}
                    width={320}
                    height={110}
                    className="w-full h-24 block rounded"
                  />
                  <div className="flex justify-between px-2 pt-1 text-[9px] text-slate-400 font-bold uppercase">
                    <span>Input Foto</span>
                    <span>Filter Belajar</span>
                    <span>Tebakan AI</span>
                  </div>
                </div>
              </div>

              {/* Prediction Result Box */}
              <div className="mt-4 p-4 rounded-2xl bg-white border-2 border-slate-200 space-y-2 shadow-sm">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-500">Tebakan Robot AI:</span>
                  <span className={`font-mono font-extrabold text-xs px-2 py-0.5 rounded ${
                    isRetrained ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                  }`}>
                    {isRetrained ? 'Akurasi 99.2%' : `Keyakinan ${currentCase.biasResult.confidence}%`}
                  </span>
                </div>
                
                <div className={`p-3 rounded-xl border-2 font-black text-sm flex items-center gap-2 ${
                  isRetrained 
                    ? 'bg-emerald-50 border-emerald-400 text-emerald-900' 
                    : 'bg-rose-50 border-rose-400 text-rose-900'
                }`}>
                  {isInferencing ? (
                    <span className="flex items-center gap-2 text-sky-700 animate-pulse">
                      <RefreshCw className="w-4 h-4 animate-spin text-sky-600" />
                      Robot sedang mengamati piksel foto...
                    </span>
                  ) : isRetrained ? (
                    `✓ ${currentCase.fairResult.predictedCategory}`
                  ) : (
                    `⚠️ ${currentCase.biasResult.predictedCategory}`
                  )}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {isRetrained
                    ? currentCase.fairResult.explanation
                    : currentCase.biasResult.explanation}
                </p>
              </div>
            </div>

            {/* Retest Button */}
            <div className="mt-4 pt-3 border-t-2 border-slate-200/80">
              <button
                onClick={handleRunInference}
                disabled={isInferencing}
                className="w-full btn-game-white py-3 rounded-2xl text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 cursor-pointer"
              >
                <RefreshCw className={`w-4 h-4 text-sky-600 ${isInferencing ? 'animate-spin' : ''}`} />
                <span>Uji Ulang Tebakan Robot Sekarang</span>
              </button>
            </div>
          </div>


          {/* ================= PANEL 2: STUDIO DATASET SEIMBANG ('ADL) ================= */}
          <div className="clay-card-bright p-5 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b-2 border-slate-200/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-black text-sm shadow-sm">
                    2
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-slate-900">Tahap 2: Studio Dataset ('Adl)</h3>
                    <p className="text-[11px] font-semibold text-slate-500">Ajari Robot dengan Contoh Baru</p>
                  </div>
                </div>
                <button
                  onClick={handleResetDataset}
                  title="Mulai Ulang Dataset"
                  className="px-2.5 py-1 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold border border-slate-300 flex items-center gap-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              </div>

              {/* Data Balance Scale with Fun Colors */}
              <div className="mt-4 p-4 rounded-2xl bg-amber-50/70 border-2 border-amber-200">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-extrabold text-slate-800 flex items-center gap-1.5">
                    <Scale className="w-4 h-4 text-amber-600" />
                    Keseimbangan Data Latih:
                  </span>
                  <span className={`font-extrabold text-xs px-2.5 py-0.5 rounded-full ${
                    isBalancedEnough ? 'bg-emerald-200 text-emerald-900' : 'bg-amber-200 text-amber-900'
                  }`}>
                    {isBalancedEnough ? '✓ SUDAH SEIMBANG (ADIL)' : '⚠️ BELUM SEIMBANG (TIMPANG)'}
                  </span>
                </div>

                {/* Progressive Bar */}
                <div className="w-full h-5 bg-white rounded-full overflow-hidden flex border-2 border-slate-300 p-0.5 shadow-inner">
                  <div
                    style={{ width: `${percentA}%` }}
                    className="h-full bg-sky-500 rounded-l-full transition-all duration-300 flex items-center justify-center text-[10px] font-black text-white"
                  >
                    {percentA}%
                  </div>
                  <div
                    style={{ width: `${percentB}%` }}
                    className={`h-full rounded-r-full transition-all duration-300 flex items-center justify-center text-[10px] font-black text-white ${
                      isBalancedEnough ? 'bg-emerald-500' : 'bg-amber-500'
                    }`}
                  >
                    {percentB}%
                  </div>
                </div>

                {/* Legend */}
                <div className="grid grid-cols-2 gap-2 mt-3 pt-2 border-t border-amber-200/80 text-[11px] font-bold">
                  <div className="flex items-center gap-1.5 text-slate-700">
                    <div className="w-3 h-3 rounded-full bg-sky-500 shadow-sm" />
                    <span className="truncate">{currentCase.categoryA.name}:</span>
                    <span className="font-extrabold text-slate-900 font-mono">{baseCategoryACount} foto</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-800">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-sm" />
                    <span className="truncate">{currentCase.categoryB.name}:</span>
                    <span className="font-extrabold text-slate-900 font-mono">{totalBCount} foto</span>
                  </div>
                </div>
              </div>

              {/* Sample Catalog */}
              <div className="mt-4">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-extrabold text-slate-800">
                    Pilih Sampel Baru untuk Diajarkan:
                  </span>
                  <span className="text-[11px] font-black px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                    {addedSamples.length} / {currentCase.sampleBank.length} Ditambahkan
                  </span>
                </div>

                <div className="space-y-2">
                  {currentCase.sampleBank.map((sample) => {
                    const isAdded = addedSamples.includes(sample.id);
                    return (
                      <div
                        key={sample.id}
                        className={`p-2.5 rounded-2xl border-2 flex items-center justify-between gap-3 transition-all ${
                          isAdded
                            ? 'bg-emerald-50 border-emerald-300 shadow-sm'
                            : 'bg-white border-slate-200 hover:border-amber-400 hover:shadow-md'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className="text-2xl p-1 rounded-xl bg-slate-100 border border-slate-200 shrink-0">
                            {sample.emoji}
                          </span>
                          <div className="truncate">
                            <h5 className="text-xs font-black text-slate-900 truncate">{sample.title}</h5>
                            <p className="text-[11px] text-slate-500 truncate">{sample.feature}</p>
                          </div>
                        </div>
                        <div className="shrink-0">
                          {isAdded ? (
                            <span className="px-3 py-1 rounded-xl bg-emerald-100 text-emerald-800 text-xs font-black flex items-center gap-1 border border-emerald-300">
                              <Check className="w-3.5 h-3.5" /> Sudah Ada
                            </span>
                          ) : (
                            <button
                              disabled={isTraining}
                              onClick={() => handleAddSample(sample.id)}
                              className="btn-game-amber px-3 py-1.5 rounded-xl text-xs font-black flex items-center gap-1 cursor-pointer"
                            >
                              <Plus className="w-3.5 h-3.5" /> Masukkan
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Training Progress Banner */}
              {isTraining && (
                <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-sky-50 to-emerald-50 border-3 border-emerald-400 space-y-2 shadow-md animate-pulse">
                  <div className="flex justify-between text-xs font-black">
                    <span className="text-emerald-800 flex items-center gap-1.5">
                      🚀 Sedang Melatih Otak AI...
                    </span>
                    <span className="font-mono text-slate-900">Epoch {trainingEpoch}/20</span>
                  </div>
                  <div className="w-full h-3.5 bg-white rounded-full overflow-hidden border-2 border-slate-300">
                    <div
                      style={{ width: `${(trainingEpoch / 20) * 100}%` }}
                      className="h-full bg-gradient-to-r from-sky-500 to-emerald-500 transition-all duration-100"
                    />
                  </div>
                  <div className="flex justify-between text-[11px] font-mono font-bold text-slate-700 pt-1">
                    <span>Kesalahan (Loss): <strong className="text-rose-600">{trainingLoss}</strong></span>
                    <span>Tingkat Pintar (Akurasi): <strong className="text-emerald-700">{trainingAccuracy}%</strong></span>
                  </div>
                </div>
              )}
            </div>

            {/* Retrain Action Button */}
            <div className="mt-4 pt-3 border-t-2 border-slate-200/80">
              <button
                disabled={!isBalancedEnough || isTraining}
                onClick={handleRetrain}
                className={`w-full py-3.5 rounded-2xl text-xs sm:text-sm font-black flex items-center justify-center gap-2 transition-all ${
                  isBalancedEnough && !isTraining
                    ? 'btn-game-emerald cursor-pointer text-white text-base shadow-lg animate-pulse'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed border-2 border-slate-300'
                }`}
              >
                <Play className="w-4 h-4 fill-current" />
                <span>
                  {isRetrained
                    ? '✓ Robot Selesai Dilatih Ulang (Sukses!)'
                    : isTraining
                    ? `Melatih... (${trainingEpoch}/20)`
                    : isBalancedEnough
                    ? '🚀 Latih Ulang AI (Retrain Model Sekarang)'
                    : `+ Masukkan ${3 - addedSamples.length} Foto Lagi untuk Latih Ulang`}
                </span>
              </button>
            </div>
          </div>


          {/* ================= PANEL 3: VERIFIKASI TABAYYUN & SERTIFIKAT ================= */}
          <div className={`p-5 flex flex-col justify-between transition-all ${
            isRetrained ? 'clay-card-sky' : 'clay-card-bright opacity-85'
          }`}>
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b-2 border-slate-200/80">
                <div className="flex items-center gap-2.5">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-sm shadow-sm ${
                    isRetrained ? 'bg-sky-500 text-white' : 'bg-slate-200 text-slate-500'
                  }`}>
                    3
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-slate-900">Tahap 3: Verifikasi Tabayyun</h3>
                    <p className="text-[11px] font-semibold text-slate-500">Uji Ketahanan & Raih Lencana</p>
                  </div>
                </div>
                <span className={`text-[11px] font-black px-2.5 py-1 rounded-full ${
                  isRetrained ? 'bg-emerald-200 text-emerald-900' : 'bg-slate-200 text-slate-600'
                }`}>
                  {isRetrained ? 'TERVERIFIKASI ⭐' : 'TERKUNCI 🔒'}
                </span>
              </div>

              {/* Status Box */}
              {!isRetrained ? (
                <div className="mt-8 text-center p-6 rounded-2xl bg-slate-50 border-2 border-dashed border-slate-300 space-y-3">
                  <div className="text-4xl">🔒</div>
                  <h4 className="text-sm font-black text-slate-700">Terkunci Sementara</h4>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-xs mx-auto">
                    Ayo seimbangkan sampel di <strong>Tahap 2</strong> dan tekan tombol <strong>Latih Ulang AI</strong> untuk membuka tahap pembuktian & sertifikat!
                  </p>
                </div>
              ) : (
                <div className="mt-4 space-y-4">
                  {/* Fair Result Banner */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border-3 border-emerald-300 space-y-2 shadow-sm">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-black text-emerald-900 flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        Tebakan Baru AI yang Adil:
                      </span>
                      <span className="font-mono font-black text-emerald-800 bg-emerald-200 px-2 py-0.5 rounded-full">
                        99.2% Benar
                      </span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border-2 border-emerald-300 text-emerald-950 text-sm font-black">
                      {currentCase.fairResult.predictedCategory}
                    </div>
                    <p className="text-xs text-emerald-900 leading-relaxed font-medium">
                      {currentCase.fairResult.adabHighlight}
                    </p>
                  </div>

                  {/* Stress-Test Tabayyun */}
                  <div className="p-4 rounded-2xl bg-white border-2 border-slate-200 space-y-2.5 shadow-sm">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-black text-slate-900 flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-sky-500" />
                        Uji Ketahanan (Stress-Test Tabayyun):
                      </span>
                      <span className="text-[10px] font-bold text-slate-500">Kasus Sulit</span>
                    </div>

                    <div className="space-y-1.5">
                      {currentCase.stressTests.map((st) => (
                        <div
                          key={st.id}
                          className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-xs flex items-center justify-between gap-2"
                        >
                          <div className="min-w-0">
                            <span className="font-extrabold text-slate-800 block truncate">{st.title}</span>
                            <span className="text-[10px] text-slate-500 block truncate">{st.desc}</span>
                          </div>
                          <span className={`text-[10px] px-2 py-0.5 rounded-lg font-mono font-black shrink-0 ${
                            stressTested
                              ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                              : 'bg-slate-200 text-slate-600'
                          }`}>
                            {stressTested ? `${st.accuracy}% (Lolos)` : 'Belum Diuji'}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={handleStressTest}
                      className="w-full btn-game-sky py-2.5 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 mt-2 cursor-pointer"
                    >
                      <CheckCheck className="w-4 h-4" />
                      <span>{stressTested ? '✓ Seluruh Ujian Ekstrem Lolos!' : 'Jalankan Stress-Test Sekarang'}</span>
                    </button>
                  </div>

                  {/* Master Detective Badge */}
                  <div className="p-3.5 rounded-2xl bg-amber-100 border-2 border-amber-300 flex items-center gap-3 shadow-sm">
                    <div className="w-12 h-12 rounded-2xl bg-amber-400 flex items-center justify-center text-2xl shadow-[0_3px_0_0_#d97706] border-2 border-white shrink-0">
                      🏆
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-amber-950 flex items-center gap-1">
                        <span>Lencana: Master AI Detective</span>
                        <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-600" />
                      </h4>
                      <p className="text-[11px] text-amber-900 font-medium">
                        Model telah dibersihkan dari bias dan terbukti adil bagi semua!
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Certificate Button */}
            <div className="mt-4 pt-3 border-t-2 border-slate-200/80">
              <button
                disabled={!isRetrained}
                onClick={() => {
                  synth.playFanfare();
                  setActiveModal('certificate');
                }}
                className={`w-full py-3.5 rounded-2xl text-xs sm:text-sm font-black flex items-center justify-center gap-2 transition-all ${
                  isRetrained
                    ? 'btn-game-amber text-amber-950 cursor-pointer shadow-lg animate-bounce text-base'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed border-2 border-slate-300'
                }`}
              >
                <Award className="w-5 h-5 text-amber-950" />
                <span>📜 Buka & Cetak Sertifikat Digital Resmi</span>
              </button>
            </div>
          </div>

        </div>

        {/* Footer Adab Banner */}
        <div className="clay-card-bright p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600 bg-white">
          <div className="flex items-center gap-2 font-bold">
            <span className="text-emerald-700">4 Pilar Adab Digital Al Azhar:</span>
            <span>Siddiq (Jujur) · 'Adl (Adil) · Tabayyun (Cek Ulang) · Amanah (Tanggung Jawab)</span>
          </div>
          <div className="text-slate-500 text-[11px] font-semibold">
            © 2026 Al Azhar Tech · Media Pembelajaran Interaktif IFP Siswa SMP Fase D
          </div>
        </div>
      </main>


      {/* ================= MODAL 1: PANDUAN INVESTIGASI ================= */}
      {activeModal === 'guide' && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border-4 border-amber-300 max-w-2xl w-full rounded-3xl p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1.5 rounded-xl bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 pb-4 border-b-2 border-slate-200">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-2xl border-2 border-emerald-300">
                🧭
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900">Petualangan Detektif AI Al Azhar</h3>
                <p className="text-xs text-slate-500 font-semibold">Langkah Mudah Investigasi di Layar Sentuh IFP</p>
              </div>
            </div>

            <div className="space-y-4 my-5 text-sm text-slate-700">
              <div className="p-4 rounded-2xl bg-rose-50 border-2 border-rose-200">
                <h4 className="font-black text-rose-800 flex items-center gap-2 mb-1">
                  <span>1. Tahap Diagnosis (Temukan Kesalahan AI) 🔍</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Lihat foto pada Panel 1. Robot AI membuat tebakan yang keliru karena belum pernah diajarkan foto yang beragam.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border-2 border-amber-200">
                <h4 className="font-black text-amber-800 flex items-center gap-2 mb-1">
                  <span>2. Tahap Data Seimbang ('Adl) ⚖️</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Buka Panel 2. Tekan tombol <strong>+ Masukkan</strong> pada sampel yang kurang. Setelah seimbang (minimal 3 foto baru), tekan <strong>🚀 Latih Ulang AI</strong> untuk mendidik otak robot kembali!
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-sky-50 border-2 border-sky-200">
                <h4 className="font-black text-sky-800 flex items-center gap-2 mb-1">
                  <span>3. Tahap Verifikasi Tabayyun & Sertifikat 🏆</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Buka Panel 3. Uji ketahanan robot dengan menekan <strong>Stress-Test Tabayyun</strong>. Jika lolos, selamat! Anda berhak mencetak Sertifikat Detektif AI Resmi!
                </p>
              </div>
            </div>

            <div className="pt-4 border-t-2 border-slate-200 flex justify-end">
              <button
                onClick={() => { synth.playClick(); setActiveModal(null); }}
                className="btn-game-emerald px-6 py-2.5 rounded-2xl font-black text-sm"
              >
                Siap Berinvestigasi! 🚀
              </button>
            </div>
          </div>
        </div>
      )}


      {/* ================= MODAL 2: 4 PILAR ADAB ================= */}
      {activeModal === 'adab' && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border-4 border-amber-300 max-w-4xl w-full rounded-3xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3.5 pb-4 border-b-2 border-slate-200">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center text-2xl border-2 border-amber-300 shadow-sm shrink-0">
                📖
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900 tracking-tight">4 Pilar Adab Digital</h3>
                <p className="text-xs sm:text-sm text-slate-500 font-semibold">Pedoman Akhlak Mulia Muslim saat Mengembangkan Teknologi</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              {/* Pilar 1: Siddiq */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50/60 border-2 border-amber-200 shadow-sm flex flex-col justify-between space-y-3">
                <div className="flex items-center justify-between gap-3 pb-2 border-b border-amber-200/70">
                  <span className="text-amber-950 text-sm font-black tracking-tight">1. Siddiq (Kejujuran Data)</span>
                  <span className="shrink-0 whitespace-nowrap text-[11px] px-3 py-1 rounded-full bg-amber-200 text-amber-900 font-mono font-black border border-amber-300 shadow-xs">
                    QS. Al-Ahzab: 70
                  </span>
                </div>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">
                  Kita harus jujur mengumpulkan data asli. Jangan pernah memalsukan atau mengedit label demi kepentingan curang!
                </p>
              </div>

              {/* Pilar 2: 'Adl */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50/60 border-2 border-emerald-200 shadow-sm flex flex-col justify-between space-y-3">
                <div className="flex items-center justify-between gap-3 pb-2 border-b border-emerald-200/70">
                  <span className="text-emerald-950 text-sm font-black tracking-tight">2. 'Adl (Keadilan Bersama)</span>
                  <span className="shrink-0 whitespace-nowrap text-[11px] px-3 py-1 rounded-full bg-emerald-200 text-emerald-900 font-mono font-black border border-emerald-300 shadow-xs">
                    QS. An-Nahl: 90
                  </span>
                </div>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">
                  Dataset tidak boleh membeda-bedakan warna kulit, suku, atau wilayah. Semua ragam ciptaan Allah harus dihargai setara!
                </p>
              </div>

              {/* Pilar 3: Tabayyun */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-sky-50 to-blue-50/60 border-2 border-sky-200 shadow-sm flex flex-col justify-between space-y-3">
                <div className="flex items-center justify-between gap-3 pb-2 border-b border-sky-200/70">
                  <span className="text-sky-950 text-sm font-black tracking-tight">3. Tabayyun (Cek Kebenaran)</span>
                  <span className="shrink-0 whitespace-nowrap text-[11px] px-3 py-1 rounded-full bg-sky-200 text-sky-900 font-mono font-black border border-sky-300 shadow-xs">
                    QS. Al-Hujurat: 6
                  </span>
                </div>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">
                  Jangan langsung percaya 100% pada tebakan robot. Gunakan akal pikiran kita untuk menguji dan memverifikasi kebenarannya!
                </p>
              </div>

              {/* Pilar 4: Amanah */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50/60 border-2 border-purple-200 shadow-sm flex flex-col justify-between space-y-3">
                <div className="flex items-center justify-between gap-3 pb-2 border-b border-purple-200/70">
                  <span className="text-purple-950 text-sm font-black tracking-tight">4. Amanah (Tanggung Jawab)</span>
                  <span className="shrink-0 whitespace-nowrap text-[11px] px-3 py-1 rounded-full bg-purple-200 text-purple-900 font-mono font-black border border-purple-300 shadow-xs">
                    QS. Al-Anfal: 27
                  </span>
                </div>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">
                  Koding AI adalah amanah dari Allah. Program komputer harus dibuat untuk menolong sesama dan menjaga kelestarian alam semesta.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t-2 border-slate-200 flex justify-end">
              <button
                onClick={() => { synth.playClick(); setActiveModal(null); }}
                className="btn-game-amber px-6 py-2.5 rounded-2xl font-black text-sm text-amber-950 cursor-pointer shadow-md"
              >
                Pahami & Amalkan 🌟
              </button>
            </div>
          </div>
        </div>
      )}


      {/* ================= MODAL 3: KUIS REFLEKSI (5 SOAL) ================= */}
      {activeModal === 'quiz' && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border-4 border-sky-300 max-w-3xl w-full rounded-3xl p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1.5 rounded-xl bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 pb-4 border-b-2 border-slate-200">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-800 flex items-center justify-center text-2xl border-2 border-sky-300">
                ❓
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900">Kuis Refleksi Adab & Bias AI Ceria</h3>
                <p className="text-xs text-slate-500 font-semibold">5 Soal Interaktif · Nilai Minimal Lulus: 80 Poin</p>
              </div>
            </div>

            <div className="space-y-5 my-5 text-xs sm:text-sm">
              
              {/* Soal 1 */}
              <div className="p-4 rounded-2xl bg-slate-50 border-2 border-slate-200 space-y-2">
                <div className="flex justify-between items-center text-xs font-black">
                  <span className="text-sky-800">{QUIZ_QUESTIONS[0].title}</span>
                  <span className="text-slate-500">20 Poin</span>
                </div>
                <p className="font-extrabold text-slate-900">{QUIZ_QUESTIONS[0].question}</p>
                <div className="grid grid-cols-1 gap-1.5 pt-1">
                  {QUIZ_QUESTIONS[0].options?.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        synth.playClick();
                        setQuizAnswers((prev) => ({ ...prev, 1: idx }));
                      }}
                      className={`p-3 rounded-xl text-left font-bold border-2 transition-all cursor-pointer ${
                        quizAnswers[1] === idx
                          ? 'bg-sky-500 text-white border-sky-600 shadow-sm'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Soal 2 */}
              <div className="p-4 rounded-2xl bg-slate-50 border-2 border-slate-200 space-y-2">
                <div className="flex justify-between items-center text-xs font-black">
                  <span className="text-sky-800">{QUIZ_QUESTIONS[1].title}</span>
                  <span className="text-slate-500">20 Poin</span>
                </div>
                <p className="font-extrabold text-slate-900">{QUIZ_QUESTIONS[1].question}</p>
                <div className="space-y-1.5 pt-1 text-xs">
                  {QUIZ_QUESTIONS[1].pairs?.map((p, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between gap-3 font-semibold">
                      <span className="font-black text-amber-800">{p.term}</span>
                      <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                      <span className="text-slate-700 text-right">{p.match}</span>
                    </div>
                  ))}
                  <button
                    onClick={() => {
                      synth.playClick();
                      setQuizAnswers((prev) => ({ ...prev, 2: true }));
                    }}
                    className={`w-full py-2.5 rounded-xl font-black text-xs border-2 transition-all cursor-pointer ${
                      quizAnswers[2]
                        ? 'btn-game-emerald text-white'
                        : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    {quizAnswers[2] ? '✓ Pasangan Adab Telah Disetujui' : 'Sentuh untuk Menyetujui Pasangan Adab Ini'}
                  </button>
                </div>
              </div>

              {/* Soal 3 */}
              <div className="p-4 rounded-2xl bg-slate-50 border-2 border-slate-200 space-y-2">
                <div className="flex justify-between items-center text-xs font-black">
                  <span className="text-sky-800">{QUIZ_QUESTIONS[2].title}</span>
                  <span className="text-slate-500">20 Poin</span>
                </div>
                <p className="font-extrabold text-slate-900">{QUIZ_QUESTIONS[2].question}</p>
                <div className="grid grid-cols-1 gap-1.5 pt-1">
                  {QUIZ_QUESTIONS[2].options?.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        synth.playClick();
                        setQuizAnswers((prev) => ({ ...prev, 3: idx }));
                      }}
                      className={`p-3 rounded-xl text-left font-bold border-2 transition-all cursor-pointer ${
                        quizAnswers[3] === idx
                          ? 'bg-sky-500 text-white border-sky-600 shadow-sm'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Soal 4 */}
              <div className="p-4 rounded-2xl bg-slate-50 border-2 border-slate-200 space-y-2">
                <div className="flex justify-between items-center text-xs font-black">
                  <span className="text-sky-800">{QUIZ_QUESTIONS[3].title}</span>
                  <span className="text-slate-500">20 Poin</span>
                </div>
                <p className="font-extrabold text-slate-900">{QUIZ_QUESTIONS[3].question}</p>
                <div className="space-y-2 pt-1">
                  {QUIZ_QUESTIONS[3].scenarios?.map((sc, idx) => {
                    const currentAnswers = (quizAnswers[4] as Record<number, boolean>) || {};
                    const selected = currentAnswers[idx];
                    return (
                      <div key={idx} className="p-2.5 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                        <span className="text-slate-700 font-semibold">{sc.text}</span>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <button
                            onClick={() => {
                              synth.playClick();
                              setQuizAnswers((prev) => ({
                                ...prev,
                                4: { ...((prev[4] as Record<number, boolean>) || {}), [idx]: true }
                              }));
                            }}
                            className={`px-3 py-1 rounded-xl text-xs font-black border-2 transition-colors cursor-pointer ${
                              selected === true
                                ? 'bg-emerald-500 text-white border-emerald-600'
                                : 'bg-slate-100 text-slate-600 border-slate-200'
                            }`}
                          >
                            Baik / Etis
                          </button>
                          <button
                            onClick={() => {
                              synth.playClick();
                              setQuizAnswers((prev) => ({
                                ...prev,
                                4: { ...((prev[4] as Record<number, boolean>) || {}), [idx]: false }
                              }));
                            }}
                            className={`px-3 py-1 rounded-xl text-xs font-black border-2 transition-colors cursor-pointer ${
                              selected === false
                                ? 'bg-rose-500 text-white border-rose-600'
                                : 'bg-slate-100 text-slate-600 border-slate-200'
                            }`}
                          >
                            Ber-Bias
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Soal 5 */}
              <div className="p-4 rounded-2xl bg-slate-50 border-2 border-slate-200 space-y-2">
                <div className="flex justify-between items-center text-xs font-black">
                  <span className="text-sky-800">{QUIZ_QUESTIONS[4].title}</span>
                  <span className="text-slate-500">20 Poin</span>
                </div>
                <p className="font-extrabold text-slate-900">{QUIZ_QUESTIONS[4].question}</p>
                <div className="grid grid-cols-1 gap-1.5 pt-1">
                  {QUIZ_QUESTIONS[4].options?.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        synth.playClick();
                        setQuizAnswers((prev) => ({ ...prev, 5: idx }));
                      }}
                      className={`p-3 rounded-xl text-left font-bold border-2 transition-all cursor-pointer ${
                        quizAnswers[5] === idx
                          ? 'bg-sky-500 text-white border-sky-600 shadow-sm'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Score Display */}
            {quizSubmitted && (
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border-3 border-emerald-400 text-center space-y-2 mb-4 shadow-sm">
                <h4 className="text-sm font-black text-emerald-950">Hasil Evaluasi Kuis</h4>
                <div className="text-4xl font-black font-mono text-emerald-600">
                  {quizScore} / 100
                </div>
                <p className="text-xs font-extrabold text-emerald-900">
                  {quizScore >= 80
                    ? '🎉 Mumtaz! Hebat sekali, kamu menguasai pemahaman Data Latih & Adab AI!'
                    : 'Ayo coba telaah lagi 4 pilar adab sebelum mengulang kuis ya!'}
                </p>
              </div>
            )}

            <div className="pt-4 border-t-2 border-slate-200 flex justify-between items-center">
              <span className="text-xs font-bold text-slate-500">
                Terjawab: {Object.keys(quizAnswers).length} / 5 Soal
              </span>
              <button
                onClick={handleScoreQuiz}
                className="btn-game-sky px-6 py-2.5 rounded-2xl font-black text-sm cursor-pointer"
              >
                Kirim Jawaban & Hitung Skor 🎯
              </button>
            </div>
          </div>
        </div>
      )}


      {/* ================= MODAL 4: SERTIFIKAT DIGITAL CERIA & SIAP CETAK ================= */}
      {activeModal === 'certificate' && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 print-only-modal">
          <div className="bg-white border-4 border-amber-400 max-w-4xl w-full rounded-3xl p-4 sm:p-6 shadow-2xl relative max-h-[96vh] overflow-y-auto">
            
            {/* Modal Controls */}
            <div className="flex items-center justify-between pb-3 border-b-2 border-slate-200 no-print">
              <div className="flex items-center gap-2">
                <span className="text-amber-700 font-black text-xs sm:text-sm">
                  🎓 Pratinjau Sertifikat Digital A4 Landscape
                </span>
                <span className="text-slate-400">·</span>
                <span className="text-slate-500 text-xs font-bold">Siap Cetak / Print</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="btn-game-amber px-4 py-2 rounded-xl text-xs font-black flex items-center gap-1.5 cursor-pointer"
                >
                  <Printer className="w-4 h-4 text-amber-950" />
                  <span>Cetak Sertifikat</span>
                </button>
                <button
                  onClick={() => setActiveModal(null)}
                  className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:text-slate-900"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Student Name Live Input Bar */}
            <div className="my-3 p-3 bg-amber-50 rounded-2xl border-2 border-amber-200 flex items-center gap-3 no-print">
              <label className="text-xs text-amber-950 font-black whitespace-nowrap">
                ✍️ Ketik Nama Murid:
              </label>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Tuliskan nama lengkap siswa..."
                className="flex-1 bg-white border-2 border-amber-300 rounded-xl px-3 py-2 text-xs sm:text-sm font-bold text-slate-900 focus:outline-none focus:border-amber-500 shadow-sm"
              />
            </div>

            {/* ================= THE CERTIFICATE SHEET (A4 LANDSCAPE CERIA) ================= */}
            <div className="bg-gradient-to-br from-amber-50 via-white to-emerald-50 text-slate-800 p-6 sm:p-8 rounded-3xl border-8 border-amber-400 shadow-xl relative overflow-hidden select-text">
              
              {/* Golden Islamic Geometric Corners */}
              <div className="absolute top-2 left-2 w-14 h-14 border-t-4 border-l-4 border-amber-500 rounded-tl-xl" />
              <div className="absolute top-2 right-2 w-14 h-14 border-t-4 border-r-4 border-amber-500 rounded-tr-xl" />
              <div className="absolute bottom-2 left-2 w-14 h-14 border-b-4 border-l-4 border-amber-500 rounded-bl-xl" />
              <div className="absolute bottom-2 right-2 w-14 h-14 border-b-4 border-r-4 border-amber-500 rounded-br-xl" />

              {/* Watermark Backing */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                <BrainCircuit className="w-96 h-96 text-amber-500" />
              </div>

              {/* Certificate Header */}
              <div className="text-center relative z-10 space-y-1">
                <h1 className="text-2xl sm:text-3xl font-extrabold font-cinzel text-amber-800 tracking-wider">
                  SERTIFIKAT INVESTIGASI AI DETECTIVE
                </h1>
                <p className="text-xs text-slate-600 font-cinzel tracking-widest uppercase font-bold">
                  MASTER AI DETECTIVE: DATA LATIH & ADAB DIGITAL ISLAM
                </p>
              </div>

              {/* Certificate Body */}
              <div className="text-center my-6 relative z-10 space-y-3">
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                  Diberikan dengan penuh apresiasi dan kehormatan kepada:
                </p>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 font-cinzel border-b-4 border-amber-400 inline-block pb-1 px-8">
                  {studentName || 'Nama Murid'}
                </div>
                <p className="text-xs text-slate-700 max-w-xl mx-auto leading-relaxed pt-2 font-medium">
                  Telah berhasil menuntaskan misi investigasi ketimpangan dataset, menyeimbangkan data latih ('Adl), membersihkan model dari bias diskriminatif, dan membuktikan kehandalan model melalui verifikasi Tabayyun.
                </p>
              </div>

              {/* Achievement Badges & Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6 relative z-10 text-center font-bold">
                <div className="p-3 rounded-2xl bg-white border-2 border-emerald-200 shadow-sm">
                  <span className="text-[10px] text-slate-500 block uppercase">Misi Skenario</span>
                  <strong className="text-xs text-emerald-800 block truncate">{currentCase.title}</strong>
                </div>
                <div className="p-3 rounded-2xl bg-white border-2 border-sky-200 shadow-sm">
                  <span className="text-[10px] text-slate-500 block uppercase">Akurasi Model</span>
                  <strong className="text-xs text-sky-800 block font-mono">99.2% (Bebas Bias)</strong>
                </div>
                <div className="p-3 rounded-2xl bg-white border-2 border-amber-200 shadow-sm">
                  <span className="text-[10px] text-slate-500 block uppercase">Nilai Evaluasi</span>
                  <strong className="text-xs text-amber-800 block font-mono">{quizScore ? `${quizScore} (Mumtaz ⭐)` : '100 / 100'}</strong>
                </div>
                <div className="p-3 rounded-2xl bg-white border-2 border-purple-200 shadow-sm">
                  <span className="text-[10px] text-slate-500 block uppercase">Status Akhlak</span>
                  <strong className="text-xs text-purple-800 block">Lolos Tabayyun ✓</strong>
                </div>
              </div>

              {/* Signatures & Seal */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-5 border-t-2 border-amber-200 relative z-10 text-xs">
                {/* Token / Date */}
                <div className="text-left space-y-1">
                  <span className="text-[10px] font-mono font-bold text-slate-500 block">
                    ID Sertifikat: <strong className="text-slate-800">{certId}</strong>
                  </span>
                  <span className="text-[10px] text-slate-500 font-semibold block">
                    Terbit: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                </div>

                {/* Golden Seal Badge */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 via-yellow-400 to-amber-500 flex items-center justify-center p-1 shadow-md border-2 border-white">
                  <div className="w-full h-full rounded-full border-2 border-dashed border-amber-900 flex flex-col items-center justify-center text-amber-950 font-black text-[9px] text-center leading-tight">
                    <span>AI DETECTIVE</span>
                    <span className="text-[7px]">VERIFIED</span>
                  </div>
                </div>

                {/* Status Verified */}
                <div className="text-center sm:text-right space-y-1">
                  <div className="font-cinzel text-xs text-emerald-700 font-bold">
                    ✓ Terverifikasi Mandiri
                  </div>
                  <div className="text-[10px] text-slate-500 font-medium">
                    Sistem Pembelajaran AI Cerdas
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
