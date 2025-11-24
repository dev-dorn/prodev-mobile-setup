# Mobile App 0x00

## Project Setup
1. Navigated to project directory: `cd ~/prodev-mobile-setup`
2. Initialized Expo Router project: `npx create-expo-app@latest .`
3. Opened `app/(tabs)/index.tsx` and updated the default text to "First App Created"
4. Started Expo development server: `npx expo start`
5. Scanned QR code on Expo Go app to test on physical device

## Reset Project
- Command run: `npm run reset-project`
- Observation: The project cache and build artifacts were cleared. Local changes to files may be reverted depending on the reset script.

## Notes
- No Android Studio or emulator needed; testing done via physical device and Expo Go.
