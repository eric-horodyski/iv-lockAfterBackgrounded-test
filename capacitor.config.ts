import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "io.ionic.vaultTest",
  appName: "Identity Vault Test",
  webDir: "dist",
  server: {
    androidScheme: "https",
  },
};

export default config;
