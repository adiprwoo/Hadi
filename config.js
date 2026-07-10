/**
 * ✨ EDIT THIS FILE to customize the birthday greeting! ✨
 *
 * This is the ONLY file you need to modify.
 * No need to touch HTML, CSS, or any other JavaScript files.
 *
 * AVAILABLE SECTION TYPES:
 *   "greeting"      → Opening greeting with recipient's name
 *   "announcement"  → Birthday announcement text
 *   "chatbox"       → Chat message with typing animation
 *   "ideas"         → Sequential text reveals, one by one
 *   "quote"         → Styled quote card with optional author
 *   "countdown"     → Animated 3-2-1 countdown
 *   "stars"         → Twinkling stars background
 *   "fireworks"     → Colorful firework sparks burst
 *   "balloons"      → Floating balloon animation
 *   "profile"       → Profile photo with birthday wish
 *   "confetti"      → Confetti burst animation
 *   "closing"       → Closing message with replay button
 *
 * HOW TO USE:
 *   REMOVE a section  → Delete its object from the sections array
 *   DUPLICATE          → Copy-paste any section object
 *   REORDER            → Move the section object up/down in the array
 *   EDIT TEXT          → Change the string values
 */

const CONFIG = {
  // ── Recipient Info ────────────────────────────────────────────
  name: "Hadi",
  photo: "https://adiprwoo.github.io/Hadi/img/hadi.jpg",       // Place your photo in the img/ folder
  music: "https://adiprwoo.github.io/Hadi/music/birthday.mp3",      // Place your music in the music/ folder

  // ── Theme Colors ──────────────────────────────────────────────
  // A toggle button lets the viewer switch between dark & light mode.
  colors: {
    primary: "#7fd37c",           // Main accent color (rose pink)
    accent: "#60a5fa",            // Secondary accent color (sky blue)
    dark: {
      background: "#0f172a",      // Slate 900
      text: "#f1f5f9",            // Slate 100
    },
    light: {
      background: "#fafaf9",      // Stone 50
      text: "#1e293b",            // Slate 800
    },
  },

  // ── Default Color Mode ────────────────────────────────────────
  // Options: "dark" or "light"
  defaultMode: "dark",

  // ── Sections ──────────────────────────────────────────────────
  // Add, remove, duplicate, or reorder as you wish!
  sections: [
    {
      type: "greeting",
      title: "Hai",
      subtitle: "Aku ada sesuatu nih",
    },
    {
      type: "countdown",
      from: 3,                    // Countdown from this number
      goText: "🎉",              // Text shown after countdown ends
    },
    {
      type: "announcement",
      text: "Hari ini ultah kamu!! :D",
    },
    {
      type: "chatbox",
      message:
        "HBD yaa!! Semoga tahun ini makin seru, makin bahagia, dan semua yang Hadi pengen kecapai semuaa.",
      buttonText: "Kirim",
    },
    {
      type: "ideas",
      lines: [
        "Aku sempet kepikiran kirim ucapan lewat WA.",
        "Tapi akhirnya aku batalin.",
        "Aku pengen bikin sesuatu yang lebih <strong>spesial</strong>.",
        "Karena,",
        "Kamu spesial mwehehe <span>:)</span>",
      ],
      bigLetters: "JADI",
    },
    {
      type: "quote",
      text: "Semakin kamu mensyukuri dan merayakan hidup, semakin banyak hal indah yang akan hadir untuk dirayakan.",
      author: "Oprah Winfrey",
    },
    {
      type: "stars",
      count: 40,
    },
    {
      type: "balloons",
      count: 25,
    },
    {
      type: "profile",
      wishTitle: "Happy Birthday!",
      wishText: "Moga panjang umur biar tiap tahun bisa traktirin aku wkwk 😆❤️ \n\nOh iya, semoga di hari spesialmu ini Hadi dapat menjadi pribadi yang lebih baik yaa.. 🥳❤️",
    },
    {
      type: "fireworks",
      count: 24,
    },
    {
      type: "confetti",
      count: 9,
    },
    {
      type: "closing",
      text: "Yeyy, kasih tau aku, Hadi suka engga",
      replayText: "Atau ketuk, untuk kirim jawabannya ke WhatsApp aku, ya!.",
    },
  ],
};
