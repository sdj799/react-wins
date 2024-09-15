export function getEnv(key:string) {
    if (typeof window === 'undefined') {
      // 서버 환경
      return process.env[key];
    } else {
      // 클라이언트 환경
      return import.meta.env[`VITE_${key}`];
    }
  }