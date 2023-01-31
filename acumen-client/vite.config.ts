import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dns from "dns";

dns.setDefaultResultOrder("verbatim");
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      target: "http://localhost:3001"
    }
  }
});

// http://acumen-dev-client-static.s3-website.us-east-2.amazonaws.com/
