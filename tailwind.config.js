/** @type {import('tailwindcss').Config} */
export default {
  // =============================================
  // 1. المحتوى المراد معالجته
  // =============================================
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],

  // =============================================
  // 2. تمديد الإعدادات الأساسية
  // =============================================
  theme: {
    extend: {
      // ---------- الألوان ----------
      colors: {
        // الألوان الرئيسية (أخضر / أزرق مخضر)
        primary: {
          DEFAULT: '#0d9488', // teal-600
          50: '#ccfbf1',
          100: '#99f6e4',
          200: '#5eead4',
          300: '#2dd4bf',
          400: '#14b8a6',
          500: '#0d9488',
          600: '#0f766e',
          700: '#115e59',
          800: '#134e4a',
          900: '#042f2e',
        },
        secondary: {
          DEFAULT: '#0891b2', // cyan-600
          50: '#cffafe',
          100: '#a5f3fc',
          200: '#67e8f9',
          300: '#22d3ee',
          400: '#06b6d4',
          500: '#0891b2',
          600: '#0e7490',
          700: '#155e75',
          800: '#164e63',
          900: '#083344',
        },
        accent: {
          DEFAULT: '#f59e0b', // amber-500
          50: '#fef3c7',
          100: '#fde68a',
          200: '#fcd34d',
          300: '#fbbf24',
          400: '#f59e0b',
          500: '#d97706',
          600: '#b45309',
          700: '#92400e',
          800: '#78350f',
          900: '#451a03',
        },
        // ألوان محايدة (كلها داكنة)
        neutral: {
         50: '#f5f5f5',  // أبيض رمادي فاتح جداً
100: '#e5e5e5',
200: '#d4d4d4',
300: '#a3a3a3',
400: '#737373',
500: '#525252', // اللون الأصلي القديم أصبح في المنتصف
600: '#404040',
700: '#262626',
800: '#1a1a1a',
900: '#0a0a0a',
950: '#000000', // أسود خالص
        },
      },

      // ---------- الخطوط ----------
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },

      // ---------- المسافات ----------
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
      },

      // ---------- أحجام الخطوط ----------
      fontSize: {
        'xxs': '0.625rem', // 10px
        '7xl': '5rem',     // 80px
        '8xl': '6rem',     // 96px
      },

      // ---------- الزوايا ----------
      borderRadius: {
        xl2: '1.25rem',   // 20px
        '3xl': '2rem',    // 32px
        '4xl': '2.5rem',  // 40px
      },

      // ---------- الظلال (للوضع الداكن) ----------
      boxShadow: {
        soft: '0 10px 40px rgba(0, 0, 0, 0.3)',
        glow: '0 0 30px rgba(13, 148, 136, 0.2)',
        'card': '0 20px 60px rgba(0, 0, 0, 0.5)',
      },

      // ---------- الأنيميشن (بسيطة) ----------
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.6 },
        },
        slideInUp: {
          '0%': { transform: 'translateY(30px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        pulseSoft: 'pulseSoft 2s ease-in-out infinite',
        slideInUp: 'slideInUp 0.8s ease-out forwards',
      },

      // ---------- خلفيات التدرج ----------
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #0d9488 0%, #0891b2 100%)',
        'gradient-dark': 'linear-gradient(135deg, #042f2e 0%, #083344 100%)',
      },

      // ---------- شفافية الخلفية ----------
      backdropBlur: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
    },
  },

  // =============================================
  // 3. الإضافات (لا نحتاج أي plugins)
  // =============================================
  plugins: [],
};