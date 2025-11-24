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
