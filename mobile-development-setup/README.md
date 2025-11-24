# Mobile Development Setup

## Environment
- Node.js LTS: 20.x
- VS Code: 1.91.x
- Expo CLI: 6.3.12
- Expo Go installed on Android/iOS

## Steps
1. Installed Node.js and VS Code.
2. Installed Expo CLI using `npm install -g expo`.
3. Installed Expo Go on physical device.
4. Created new Expo project using `npx create-expo-app MyApp`.
5. Ran `npm start` and scanned QR code in Expo Go.

## Challenges
- Legacy `expo-cli` not compatible with Node >17. Resolved by using the new Expo CLI.
- Avoided installing Android Studio to reduce system load.
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
