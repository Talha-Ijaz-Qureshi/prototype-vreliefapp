import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.vrelief.app',
  appName: 'VRelief',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;